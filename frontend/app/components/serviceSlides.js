import GetContent from "./getContent"
import Image from "next/image"
import Markdown from "react-markdown";

export default async function ServiceSlides() {
    const bildContent = await GetContent("homepage", "leistung.bild");
    const bilder = bildContent.data;
    const bild = bilder.leistung
    const iconContent = await GetContent("homepage", "leistung.icon");
    const icons = iconContent.data;
    const icon = icons.leistung
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    return bild.map((serv, index) => (
        <div key={index} className="w-full relative rounded-3xl overflow-clip md:h-[75vh] bg-space-cadet grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-0 items-center">
            <Image src={`${apiUrl}${serv.bild.url}`} width={800} height={500} className="w-full h-full max-h-60 md:max-h-full col-span-1 row-span-1 object-cover self-start" alt={`Beispielbild zu ${serv.name}`} />
            <div className="absolute top-60 md:top-1/2 left-1/2 md:left-1/3 -translate-x-1/2 -translate-y-1/2 bg-ash-grey p-5 rounded-full w-24">
                <Image src={`${apiUrl}${icon[index]["icon"]["url"]}`} width={96} height={96} alt={`Icon zu ${serv.name}`} />
            </div>
            <div className="w-full col-span-1 md:col-span-2 row-span-2 md:row-span-1 flex flex-col justify-center items-center px-10 md:px-20 py-10">
                <h2 className="leading-none mb-5">{serv.name}</h2>
                <Markdown className="text-sm">{serv.text}</Markdown>
            </div>
        </div>
    ))
}