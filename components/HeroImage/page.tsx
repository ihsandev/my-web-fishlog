"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="min-h-screen overflow-hidden">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className="w-full"
      >
        <div>
          <Image
            className="w-full"
            alt="hero"
            src={"/images/fish-1.jpg"}
            width={800}
            height={800}
          />
        </div>
        <div>
          <Image
            className="w-full"
            alt="hero"
            src={"/images/fish-1.jpg"}
            width={800}
            height={800}
          />
        </div>
        <div>
          <Image
            className="w-full"
            alt="hero"
            src={"/images/fish-1.jpg"}
            width={800}
            height={800}
          />
        </div>
      </Slider>
    </section>
  );
}
