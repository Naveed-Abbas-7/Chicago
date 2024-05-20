import React from 'react'
import SideBar from '../components/SideBar'
import Nav from '../components/Nav'
import TeamMembers from '../components/TeamMembers'
import teamIcon from '../assets/myteam/Teamicon.svg'
import addIcon from '../assets/Icons/wallet.svg'


const MyTeam = () => {
  return (
    <div>
        <div className='flex font-Poppins bg-[#f6f7fb] overflow-hidden'>
            <div className=''>
                <SideBar/>
            </div>
            <div className='w-full flex flex-col'>
                <div><Nav/></div>
                <div className='flex justify-center'>
                <div className='w-[80%] h-full flex flex-col mr-4 gap-5'>
                  <div className='flex justify-between md:flex-row flex-col gap-5 py-3 pt-6' >
                    <div className='flex gap-2'>
                      <img src={teamIcon} alt="" />
                      <span className='flex flex-col'>
                        <span className='text-[24px]'>TEAM MEMBERS</span>
                        <span className='text-[12px]'>Players</span>
                      </span>
                    </div>
                    <div className='flex gap-2 '>
                      <button className='py-2 h-fit px-5 rounded-full border-2 border-[#6A74C9]'>All Players</button>
                      <button className='py-2 h-fit px-6 rounded-full text-white bg-[#6A74C9]'>My Team</button>
                    </div>
                  </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                  <TeamMembers/>
                  <TeamMembers/>
                  <TeamMembers/>
                  <TeamMembers/>
                  <TeamMembers/>
                  <TeamMembers/>
                  <TeamMembers/>
                  <div className='flex justify-center items-center shadow-2xl rounded-xl'>
                    <div className='flex flex-col items-center gap-5  shadow-2xl rounded-xl'>
                      <div><img className='w-[48px] h-[48px]' src={addIcon} alt="" /> </div>
                      <div>
                      <button className='py-2 h-fit px-6 rounded-lg text-white bg-[#6A74C9]'>My Team</button>
                      </div>
                    </div>
                    

                  </div>
                  </div>

                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}
export default MyTeam