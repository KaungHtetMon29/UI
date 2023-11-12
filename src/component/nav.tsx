import { Discord, Opensea, Twitter } from "@/assets/cat";

export default function Nav(props: { children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <h1 className="z-[999] lg:text-[4rem] text-[130px] text-white font-bold h-full fixed w-full p-8">
        Fluffy Hugs
      </h1>
      <div className="flex fixed sm:gap-4 gap-2 bottom-0 z-[999] p-8">
        <div className="lg:w-10 md:w-20 w-8">
          <Discord />
        </div>
        <div className="lg:w-10 md:w-20  w-8">
          <Twitter />
        </div>
        <div className="lg:w-10 md:w-20 w-8">
          <Opensea />
        </div>
      </div>
      <div className="bg-blue-900 fixed z-[999] lg:p-10 md:p-10 p-5 text-white lg:text-3xl md:text-2xl text-[16px] lg:rounded-l-3xl rounded-l-[5rem] bottom-0 right-0">
        <p>View Collection</p>
      </div>
      {props.children}
    </div>
  );
}
