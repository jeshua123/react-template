import { PropsWithChildren, useState } from 'react'
import { useCopyToClipboard } from 'custonHooks/useCopyToClipboard'
import UiButton from '../UIButton'
import useUiDialog from '../UiDialog'
import useUiPagination, { UiPagination } from '../UiPagination'
import UiLoader from '../UiLoader'
import { useForm } from 'react-hook-form'
import InputField from '../Forms/InputField'
import SelectField from '../Forms/SelectField'

export const ButtonsView = () => {
  const { clipboard } = useCopyToClipboard()
  return (
    <ComponentWrapper title={'UiButton'}>
      <pre className='p--md border p-4 whitespace-pre-wrap'>
        {`Puedes editar los estilos en el componente raiz
        
Propiedades del componente:
        
  type TUiButton = {
	  className?: string
      variant?: TVariant
      theme?: TTheme
      size?: TSize
      asLink?: boolean
      to?: string
      type?: 'submit' | 'button' | 'reset'
      disabled?: boolean
      onClick?: (e?: any) => void
  }
}`}
      </pre>

      <h4 className='mt-4'>Primary contained button (Default theme)</h4>
      <UiButton onClick={() => clipboard(`<UiButton></UiButton>`)}>Click to copy button code</UiButton>

      <h4 className='mt-4'>Primary outlined button</h4>
      <UiButton variant='outlined' onClick={() => clipboard(`<UiButton variant='outlined'></UiButton>`)}>
        Click to copy button code
      </UiButton>

      <h4 className='mt-4'>Secondary contained button</h4>
      <UiButton theme='secondary' onClick={() => clipboard(`<UiButton theme='secondary'></UiButton>`)}>
        Click to copy button code
      </UiButton>

      <h4 className='mt-4'>Secondary outlined button</h4>
      <UiButton theme='secondary' variant='outlined' onClick={() => clipboard(`<UiButton variant='outlined'></UiButton>`)}>
        Click to copy button code
      </UiButton>

      <h4 className='mt-4'>Default button</h4>
      <UiButton theme='default' onClick={() => clipboard(`<UiButton variant='outlined'></UiButton>`)}>
        Click to copy button code
      </UiButton>
    </ComponentWrapper>
  )
}

export const DialogView = () => {
  const { clipboard } = useCopyToClipboard()
  const dialog = useUiDialog()
  return (
    <ComponentWrapper title={'useUiDialog'}>
      <pre className='p--md border p-4 whitespace-pre-wrap'>
        {`Es un custom hook que devueltes el estado de apertura y cierre del modal, asi como una funcion que renderiza el componente y recibe las propiedades del UiDialog como parametros de la funcion
        
Propiedades del componente:

  const dialog = useUiDialog() //Declara el hook

  dialog.toogle() //Metodo que setea el state que abre o cierra el componente
        
  render({  // Metodo que renderiza el componente
	title: string,
    fullScreen?: boolean,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    headerClassName?: string
    content: () => React.ReactElement
    handleClose?: () => void // Metodo que se ejecuta cuando se hace click fuera del Dialog
  })
}`}
      </pre>

      <h4 className='mt-4'>Dialog</h4>
      <UiButton onClick={dialog.toogle} className='mt-4'>
        Abrir Dialog
      </UiButton>

      {dialog.render({
        title: 'Titulo del dialog',
        content: () => {
          return (
            <>
              <h3>Contenido del dialog</h3>
              <UiButton
                onClick={() =>
                  clipboard(`
    {dialog.renderDialog({
      title: 'Titulo del dialog',
      content: () => {
        return (
          <>
            <h1>Contenido del dialog</h1>
          </>
          )
        },
      })}
              `)
                }
                className='block mx-auto mt-8'
              >
                Click para copiar el codigo
              </UiButton>
            </>
          )
        },
      })}
    </ComponentWrapper>
  )
}

