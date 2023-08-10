import { ReactNode } from "react";
import { FiHome } from "react-icons/fi";

interface ICardFeature {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  titleStyle?: string;
}

export default function CardFeature({
  icon,
  title,
  description,
  className,
  titleStyle,
}: ICardFeature) {
  return (
    <div
      className={`flex flex-col gap-6 p-6 rounded-md text-center ${className}`}
    >
      {icon && (
        <div className="flex justify-center text-2xl">{icon || <FiHome />}</div>
      )}
      <h3 className={`text-center font-semibold ${titleStyle}`}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
