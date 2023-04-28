import { useEffect, useRef } from "react"
export function Timavaki() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    const draw = (ctx:CanvasRenderingContext2D, frameCount:number) => {
        ctx.canvas.width = 600
        ctx.canvas.height = 600
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        let i = 0
        var radius=100;
            ctx.beginPath();
            ctx.fillStyle='rgb(' + Math.floor(255-42.5*i) + ', 95, 180)';
            ctx.moveTo(300,300);
           
            // ctx.arc(300,300,radius,i*Math.PI/4,(i+2.5)*((Math.PI/4)),false); 
            let x = -Math.PI/2
            const fullCircle = Math.PI * 1.5
            ctx.arc(300,300,radius,x,fullCircle,true); 
            ctx.closePath();
            ctx.fill();
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas!.getContext('2d')
        context!.canvas.width = 300
        let frameCount = 0
        let animationFrameId:number
        
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
    return <canvas ref={canvasRef}>lol</canvas>
}