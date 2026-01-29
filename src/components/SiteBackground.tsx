export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(184,155,91,0.35)_0%,_rgba(184,155,91,0)_70%)] blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(15,15,15,0.12)_0%,_rgba(15,15,15,0)_70%)] blur-3xl" />
      <div className="absolute top-[30%] left-[-10rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,_rgba(184,155,91,0.22)_0%,_rgba(184,155,91,0)_70%)] blur-3xl" />
    </div>
  );
}
