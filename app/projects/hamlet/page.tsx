"use client";
import { Metadata } from "next";
import details from "@/lib/logoProject.json";
import Image from "next/image";

export default function Hamlet() {
  return (
    <>
      <main className="mx-4 border p-5 border-[#7d4f50] bg-[#2b2724b0]">
        <h1 className="text-2xl font-semibold text-center mb-6 text-[#e8bcb9]">
          Hamlet Posters Project
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#2b2724] p-5 rounded-lg">
          {["poster1.png", "poster2.png", "poster3.png", "poster4.png"].map(
            (poster, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`/images/graphics/hamlet/${poster}`}
                  alt={`Hamlet Poster ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ),
          )}
        </section>
        <section className=" my-5">
          <h2 className="text-3xl font-bold text-[#f9f4f2] mb-2">
            Hamlet Posters - Project Summary
          </h2>
          <div className="grid md:grid-cols-2">
            <div className="h-full">
              <div className="relative w-full h-[300px] md:h-auto md:min-h-full">
                <Image
                  src={`/images/graphics/hamlet/hamlet.jpg`}
                  alt={`Le fossoyeur donne le crâne de Yorick au prince Hamlet. Eugène Delacroix, 1839.`}
                  fill
                  className="object-cover rounded-t-xl md:rounded-none md:rounded-l-xl"
                />
              </div>
            </div>

            <div className="bg-[#f9f4f2] border border-[#7d4f50] p-6 rounded-b-xl md:rounded-none md:rounded-r-xl shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">
                  Story Theme
                </h3>
                <p className="text-gray-700">
                  Mortality, death, madness, corruption, revenge, family, and
                  conspiracies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">
                  The Cast
                </h3>
                <p className="text-gray-700">
                  Hamlet, prince of Denmark, seeks revenge for his father’s
                  death. Claudius, his uncle and the new king, has married
                  Hamlet’s mother, Gertrude. The ghost of King Hamlet reveals
                  the truth. Polonius, a court lord, is father to Ophelia
                  (Hamlet’s love intesrest) and Laertes. Horatio is Hamlet’s
                  loyal friend.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">
                  The Pitch
                </h3>
                <p className="text-gray-700">
                  Driven by the desire to avenge his father’s death, Hamlet
                  pretends to be mad and stages a play to expose his uncle’s
                  guilt. At the same time, he hopes to convince his mother—who
                  has married his father’s murderer—to abandon her new marriage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">
                  Poster Concept
                </h3>
                <p className="text-gray-700">
                  This poster design project aims to visually interpret the
                  emotional and narrative complexity of <em>Hamlet</em>. The
                  goal is to reflect the core themes of tragedy, revenge,
                  mortality, and betrayal. The project includes four versions:
                  two designs that use symbolic imagery, and two that rely
                  solely on expressive typography to convey the same emotional
                  weight and thematic elements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">
                  Mood & Visual Direction
                </h3>
                <p className="text-gray-700">
                  The posters aim to communicate a dark, tragic atmosphere,
                  reflecting themes of manipulation, inner conflict, and a sense
                  of doom. To express these ideas, I used symbolism, strong
                  lighting contrasts, and bold color palettes to highlight the
                  characters’ emotions and the tension within the story.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="step1 my-12">
          <h3 className="text-xl font-semibold text-[#7EA680] mb-4 border-l-4 border-[#e8bcb9] pl-3">
            Step 1: Sketches
          </h3>

          <p className="text-[#2b2724] mb-6 bg-[#e8bcb9] p-4 rounded-xl shadow-sm leading-relaxed">
            I began the design process by exploring different visual
            interpretations of the play’s key themes and characters. Through
            hand-drawn sketches, I experimented with symbols, compositions, and
            typographic concepts. From this exploration, I selected four
            directions that best captured the emotional depth and narrative of
            the play.
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <figure className="w-full">
              <Image
                src="/images/graphics/hamlet/sketches1.png"
                alt="Hamlet play sketches"
                width={900}
                height={900}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
              <figcaption className="text-sm mt-3 italic text-center">
                Exploration Sketches
              </figcaption>
            </figure>

            <div className="bg-[#3a3533] rounded-xl p-6 shadow-inner border border-[#4e4744] text-[#f0e2d0">
              <h4 className="text-[#e8bcb9] font-semibold text-lg mb-4">
                My Picks:
              </h4>
              <ol className="list-decimal pl-5 space-y-4 text-sm leading-relaxed text-[#f0e2d0]">
                <li>
                  My first poster features crossed blades combined with puppet
                  strings. It highlights themes of control and corruption, with
                  the skull and crown symbolizing deadly consequences—and
                  referencing the most iconic symbol of the play: Yorick’s
                  skull.
                </li>
                <li>
                  My second pick includes the ghostly figure of King Hamlet. His
                  large cloak opens like stage curtains, revealing a poisoned
                  cup and a skull. This composition expresses the themes of
                  revenge, death, and the supernatural.
                </li>
                <li>
                  My third design focuses on the duel between Hamlet and
                  Laertes, shown through crossing blades. Hamlet’s blade
                  transforms into a question mark, representing his existential
                  struggle (“To be or not to be”), while Laertes’ blade is
                  entwined with flowers, referencing Ophelia and her tragic
                  fate.
                </li>
                <li>
                  For the typographic poster, I used dynamic, angled lettering
                  to create a sense of motion and depth. The text begins small
                  at the bottom, gradually increases in size—with the letter “M”
                  being the most prominent—before shrinking again. This
                  progression reflects the escalating tension and psychological
                  complexity of the play.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="my-6">
          <h3 className="text-xl font-semibold text-[#7EA680] mb-4 border-l-4 border-[#e8bcb9] pl-3">
            Step 2: Visual Experiments
          </h3>
          <p className="text-[#2b2724] mb-6 bg-[#e8bcb9] p-4 rounded-xl shadow-sm leading-relaxed">
            In this phase, I explored visual experimentation through analog and
            collage. By combining and layering different images and textures, I
            was able to form new symbolic shapes that reflected key themes from{" "}
            <em>Hamlet</em>. This hands-on approach allowed me to discover
            visual ideas I might not have come up with through sketching alone.
            I then took the most promising results into Adobe Illustrator, where
            I traced and recolored them to develop more refined, vector-based
            concepts for the final poster designs
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <figure className=" p-4 rounded-lg ">
              <Image
                src={`/images/graphics/hamlet/visual-exp.png`}
                alt={`First visual symbol poster experiment`}
                width={700}
                height={700}
                className="w-full h-auto object-cover rounded-md"
              />
              <figcaption className="text-sm mt-2 italic text-center">
                First exploration with layered symbols.
              </figcaption>
            </figure>

            <figure className=" p-4 rounded-lg mt-6 md:mt-0">
              <Image
                src={`/images/graphics/hamlet/visual-exp2.png`}
                alt={`Second visual symbol experiment`}
                width={700}
                height={700}
                className="w-full h-auto object-cover rounded-md"
              />
              <figcaption className="text-sm mt-2 italic text-center">
                Second exploration with layered symbols.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="my-12">
          <h3 className="text-xl font-semibold text-[#7EA680] mb-6 border-l-4 border-[#e8bcb9] pl-4">
            Step 3: Refinement Sketches
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <figure className="bg-[#f9f4f2] p-4 rounded-xl shadow-md border border-[#e8bcb9]">
              <Image
                src="/images/graphics/hamlet/sketches2.png"
                alt="Refinement sketches"
                width={700}
                height={700}
                className="w-full h-auto object-cover rounded-md"
              />
              <figcaption className="text-sm mt-3 italic text-center text-[#555]">
                Refinement sketches based on earlier visual experiments.
              </figcaption>
            </figure>

            <div className="bg-[#3a3533] rounded-xl p-6 shadow-inner border border-[#4e4744] text-[#f0e2d0]">
              <h4 className="text-[#e8bcb9] font-semibold text-lg mb-4">
                My Picks:
              </h4>
              <ol className="list-decimal pl-5 space-y-4 text-sm leading-relaxed">
                <li>
                  I removed the blades and spaced out the elements for a more
                  balanced composition. The title was placed near the skull to
                  draw immediate attention to this central symbol, while
                  introducing additional visual elements to reinforce the play’s
                  key themes.
                </li>
                <li>
                  In this version, I reimagined the king’s cloak as stage
                  curtains, opening to reveal the poisoned cup. This adjustment
                  improves visual hierarchy and better guides the viewer’s eye.
                </li>
                <li>
                  This design embraces a more modern, structured feel while
                  preserving the question mark shape. The form communicates
                  conflict and rigidity, giving the layout a geometric,
                  intentional look.
                </li>
                <li>
                  I enhanced the size and angle of the typography to introduce
                  motion and tension, mirroring the play’s rising conflict. The
                  logo sits at the top, while supporting details rest at the
                  bottom to create a balanced visual flow.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="my-12">
          <h3 className="text-xl font-semibold text-[#7EA680] mb-6 border-l-4 border-[#e8bcb9] pl-4">
            Step 4: Refinement Based on Feedback
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* SYMBOL POSTERS */}
            <div>
              <h4 className="text-lg font-semibold text-[#e8bcb9] mb-3">
                Symbol Poster Concepts
              </h4>

              <figure className="mb-6">
                <Image
                  src="/images/graphics/hamlet/comps1.png"
                  alt="Initial symbol poster concepts"
                  width={600}
                  height={400}
                  className="w-full max-w-3xl max-h-[80vh] mx-auto rounded-md object-contain"
                />
                <figcaption className="text-sm italic text-center text-[#a8a29e] mt-2">
                  Initial compositions (2 versions) exploring symbolism
                </figcaption>
              </figure>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-[#e8bcb9] mb-3">
                  Final Product Symbol Poster 1
                </h4>
                <figure className="">
                  <Image
                    src="/images/graphics/hamlet/poster1.png"
                    alt="Final symbol poster 1"
                    width={500}
                    height={700}
                    className="w-full max-h-[80vh] h-auto rounded-md object-contain"
                  />
                  <figcaption className="text-sm text-[#f0e2d0] mt-3 bg-[#3a3533] p-4 rounded-xl border border-[#4e4744]">
                    I increased contrast and refined type placement to make the
                    skull and symbols more visually dominant.
                  </figcaption>
                </figure>
                <br />

                <h4 className="text-lg font-semibold text-[#e8bcb9] mb-3">
                  Final Product Symbol Poster 2
                </h4>
                <figure>
                  <Image
                    src="/images/graphics/hamlet/poster2.png"
                    alt="Final symbol poster 2"
                    width={500}
                    height={700}
                    className="w-full max-h-[80vh] h-auto rounded-md object-contain"
                  />
                  <figcaption className="text-sm text-[#f0e2d0] mt-3 bg-[#3a3533] p-4 rounded-xl border border-[#4e4744]">
                    Type hierarchy was improved, and color tweaks helped unify
                    the composition.
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#e8bcb9] mb-3">
                Typography Poster Concepts
              </h4>

              <figure className="mb-6">
                <Image
                  src="/images/graphics/hamlet/comps2.png"
                  alt="Initial typography poster concepts"
                  width={600}
                  height={400}
                  className="w-full max-w-3xl max-h-[80vh] mx-auto rounded-md object-contain"
                />
                <figcaption className="text-sm italic text-center text-[#a8a29e] mt-2">
                  Initial explorations with expressive typography
                </figcaption>
              </figure>

              <div className="space-y-6 ">
                <h4 className="text-lg font-semibold text-[#e8bcb9] mb-3">
                  Final Product Typography Poster 1
                </h4>
                <figure className="">
                  <Image
                    src="/images/graphics/hamlet/poster3.png"
                    alt="Final typography poster 1"
                    width={500}
                    height={700}
                    className="w-full max-h-[80vh] h-auto rounded-md object-contain"
                  />
                  <figcaption className="text-sm text-[#f0e2d0] mt-3 bg-[#3a3533] p-4 rounded-xl border border-[#4e4744]">
                    I adjusted the blue tone for better cohesion and refined the
                    type alignment to improve readability and better guide the
                    viewers eye through the layout.
                  </figcaption>
                </figure>
                <br />
                <h4 className="text-lg font-semibold text-[#e8bcb9] mb-3">
                  Final Product Typography Poster 2
                </h4>

                <figure>
                  <Image
                    src="/images/graphics/hamlet/poster4.png"
                    alt="Final typography poster 2"
                    width={500}
                    height={700}
                    className="w-full max-h-[80vh] h-auto rounded-md object-contain"
                  />
                  <figcaption className="text-sm text-[#f0e2d0] mt-3 bg-[#3a3533] p-4 rounded-xl border border-[#4e4744]">
                    I repositioned the title and text to create a better balance
                    in the layout.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center my-6 text-[#888] text-xs font-mono">
          ─────── ★ · . · ☆ · . · ★ ───────
        </div>
      </main>
    </>
  );
}
