import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  stacks: Array<string>;
}

const Card = ({
  id,
  name,
  type,
  description,
  image,
  liveLink,
  githubLink,
  stacks,
}: CardProps) => {
  const isEven = id % 2 === 0;
  return (
    <section className={`flex flex-row w-full  items-center px-12`}>
      <div className={` w-[60%] ${isEven ? "order-1" : "order-2"}`}>
        {liveLink ? (
          <Link
            href={liveLink}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image}
              alt={`${name} Image`}
              width={640}
              height={500}
              className={`  grayscale hover:grayscale-0 transition-all w-full   shadow-lg rounded-md  h-[350px] object-left-top`}
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt={`${name} Image`}
            width={640}
            height={500}
            className={` grayscale hover:grayscale-0 transition-all w-full   shadow-lg rounded-md  h-[350px] object-left-top`}
          />
        )}
      </div>

      <div
        className={` w-[40%] relative  ${
          isEven ? "order-2 text-right" : "order-1 text-left"
        }`}
      >
        <h6 className="text-lg text-secondary-color-3 font-bold">{type}</h6>
        <h1 className=" text-2xl mt-2 font-semibold ">{name}</h1>
        <div
          className={`px-5 py-7 bg-[#FBEDDD] ${
            isEven ? "-ml-16" : "-mr-16"
          }  mt-4 rounded-md z-10 relative`}
        >
          {description}
        </div>
        <div className="text-left mt-2 px-2 flex gap-2 text-secondary-color-3 font-bold">
          {stacks.map((stack) => (
            <span>{stack}</span>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center  ${
            isEven ? " justify-end" : " justify-start"
          } `}
        >
          {liveLink && (
            <Link
              href={liveLink}
              className={`mt-4 flex ${
                isEven ? " justify-end" : " justify-start"
              }`}
            >
              <FaArrowUpRightFromSquare size={20} className="text-black" />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              className={`mt-4 flex ${
                isEven ? " justify-end" : " justify-start"
              }`}
            >
              <img
                src={"https://cdn.simpleicons.org/github"}
                alt={"github repo"}
                height={20}
                width={20}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Card;
