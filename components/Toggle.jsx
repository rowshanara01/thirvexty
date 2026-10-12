'use client';

import { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";

export default function Toggle({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="  ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-left font-medium transition-colors  w-full"
      >
    <BiSolidDownArrow className={`${open ? '':' -rotate-90'}  transition-all duration-300 ease-out cursor-pointer`}/>
        <span title='Click to toggle' className=' cursor-pointer w-full'>{title}</span>
      </button>
      {open && (
        <div className="mt-2 ml-6   pl-4 text-sm     ">
          {children}
        </div>
      )}
    </div>
  );
}
