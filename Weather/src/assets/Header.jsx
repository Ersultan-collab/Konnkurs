import { useState } from 'react'
import React from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
    // const [count, setCount] = useState(0)
    const [active, setActive] = useState(true)

    return (
        <>
            <section className='w-[100px] h-[90vh] rounded-3xl flex items-center justify-center ' style={{ backgroundColor: 'rgb(31, 31, 31)' }}>
                <div className=' w-full h-[90%] m-auto flex items-center flex-col justify-between'>
                    <div className='flex items-center flex-col gap-10'>
                        <div><WidgetsIcon sx={{fontSize:50, color:'white'}}/></div>
                        <div className='flex items-center flex-col gap-7'>
                            <LocationOnIcon sx={{fontSize:30, color:'white'}}/>
                            <CloudIcon sx={{fontSize:30, color:'white'}}/>
                            <BoltIcon sx={{fontSize:30, color:'white'}}/>
                            <SettingsIcon sx={{fontSize:30, color:'white'}}/>
                        </div>
                    </div>
                    <div>
                        <LogoutIcon sx={{fontSize:30, color:'white'}}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header