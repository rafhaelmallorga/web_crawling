import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Providers from './providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Providers>
)
