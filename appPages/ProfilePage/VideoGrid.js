import React, { useState, useRef } from "react";
import CustomVideo from './CustomVideo'
import { X } from "lucide-react";
const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Видео 1",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Видео 2",
  },
];

export default function VideoGrid() {
  const [modalVideo, setModalVideo] = useState(null);

  const openModal = (video) => setModalVideo(video);
  const closeModal = () => setModalVideo(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  mx-auto ">
        {videos.map((video) => (
          <CustomVideo key={video.id} video={video} onView={openModal} />
        ))}
      </div>

      {/* Fullscreen modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition"
            >
              <X />
            </button>
            <video
              src={modalVideo.src}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
            <div className="text-white mt-2 text-center font-semibold">
              {modalVideo.title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
