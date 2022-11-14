import { useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { glassTexture, woodTexture } from '../images/textures';
import { NearestFilter, RepeatWrapping, Vector3 } from "three";
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {useKeyboard} from '../hooks/useKayboard';



export const Player = () => {

    const actions = useKeyboard();

    const pos  = useRef([0,2,0]);
    const vel = useRef([0,0,0]);
    

    const { camera } = useThree();
    const [ref,api] = useSphere(()=>({
        mass:2,
        type: 'Dynamic',
        position: [0, 0, 0],
        args: 1,
        onCollide: (e)=>{

            console.log(e.contact.impactVelocity);
            if(e.contact.impactVelocity>0.5)
            {
                console.log("dead");
            }


        }
    }))

   




    woodTexture.magFilter = NearestFilter;


useEffect(()=>{
    api.velocity.subscribe((v)=>(vel.current = v));
    api.position.subscribe((p)=>(pos.current = p));
},[api.velocity,api.position])



useFrame(()=>{
   camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
   const direction = new Vector3()
    const frontVector = new Vector3(0,0,
        (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0)
    )
    const sideVector = new Vector3(
        (actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0),
        0,
        0
    )
    direction.subVectors(frontVector,sideVector).normalize().multiplyScalar(1).applyEuler(camera.rotation)

   if(actions.jump && Math.abs(vel.current[1].toFixed(2))<0.05) {
         api.velocity.set(vel.current[0], 4, vel.current[2]);
   }
    
   if(actions.moveForward || actions.moveBackward || actions.moveLeft || actions.moveRight) {
       api.velocity.set(direction.x, vel.current[1], direction.z);
   }
    else {
        if(actions.jump && Math.abs(vel.current[1].toFixed(2))<0.05) {
            api.velocity.set(vel.current[0], 4, vel.current[2]);
      }
        else {
            api.velocity.set(0, vel.current[1], 0);
        }
    }

  
})





    return (
        <>
        <mesh ref={ref} castShadow>
            <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial attach="material" map={
                // playerTexture
                woodTexture
            } />
        </mesh>
    
        </>

    


    )
   
}
