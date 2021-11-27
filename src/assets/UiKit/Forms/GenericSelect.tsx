import { TGenericInput } from './GenericInput'

const selectStyles = {
  verticalAlign: 'middle',
  background: `url('data:image/svg+xml,<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="%23bdbdbd" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>') no-repeat right 0.5rem center/15px 15px`,
}

export type TGenericSelect = {
  selectOptions?: { value: any; label: string | number | undefined }[]
  withoutDefaultValue?: boolean
  label?: string | any
  selectProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
}

const GenericSelect: React.FC<TGenericSelect & TGenericInput> = (props) => {
  return (
    <select
      {...props.form.register(props.name, props.options)}
      className={`h-12 focus:outline-none p--md px-4 border border-black appearance-none ${props.selectProps?.className ?? ''}`}
      style={selectStyles}
      disabled={props?.selectProps?.disabled}
    >
      {!props.withoutDefaultValue && <option value=''>Selecciona una opción</option>}
      {props.selectOptions?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default GenericSelect
