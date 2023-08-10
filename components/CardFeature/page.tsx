import { FiHome } from "react-icons/fi";

interface ICardFeature {
  icon?: string;
  title: string;
  description: string;
}

export default function CardFeature({
  icon,
  title,
  description,
}: ICardFeature) {
  return (
    <div className="flex flex-col gap-6 bg-slate-200 p-6 rounded-md text-center">
      <div className="flex justify-center text-2xl">{icon || <FiHome />}</div>
      <h3 className="text-center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
