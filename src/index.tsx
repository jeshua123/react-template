import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SnackbarProvider } from 'notistack'

import AppRouter from 'AppRouter/AppRouter'

import 'assets/styles/index.scss'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <AppRouter />
        </SnackbarProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
