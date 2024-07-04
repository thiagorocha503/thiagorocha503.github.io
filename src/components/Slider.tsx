import React, { useRef, useState } from "react";
import style from "./Slider.module.css";
import {
    BOOK_FINDER_IMAGE_URL,
    CALCULATOR_IMAGE_URL,
    CARD_MEMORY_GAME_IMAGE_URL,
    MARKDOWN_PREVIEWER_IMAGE_URL,
    NOTE_IMAGE_URL,
    SLIDE_PAD,
    TODO_IMAGE_URL,
} from "../constants";

export type Card = {
    url: string;
    alt: string;
};

const projects: Card[] = [
    { url: CARD_MEMORY_GAME_IMAGE_URL, alt: "card memory game" },
    { url: MARKDOWN_PREVIEWER_IMAGE_URL, alt: "markdown-previewer" },
    { url: BOOK_FINDER_IMAGE_URL, alt: "book finder" },
    { url: CALCULATOR_IMAGE_URL, alt: "calculator" },
    { url: TODO_IMAGE_URL, alt: "to do list" },
    { url: NOTE_IMAGE_URL, alt: "note" },
];

export default function Slider() {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [prevPageX, setPrevPageX] = useState<number>(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState<number>(0);
    const sliders = useRef<HTMLDivElement>(null);
    const firstImageRef = useRef<HTMLDivElement>(null);

    const handleArrow = (e: React.MouseEvent) => {
        if (e.currentTarget.id === style.prev) {
            sliders.current!.scrollLeft -=
                firstImageRef.current!.clientWidth + SLIDE_PAD;
        } else {
            sliders.current!.scrollLeft +=
                firstImageRef.current!.clientWidth + SLIDE_PAD;
        }
    };

    const handleDragStart = (
        e:
            | React.TouchEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setIsDragging(true);
        setPrevPageX(() => ("pageX" in e ? e.pageX : e.touches[0].pageX));
        setPrevScrollLeft(() => sliders.current!.scrollLeft);
    };
    const handleDragging = (
        e:
            | React.TouchEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (isDragging) {
            const diff =
                ("pageX" in e ? e.pageX : e.touches[0].pageX) - prevPageX;

            sliders.current?.classList.add(style.dragging);
            sliders.current!.scrollLeft = prevScrollLeft - diff;
            sliders.current!.style.cursor = "grabbing";
        } else {
            sliders.current!.style.cursor = "pointer";
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        sliders.current?.classList.remove(style.dragging);
    };

    return (
        <div className={style.slider}>
            <button
                className="d-none d-md-block"
                type="button"
                onClick={handleArrow}
                id={style.prev}
                title="previous"
            >
                <span>⏴</span>
            </button>
            <div
                ref={sliders}
                className={style.slides}
                onMouseOut={handleDragEnd}
            >
                {projects.map((card, i) => (
                    <div
                        key={card.url}
                        ref={i === 0 ? firstImageRef : null}
                        className={style.slide}
                        onMouseDown={handleDragStart}
                        onTouchStart={handleDragStart}
                        onMouseMove={handleDragging}
                        onTouchMove={handleDragging}
                        onMouseUp={handleDragEnd}
                        onTouchEnd={handleDragEnd}
                    >
                        <img src={card.url} alt={card.alt} draggable="false" />
                    </div>
                ))}
            </div>
            <button
                className="d-none d-md-block"
                type="button"
                onClick={handleArrow}
                id={style.next}
                title="next"
            >
                <span>⏵</span>
            </button>
        </div>
    );
}
