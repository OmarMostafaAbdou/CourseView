// import React from 'react'
import { Link } from 'react-router-dom'
import './RelatedBlog .css'

function RelatedBlog() {
    return (
        <>
            <div className="related-blog">
                <div className="related">
                    <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Related Blog </span>
                    <button style={{ color: '#49BBBD', border: 'none', backgroundColor: '#9DCCFF', marginLeft: '1500px' }}>See all</button>

                    <div className=' row row-col-2 gap-50px m-100px blogs'>

                        <div className="blog-card col-6" >
                            <img src="src/assets/Group 40.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title" style={{ color: '#252641', fontSize: '26px', marginTop: '20px' }}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                                <div className='lina' style={{margin:'20px'}}>
                                    <img style={{backgroundColor:'#D9D9D9',borderRadius:'60px'}} src="src\assets\image 12 (1).png" alt="" /><span style={{fontSize:'18px',fontWeight:'bold',marginLeft:'15px'}}>Lina</span>
                                </div>
                                <p className="card-text" style={{ color: '#696984', fontSize: '20px', marginTop: '20px' }}>
                                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                                </p>
                                <span>
                                    <Link to="">Read more</Link>
                                <button className="btn" style={{ backgroundColor: '#49BBBD', color: 'white', margin: '35px 20px 25px 450px' }}>
                                    Apply a Teacher
                                </button>
                                </span>
                            </div>
                        </div>

                        <div className="blog-card col-6" >
                            <img src="src/assets/Group 40.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title" style={{ color: '#252641', fontSize: '26px ', marginTop: '20px' }}>Become a Coursector</p>
                                <p className="card-text" style={{ color: '#696984', fontSize: '20px', marginTop: '20px' }}>
                                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                                </p>
                                <button className="btn" style={{ backgroundColor: '#49BBBD', color: 'white', margin: '35px 20px 25px 450px' }}>
                                    Apply a Coursector
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default RelatedBlog 