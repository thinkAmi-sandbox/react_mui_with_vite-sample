import {Button, Modal} from '@mui/material'
import {useState} from 'react'

const Component = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Open
      </Button>

      <Modal open={open} onClose={handleClose}>
        <h2>hello</h2>
      </Modal>
    </>
  )
}
export default Component
