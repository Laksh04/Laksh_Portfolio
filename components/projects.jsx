import {AiFillGithub} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

const Projects = ({ data }) => {
  var v = 1;
  return (
    <div id="projects" className="flex min-h-screen flex-col py-2 font-Noto pl-12 md:pl-32"
    >
      <div className="h-[6px] w-[64px] bg-secondary  pt-2 mt-24 rounded-md" data-aos="fade-right" data-aos-duration="100"></div>
      <div className="text-main font-semibold opacity-[.95] text-3xl md:text-6xl"  data-aos="fade-right">Projects</div>

      <div>
        {data.projects.map((item)=>( 
          <div className='text-main flex flex-col md:flex-row mt-20  mb-20 md:mb-40'>
              <img src={item.img} className={ v%2==0 ? "md:hidden h-2/3 w-auto mr-10 ": "h-2/3 w-auto md:h-1/2 md:w-1/2 mr-10"}  id="image" data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000"/>
              <div className='flex flex-col' data-aos="fade-right" data-aos-delay="400">
                <div className='font-Space text-secondary text-sm mt-16 md:mt-8 lg:mt-24'>Project {item.id}</div>
                <div className='mb-4 text-lg md:text-lg lg:text-xl'>{item.title}</div>
                <div className='font-Space text-sm md:text-sm lg:text-base opacity-[.70]'>{item.des}</div>
                <div className='flex flex-row font-Space text-secondary text-xs md:text-sm justify-end mr-2'>{item.tech.map((i)=>(
                  <div className='mr-6 mt-4'>{i}</div>
                ))}</div>
                <div className='text-2xl mt-4 flex justify-end mr-8'>
                <div className='text-secondary opacity-90'><BsArrowRightShort/></div>
                  <a href={item.link} target="_blank" className='hover:text-[#808080] duration-200'><AiFillGithub/></a>
                </div>
              </div>
              <div className='hidden'>{v++}</div>
              <img src={item.img} className={v%2==0 ? "hidden h-1/2 w-1/2  m-auto": "hidden md:block h-1/2 w-1/2 ml-10"}  id="image" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000"/>
              <div className='bg-main h-[2px] w-11/12 rounded-md opacity-[.40] mt-10 md:hidden'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
