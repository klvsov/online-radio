import { FC, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { IStation } from 'types/stations';
import Backdrop from '../Backdrop';
import './Player.scss';
import { ReactComponent as NextBtn } from 'assets/icons/next.svg';
import { ReactComponent as PrevBtn } from 'assets/icons/prev.svg';
import cls from 'classnames';
interface AudioPlayerProps {
  station: IStation;
  setNextTrack: () => void;
  setPrevTrack: () => void;
}

const Player: FC<AudioPlayerProps> = ({
  station,
  setNextTrack,
  setPrevTrack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="audio_player">
      <div className="track_info">
        <div className="artwork">
          <img
            src={station?.cover}
            alt={`track artwork for ${station?.name}`}
          />
        </div>
        <h2 className="title">{station?.name}</h2>
        <div className="player_wrapper">
          <button onClick={setPrevTrack} className={cls('btn', 'btn_prev')}>
            <PrevBtn />
          </button>
          <button onClick={setNextTrack} className={cls('btn', 'btn_next')}>
            <NextBtn />
          </button>
          <AudioPlayer
            src={station.musicSrc}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            className="player"
          />
        </div>
      </div>
      <Backdrop activeColor={'#fff'} isPlaying={isPlaying} />
    </div>
  );
};

export default Player;
