import Image from "next/image";

interface ICard {
  image?: string;
  title?: string;
}

export default function Card({ image, title }: ICard) {
  return (
    <div className="flex flex-col items-center">
      <Image
        alt="card"
        src={image || "/images/image-placeholder.svg"}
        width={300}
        height={300}
        className="rounded-xl object-cover"
      />
      <h5 className="text-center mt-4">{title}</h5>
    </div>
  );
}
