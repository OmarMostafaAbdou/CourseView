// import React from 'react'
import './Swift.css'

function Swift() {
    return (
        <>
            <div className='row row-col-2 swift'>
                <div className="col-6 swift-text">
                    <p style={{color: '#000000', fontSize: '24px'}}>By Themadbrains in <span style={{color: '#49BBBD', fontSize: '24px', fontWeight: 'bold'}}>inspiration</span></p>
                    <p style={{color: '#2F327D', fontSize: '44px', fontWeight: 'bold'}}>Why Swift UI Should Be on the Radar of Every Mobile Developer</p>
                    <p style={{color: '#696984', fontSize: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='app-btn'style={{fontSize:'16px'}}>
                    Start learning now
                </button>
                </div>
                <div className="col-6 swift-img">
                <img src="src\assets\Group 40 (1).png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Swift