export const PaginationView = () => {
  const { clipboard } = useCopyToClipboard()
  const pagination = useUiPagination({
    pages: 15,
    className: 'flex justify-center',
    shapeClassName: 'bg-blue-600 text-white',
    variant: 'outlined',
    size: 'large',
    onChange: () => console.log('Estas en la pagina:', pagination.page),
  })

  return (
    <ComponentWrapper title={'useUiPagination'}>
      <pre className='p--md border p-4 whitespace-pre-wrap'>
        {`Es un custom hook que devuelve el current page, un metodo que se ejecuta cuando se seleccionan los items de paginador y un metodo que renderiza el paginador.
        
Propiedades del componente:

Importante: Parametro pages: Cantidad de paginas. "Si tienes el total de items (count), debes calcular la cantidad de paginas para agregarlo al parametro"

  const pagination = useUiPagination({    //Declara el hook
    pages: number
    className: string
    shapeClassName?: string
    variant?: 'outlined'
    shape?: 'rounded'
    size?: 'small' | 'medium' | 'large'
    onChange?: () => void //Se ejecuta cuando se selecciona alguna de las opciones del paginador
  })
    
  pagination.page // Contiene el current page
  pagination.setPage // Para forzar con javascript una pagina en especifico
  pagination.render() // Renderiza el paginador
}`}
      </pre>

      <h4 className='mt-4'>Pagination</h4>
      {pagination.render()}

      <UiButton
        className='block ml-auto'
        onClick={() =>
          clipboard(`
    const pagination = useUiPagination({
      pages: 15,
      className: 'flex justify-center',
      onChange: () => console.log('Estas en la pagina:', pagination.page)
  })
              `)
        }
      >
        Click para copiar el codigo
      </UiButton>
    </ComponentWrapper>
  )
}

export const LoaderView = () => {
  const { clipboard } = useCopyToClipboard()
  const [open, setOpen] = useState(false)

  const handleLoader = () => {
    clipboard(`<UiLoader open={open} />`)
    setOpen(true)
  }
  return (
    <ComponentWrapper title={'UiButton'}>
      <pre className='p--md border p-4 whitespace-pre-wrap'>
        {`Puedes editar los estilos en el componente raiz
        
Propiedades del componente:
        
  type TUiLoader = {
	  open: boolean
    onClick?: () => void
  }
}`}
      </pre>

      <h4 className='mt-4'>Loader</h4>
      <UiButton onClick={handleLoader} className='mt-4'>
        Click to copy button code
      </UiButton>

      <UiLoader open={open} onClick={() => setOpen(false)} />
    </ComponentWrapper>
  )
}

export const FormView = () => {
  const { clipboard } = useCopyToClipboard()
  const form = useForm()

  return (
    <ComponentWrapper title={'Formularios'}>
      <pre className='p--md border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:
        
  TGenericInput = {
    name: string
    label?: string
    textarea?: boolean
    form: UseFormReturn<any> //React hook form
    options?: RegisterOptions //Validaciones de react hook form
    className?: string
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    textareaProps?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  }

  export type TGenericSelect = {
    selectOptions?: { value: any; label: string | number | undefined }[]
    withoutDefaultValue?: boolean
    label?: string | any
    selectProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
  }
}`}
      </pre>

      <h4 className='mt-4'>InputField</h4>
      <InputField
        name='name'
        label='Nombre'
        inputProps={{ className: 'w-full', placeholder: 'Ingresa tu nombre' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
      />
      <UiButton
        className='block ml-auto mt-4'
        onClick={() =>
          clipboard(`
     <InputField
        name='name'
        label='Nombre'
        inputProps={{ className: 'w-full', placeholder: 'Ingresa tu nombre' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
      />
              `)
        }
      >
        Click para copiar el codigo
      </UiButton>

      <h4 className='mt-4'>SelectField</h4>
      <SelectField
        name='options'
        label='Opciones'
        selectProps={{ className: 'w-full' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
        selectOptions={[
          { value: 'option1', label: 'Optción 1' },
          { value: 'option2', label: 'Optción 2' },
          { value: 'option3', label: 'Optción 3' },
        ]}
      />
      <UiButton
        className='block ml-auto mt-4'
        onClick={() =>
          clipboard(`
    <SelectField
        name='options'
        label='Opciones'
        inputProps={{ className: 'w-full' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
        selectOptions={[
          { value: 'option1', label: 'Optción 1' },
          { value: 'option2', label: 'Optción 2' },
          { value: 'option3', label: 'Optción 3' },
        ]}
      />
              `)
        }
      >
        Click para copiar el codigo
      </UiButton>
    </ComponentWrapper>
  )
}

const ComponentWrapper = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <div className={'col-span-12 mb-8'}>
      <h3 className='mb-4'>{props.title}</h3>
      {props.children}
    </div>
  )
}
