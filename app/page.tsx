import Header from "./components/header";
import Hero from "./components/hero";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
{/* 
      <section className="contact">
        <h2>Contact</h2>
        <p>You can reach me at saralatorre97@gmail.com</p>
      </section> */}

      <footer>
        <p>&copy; 2024 Sara Latorre</p>
      </footer>
    </>
  );
};

export default Home;