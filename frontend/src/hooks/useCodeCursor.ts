import { useState } from "react";

export const useCodeCursorEffect = () => {
  const [elementType, setElementType] = useState<"default" | "link" | "button" | "code">("default");

  const handleMouseEnter = (type: "default" | "link" | "button" | "code") => {
    setElementType(type);
  };

  const handleMouseLeave = () => {
    setElementType("default");
  };

  const getCursorClass = () => {
    switch (elementType) {
      case "link": return "cursor-url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"%23ec4899\" d=\"M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z\"/></svg>'), pointer";
      case "button": return "cursor-url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"%2306b6d4\" d=\"M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58a.996.996 0 1 0 1.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z\"/></svg>'), pointer";
      case "code": return "cursor-url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"%238b5cf6\" d=\"m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z\"/></svg>'), text";
      default: return "cursor-auto";
    }
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    getCursorClass,
    elementType
  };
};