import {useParams} from 'react-router-dom'

const Component = (): JSX.Element => {
  const params = useParams()

  return (
    <>
      <h1>Child Dynamic</h1>
      <h2>Parameter: {params.childId}</h2>
    </>
  )
}
export default Component
