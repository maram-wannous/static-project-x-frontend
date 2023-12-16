/* eslint-disable react/prop-types */
import './Clock.css'
import { FaClock } from "react-icons/fa";

export const Clock = ({date}) => {
    return (
        <div className='sa_backClock'>
            <FaClock />
            <div className='d-flex align-items-center justify-content-center gap-1'>
                {date}
            {/* <p className='mb-0'>2M</p>
            :
            <p className='mb-0'>0W</p>
            :
            <p className='mb-0'>0D</p> */}
            </div>
        </div>
    )
}
