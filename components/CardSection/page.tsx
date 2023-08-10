import { ReactNode } from "react";

interface ICardSection {
  children?: ReactNode;
  title?: string;
  className?: string;
  withContainer?: boolean;
}

export default function CardSection({
  children,
  title,
  className,
  withContainer = true,
}: ICardSection) {
  return (
    <section className={`py-10 ${className} md:px-0 px-6`}>
      <div className={withContainer ? "max-w-screen-lg mx-auto" : ""}>
        <div className=" flex justify-center">
          <h1 className="text-center text-3xl md:text-5xl font-bold max-w-screen-md mb-10">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </section>
  );
}
