import type { ImageProps } from "../ts/CommonType";

export const Image = ({
  src,
  alt,
  rounded = false,
  grayscale = false,
  border = false,
  className = "",
}: ImageProps) => {
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
