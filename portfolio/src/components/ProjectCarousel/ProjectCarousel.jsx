import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight, FaImage, FaTimes } from 'react-icons/fa'

export const ProjectCarousel = ({ images, title }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [failedImages, setFailedImages] = useState({})

    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

    const markImageAsFailed = (index) => {
        setFailedImages((current) => ({ ...current, [index]: true }))
    }

    const imageFallback = (
        <div className="flex h-full min-h-56 w-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 p-8 text-center text-white">
            <FaImage className="mb-4 text-4xl text-sky-400" />
            <p className="font-bold">{title}</p>
            <p className="mt-1 text-sm text-slate-400">Vista previa próximamente</p>
        </div>
    )

    useEffect(() => {
        if (!isOpen) return undefined

        const previousOverflow = document.body.style.overflow
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false)
            if (event.key === 'ArrowLeft') {
                setCurrentImage((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                )
            }
            if (event.key === 'ArrowRight') {
                setCurrentImage((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                )
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, images.length])

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (isPaused || isOpen || reduceMotion || images.length < 2) {
            return undefined
        }

        const interval = window.setInterval(() => {
            setCurrentImage((current) =>
                current === images.length - 1 ? 0 : current + 1
            )
        }, 4500)

        return () => window.clearInterval(interval)
    }, [images.length, isOpen, isPaused])

    const modal = isOpen ? (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-2 sm:p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada de ${title}`}
        >
            <div
                className="relative flex max-h-[92svh] max-w-[calc(100vw-1rem)] items-center justify-center sm:max-h-[90vh] sm:max-w-[calc(100vw-2rem)]"
                onClick={(event) => event.stopPropagation()}
            >
                {failedImages[currentImage] ? imageFallback : (
                    <img
                        src={images[currentImage]}
                        alt={`${title} imagen ampliada`}
                        onError={() => markImageAsFailed(currentImage)}
                        className="max-h-[92svh] max-w-full rounded-lg object-contain sm:max-h-[90vh] sm:rounded-xl"
                    />
                )}

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-2 top-2 cursor-pointer rounded-full bg-black/70 p-2.5 text-white sm:right-4 sm:top-4 sm:p-3"
                    aria-label="Cerrar imagen ampliada"
                >
                    <FaTimes />
                </button>

                <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-2.5 text-white sm:left-4 sm:p-3"
                    aria-label="Imagen anterior"
                >
                    <FaChevronLeft />
                </button>

                <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 p-2.5 text-white sm:right-4 sm:p-3"
                    aria-label="Imagen siguiente"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm sm:bottom-4">
                    {images.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            aria-label={`Ver imagen ${index + 1}`}
                            className={`h-3 w-3 cursor-pointer rounded-full ${
                                currentImage === index
                                    ? 'bg-sky-500'
                                    : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    ) : null

    return (
        <>
            <div
                className="skeuo-inset group relative h-52 overflow-hidden rounded-xl p-1.5 min-[400px]:h-56 sm:h-64 sm:rounded-2xl lg:h-full lg:min-h-64"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {failedImages[currentImage] ? (
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="h-full w-full cursor-zoom-in rounded-lg"
                        aria-label={`Ampliar vista previa de ${title}`}
                    >
                        {imageFallback}
                    </button>
                ) : (
                    <img
                        src={images[currentImage]}
                        alt={`${title} imagen ${currentImage + 1}`}
                        onError={() => markImageAsFailed(currentImage)}
                        onClick={() => setIsOpen(true)}
                        className="h-full w-full cursor-zoom-in rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />

                <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/55 p-2 text-white opacity-100 backdrop-blur-sm transition-all hover:scale-110 hover:bg-sky-500 sm:left-3 sm:p-2.5 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Imagen anterior"
                >
                    <FaChevronLeft />
                </button>

                <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/55 p-2 text-white opacity-100 backdrop-blur-sm transition-all hover:scale-110 hover:bg-sky-500 sm:right-3 sm:p-2.5 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Imagen siguiente"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
                    {images.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            aria-label={`Ver imagen ${index + 1}`}
                            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
                                currentImage === index
                                    ? 'w-5 bg-sky-400'
                                    : 'bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {modal && createPortal(modal, document.body)}
        </>
    )
}
