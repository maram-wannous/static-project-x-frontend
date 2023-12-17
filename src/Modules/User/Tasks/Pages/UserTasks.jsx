import './UserTasks.css'
import { CardTask } from '../../../../Components/CardTask/CardTask';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserTasks() {

    const [pageCount, setPageCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    let limit = 8;

     // get the first slid
     useEffect(()=>{
        axios.get(`https://mar-services.onrender.com/tasks?member_name=maram&_page=1&_limit=${limit}`)
        .then((data)=> {
                const total = data.headers['x-total-count'];
                setPageCount(Math.ceil(total / limit));
                setTasks(data.data);
        })
        .catch((err)=> console.log(err));
    },[]);

    // get other slides Tasks
    const fetchTasks = async (currentPage) => {
        try{
        await axios.get(`https://mar-services.onrender.com/tasks?member_name=maram&_page=${currentPage}&_limit=${limit}`)
        .then((data)=> setTasks(data.data));
        }catch(err){
        console.log(err);
        }
    };


    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        fetchTasks(currentPage);
        // scroll to the top
        //window.scrollTo(0, 0)
      };
    

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between px-2 '>
                <p className="header-style mb-0 ">Tasks</p>
            </div>

            <div className="sa_bodyBox bg-transparent">
                {
                tasks.length === 0 ? <div className='text-center'>Loading...</div>
                : 
                tasks.map((item, index) => (
                    <div key={index} className='sa_backTask'>
                        <CardTask   id={item.id}
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