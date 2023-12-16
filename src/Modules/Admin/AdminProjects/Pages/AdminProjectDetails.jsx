import './adminprojectdetails.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Clock } from '../../../../Components/Clock/Clock';
import { CardTask } from './../../../../Components/CardTask/CardTask';
import { BiCommentDots } from "react-icons/bi";
import { SlFolderAlt } from "react-icons/sl";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminProjectDetails() {

    const [users, setUsers] = useState([])
    const [project_title, setProject_title] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_data, setEnd_data] = useState('');
    const [status, setStatus] = useState('');
    const [team_members, setTeam_members] = useState([]);
    const [tasks, setTasks] = useState([]);
    const isAdmin = true;

     // get project id to update it
     const id = Number(window.location.pathname.replace("/static-project-x-frontend/dashboard/adminprojects/details/", ""));

    // get project id details
    useEffect(() => {
        axios.get(`https://mar-services.onrender.com/projects/${id}`)
        .then((data) => {
            setProject_title(data.data.project_title);
            setStart_date(data.data.start_date);
            setEnd_data(data.data.end_data);
            setStatus(data.data.status);
            setTeam_members(data.data.team_members)
        })
        .catch((err) => console.log(err));
    }, []);

    // get user to show img team
    useEffect(() => {
        axios.get('https://mar-services.onrender.com/team_members')
        .then((data) => setUsers(data.data))
        .catch((err) => console.log(err));
    }, []);

    // get Tasks related to specific project
    useEffect(()=>{
        axios.get(`https://mar-services.onrender.com/tasks?project_id=${id}`)
        .then((data)=> setTasks(data.data))
        .catch((err)=> console.log(err));
    },[]);

    return (
        <div>
            <div className='sa_divTitle d-flex justify-content-between flex-wrap'>
                <div>
                    <p className="header-style">Projects / {project_title}</p>
                    <div className='d-flex align-items-center gap-2'>
                        <p className='mb-0'>{project_title}</p>
                        <FaLongArrowAltRight className='text-black-50' />
                            {
                                users.map((user) => (
                                    team_members.map((item, index) => (
                                        user.id === item && 
                                        <div key={index} className='sa_CardImageTeam sa_CardImage2'>
                                            <img className='sa_imgTeam' src={user.image} alt="" />
                                        </div>
                                ))))
                            }
                        <p className= {
                                    status === 'Completed' ? 'sa_buttcompleted'
                                    :status === "OffTrack" ? 'sa_buttOfftrack'
                                    : 'sa_buttonhold'
                                }
                        >{status}</p>
                    </div>
                </div>
                <div className='d-flex gap-4'>
                    <div className='d-flex flex-column align-items-center h-100 justify-content-end'>
                        <p className='sa_textTime'>Start Date</p>
                        <Clock date={start_date} />
                    </div>
                    <div className='d-flex flex-column align-items-center h-100 justify-content-end'>
                        <p className='sa_textTime'>Deadline</p>
                        <Clock date={end_data} />
                    </div>
                </div>
            </div>
            <div className='sa_bodyBox sa_divTitle '>
                {
                    tasks.length === 0 ? <div className='text-center'>Loading...</div>
                    : 
                    tasks.map((item, index) => (
                        <div key={index} className='sa_backTask'>
                            <CardTask isAdmin={isAdmin}
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
                <div className='d-flex align-items-center gap-4 justify-content-end '>
                    <div className='d-flex align-items-center gap-2'>
                        <BiCommentDots className='sa_iconBottomTaska' />
                        <p className='mb-0 sa_textBottomTaska'>50 tasks</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <SlFolderAlt className='sa_iconBottomTaska' />
                        <p className='mb-0 sa_textBottomTaska'>15 files</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



