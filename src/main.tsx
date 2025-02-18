import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    --
    The strict rules forbid this `!` but I think it's a waste of time trying to work around the
    potential non-existence of the root element, which would be weird */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
