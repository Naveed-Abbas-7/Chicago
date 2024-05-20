import React from 'react'
import SideBar from '../components/SideBar'
import Nav from '../components/Nav'
import arrowdown from '../assets/arrowdown.png'
import iconn from '../assets/iconn.png'
import playicon from '../assets/Play.png'
import exporticon from '../assets/Icons/Export.svg'

const VideoPage = () => {
  return (
    <div className='bg-[#f6f7fb] font-Poppins overflow-hidden'>
        <div className='flex'>
            <div><SideBar/></div>
            <div className='w-full'>
                <div><Nav/></div>
                <div className='flex flex-col py-5 gap-8'>
                    <div className='flex justify-around py-5 gap-5'>
                        <div className='flex items-center gap-3'>
                            <img src={iconn} alt="" />
                            <span className='text-[14px]'>Offensive Organization</span>
                            <img src={arrowdown} alt="" />
                        </div>
                        <button className='flex gap-2 items-center bg-white px-5 py-2 rounded-xl'>
                            <img className='w-[20px]' src={exporticon} alt="" />
                            <span className='text-[14px]'>Upload</span>
                        </button>
                    </div>
                    <div className='flex text-[12px] gap-3 justify-around mx-auto flex-wrap'>
                        <div className='bg-white w-fit flex  items-center justify-self-center py-2 pr-3 pl-1 rounded-xl gap-2 '>
                        <img src={playicon} alt="" />
                        <span>Inter Vs Chicago City Final 1st half</span>
                        </div>
                        
                        <div className='bg-white w-fit flex  items-center justify-self-center py-2 pr-3 pl-1 rounded-xl gap-2 '>
                        <img src={playicon} alt="" />
                        <span>Inter Vs Chicago City Final 1st half</span>
                        </div>

                        <div className='bg-white w-fit flex  items-center justify-self-center py-2 pr-3 pl-1 rounded-xl gap-2 '>
                        <img src={playicon} alt="" />
                        <span>Inter Vs Chicago City Final 1st half</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default VideoPage
