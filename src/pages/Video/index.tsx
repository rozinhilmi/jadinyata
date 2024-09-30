import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { title } = useParams();
  return (
    <div>
      <video width="100%" controls>
        <source src={`/videos/${title}.mp4`} type="video/mp4" />
        {/* <source src={`/videos/${title}.webm`} type="video/webm" />
        <source src={`/videos/${title}.ogg`} type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
