import {  useEffect, useState } from 'react'
import './UserSubTask.css'
import TaskPopUp from '../Components/TaskPopUp/TaskPopUp';
import { CardTask } from './../../../../Components/CardTask/CardTask';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { CiCalendar } from 'react-icons/ci';
import { MdOutlineInsertComment } from 'react-icons/md';
import axios from 'axios';


export default function UserSubTask() {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [taskdata, settTaskdata] = useState({});
    const [subtasks, setSubtasks] = useState([]);
    const isSubtask = true;

    // get task id to show it
    const id = Number(window.location.pathname.replace("/static-project-x-frontend/dashboard/usertasks/subtask/", ""));


    const handleOpenPopup = (value) =>{
        setOpenPopUp(!value);
    }

    // get task id details
    useEffect(() => {
        axios.get(`https://mar-services.onrender.com/tasks?id=${id}`)
        .then((data) => settTaskdata(data.data[0]))
        .catch((err) => console.log(err));
    }, []);

     // get sub task related to this task
     useEffect(()=>{
        axios.get(`https://mar-services.onrender.com/subtasks?task_id=${id}`)
        .then((data)=> setSubtasks(data.data))
        .catch((err)=> console.log(err));
    },[]);
    
    return (
        <div>
            <p className="header-style">Task / Subtasks</p>
                {openPopUp && <TaskPopUp closePopup={handleOpenPopup} openPopUp={openPopUp} id={id}/>}
            <div className="sa_bodyBox sa_divTitle">
                <div className='sa_CardTask'>
                    <div className='d-flex align-items-center gap-2 justify-content-between flex-wrap '>
                        <div className='d-flex align-items-center gap-2'>
                            <HiOutlineLightBulb className='sa_lamp' />
                            <div>
                                <p className='sa_titleTaskCard mb-0 '>{taskdata.task_title}</p>
                                <div className='d-flex align-items-center gap-2 flex-wrap'>
                                    <p className='mb-0 sa_TextP'>{taskdata.describtion}<span className='sa_TextSpan'>{taskdata.member_name}</span></p>
                                    <p className='sa_btnType mb-0'>{taskdata.preority}</p>
                                    <p className='sa_btnStatus mb-0'>{taskdata.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-4 flex-wrap'>
                            <div>
                                <p className='sa_DateTextUserProjects mb-0'>Start Date</p>
                                <div className='d-flex gap-1 sa-startdate'>
                                    <CiCalendar className='sa_IconBtnKanban' />
                                    <p className='sa_DateTextUserProjects mb-0'>{taskdata.start_date}</p>
                                </div>
                            </div>
                            <div>
                                <p className='sa_DateTextUserProjects mb-0'>End Date</p>
                                <div className='d-flex gap-1 sa-enddate'>
                                    <CiCalendar className='sa_IconBtnKanban' />
                                    <p className='sa_DateTextUserProjects mb-0'>{taskdata.end_data}</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 '>
                            {/* <Clock /> */}
                            <div className='sa_DivImgTask'>
                                <img src={taskdata.member_img} alt="" />
                            </div>
                                <button><MdOutlineInsertComment className='sa_btnToSubTask' /></button>
                        </div>
                        <div className="d-flex align-items-center flex-column mt-4">
                            {
                                subtasks?.map((item, index)=>(
                                    <div key={index} className='sa_backSubTask w-100' onClick={()=>handleOpenPopup(openPopUp)}>
                                        <CardTask isSubtask={isSubtask}
                                                    id={item.id}
                                                    task_title={item.task_title}
                                                    describtion={item.describtion}
                                                    start_date={item.start_date}
                                                    end_data={item.end_data}
                                                    status={item.status}
                                                    preority={item.preority}
                                                    member_img={item.member_img}
                                                    member_name={item.member_name}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}