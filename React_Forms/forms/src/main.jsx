import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './form'
import Forms from './multi_form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
     <Form></Form>
     <Forms></Forms>
</>
   
  </StrictMode>,
)
