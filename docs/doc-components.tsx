import React from "react";
import { cn } from "../../lib/utils";
import { Check, X, Info, AlertTriangle } from "lucide-react";

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Guidelines({ children, className, ...props }: BaseProps) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 my-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Dos({ children, className, ...props }: BaseProps) {
  return (
    <div
      className={cn("rounded-lg border border-green-200 bg-green-50/50 dark:bg-green-900/10 dark:border-green-900 p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-2 font-semibold text-green-700 dark:text-green-400 mb-2">
        <Check className="h-5 w-5" />
        <span>Dos</span>
      </div>
      <div className="text-sm text-muted-foreground [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2 [&_li]:flex [&_li]:gap-2 [&_li]:items-start [&_li]:before:content-['✓'] [&_li]:before:text-green-600 [&_li]:before:font-bold [&_li]:before:mt-0.5">
        {children}
      </div>
    </div>
  );
}

export function Donts({ children, className, ...props }: BaseProps) {
  return (
    <div
      className={cn("rounded-lg border border-red-200 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900 p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-400 mb-2">
        <X className="h-5 w-5" />
        <span>Don'ts</span>
      </div>
      <div className="text-sm text-muted-foreground [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2 [&_li]:flex [&_li]:gap-2 [&_li]:items-start [&_li]:before:content-['✕'] [&_li]:before:text-red-600 [&_li]:before:font-bold [&_li]:before:mt-0.5">
        {children}
      </div>
    </div>
  );
}

export function Callout({
  children,
  className,
  title,
  variant = "info",
  ...props
}: BaseProps & { title?: string; variant?: "info" | "warning" | "danger" }) {
  const variants = {
    info: "border-blue-200 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-900 text-blue-900 dark:text-blue-100",
    warning:
      "border-amber-200 bg-amber-50/50 dark:bg-amber-900/10 dark:border-amber-900 text-amber-900 dark:text-amber-100",
    danger:
      "border-red-200 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900 text-red-900 dark:text-red-100",
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    danger: AlertTriangle,
  };

  const Icon = icons[variant];

  return (
    <div
      className={cn(
        "rounded-lg border p-4 my-6 flex gap-3 items-start",
        variants[variant],
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5 mt-0.5 shrink-0" />
      <div className="flex-1">
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="text-sm opacity-90 [&_p]:leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  className,
  ...props
}: Omit<BaseProps, "children"> & { title: string; description?: string }) {
  return (
    <div className={cn("mb-8 mt-24 pb-2", className)} {...props}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function FeatureList({ children, className, ...props }: BaseProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 my-6",
        className
      )}
      {...props}
    >
      <div className="contents [&_ul]:contents [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:p-3 [&_li]:rounded-md [&_li]:border [&_li]:bg-card [&_li]:text-card-foreground [&_li]:shadow-sm [&_li]:transition-colors hover:[&_li]:bg-accent/50">
         <div className="[&_li]:before:hidden [&_li_svg]:h-5 [&_li_svg]:w-5 [&_li_svg]:text-primary [&_li_svg]:shrink-0 [&_li_p]:m-0 [&_li_strong]:font-semibold [&_li_strong]:block [&_li_strong]:mb-1">
          {children}
         </div>
      </div>
    </div>
  );
}

