import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className=" text-center w-[100%] m-auto py-12 pb-28 shadow-sm px-0 mx-0">
      <div className="flex flex-col gap-2 justify-center items-center w-[85%] m-auto">
        <h2 className=" text-3xl text-secondary-color-3 font-bold italic">
          What next? Let's talk!
        </h2>
        <h3 className=" text-4xl font-semibold">Get in Touch</h3>
        <p className=" text-lg">
          I'm currently open to new job opportunities. Contact me if you are
          interested in having me on your team, working on your project, seeking
          mentorship, or just want to say hello. Please click the button below
          or send an email to{" "}
          <span className=" text-secondary-color-3 font-medium">
            mustaphafarouk41@gmail.com
          </span>
          .
        </p>
        <Link
          href={"https://cdn.simpleicons.org/gmail"}
          className="flex items-center justify-center gap-3 px-5 py-2  font-semibold w-max  mt-5   border-[1px] hover:bg-[#FBEDDD]  transition-all border-black rounded-lg"
        >
          Send A Message
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={25}
            height={25}
          />{" "}
        </Link>
      </div>
    </section>
  );
};
export default Contact;
