import Link from "next/link";

const Copyright = () => {
  return (
    <div className="  py-6  flex flex-col justify-center items-center font-medium text-base sm:text-lg border-t ">
      <p className=" text-center">
        Designed and Devloped by
        <Link
          href={"https://github.com/pravinbhosale1100/pravin-portfolio"}
          className=" text-secondary-color-3   font-bold font-idgrotesk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Pravin K. Bhosale👨‍💻
        </Link>{" "}
        {/* (Inspirations from{" "}
        <Link
          href={"https://www.geekmaros.dev/"}
          className=" font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Geekmaros
        </Link>{" "}
        ) */}
      </p>
      <div></div>
      <p className=" ">&copy; 2024 All rights reserved.</p>
    </div>
  );
};
export default Copyright;
