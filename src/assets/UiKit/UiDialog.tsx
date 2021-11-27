import * as React from 'react'
import { TransitionProps } from '@mui/material/transitions'

import { IconButton } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import CloseIcon from '@mui/icons-material/Close'

//CustomHook
const useUiDialog = () => {
  const [open, setopen] = React.useState(false)

  const toogle = () => {
    setopen((prev: boolean) => !prev)
  }

  const render = (props: {
    title: string
    fullScreen?: boolean
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    headerClassName?: string
    content: () => React.ReactElement
    handleClose?: () => void
  }) => {
    return (
      <UiDialog
        open={open}
        title={props.title}
        fullScreen={props.fullScreen}
        maxWidth={props.maxWidth}
        headerClassName={props.headerClassName}
        onClose={toogle}
        handleClose={props.handleClose}
      >
        {props.content()}
      </UiDialog>
    )
  }

  return { open, toogle, render }
}

export default useUiDialog

//Component
type TUiDialog = {
  open: boolean
  title?: string
  fullScreen?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  headerClassName?: string
  handleClose?: () => void
  onClose?: () => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export const UiDialog: React.FC<TUiDialog> = (props) => {
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      maxWidth={props.maxWidth ? props.maxWidth : 'sm'}
      fullScreen={props.fullScreen}
    >
      <div className='px-6 pb-6'>
        <div className={`flex justify-between items-center h-16 ${props.headerClassName}`}>
          <h4>{props.title}</h4>
          <IconButton onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {props.children}
      </div>
    </Dialog>
  )
}
