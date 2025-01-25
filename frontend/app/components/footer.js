import Image from "next/image"
import GetContent from "./getContent"
import ContactForm from "./contactForm";

export default async function Footer(){
    const rawContent = await GetContent("homepage", "*");
    const content = rawContent.data;
    const socialContent = await GetContent("homepage", "network.icon");
    const socials = socialContent.data.network;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    return(
        <>
            <div key={1} className="w-full bg-ebony py-20 flex justify-center text-steel-white" id="kontakt">
                <div className="grid grid-cols-1 md:grid-cols-3 w-[75vw] md:w-[95vw] max-w-screen-lg self-center gap- gap-x-20 gap-y-10">
                    <h2 className="font-bold col-span-1 md:col-start-3 row-start-1 text-center md:text-right">{content.headlineKontakt}</h2>
                    <div className="flex flex-col col-span-1 col-start-1 md:row-span-2 items-center">
                        <Image src={`${apiUrl}${content.footerBild.url}`} className="object-contain border-b-steel-white border-b-4 w-full max-w-64" width={299} height={355} alt="Ihr persönlicher Ansprechpartner" />
                        <span className="text-center text-lg leading-none mt-2 max-w-64">{content.subheadlineKontakt}</span>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex flex-col items-end">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div key={2} className="w-full bg-coal-black flex justify-center py-20 text-steel-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[75vw] md:w-[95vw] max-w-screen-lg items-center">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col text-center">
                            <span className="font-medium">{content.footerFirmenname}</span>
                            <span className="font-light text-sm">{content.adressestr}</span>
                            <span className="font-light text-sm">{content.adresseort}</span>
                        </div>
                        <div className="flex flex-row gap-5 justify-center text-xs">
                            <a href="/impressum" target="_blank">Impressum</a>
                            <span>|</span>
                            <a href="datenschutz" target="_blank">Datenschutz</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.761099520733!2d8.666104876350085!3d50.426922571587795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bcff5b0ed23d5b%3A0x920592c8c572a8b0!2sRUMO%20GmbH%20Solar%20%26%20Geb%C3%A4udetechnik!5e0!3m2!1sde!2snl!4v1737292438778!5m2!1sde!2snl" loading="lazy"></iframe>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col text-center">
                            <a href={`mailto:${content.kontaktmail}`}>{content.kontaktmail}</a>
                            <a href={`tel:${content.tel}`}>{content.tel}</a>
                        </div>
                        <div className="flex flex-row gap-5 justify-center">
                            {socials.map((network) => (
                                <a href={network.link} target="_blank"><Image src={`${apiUrl}${network.icon.url}`} width={33} height={33} alt="Social Media Icon" className="hover:scale-110 transition-transform duration-300" /></a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}