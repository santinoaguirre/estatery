import { MouseEventHandler, ReactNode } from "react";

type Props = {
  params: {
    text: string | ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
  };
} & React.HTMLAttributes<HTMLButtonElement>;

export default function SecondaryButton({ params, ...rest }: Props) {
  const { text, onClick, className } = params;
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`text-white bg-secondary font-bold rounded-lg text-center py-3 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
