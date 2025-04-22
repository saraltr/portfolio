import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center mx-4 border border-[#7d4f50] main text-[#d8cfc4]">
      <div className="mx-5 w-full max-w-5xl py-10">
        <div className="border-4 border-[#7d4f50] bg-[#2b2724] bg-[url('/images/hero.png')] bg-cover bg-center p-6 shadow-[0_0_6px_#7d4f50] rounded-lg">
          <div className="flex">
            <h1 className="text-3xl md:text-5xl font-bold text-[#e8bcb9] welcome-msg">
              Welcome!
            </h1>
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
              <button className="bg-[#7EA680] text-[#2b2724] px-4 py-2 rounded border border-[#e8bcb9] shadow-[2px_2px_0px_#e8bcb9] hover:shadow-[4px_4px_0px_#e8bcb9] transition-all">
                View Work
              </button>
            </Link>
            <button className="bg-[#e8bcb9] text-[#2b2724] px-4 py-2 rounded border border-[#7EA680] shadow-[2px_2px_0px_#7EA680] hover:shadow-[4px_4px_0px_#7EA680] transition-all">
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-10 text-center text-[#7d4f50] text-sm font-mono">
          ｡⋆ৎ୭⋆｡
        </div>

        {/* Services Grid */}
        <div className="cursor-pointer mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#d8cfc4]">
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
                className="border-2 bg-[#322e2b] p-4 rounded-lg hover:scale-[1.02] transition-transform"
              >
                <div className="text-3xl">{item.icon}</div>
                <h2 className="mt-2 text-xl font-bold text-[#e8bcb9]">
                  {item.title}
                </h2>
                <p className="text-sm text-[#b6ada3]">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
