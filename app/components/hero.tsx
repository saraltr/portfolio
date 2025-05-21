import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center mx-4 border border-[#5b6bc0] main text-[#e6e6f2]">
      <div className="mx-5 w-full max-w-6xl py-10">
        <div className="border-4 border-[#5b6bc0] bg-[#23263a] bg-[url('/images/hero.png')] bg-cover bg-center p-6 shadow-[0_0_6px_#5b6bc0] rounded-lg">
          <div className="flex">
            <h2 className="text-[64px] leading-none font-extrabold text-[#8c8edf] tracking-tighter uppercase border-b-2 border-[#5b6bc0] welcome-msg">
              Welcome!{" "}
            </h2>

            <Image
              src="/images/perso.png"
              height={64}
              width={64}
              alt="pixel icon"
              className="object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <div className="mt-6 flex gap-4">
            <Link href="/projects">
              <button className="bg-[#252E93] text-white px-4 py-2 rounded border border-[#8c8edf] shadow-[2px_2px_0px_#8c8edf] hover:shadow-[4px_4px_0px_#8c8edf] transition-all">
                View Work
              </button>
            </Link>
            <button className="bg-[#8c8edf] text-[#1a1d2d] px-4 py-2 rounded border border-[#252E93] shadow-[2px_2px_0px_#252E93] hover:shadow-[4px_4px_0px_#252E93] transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="cursor-pointer mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#e6e6f2]">
          {[
            {
              icon: "📌",
              title: "Latest Projects",
              desc: "Explore my latest builds",
              href: "/projects",
            },
            {
              icon: "💻",
              title: "Web Dev Projects",
              desc: "Interfaces, layouts, and applications ideas",
              href: "/projects/web-dev",
            },
            {
              icon: "🎨",
              title: "Graphic Design",
              desc: "Posters, logos, and visual storytelling",
              href: "/projects/design",
            },
          ].map((item, i) => (
            <Link href={item.href} key={i}>
              <div
                key={i}
                className="border-2 border-[#5b6bc0] bg-[#1a1d2d] p-4 rounded-lg hover:scale-[1.02] transition-transform"
              >
                <div className="text-3xl">{item.icon}</div>
                <h2 className="mt-2 text-xl font-bold text-[#8c8edf]">
                  {item.title}
                </h2>
                <p className="text-sm text-[#b3b3cc]">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
