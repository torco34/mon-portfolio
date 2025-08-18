import React from "react";

export interface TextBlockProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  title,
  description,
  buttonLabel,
  buttonHref,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl  md:text-6xl font-extrabold  text-orange-400">
        {title}
      </h2>

      <p className="text-gray-700 text-lg">{description}</p>

      {buttonLabel && buttonHref && (
        <a
          href={buttonHref}
          className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-400 transition"
        >
          {buttonLabel}
        </a>
      )}
    </div>
  );
};
