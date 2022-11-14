import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { useKeyboard } from "../hooks/useKayboard";
import { groundTexture } from "../images/textures";
import { useStore } from './../hooks/useStore';
import {useState} from 'react';



function Ground() {

    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -1, 0],
    }));

    const actions = useKeyboard();



    const [addCube] = useStore((state)=>[state.addCube]);

    groundTexture.magFilter = NearestFilter;
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;

    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref} receiveShadow
        
        onClick={(e)=>{
            console.log(e.point);
            const point = e.point;
            console.log(actions)
            if(true)
            {
                console.log("dirt")

                addCube(Math.floor(point.x),Math.floor(point.y)>-0.5 ? Math.floor(point.y) : -0.5,Math.floor(point.z),"dirt");
            }
           
        }}
        >

            <planeBufferGeometry attach="geometry" args={[100, 50]} />
            <meshStandardMaterial attach="material" map={
               groundTexture
            }
            />
        </mesh>
    );
}

export default Ground;