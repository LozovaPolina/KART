"use client";

import React, { useEffect, useRef, useState } from "react";

import SwiperItem from "./SwiperItem";
import { useStateRef, getRefValue } from "../../hooks/useStateRef";
import { getTouchEventData } from "../../hooks/dom";
const MIN_SWIPE_REQUIRED = 40;
const TIME_TO_SWIPE_SLIDE = 7000;



function Swiper({ items, className, itemsLength = items.length,
  widthPercent = 100,
  styleItem = {},
  controlBlock = true }) {
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

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

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
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
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

  function onStart(
    e
  ) {
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    // Only start auto-swiping when neither swiping nor hovering is active
    if (!isSwiping && !isHovering) {
      startAutoSwipe();
    } else {
      stopAutoSwipe();
    }

    return () => stopAutoSwipe();
  }, [isSwiping, isHovering, curIndex, isClient]);
  const outerDivStyle = {
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    touchAction: "pan-y",
    position: "relative",
  };

  const ulStyle = {
    display: "flex",
    minWidth: "100%",
    gap: widthPercent === 100 ? 0 : '1rem',
    flexDirection: "row",
    transition: isSwiping
      ? "none"
      : "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
    transform: `translate3d(${offsetX}px, 0, 0)`,
    userSelect: "none",
    pointerEvents: isMoving ? "none" : "auto",
    WebkitUserSelect: "none",
  };

  const indicatorUlStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    gap: "0.5rem",
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    WebkitUserSelect: "none",
  };

  const indicatorDotStyle = (active) => ({
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    backgroundColor: active ? "#000" : "#666",
    userSelect: "none",
    WebkitUserSelect: "none",
    cursor: "pointer",
  });
  return (
    <div
      style={outerDivStyle}
      onTouchStart={onStart}
      onMouseDown={onStart}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchEnd={() => setIsHovering(false)}
      onClick={(e => e.stopPropagation())}
      className={className}
    >
      <ul style={ulStyle} draggable={false} ref={containerRef}>
        {items.map((item, i) => (
          <SwiperItem style={styleItem} widthPercent={widthPercent} key={i} content={item} />
        ))}
      </ul>

      {controlBlock && <ul style={indicatorUlStyle}>
        {Array.from({ length: itemsLength }).map((_item, i) => (
          <li
            key={i}
            onClick={() => indicatorOnClick(i)}
            style={indicatorDotStyle(i === curIndex)}
          ></li>
        ))}
      </ul>}
    </div>
  );
}

export default Swiper;
