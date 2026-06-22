import { useState } from 'react'
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

    return (
        <>
            <div className="group relative h-56 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                <img
                    src={images[currentImage]}
                    alt={`${title} imagen ${currentImage + 1}`}
                    onClick={() => setIsOpen(true)}
                    className="h-full w-full cursor-pointer object-cover"
                />

                <button
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white 
                            opacity-0 transition-opacity group-hover:opacity-100"
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white 
                            opacity-0 transition-opacity group-hover:opacity-100"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`h-2 w-2 cursor-pointer rounded-full ${
                                currentImage === index
                                    ? 'bg-sky-500'
                                    : 'bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-h-[90vh] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[currentImage]}
                            alt={`${title} imagen ampliada`}
                            className="max-h-[90vh] rounded-xl object-contain"
                        />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 cursor-pointer rounded-full bg-black/60 p-3 text-white"
                        >
                            <FaTimes />
                        </button>

                        <button
                            onClick={previousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-3 text-white"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-3 text-white"
                        >
                            <FaChevronRight />
                        </button>

                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
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
            )}
        </>
    )
}