import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const controlBase =
  "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[13.5px] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-500";

export function Field({
  label,
  htmlFor,
  hint,
  required,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[12.5px] font-medium text-ink-700"
      >
        {label}
        {required ? (
          <span className="ml-0.5 text-brand-500" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-[11.5px] text-ink-400">{hint}</p> : null}
    </div>
  );
}

export function TextInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${controlBase} ${className}`} {...props} />;
}

export function Select({
  className = "",
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={`${controlBase} cursor-pointer ${className}`} {...props}>
      {children}
    </select>
  );
}

export function TextArea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={`${controlBase} resize-y ${className}`} {...props} />
  );
}
