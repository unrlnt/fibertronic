"use client"
import '@fortawesome/fontawesome-svg-core/styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function MobileMenuToggle(){
    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu')
        const status = menu.classList.contains('scale-x-0')
        const menuOpen = document.getElementById('menuOpen')
        const menuClose = document.getElementById('menuClose')

        switch(status){
            case true:
                menu.classList.remove('scale-x-0');
                menu.classList.add('scale-x-100');
                document.body.classList.add('overflow-y-hidden')
                menuOpen.classList.remove('opacity-100')
                menuOpen.classList.add('opacity-0')
                setTimeout(()=>{
                    menuOpen.classList.add('hidden')
                    menuClose.classList.remove('hidden')
                    setTimeout(()=>{
                        menuClose.classList.remove('opacity-0')
                    }, 1)
                }, 300)

                break
            default:
                menu.classList.remove('scale-x-100');
                menu.classList.add('scale-x-0');
                document.body.classList.remove('overflow-y-hidden')
                menuClose.classList.add('opacity-0')
                setTimeout(()=>{
                    menuClose.classList.add('hidden')
                    menuOpen.classList.remove('hidden')
                    setTimeout(()=>{
                        menuOpen.classList.remove('opacity-0')
                    }, 1)
                }, 300)
        }
    }
    return(
    <>
        <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#202448",}} className="mr-5 transition-all duration-300 opacity-100" onClick={toggleMobileMenu} id='menuOpen' />
        <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#202448",}} className="mr-5 hidden opacity-0 transition-all duration-300" onClick={toggleMobileMenu} id='menuClose' />
    </>
    )
}

export function MobileMenu(props){
    const { linktext, linkurl } = props
    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu')
        const status = menu.classList.contains('scale-x-0')
        const menuOpen = document.getElementById('menuOpen')
        const menuClose = document.getElementById('menuClose')

        switch(status){
            case true:
                menu.classList.remove('scale-x-0');
                menu.classList.add('scale-x-100');
                document.body.classList.add('overflow-y-hidden')
                menuOpen.classList.remove('opacity-100')
                menuOpen.classList.add('opacity-0')
                setTimeout(()=>{
                    menuOpen.classList.add('hidden')
                    menuClose.classList.remove('hidden')
                    setTimeout(()=>{
                        menuClose.classList.remove('opacity-0')
                    }, 1)
                }, 300)

                break
            default:
                menu.classList.remove('scale-x-100');
                menu.classList.add('scale-x-0');
                document.body.classList.remove('overflow-y-hidden')
                menuClose.classList.add('opacity-0')
                setTimeout(()=>{
                    menuClose.classList.add('hidden')
                    menuOpen.classList.remove('hidden')
                    setTimeout(()=>{
                        menuOpen.classList.remove('opacity-0')
                    }, 1)
                }, 300)
        }
    }

    return(
        <a className="text-steel-white hover:text-cool-grey focus:text-cool-grey transition-all duration-300 ease-in-out text-right" href={linkurl} onClick={toggleMobileMenu} >
            {linktext}
        </a>
    )
}

export function MobileMenuContact(props){
    const { email, tel } = props
    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu')
        const status = menu.classList.contains('scale-x-0')
        const menuOpen = document.getElementById('menuOpen')
        const menuClose = document.getElementById('menuClose')

        switch(status){
            case true:
                menu.classList.remove('scale-x-0');
                menu.classList.add('scale-x-100');
                document.body.classList.add('overflow-y-hidden')
                menuOpen.classList.remove('opacity-100')
                menuOpen.classList.add('opacity-0')
                setTimeout(()=>{
                    menuOpen.classList.add('hidden')
                    menuClose.classList.remove('hidden')
                    setTimeout(()=>{
                        menuClose.classList.remove('opacity-0')
                    }, 1)
                }, 300)

                break
            default:
                menu.classList.remove('scale-x-100');
                menu.classList.add('scale-x-0');
                document.body.classList.remove('overflow-y-hidden')
                menuClose.classList.add('opacity-0')
                setTimeout(()=>{
                    menuClose.classList.add('hidden')
                    menuOpen.classList.remove('hidden')
                    setTimeout(()=>{
                        menuOpen.classList.remove('opacity-0')
                    }, 1)
                }, 300)
        }
    }

    return(
        <div className='flex flex-col items-center'>
            <a className="w-fit px-3 py-2 self-end rounded-full bg-cool-grey hover:bg-opacity-0 transition-all duration-300 ease-in-out hover:border-cool-grey border-2 border-transparent box-border text-steel-white text-right mb-10" href="#kontakt" onClick={toggleMobileMenu} >
                Kontakt
            </a>
            <div className='flex flex-row gap-5'>
                <a className="text-xs text-steel-white" href={`mailto:${email}`} target="_blank" onClick={toggleMobileMenu} >
                    {email}
                </a>
                <a className="text-xs text-steel-white" href={`tel:${tel}`} target="_blank" onClick={toggleMobileMenu} >
                    {tel}
                </a>
            </div>
            <div className='flex flex-row gap-5'>
                <a className="text-xs text-steel-white" href="/impressum" target="_blank" onClick={toggleMobileMenu} >
                    Impressum
                </a>
                <a className="text-xs text-steel-white" href="/datenschutz" target="_blank" onClick={toggleMobileMenu} >
                    Datenschutz
                </a>
            </div>
        </div>
    )
}