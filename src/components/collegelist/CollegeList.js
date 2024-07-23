import React from 'react'
import './CollegeList.css'
import * as CONST from './const'
const Cimages = [];
for (let i = 0; i < CONST.COLLEGE_IAMGE_NAME.length; i++) {
    Cimages.push(require(`../../assets/collegesLogo/${CONST.COLLEGE_IAMGE_NAME[i]}`));
}
const CollegeList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Explore Premier Colleges for Your Future: Admissions Now Open</h2>
            <div className='image-gallery'>
                {
                    Cimages.map(src => <img className='image' src={src} />)
                }
            </div>
        </div>
    )
}

export default CollegeList
