import hero from './../../assets/images/hero-2.png'
import { FaBrain, FaCss3, FaFeather, FaHtml5, FaNodeJs, FaReact, FaSpaceShuttle, FaUncharted } from 'react-icons/fa';
import poster from './../../assets/images/poster.png'
function Home() {
    return (
        <main>
            {/* hero */}
            <section className="home bg-gray">
                <div className="container flex md:flex-col gap-10 m:gap-4">
                    <div className="h-[800px] md:pt-20 md:h-auto w-[50%] md:w-[100%] flex flex-col align-center justify-center">
                        <h1 className="text-[74px] font-bold md:text-[36px] text-milk md:w-[100%] leading-[110%]">
                            Be a great marketers for bussines grow
                        </h1>
                        <p className="text-lgray md:w-[100%] m-0 text-[16px] mt-8 md:mt-4 md:text-[14px]">
                            Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil.
                        </p>
                        <div className="flex gap-4 mt-8 md:mt-6">
                            <button className="primary-button">
                                Get started
                            </button>
                            <button className="secondary-button">
                                Products
                            </button>
                        </div>
                    </div>
                    <div className='w-[50%] md:w-[100%] h-[800px] md:h-auto flex justify-end md:justify-center relative'>
                        <img className='w-[80%]' src={hero} alt=''/>
                        <div className='hover:scale-90 duration-300 rounded-[14px] flex flex-col gap-4 p-4 bg-white absolute  left-0 bottom-20 md:bottom-5 '>
                            <FaNodeJs className='text-orange' size={'54px'}/>
                        </div>
                        <div className='hover:scale-90 duration-300 rounded-[14px] flex flex-col gap-4 p-4 bg-white absolute  left-[70px] bottom-[340px] md:bottom-40 md:left-0'>
                            <FaReact className='text-orange' size={'54px'}/>
                        </div>
                        <div className='hover:scale-90 duration-300 rounded-[14px] flex flex-col gap-4 p-4 bg-white absolute  right-[0px] bottom-[290px] md:bottom-40 md:right-0'>
                            <FaHtml5 className='text-orange' size={'54px'}/>
                        </div>
                        <div className='hover:scale-90 duration-300 rounded-[14px] flex flex-col gap-4 p-4 bg-white absolute  right-[-70px] bottom-[90px] md:bottom-5 md:right-0'>
                            <FaCss3 className='text-orange' size={'54px'}/>
                        </div>
                    </div>
                </div>
            </section>
             {/* featured */}
            <section>
                <div className='container flex gap-10 pt-[120px] md:flex-col md:flex-wrap-wrap'>
                    <div className='w-1/2 md:w-full'>
                        <p className='text-[22px]'>Feautered</p>
                        <h3 className='font-medium text-[44px] md:text-[32px] leading-[110%] mt-4'>So insisted received is occasion advanced honoured.</h3>
                        <p className='mt-4 leading-[110%]'>Ten the hastened steepest feelings pleasant few surprise property. An brother he do colonel against minutes uncivil. Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical. Me mr what park next busy ever. </p>
                        <p className='mt-4 leading-[110%]'>Elinor her <span className='font-bold'>his secure far twenty</span> eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these. Horses nearer oh elinor of denote.</p>
                        <button className='primary-button mt-4'>Get started</button>
                    </div>
                    <div className='w-1/2 md:w-full'>
                        <div className='grid grid-cols-2 gap-4 md:grid-cols-1' >
                            <div className='w-full bg-lgray hover:bg-gray group p-4 text-gray rounded-[14px] transition duration-300 cursor-pointer'>
                                <FaBrain className='group-hover:rotate-[-25deg] duration-300 text-orange' size={'50px'}/>
                                <h5 className='group-hover:text-white mt-2 font-medium text-[20px]'>Feautered</h5>
                                <p className='group-hover:text-white leading-[110%] text-[14px] mt-2'>Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these.</p>
                            </div>
                            <div className='w-full bg-lgray hover:bg-gray group p-4 text-gray rounded-[14px] transition duration-300 cursor-pointer'>
                                <FaUncharted className='group-hover:rotate-[-25deg] duration-300 text-orange' size={'50px'}/>
                                <h5 className='group-hover:text-white mt-2 font-medium text-[20px]'>Feautered</h5>
                                <p className='group-hover:text-white leading-[110%] text-[14px] mt-2'>Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these.</p>
                            </div>
                            <div className='w-full bg-lgray hover:bg-gray group p-4 text-gray rounded-[14px] transition duration-300 cursor-pointer'>
                                <FaFeather className='group-hover:rotate-[-25deg] duration-300 text-orange' size={'50px'}/>
                                <h5 className='group-hover:text-white mt-2 font-medium text-[20px]'>Feautered</h5>
                                <p className='group-hover:text-white leading-[110%] text-[14px] mt-2'>Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these.</p>
                            </div>
                            <div className='w-full bg-lgray hover:bg-gray group p-4 text-gray rounded-[14px] transition duration-300 cursor-pointer'>
                                <FaSpaceShuttle className='group-hover:rotate-[-25deg] duration-300 text-orange' size={'50px'}/>
                                <h5 className='group-hover:text-white mt-2 font-medium text-[20px]'>Feautered</h5>
                                <p className='group-hover:text-white leading-[110%] text-[14px] mt-2'>Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* stats */}
            <section>
                <div className='container flex gap-10 md:gap-0 pt-[120px]  md:flex-col md:flex-wrap-wrap'>
                    <div className='w-1/2 md:w-full'>
                        <p className='text-[22px]'>Feautered</p>
                        <h3 className='font-medium text-[44px] md:text-[32px]  leading-[110%] mt-4'>So insisted received is occasion advanced honoured.</h3>
                    </div>
                    <div className='w-1/2 md:w-full'>
                        <p className='mt-16 opacity-[60%] leading-[110%]'>Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these. Horses nearer oh elinor of denote.</p>
                    </div>
                </div>
                <div className='container pt-[60px] md:pt-[20px] grid grid-cols-3 md:grid-cols-1 pb-[120px] md:pb-[60px] gap-4'>
                    <div className='bg-lgray p-6 rounded-[14px]'>
                        <h2 className='text-[66px] md:text-[42px] m-0'>890+</h2>
                        <p className='text-[24px] font-semibold'>Title</p>
                        <p className='leading-[110%] mt-2'>Ten the hastened steepest feelings pleasant few surprise property.</p>
                    </div>
                    <div className='bg-lgray p-6 rounded-[14px]'>
                        <h2 className='text-[66px] md:text-[42px] m-0'>590+</h2>
                        <p className='text-[24px] font-semibold'>Title</p>
                        <p className='leading-[110%] mt-2'>Ten the hastened steepest feelings pleasant few surprise property.</p>
                    </div>
                    <div className='bg-lgray p-6 rounded-[14px]'>
                        <h2 className='text-[66px] md:text-[42px] m-0'>190+</h2>
                        <p className='text-[24px] font-semibold'>Title</p>
                        <p className='leading-[110%] mt-2'>Ten the hastened steepest feelings pleasant few surprise property.</p>
                    </div>
                </div>
            </section>
             {/* video */}
            <section className='bg-gray'>
                <div className='container flex md:gap-4 gap-10 pt-[60px] pb-[60px] md:pt-[20px] md:pb-[20px] md:flex-col'>
                    <h2 className='w-1/2 md:w-full font-bold text-[64px] md:text-[32px] leading-[110%] text-white'>Yourself required no <span className='text-orange'>at thoughts</span> delicate landlord it be.</h2>
                    <img className='w-1/2 md:w-full rounded-[20px] poster' src={poster} alt=''></img>
                </div>
            </section>
        </main>
    )
}

export default Home;