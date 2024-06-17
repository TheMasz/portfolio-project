import { useState, useEffect, useRef } from "react";
import Loader from "../../components/shared/Loader";
import Carousel from "../../components/shared/Carousel";
import { portfolios } from "../../constants";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Portfolio = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselMode, setCarouselMode] = useState<"vertical" | "horizontal">(
    "vertical"
  );
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    const length = portfolios[currentIndex].pics.length;
    setCurrentImage((prevIndex) => (prevIndex + 1) % length);
  };

  const handlePrevSlide = () => {
    const length = portfolios[currentIndex].pics.length;
    setCurrentImage((prevIndex) => (prevIndex - 1 + length) % length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        currentImage * 100
      }%)`;
    }
  }, [currentImage]);

  useEffect(() => {
    setCurrentImage(0);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 768) {
      setCarouselMode("horizontal");
    } else {
      setCarouselMode("vertical");
    }
  }, [screenWidth]);

  return loading ? (
    <Loader />
  ) : (
    <div className="portfolio-container ">
      <div className="w-full md:w-9/12 h-full overflow-y-auto custom-scrollbar">
        <h3 className="h3-bold text-center md:text-left">
          {portfolios[currentIndex].name}
        </h3>
        <div className="w-full md:w-11/12">
          <div className="flex h-72 w-full border-2 rounded-md relative overflow-hidden">
            <div className="carousel-content w-full " ref={carouselRef}>
              {portfolios[currentIndex].pics.map((pic, index) => (
                <div
                  key={index}
                  className="absolute top-0 left-0 bottom-0 right-0 h-full w-full"
                  style={{
                    transform: `translateX(${index * 100}%)`,
                  }}
                >
                  <Zoom>
                    <img
                      className="w-full h-72  object-contain "
                      src={`assets/images/projects/${portfolios[currentIndex].id}/${pic}`}
                      alt={`projectId${portfolios[currentIndex].id}`}
                      loading="lazy"
                    />
                  </Zoom>
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 left-2  btn-opacity flex-center"
              onClick={handlePrevSlide}
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
            </button>
            <button
              className="absolute top-1/2 right-2 btn-opacity flex-center"
              onClick={handleNextSlide}
            >
              <svg
                className="w-6 h-6 text-gray-800 ="
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
            </button>
            <div
              className=" absolute top-0 right-0 p-1 bg-white rounded-sm
            opacity-30 transition-opacity font-medium text-[#181e2a] shadow  shadow-black"
            >
              click for zoom
            </div>
          </div>

          <div className="flex justify-center gap-2 my-2 lg:mb-10">
            {portfolios[currentIndex].pics.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-full h-4 w-4 ${
                  currentImage == index ? "bg-[#6454D1]" : "bg-[#E1F1FF]"
                }`}
                onClick={() => setCurrentImage(index)}
              ></div>
            ))}
          </div>

          <div className="flex gap-4 md:gap-12 my-2  flex-wrap">
            <ul className="dev ">
              <div className="flex-itemCenter">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>
                <h6 className="text-light-1 font-bold">Deverlopment:</h6>
              </div>

              {portfolios[currentIndex].dev.map((dev, index) => (
                <li
                  className="ml-1 text-light-3 small-regular md:base-regular"
                  key={index}
                >
                  - {dev}
                </li>
              ))}
            </ul>
            <ul className="fucntions">
              <div className="flex-itemCenter">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
                </svg>
                <h6 className="text-light-1 font-bold">Functions:</h6>
              </div>
              {portfolios[currentIndex].functions.map((func, index) => (
                <li
                  className="ml-1 text-light-3 small-regular md:base-regular"
                  key={index}
                >
                  - {func}
                </li>
              ))}
            </ul>
            <div className="desc lg:mb-4">
              <div className="flex-itemCenter">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h6 className="text-light-1 font-bold">Description:</h6>
              </div>
              <p className="ml-1 text-light-3 small-regular md:base-regular text-justify">
                {portfolios[currentIndex].desc}
              </p>
            </div>
          </div>

          <div className="github">
            <div className="flex-itemCenter gap-1">
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
              <h6 className="text-light-1 font-bold">Github</h6>
            </div>

            <Link
              className="text-light-3 small-regular md:base-regular hover:underline"
              target="_blank"
              to={portfolios[currentIndex].github}
            >
              {portfolios[currentIndex].github}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative  w-full md:w-1/4 h-72 md:h-full px-4 md:flex-center ">
        <Carousel
          items={portfolios}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          mode={carouselMode}
        />
      </div>
    </div>
  );
};

export default Portfolio;
