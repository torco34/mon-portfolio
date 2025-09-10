import type { PageHeaderProps } from "../ts/CommonType";

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="bg-white py-12 text-center  border-gray-200 ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 leading-tight mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
};
