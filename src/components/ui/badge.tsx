import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 via-blue-400 to-black text-white border-transparent shadow-md",
        secondary:
          "bg-blue-700 text-white border-transparent shadow-sm hover:bg-blue-600 hover:shadow-md",
        destructive:
          "bg-red-600 text-white border-transparent shadow-md hover:bg-red-500 hover:shadow-lg",
        outline:
          "text-white border border-blue-400 bg-transparent hover:bg-blue-500/20 hover:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
