import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import Model from "./components/Model";
import { Bounds } from "./components/Bounds.tsx";
export default function Viewer() {
  const ref = useRef();
  console.log(OrbitControls);
  return (
    <Canvas camera={{ position: [-40, 80, 180], fov: 50 }} shadows>
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Bounds
          position={[200, 5, 10]}
          fit
          clip
          observe
          damping={6}
          margin={1.2}
        >
          <Center>
            <Model />
          </Center>
        </Bounds>
      </Suspense>
      <OrbitControls maxPolarAngle={1} minPolarAngle={1} ref={ref} autoRotate />
    </Canvas>
  );
}
