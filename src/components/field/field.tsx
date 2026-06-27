import * as React from "react";
import { cn } from "@/lib/cn";
import { Label } from "@/components/label/label";

export interface FieldProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export const Field = ({
  label,
  description,
  error,
  required = false,
  htmlFor,
  children,
  className,
}: FieldProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    {label ? (
      <Label htmlFor={htmlFor}>
        {label}
        {required ? <span className="text-[var(--ui-danger)]"> *</span> : null}
      </Label>
    ) : null}
    {children}
    {description && !error ? (
      <p className="text-xs text-[var(--ui-text-muted)]">{description}</p>
    ) : null}
    {error ? (
      <p role="alert" className="text-xs text-[var(--ui-danger)]">
        {error}
      </p>
    ) : null}
  </div>
);
Field.displayName = "Field";
