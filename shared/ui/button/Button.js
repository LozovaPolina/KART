import clsx from 'clsx';

export function Button({ children, className = '', bgColor, ...props }) {
  const bgColorStyle = bgColor ? `bg-${bgColor}` : 'bg-[#81D742]'
  return (
    <button
      className={clsx(
        `${bgColorStyle} text-white text-[15px] rounded-4xl px-2 sm:px-4 py-2 cursor-pointer shadow hover:shadow-lg hover:opacity-90 transition duration-200`,

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
