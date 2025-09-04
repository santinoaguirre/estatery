import { MouseEventHandler } from "react";

type Props = {
  params: {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
} & React.HTMLAttributes<HTMLButtonElement>;

export default function NoBackgroundButton({ params, ...rest }: Props) {
  const { text, onClick } = params;
  return (
    <button
      {...rest}
      onClick={onClick}
      className="text-text border-2 border-[#e0def7] font-bold rounded-lg text-center px-6 py-3 cursor-pointer"
    >
      {text}
    </button>
  );
}
