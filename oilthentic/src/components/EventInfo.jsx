import React from 'react'
import Fade from 'react-reveal/Fade';

const EventInfo = () => {
    return (
        <div className="w-full pt-20">
            <div className="flex flex-col md:flex-row lg:flex-row justify-center rounded-xl py-10 md:px-20 lg-px-5">
                <Fade left duration={1500}>
                    <div className="flex flex-col w-full md:w-2/3 lg:w-2/3 m-5">
                        <h1 className="text-3xl font-extrabold mb-10">EVENT INFORMATION</h1>
                        <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, odio laudantium? Dolorem alias nulla provident minus saepe. Nemo veritatis impedit animi exercitationem eaque nobis omnis soluta excepturi quo, deserunt voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt corrupti perspiciatis sit aut autem ducimus voluptate ea repellendus voluptas officiis recusandae cum possimus, fugit dolorum, voluptatibus quidem aliquid suscipit omnis.</p> 
                        <div className="my-2">
                        <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                            ISTANA SENAYAN
                        </div>
                        <div className="my-2">
                            <svg className="inline w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="inline"> Sabtu, 3 April 2021</p>
                        </div>
                        <p className="text-xl font-bold my-2">Guest Star: <span className="">Tulus</span></p>
                    </div>
                </Fade>
                <Fade right duration={1500}>
                    <div className="w-full md:w-1/3 lg:w-1/3 m-5">
                        {/* <img src={imageplaceholder} alt="Guest Star" */}
                        {/* style={{maxHeight: '500px'}}/> */}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default EventInfo
