"use client";

import React, { useEffect, useRef, useState } from "react";

import SwiperItem from "./SwiperItem";
import { useStateRef, getRefValue } from "../../hooks/useStateRef";
import { getTouchEventData } from "../../hooks/dom";
const MIN_SWIPE_REQUIRED = 40;
const TIME_TO_SWIPE_SLIDE = 7000;



export default function Swiper({items, className, itemsLength = items.length, widthPercent = 100,styleItem = {}, controlBlock = true,}) {
  const startXRef = useRef(0);
  const curOffsetXRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const containerRef = useRef(null);

  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const autoSwipeIntervalRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  function onMove(e) {
    setIsMoving(true);
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(curOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) newOffsetX = 0;
    if (newOffsetX < minOffsetX) newOffsetX = minOffsetX;

    setOffsetX(newOffsetX);
  }

  function onEnd() {
    setIsMoving(false);
    const containerWidth = getRefValue(containerRef)?.offsetWidth ?? 0;
    const curOffsetX = getRefValue(curOffsetXRef);
    let newOffsetX = getRefValue(offsetXRef);
    const diff = curOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    }

    newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;

    setIsSwiping(false);
    setIsHovering(false);

    setOffsetX(newOffsetX);
    setCurIndex(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onEnd);
    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("touchend", onEnd);
  }

  function onStart(e) {
    setIsSwiping(true);
    setIsHovering(true);
    curOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  }

  function indicatorOnClick(index) {
    if (index > itemsLength - 1 || index < 0) return;
    const containerWidth = getRefValue(containerRef)?.offsetWidth ?? 0;
    setCurIndex(index);
    setOffsetX(-(index * containerWidth));
  }

  function startAutoSwipe() {
    if (autoSwipeIntervalRef.current !== null) return;

    autoSwipeIntervalRef.current = setInterval(() => {
      const container = getRefValue(containerRef);
      const containerWidth = container?.offsetWidth ?? 0;
      const nextIndex = (curIndex + 1) % itemsLength;
      setCurIndex(nextIndex);
      setOffsetX(-(nextIndex * containerWidth));
    }, TIME_TO_SWIPE_SLIDE);
  }

  function stopAutoSwipe() {
    if (autoSwipeIntervalRef.current) {
      clearInterval(autoSwipeIntervalRef.current);
      autoSwipeIntervalRef.current = null;
    }
  }

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;
    if (!isSwiping && !isHovering) {
      startAutoSwipe();
    } else {
      stopAutoSwipe();
    }
    return () => stopAutoSwipe();
  }, [isSwiping, isHovering, curIndex, isClient]);

  return (
      <div
          className={`w-full overflow-hidden max-w-full select-none touch-pan-y relative ${className ?? ""}`}
          onTouchStart={onStart}
          onMouseDown={(e) => {
            e.preventDefault(); // Prevent text selection on drag start
            onStart(e);
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchEnd={() => setIsHovering(false)}

      >
        <ul
            ref={containerRef}
            draggable={false}
            className={`flex min-w-full flex-row transition-transform  duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] select-none ${
                isSwiping ? "transition-none" : ""
            }`}
            style={{
              transform: `translate3d(${offsetX}px, 0, 0)`,
              gap: widthPercent === 100 ? 0 : "1rem",
              pointerEvents: isMoving ? "none" : "auto",
            }}
        >
          {items.map((item, i) => (
              <SwiperItem
                  key={i}
                  style={styleItem}
                  widthPercent={widthPercent}
                  content={item}
              />
          ))}
        </ul>

        {controlBlock && (
            <ul className="flex justify-center absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 backdrop-blur-md bg-white/40 px-4 py-2 rounded-full select-none">
              {Array.from({ length: itemsLength }).map((_, i) => (
                  <li
                      key={i}
                      onClick={() => indicatorOnClick(i)}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                          i === curIndex ? "bg-black" : "bg-gray-600"
                      }`}
                  ></li>
              ))}
            </ul>
        )}
      </div>
  );
}

