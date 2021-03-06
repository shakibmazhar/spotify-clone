import React from 'react'
import '../component style/SidebarOption.css'

const SidebarOption = ({option, Icon}) => {
    return (
        <div className = "sidebarOption">
            {Icon && <Icon className = 'sidebarOption-icon'></Icon>}
            {Icon ? <h4>{option}</h4>
            : <p>{option}</p>}
        </div>
    )
}

export default SidebarOption
