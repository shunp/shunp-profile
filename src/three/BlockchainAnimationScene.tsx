import React, { useEffect, createRef } from 'react'
import { css } from '@emotion/core'
import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

const params = {
  exposure: 1,
  bloomStrength: 1.5,
  bloomThreshold: 0,
  bloomRadius: 0
}
const clock = new THREE.Clock()

const createDefaultCamera = () => {
  const fov = 40
  const aspect = window.innerWidth / (window.innerHeight / 4)
  const near = 0.1
  const far = 100
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(-5, 2.5, -3.5)
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

const createOrbitControls = (camera: THREE.Camera, renderer: THREE.WebGLRenderer) => {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.maxPolarAngle = Math.PI * 0.5
  controls.minDistance = 1
  controls.maxDistance = 10
}

const createBloomPass = () => {
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
  bloomPass.threshold = params.bloomThreshold
  bloomPass.strength = params.bloomStrength
  bloomPass.radius = params.bloomRadius
  return bloomPass
}

const createBox = (x: number, y: number, z: number) => {
  const geometry = new THREE.BoxGeometry(x, y, z)
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}

const BlockchainAnimationScene = () => {
  const mount = createRef<HTMLInputElement>()
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = createDefaultCamera()
    const renderer = createDefaultRenderer(mount)
    const controls = createOrbitControls(camera, renderer)

    // light
    scene.add(new THREE.AmbientLight(0x404040))
    const pointLight = new THREE.PointLight(0xffffff, 1)
    camera.add(pointLight)

    // effect composer
    const composer = new EffectComposer(renderer)
    const renderScene = new RenderPass(scene, camera)
    const bloomPass = createBloomPass()
    composer.addPass(renderScene)
    composer.addPass(bloomPass)

    // box
    const box1 = createBox(0.6, 0.6, 0.6)
    box1.position.set(0, 0, -0.9)

    const box2 = createBox(0.6, 0.6, 0.6)
    box2.position.set(0, 0, 0)

    const box3 = createBox(0.6, 0.6, 0.6)
    box3.position.set(0, 0, 0.9)

    const box4 = createBox(0.6, 0.6, 0.6)
    box4.position.set(0, 0, 1.8)

    // tween
    const moveBox1 = new TWEEN.Tween(box1.position)
      .to({ z: '-0.3' }, 1000)
      .easing(TWEEN.Easing.Linear.None)
      .onStart(obj => {
        scene.add(box1)
      })
      .delay(500)
    const moveBox2 = new TWEEN.Tween(box2.position)
      .to({ z: '-0.3' }, 1000)
      .easing(TWEEN.Easing.Linear.None)
      .onStart(obj => {
        scene.add(box2)
      })
      .delay(500)
    const moveBox3 = new TWEEN.Tween(box3.position)
      .to({ z: '-0.3' }, 1000)
      .easing(TWEEN.Easing.Linear.None)
      .onStart(obj => {
        scene.add(box3)
      })
      .delay(500)
    const moveBox4 = new TWEEN.Tween(box4.position)
      .to({ z: '-0.3' }, 1000)
      .easing(TWEEN.Easing.Linear.None)
      .onStart(obj => {
        scene.add(box4)
      })
      .delay(500)
    const rotationBox1 = new TWEEN.Tween(box1.rotation)
      .to({ z: `-${Math.PI / 2}` }, 300)
      .easing(TWEEN.Easing.Linear.None)
      .delay(500)
    const rotationBox2 = new TWEEN.Tween(box2.rotation)
      .to({ z: `-${Math.PI / 2}` }, 300)
      .easing(TWEEN.Easing.Linear.None)
      .delay(500)
    const rotationBox3 = new TWEEN.Tween(box3.rotation)
      .to({ z: `-${Math.PI / 2}` }, 300)
      .easing(TWEEN.Easing.Linear.None)
      .delay(500)
    const rotationBox4 = new TWEEN.Tween(box4.rotation)
      .to({ z: `-${Math.PI / 2}` }, 300)
      .easing(TWEEN.Easing.Linear.None)
      .delay(500)
    const removeBox = new TWEEN.Tween(box4).onComplete(obj => {
      scene.remove(box1)
      scene.remove(box2)
      scene.remove(box3)
      scene.remove(box4)
    })

    moveBox1.chain(rotationBox1)
    rotationBox1.chain(moveBox2)
    moveBox2.chain(rotationBox2)
    rotationBox2.chain(moveBox3)
    moveBox3.chain(rotationBox3)
    rotationBox3.chain(moveBox4)
    moveBox4.chain(rotationBox4)
    rotationBox4.chain(removeBox)
    removeBox.chain(moveBox1)
    moveBox1.start()

    // TODO: let mixer: THREE.AnimationMixer
    const stats = Stats()
    function animate() {
      requestAnimationFrame(animate)
      const delta = clock.getDelta()
      // TODO: mixer.update(delta)
      stats.update()
      composer.render(delta)
      TWEEN.update()
    }

    animate()
  }, [])
  return <div css={css``} ref={mount} />
}
export default BlockchainAnimationScene
