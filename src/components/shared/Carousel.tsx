import { useEffect, useRef, useCallback } from "react";
import { portfoliosType } from "../../types";

interface CarouselProps {
  items: portfoliosType[];
  currentIndex: number;
  setCurrentIndex: (prevIndex: unknown) => number;
  mode: "vertical" | "horizontal";
}

const Carousel = ({
  items,
  currentIndex,
  setCurrentIndex,
  mode,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex:number) => (prevIndex + 1) % items.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex:number) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const calculateAngle = useCallback(
    (index: number) => {
      const totalItems = items.length;
      return (index / totalItems) * 360;
    },
    [items]
  );

  useEffect(() => {
    if (carouselRef.current) {
      if (mode === "vertical") {
        carouselRef.current.style.transform = `translateZ(-30vw) rotateX(${calculateAngle(
          currentIndex
        )}deg)`;
      } else {
        carouselRef.current.style.transform = `translateZ(-30vw) rotateY(${calculateAngle(
          currentIndex
        )}deg)`;
      }
    }
  }, [currentIndex, mode, calculateAngle]);

  return (
    <div
      className="carousel-container flex-center"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="carousel-content w-52"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateZ(-30vw) ${
            mode === "vertical" ? "rotateX(0)" : "rotateY(0)"
          }`,
        }}
        ref={carouselRef}
      >
        {items.map((item: portfoliosType, index: number) => {
          const angle = calculateAngle(index);
          return (
            <div
              key={index}
              className="carousel-content_items p-4 "
              ref={carouselRef}
              style={{
                border:
                  mode === "vertical"
                    ? currentIndex === index
                      ? "4px solid #6454D1"
                      : "4px solid #fff"
                    : "",
                transform:
                  mode === "vertical"
                    ? `rotateX(-${angle}deg) translateZ(35vw)`
                    : `rotateY(-${angle}deg) translateZ(35vw)`,
              }}
            >
              <img
                className="h-full w-full object-contain"
                src={`/assets/images/projects/${item.id}/${item.pics[0]}`}
                alt={`projectId${item.id}`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      <button
        className={`absolute ${
          mode === "vertical"
            ? "top-[-70px] left-[45.8333335%] "
            : "bottom-[-70px] left-[30%]  -translate-x-[30%]"
        }  
        -translate-x-[45.8333335%] btn-primary base-medium `}
        onClick={handlePrevSlide}
      >
        <div className="flex-itemCenter">
          <p>Prev</p>
          {mode === "vertical" ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className={`absolute ${
          mode === "vertical"
            ? "bottom-[-70px] left-[45.8333335%] "
            : "bottom-[-70px] right-[30%] translate-x-[30%]"
        }
        -translate-x-[45.8333335%] btn-primary base-medium`}
        onClick={handleNextSlide}
      >
        <div className="flex-itemCenter">
          <p>Next</p>
          {mode === "vertical" ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default Carousel;
