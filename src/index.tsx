import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app'
import { ZakekeEnvironment, ZakekeProvider } from 'zakeke-configurator-react'

const zakekeEnvironment = new ZakekeEnvironment()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ZakekeProvider environment={zakekeEnvironment}>
      <App />
    </ZakekeProvider>
  </StrictMode>
)


