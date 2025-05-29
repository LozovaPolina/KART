function SwiperItem({
	content,
	img,
	widthPercent = `100`,
	style = {},
	className = "",
}) {
	const liStyle = {
		width: `${widthPercent}%`,
		flexShrink: 0,
		userSelect: "none",
		WebkitUserSelect: "none",
		listStyle: "none",
		...style,
	};

	const imgStyle = {
		width: "100%",
		userSelect: "none",
		WebkitUserSelect: "none",
		display: "block",
	};

	return (
		<li style={liStyle}>
			{content}
			{img && <img src={img.src} alt={img.alt || ""} style={imgStyle} />}
		</li>
	);
}

export default SwiperItem;