import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  rounded?: boolean;
  grayscale?: boolean;
  border?: boolean;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  rounded = false,
  grayscale = false,
  border = false,
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`
        ${rounded ? "rounded-full" : "rounded-lg"} 
        ${grayscale ? "grayscale hover:grayscale-0 transition" : ""}
        ${border ? "border-4 border-gray-900" : ""}
        object-cover shadow-lg ${className}
      `}
    />
  );
};
