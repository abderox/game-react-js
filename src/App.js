import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Ground from './components/Gound';
import { Player } from './components/Player';
import FPV from './components/FPV';
import { Cubes } from './components/cubes';



function App() {
  return (
    <>
      <Canvas>
        <Sky
          sunPosition={[100, 100, 100]} // Sun position normal (defaults to inclination and azimuth if not set)

        />
          <ambientLight intensity={0.5} />
          <FPV/>
          <Physics>
           <Ground/>
           <Player/>
           <Cubes/>
          </Physics>
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
          fontSize: "5rem",
          fontWeight: 'lighter'
        }}
      >
        <div>
          <div>+</div>
        </div>
      </div>
    </>
  );
}

export default App;
