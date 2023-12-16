/* eslint-disable react/prop-types */
import './CardTask.css'
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineInsertComment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { RiDeleteBin5Fill } from 'react-icons/ri';
import axios from 'axios';
import { BiPencil } from 'react-icons/bi';


export const CardTask = ({isAdmin, id, task_title, describtion, member_name, start_date, end_data, status, preority, member_img}) => {

     //handeling delete task
     async function handleDeleteTask() {
        try{
            await axios.delete(`https://mar-services.onrender.com/tasks/${id}`);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <div className='sa_CardTask'>
            <div className='d-flex align-items-center gap-2 justify-content-between flex-wrap '>
                <div className='d-flex align-items-center gap-2'>
                    <HiOutlineLightBulb className='sa_lamp' />
                    <div>
                        <p className='sa_titleTaskCard mb-0 '>{task_title}</p>
                        <div className='d-flex align-items-center gap-2 flex-wrap'>
                            <p className='mb-0 sa_TextP'>#{describtion} <span className='sa_TextSpan'>{member_name}</span></p>
                            <p className='sa_btnType mb-0'>{preority}</p>
                            <p className='sa_btnStatus mb-0'>{status}</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-4 flex-wrap'>
                    <div>
                        <p className='sa_DateTextUserProjects mb-0'>Start Date</p>
                        <div className='d-flex gap-1 sa-startdate'>
                            <CiCalendar className='sa_IconBtnKanban' />
                            <p className='sa_DateTextUserProjects mb-0'>{start_date}</p>
                        </div>
                    </div>
                    <div>
                        <p className='sa_DateTextUserProjects mb-0'>End Date</p>
                        <div className='d-flex gap-1 sa-enddate'>
                            <CiCalendar className='sa_IconBtnKanban' />
                            <p className='sa_DateTextUserProjects mb-0'>{end_data}</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 '>
                    {/* <Clock /> */}
                    <div className='sa_DivImgTask'>
                        <img src={member_img} alt="" />
                    </div>
                    <Link to={isAdmin ? '/dashboard/tasks/subtask' : '/dashboard/usertasks/subtask'}>
                        <button><MdOutlineInsertComment className='sa_btnToSubTask' /></button>
                    </Link>
                    {
                        isAdmin && <Link to={`/dashboard/tasks/update/${id}`}><BiPencil className="colorGreen RA-table-icon"/></Link>
                    }
                    {
                        isAdmin && <div className='mr-delet-task' onClick={handleDeleteTask} ><RiDeleteBin5Fill/></div>
                    }
                </div>
            </div>
        </div>
    )
}
