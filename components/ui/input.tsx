import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full rounded-xl border bg-bg text-fg",
    "px-3 py-2 text-sm",
    "placeholder:text-fg/45",
    "transition",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/30",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-fg/15",
        subtle: "border-fg/10 bg-bg/60",
        error:
          "border-red-500/40 focus-visible:ring-red-500/25 focus-visible:border-red-500/40",
      },
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-11 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
