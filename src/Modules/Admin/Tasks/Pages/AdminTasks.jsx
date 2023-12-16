import './AdminTasks.css'
import { CardTask } from '../../../../Components/CardTask/CardTask';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserTasks() {
    const [pageCount, setPageCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    let limit = 8;
    const isAdmin = true;


    // get the first slid
    useEffect(()=>{
        axios.get(`https://mar-services.onrender.com/tasks?_page=1&_limit=${limit}`)
        .then((data)=> {
                const total = data.headers['x-total-count'];
                setPageCount(Math.ceil(total / limit));
                setTasks(data.data);
                console.log(data);
        })
        .catch((err)=> console.log(err));
    },[]);


    // get other slides Tasks
    const fetchTasks = async (currentPage) => {
        try{
        await axios.get(`https://mar-services.onrender.com/tasks?_page=${currentPage}&_limit=${limit}`)
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
    


    // var settings = {
    //     dots: true,
    //     customPaging: (i) => {
    //       return <div>{i + 1}</div>;
    //     },
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           initialSlide: 1
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between px-2 '>
                <p className="header-style mb-0 ">Tasks</p>
                <button className='btn mx-5'><Link to={'/dashboard/tasks/assigntask'}>Assign Task</Link></button>
            </div>

            <div className="sa_bodyBox bg-transparent">
                {
                tasks.length === 0 ? <div className='text-center'>Loading...</div>
                : 
                tasks.map((item, index) => (
                    <div key={index} className='sa_backTask'>
                        <CardTask isAdmin={isAdmin}
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


            {/* <div className='pb-4'>
            <Slider {...settings} className='sa_containerSlideAllProjects'>
                <div className='sa_bodyBox bg-transparent'>
                    
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>


                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                </div>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                </div>
                <div className='sa_bodyBox bg-transparent'>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                    <div className='sa_backTask'>
                        <CardTask isAdmin={isAdmin} />
                    </div>
                </div>
            </Slider>
            </div> */}
        </div>
    )
}