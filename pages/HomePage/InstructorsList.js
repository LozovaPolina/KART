import Title from "@/shared/title/Title";
import Text from "@/shared/text/Text";
import React from "react";
import CircleLink from "@/shared/button/CircleLink";
import Image from "next/image";
import womenImg from "../../public/assets/image/womenImg.png"
import linkImg from "../../public/assets/svg/link.svg"
import Swiper from "@/shared/swiper/Swiper";
import Button from "@/shared/button/Button";
import Link from "next/link";

function InstructorsItem() {
	return (
		<div className="max-w-[270px] flex flex-col gap-1 shadow-xl p-2">
			<div className="flex justify-between items-center">
				<div className="flex flex-col ">
					<h4 className="text-[20px]">Алена Шутова</h4>
					<h5 className="text-[11px]">Ведущий инструктор KART</h5>
				</div>
				<CircleLink />
			</div>

			<Image className="rounded-xl w-full object-cover" src={womenImg} alt="women image" />
		</div>
	)
}
function InstructorsList() {
	return (
		<section className="flex flex-col gap-6">
			<div className="flex flex-wrap gap-4 justify-between items-center sm:flex-nowrap">
				<Title>НАШИ ИНСТРУКТОРЫ</Title>
				<Text className="  md:max-w-96" >Ознакомьтесь с условиями оформления заказов, графиком работы и возможностями консультаций с нашими инструкторами.</Text>
			</div>
			<Swiper widthPercent={"270px"} controlBlock={false} itemsLength={2} items={[<InstructorsItem key={1} />, <InstructorsItem key={2} />, <InstructorsItem key={3} />, <InstructorsItem key={4} />, <InstructorsItem key={5} />, <InstructorsItem key={5} />,]} />
			<div className="flex gap-2">
				<Link href={'/instructors'}>
					<Button>Смотреть всех </Button>
				</Link>

				<button className="flex gap-1 text-[#43B549] items-center hover:opacity-50 cursor-pointer">
					<Image src={linkImg} alt="link" />
					<p className="text-[15px]">Материалы для скачивания</p>
				</button>
			</div>

		</section>
	);
}

export default InstructorsList;