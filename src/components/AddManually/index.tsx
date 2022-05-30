import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormGroup from 'UI/Form';
import Input from 'UI/Input';
import Button from 'UI/Button';
import Box from 'UI/Box';
import ErrorMessage from 'UI/ErrorMessage';
import { IStation } from 'types/stations';

interface AddManuallyProps {
  handleChangeStation: (currentId: string, data: IStation) => void;
}

const INITIAL_FIELDS = { cover: '', name: '', musicSrc: '' };

const AddManually: FC<AddManuallyProps> = ({ handleChangeStation }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IStation>();

  const onSaveStation: SubmitHandler<IStation> = (data: IStation): void => {
    handleChangeStation('', data);
    reset(INITIAL_FIELDS);
  };

  return (
    <Box isColumn={true}>
      <>
        <FormGroup>
          <>
            <Input
              name="name"
              placeholder="Station name"
              label="Station name"
              isRequired={true}
              register={register}
              isUrl={false}
              isError={Boolean(errors?.['name']?.message)}
            />
            <ErrorMessage>{errors?.['name']?.message}</ErrorMessage>
          </>
        </FormGroup>
        <FormGroup>
          <>
            <Input
              name="cover"
              placeholder="Station favicon (url)"
              label="Station favicon"
              register={register}
              isRequired={false}
              isUrl={true}
              isError={Boolean(errors?.['cover']?.message)}
            />
            <ErrorMessage>{errors?.['cover']?.message}</ErrorMessage>
          </>
        </FormGroup>
        <FormGroup>
          <>
            <Input
              name="musicSrc"
              placeholder="Station url"
              label="Station url"
              isRequired={true}
              register={register}
              isUrl={false}
              isError={Boolean(errors?.['musicSrc']?.message)}
            />
            <ErrorMessage>{errors?.['musicSrc']?.message}</ErrorMessage>
          </>
        </FormGroup>
        <Box isColumn={true}>
          <Button
            label="Save Station"
            onClick={handleSubmit(onSaveStation)}
            disabled={false}
          />
        </Box>
      </>
    </Box>
  );
};

export default AddManually;
