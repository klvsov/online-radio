import { useState, FC } from 'react';
import {} from 'react-router-dom';
import { useGetStationsQuery } from 'redux/radioApi';
import defaultFavicon from 'assets/icons/music-player-svgrepo-com.svg';
import { useForm } from 'react-hook-form';
import Button from 'UI/Button';
import List from 'UI/List';
import Box from 'UI/Box';
import SearchContainer from 'UI/SearchContainer';
import Link from 'UI/Link';
import Title from 'UI/Title';
import { COUNTRIES, GENRES } from 'helpers/constants';
import { IStation, IStationItem } from 'types/stations';
import MaterialSelectBox from '../SelectBox';
import { SelectChangeEvent } from '@mui/material/Select';

interface SearchProps {
  handleChangeStation: (currentId: string, data: IStation) => void;
}

const Search: FC<SearchProps> = ({ handleChangeStation }) => {
  const [tag, setTag] = useState('');
  const [country, setCountry] = useState('');
  const [page, setPage] = useState(0);
  const [startSearch, setStartSearch] = useState(false);

  const { handleSubmit } = useForm();

  const { data } = useGetStationsQuery([country, tag, page], {
    skip: !startSearch,
  });

  const handleSearch = () => {
    setPage(0);
    if (!country || !tag) return;
    setStartSearch(true);
  };

  const setNextPage = () => {
    setPage(page + 1);
  };

  const setPrevPage = () => {
    setPage(page - 1);
  };

  const handleChangeCountry = (event: SelectChangeEvent): void => {
    setStartSearch(false);
    setCountry(event.target.value as string);
  };
  const handleChangeTag = (event: SelectChangeEvent): void => {
    setStartSearch(false);
    setTag(event.target.value as string);
  };

  const handleChange = (data: IStationItem): void => {
    const station: IStation = {
      name: data.name,
      cover: data.favicon || defaultFavicon,
      musicSrc: data.url,
      stationuuid: data.stationuuid,
    };
    handleChangeStation('', station);
  };

  return (
    <SearchContainer>
      <>
        <MaterialSelectBox
          options={COUNTRIES}
          placeholder="Select Country"
          selectedOption={country}
          handleChange={handleChangeCountry}
        />
        <MaterialSelectBox
          options={GENRES}
          placeholder="Select Genre"
          selectedOption={tag}
          handleChange={handleChangeTag}
        />
        <Button
          onClick={handleSubmit(handleSearch)}
          label="Search"
          disabled={!country || !tag}
        />
        <Box isColumn={false}>
          <>
            {data && !!data?.length && (
              <List handleChange={handleChange} list={data} />
            )}
            {data && !data.length && (
              <Title>No stations found for your request</Title>
            )}
          </>
        </Box>
        {data && !!data?.length && (
          <Box isColumn={false}>
            <>
              <Link disabled={!page} onClick={setPrevPage}>
                &#8592; Prev page
              </Link>

              <Link disabled={data.length < 10} onClick={setNextPage}>
                Next page &#8594;
              </Link>
            </>
          </Box>
        )}
      </>
    </SearchContainer>
  );
};

export default Search;
