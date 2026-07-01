import React from "react";

interface AmbientBlobBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  animate?: boolean;
  contentClassName?: string;
}

export default function AmbientBlobBackground({
  children,
  className = "",
  animate = true,
  contentClassName = "relative z-10 flex h-full w-full min-h-0",
}: AmbientBlobBackgroundProps) {
  return (
    <div
      className={`relative w-full h-full min-h-105 overflow-hidden bg-main-background ${className}`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className={`absolute w-65 h-65 top-[-6%] left-[16%] bg-blob1 blur-[55px] opacity-[0.55] rounded-[58%_42%_46%_54%/55%_40%_60%_45%] motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_18s_ease-in-out_infinite] [animation-delay:0s]"
              : ""
          }`}
        />
        <div
          className={`absolute w-47.5 h-47.5 top-[8%] left-[2%] bg-blob2 blur-[50px] opacity-[0.5] rounded-[42%_58%_55%_45%/45%_55%_45%_55%] motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_22s_ease-in-out_infinite] [animation-delay:1.4s]"
              : ""
          }`}
        />
        <div
          className={`absolute w-37.5 h-37.5 top-[34%] left-[0%] bg-blob1 blur-[45px] opacity-[0.4] rounded-[55%_45%_40%_60%/50%_55%_45%_50%] motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_16s_ease-in-out_infinite] [animation-delay:2.6s]"
              : ""
          }`}
        />
        <div
          className={`absolute w-47.5 h-47.5 top-[10%] left-[70%] bg-blob3 blur-[45px] opacity-[0.78] rounded-full motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_20s_ease-in-out_infinite] [animation-delay:0.6s]"
              : ""
          }`}
        />
        <div
          className={`absolute w-47.5 h-47.5 bottom-[1%] left-[2%] bg-blob3 blur-[45px] opacity-[0.78] rounded-full motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_20s_ease-in-out_infinite] [animation-delay:0.6s]"
              : ""
          }`}
        />
        <div
          className={`absolute w-10 h-10 top-[34%] left-[82%] bg-blob4 blur-[20px] opacity-[0.5] rounded-full motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_14s_ease-in-out_infinite] [animation-delay:3.2s]"
              : ""
          }`}
        />
        <div
          className={`absolute w-27.5 h-27.5 top-[78%] left-[22%] bg-blob3 blur-[35px] opacity-[0.6] rounded-[48%_52%_55%_45%/50%_45%_55%_50%] motion-reduce:animate-none ${
            animate
              ? "animate-[blob-drift_17s_ease-in-out_infinite] [animation-delay:1.8s]"
              : ""
          }`}
        />
      </div>

      {children && <div className={contentClassName}>{children}</div>}
    </div>
  );
}
