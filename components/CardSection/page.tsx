import { ReactNode } from "react";

interface ICardSection {
  children?: ReactNode;
  title?: string;
  className?: string;
}

export default function CardSection({
  children,
  title,
  className,
}: ICardSection) {
  return (
    <section className={`py-10 ${className} md:px-0 px-6`}>
      <div className="max-w-screen-lg mx-auto">
        <div className=" flex justify-center">
          <h1 className="text-center text-5xl font-bold max-w-screen-md mb-10">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </section>
  );
}
