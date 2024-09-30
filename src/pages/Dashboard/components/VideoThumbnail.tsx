import { useRef, useEffect, useState } from "react";

const VideoWithThumbnail = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnail, setThumbnail] = useState<string>("");

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d"); // Using optional chaining here

    const generateThumbnail = () => {
      if (video && canvas && ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumbnail(canvas.toDataURL("image/png"));
      }
    };

    video?.addEventListener("loadeddata", generateThumbnail);

    return () => {
      video?.removeEventListener("loadeddata", generateThumbnail);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        width="600"
        controls
        style={{ display: "none" }} // Hide the video element
      >
        <source src="/videos/my-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <canvas
        ref={canvasRef}
        style={{ display: "none" }} // Hide the canvas element
      />

      {thumbnail && (
        <div>
          <h1>Video Thumbnail</h1>
          <img src={thumbnail} alt="Video Thumbnail" width="600" />
        </div>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
