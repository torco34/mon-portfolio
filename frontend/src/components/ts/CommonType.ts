export interface ImageProps {
  src: string;
  alt: string;
  rounded?: boolean;
  grayscale?: boolean;
  border?: boolean;
  className?: string;
}
export interface TextBlockProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}
