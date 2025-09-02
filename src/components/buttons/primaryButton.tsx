import { MouseEventHandler } from "react";

type Props = {
  params: {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
} & React.HTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({ params, ...rest }: Props) {
  const { text, onClick } = params;
  return (
    <button
      {...rest}
      onClick={onClick}
      className="text-white bg-primary font-bold rounded-lg text-center px-6 py-3 cursor-pointer"
    >
      {text}
    </button>
  );
}
