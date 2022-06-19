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
import { MENU, routes } from 'helpers/constants';
import useLocalStorage from 'hooks/useLocalStorage';
import { IStation } from 'types/stations';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [storedValue, setStoredValue] = useLocalStorage('favorite', []);

  const { addToast } = useToasts();

  const [audioList, setAudioList] = useState(storedValue);
  const [selectedStation, setSelectedStation] = useState<IStation | null>(
    audioList?.[0]
  );

  useEffect(() => {
    setStoredValue(audioList);
  }, [audioList, setStoredValue]);

  useEffect(() => {
    if (!audioList?.length) return setSelectedStation(null);
    setSelectedStation(audioList[0]);
  }, [audioList?.length]);

  const currentIndex = audioList.findIndex(
    (item) => item?.stationuuid === selectedStation?.stationuuid
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

  const handleRemoveStation = (id: string): void => {
    const filteredList = audioList.filter(
      (station) => station.stationuuid !== id
    );
    setAudioList(filteredList);
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
            <Route path={routes.root} element={<Outlet />} />
            <Route
              path={routes.list}
              element={
                <PlayList
                  audioList={audioList}
                  handleChangeStation={handleSelectStation}
                  handleRemoveStation={handleRemoveStation}
                />
              }
            />
            <Route
              path={routes.search}
              element={<Search handleChangeStation={handleChangeStation} />}
            />
            <Route
              path={routes.add}
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
