import { LorKamiLogoHome } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-svh">
      <div className=" flex flex-col w-full justify-center bg-inherit h-full">
        <LorKamiLogoHome className="fill-black dark:fill-white" />
        <h1 className=" uppercase text-center font-cinzel text-2xl underline decoration-solid p-8">
          todo listo para crear la pagina papu!
        </h1>
      </div>
    </div>
  );
}
