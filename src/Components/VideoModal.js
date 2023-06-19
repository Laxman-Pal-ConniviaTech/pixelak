import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

const Backdrop = (props) => {
  return <div onClick={props.close} className="backdrop"></div>;
};

const Video = (props) => {
  return (
    <div className="video-container video">
      {/* <ReactPlayer
        className='react-player'
        url='https://vimeo.com/837312727'
        playing
        controls={true}
      /> */}<iframe src="https://player.vimeo.com/video/837312727?h=0f78389d9e&autoplay=1&loop=1&title=0&byline=0&portrait=0" style={{width:"100%",height:"100%"}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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
