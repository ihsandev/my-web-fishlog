import { ReactNode } from "react";
import { FiHome, FiUser } from "react-icons/fi";

interface ICardFeature {
  icon?: string;
  title: string;
  description: string;
  className?: string;
  titleStyle?: string;
}

const getIconFeature = (name: string | undefined) => {
  if (name === "user") {
    return <FiUser />;
  }
  return <FiHome />;
};

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
        <div className="flex justify-center text-2xl">
          {getIconFeature(icon)}
        </div>
      )}
      <h3 className={`text-center font-semibold ${titleStyle}`}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
