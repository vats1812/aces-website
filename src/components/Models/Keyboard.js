/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BlackCube (https://sketchfab.com/blackcube4)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/logitech-mechanical-gaming-keyboard-c775d45baf854606931584404d7b9109
title: Logitech mechanical gaming keyboard
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Keyboard({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Keyboard/keyboard.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 3070.92, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[100, 100, 100]} />
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Tastatur_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
            <mesh geometry={nodes.Tastatur_Tastatur_Untergrund_0.geometry} material={materials.Tastatur_Untergrund} />
            <mesh geometry={nodes.Tastatur_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} />
            <mesh geometry={nodes['Tastatur_Tastatur_F����chen_0'].geometry} material={materials.Tastatur_Fchen} />
          </group>
          <group rotation={[-1.48, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Tasten_Kappen_Tasten_0.geometry} material={materials.Tasten} />
            <mesh geometry={nodes.Tasten_Kappen_Tasten_Emission_0.geometry} material={materials.Tasten_Emission} />
          </group>
          <group rotation={[-1.48, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Tasten_Tasten_2_0.geometry} material={materials.Tasten_2} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Keyboard/keyboard.gltf')
