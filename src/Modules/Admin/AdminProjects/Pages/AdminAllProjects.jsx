/* eslint-disable react/prop-types */
import './AdminAllprojects.css'
import { CardProject } from '../../../../Components/CardProject/CardProject';
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from 'react';


export const AdminAllProjects = () => {

  const [pageCount, setPageCount] = useState(0);
  const [projects, setProjects] = useState([]);
  let limit = 6;
  const isAdmin = true;


// get the first slid
useEffect(()=>{
  axios.get(`https://mar-services.onrender.com/projects?_page=1&_limit=${limit}`)
  .then((data)=> {
    const total = data.headers['x-total-count'];
    setPageCount(Math.ceil(total / limit));
    setProjects(data.data);
  })
  .catch((err)=> console.log(err));
},[]);

  // get other slides projects
  const fetchProjects = async (currentPage) => {
    try{
      await axios.get(`https://mar-services.onrender.com/projects?_page=${currentPage}&_limit=${limit}`)
      .then((data)=> setProjects(data.data));
    }catch(err){
      console.log(err);
    }
  };


  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    fetchProjects(currentPage);
    // scroll to the top
    //window.scrollTo(0, 0)
  };


  return (
    <div>
      <div className="sa_divTitle d-flex align-items-center justify-content-between">
        <p className="header-style">Projects</p>
        <Link to={'/static-project-x-frontend/dashboard/adminprojects/add'}><button className='btn'>Create</button></Link>
      </div>

      <div className="row p-2">
        {
          projects.length === 0 ? <div className='text-center'>Loading...</div>
          : 
          projects.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4 v my-2">
               <CardProject isAdmin={isAdmin}
                          id={item.id}
                          project_title={item.project_title}
                          end_data={item.end_data}
                          describtion={item.describtion}
                          status={item.status}
                          team_members={item.team_members}
              />
            </div>
          ))
        }
      </div>

      <div className='mr-pagination-containers'>
      <ReactPaginate 
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center align-items-end mr-project-paginat py-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </div>
    </div>
  )
}