/* eslint-disable react/no-unknown-property */
import { useRef, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Content from './Components/Content'
import { ScrollControls } from '@react-three/drei'
import TatuAnimations from './Components/TatuStanding'
import Loading from './Components/Loading'

function App(): JSX.Element {

  const pages = (): number => {
    if (window.innerHeight <= 844) {
      return (-0.0062146892655 * window.innerHeight + 14.2451977)
    } else if (window.innerHeight <= 1100) {
      return 8.5
    } else {
      return 7.5
    }
  }

  const positionX = (): number => {
    if (window.innerWidth <= 800) {
      return -0.6
    } else {
      return 0.8
    }
  }

  const positionY = (): number => {
    if (window.innerWidth <= 800) {
      return -0.8
    } else {
      return -0.9
    }
  }

  const positionZ = (): number => {
    if (window.innerWidth <= 800) {
      return -3
    } else {
      return 0
    }
  }

  const animationRef: React.MutableRefObject<undefined> = useRef()

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
          <ScrollControls pages={pages()} damping={0}>
            <group position={[positionX(), positionY(), positionZ()]}>
              <Content animationRef={animationRef}/>
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
