import { FC } from 'react';
import { IStation } from 'types/stations';
import List from 'UI/List';
import styles from './Playlist.module.scss';

interface PlayListProps {
  audioList: IStation[];
  handleChangeStation: (station: IStation) => void;
  handleRemoveStation: (id: string) => void;
}

const PlayList: FC<PlayListProps> = ({
  audioList,
  handleChangeStation,
  handleRemoveStation,
}) => {
  return (
    <div className={styles.list_wrapper}>
      {audioList?.length && (
        <List
          list={audioList}
          handleChange={handleChangeStation}
          handleRemove={handleRemoveStation}
        />
      )}
    </div>
  );
};

export default PlayList;
