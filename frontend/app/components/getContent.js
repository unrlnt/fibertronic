'use server'

export default async function GetContent(page, pplt){
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
    let path = `/api/${page}?populate=${pplt}`;
        
    const url = new URL(path, baseUrl);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load content");
    
    const data = await res.json();
    return data
}