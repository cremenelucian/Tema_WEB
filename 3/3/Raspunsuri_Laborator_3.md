## Partea 1: Analiza Protocolului HTTP

### 1.1 Întrebări teoretice

1) **Cele 4 metode HTTP principale și când se folosesc**
- **GET**: cere o resursă (citire). Nu ar trebui să modifice starea serverului. Exemplu: încărcarea unei pagini, listarea produselor.
- **POST**: trimite date către server pentru a crea o resursă sau a declanșa o acțiune. Exemplu: creare cont, trimitere formular.
- **PUT**: înlocuiește (de regulă complet) o resursă identificată. Exemplu: update complet la profilul user-ului.
- **DELETE**: șterge o resursă. Exemplu: ștergerea unui cont sau a unui articol.

2) **Semnificația codurilor de status**
- **200 OK**: request reușit.
- **301 Moved Permanently**: redirecționare permanentă (URL-ul resursei s-a schimbat).
- **400 Bad Request**: request invalid (date lipsă/format greșit).
- **401 Unauthorized**: neautentificat (lipsește autentificarea/credentialele).
- **403 Forbidden**: autentificat sau nu, dar accesul e interzis (drepturi insuficiente).
- **404 Not Found**: resursa nu există.
- **500 Internal Server Error**: eroare pe server (excepție/bug/config).

3) **Diferența între HTTP și HTTPS**
- **HTTP**: trafic necriptat → poate fi interceptat/modificat (man-in-the-middle).
- **HTTPS**: HTTP peste TLS → datele sunt **criptate**, se verifică identitatea serverului prin certificat, integritate mai bună.

### 1.2 Exercițiu practic: analiza HTTP în DevTools (httpbin)

**Ce trebuie să livrezi (conform cerinței):**
- Un exemplu de cerere **GET**
- Headerele de request: `User-Agent`, `Accept`, `Accept-Language`, `Host`
- Headerele de răspuns: `Content-Type`, `Server`, `Date`
- Screenshot-uri

**Pași recomandați (Chrome/Firefox):**
1. Intră pe `https://httpbin.org`
2. Apasă **F12** → tab-ul **Network**
3. Bifează (opțional) **Preserve log**
4. Dă click pe un endpoint care face GET (ex: `https://httpbin.org/get`) sau navighează pe site
5. În listă, selectează request-ul GET → tab **Headers**
6. Fă screenshot cu:
   - Request Headers (unde apar `User-Agent`, `Accept`, `Accept-Language`, `Host`)
   - Response Headers (unde apar `Content-Type`, `Server`, `Date`)

### 1.3 Testarea metodelor HTTP cu Fetch API (livrabil: screenshot în consolă)

1. Intră pe `https://httpbin.org`
2. F12 → **Console**
3. Rulează codul din cerință:

```javascript
// Testați GET
fetch('https://httpbin.org/get')
    .then(response => response.json())
    .then(data => console.log('GET:', data));

// Testați POST cu date JSON
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nume: 'NumeleVostru', laborator: 3 })
})
    .then(response => response.json())
    .then(data => console.log('POST:', data));
```

4. Fă screenshot cu output-ul din consolă (trebuie să se vadă log-urile `GET:` și `POST:`).

---

## Partea 2-3-4: Proiect (ce ai în folderul `laborator3/`)

**Fișiere implementate:**
- `index.html`
- `preferences.html`
- `cookies-info.html`
- `login.html`
- `register.html`
- `dashboard.html`
- `cart.html`
- `style.css`
- `js/cookies.js` (furnizat)
- `js/storage.js` (furnizat)

**Rulare:**
- Deschide `laborator3/index.html` în browser (dublu click) sau cu Live Server.
