import { FC } from 'react';
import styled from 'styled-components';
import { IStation } from 'types/stations';

interface ListProps {
  list: IStation[];
  handleChange: (item: IStation) => void;
  handleRemove?: (id: string) => void;
}

const StyledList = styled.div`
  width: 100%;
  margin: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-right: 0px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-radius: 5px;
    background: #4c5a65;
  }
`;

const RemoveItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  padding: 2px;
  font-size: 1rem;
  &:active {
    background: #00000040;
  }
`;

const List: FC<ListProps> = ({ list, handleChange, handleRemove }) => {
  return (
    <StyledList>
      {list.map((item) => (
        <ListItem onClick={() => handleChange(item)} key={item.stationuuid}>
          {item.name}
          {handleRemove && (
            <RemoveItem
              onClick={() => item.stationuuid && handleRemove(item.stationuuid)}
            >
              x
            </RemoveItem>
          )}
        </ListItem>
      ))}
    </StyledList>
  );
};

export default List;
