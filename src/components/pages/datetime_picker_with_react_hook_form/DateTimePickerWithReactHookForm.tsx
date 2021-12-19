import {Button} from '@mui/material'
import {useState} from 'react'
import DateTimePickerModal from '@/components/pages/datetime_picker_with_react_hook_form/DateTimePickerModal'
import {format} from 'date-fns'

const Component = (): JSX.Element => {
  const [dateTimeLabel, setDateTimeLabel] = useState<Date | null>(new Date())

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <h1>Datetime Picker with React Hook Form</h1>
      <h2>Current value: {dateTimeLabel && format(dateTimeLabel, 'yyyy/MM/dd HH:mm:ss')}</h2>

      <Button onClick={handleOpen} variant="contained">
        Edit DateTime
      </Button>

      <DateTimePickerModal
        datetimeLabel={dateTimeLabel}
        setDateTimeLabel={setDateTimeLabel}
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}
export default Component
