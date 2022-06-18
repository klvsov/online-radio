import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Player from 'components/Player';
import Search from 'components/Search';
import AddManually from 'components/AddManually';
import PlayList from 'components/PlayList';
import Container from 'UI/Container';
import Menu from 'UI/Menu';
import { MENU } from 'helpers/constants';
import useLocalStorage from 'hooks/useLocalStorage';
import { IStation } from 'types/stations';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [storedValue, setStoredValue] = useLocalStorage('favorite', []);

  const { addToast } = useToasts();

  const [audioList, setAudioList] = useState(storedValue);
  const [selectedStation, setSelectedStation] = useState(audioList?.[0]);

  useEffect(() => {
    setStoredValue(audioList);
  }, [audioList, setStoredValue]);

  const currentIndex = audioList.findIndex(
    (item) => item.stationuuid === selectedStation.stationuuid
  );

  const handleChangeStation = (currentId: string, station: IStation) => {
    const isInList =
      audioList.findIndex(
        (item: IStation) => item.musicSrc === station.musicSrc
      ) > -1;
    if (isInList)
      return addToast('This station has already been added', {
        appearance: 'warning',
      });

    setAudioList([...audioList, station]);
    return addToast('Successfully added', {
      appearance: 'success',
    });
  };

  const handleClick = (route: string) => {
    navigate(route);
  };

  const handleSelectStation = (station: IStation): void => {
    setSelectedStation(station);
  };

  const setNextTrack = () => {
    setSelectedStation(
      audioList[currentIndex + 1 >= audioList.length ? 0 : currentIndex + 1]
    );
  };

  const setPrevTrack = () => {
    setSelectedStation(
      audioList[currentIndex + 1 >= 0 ? audioList.length - 1 : currentIndex - 1]
    );
  };

  return (
    <>
      <Menu
        items={MENU}
        handleClick={handleClick}
        currentLocation={location.pathname}
      />
      <Container>
        <>
          <Player
            station={selectedStation}
            setNextTrack={setNextTrack}
            setPrevTrack={setPrevTrack}
          />
          <Routes>
            <Route path="/" element={<Outlet />} />
            <Route
              path="/list"
              element={
                <PlayList
                  audioList={audioList}
                  handleChange={handleSelectStation}
                />
              }
            />
            <Route
              path="/search"
              element={<Search handleChangeStation={handleChangeStation} />}
            />
            <Route
              path="/add"
              element={
                <AddManually handleChangeStation={handleChangeStation} />
              }
            />
          </Routes>
        </>
      </Container>
    </>
  );
};

export default App;
