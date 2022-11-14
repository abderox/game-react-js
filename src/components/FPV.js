import React from 'react'
import { useThree } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';

function FPV() {

    const  {camera, gl} = useThree();


  return (
   <PointerLockControls
    camera={camera}
   args={[camera, gl.domElement]}
    />
  )
}

export default FPV