import React, { useEffect, createRef } from 'react'
import * as THREE from 'three'
import Img from 'gatsby-image'
import { css } from "@emotion/core"
import Twitter from "../../../assets/twitter.svg"
import Facebook from '../../../assets/facebook.svg'
import Instagram from '../../../assets/instagram.svg'
import Linkedin from '../../../assets/linkedin.svg'
import Youtube from '../../../assets/youtube.svg'
import GitHub from '../../../assets/github.svg'
import Qiita from '../../../assets/qiita.svg'
import Speakerdeck from '../../../assets/speakerdeck.svg'

const profileFrame = css`
  display: inline-block;
  position: relative;
  overflow: hidden; /* 不要部分を消す */
  padding: 6px; /* 6px だけは写真からはみ出す */
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 97px;
    height: 50px;
    background: #fff; /* 背景色 */
    transform: rotate(-30deg);
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 30;
    width: 97px;
    height: 50px;
    background: #fff; /* 背景色 */
    transform: rotate(-30deg);
  }

  &:before {
    box-shadow: 0 10px 8px -12px rgba(0, 0, 0, 0.8);
    top: -24px;
    bottom: auto;
    right: auto;
    left: -26px;
  }
  &:after {
    box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.7);
    top: auto;
    bottom: -22px;
    right: -25px;
    left: auto;
  }
`

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

const ProfileScene = (props) => {
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
          <div className="w-1/3 p-2 h-48">
          </div>
          <div className="w-1/3 pt-48 h-48">
            <Img fixed={props.images} css={profileFrame} className="bg-no-repeat content-center bg-gray-400 w-24 h-24" />
          </div>
          <div className="w-1/3 p-2 h-48">
          </div>
        </div>
        <div className="pt-48" />
        <div className="pt-12" />
        <div className="flex content-center flex-wrap h-48 pt-48">
          <div className="w-1/12 p-2" />
          <div className="w-1/12 p-2" />
          <div className="w-1/12 p-2">
            <Linkedin />
          </div>
          <div className="w-1/12 p-2">
            <Facebook />
          </div>
          <div className="w-1/12 p-2">
            <Twitter />
          </div>
          <div className="w-1/12 p-2">
            <Youtube />
          </div>
          <div className="w-1/12 p-2">
            <Instagram />
          </div>
          <div className="w-1/12 p-2">
            <GitHub />
          </div>
          <div className="w-1/12 p-2">
            <Qiita />
          </div>
          <div className="w-1/12 p-2">
            <Speakerdeck />
          </div>
          <div className="w-1/12 p-2" />
          <div className="w-1/12 p-2" />
        </div>
      </div>

      <div className="z-10" ref={mount} />
    </>
  )
}
export default ProfileScene
