import React, { useEffect, createRef } from 'react'
import * as THREE from 'three'

const createDefaultCamera = () => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight / 4), 0.1, 10000)
  camera.position.z = 5
  return camera
}

const createDefaultRenderer = (mount: React.RefObject<HTMLInputElement>) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight / 4)
  renderer.autoClear = true
  if (mount.current) {
    mount.current.appendChild(renderer.domElement)
  }
  return renderer
}

const BaseScene = () => {
  const mount = createRef<HTMLInputElement>()
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = createDefaultCamera()
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    const renderer = createDefaultRenderer(mount)
    renderer.render(scene, camera)
  }, [])
  return <div ref={mount} />
}
export default BaseScene
