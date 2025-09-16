import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={clsx("", {})} {...props}>
      {children}
    </button>
  );
}

export default Button;
