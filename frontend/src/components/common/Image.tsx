import { useState, useEffect } from "react";
import type { ImageProps } from "../ts/CommonType";

export const Image = ({
  src,
  alt,
  rounded = false,
  grayscale = false,
  border = false,
  className = "",
  lazy = true,
}: ImageProps & { lazy?: boolean }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(lazy ? "" : src);

  useEffect(() => {
    if (!lazy) {
      setImageSrc(src);
      return;
    }

    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src, lazy]);

  return (
    <div className="relative overflow-hidden">
      {lazy && !isLoaded && (
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 animate-pulse ${rounded ? "rounded-full" : "rounded-lg"}`} />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        className={`
          ${rounded ? "rounded-full" : "rounded-lg"} 
          ${grayscale ? "grayscale hover:grayscale-0 transition duration-300" : ""}
          ${border ? "border-4 border-white/10" : ""}
          object-cover shadow-lg transition-opacity duration-300
          ${lazy && !isLoaded ? "opacity-0" : "opacity-100"}
          ${className}
        `}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
