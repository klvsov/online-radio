import { FC } from 'react';
import styled from 'styled-components';
import { IStationItem } from 'types/stations';

interface ListProps {
  list: IStationItem[];
  handleChange: (item: IStationItem) => void;
}

const StyledList = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-gap: 10px;
`;

const ListItem = styled.div`
  padding: 10px;
  padding-right: 0px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  font-size: 13px;
  grid-gap: 10px;
  color: #fff;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    background: #4c5a65;
  }
`;

const List: FC<ListProps> = ({ list, handleChange }) => {
  return (
    <StyledList>
      {list.map((item) => (
        <ListItem onClick={() => handleChange(item)} key={item.stationuuid}>
          {item.name}
        </ListItem>
      ))}
    </StyledList>
  );
};

export default List;
