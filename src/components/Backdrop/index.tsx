import { FC, useEffect } from 'react';
import styles from './Backdrop.module.scss';
import cls from 'classnames';

interface BackdropProps {
  activeColor: string;
  isPlaying: boolean;
}

const Backdrop: FC<BackdropProps> = ({ activeColor, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-color', activeColor);
  }, [activeColor]);

  return (
    <div
      className={cls(styles.color_backdrop, {
        [styles.playing]: isPlaying,
      })}
    />
  );
};

export default Backdrop;

//isPlaying ? 'playing' : 'idle'}`}
