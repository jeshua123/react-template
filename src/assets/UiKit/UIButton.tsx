import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { Button, createStyles, makeStyles } from '@mui/material'

type TVariant = 'contained' | 'outlined' | 'default'
type TTheme = 'primary' | 'secondary' | 'default'
type TSize = 'micro' | 'small' | 'medium' | 'large'

interface IFiButton {
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

const root: Record<string, string> = {
  //Themes
  structure: 'rounded-2xl normal-case transition duration-200',
  disabled: 'bg-gray-400 text-white border-none',
  default_contained: 'bg-transparent text-black border-none hover:bg-gray-50',
  primary_contained: 'bg-green-400 text-white hover:bg-green-300 shadow-md hover:shadow-lg',
  primary_outlined: 'bg-transparent text-green-400 border border-green-400-important hover:bg-gray-50 shadow-md hover:shadow-lg',
  secondary_contained: 'bg-gray-200 text-black hover:bg-gray-50 shadow-md hover:shadow-lg',
  secondary_outlined: 'bg-transparent text-black border border-gray-200 hover:bg-gray-50 shadow-md hover:shadow-lg',

  //Sizes
  micro: 'h-5 text-xs',
  small: 'h-7 text-sm',
  medium: 'h-9 text-base',
  large: 'h-11 text-lg',
}

const UiButton: React.FC<IFiButton> = (props: PropsWithChildren<any>) => {
  const { children, className, variant, size, theme, ...other } = props

  const buttonStyles = () => {
    if (props.disabled) {
      return root.disabled
    }
    const selectedVariant: TVariant = variant ? props.variant : 'contained'
    const selectedTheme: TTheme = theme ? props.theme : 'primary'
    return root[`${selectedTheme}_${selectedVariant}`]
  }

  const buttonSize = () => {
    const selectedSize = props.size ? root[props.size] : root.medium
    return selectedSize
  }

  return (
    <>
      {props.asLink ? (
        <Link to={props.to}>
          <Button
            className={`${className} ${root.structure} ${buttonStyles()} ${buttonSize()}`}
            {...other}
            sx={{ borderStyle: 'solid' }}
          >
            {children}
          </Button>
        </Link>
      ) : (
        <Button
          className={`${className} ${root.structure} ${buttonStyles()} ${buttonSize()}`}
          {...other}
          sx={{ borderStyle: 'solid' }}
        >
          {children}
        </Button>
      )}
    </>
  )
}

export default UiButton
