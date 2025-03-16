import './App.css'

function Card({username='RGS', role='Software Developer', source='https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200'}) {
  

  return (
    <>
   <div className='flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 m-8 '>
     <div className="shadow-md  w-100 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 m-8">
  <img className="=mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={source} alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{username}</p>
      <p className="font-medium text-gray-500">{role}</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
</div>

    </>
  )
}

export default Card
