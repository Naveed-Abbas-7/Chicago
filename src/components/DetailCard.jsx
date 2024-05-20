import React from 'react'

const DetailCard = ({title,text,minitext}) => {
  return (
        <div className='flex flex-col justify-center rounded-2xl text-black bg-white w-[119px] h-[91px] pl-2'>
            <div className='text-[10px]'>{title}</div>
            <div className=' font-semibold'><span className='text-[24px]'>{text}</span><span className='text-[20px]'>{minitext}</span></div>

        </div>
      
  )
}

export default DetailCard
