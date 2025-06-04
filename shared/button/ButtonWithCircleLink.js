import React from 'react';
import CircleLink from './CircleLink';
import Button from './Button';
import Link from 'next/link';

export function ButtonWithCircleLink({
  buttonText = 'Детальнее',
  href = '#',
  circleBg = 'green',
  buttonClassName = '',
  onClick,
  circleClassName = '',
  buttonProps = {},
  arrowColor,// extra props to pass to button
}) {
  return (
    <div className="flex gap-4 items-center">
      <Button className={buttonClassName}  {...buttonProps} onClick={onClick}>
        {buttonText}
      </Button>
      <CircleLink arrowColor={arrowColor} href={href} bgColor={circleBg} className={circleClassName} />
    </div>
  );
}