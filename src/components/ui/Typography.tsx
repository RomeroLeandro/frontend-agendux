import type React from "react";

type TypographyVariant =
  | "display"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "heading-md-card"
  | "caption"
  | "badge";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TypographyVariant;
  as?: React.ElementType;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body-md",
  as,
  className = "",
  ...props
}) => {
  const variantTagMap: Record<TypographyVariant, React.ElementType> = {
    display: "h1",
    "heading-xl": "h2",
    "heading-lg": "h3",
    "heading-md": "h4",
    "heading-sm": "h5",
    "body-lg": "p",
    "body-md": "p",
    "heading-md-card": "p",
    "body-sm": "p",
    caption: "span",
    badge: "span",
  };

  const variantStyleMap: Record<TypographyVariant, string> = {
    display:
      "font-adineue-bold text-5xl md:text-7xl leading-tight text-gray-800 dark:text-white",

    "heading-xl":
      "font-adineue-bold font-display font-bold text-4xl md:text-5xl text-gray-800 dark:text-white",

    "heading-lg":
      "font-poppiins font-bold text-3xl md:text-4xl text-gray-800 dark:text-white",

    "heading-md":
      "font-poppins font-semibold text-xl text-gray-800 dark:text-white",

    "heading-md-card": "font-poppins font-semibold text-xl text-gray-800",

    "heading-sm":
      "font-poppins font-semibold text-base text-gray-700 dark:text-gray-300 tracking-wider uppercase",

    "body-lg": "font-poppins text-lg text-gray-600 dark:text-gray-400",

    "body-md": "font-poppins text-base text-gray-600 dark:text-gray-400",

    "body-sm": "font-poppins text-sm text-gray-500 dark:text-gray-400",

    caption:
      "font-poppins font-semibold text-sm text-blue-600 dark:text-blue-400",
    badge:
      "inline-block px-3 py-1 font-poppins font-semibold text-lg uppercase tracking-wider rounded-full bg-blue-200 dark:bg-white text-blue-800",
  };

  const Component = as || variantTagMap[variant];
  const finalClassName = `${variantStyleMap[variant]} ${className}`;

  return (
    <Component className={finalClassName} {...props}>
      {children}
    </Component>
  );
};
