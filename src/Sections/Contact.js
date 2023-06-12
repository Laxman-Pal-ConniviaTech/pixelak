import React, { useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { IoVolumeMuteSharp } from "react-icons/io5";
import ReactPlayer from 'react-player'

const Contact = () => {
  const [isMute, setIsMute] = useState(true);
  // const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // const handleVideoClick = () => {
  //   const video = videoRef.current;

  //   if (isPlaying) {
  //     video.pause();
  //   } else {
  //     video.play();
  //   }

  //   setIsPlaying(!isPlaying);
  // };

  const handleMute = () => {
    setIsMute(!isMute);
  };

  return (
    <section id="contact">
      <div className="shell-container">
        <div className="contact-info">
          <h5 className="contact-rainbow-text">Let's Talk</h5>
          <h6 className="contact-rainbow-text">Share your story</h6>
          <div className="emails">
            <a href="mailto:marketing@pixelak.in" className="email">
              marketing@pixelak.in
            </a>
            <a href="mailto:pixelak.in@gmai.com" className="email">
              pixelak.in@gmail.com
            </a>
          </div>
          <div className="phone-numbers">
            <a
              href="tel:8879339759
"
              className="phone"
            >
              +91 8879339759
            </a>{" "}
            /{" "}
            <a
              href="tel:8451884227
"
              className="phone"
            >
              +91 8451884227
            </a>
          </div>
        </div>
        <div className="reel-container contact-video">
         <div className="video">
         <ReactPlayer
         className="react-player"
            url='https://conniviatechlaxman.wistia.com/medias/bx2lboaxcq'
            playing
            ref={videoRef}
            muted={isMute}
            // onClick={handleVideoClick}
            controls={false}
          />
         </div>
          <button onClick={handleMute} className="player-volume">
            {isMute ? <IoVolumeMuteSharp /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
