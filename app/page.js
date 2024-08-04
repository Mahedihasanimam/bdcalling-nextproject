import Hero from "./(components)/(homeComponents)/page";
import Process from "./(components)/(homeComponents)/process/pagel";
import Allwork from "./(components)/(homeComponents)/work/page";


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Allwork/>
      <Process/>
    </main>
  );
}
