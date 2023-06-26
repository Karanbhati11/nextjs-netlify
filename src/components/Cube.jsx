import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export function Model(props) {
  const { nodes, materials } = useGLTF("/cube.glb");
  
  const cubeRef = useRef();
  useFrame((state,delta)=>{
    // console.log(cubeRef)
    cubeRef.current.rotation.y += delta;
  })

  return (
    <group {...props} dispose={null} ref={cubeRef}>
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials["Image ONE"]}
      />
      <mesh
        geometry={nodes.Cube_2.geometry}
        material={materials["Image TWO"]}
      />
      <mesh
        geometry={nodes.Cube_3.geometry}
        material={materials["Image THREE"]}
      />
      <mesh
        geometry={nodes.Cube_4.geometry}
        material={materials["Image FOUR"]}
      />
      <mesh
        geometry={nodes.Cube_5.geometry}
        material={materials["Image FIVE"]}
      />
      <mesh
        geometry={nodes.Cube_6.geometry}
        material={materials["Image SIX"]}
      />
    </group>
  );
}

useGLTF.preload("/cube.glb");
