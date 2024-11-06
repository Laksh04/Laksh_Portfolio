import {AiOutlineInstagram} from 'react-icons/ai';
import {GrLinkedinOption} from 'react-icons/gr';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

const LeftSide = ({ data }) => {
  return (
    <>
        <div className='text-3xl h-1/3  md:flex md:flex-col text-main' data-aos = "fade-right" data-aos-delay="100">
            <a className='h-1/4 w-full hover:text-[#808080] flex justify-center hover:text-4xl duration-200' href={data.gitHub} target="_blank"><AiFillGithub/></a>
            <a className='h-1/4 w-full hover:text-[#1727ff] flex justify-center hover:text-4xl duration-200' href={data.linkedIn} target="_blank"><GrLinkedinOption/></a>
            <a className='h-1/4 w-full hover:text-[#e031a9] flex justify-center hover:text-4xl duration-200' href={data.instaGram} target="_blank"><AiOutlineInstagram/></a>
            <a className='h-1/4 w-full hover:text-[#1DA1F2] flex justify-center hover:text-4xl duration-200' href={data.twitter} target="_blank"><AiOutlineTwitter/></a>
        </div> 
        <div className='h-1/5 flex flex-col justify-end items-center'  data-aos = "fade-right" data-aos-delay="200">
        <div className='h-[2px] w-[200px] bg-main rotate-90 opacity-[.60] rounded-md'></div>
        </div>
       
    </>
  ) 
}

export default LeftSide;