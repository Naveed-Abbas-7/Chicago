import React from 'react'
import folder from '../assets/reports/Folder.svg'

const Folder = ({title,date}) => {
  return (
    <div className='bg-[#EFF2F9] flex flex-col gap-4 p-5 rounded-xl sm:w-[226px] w-[300px] md:h-[183px] h-[200px]'>
        <div>
            <img className='cursor-pointer' src={folder} alt="" />
        </div>
        <div><h2>{title}</h2></div>
        <div>{date}</div>
    </div>
  )
}

export default Folder