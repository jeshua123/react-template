import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

type TUiLoader = {
  open: boolean
  onClick?: () => void
}

const UiLoader: React.FC<TUiLoader> = (props) => {
  return (
    <div>
      <Backdrop open={props.open} onClick={props?.onClick} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}

export default UiLoader
