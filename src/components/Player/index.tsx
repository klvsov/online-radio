import { FC } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { IStation } from 'types/stations';

interface PlayerSoundProps {
  audioList: IStation[];
  onChangeAudioList: (data: IStation[]) => void;
}

const PlayerSound: FC<PlayerSoundProps> = ({
  audioList,
  onChangeAudioList,
}) => {
  const handleRemoveStation = (stationId: string, updatedList: any) => {
    onChangeAudioList(updatedList);
  };

  return (
    <ReactJkMusicPlayer
      audioLists={audioList}
      theme="dark"
      mode="full"
      toggleMode={false}
      autoPlay={false}
      showDownload={false}
      showMiniProcessBar={false}
      showReload={false}
      showPlayMode={false}
      mobileMediaQuery="(max-width: 320px)"
      onAudioListsChange={handleRemoveStation}
    />
  );
};

export default PlayerSound;
