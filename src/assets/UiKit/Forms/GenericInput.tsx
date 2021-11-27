import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

export type TGenericInput = {
  name: string
  label?: string
  textarea?: boolean
  form: UseFormReturn<any>
  options?: RegisterOptions
  className?: string
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  textareaProps?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
}

const GenericInput: React.FC<TGenericInput> = (props) => {
  return (
    <>
      {props.textarea ? (
        <textarea
          {...props.textareaProps}
          {...props.form.register(props.name, props.options)}
          className={`focus:outline-none px-4 p--md py-2 
          ${props?.textareaProps?.disabled ? 'bg-black-005 border-none' : 'border border-black'} 
          ${props.textareaProps?.className ?? ''}`}
          id={props.name}
        />
      ) : (
        <input
          {...props.inputProps}
          {...props.form.register(props.name, props.options)}
          className={`h-12 focus:outline-none px-4 p--md 
          ${props?.inputProps?.disabled ? 'bg-black-005 border-none' : 'border border-black'} ${
            props.inputProps?.className ?? ''
          }`}
          id={props.name}
        />
      )}
    </>
  )
}

export default GenericInput
