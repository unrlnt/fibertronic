"use client"

import Script from "next/script";

export default function ContactForm(){
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formApi = process.env.NEXT_PUBLIC_FORM_API_KEY

        const resultField = document.getElementById('formresult')
        const formElement = document.getElementById('contactform')

        formData.append("access_key", formApi);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        console.log(formData)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            formElement.classList.toggle('hidden');
            resultField.innerHTML = "Vielen Dank! Wir melden uns so bald wie möglich bei Ihnen.";
            resultField.classList.toggle('hidden')
        } else {
            formElement.classList.toggle('hidden')
            resultField.innerHTML = "Entschuldigung, da hat etwas nicht funktioniert, bitte versuchen Sie es zu einem späteren Zeitpunkt erneut.";
            resultField.classList.toggle('hidden');
            setTimeout(() => {
                resultField.classList.toggle('hidden')
                formElement.classList.toggle('hidden')
            }, 5000)
        }
    }

    return(
        <>
        <form id="contactform" className="grid grid-cols-1 md:grid-cols-2 gap-5 text-coal-black" onSubmit={handleSubmit}>
            <label htmlFor="vorname" hidden>Vorname</label>
            <input type="text" name="vorname" id="vorname" placeholder="Vorname" className="formfield col-span-1" required />
            <label htmlFor="nachname" hidden>Nachname</label>
            <input type="text" name="nachname" id="nachname" placeholder="Nachname" className="formfield col-span-1" required />
            <label htmlFor="email" hidden>E-Mail Adresse</label>
            <input type="email" name="email" id="email" placeholder="E-Mail Adresse" className="formfield col-span-1" required />
            <label htmlFor="tel" hidden>Telefonnummer</label>
            <input type="tel" name="tel" id="tel" placeholder="Telefonnummer" className="formfield col-span-1" />
            <label htmlFor="unternehmen" hidden>Unternehmen</label>
            <input type="text" name="unternehmen" id="unternehmen" placeholder="Unternehmen" className="formfield col-span-1" required />
            <label htmlFor="funktion" hidden>Funktion</label>
            <input type="text" name="funktion" id="funktion" placeholder="Funktion" className="formfield col-span-1" />
            <label id="opt-in" className="col-span-1 md:col-span-2 flex flex-row gap-2 items-start px-2">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm text-steel-white">Ich habe die Datenschutzrichtlinie sowie die AGB gelesen und akzeptiere diese. Ich bin einverstanden, von der Fibertronic GmbH bezüglich meiner Anfrage kontaktiert zu werden.</span>
            </label>
            <div class="h-captcha" data-captcha="true"></div>
            <button type="submit" className="text-steel-white col-span-1 md:col-start-2 justify-self-end w-full md:w-1/2 md:hover:w-full bg-space-cadet hover:bg-transparent border-2 hover:border-space-cadet border-transparent rounded-full h-fit self-center py-3 px-3 transition-all duration-300">Senden</button>
        </form>
        <div id="formresult" className="hidden"></div>
        <Script src='https://web3forms.com/client/script.js' async defer />
        </>
    )
}