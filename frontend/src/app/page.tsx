// Imports Principais
import Image from "next/image";

// Componetes
import { Navbar } from "@/components/Navbar/page";

function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <Navbar />
      {/* <h1>Meikai Animes</h1> */}
    </div>
  );
}

export default Home;
