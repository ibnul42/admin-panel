import React, { useState } from 'react'

const sidebarIcons = ['/assets/icons/Vector.svg', '/assets/icons/list.svg', '/assets/icons/report.svg', '/assets/icons/security.svg', '/assets/icons/settings.svg']

const Sidebar = () => {
    const [currentState, setCurrentState] = useState(0)
    const onDivClick = (index) => {
        setCurrentState(index)
    }
    return (
        <div className="shadow-[0_3px_4px_4px_rgba(0,0,0,0.25)] px-2 pt-16 flex flex-col gap-2">
            {sidebarIcons.map((icon, index) => (
                <div key={index} onClick={() => onDivClick(index)} className={`${currentState === index ? 'bg-[#D9D9D9]' : ''} hover:bg-[#D9D9D9] p-3 rounded cursor-pointer`}>
                    <img src={icon} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Sidebar