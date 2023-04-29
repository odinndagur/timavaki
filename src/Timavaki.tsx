import { useEffect, useRef } from 'react'
function map(
    x: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export function Timavaki({ radius }: { radius: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const timerLength = 5 * 1000
    const startTime = Date.now()

    const handleTouch = (event: any) => {
        event.preventDefault()
        console.log(event)
    }

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        const currentTime = Date.now()
        const deltaTime = currentTime - startTime
        // console.log(deltaTime,timerLength)

        ctx.canvas.width = radius * 2
        ctx.canvas.height = radius * 2
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        let i = 0
        ctx.beginPath()
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', 95, 180)'
        ctx.moveTo(radius, radius)
        const startCircle = -Math.PI / 2
        const fullCircle = Math.PI * 1.5
        let idx = map(deltaTime, 0, timerLength, startCircle, fullCircle)
        if (idx >= fullCircle) {
            idx = startCircle
        }
        // const idx = map(0.6,0,1,startCircle,fullCircle)
        // console.log({idx,deltaTime,timerLength})
        // ctx.arc(300, 300, radius, startCircle, startCircle+idx, true)
        ctx.arc(radius, radius, radius, startCircle, idx, true)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.strokeStyle = 'rgb(0,0,0)'
        ctx.arc(radius, radius, radius, startCircle, fullCircle, true)
        ctx.closePath()
        ctx.stroke()
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas!.getContext('2d')
        let frameCount = 0
        let animationFrameId: number

        //Our draw came here
        const render = () => {
            frameCount++
            draw(context!, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])
    return <canvas ref={canvasRef}></canvas>
}
