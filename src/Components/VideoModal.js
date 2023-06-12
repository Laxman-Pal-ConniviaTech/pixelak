import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

const Backdrop = (props) => {
  return <div onClick={props.close} className="backdrop"></div>;
};

const Video = (props) => {
  return (
    <div className="video-container video">
      <ReactPlayer
        className='react-player'
        url='https://conniviatechlaxman.wistia.com/medias/bx2lboaxcq'
        playing
        controls={true}
      />
    </div>
  );
};

const VideoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(<Video />, document.getElementById("video-modal"))}
    </>
  );
};

export default VideoModal;
