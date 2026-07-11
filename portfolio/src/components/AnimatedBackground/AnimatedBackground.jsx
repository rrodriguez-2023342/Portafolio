import { useEffect, useRef } from 'react'
import { useTheme } from '../../hooks/useTheme'

const randomBetween = (min, max) => Math.random() * (max - min) + min

export const AnimatedBackground = () => {
    const canvasRef = useRef(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        let spheres = []
        let animationFrame
        let width = 0
        let height = 0
        let lastTime = performance.now()
        let spawnTimer = 0

        const palette = theme === 'dark'
            ? [
                ['rgba(56, 189, 248, 0.3)', 'rgba(14, 165, 233, 0.06)'],
                ['rgba(129, 140, 248, 0.28)', 'rgba(99, 102, 241, 0.05)'],
                ['rgba(224, 170, 98, 0.2)', 'rgba(152, 103, 46, 0.04)'],
            ]
            : [
                ['rgba(14, 165, 233, 0.2)', 'rgba(2, 132, 199, 0.035)'],
                ['rgba(99, 102, 241, 0.16)', 'rgba(79, 70, 229, 0.03)'],
                ['rgba(152, 103, 46, 0.13)', 'rgba(152, 103, 46, 0.025)'],
            ]

        const getSphereLimit = () => Math.min(34, Math.max(18, Math.floor((width * height) / 42000)))

        const createSphere = (fromEdge = false) => {
            const radius = randomBetween(7, fromEdge ? 24 : 48)
            const speed = randomBetween(0.015, 0.04) / Math.sqrt(radius / 10)
            const angle = Math.random() * Math.PI * 2
            let x = randomBetween(radius, width - radius)
            let y = randomBetween(radius, height - radius)

            if (fromEdge) {
                const edge = Math.floor(Math.random() * 4)
                if (edge === 0) { x = -radius; y = Math.random() * height }
                if (edge === 1) { x = width + radius; y = Math.random() * height }
                if (edge === 2) { x = Math.random() * width; y = -radius }
                if (edge === 3) { x = Math.random() * width; y = height + radius }
            }

            const targetX = width / 2 - x
            const targetY = height / 2 - y
            const targetLength = Math.hypot(targetX, targetY) || 1
            const inwardWeight = fromEdge ? 0.72 : 0

            return {
                x,
                y,
                radius,
                vx: Math.cos(angle) * speed * (1 - inwardWeight) + (targetX / targetLength) * speed * inwardWeight,
                vy: Math.sin(angle) * speed * (1 - inwardWeight) + (targetY / targetLength) * speed * inwardWeight,
                colors: palette[Math.floor(Math.random() * palette.length)],
                pulse: 0,
            }
        }

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            context.setTransform(dpr, 0, 0, dpr, 0, 0)

            const initialCount = reduceMotion ? 12 : getSphereLimit() - 4
            spheres = Array.from({ length: initialCount }, () => createSphere())
        }

        const absorbCollisions = () => {
            for (let index = spheres.length - 1; index >= 0; index -= 1) {
                for (let nextIndex = index - 1; nextIndex >= 0; nextIndex -= 1) {
                    const first = spheres[index]
                    const second = spheres[nextIndex]
                    const dx = second.x - first.x
                    const dy = second.y - first.y
                    const distance = Math.hypot(dx, dy) || 0.001
                    const attractionDistance = first.radius + second.radius + 45

                    if (distance < attractionDistance && distance > first.radius + second.radius) {
                        const pull = (1 - distance / attractionDistance) * 0.000015
                        first.vx += (dx / distance) * pull * second.radius
                        first.vy += (dy / distance) * pull * second.radius
                        second.vx -= (dx / distance) * pull * first.radius
                        second.vy -= (dy / distance) * pull * first.radius
                    }

                    if (distance <= first.radius + second.radius) {
                        const biggerIndex = first.radius >= second.radius ? index : nextIndex
                        const smallerIndex = biggerIndex === index ? nextIndex : index
                        const bigger = spheres[biggerIndex]
                        const smaller = spheres[smallerIndex]
                        const combinedArea = bigger.radius ** 2 + smaller.radius ** 2

                        bigger.radius = Math.min(Math.sqrt(combinedArea), 105)
                        bigger.vx = (bigger.vx * bigger.radius + smaller.vx * smaller.radius) / (bigger.radius + smaller.radius)
                        bigger.vy = (bigger.vy * bigger.radius + smaller.vy * smaller.radius) / (bigger.radius + smaller.radius)
                        bigger.pulse = 1
                        spheres.splice(smallerIndex, 1)
                        return true
                    }
                }
            }
            return false
        }

        const update = (delta) => {
            spheres.forEach((sphere) => {
                sphere.x += sphere.vx * delta
                sphere.y += sphere.vy * delta
                sphere.pulse = Math.max(0, sphere.pulse - delta * 0.0025)

                const margin = sphere.radius + 8
                if (sphere.x < -margin) sphere.x = width + margin
                if (sphere.x > width + margin) sphere.x = -margin
                if (sphere.y < -margin) sphere.y = height + margin
                if (sphere.y > height + margin) sphere.y = -margin
            })

            while (absorbCollisions()) {
                // Recalculate after each absorption because array indexes change.
            }

            spawnTimer += delta
            const spawnInterval = width < 640 ? 1500 : 950
            if (spawnTimer >= spawnInterval && spheres.length < getSphereLimit()) {
                spheres.push(createSphere(true))
                spawnTimer = 0
            }
        }

        const drawSphere = (sphere) => {
            const displayRadius = sphere.radius * (1 + sphere.pulse * 0.08)
            const gradient = context.createRadialGradient(
                sphere.x - displayRadius * 0.32,
                sphere.y - displayRadius * 0.35,
                displayRadius * 0.06,
                sphere.x,
                sphere.y,
                displayRadius,
            )
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)')
            gradient.addColorStop(0.18, sphere.colors[0])
            gradient.addColorStop(1, sphere.colors[1])

            context.save()
            context.shadowColor = theme === 'dark' ? 'rgba(14, 165, 233, 0.12)' : 'rgba(37, 52, 65, 0.12)'
            context.shadowBlur = Math.min(28, displayRadius * 0.45)
            context.beginPath()
            context.arc(sphere.x, sphere.y, displayRadius, 0, Math.PI * 2)
            context.fillStyle = gradient
            context.fill()
            context.strokeStyle = theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.55)'
            context.lineWidth = 1
            context.stroke()
            context.restore()
        }

        const draw = () => {
            context.clearRect(0, 0, width, height)
            spheres.forEach(drawSphere)
        }

        const animate = (time) => {
            const delta = Math.min(time - lastTime, 32)
            lastTime = time
            update(delta)
            draw()
            animationFrame = window.requestAnimationFrame(animate)
        }

        const handleResize = () => {
            resize()
            if (reduceMotion) draw()
        }

        resize()
        window.addEventListener('resize', handleResize)

        if (reduceMotion) {
            draw()
        } else {
            animationFrame = window.requestAnimationFrame(animate)
        }

        return () => {
            window.cancelAnimationFrame(animationFrame)
            window.removeEventListener('resize', handleResize)
        }
    }, [theme])

    return (
        <div className="animated-background" aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    )
}
