import { FC, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';

import { IStation } from 'types/stations';
import Backdrop from '../Backdrop';
import { ReactComponent as NextBtn } from 'assets/icons/next.svg';
import { ReactComponent as PrevBtn } from 'assets/icons/prev.svg';
import { routes } from 'helpers/constants';
import './styles.scss';

interface AudioPlayerProps {
  station: IStation | null;
  setNextTrack: () => void;
  setPrevTrack: () => void;
}

const Player: FC<AudioPlayerProps> = ({
  station,
  setNextTrack,
  setPrevTrack,
}) => {
  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState(false);

  if (!station?.musicSrc)
    return (
      <div className="emptyState">
        No saved stations found. Use{' '}
        <span onClick={() => navigate(routes.search)}>search</span> or add a
        station <span onClick={() => navigate(routes.add)}>manually</span> and
        enjoy listening
      </div>
    );

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
            src={station?.musicSrc}
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
