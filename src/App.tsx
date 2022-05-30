import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import PlayerSound from 'components/Player';
import Search from 'components/Search';
import AddManually from 'components/AddManually';
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

  useEffect(() => {
    setStoredValue(audioList);
  }, [audioList, setStoredValue]);

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

  return (
    <>
      <Menu
        items={MENU}
        handleClick={handleClick}
        currentLocation={location.pathname}
      />
      <Container>
        <>
          <PlayerSound audioList={audioList} onChangeAudioList={setAudioList} />
          <Routes>
            <Route path="/" element={<Outlet />} />
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
