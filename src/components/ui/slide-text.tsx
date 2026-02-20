import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function SlideTextContainer({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <div className={cn("h-[clamp(36px,6dvw,60px)]", className)} {...props}>
      {children}
    </div>
  );
}

function SlideSmallTextContainer({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <div className={cn("h-[clamp(24px,3dvw,36px)]", className)} {...props}>
      {children}
    </div>
  );
}

function SlideText({ children, className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[clamp(36px,6dvw,60px)] animate-bottomUp opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function SlideSmallText({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[clamp(24px,3dvw,36px)] animate-bottomUp opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export {
  SlideTextContainer,
  SlideSmallTextContainer,
  SlideText,
  SlideSmallText,
};
