import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  link: string;
  stacks: Array<string>;
}

const Card = ({
  id,
  name,
  type,
  description,
  image,
  link,
  stacks,
}: CardProps) => {
  const isEven = id % 2 === 0;
  return (
    <section className={`flex flex-row w-full  items-center `}>
      <div className={` w-[60%] ${isEven ? "order-1" : "order-2"}`}>
        <Link href={link} className="w-full">
          <img
            src={image}
            alt={`${name} Image`}
            className=" object-cover grayscale hover:grayscale-0 transition-all w-full h-[370px] object-left rounded-lg shadow-lg"
          />
        </Link>
      </div>

      <div
        className={` w-[60%] relative  ${
          isEven ? "order-2 text-right" : "order-1 text-left"
        }`}
      >
        <h6 className="text-lg text-secondary-color-3 font-bold">{type}</h6>
        <h1 className=" text-xl mt-2 ">{name}</h1>
        <div
          className={`px-5 py-7 bg-[#FBEDDD] ${
            isEven ? "-ml-16" : "-mr-16"
          }  mt-2 rounded-md z-10 relative`}
        >
          {description}
        </div>
        <div className="text-left mt-2 px-2 flex gap-2 text-secondary-color-3 font-bold">
          {stacks.map((stack) => (
            <span>{stack}</span>
          ))}
        </div>
        <Link
          href={link}
          className={`mt-2 flex ${isEven ? " justify-end" : " justify-start"}`}
        >
          <FaArrowUpRightFromSquare
            size={25}
            className="text-secondary-color-3 "
          />
        </Link>
      </div>
    </section>
  );
};
export default Card;
