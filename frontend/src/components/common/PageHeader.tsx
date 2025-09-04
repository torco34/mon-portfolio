import type { PageHeaderProps } from "../ts/CommonType";

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        {title}
      </h1>
      {description && (
        <p className="mb-10 text-gray-600 dark:text-gray-700 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
};
