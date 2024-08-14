import Dino from "@/components/dino";

export default function OldHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center bg-transparent">
      <h1 className="text-6xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-white to-neutral-400 from-60% via-65% to-70% bg-[length:200%_auto] animate-gradient">
        Anemon Labs
      </h1>
      <Dino />
    </main>
  );
}
