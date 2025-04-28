import { Metadata } from "next";
import details from "@/lib/logoProject.json";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Logo Design Project",
  description: "Blossom delight logo project",
};

const ProjectDetails = () => {
  return (
    <>
      <section className="logoProjectContainer mx-4 rounded-b-xl ">
        {details.map((item, index) => (
          <div className="details" key={index}>
            <h2 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-dotted decoration-[#6a74d9]">
              {item.CompanyName} logo
            </h2>

            <div className="card lg:card-side bg-[#1a1d2d] text-[#e6e6f2] shadow-sm w-3/4 mx-auto w-full">
              <figure>
                <Image
                  src={item.finalLogo}
                  width={270}
                  height={100}
                  alt="final logo"
                  className="my-5"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Logo Design Project</h2>
                <p>Company Name: {item.CompanyName}</p>
                <p>Category/Mascot: {item["Category/Mascot"]}</p>
                <p>Target Audience: {item["Target Audience"]}</p>
                <p>Emotional details: {item["Emotional details"]}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>

            <div className="process mt-6">
              <div className="step1">
                <h3 className="text-xl font-semibold text-[#e6e6f2] mt-6 mb-2 border-l-4 border-[#e6e6f2] pl-2">
                  <strong>Step 1:</strong> Visual Research
                </h3>
                <p className=" text-[#F8F8F8] leading-relaxed">
                  Exploring industry trends, competitor branding, and visual
                  elements to establish a strong design direction.
                </p>
                <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
                  <figure className="my-4">
                    <Image
                      src={item["visual research photos"]}
                      width={400}
                      height={100}
                      alt=""
                      className="rounded border border-[#7d4f50] shadow"
                    />
                    <figcaption className="text-xs text-[#aaa] mt-1 italic">
                      Brand visual research photos
                    </figcaption>
                  </figure>
                  <figure className="my-4">
                    <Image
                      src={item["visual research mascot"]}
                      width={400}
                      height={100}
                      alt=""
                      className="rounded border border-[#7d4f50] shadow"
                    />
                    <figcaption className="text-xs text-[#aaa] mt-1 italic">
                      Mascot visual research photos
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="step2">
                <h3 className="text-2xl font-bold text-[#e6e6f2] mb-3 border-l-4 border-[#e6e6f2] pl-3">
                  Step 2: Symbol Sketches
                </h3>
                <p className="text-sm text-[#F8F8F8] leading-relaxed mb-6 max-w-3xl">
                  Exploring different symbols that visually represent the
                  brand’s identity, values, and uniqueness.
                </p>

                <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
                  <figure>
                    <Image
                      src={item["symbol sketches part1"]}
                      width={400}
                      height={100}
                      alt="Symbol exploration sketches"
                      className="rounded-lg border border-[#7d4f50] shadow-md"
                    />
                    <figcaption className="text-[#aaa] mt-2 italic">
                      Symbols exploration sketches
                    </figcaption>
                  </figure>
                  <figure>
                    <Image
                      src={item["symbol sketches part2"]}
                      width={400}
                      height={100}
                      alt="Symbol sketches with directions"
                      className="rounded-lg border border-[#7d4f50] shadow-md"
                    />
                    <figcaption className="text-[#aaa] mt-2 italic">
                      Symbol sketches with 3 different directions
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-[#36448C] rounded-lg p-4 shadow-inner border border-[#4e4744] mb-4">
                  <h4 className="text-[#e6e6f2] font-semibold mb-2">
                    Design Directions:
                  </h4>
                  <ol className="list-decimal list text-[#e6e6f2]">
                    <li className="list-row">{item["direction 1"]}</li>
                    <li className="list-row">{item["direction 2"]}</li>
                    <li className="list-row">{item["direction 3"]}</li>
                  </ol>
                </div>

                <div role="alert" className="bg-[#e6e6f2] alert text-[#1a1d2d]">
                  <strong className="">Next Steps:</strong> Evaluating the most
                  effective symbol for refinement and digitization.
                </div>
              </div>

              <div className="step3 my-5">
                <h3 className="text-xl font-semibold text-[#e6e6f2] mt-6 mb-2 border-l-4 border-[#e6e6f2] pl-2">
                  Step 3: Digitized logos:
                </h3>
                <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
                  <figure className="my-4">
                    <Image
                      src={item["digitized logos"]}
                      width={400}
                      height={100}
                      alt=""
                      className="rounded border border-[#7d4f50] shadow"
                    />
                    <figcaption className="text-xs text-[#aaa] mt-1 italic">
                      First set on digitized logos using Illustrator
                    </figcaption>
                  </figure>
                  <figure className="my-4">
                    <Image
                      src={item["digitized logos refinements"]}
                      width={400}
                      height={100}
                      alt=""
                      className="rounded border border-[#7d4f50] shadow"
                    />
                    <figcaption className="text-xs text-[#aaa] mt-1 italic">
                      Refinements
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-[#36448C] rounded-lg p-4 shadow-inner border border-[#4e4744] mb-4">
                  <h4 className="text-[#e6e6f2] font-semibold mb-2">
                    Design Direction:
                  </h4>
                  <ol className="list-decimal list text-[#e6e6f2]">
                    <li className="list-row">{item["first logo"]}</li>
                    <li className="list-row">{item["second logo"]}</li>
                    <li className="list-row">{item["third logo"]}</li>
                  </ol>
                </div>
              </div>

              <div className="step4">
                <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#5b6bc0] text-[#1a1d2d] pl-2">
                  Step 4: Type & Color Variations Explorations
                </h3>

                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-3">
                    <figure>
                      <Image
                        src={item["type variations"]}
                        width={500}
                        height={100}
                        alt="Typography and color explorations"
                        className="rounded border border-[#7d4f50] shadow-md"
                      />
                      <figcaption className="text-xs text-[#1a1d2d] mt-1 italic text-center">
                        Explorations of typography, color schemes & variants
                      </figcaption>
                    </figure>
                  </div>

                  <div className="md:col-span-2 bg-[#36448C] rounded-lg p-4 shadow-inner border border-[#4e4744] mt-4">
                    <h4 className="text-[#e6e6f2] font-semibold mb-2">
                      Creative Focus Points:
                    </h4>
                    <ol className="list-decimal ml-5 mt-2 text-sm space-y-2 text-[#e6e6f2]">
                      <li>
                        Experiment with different typefaces to match brand
                        personality
                      </li>
                      <li>Adjust spacing, weight, and custom typography</li>
                      <li>Explore various palettes with high contrast</li>
                      <li>Ensure readability across backgrounds and formats</li>
                      <li>Design monochrome and alternative variations</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="step5 my-6">
                <h3 className="text-xl font-semibold text-[#e6e6f2] mb-4 border-l-4 border-[#e6e6f2] pl-2">
                  Step 5: Final Directions
                </h3>

                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <div className="md:w-1/2 bg-[#36448C] rounded-lg p-4 shadow-inner border border-[#4e4744] mt-4">
                    <h4 className="text-[#e6e6f2] font-semibold mb-2">
                      Summary of Revisions:
                    </h4>
                    <ol className="list-decimal ml-5 mt-2 text-sm space-y-2 text-[#e6e6f2]">
                      <li>{item["1st version"]}</li>
                      <li>{item["2nd version"]}</li>
                      <li>{item["3rd version"]}</li>
                    </ol>
                  </div>

                  <div className="md:w-1/2 mt-4 md:mt-0">
                    <figure>
                      <Image
                        src={item["final directions"]}
                        width={500}
                        height={100}
                        alt="Final design directions"
                        className="rounded border border-[#7d4f50] shadow-md"
                      />
                      <figcaption className="text-xs text-[#aaa] mt-1 italic text-center">
                        Final touches based on design critiques & feedback
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="final mt-6 border-t border-dotted border-[#7d4f50] pt-4">
                <h3 className="text-xl font-semibold text-[#e6e6f2] mb-2">
                  ✦ Final Signature ✦
                </h3>
                <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
                  <figure className="mb-4">
                    <Image
                      src={item.finalLogo}
                      width={300}
                      height={100}
                      alt=""
                      className="rounded border border-[#7d4f50]"
                    />
                    <figcaption className="text-xs text-[#aaa] mt-1">
                      Final Logo Design
                    </figcaption>
                  </figure>
                  <figure className="mb-4">
                    <Image
                      src={item.mockup}
                      width={300}
                      height={100}
                      alt=""
                      className="rounded border border-[#7d4f50]"
                    />
                    <figcaption className="text-xs text-[#aaa] mt-1">
                      Mockup
                    </figcaption>
                  </figure>
                </div>
                <p className="text-center text-[#e6e6f2] mt-6 max-w-xl mx-auto leading-relaxed">
                  This final identity captures the brand’s essence, balances
                  function with personality, and is ready for real-world
                  application across digital and print mediums.
                </p>
              </div>
            </div>
            <div className="text-center my-6 text-[#888] text-xs font-mono">
              ─────── ★ · . · ☆ · . · ★ ───────
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectDetails;
