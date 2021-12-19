import {Box, Button, Modal} from '@mui/material'
import {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

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
  name: string
}

const Component = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const {register, handleSubmit} = useForm()
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Open
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} />
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </>
  )
}
export default Component
