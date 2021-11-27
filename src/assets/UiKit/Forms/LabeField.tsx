type TLabeField = {
  label?: string | any
  name: string
}

const LabeField: React.FC<TLabeField> = (props) => {
  return (
    <>
      {props.label && (
        <label className='p--md block' htmlFor={props.name}>
          {props.label}
        </label>
      )}
    </>
  )
}

export default LabeField
