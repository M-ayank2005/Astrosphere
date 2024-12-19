'use client';
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const imgs = [
    'https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1622267109998-2bf9ebcccac6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1729273789259-c54b346795ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGFzdHJvbG9neXxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1729335511883-29eade10006b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxhc3Ryb2xvZ3l8ZW58MHx8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1614089254151-676cc373b01e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxhc3Ryb2xvZ3l8ZW58MHx8MHx8fDI%3D'
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const ImageCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((prevIndex) =>
                    prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [dragX]);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((prevIndex) => prevIndex + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="flex justify-center items-center w-auto h-auto">
            <div className="relative overflow-hidden w-96 py-8">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    style={{ x: dragX }}
                    animate={{ translateX: `-${imgIndex * 100}%` }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex items-center"
                >
                    <Images imgIndex={imgIndex} />
                </motion.div>

                <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            </div>
        </div>
    );
};

const Images = ({ imgIndex }) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => (
                <ImageItem key={idx} imgSrc={imgSrc} imgIndex={imgIndex} idx={idx} />
            ))}
        </>
    );
};

const ImageItem = ({ imgSrc, imgIndex, idx }) => {
    return (
        <motion.div
            animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-auto w-96 h-96 shrink-0 rounded-xl overflow-hidden"
        >
            <Image
                src={imgSrc}
                alt={`Image ${idx}`}
                layout="fill"
                objectFit="cover"
            />
        </motion.div>
    );
};

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="mt-4 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-zinc-50" : "bg-zinc-500"}`}
                />
            ))}
        </div>
    );
};

export default ImageCarousel;
