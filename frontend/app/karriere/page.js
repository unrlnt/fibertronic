import GetContent from "../components/getContent";
import Image from "next/image";

export default async function Karriere(){
    const rawContent = await GetContent("karriere", "*");
    const content = rawContent.data;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    return (
        <div className="bg-coal-black flex flex-col items-center relative text-steel-white" id="start">
            <div className="w-full m-0 p-0 min-h-[50vh] relative flex flex-col justify-center items-end">
                <Image src={`${apiUrl}${content.bild.url}`} width={1000} height={667} alt={`Hintergrundbild ${content.jobtitel}`} className="w-full h-full absolute top-0 left-0 object-cover z-0" />
                <div className="w-[90vw] md:max-w-[75%] lg:max-w-[50%] z-10">
                    <h1 className="leading-none text-steel-white" style="text-shadow:0 0 5px #0c0c0c">Werde {content.jobtitel} bei Fibertronic!</h1>
                </div>
                <div className="flex flex-row w-[95vw] max-w-screen-lg text-center md:pr-[25%] min-w-fit gap-2 absolute left-[max(50%-47.5vw,50%-512px)] bottom-0 translate-y-1/2">
                    {content.highlights.map((highlight) => (
                        <div className="w-1/3 flex bg-space-cadet text-steel-white justify-center items-center aspect-video">
                            <span className="text-xl">{highlight.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div id="wir" className="w-[75vw] max-w-screen-lg flex flex-col items-center py-28 gap-14">
                <h2>{content.headlineSection1}</h2>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                    {content.wirbieten.map((erwartung) => (
                        <div className="flex flex-col gap-2 items-center">
                            <h3>{erwartung.titel}</h3>
                            <span className="text-steel-white leading-tight">{erwartung.beschreibung}</span>
                        </div>
                    ))}
                </div>
                <a className="w-full max-w-xs px-3 py-2 rounded-full bg-space-cadet hover:bg-opacity-0 transition-all duration-300 ease-in-out hover:border-space-cadet border-2 border-transparent box-border text-steel-white text-center" href={`mailto:${content.bewerbungsmail}?subject=${content.bewerbungsbetreff}&body=${content.bewerbungsemailtext}`}>
                    Jetzt bewerben!
                </a>
            </div>
            <div id="du" className="w-[75vw] max-w-screen-lg flex flex-col items-center py-24 gap-14">
                <h2>{content.headlineSection2}</h2>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                    {content.wirerwarten.map((erwartung) => (
                        <div className="flex flex-col gap-2 items-center">
                            <h3>{erwartung.titel}</h3>
                            <span className="text-steel-white leading-tight">{erwartung.beschreibung}</span>
                        </div>
                    ))}
                </div>
                <a className="w-full max-w-xs px-3 py-2 rounded-full bg-space-cadet hover:bg-opacity-0 transition-all duration-300 ease-in-out hover:border-space-cadet border-2 border-transparent box-border text-steel-white text-center" href={`mailto:${content.bewerbungsmail}?subject=${content.bewerbungsbetreff}&body=${content.bewerbungsemailtext}`}>
                    Jetzt bewerben!
                </a>
            </div>
        </div>
    )
}