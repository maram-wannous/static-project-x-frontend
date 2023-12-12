import { useState } from 'react';
import './AdminTasks.css';
import { Form } from 'react-bootstrap';

export default function AssignTask() {
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');

    return (
        <div className="RA-bgBlue">
            <h1 className="RA-HeaderStyle RA-Width-fit">Tasks / Create Tasks</h1>

            <div className="RA-bgWhite RA-MarginBox">
                <div className="d-flex row justify-content-center">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="fn" className="RA-Label ps-2">SubTask Title</label>
                            <input type="email" className="form-control ms-2 mt-3 d-flex" id="fn"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div
                            className=" d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                            <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2"> SubTask Status</label>
                            <input type="text" className="form-control  mt-3 " id="ln"
                                   aria-describedby="emailHelp">
                            </input>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">Start Date</label>
                                <input type="date" className="form-control  mt-3 ">
                                </input>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-lg-start align-items-center">
                                <label htmlFor="ln" className="RA-Label RA-fsLabel ps-2">End Date</label>
                                <input type="date" className="form-control mt-3 ">
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
                    <Form.Group className="col-md-4 d-flex flex-column justify-content-start align-items-start ms-2" controlId="status">
                        <Form.Label className="RA-Label RA-fsLabel ps-2">Priority</Form.Label>
                        <Form.Select style={{width: '200px'}}
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}>
                            <option disabled value="">Select State</option>
                            <option value="high">high</option>
                            <option value="low">low</option>
                        </Form.Select>
                    </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-center">
                        <label htmlFor="fn" className="RA-Label ps-2">SubTask Description</label>
                        <input type="email" className="form-control d-flex w-100 ms-2 h-6 RA-borderRadius" id="fn"/>

                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-between">
                    
                    <div className="col-lg-4 mx-2">
                        <h6 className="mx-2 RA-margin-Right w-50">Assignee</h6>
                        <div className="accordion accordion-flush  RA-border-table mx-2 my-2" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header RA-bgWhite" id="headingOne">
                                    <button className="accordion-button colorWhite" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                        Team Lead
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <table className="table table-hover">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Yash</th>
                                                <td>Team Lead</td>
                                                <td><input type="checkbox"/></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Yash</th>
                                                <td>Team Lead</td>
                                                <td><input type="checkbox"/></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Yash</th>
                                                <td>Team Lead</td>
                                                <td><input type="checkbox"/></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-lg-4">

                        <div className="row align-items-end">

                            <div className="row justify-content-between">
                                <div className="col-12 mb-3">
                                    <button className="btn  w-100 colorBgGreen RA-attch RA-bgLightGreen RA-colorGreen">Add
                                        Attachment
                                    </button>
                                </div>
                                <div className="col-12">
                                    <button className="btn w-100">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}