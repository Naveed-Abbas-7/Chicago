import React from 'react';

const Calender = () => {
  return (
    <div className="overflow-x-auto text-white font-Poppins">
      <table className=" flex flex-col gap-3">
        <thead className=" text-white ">
          <tr className='flex gap-2'>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Days</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Monday</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Tuesday</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Wednesday</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Thursday</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Friday</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Saturday</th>
            <th className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Sunday</th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-2'>
          <tr className=" flex gap-2">
            <td className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Week 1</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Monday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Tuesday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Wednesday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Thursday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Friday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Saturday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Sunday</td>
          </tr>
          <tr className=" flex gap-2">
          <td className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Week 1</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Monday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Tuesday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Wednesday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Thursday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Friday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Saturday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Sunday</td>
          </tr>
          <tr className=" flex gap-2">
          <td className="px-4 py-2 bg-[#6A74C9] w-[145px] h-[42px]">Week 1</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Monday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Tuesday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Wednesday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Thursday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Friday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Saturday</td>
            <td className="px-4 py-2 w-[145px] h-[42px] border-2 border-[#6A74C9]">Sunday</td>
          </tr>
        </tbody>
      </table>
    </div>
    // <div className="overflow-x-auto">
    //   <table className="min-w-full border">
    //     <thead className="bg-blue-500 text-white">
    //       <tr>
    //         <th className="px-4 py-2">Days</th>
    //         <th className="px-4 py-2">Monday</th>
    //         <th className="px-4 py-2">Tuesday</th>
    //         <th className="px-4 py-2">Wednesday</th>
    //         <th className="px-4 py-2">Thursday</th>
    //         <th className="px-4 py-2">Friday</th>
    //         <th className="px-4 py-2">Saturday</th>
    //         <th className="px-4 py-2">Sunday</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr className="border-t">
    //         <td className="px-4 py-2 bg-blue-200">Week 1</td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //       </tr>
    //       <tr className="border-t">
    //         <td className="px-4 py-2 bg-blue-200">Week 2</td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //       </tr>
    //       <tr className="border-t">
    //         <td className="px-4 py-2 bg-blue-200">Week 3</td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //         <td className="px-4 py-2"></td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default Calender;