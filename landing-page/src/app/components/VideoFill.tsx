import { CSSProperties } from "react";

interface VideoProps {
  style?: CSSProperties;
  className?: string;
}

export const VideoFill: React.FC<VideoProps> = ({ className, style }) => {
  return (
    <>
      <header
        className={
          className +
          " relative flex items-center justify-center h-screen mb-12 overflow-hidden"
        }
        style={{ ...style, display: "flex" }}
      >
        {/* <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div> */}
        <div className="relative z-30 p-5 text-6xl text-white">
          Securing and automating warehouse management
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute top-20 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
};
