import React from 'react'
import teamMember from "../assets/myteam/teamCard.svg"
import locationLogo from "../assets/myteam/location.svg"

const TeamMembers = () => {
  return (
    <div className='font-Poppins flex flex-col'>
        <div>
            <img className='w-full' src={teamMember} alt="" />
           
        </div>
        <div className='bg-[#eff2f9] flex flex-col text-[#6A74C9] rounded-xl py-5 w-full relative bottom-4 shadow-md shadow-gray-400'>
            <div className='mx-3 flex flex-col'>

            <div className='flex justify-between items-center mt-1'>
                <div className='text-[12px]'><h2>DAVID JONS</h2></div>
                <div className='flex gap-1 items-center'> <span><img src={locationLogo} alt="" /></span> <span className='text-[9px]'>United states</span></div>
            </div>

            <div className='flex justify-between items-center py-1'>
                <div className='text-[12px]'><h2>Player</h2></div>
                <div className='text-[10px]'><h2>Chicago soccer</h2></div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-[12px]'><h2>25Y</h2></div>
                <button className='bg-[#6A74C9] py-2 rounded-md text-white text-[9px] px-3'>view more</button>
            </div>
            </div>


        </div>
        
    </div>
  )
}

export default TeamMembers