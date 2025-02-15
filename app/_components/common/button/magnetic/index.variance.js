import { cva } from "class-variance-authority";

export const magneticVariance = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium ring-offset-background transition-colors before:absolute before:left-[-10%] before:top-[-10%] before:h-0 before:w-[120%] before:translate-y-3/4 before:scale-0 before:rounded-full before:pb-[120%] before:content-[""] after:absolute after:inset-0 after:size-full after:w-full after:-translate-y-full after:rounded-full after:transition-transform after:duration-300 after:ease-in-expo after:content-[""] hover:before:translate-y-0 hover:before:scale-100 hover:before:transition-transform hover:before:duration-300 hover:before:ease-in-expo hover:after:translate-y-0 hover:after:transition-transform hover:after:delay-300 hover:after:duration-75 hover:after:ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: "bg-transparent before:bg-transparent after:bg-transparent",
        primary:
          "bg-primary text-background before:bg-primary-foreground after:bg-primary-foreground",
        destructive:
          "bg-background text-destructive-foreground before:bg-destructive after:bg-destructive",
        secondary:
          "bg-background text-secondary-foreground before:bg-secondary after:bg-secondary",
        ghost:
          "bg-foreground text-background before:bg-primary after:bg-primary",
        outline: "border border-solid before:bg-primary after:bg-primary",
      },
      size: {
        default: "p-2 text-sm",
        md: "px-[1.2rem] py-[1.7rem] text-base",
        mc: "px-[2.5em] py-[1.2rem] lg:px-[2.5em] lg:py-[1.2rem] text-base",
        lg: "px-8 py-16 text-lg lg:px-12 lg:py-20",
        lc: "px-8 py-16 text-lg lg:px-[2.2rem] lg:py-[4.2rem]",
        xl: "px-10 py-16 text-lg lg:px-14 lg:py-20",
        ab: " px-[2.4rem] py-[3.9rem] text-lg ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
