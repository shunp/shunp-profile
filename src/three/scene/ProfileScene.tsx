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

    // listener
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onWindowResize)

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
        <div className="px-8 py-12 max-w-lg mx-auto h-full">
          <div className="flex content-between flex-wrap h-full">
            <div className="w-full">
              <div className="py-3">
                <Img fluid={props.images} css={profileFrame} className="bg-no-repeat content-center w-full h-48" />
              </div>
              <p className="md:py-3 font-bold text-2xl text-gray-600">Shumpei Koike / 小池 駿平</p>
              <p className="py-3 font-bold text-lg text-gray-600">Software developer </p>
              <p className="text-gray-500">After graduating from Tokyo University of Science, started working in Simplex.Inc and developed some financial services, such as DMMBitcoin, and TaoTao(YahooJapan). He got the fastest promotion in the history of the company, and became CoE in the dev section. In 2018, a system he designed as a development lead was awarded by Amazon as the best architecture, which was first Japanese in the financial industry. After being self-employed, he's been working as a freelance developer and digging into his vision to realize the system above, traveling around the world.</p>
            </div>
            <div className="w-full">
              <div className="flex content-center flex-wrap pt-3">
                <a className="w-1/4 p-2" target="_blank" href="https://www.linkedin.com/in/%E9%A7%BF%E5%B9%B3-%E5%B0%8F%E6%B1%A0-24aa4a161/?locale=en_US">
                  <Linkedin className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://www.facebook.com/shunpei.koike.9">
                  <Facebook className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://twitter.com/shunpei42ba_">
                  <Twitter className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://www.youtube.com/watch?v=WlkWTye4mfI&t=1s">
                  <Youtube className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://www.instagram.com/shunpeikoike/">
                  <Instagram className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://github.com/shunp">
                  <GitHub className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://qiita.com/shunp">
                  <Qiita className="hover:bg-gray-400 focus:outline-none" />
                </a>
                <a className="w-1/4 p-2" target="_blank" href="https://speakerdeck.com/shunp">
                  <Speakerdeck className="hover:bg-gray-400 focus:outline-none" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="z-10" ref={mount} />
    </>
  )
}
export default ProfileScene
