import { useEffect, useState } from 'react';
import './AdminTasks.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Loading from '../../../../Routes/Loading';

export default function UpdateSubtask() {
    const [task_id, setTask_id] = useState(0)
    const [subtask_title, setSubtask_title] = useState('')
    const [subtask_type, setSubtask_type] = useState('')
    const [start_date, setStart_date] = useState('')
    const [end_data, setEnd_data] = useState('')
    const [status, setStatus] = useState('');
    const [describtion, setDescribtion] = useState('');
    const [member_name, setMember_name] = useState('');
    const [users, setUsers] = useState([])
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false);

     // get project id to update it
     const id = Number(window.location.pathname.replace("/static-project-x-frontend/dashboard/tasks/subtask/update/", ""));



    // get user to select team
    useEffect(() => {
        axios.get('https://mar-services.onrender.com/team_members')
        .then((data) => setUsers(data.data))
        .catch((err) => console.log(err));
    }, []);

    // get tasks to select task
    useEffect(() => {
        axios.get('https://mar-services.onrender.com/tasks')
        .then((data) => setTasks(data.data))
        .catch((err) => console.log(err));
    }, []);

    // get subtask details to update it
    useEffect(() => {
        axios.get(`https://mar-services.onrender.com/subtasks/${id}`)
        .then((data) => {
            setSubtask_title(data.data.subtask_title);
            setSubtask_type(data.data.subtask_type);
            setTask_id(data.data.task_id);
            setStart_date(data.data.start_date);
            setEnd_data(data.data.end_data);
            setDescribtion(data.data.describtion);
            setStatus(data.data.status);
            setMember_name(data.data.member_name)
        })
        .catch((err) => console.log(err));
    }, []);



    // sent data to database
    async function HandleSubmite(e) {
        setLoading(true);
        e.preventDefault();
        try {
           await axios.put(`https://mar-services.onrender.com/subtasks/${id}`, {
                task_id: task_id,
                subtask_type: subtask_type,
                subtask_title: subtask_title,
                start_date: start_date,
                end_data: end_data,
                status: status,
                describtion: describtion,
                member_name: member_name,
            });
            setLoading(false);
            window.location.pathname = '/static-project-x-frontend/dashboard/tasks';
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle RA-Width-fit">Tasks / Create Tasks</h1>
            {loading && <Loading />}
            <div className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">Task Title</label>
                            <input type="text" className="form-control ms-2 mt-3 d-flex" id="fn"
                                    aria-describedby="emailHelp"
                                    value={subtask_title}
                                    onChange={(e)=> setSubtask_title(e.target.value)}
                                    required
                                   >
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> Task Type</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                   aria-describedby="emailHelp"
                                   value={subtask_type}
                                    onChange={(e)=> setSubtask_type(e.target.value)}
                                    required
                                   >
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 "
                                    value={start_date}
                                    onChange={(e)=> setStart_date(e.target.value)}
                                    required
                                >
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 "
                                    value={end_data}
                                    onChange={(e)=> setEnd_data(e.target.value)}
                                    required
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-start flex-wrap gap-2'>
                    <Form.Group className="col-md-4 d-flex flex-column justify-content-start align-items-start ms-2" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Status</Form.Label>
                        <Form.Select style={{width: '200px'}}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option disabled value="">Select State</option>
                            <option value="OnProgress">OnProgress</option>
                            <option value="OnHold">OnHold</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Canceled">Canceled</option>
                        </Form.Select>
                    </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">Task Description</label>
                        <input type="text" className="form-control d-flex w-100 ms-2 h-6 RA-borderRadius" id="fn"
                            value={describtion}
                            onChange={(e)=> setDescribtion(e.target.value)}
                            required
                        />

                    </div>
                </div>
                <div className="row mt-5 d-flex">
                    
                    <div className="col-lg-6 mx-2 ">
                        <h6 className="mx-2 RA-margin-Right w-50">Assignee</h6>
                        <div className="accordion accordion-flush w-50 RA-border-table mx-2 my-2" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header RA-bgWhite" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Select an user
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <table className="table table-hover">
                                            <tbody>
                                            {
                                                users.map((item, index) => (
                                                <tr key={index}>
                                                    <td scope="row">{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td><input type="checkbox" 
                                                            checked={ member_name === item.name } 
                                                            value={item.name} 
                                                            onChange={(e) => setMember_name(e.target.value)} />
                                                    </td>
                                                </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-2 mt-5">
                        <h6 className="mx-2 RA-margin-Right w-50">Task_id</h6>
                        <div className="accordion accordion-flush w-50 RA-border-table mx-2 my-2" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header RA-bgWhite" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Select an Task
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <table className="table table-hover">
                                            <tbody>
                                            {
                                                tasks.map((item, index) => (
                                                <tr key={index}>
                                                    <td scope="row">{item.id}</td>
                                                    <td>{item.project_title}</td>
                                                    <td><input type="checkbox" 
                                                            checked={ task_id == item.id } 
                                                            value={item.id} 
                                                            onChange={(e) => setTask_id(e.target.value)} />
                                                    </td>
                                                </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn"  onClick={HandleSubmite}>Update</button>
                    </div>

                </div>
            </div>
        </div>
    )
}