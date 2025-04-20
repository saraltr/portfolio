import { Metadata } from "next";
import details from "@/lib/logoProject.json";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Logo Design Project",
  description: "Blossom delight logo project",
};

export default function Hamlet()
{
    return (
        <>
        <section className="mx-4 border p-5 border-[#7d4f50] bg-[#2b2724b0]">
            <h1 className="text-2xl font-semibold text-center mb-6 text-[#e8bcb9]">Hamlet Posters Project</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#2b2724] p-5 rounded-lg">
                {["poster1.png", "poster2.png", "poster3.png", "poster4.png"].map((poster, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                    src={`/images/graphics/hamlet/${poster}`}
                    alt={`Hamlet Poster ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    />
                </div>
                ))}
            </div>


            <div className="grid md:grid-cols-2 my-5 gap-4">
                <Image
                    src={`/images/graphics/hamlet/hamlet.jpg`}
                    alt={`Hamlet play actor`}
                    width={500}
                    height={500}
                    className="w-full max-w-md h-auto object-cover mx-auto rounded-lg"
                />
                <div className="bg-[#f9f4f2] border border-[#7d4f50] p-6 rounded-xl shadow-sm space-y-4">
                <h2 className="text-3xl font-bold text-[#7d4f50] mb-2">Hamlet Posters - Project Summary</h2>
                <div>
                    <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">Story Theme</h3>
                    <p className="text-gray-700">
                    Mortality, death, madness, corruption, revenge, family, and conspiracies.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">The Cast</h3>
                    <p className="text-gray-700">
                    Hamlet, prince of Denmark and main protagonist. Claudius, Hamlet’s uncle, the new king. Gertrude,
                    Hamlet’s mother, married to Claudius. The ghost of King Hamlet, father of Hamlet. Polonius, Lord of
                    Claudius’s court and father of Ophelia and Laertes. Ophelia, Hamlet’s love interest. Laertes, Polonius’s
                    son. Horatio, Hamlet’s loyal friend.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">The Pitch</h3>
                    <p className="text-gray-700">
                    Driven by the desire to avenge his father’s death, Hamlet pretends to be mad and stages a play to expose his uncle’s guilt. At the same time, he hopes to convince his mother—who has married his father’s murderer—to abandon her new marriage.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">Poster Concept</h3>
                    <p className="text-gray-700">
                    This poster design project aims to visually interpret the emotional and narrative complexity of <em>Hamlet</em>. 
                    The goal is to reflect the core themes of tragedy, revenge, mortality, and betrayal. 
                    The project includes four versions: two designs that use symbolic imagery, and two that rely solely on expressive typography 
                    to convey the same emotional weight and thematic elements.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-[#7d4f50] mb-1">Mood & Visual Direction</h3>
                    <p className="text-gray-700">
                    The posters aim to communicate a dark, tragic atmosphere, reflecting themes of manipulation, inner conflict, and a sense of doom. To express these ideas, I used symbolism, strong lighting contrasts, and bold color palettes to highlight the characters’ emotions and the tension within the story.
                    </p>
                </div>
                </div>
            
            </div>

            <div className="step1 my-6 mx-10">
                <h3 className="text-xl font-semibold text-[#7EA680] mb-4 border-l-4 border-[#e8bcb9] pl-2">
                    Step 1: Sketches
                </h3>

                <p className="text-[#2b2724] mb-4 bg-[#e8bcb9] p-3 rounded-lg">
                    I started the design process by exploring different visual interpretations of the play’s key themes and characters.
                    Through hand-drawn sketches, I experimented with symbols, compositions, and typographic concepts. 
                    From this exploration, I selected four directions that best captured the emotional depth and narrative of the play.
                </p>

                <div className="flex flex-col md:flex-row md:items-start md:gap-6">

                    <div className="md:w-1/2 mt-4 md:mt-0">
                    <figure>
                        <Image
                        src={`/images/graphics/hamlet/sketches1.png`}
                        alt={`Hamlet play sketches`}
                        width={900}
                        height={900}
                        className="w-full max-w-xl h-auto object-cover mx-auto rounded-lg"
                        />
                        <figcaption className="text-sm mt-2 italic text-center">
                        Exploration Sketches
                        </figcaption>
                    </figure>
                    </div>

                    <div className="md:w-1/2 bg-[#3a3533] rounded-lg p-4 shadow-inner border border-[#4e4744] mt-4">
                    <h4 className="text-[#e8bcb9] font-semibold mb-2">My picks:</h4>
                    <ol className="list-decimal ml-5 mt-2 text-sm space-y-2 text-[#f0e2d0]">
                        <li>
                        My first poster features crossed blades combined with puppet strings. It highlights themes of control and corruption, with the skull and crown symbolizing deadly consequences—and referencing the most iconic symbol of the play: Yorick’s skull.
                        </li>
                        <li>
                        My second pick includes the ghostly figure of King Hamlet. His large cloak opens like stage curtains, revealing a poisoned cup and a skull. This composition expresses the themes of revenge, death, and the supernatural.
                        </li>
                        <li>
                        My third design focuses on the duel between Hamlet and Laertes, shown through crossing blades. Hamlet’s blade transforms into a question mark, representing his existential struggle (“To be or not to be”), while Laertes’ blade is entwined with flowers, referencing Ophelia and her tragic fate.
                        </li>
                        <li>
                        For the typographic poster, I used dynamic, angled lettering to create a sense of motion and depth. The text begins small at the bottom, gradually increases in size—with the letter “M” being the most prominent—before shrinking again. This progression reflects the escalating tension and psychological complexity of the play.
                        </li>
                    </ol>
                    </div>
                </div>
            </div>

            <div className="my-6 mx-10">
                <h3 className="text-xl font-semibold text-[#7EA680] mb-4 border-l-4 border-[#e8bcb9] pl-3">
                    Step 2: Visual Experiments
                </h3>

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
            </div>

        </section>
        </>
    )
}