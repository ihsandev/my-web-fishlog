"use client";
import Card from "@/components/Card/page";
import CardFeature from "@/components/CardFeature/page";
import CardSection from "@/components/CardSection/page";
import Slider from "react-slick";
import { FiHome } from "react-icons/fi";

const itemCard = [
  {
    id: 1,
    image: "/images/fish-1.jpg",
    title: "Membangun ekosistem perikanan yang berkelanjutan di Indonesia",
  },
  {
    id: 2,
    image: "/images/fish-2.jpg",
    title: "Membangun ekosistem perikanan yang berkelanjutan di Indonesia",
  },
  {
    id: 3,
    image: "/images/fish-3.jpg",
    title: "Membangun ekosistem perikanan yang berkelanjutan di Indonesia",
  },
];

export default function MiddleSection() {
  return (
    <CardSection
      className="relative"
      title="Memperkuat Rantai Pasok Perikanan Bersama-sama"
    >
      <div>
        <div className="flex items-center justify-between mb-24">
          {itemCard.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
        <div className="flex justify-between">
          <div />
          <div className="bg-blue-900 max-w-screen-md p-24 h-[500px] justify-end rounded-xl">
            <div className="w-[650px] absolute -left-[200px]">
              <Slider
                dots={false}
                slidesToShow={2}
                slidesToScroll={2}
                arrows={false}
              >
                <div className="pr-4 ">
                  <CardFeature
                    className="bg-slate-200"
                    title="Lorem Ipsum Dolor 1"
                    description="FishLog percaya bahwa kami telah menemukan kunci untuk mengatasi kerugian pangan di dunia. Kendala dan tantangan masih ada di hadapan kita jika kita benar-benar ingin mengoptimalkan dampak sektor produk perikanan."
                    icon={<FiHome />}
                  />
                </div>
                <div className="pr-4 ">
                  <CardFeature
                    className="bg-slate-200"
                    title="Lorem Ipsum Dolor 2"
                    description="FishLog percaya bahwa kami telah menemukan kunci untuk mengatasi kerugian pangan di dunia. Kendala dan tantangan masih ada di hadapan kita jika kita benar-benar ingin mengoptimalkan dampak sektor produk perikanan."
                    icon={<FiHome />}
                  />
                </div>
                <div className="pr-4 ">
                  <CardFeature
                    className="bg-slate-200"
                    title="Lorem Ipsum Dolor 3"
                    description="FishLog percaya bahwa kami telah menemukan kunci untuk mengatasi kerugian pangan di dunia. Kendala dan tantangan masih ada di hadapan kita jika kita benar-benar ingin mengoptimalkan dampak sektor produk perikanan."
                    icon={<FiHome />}
                  />
                </div>
              </Slider>
            </div>
            <div className="text-white">
              <h2 className="mb-12 text-2xl font-bold">
                Manfaat Menjadi Bagian Ekosistem FishLog
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                porro magni, doloribus maxime commodi dicta saepe ad voluptates
                ex corporis recusandae repellat architecto ab facere. Totam
                voluptas repellat modi suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
