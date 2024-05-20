import React from 'react'

const PlayerData = ({info,info_val}) => {
  return (
    <div className='w-[250px]  flex gap-0.5 text-[#6A74C9] '>
        <span className='border-2 w-[70%] h-[30px] py-1 rounded-sm px-2 border-[#6A74C9]'>{info}</span>
        <span className='w-[30%] border-2 h-[30px] py-1 rounded-sm text-center border-[#6A74C9]'>{info_val}</span>
    </div>
  )
}

export default PlayerData