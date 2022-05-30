import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface OptionProps {
  value: string;
  label?: string;
}

interface SelectBoxProps {
  options: OptionProps[];
  placeholder: string;
  selectedOption: string;
  handleChange: (event: SelectChangeEvent) => void;
}

const MaterialSelectBox: FC<SelectBoxProps> = ({
  placeholder,
  options,
  selectedOption = '',
  handleChange,
}) => {
  return (
    <Box sx={{ width: '100%', margin: '5px 0' }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={selectedOption}
          label={placeholder}
          onChange={handleChange}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MaterialSelectBox;
