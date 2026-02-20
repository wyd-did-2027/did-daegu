import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Section({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "w-full min-h-[calc(100vh-80px)] p-16 scroll-mt-20 max-sm:px-4 max-[1079px]:px-8 max-sm:min-h-auto",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function SectionTitle({ children, className, ...props }: ComponentProps<"h2">) {
  return (
    <section
      className={cn("heading02B text-gray-900 mb-8", className)}
      {...props}
    >
      {children}
    </section>
  );
}

function BackDrop({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute inset-0 z-10 backdrop-brightness-75", className)}
      {...props}
    />
  );
}

export { Section, SectionTitle, BackDrop };
