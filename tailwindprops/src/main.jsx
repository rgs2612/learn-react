import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card username="Rovin" role="Doctor"  source="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Card username="Sureka" role="Animal" />
  </StrictMode>,
)
