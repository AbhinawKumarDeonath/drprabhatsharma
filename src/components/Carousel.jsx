import { useEffect, useState } from "react";

const slides = [

  "./1.png",
    "./2.png",
    "./3.png",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (

    <>
         <div className="text-center mb-10 mt-10 ">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Patients</span>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Gallery</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Our patients have shared their experiences and testimonials in our gallery.                    </p>
                </div>

                <div className="relative w-[300px] md:w-[450px] lg:w-[600px] max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg mb-10">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❯
      </button>
    </div>

    </>
    
  );
}