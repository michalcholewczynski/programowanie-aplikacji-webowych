let zdjęcia = null;

export async function pobierzZdjecia() {
    if (zdjecia) return zdjęcia;
    const odpowiedz = await fetch("/photos.json");
    if (!odpowiedz.ok) throw new Error(`Błąd serwera: ${odpowiedz.status}`);
    zdjecia = await odpowiedz.json();
    return zdjęcia;
}

export async function pobierzZdjecia(id) {
    const lista = await pobierzZdjecia();
    return lista.find(z => z.id === Number(id)) ?? null;
}

export function usunZdjecie(id) {
    zdjecia = zdjecia.filter(z => z.id !== id);
    return zdjecia;
}

export function przelaczUlubione(id) {
    zdjecia = zdjecia.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z));
    return zdjecia;
}

export function dodajZdjecie(nowe) {
    const noweId = Math.max(...zdjecia.map(z => z.id)) + 1;
    zdjecia = [...zdjecia, {...nowe, id: noweId, favorite: false}];
    return zdjecia;
}