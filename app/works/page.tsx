import { projects } from "@/datas/data";
import Card from "../components/Card";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function Work() {
  return (
    <div className="flex flex-col px-40 my-24 py-16 gap-16">
      <div className=" flex items-center gap-8">
        <Link href={"/"} className=" p-2 bg-[#FBEDDD] text-black flex w-min">
          <IoMdArrowRoundBack size={25} />
        </Link>
        <h1 className=" font-bold text-5xl">Works</h1>
      </div>
      {projects.map(
        (project, id) =>
          project && (
            <Card
              key={id}
              id={id}
              name={project?.name}
              description={project?.description}
              image={project?.image}
              liveLink={project?.liveLink}
              githubLink={project?.githubLink}
              stacks={project?.stacks}
              type={project?.type}
            />
          )
      )}
    </div>
  );
}
