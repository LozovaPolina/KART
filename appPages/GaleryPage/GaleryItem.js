import { ButtonWithCircleLink } from "../../shared/ui/button/ButtonWithCircleLink";
import Image from "next/image";

import React from "react";
import galeryImage from "../../public/assets/image/galery.png";
import Button from "../../shared/ui/button/Button";
import Text from "../../shared/ui/text/Text";
function GaleryItem({ src, text, href = "", btnText = "", type = "photo" }) {
  return (
    <div className="flex flex-col items-center text-color  gap-2 max-w-[312px] w-full">
      {type === "photo" ? (
        <Image
          src={galeryImage}
          alt={text}
          className="rounded-xl"
          width={312}
          height={200}
        />
      ) : (
        <div
          className="relative w-full rounded-xl  overflow-hidden"
          style={{ maxWidth: 312, height: 200 }}
        >
          <video
            src={src}
            controls
            className="w-full h-full object-cover rounded-xl "
          />
        </div>
      )}
      <Text className="text-center ">{text}</Text>
      <Button className="w-[90%]">{btnText}</Button>
    </div>
  );
}

export default GaleryItem;
