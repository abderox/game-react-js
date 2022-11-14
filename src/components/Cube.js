import { useBox } from '@react-three/cannon'
import React from 'react'
import { dirtTexture } from '../images/textures'
import { NearestFilter, RepeatWrapping } from "three";
import * as tetxures from "../images/textures";
import { useKeyboard } from '../hooks/useKayboard';
import { useStore } from '../hooks/useStore';

export const Cube = ({ position, texture }) => {


    const actions = useKeyboard();

    const [addCube,removeCube] = useStore((state)=>[state.addCube,state.removeCube]);

    const [ref] = useBox(() => ({
        mass: 1,
        type: 'static',
        position: position,

    }))

    const currentTexture  = tetxures[texture+"Texture"]
    
    currentTexture.magFilter = NearestFilter;
    currentTexture.wrapS = RepeatWrapping;
    currentTexture.wrapT = RepeatWrapping;

    currentTexture.repeat.set(1, 1);

    return ( 
        <mesh ref={ref} castShadow receiveShadow
        onClick={(e)=>{
            e.stopPropagation();
            console.log(e.faceIndex/2);
            const point = e.point;
            console.log(actions)

                
            
        }}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" map={
                currentTexture
            } />
        </mesh>
    )



}