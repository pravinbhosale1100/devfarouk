import Image from "next/image";
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
            className=" object-cover grayscale w-full h-[370px] object-left rounded-lg shadow-lg"
          />
        </Link>
      </div>

      <div className={` w-[60%] relative  ${isEven ? "order-2" : "order-1 "}`}>
        <h6 className="text-lg font-semibold ">{type}</h6>
        <h1 className=" text-xl mt-2 ">{name}</h1>
        <div className="px-5 py-7 bg-[#FBEDDD] -ml-16 mt-2 rounded-md">
          {description}
        </div>
        <div className=" text-left mt-2 ">
          {stacks.map((stack) => (
            <span>{stack}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Card;
