import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseStyles =
  "inline-flex items-center justify-center font-[600] tracking-[-0.01em] border-[1.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_#000] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000] transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#FF6B1A] text-white hover:bg-[#E85D10] hover:border-black",
  secondary: "bg-white text-black hover:bg-black hover:text-white hover:border-black",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-[38px] px-[20px] text-[13.5px] rounded-[12px]",
  md: "h-[44px] px-[22px] text-[15px] rounded-full",
  lg: "h-[48px] px-[28px] text-[16px] rounded-[12px]",
};

export const Button = ({
  variant = "primary",
  size = "sm",
  fullWidth,
  className = "",
  children,
  href,
  ...props
}: ButtonProps) => {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
