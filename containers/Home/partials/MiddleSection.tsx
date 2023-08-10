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
      withContainer={false}
    >
      <div>
        <div className="md:flex items-center justify-between mb-24">
          {itemCard.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-between relative">
          <div />
          <div>
            <div className="w-full md:w-[650px] md:absolute md:top-20 md:-left-[90px] mb-10 md:mb-0">
              <Slider
                dots={false}
                slidesToShow={2}
                slidesToScroll={2}
                arrows={false}
                infinite={true}
                autoplay={true}
                speed={500}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                    },
                  },
                ]}
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
            <div className="bg-blue-900 max-w-screen-md p-6 md:p-24 min-h-[500px] justify-end md:rounded-tl-xl md:rounded-bl-xl rounded-lg">
              <div className="text-white">
                <h2 className="mb-12 text-2xl font-bold">
                  Manfaat Menjadi Bagian Ekosistem FishLog
                </h2>
                <div className="flex flex-col gap-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim porro magni, doloribus maxime commodi dicta saepe ad
                    voluptates ex corporis recusandae repellat architecto ab
                    facere. Totam voluptas repellat modi suscipit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim porro magni, doloribus maxime commodi dicta saepe ad
                    voluptates ex corporis recusandae repellat architecto ab
                    facere. Totam voluptas repellat modi suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardSection>
  );
}
