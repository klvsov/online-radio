import { FC } from 'react';
import { IStation } from 'types/stations';
import List from 'UI/List';

interface PlayListProps {
  audioList: IStation[];
  handleChange: (station: IStation) => void;
}

const PlayList: FC<PlayListProps> = ({ audioList, handleChange }) => {
  return (
    <div style={{ width: '100%' }}>
      {audioList?.length && (
        <List list={audioList} handleChange={handleChange} />
      )}
    </div>
  );
};

export default PlayList;
