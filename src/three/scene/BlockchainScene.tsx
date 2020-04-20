import React, { useEffect, createRef } from 'react'
import * as THREE from 'three'
import { css } from "@emotion/core"

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import WhiteArrowDown from '../../../assets/arrow_down_white.svg'

const arrowStyle = css`
  width:100%;
  height: 50px;
  viewBox:0 0 20 10;
`

const createDefaultCamera = () => {
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.z = 2000
  return camera
}

const createDefaultRenderer = (mount: React.RefObject<HTMLInputElement>) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.autoClear = true
  if (mount.current) {
    mount.current.appendChild(renderer.domElement)
  }
  return renderer
}
const params = {
  exposure: 1,
  bloomStrength: 0.7,
  bloomThreshold: 0,
  bloomRadius: 0
}
const clock = new THREE.Clock()

const createBloomPass = () => {
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
  bloomPass.threshold = params.bloomThreshold
  bloomPass.strength = params.bloomStrength
  bloomPass.radius = params.bloomRadius
  return bloomPass
}

const BlockchainScene = () => {
  const mount = createRef<HTMLInputElement>()
  let mouseX = 0
  let mouseY = 0

  useEffect(() => {
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2
    const scene = new THREE.Scene()
    const camera = createDefaultCamera()
    const renderer = createDefaultRenderer(mount)

    // effect composer
    const composer = new EffectComposer(renderer)
    const renderScene = new RenderPass(scene, camera)
    const bloomPass = createBloomPass()
    composer.addPass(renderScene)
    composer.addPass(bloomPass)

    const geometry = new THREE.BoxBufferGeometry(100, 100, 100)
    const material = new THREE.MeshNormalMaterial()
    const group = new THREE.Group()

    for (let i = 0; i < 1000; i++) {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.x = Math.random() * 2000 - 1000
      mesh.position.y = Math.random() * 2000 - 1000
      mesh.position.z = Math.random() * 2000 - 1000

      mesh.rotation.x = Math.random() * 2 * Math.PI
      mesh.rotation.y = Math.random() * 2 * Math.PI

      mesh.matrixAutoUpdate = false
      mesh.updateMatrix()

      group.add(mesh)
    }
    group.position.setX(1000)
    scene.add(group)

    // listener
    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    const onDocumentMouseMove = event => {
      mouseX = (event.clientX - windowHalfX) * 10
      mouseY = (event.clientY - windowHalfY) * 10
    }
    mount.current!.addEventListener('mousemove', onDocumentMouseMove, false)
    window.addEventListener('resize', onWindowResize, false)

    // animation
    const render = () => {
      const time = Date.now() * 0.001

      const rx = Math.sin(time * 0.7) * 0.5
      const ry = Math.sin(time * 0.3) * 0.5
      const rz = Math.sin(time * 0.2) * 0.5

      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05

      camera.lookAt(scene.position)

      group.rotation.x = rx
      group.rotation.y = ry
      group.rotation.z = rz

      renderer.render(scene, camera)
      const delta = clock.getDelta()

      composer.render(delta)
    }
    const animate = () => {
      requestAnimationFrame(animate)
      render()
    }
    animate()
  }, [])
  return (
    <>
      <div className="absolute z-20 md:w-1/2 w-full h-full">
        <div className="px-8 py-12 max-w-lg mx-auto h-full">
          <div className="flex content-between flex-wrap h-full">
            <div className="w-full">
              <p className="py-3 font-bold text-4xl text-yellow-500">BLOCKCHAIN</p>
              <p className="text-2xl text-gray-500">enables data to be decentralized and transparency.</p>
              <p className="py-3 text-xl text-gray-500">Once the data is saved into the blockchain, no one can change it. All data on the chain will permanently stored and we can access them from wherever according to their own privilege.</p>
              <p className="py-3 text-xl text-gray-500">Thus, the storage can be materialized and have a value as a real asset.</p>
            </div>
            <div className="w-full">
              <p className="text-xl text-gray-500">In this system, the private data is encrypted before being stored. Your steps saved in the system will be recoded as if you actually proceed to your goal.</p>
              <a href="#3" className="">
                <WhiteArrowDown fill-opacity="0.1" css={arrowStyle} className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10" ref={mount} />
    </>
  )
}
export default BlockchainScene
