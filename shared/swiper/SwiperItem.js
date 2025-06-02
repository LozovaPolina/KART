import Image from "next/image";

function SwiperItem({content, img, widthPercent = 100, style = {}, className = ""}) {
	const widthClass = widthPercent === 100 ? 'w-full' : `!w-[${widthPercent}%]`; // Force width with Tailwind
	return (
		<li
			className={`flex-shrink-0 select-none list-none ${widthClass} ${className}`}
			style={style}
		>
			{content}
			{img && (
				<Image
					src={img.src}
					alt={img.alt || ""}
					className="w-full select-none block"
					draggable={false}
				/>
			)}
		</li>
	);
}

export default SwiperItem;


