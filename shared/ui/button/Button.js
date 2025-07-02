import clsx from 'clsx';

export function Button({ children, className = '', bgColor, ...props }) {
  const bgColorStyle = bgColor ? `bg-${bgColor}` : 'bg-[#5EAC41]'
  return (
    <button
      className={clsx(
        `${bgColorStyle} text-white shadow-[inset_0px_15px_15px_rgba(0,0,0,0.15)] text-[15px] rounded-4xl px-2 sm:px-4 py-2 cursor-pointer hover:shadow-lg hover:opacity-90 transition duration-200`,

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
