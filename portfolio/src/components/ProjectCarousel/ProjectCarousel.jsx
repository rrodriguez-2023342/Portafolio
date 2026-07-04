import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

export const ProjectCarousel = ({ images, title }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

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

    const modal = isOpen ? (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada de ${title}`}
        >
            <div
                className="relative flex max-h-[90vh] max-w-[calc(100vw-2rem)] items-center justify-center"
                onClick={(event) => event.stopPropagation()}
            >
                <img
                    src={images[currentImage]}
                    alt={`${title} imagen ampliada`}
                    className="max-h-[90vh] max-w-full rounded-xl object-contain"
                />

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 cursor-pointer rounded-full bg-black/60 p-3 text-white"
                    aria-label="Cerrar imagen ampliada"
                >
                    <FaTimes />
                </button>

                <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-3 text-white"
                    aria-label="Imagen anterior"
                >
                    <FaChevronLeft />
                </button>

                <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-3 text-white"
                    aria-label="Imagen siguiente"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
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
            <div className="group relative h-52 overflow-hidden rounded-xl bg-slate-200 sm:h-64 md:h-56 dark:bg-slate-800">
                <img
                    src={images[currentImage]}
                    alt={`${title} imagen ${currentImage + 1}`}
                    onClick={() => setIsOpen(true)}
                    className="h-full w-full cursor-pointer object-cover"
                />

                <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white 
                            opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label="Imagen anterior"
                >
                    <FaChevronLeft />
                </button>

                <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white 
                            opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label="Imagen siguiente"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            aria-label={`Ver imagen ${index + 1}`}
                            className={`h-2 w-2 cursor-pointer rounded-full ${
                                currentImage === index
                                    ? 'bg-sky-500'
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
