import { createRoot } from 'react-dom/client'
import React from 'react';

const Element = React.createElement(
  'a',
  {href: 'https://www.google.com/'},
  'Visit Google'
)

createRoot(document.getElementById('root')).render(
  <>
    {Element}
  </>
)
