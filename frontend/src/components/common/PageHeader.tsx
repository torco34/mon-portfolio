import type { PageHeaderProps } from "../ts/CommonType";

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
};
