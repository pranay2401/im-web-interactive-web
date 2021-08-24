import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// Components
import ReactPlayer from "react-player/youtube";

// Utils
import { getFormattedTime } from "imbase/utils/getFormattedTime";

// Styles
import styles from "./seeker.module.scss";

const Seeker = forwardRef((props, ref) => {
  const { className, videoUrl, setSeekerTime } = props;

  const seekerRef = useRef(null);

  const [playing, setPlaying] = useState(null);

  const [duration, setDuration] = useState(true);

  const [played, setPlayed] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      seekTo(val) {
        seekerRef.current.seekTo(val);
      },
    }),
    []
  );

  useEffect(() => {
    setPlaying(true);
    const playedTime = Math.round(played * duration) > 2;
    if (playedTime) {
      setPlaying(false);
    }
  }, [duration, played]);

  // seeking video by input range
  const seekVideo = (e) => {
    if (!playing) {
      setPlaying(false);
    }
    if (e.target?.value) {
      setPlaying(false);
      setPlayed(parseFloat(e.target.value));
      seekerRef.current.seekTo(e.target.value);
      setSeekerTime(getFormattedTime(Math.round(played * duration)));
      setPlaying(false);
    }
  };

  // handle video progress
  const handleProgress = (progress) => {
    if (played < progress.played) {
      setPlaying(false);
    }
    setPlayed(progress.played);
  };

  // handle video on duration
  const handleDuration = (duration) => {
    setPlaying(false);
    setDuration(duration);
  };

  return (
    <div className={cx(styles.seekerWrapper, className)}>
      <ReactPlayer
        playing={playing}
        className={styles.reactSeeker}
        url={videoUrl}
        ref={seekerRef}
        onDuration={handleDuration}
        onProgress={handleProgress}
        onReady={() => {
          setPlaying(false);
        }}
        width={"100%"}
        muted="true"
      />
      <div>
        <input
          type="range"
          min={0}
          max={0.999999}
          step={"any"}
          value={played}
          onChange={seekVideo}
        />
        {/* <time dateTime={`P${Math.round(played * duration)}S`}>
        {getFormattedTime(played * duration)}
      </time> */}
      </div>
    </div>
  );
});

Seeker.propTypes = {
  className: PropTypes.string,
  videoUrl: PropTypes.string,
  setSeekerTime: PropTypes.func,
  seekTo: PropTypes.func,
};

Seeker.defaultProps = {
  className: undefined,
  videoUrl: "https://www.youtube.com/watch?v=vUjihJpWQPE",
  setSeekerTime: () => {},
  seekTo: () => {},
};

export default Seeker;