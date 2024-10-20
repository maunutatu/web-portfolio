import { useCallback, useState } from 'react'
import { Vector3 } from '@react-three/fiber'

export interface IUseCalculatePagesReturn {
    pages: number
    positions: Vector3
    calculatePages: (node: HTMLDivElement) => void
}

const isMobile = () => window.innerWidth <= 800

const positionX = () => (isMobile()) ? -0.6 : 0.8

const positionY = () => (isMobile()) ? -0.8 : -0.9

const positionZ = () => (isMobile()) ? -3 : 0

const useCalculateLayout = (): IUseCalculatePagesReturn => {
  const [pages, setPages] = useState<number>(0)
  const [positions, setPositions] = useState<Vector3>([positionX(), positionY(), positionZ()])

  const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]): void => {
    entries.forEach((entry: ResizeObserverEntry): void => {
      const { height } = entry.contentRect
      setPages((height / window.innerHeight) + 0.5)

      setPositions([positionX(), positionY(), positionZ()])
    })
  })

  const calculatePages = useCallback((node: HTMLDivElement) => {
    resizeObserver.observe(node)
  }, [])


  return { pages, positions, calculatePages }
}

export default useCalculateLayout