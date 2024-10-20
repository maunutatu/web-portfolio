/* eslint-disable react/no-unknown-property */
import { useRef, Suspense, RefObject, MutableRefObject } from 'react'
import './App.css'
import { Canvas, Vector3 } from '@react-three/fiber'
import Content from './Components/Content'
import { ScrollControls } from '@react-three/drei'
import TatuAnimations from './Components/TatuStanding'
import Loading from './Components/Loading'
import { AnimationAction, AnimationMixer } from 'three'
import useCalculateLayout from './Utils/useCalculateLayout'

export type TAnimationControls = {
  currentAnimationRef: MutableRefObject<string>,
  mixer: AnimationMixer,
  waveAnimation: AnimationAction,
  textAnimation: AnimationAction,
  kickAnimation: AnimationAction,
  standAnimation: AnimationAction
}

function App(): JSX.Element {
  const animationRef: RefObject<TAnimationControls> = useRef(null)
  const { pages, positions, calculatePages } = useCalculateLayout()

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
          <ambientLight/>
          <directionalLight
            position={[-5, 5, 5]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ScrollControls pages={pages} damping={0}>
            <group position={positions}>
              <Content contentCallback={calculatePages} animationRef={animationRef}/>
              <TatuAnimations ref={animationRef}/>
            </group>
            <mesh
              rotation={[-0.5 * Math.PI, 0, 0]}
              position={[0, -1, 0]}
            >
              <planeGeometry args={[10, 10, 1, 1]}/>
              <shadowMaterial opacity={0.2}/>
            </mesh>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </>
  )
}

export default App
