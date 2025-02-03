import Image from "next/image";
import GetContent from "./components/getContent";
import Markdown from "react-markdown";
import EmblaCarousel from "./components/emblaCarousel";
import Teamslides from "./components/teamslides";
import ServiceSlides from "./components/serviceSlides";

export default async function Home() {
  const rawContent = await GetContent("homepage", "*");
  const content = rawContent.data;
  const rawLeistung = await GetContent("homepage", "leistung.icon");
  const leistungContent = rawLeistung.data;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const team = await Teamslides();
  const serv = await ServiceSlides();
  return (
    <div className="bg-coal-black flex flex-col items-center relative text-steel-white" id="start">
      <div className="flex flex-col justify-center gap-5 bg-coal-black h-screen w-screen m-0 p-0 relative overflow-hidden">
        <video src={`${apiUrl}${content.heroBg.url}`} className="absolute top-0 left-0 min-w-screen min-h-screen object-cover z-0 opacity-50" type="video/mp4" load="lazy" autoPlay muted loop playsInline />
        <div className="flex flex-row w-[95vw] max-w-screen-lg self-center md:justify-end">
          <div className="flex flex-col z-10 md:items-end md:text-right text-steel-white w-full md:w-2/3 lg:w-1/2">
            <h1 className="leading-none">{content.h1}</h1>
            {content.homeHighlight.map((usp) => (
              <span className="text-xl">{usp.text}</span>
            ))}
            <a href="#kontakt" className="bg-cool-grey w-48 hover:w-80 mt-5 px-3 py-2 rounded-full hover:bg-opacity-0 transition-all duration-300 ease-in-out hover:border-cool-grey border-2 border-transparent box-border text-steel-white text-center">Kontakt</a>
          </div>
        </div>
      </div>
      <div className="w-[95vw] max-w-screen-lg absolute top-[80vh] flex flex-row justify-between self-center">
        {leistungContent.leistung.map((leistung, index) => (
          <div key={index} className="flex flex-col justify-center items-center rounded-full md:rounded-2xl bg-cool-grey aspect-square w-full max-w-[20%] p-2 md:p-5 border-transparent border-4 hover:border-[#c4cadbcc] transition-all duration-300 hover:shadow-black shadow-md">
            <Image src={`${apiUrl}${leistung.icon.url}`} width={96} height={96} alt={`Icon ${leistung.name}`} />
            <span className="text-lg hidden md:inline text-center">{leistung.name}</span>
          </div>
        ))}
      </div>
      <div className="w-[75vw] max-w-screen-lg flex flex-col items-center py-28 md:mt-8" id="team">
          <h2>{content.headlineSection1}</h2>
          <span className="tracking-wider font-thin">{content.subheadlineSection1}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row gap-10 lg:gap-28 mt-10 w-full justify-around items-center">
            <Image src={`${apiUrl}${content.ueberUnsBild.url}`} width={1080} height={720} className="w-full h-full object-cover md:order-2" alt="Bild vom gesamten Team" />
            <Markdown className="w-full md:order-1">{content.ueberUnsText}</Markdown>
          </div>
          <h2 className="mt-28">{content.headlineSection2}</h2>
          <span className="tracking-wider font-thin mb-10">{content.subheadlineSection2}</span>
          <EmblaCarousel slides={team} options={{ skipSnaps: true, align: "start", loop: true }} />
      </div>
      <div className="w-[75vw] max-w-screen-lg flex flex-col justify-center items-center mb-28" id="leistungen">
        <h2>{content.headlineSection3}</h2>
        <span className="tracking-wider font-thin mb-10">{content.subheadlineSection3}</span>
        <EmblaCarousel slides={serv} options={{ loop: true }} autoplay />
      </div>
    </div>
  );
}
