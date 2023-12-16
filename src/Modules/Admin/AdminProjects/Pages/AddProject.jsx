import { Form } from 'react-bootstrap';
import './Project.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../../../Routes/Loading';
export default function AddProject(){
    const [users, setUsers] = useState([])
    const [project_title, setProject_title] = useState('');
    const [project_type, setProject_type] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_data, setEnd_data] = useState('');
    const [status, setStatus] = useState('');
    const [describtion, setDescribtion] = useState('');
    const [team_members, setTeam_members] = useState([]);
    const [loading, setLoading] = useState(false);


    // get user to select team
    useEffect(() => {
        axios.get('https://mar-services.onrender.com/team_members')
        .then((data) => setUsers(data.data))
        .catch((err) => console.log(err));
    }, []);


    // sent data to database
    async function HandleSubmite(e) {
        setLoading(true);
        e.preventDefault();
        try {
           await axios.post('https://mar-services.onrender.com/projects', {
                project_title: project_title,
                project_type: project_type,
                start_date: start_date,
                end_date: end_data,
                describtion: describtion,
                status: status,
                team_members: team_members,
            });
            setLoading(false);
            window.location.pathname = '/static-project-x-frontend/dashboard/adminprojects/projects';
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    function checkboxHandler(e){
		let isSelected = e.target.checked;
		let value = parseInt(e.target.value);

		if( isSelected ){
			setTeam_members( [...team_members, value ] )
		}else{
			setTeam_members((prevData)=>{
				return prevData.filter((id)=>{
					return id!==value
				})
			})
		}
	}


    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle">Projects / Create Project</h1>
            {loading && <Loading />}
            <form className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">Project Title</label>
                            <input type="email" className="form-control ms-2 mt-3 d-flex" id="fn"
                                   aria-describedby="emailHelp"
                                   value={project_title}
                                   onChange={(e)=> setProject_title(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> Project Type</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                   aria-describedby="emailHelp"
                                   value={project_type}
                                   onChange={(e) => setProject_type(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center bg-white colorBlack">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 "
                                value={start_date}
                                onChange={(e) => setStart_date(e.target.value)}>
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 "
                                    value={end_data}
                                    onChange={(e) => setEnd_data(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <Form.Group className="col-md-12 d-flex flex-column justify-content-start align-items-start ms-2" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Status</Form.Label>
                        <Form.Select style={{width: '200px'}}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option disabled value="">Select State</option>
                            <option value="OnTrack">OnTrack</option>
                            <option value="OffTrack">OffTrack</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">Project Description</label>
                        <input type="email" className="form-control d-flex w-90 ms-2 h-6 RA-borderRadius" id="fn"
                            value={describtion}
                            onChange={(e) => setDescribtion(e.target.value)}
                        />

                    </div>
                </div>

                <h6 className="mt-5 mx-2 RA-margin-Right w-50">Project Roles</h6>
                <div className="accordion accordion-flush w-50 RA-border-table mx-2 my-2" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header RA-bgWhite" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Project Members
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
                                                    checked={ team_members.includes( item.id ) } 
                                                    value={item.id} 
                                                    onChange={checkboxHandler} />
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
                
                <div className="d-flex justify-content-end">
                    <button className="btn mx-2 px-1 py-1 fs-5" onClick={HandleSubmite}>Create</button>
                </div>
            </form>
        </div>
    )


}