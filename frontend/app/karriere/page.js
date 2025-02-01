import GetContent from "../components/getContent";
import Image from "next/image";

export default async function Karriere(){
    const rawContent = await GetContent("karriere", "*");
    const content = rawContent.data;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    return (
        <div className="bg-coal-black flex flex-col items-center relative text-steel-white" id="start">
            <div className="w-full m-0 p-0 min-h-[33%] relative flex flex-col justify-center items-end">
                <Image src={`${apiUrl}${content.bild.url}`} width={1000} height={667} alt={`Hintergrundbild ${content.jobtitel}`} className="w-full h-full absolute top-0 left-0 object-cover z-0" />
                <div className="w-[90vw] md:max-w-[75%] lg:max-w-[505%]">
                    <h1 className="leading-none">Werde {content.jobtitel} bei Fibertronic!</h1>
                </div>
                <div className="flex flex-row w-[95vw] md:max-w-[75%] lg:max-w-[50%] min-w-fit gap-0 absolute left-[5vw] bottom-1/2">
                    {content.highlights.map((highlight) => (
                        <div className="w-1/3 flex bg-space-cadet text-steel-white justify-center items-center">
                            <span className="text-xl">{highlight.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div id="wir" className="w-[75vw] max-w-screen-lg flex flex-col items-center py-28">
                <h2>{content.headlineSection1}</h2>
                <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2">
                    {content.wirbieten.map((erwartung) => (
                        <div className="flex flex-col gap-2">
                            <h3>{erwartung.titel}</h3>
                            <span className="text-steel-white leading-tight">{erwartung.beschreibung}</span>
                        </div>
                    ))}
                </div>
                <a className="w-full max-w-xs px-3 py-2 rounded-full bg-space-cadet hover:bg-opacity-0 transition-all duration-300 ease-in-out hover:border-space-cadet border-2 border-transparent box-border text-steel-white text-center" href={`mailto:${content.bewerbungsmail}?subject=${content.bewerbungsbetreff}&body=${content.bewerbungsemailtext}`}>
                    Jetzt bewerben!
                </a>
            </div>
            <div id="du" className="w-[75vw] max-w-screen-lg flex flex-col items-center py-28">
                <h2>{content.headlineSection2}</h2>
                <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2">
                    {content.wirerwarten.map((erwartung) => (
                        <div className="flex flex-col gap-2">
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