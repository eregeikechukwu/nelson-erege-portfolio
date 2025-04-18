"use client";

import { clsx } from "clsx";
import { CldImage, CldVideoPlayer } from "next-cloudinary";

import { Center } from "@/components";

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === "image" ? (
      <CldImage
        src={source}
        className="object-cover"
        fill={true}
        alt="project items"
      />
    ) : null;
  const video =
    type === "video" ? (
      <CldVideoPlayer
        src={source}
        loop={true}
        controls={false}
        muted={true}
        autoPlay="always"
        width="100%"
        height="100%"
        className="!static !bg-transparent"
      />
    ) : null;

  return (
    <Center
      className={clsx(
        "relative w-1/4 min-w-[150px] rounded max-md:min-w-[260px]",
        {},
      )}
      style={
        {
          // minWidth: "150px",
        }
      }
    >
      {image}
      {video}
    </Center>
  );
}
