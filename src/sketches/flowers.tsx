import p5 from 'p5'

const flowers = (p: p5) => {
    p.setup = () => {
        p.createCanvas(
            p.windowWidth / 4,
            p.windowHeight / 4)
        p.background(255)
        p.fill(90, 101, 189, 127)
        p.stroke(127, 63, 120)

    }
    p.draw = () => {
        p.background(255)
        makeFlower(p, 200, 180, 100, 101, 189)
        makeFlower(p, 100, 180, 180, 101, 189)
        makeFlower(p, 150, 80, 230, 200, 189)
        makeFlower(p, 50, 80, 180, 101, 240)
    }
}

const makeFlower = (p: p5, x: number, y: number, r: number, g: number, b: number) => {
    p.push()
    p.noSmooth()
    p.fill(r, g, b, 127)
    p.translate(x, y)
    p.rotate(p.frameCount * 0.02)
    p.noStroke()
    for (let i = 0; i < 10; i++) {
        p.ellipse(0, 30, 20, 80)
        p.rotate(p.PI / 5)
    }
    p.pop()
}
export default flowers