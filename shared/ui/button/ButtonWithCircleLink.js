import { Link } from "../../../i18n/navigation";
import CircleLink from './CircleLink';
import Button from './Button';
import clsx from "clsx";

export function ButtonWithCircleLink({
  buttonText = 'Детальнее',
  href,
  buttonOnClick,
  buttonClassName = '',
  buttonProps = {},
  circleBg = 'green',
  circleClassName = '',
  circleHref,
  arrowColor,
  wrapClass,
}) {
  const content = (
    <>
      <Button
        className={buttonClassName}
        onClick={buttonOnClick}
        {...buttonProps}
      >
        {buttonText}
      </Button>
      <CircleLink
        arrowColor={arrowColor}
        bgColor={circleBg}
        className={circleClassName}
        href={href ? undefined : circleHref}
      />

    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("flex gap-4 items-center ", wrapClass)}>
        {content}
      </Link>
    );
  }

  return <div className={clsx("flex gap-4 items-center", wrapClass)}>{content}</div>;
}