import "./Sidbar.css"
import { NavLink } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";
import { FaTasks, FaUsers } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgPerformance } from "react-icons/cg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import {  useEffect, useState } from "react";

export default function Sidbar() {

    const emailStorage = localStorage.getItem('bearer');
    const [isOpen,setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: undefined
      });
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
          });
        }
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
            <div className="sa_sidebar bg-white pt-5"
                style={{
                    width: windowSize.width < 991 ? (isOpen? '240px' : 'fit-content') : '240px'
                }}
            >
                    <NavLink to='/static-project-x-frontend/dashboard/' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <BiSolidHome />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Home</p>
                    </NavLink>
                    <NavLink to={(emailStorage === 'admin@gmail.com') ?'/static-project-x-frontend/dashboard/adminprojects' : '/static-project-x-frontend/dashboard/userprojects'} className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <RiProjectorFill />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Projects</p>
                    </NavLink>
                    <NavLink to={(emailStorage === 'admin@gmail.com') ? '/static-project-x-frontend/dashboard/tasks' : '/static-project-x-frontend/dashboard/usertasks'} className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <FaTasks />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Tasks</p>
                    </NavLink>
                    <NavLink to='/static-project-x-frontend/dashboard/worklog' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <GoProjectRoadmap />
                        <p className='m-0' 
                        style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Work Logs</p>
                    </NavLink>
                    <NavLink to='/static-project-x-frontend/dashboard/performance' className="d-flex align-items-center gap-2 sa_textSidbar"
                        style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                    >
                        <CgPerformance />
                        <p className='m-0' 
                       style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                        >Performance</p>
                    </NavLink>
                    {
                        (emailStorage === 'admin@gmail.com') && 
                        <NavLink to='/static-project-x-frontend/dashboard/users' className="d-flex align-items-center gap-2 sa_textSidbar"
                            style={{padding: isOpen ? '10px 8px 10px 15px': '10px 13px'}}
                        >
                            <FaUsers/>
                            <p className='m-0' 
                            style={{display: windowSize.width < 991?(isOpen ? 'block' : 'none'): 'block'}}
                            >Users</p>
                        </NavLink>
                    }

                    <div className="d-lg-none sa_showSidbar position-absolute"
                        onClick={()=>setIsOpen(!isOpen)}
                        >
                        {
                            isOpen? (<IoIosArrowDropleftCircle/>): (<IoIosArrowDroprightCircle/>)
                        }
                    </div>
            </div>
    )
}