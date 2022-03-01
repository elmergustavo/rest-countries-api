import React from "react"
import useDarkMode from "../hooks/useDarkMode"

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode()
  return (
    <div className='flex justify-between bg-element_primary shadow-lg py-5 px-16 font-extrabold'>
      <h1 className='text-text_primary lg: text-xl'>Where in the world ?</h1>
      <span
        onClick={() => setTheme(colorTheme)}
        className='flex justify-between items-center cursor-pointer font-semibold text-text_primary gap-1'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
        </svg>
        Dark Mode
      </span>
    </div>
  )
}

export default Header
