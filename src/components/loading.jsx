import styles from "./Loading.module.css";
import bgvideo from "../assets/mlsc.mp4";

const Loading = () => {
  return (
    <>
      <video src={bgvideo} loop autoPlay muted></video>
    </>
  );
};
export default Loading;
