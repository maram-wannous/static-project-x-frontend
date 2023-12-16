/* eslint-disable react/prop-types */
import './CardProject.css'
import { FiEdit } from "react-icons/fi";
import { BsHourglassBottom } from "react-icons/bs";
import { SlFolderAlt } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';


export const CardProject = ({isAdmin, id, project_title, end_data, status, describtion, team_members}) => {
    const [users, setUsers] = useState([]);
    // get user to select team
    useEffect(() => {
        axios.get('https://mar-services.onrender.com/team_members')
        .then((data) => setUsers(data.data))
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className='sa_cardProject'>
        <div className='d-flex align-items-center justify-content-between border-bottom pb-2'>
            <div className='d-flex align-items-center gap-3 '>
                <Link to={isAdmin? `/static-project-x-frontend/dashboard/adminprojects/details/${id}` : `/static-project-x-frontend/dashboard/userprojects/${id}`}><p className='sa_ProjectName'>{project_title}</p></Link>
                {isAdmin && <Link to={`/static-project-x-frontend/dashboard/adminprojects/update/${id}`}><FiEdit className='sa_FiEdit'/></Link>}
            </div>
            
            <p className= {
                status === 'Completed' ? 'sa_buttcompleted'
                :status === "OffTrack" ? 'sa_buttOfftrack'
                : 'sa_buttonhold'
            }
            >{status}</p>
        </div>
        <div className='pt-4 pb-4 px-2 sa_CardText'>
            <p className='mb-0'>{describtion}</p>
        </div>
        <div className='d-flex align-items-center gap-2 pb-3'>
            <BsHourglassBottom className='sa_BsHourglassBottom'/>
            <p className='sa_DateProject mb-0'>{end_data}</p>
        </div>
        <div className='d-flex align-items-center justify-content-between px-2 py-3'>
            <div className='d-flex align-items-center justify-content-center'>
                {
                    users.map((user) => (
                        team_members.map((item, index) => (
                            user.id === item && <img key={index} src={user.image} className='sa_imgTeam' alt="" />
                    ))))
                }
                
            </div>
            <div className='d-flex align-items-center gap-2'>
                <SlFolderAlt className='sa_SlFolderAlt'/>
                <p className='sa_14_issues mb-0'>14 issues</p>
            </div>
        </div>
    </div>
  )
}