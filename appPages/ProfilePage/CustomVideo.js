import { Download, Eye } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef } from "react";

export default function CustomVideo({ video, onView }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-full max-h-[263px] rounded-2xl group x overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        src={video.src}
        onClick={togglePlay}
        className="w-full h-full object-cover rounded-2xl cursor-pointer"
        preload="metadata"
        playsInline
      />

      {/* Custom Bottom Panel */}
      <div className="absolute bottom-0 left-0 right-0  bg-opacity-60 text-white flex items-center justify-between p-8">

        <div className="font-medium text-lg truncate max-w-[150px]">{video.title}</div>
        <div className="flex items-center  gap-6  ">
          <button
            onClick={() => onView(video)}
            className="hover:text-[#A0C287] transition cursor-pointer"
          >
            <Eye size={28} />
          </button>
          <Link
            href={video.src}
            download={`video-${video.id}.mp4`}
            className="hover:text-[#A0C287] transition cursor-pointer"
          >
            <Download size={28} />
          </Link>

        </div>

      </div>
    </div>
  );
}

