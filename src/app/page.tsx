import { LorKamiLogoHome } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex h-full w-full flex-col items-center justify-center bg-inherit">
        <LorKamiLogoHome className="w-svw fill-black object-contain dark:fill-white" />
      </div>
    </div>
  );
}
