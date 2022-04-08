import React, { useRef } from "react";
import {
  useGLTF,
  useAnimations,
  Cone,
  GradientTexture,
} from "@react-three/drei";
import { useEffect } from "react";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mt-rainier-raised.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  useEffect(() => {
    actions?.move.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="GOOGLE_SAT_WM"
          position={[2067.86, 0, -1239.92]}
          scale={[88055.45, 1, 88055.45]}
        />
        <group
          name="move"
          position={[2.53, 8.66, -8.73]}
          rotation={[0.92, 0.25, -1.24]}
          scale={[0.53, 0.53, 0.53]}
        >
          <mesh
            name="move_1"
            castShadow
            receiveShadow
            geometry={nodes.move_1.geometry}
            material={materials.goldmesh}
          />
          <mesh
            name="move_2"
            castShadow
            receiveShadow
            geometry={nodes.move_2.geometry}
            material={materials.solararray}
          />
          <mesh
            name="move_3"
            castShadow
            receiveShadow
            geometry={nodes.move_3.geometry}
            material={materials.Al}
          />
          <mesh
            name="move_4"
            castShadow
            receiveShadow
            geometry={nodes.move_4.geometry}
            material={materials.CANNISTER}
          />
          <mesh
            name="move_5"
            castShadow
            receiveShadow
            geometry={nodes.move_5.geometry}
            material={materials["CARBON FIBER"]}
          />
          <mesh
            name="move_6"
            castShadow
            receiveShadow
            geometry={nodes.move_6.geometry}
            material={materials["SOLAR ARRAY HINGE"]}
          />
          <mesh
            name="move_7"
            castShadow
            receiveShadow
            geometry={nodes.move_7.geometry}
            material={materials.Tapes}
          />
          <mesh
            name="move_8"
            castShadow
            receiveShadow
            geometry={nodes.move_8.geometry}
            material={materials.Ultem}
          />
          <mesh
            name="move_9"
            castShadow
            receiveShadow
            geometry={nodes.move_9.geometry}
            material={materials.Copper}
          />
          <mesh
            name="move_10"
            castShadow
            receiveShadow
            geometry={nodes.move_10.geometry}
            material={materials.Subreflector}
          />
          <Cone
            args={[2, 20]}
            position={[0, 0, 12]}
            rotation={[-1.52, 1.61, -0.06]}
          >
            <meshBasicMaterial opacity={0.9} transparent>
              {" "}
              <GradientTexture
                stops={[0, 0.6, 1]} // As many stops as you want
                colors={["aqua", "aqua", "transparent"]} // Colors need to match the number of stops
                size={1024}
              />
            </meshBasicMaterial>
          </Cone>
        </group>
        <group
          name="EXPORT_GOOGLE_SAT_WM"
          position={[1.18, 0.64, 0.06]}
          scale={0.2}
        >
          <mesh
            name="EXPORT_GOOGLE_SAT_WM_1"
            castShadow
            receiveShadow
            geometry={nodes.EXPORT_GOOGLE_SAT_WM_1.geometry}
            material={materials.rastMat}
          />
          <mesh
            name="EXPORT_GOOGLE_SAT_WM_2"
            castShadow
            receiveShadow
            geometry={nodes.EXPORT_GOOGLE_SAT_WM_2.geometry}
            material={materials.earthSides}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mt-rainier-raised.glb");
