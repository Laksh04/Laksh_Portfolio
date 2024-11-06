const Experience = ({data}) => {
  return (
    <div
      id="experience"
      className="flex min-h-screen flex-col py-2 font-Noto pl-12 md:pl-32">
    <div className="h-[6px] w-[64px] bg-secondary pt-2 mt-44 rounded-md" data-aos="fade-up" data-aos-duration="100"></div>
      <div data-aos="fade-up" className="text-main font-semibold opacity-[.95] text-3xl md:text-6xl">
        Experience
      </div>
      <div data-aos="zoom-left" data-aos-delay="300" data-aos-duration="500" className="text-main font-Space mt-6  text-base md:text-lg opacity-[.70]">
        {data.heading}
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col md:flex-row">
        {data.experience.map((item) => (
          <div id={item.id}  className="flex flex-col justify-start mr-20 my-6 md:my-16 rounded-md">
          <div className="text-main text-5xl mb-4">
            <item.icon/>
          </div>
            <div className="text-secondary font-semibold opacity-[.95] text-xl md:text-3xl">{item.title}</div>
            <div className="text-main font-light text-sm md:text-base font-Space mt-2 opacity-[.70]">{item.des}</div>
          <div>
        </div>
      </div>
        ))}
    </div>
    </div>
  );
};

export default Experience;
