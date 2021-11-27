import UiKitView from 'assets/UiKit/UiPage/UiView'
import routes from 'constants/routes'
import { Routes, Route } from 'react-router-dom'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.ui_kit} element={<UiKitView />} />
    </Routes>
  )
}

export default AppRouter
