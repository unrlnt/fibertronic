import GetContent from "./getContent";
import Image from "next/image";

export default async function Teamslides(){
    const rawContent = await GetContent("homepage", "teammember.bild");
    const content = rawContent.data;
    const teammember = content.teammember
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    return teammember.map((pers, index) => (
            <div className="teamCard w-full max-h-full relative" key={index}>
                <Image src={`${apiUrl}${pers.bild.url}`} width={299} height={355} className="w-full h-full object-cover" alt={`Mitarbeiterbild ${pers.name}`} />
                <div className="teamCardcontent flex flex-col absolute top-0 left-0 origin-center bg-coal-black bg-opacity-50 backdrop-blur-sm p-5 md:px-10 gap-5 w-full h-full transition-all duration-500 max-h-full overflow-auto">
                    <h3 className="fibertronic_headlines text-center">{pers.name}</h3>
                    <span className="text-sm">{pers.bio}</span>
                </div>
            </div>
        ))}