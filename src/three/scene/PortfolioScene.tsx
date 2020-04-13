import React, { useEffect, createRef } from 'react'
import * as THREE from 'three'
import Img from 'gatsby-image'
import { css } from "@emotion/core"

const clock = new THREE.Clock()
const createDefaultCamera = () => {
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 100
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

const PortfolioScene = (props) => {

  const mount = createRef<HTMLInputElement>()
  useEffect(() => {
    // scene
    const scene = new THREE.Scene()

    // camera
    const camera = createDefaultCamera()

    // renderer
    const renderer = createDefaultRenderer(mount)

    const sphere = new THREE.SphereBufferGeometry(0.5, 16, 8)

    // lights
    const light1 = new THREE.PointLight(0xff0040, 2, 50)
    light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })))
    scene.add(light1)
    const light2 = new THREE.PointLight(0x0040ff, 2, 50)
    light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff })))
    scene.add(light2)
    const light3 = new THREE.PointLight(0x80ff80, 2, 50)
    light3.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 })))
    scene.add(light3)
    const light4 = new THREE.PointLight(0xffaa00, 2, 50)
    light4.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 })))
    scene.add(light4)

    // animation
    const render = () => {
      const time = Date.now() * 0.0005
      const delta = clock.getDelta()

      light1.position.x = Math.sin(time * 0.7) * 30
      light1.position.y = Math.cos(time * 0.5) * 40
      light1.position.z = Math.cos(time * 0.3) * 30

      light2.position.x = Math.cos(time * 0.3) * 30
      light2.position.y = Math.sin(time * 0.5) * 40
      light2.position.z = Math.sin(time * 0.7) * 30

      light3.position.x = Math.sin(time * 0.7) * 30
      light3.position.y = Math.cos(time * 0.3) * 40
      light3.position.z = Math.sin(time * 0.5) * 30

      light4.position.x = Math.sin(time * 0.3) * 30
      light4.position.y = Math.cos(time * 0.7) * 40
      light4.position.z = Math.sin(time * 0.5) * 30

      renderer.render(scene, camera)
    }
    const animate = () => {
      requestAnimationFrame(animate)
      render()
    }
    animate()
  }, [])
  return (
    <>
      <div className="absolute z-20 w-full h-full">
        <div className="flex content-center flex-wrap h-48">
          <div className="w-1/2 p-2 h-48 max-w-md mx-auto">
            <iframe id="ytplayer" type="text/html" width="640" height="360"
              src="https://www.youtube.com/embed/WlkWTye4mfI"
              frameborder="0"></iframe>
            <div>
              <p className="text-2xl">AWS Best Architecture 2018</p>
            </div>
          </div>
          <div className="w-1/2 p-2 h-48 max-w-md mx-auto">
            <Img fixed={props.images} className="bg-no-repeat content-center bg-gray-400 w-24 h-24" />
            <div>
              <p className="text-2xl">Published Book</p>
            </div>
          </div>


        </div>
      </div>

      <div className="z-10" ref={mount} />
    </>
  )
}
export default PortfolioScene
