import { useEffect, useRef } from 'react'
import { useTheme } from '../../hooks/useTheme'

export const AnimatedBackground = () => {
    const canvasRef = useRef(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const pointer = { x: -1000, y: -1000 }
        let particles = []
        let animationFrame
        let width = 0
        let height = 0

        const palette = theme === 'dark'
            ? {
                dot: 'rgba(56, 189, 248, 0.72)',
                line: '56, 189, 248',
                glow: 'rgba(14, 165, 233, 0.12)',
            }
            : {
                dot: 'rgba(2, 132, 199, 0.52)',
                line: '2, 132, 199',
                glow: 'rgba(14, 165, 233, 0.09)',
            }

        const createParticle = () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.8 + 0.7,
            vx: (Math.random() - 0.5) * 0.28,
            vy: (Math.random() - 0.5) * 0.28,
        })

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            context.setTransform(dpr, 0, 0, dpr, 0, 0)

            const particleCount = Math.min(78, Math.max(32, Math.floor((width * height) / 18000)))
            particles = Array.from({ length: particleCount }, createParticle)
        }

        const draw = (moveParticles = true) => {
            context.clearRect(0, 0, width, height)

            const glow = context.createRadialGradient(
                pointer.x,
                pointer.y,
                0,
                pointer.x,
                pointer.y,
                180,
            )
            glow.addColorStop(0, palette.glow)
            glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
            context.fillStyle = glow
            context.fillRect(0, 0, width, height)

            particles.forEach((particle, index) => {
                if (moveParticles) {
                    const dx = particle.x - pointer.x
                    const dy = particle.y - pointer.y
                    const distance = Math.hypot(dx, dy)

                    if (distance < 120 && distance > 0) {
                        const force = (120 - distance) / 120
                        particle.x += (dx / distance) * force * 1.4
                        particle.y += (dy / distance) * force * 1.4
                    }

                    particle.x += particle.vx
                    particle.y += particle.vy

                    if (particle.x < -10) particle.x = width + 10
                    if (particle.x > width + 10) particle.x = -10
                    if (particle.y < -10) particle.y = height + 10
                    if (particle.y > height + 10) particle.y = -10
                }

                context.beginPath()
                context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                context.fillStyle = palette.dot
                context.fill()

                for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
                    const other = particles[nextIndex]
                    const distance = Math.hypot(particle.x - other.x, particle.y - other.y)

                    if (distance < 115) {
                        context.beginPath()
                        context.moveTo(particle.x, particle.y)
                        context.lineTo(other.x, other.y)
                        context.strokeStyle = `rgba(${palette.line}, ${0.13 * (1 - distance / 115)})`
                        context.lineWidth = 1
                        context.stroke()
                    }
                }
            })
        }

        const animate = () => {
            draw()
            animationFrame = window.requestAnimationFrame(animate)
        }

        const handlePointerMove = (event) => {
            pointer.x = event.clientX
            pointer.y = event.clientY
        }

        const handlePointerLeave = () => {
            pointer.x = -1000
            pointer.y = -1000
        }

        const handleResize = () => {
            resize()
            if (reduceMotion) draw(false)
        }

        resize()
        window.addEventListener('resize', handleResize)

        if (reduceMotion) {
            draw(false)
        } else {
            window.addEventListener('pointermove', handlePointerMove, { passive: true })
            document.addEventListener('mouseleave', handlePointerLeave)
            animate()
        }

        return () => {
            window.cancelAnimationFrame(animationFrame)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('pointermove', handlePointerMove)
            document.removeEventListener('mouseleave', handlePointerLeave)
        }
    }, [theme])

    return (
        <div className="animated-background" aria-hidden="true">
            <div className="ambient-orb ambient-orb-one" />
            <div className="ambient-orb ambient-orb-two" />
            <canvas ref={canvasRef} />
        </div>
    )
}
