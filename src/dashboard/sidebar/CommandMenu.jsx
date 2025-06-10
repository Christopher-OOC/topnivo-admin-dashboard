import { Command } from 'cmdk'
import { Eye, EyeClosed, EyeOffIcon, LogOut, PersonStanding, PersonStandingIcon, Phone, Settings, ShoppingCart, WalletCards } from 'lucide-react';
import { useEffect, useState } from 'react'

const CommandMenu = ({ open, setOpen }) => {
  const [value, setValue] = useState('');

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {

  }, [])

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"
      className='fixed inset-0 bg-stone-950/50'
      onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'>
        <Command.Input
        placeholder='What do you need?'
        className='relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none'
        value={value}
        onValueChange={setValue} />
        <Command.List>
          <Command.Empty>No results found for {" "}
            <span className='text-amber-300'>{value}</span>
          </Command.Empty>

          <Command.Group 
          heading="Dashboard"
          className='text-sm mb-3 px-2 text-stone-400'>
            <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><ShoppingCart /> Cart </Command.Item>
              <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><EyeClosed /> Products </Command.Item>
              <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><WalletCards /> Cards </Command.Item>
            
          </Command.Group>
           <Command.Group 
          heading="Integration"
          className='text-sm mb-3 px-2 text-stone-400'>
            <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><PersonStanding /> Profile </Command.Item>
              <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><Settings /> Settings </Command.Item>
               <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><Phone /> Contact Support </Command.Item>
               <Command.Item 
              className='flex cursor-pointer transition-colors p-3 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'><LogOut /> Sign Out </Command.Item>
            
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}

export default CommandMenu;