import { Metadata } from "next"
import Header from "@/app/components/header";
import details from "@/lib/logoProject.json";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Project Page",
    description: "Single project page",
};

const ProjectDetails = () => {

  return (
    <>
    <Header />
    <section className="logoProjectContainer">
      {details.map((item, index) => (
        <div className="details" key={index}>
          <h2>{item.CompanyName} final logo</h2>
          <Image src={item.finalLogo} width={270} height={100} alt="final logo"></Image>
          <div className="compagny">
            <p>Company Name: {item.CompanyName}</p>
            <p>Category/Mascot: {item["Category/Mascot"]}</p>
            <p>Target Audience: {item["Target Audience"]}</p>
            <p>Emotional details: {item["Emotional details"]}</p>
          </div>
          <div className="process">
            <div className="step1">
              <h3><strong>Step 1:</strong> Visual Research</h3>
              <p>Exploring industry trends, competitor branding, and visual elements to establish a strong design direction.</p>
              <figure>
                <Image src={item["visual research photos"]} width={400} height={100} alt=""></Image>
                <figcaption>Brand visual research photos</figcaption>
              </figure>
              <figure>
              <Image src={item["visual research mascot"]} width={400} height={100} alt=""></Image>
              <figcaption>Mascot visual research photos</figcaption>
            </figure>
            </div>
            <div className="step2">
              <h3><strong>Step 2:</strong> Symbol sketches:</h3>
              <p>Exploring different symbols that visually represent the brand’s identity, values, and uniqueness.</p>
              <figure>
                  <Image src={item["symbol sketches part1"]} width={400} height={100} alt=""></Image>
                <figcaption>Symbols exploration sketches</figcaption>
              </figure>
              <figure>
                  <Image src={item["symbol sketches part2"]} width={400} height={100} alt=""></Image>
                <figcaption>Symbol sketches with 3 different directions</figcaption>
              </figure>
              <ol>
                <li>{item["direction 1"]}</li>
                <li>{item["direction 2"]}</li>
                <li>{item["direction 3"]}</li>
              </ol>
              <br />
              <p><strong>Next Steps:</strong> Evaluating the most effective symbol for refinement and digitization.</p>
            </div>
            <div className="step3">
              <h3>Step 3: Digitized logos:</h3>
              <figure>
                <Image src={item["digitized logos"]} width={400} height={100} alt=""></Image>
                <figcaption>First set on digitized logos using Illustrator</figcaption>
              </figure>
              <figure>
                <Image src={item["digitized logos refinements"]} width={400} height={100} alt=""></Image>
                <figcaption>Refinements</figcaption>
              </figure>              
              <ol>
                <li>{item["first logo"]}</li>
                <li>{item["second logo"]}</li>
                <li>{item["third logo"]}</li>
              </ol>
            </div>
            <div className="step4">
              <h3>Step 4: Type & Color Variations Explorations</h3>
              <figure>
                <Image src={item["type variations"]} width={400} height={100} alt=""></Image>
                <figcaption>Refinements</figcaption>
              </figure>
              <ol>
                <li>Experiment with different typefaces to match brand personality</li>
                <li>Adjust spacing, weight, and custom typography</li>
                <li>Explore various palette with high contrast</li>
                <li>Ensure readability across backgrounds and formats</li>
                <li>Monochrome & Variations</li>
              </ol>
            </div>
            <div className="step5">
              <h3>Step 5: Final Directions</h3>
              <figure>
                <Image src={item["final directions"]} width={400} height={100} alt=""></Image>
                <figcaption>Final touches focused on critiques</figcaption>
              </figure>
              <ol>
                <li>{item["1st version"]}</li>
                <li>{item["2nd version"]}</li>
                <li>{item["3rd version"]}</li>
              </ol>
            </div>
            <div className="">
              <h3>Final Signature</h3>
              <div className="final">
                <figure>
                <Image src={item.finalLogo} width={400} height={100} alt=""></Image>
                <figcaption>Final Logo</figcaption>
                </figure>
                <figure>
                  <Image src={item.mockup} width={400} height={100} alt=""></Image>
                  <figcaption>Mockup</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      )
      )}
    </section>
    </>
    
  );
};

export default ProjectDetails;