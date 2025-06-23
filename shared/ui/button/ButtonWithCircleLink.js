import Link from 'next/link';
import CircleLink from './CircleLink';
import Button from './Button';

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
      <Link href={href} className="flex gap-4 items-center">
        {content}
      </Link>
    );
  }

  return <div className="flex gap-4 items-center">{content}</div>;
}