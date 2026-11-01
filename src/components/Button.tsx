import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "onDark" | "ghostOnDark";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  onDark: "btn-on-dark",
  ghostOnDark: "btn-ghost-on-dark",
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = false,
  ...props
}: ButtonProps) {
  const classes = cn("btn", variantClass[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <span className="btn-arrow" aria-hidden="true">→</span> : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
    >
      {content}
    </button>
  );
}
