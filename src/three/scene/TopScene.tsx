import React, { useEffect, createRef } from 'react'
import * as THREE from 'three'
import { css } from "@emotion/core"

import ArrowDown from '../../../assets/arrow_down.svg'

const arrowStyle = css`
  width:100%;
  height: 50px;
  viewBox:0 0 20 10;
`

const createDefaultCamera = () => {
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 400
  return camera
}

const createDefaultRenderer = (mount: React.RefObject<HTMLInputElement>) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.autoClear = false
  renderer.setClearColor(0x000000, 0.0)
  if (mount.current) {
    mount.current.appendChild(renderer.domElement)
  }
  return renderer
}

const createOuterIcosahedron = () => {
  const geometry = new THREE.IcosahedronGeometry(7, 1)
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.scale.x = 16
  mesh.scale.y = 16
  mesh.scale.z = 16
  return mesh
}

const createIcosahedron = () => {
  const geometry = new THREE.IcosahedronGeometry(3, 1)
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.scale.x = 16
  mesh.scale.y = 16
  mesh.scale.z = 16
  return mesh
}

const createParticles = () => {
  const particles = new THREE.Object3D()
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true
  })
  const geometry = new THREE.TetrahedronGeometry(2, 0)
  for (let i = 0; i < 1000; i++) {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()
    mesh.position.multiplyScalar(90 + Math.random() * 700)
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
    particles.add(mesh)
  }
  return particles
}

const defaultAminatin = (object: THREE.Object3D, scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => {
  const animate = () => {
    requestAnimationFrame(animate)
    const time = Date.now() * 0.001
    object.rotation.y = 0.25 * time
    renderer.render(scene, camera)
  }
  animate()
}
const TopScene = () => {
  const mount = createRef<HTMLInputElement>()
  useEffect(() => {
    // scene
    const scene = new THREE.Scene()

    // camera
    const camera = createDefaultCamera()

    // renderer
    const renderer = createDefaultRenderer(mount)

    // object
    const object = new THREE.Object3D()
    const outerIcosahedron = createOuterIcosahedron()
    object.add(outerIcosahedron)
    const icosahedron = createIcosahedron()
    object.add(icosahedron)
    const particles = createParticles()
    object.add(particles)
    object.position.setX(-100)
    scene.add(object)

    // ambient light
    const ambientLight = new THREE.AmbientLight(0x999999)
    scene.add(ambientLight)

    // lights
    const lights = []
    lights[0] = new THREE.DirectionalLight(0xffffff, 1)
    lights[0].position.set(1, 0, 0)
    lights[1] = new THREE.DirectionalLight(0x11e8bb, 1)
    lights[1].position.set(0.75, 1, 0.5)
    lights[2] = new THREE.DirectionalLight(0x8200c9, 1)
    lights[2].position.set(-0.75, -1, 0.5)
    scene.add(lights[0])
    scene.add(lights[1])
    scene.add(lights[2])

    // animation
    defaultAminatin(icosahedron, scene, camera, renderer)
    defaultAminatin(outerIcosahedron, scene, camera, renderer)
    defaultAminatin(particles, scene, camera, renderer)

    // listener
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onWindowResize)
  }, [])
  return (
    <>
      <div className="absolute z-20 w-full h-full">
        <div className="px-8 py-12 max-w-lg mx-auto h-full">
          <div className="flex content-between flex-wrap h-full">
            <div className="w-full">
              <p className="py-3 font-bold text-2xl md:text-3xl text-purple-300">Another Life by Virtual Story</p>
              <p className="text-xl text-gray-500">What if we can live in another story as if it is real? This system provides not only the virtual experience but also the second real story.</p>
            </div>
            <div className="w-full">
              <p className="py-3 font-bold text-2xl text-purple-300">SHUMPEI KOIKE</p>
              <p className="text-xl text-gray-500">Software Developer</p>
              <p className="text-xl text-gray-500">Researcher for Digital World</p>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex flex-wrap h-full">
            <div className="w-7/12 h-full" />
            <div className="w-5/12 h-full">
              <p className="font-bold text-6xl text-purple-300 pt-48">SHUMPEI KOIKE</p>
              <p className="text-2xl text-gray-500">Software Developer</p>
              <p className="text-2xl text-gray-500">Researcher for Digital World</p>
              <a href="#2" className="max-w-md mx-auto">
                <ArrowDown fill-opacity="0.5" css={arrowStyle} className="mt-48" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10" ref={mount} />
    </>
  )
}
export default TopScene
