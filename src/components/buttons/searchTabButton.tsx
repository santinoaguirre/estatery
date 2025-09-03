"use client";

type SearchTabButtonProps = {
  text: string;
  activated: boolean;
  onClick: () => void;
  className?: string;
};

export default function SearchTabButton({
  text,
  activated,
  onClick,
  className = "",
}: SearchTabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-lg text-center px-9 py-4 transition-colors
        ${
          activated
            ? "text-primary border-primary border-b-2 font-bold"
            : "text-foreground border-b border-shadowPrimary"
        }
        ${className}
      `}
    >
      {text}
    </button>
  );
}
