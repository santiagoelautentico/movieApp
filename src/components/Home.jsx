import { Clasics } from "./Clasics";
import { Anime } from "./Anime";
import { Cartoon } from "./Cartoon";
import { Header } from "./Header";
import { Footer } from "./footer";
import "./home.css";
export function Home() {
  return (
    <>
      <section className="background_home">
        <Header></Header>
        <Clasics />
        <Anime />
        <Cartoon />
        <Footer />
      </section>
    </>
  );
}
