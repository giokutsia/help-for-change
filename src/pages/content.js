import { Link } from 'react-router-dom';
import oldman from '../assets/images/oldman.jpeg'
import kids from '../assets/images/kids2.jpg'
const Content = () => {

    return (
        <div className="flex flex-col space-y-[100px] m-5 p-2  justify-center items-center  w-auto h-auto">
          {/* 1st div */}
            <div id='1' className='flex items-center md:max-w-[980px] ms:min-w-[100px] h-288px  rounded-lg shadow-custom'>
                <img src={oldman} className='md:w-[278px] md:h-[257px] sm:w-[100px] sm:h-[100px] m-4 rounded-[15px] shadow-custom' alt='oldman' />
                <p className='inline-block align-middle text-left m-[30px] md:text-[15px] md:font-[400] tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                
                <Link to="/project/1" className=' text-primary mt-[150px] mr-[50px] w-[300px] text-center lg:text-[15px] font-[400px] '>
                  <spam style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >read more &rsaquo;</spam></Link>
            </div>
          
           
            {/* 2rd div */}
            <div id='2' className='flex items-center md:max-w-[980px] ms:min-w-[100px] h-288px  rounded-lg shadow-custom'>
                <img src={kids} className='md:w-[278px] md:h-[257px] sm:w-[100px] sm:h-[100px] m-4 rounded-[15px] shadow-custom' alt='oldman' />
                <p className=' text-left m-[30px] md:text-[15px] md:font-[400] tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                
                <Link to="/project/1" className=' text-primary mt-[150px] mr-[50px] w-[300px] text-center lg:text-[15px] font-[400px] '>
                  <spam style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >read more &rsaquo;</spam></Link>
            </div>
            {/* 3th div */}
            <div id='3' className='flex items-center md:max-w-[980px] ms:min-w-[100px] h-288px  rounded-lg shadow-custom'>
                <img src={oldman} className='md:w-[278px] md:h-[257px] sm:w-[100px] sm:h-[100px] m-4 rounded-[15px] shadow-custom' alt='oldman' />
                <p className='inline-block align-middle text-left m-[30px] md:text-[15px] md:font-[400] tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                
                <Link to="/project/2" className=' text-primary mt-[150px] mr-[50px] w-[300px] text-center lg:text-[15px] font-[400px] '>
                  <spam style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >read more &rsaquo;</spam></Link>
            </div>
              
           
              
        </div>
       
    )
}

export default Content