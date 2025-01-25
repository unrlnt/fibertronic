import Image from "next/image";
import GetContent from "./getContent";
import MobileMenuToggle, { MobileMenuContact } from "./mobileMenu"
import { MobileMenu } from "./mobileMenu";

export default async function Menu(){
    const rawContent = await GetContent("menu", "*");
    const content = rawContent.data;    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu')
        const status = menu.classList.contains('scale-x-0')

        switch(status){
            case true:
                menu.classList.remove('scale-x-0');
                menu.classList.add('scale-x-100');
                document.body.classList.add('overflow-y-hidden')
                break
            default:
                menu.classList.remove('scale-x-100');
                menu.classList.add('scale-x-0');
                document.body.classList.remove('overflow-y-hidden')
        }
    }

    return(
        <>
            <div className="z-50 fixed top-2 left-[max(50%-47.5vw,50%-512px)] flex flex-row justify-between items-center bg-[#c4cadbcc] bg-opacity-70 backdrop-blur-sm w-[95vw] max-w-screen-lg rounded-full px-5 py-2">
                <a className="m-0, p-0 w-1/3" href="/" alt="Link zur Startseite">
                    <Image src={`${apiUrl}${content.logo.url}`} className="object-contain max-w-40" width={300} height={90} alt="logo" />
                </a>
                <div className="hidden md:flex flex-row justify-between items-center m-0 w-2/3">
                    {content.link.map((link) =>(
                        <a className="w-full text-steel-white hover:text-space-cadet transition-all duration-300 ease-in-out text-center" href={link.url}>
                        {link.text}
                    </a>
                    ))}
                    <a className="w-full px-3 py-2 rounded-full bg-space-cadet hover:bg-opacity-0 transition-all duration-300 ease-in-out hover:border-space-cadet border-2 border-transparent box-border text-steel-white text-center" href="#kontakt">
                        Kontakt
                    </a>
                </div>
                <div className="md:hidden">
                    <MobileMenuToggle />
                </div>
            </div>
            <div className="z-40 flex min-w-64 max-w-full fixed flex-col justify-start gap-6 h-full bg-coal-black bg-opacity-70 backdrop-blur-sm items-end top-0 right-0 px-10 pt-24 origin-right scale-x-0 transition-all duration-300" id="mobileMenu">
                {content.link.map((link) =>(
                    <MobileMenu linktext={link.text} linkurl={link.url} />
                ))}
                <MobileMenuContact email={content.email} tel={content.tel} />
            </div>
        </>
    );
}