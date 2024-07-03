import { projects } from "@/datas/data";
import Card from "../components/Card";

export default function Work() {
  return (
    <div className="flex flex-col px-40 py-12 gap-16">
      {projects.map(
        (project, id) =>
          project && (
            <Card
              key={id}
              id={id}
              name={project?.name}
              description={project?.description}
              image={project?.image}
              link={project?.link}
              stacks={project?.stacks}
              type={project?.type}
            />
          )
      )}
    </div>
  );
}
