import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {Box, Button, Modal, TextField} from '@mui/material'
import {DateTimePicker, LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {ja} from 'date-fns/locale'
import {Dispatch, SetStateAction} from 'react'

type Props = {
  datetimeLabel: Date | null
  setDateTimeLabel: Dispatch<SetStateAction<Date | null>>
  open: boolean
  handleClose: () => void
}

type Input = {
  inputValue: Date | null
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const Component = ({open, handleClose, datetimeLabel, setDateTimeLabel}: Props): JSX.Element => {
  const {control, handleSubmit, setValue} = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data)
    setDateTimeLabel(data['inputValue'])
    handleClose()
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="inputValue"
                control={control}
                defaultValue={datetimeLabel}
                render={({field}) => {
                  return (
                    <DateTimePicker
                      {...field}
                      label="input"
                      inputFormat="yyyy/MM/dd HH:mm:ss"
                      mask="____/__/__ __:__:__"
                      renderInput={(props) => <TextField {...props} />}
                      onChange={(newValue) => {
                        setValue('inputValue', newValue)
                      }}
                    />
                  )
                }}
              />

              <Button type="submit" variant="contained">
                Save
              </Button>
            </form>
          </Box>
        </Modal>
      </LocalizationProvider>
    </>
  )
}
export default Component
