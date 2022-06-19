import { FC } from 'react';
import { IStation } from 'types/stations';
import List from 'UI/List';

import './styles.scss';

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
    <div className="list_wrapper">
      {!!audioList?.length && (
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
