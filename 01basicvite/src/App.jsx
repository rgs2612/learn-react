import React from 'react';

const Element = React.createElement(
  'a',
  {href: 'https://www.google.com/'},
  'Visit Google'
)

function App() {

  return (
   <>
    {Element} 
   </>
  )
}

export default App
