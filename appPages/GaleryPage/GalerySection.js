"use client";

import React, { useEffect } from "react";

import { useState } from "react";
import GaleryItem from "./GaleryItem"; // your existing gallery item component
import { useLocale, useTranslations } from "next-intl";
import { API_URL } from "../../data/url";

const photosData = [
  {
    src: "/images/photo1.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo1",
    btnText: "15 мая 2024",
  },
  {
    src: "/images/photo2.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo2",
    btnText: "16 мая 2024",
  },
  {
    src: "/images/photo3.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo3",
    btnText: "17 мая 2024",
  },
  {
    src: "/images/photo3.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo3",
    btnText: "17 мая 2024",
  },
  {
    src: "/images/photo3.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo3",
    btnText: "17 мая 2024",
  },
  {
    src: "/images/photo3.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo3",
    btnText: "17 мая 2024",
  },
  {
    src: "/images/photo3.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo3",
    btnText: "17 мая 2024",
  },
  {
    src: "/images/photo3.jpg",
    text: "Выставка InterCharm Россия (Москва) выставочный стенд KART",
    href: "/gallery/photo3",
    btnText: "17 мая 2024",
  },
];

const videosData = [
  // example video items (assuming you have thumbnails or use video URLs)
  {
    src: "/videos/video1-thumb.jpg",
    text: "Video 1",
    href: "/gallery/video1",
    btnText: "10 мая 2024",
  },
  {
    src: "/videos/video2-thumb.jpg",
    text: "Video 2",
    href: "/gallery/video2",
    btnText: "12 мая 2024",
  },
];

function GalerySection() {
  const t = useTranslations("GaleryPage");
  const locale = useLocale();

  const [showPhotos, setShowPhotos] = useState(true);
  const [photosData, setPhotosData] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL + "/posts/", {
          headers: {
            "Accept-Language": locale,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch gallery");

        const data = await res.json();

        const photos = data.filter((item) => item.type === "photo");
        const videos = data.filter((item) => item.type === "video");

        setPhotosData(photos);
        setVideosData(videos);
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [locale]);

  const galleryItems = showPhotos ? photosData : videosData;

  return (
    <section className="w-full flex flex-col items-center mt-[30px]">
      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowPhotos(true)}
          className={`px-4 py-2 rounded-2xl ${
            showPhotos
              ? "bg-[#A0C287] text-white"
              : "bg-[#F5F5F5] border border-[#A0C287]"
          }`}
        >
          {t("buttons.photos")}
        </button>
        <button
          onClick={() => setShowPhotos(false)}
          className={`px-4 py-2 rounded-2xl ${
            !showPhotos
              ? "bg-[#A0C287] text-white"
              : "bg-[#F5F5F5] border border-[#A0C287]"
          }`}
        >
          {t("buttons.videos")}
        </button>
      </div>

      {/* Loader */}
      {loading && <p className="text-center text-gray-500">loading</p>}

      {/* Gallery Items */}
      {!loading && (
        <div className="flex flex-wrap justify-center gap-4 mt-[30px]">
          {galleryItems.map(({ src, text, href, btnText }, idx) => (
            <GaleryItem
              key={idx}
              src={src}
              text={text}
              href={href}
              type={showPhotos ? "photo" : "video"}
              btnText={btnText}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default GalerySection;
