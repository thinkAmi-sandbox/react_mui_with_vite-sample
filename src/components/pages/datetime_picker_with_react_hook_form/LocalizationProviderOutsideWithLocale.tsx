import {Box, Button, Modal, TextField} from '@mui/material'
import {useState} from 'react'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {ja} from 'date-fns/locale'

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

type FormInput = {
  inputValue: Date
}

const Component = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const {control, handleSubmit, setValue} = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Open
      </Button>

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="inputValue"
                control={control}
                defaultValue={new Date()}
                render={({field}) => {
                  return (
                    <DateTimePicker
                      {...field}
                      label="input"
                      renderInput={(props) => <TextField {...props} />}
                      onChange={(newValue) => {
                        setValue('inputValue', newValue)
                      }}
                    />
                  )
                }}
              />
            </form>
          </Box>
        </Modal>
      </LocalizationProvider>
    </>
  )
}
export default Component
