import { IconButton } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonsView, DialogView, FormView, LoaderView, PaginationView } from './UiComponents'
import CloseIcon from '@mui/icons-material/Close'

const components = [
  { component: <ButtonsView />, tabText: `Buttons`, isSelected: true },
  { component: <DialogView />, tabText: `Dialog`, isSelected: false },
  { component: <PaginationView />, tabText: `Pagination`, isSelected: false },
  { component: <LoaderView />, tabText: `Loader`, isSelected: false },
  { component: <FormView />, tabText: `Formularios`, isSelected: false },
  // { component: <FormsView />, tabText: `Formularios`, isSelected: false },
  // { component: <ChipsView />, tabText: `Chips`, isSelected: false },
  // { component: <IconsView />, tabText: `Iconos`, isSelected: false },
  // { component: <TypographyView />, tabText: `Tipografía`, isSelected: false },
]

const UiKitView: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(components[0])

  return (
    <div className='px-8 pb-8 h-screen'>
      <div className='flex justify-between items-center py-2'>
        <h4>UIKIT</h4>
        <Link to='/'>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </div>
      <hr />
      <div className='grid grid-cols-12 mt-8' style={{ height: 'calc(100vh - 100px)' }}>
        <div className='col-span-2 overflow-auto border-r border-gray-300' style={{ height: 'calc(100vh - 100px)' }}>
          <h5 className='my-2'>Componentes</h5>
          {components.map((iter) => (
            <div className={`py-2 hover:bg-gray-200 pl-4 ${selectedItem.tabText === iter.tabText ? 'bg-gray-200' : ''}`}>
              <p className={`p--sm cursor-pointer m-0`} onClick={() => setSelectedItem(iter)}>
                {iter.tabText}
              </p>
            </div>
          ))}
        </div>

        <div className='col-span-10 overflow-auto px-8' style={{ height: 'calc(100vh - 100px)' }}>
          {selectedItem.component}
        </div>
      </div>
    </div>
  )
}

export default UiKitView
