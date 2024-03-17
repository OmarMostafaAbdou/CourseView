// import React from 'react'
import './BlogList.css'
import '../MemberShip/AppInMobile.css'
// import UX from '../../assets/UX.png'

function BlogList() {
    return (
        <>
            <div className="blog">
                <div className='blog-list'>
                    <p style={{ color: '#000000', fontSize: '30px', fontWeight: 'bold' }}>Reading blog list</p>
                    <div className='row   tec'>
                        <div className='col-3 UX' >
                            <button className='app-btn' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#000000' }}>UX/UI</button>
                        </div>
                        <div className='col-3 react'>
                            <button className='app-btn' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#000000' }}>React</button>
                        </div>
                        <div className='col-3 php'>
                            <button className='app-btn' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#000000' }}>PHP</button>
                        </div>
                        <div className='col-3 js'>
                            <button className='app-btn' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#000000' }}>JavaScript</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogList