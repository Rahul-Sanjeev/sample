import { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to Modern Web",
    description:
      "Build stunning, responsive websites with cutting-edge technology",
    color: "from-blue-500 to-cyan-500",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Beautiful layouts that work perfectly on all devices and screen sizes",
    color: "from-purple-500 to-pink-500",
    icon: "📱",
  },
  {
    id: 3,
    title: "Modern Stack",
    description:
      "Built with React, Vite, and Tailwind CSS for optimal performance",
    color: "from-green-500 to-emerald-500",
    icon: "⚡",
  },
  {
    id: 4,
    title: "SEO Optimized",
    description: "Fully optimized for search engines and user experience",
    color: "from-orange-500 to-red-500",
    icon: "🎯",
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen md:h-96 overflow-hidden"
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-full h-full bg-gradient-to-r ${slide.color} flex items-center justify-center`}
            >
              <div className="text-center text-white px-4">
                <div className="text-6xl md:text-8xl mb-6">{slide.icon}</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={resumeAutoPlay}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={resumeAutoPlay}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={resumeAutoPlay}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-white w-8 h-3"
                : "bg-white/50 hover:bg-white/75 w-3 h-3"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-30 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};
