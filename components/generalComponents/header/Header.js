'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/pro-duotone-svg-icons'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'


const navigation = [
  { name: 'Dashboard', href: '#', icon: <></>, current: true },
  { name: 'Team', href: '#', icon: <></>, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]


const Header = ({setSidebarOpen}) => {
    
  return (
      <div className="z-[100] flex h-[58px] w-full justify-between pl-0 pr-4 transition bg-white shadow-[0_0_5px_rgb(0,0,0,.2)]">
          {/* logoContiner */}
          <div className='flex flex-row items-center h-full'>
              <button type="button" onClick={() => setSidebarOpen(state=>!state)} className="h-full w-[58px] hover:bg-[#F5F5F6] transition">
                  <span className="sr-only">Toggle sidebar</span>
                  <FontAwesomeIcon icon={faNavicon}  fontSize={22}/>
              </button>
          </div>
          {/* logoContiner */}
      </div>
  )
}


export default Header;