import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './Collapsible.css'

const Collapsible = ({ lable, children }) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };
    const getIcon = () => (open ? <IoIosArrowUp /> : <IoIosArrowDown />);
    
    return (
        <div className='about-container'>
            <div className='d1' onClick={toggle}>
                <h1 className='toggle'>{lable}</h1>
                <h1>{getIcon()}</h1>
            </div>
            <div className={open ? "content-show" : "content-parent"}>
                <div className='content'> {children} </div>
            </div>
        </div>
    );
};
export default Collapsible;