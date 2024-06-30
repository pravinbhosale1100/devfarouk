import { companies } from "@/datas/data";

const Experience = () => {
  return (
    <section className="flex flex-col px-40 py-12">
      <header className="flex flex-row gap-4 justify-center items-center font-semibold">
        <div className="w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" text-2xl">02. Where I've worked</span>
        <div className=" w-36 border-b-[1px] border-b-border-color"></div>
      </header>
      <div className="flex flex-row w-full py-10  gap-10">
        <div className="w-[90%]">
          <div className="w-[30%] border-l-secondary-color-3 border-l-2  ">
            {companies.map((company, id) => (
              <div
                key={id}
                className="w-full my-2  cursor-pointer hover:text-white hover:bg-secondary-color-3 transition-all px-5 py-2"
              >
                {company}
              </div>
            ))}
          </div>
          <span className="w-[50%]"></span>
        </div>
      </div>
    </section>
  );
};
export default Experience;
