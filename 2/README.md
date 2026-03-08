# Campus Info Hub

Acesta este un mic site web pentru laboratorul 2, care prezintă resurse din campus (bibliotecă, cantină, spații de studiu, evenimente).

## Răspunsuri la întrebări

1. **Ce este o resursă (resource) în aplicația ta?**  
   O resursă este un obiect din campus care oferă un anumit tip de serviciu pentru studenți (de exemplu: bibliotecă, sală de studiu, cantină, sală de conferințe, spațiu de relaxare). Pentru fiecare resursă există informații precum nume, tip, locație, program și tag-uri.

2. **Dă exemplu de un URI și explică componentele acestuia.**  
   Exemplu: `/pages/library.html#schedule`  
   - `/` – rădăcina site-ului (root)  
   - `pages/` – directorul în care se află pagina  
   - `library.html` – resursa (pagina HTML) care descrie biblioteca  
   - `#schedule` – fragment identifier, indică faptul că browserul trebuie să deruleze la elementul cu `id="schedule"` din `library.html`

3. **Care părți sunt statice și care sunt dinamice?**  
   - Părți **statice**: structura generală a paginilor HTML (`index.html`, `pages/library.html`, `pages/cafeteria.html`, `pages/events.html`), fișierul CSS și textul fix din aceste pagini.  
   - Părți **dinamice**: lista de resurse, filtrarea resurselor și lista de tag-uri de pe `index.html`, care sunt generate în browser pe baza fișierului `data/resources.json` folosind JavaScript și `fetch`.

4. **Este aplicația ta document-centric sau interactive (sau ambele)? De ce?**  
   Aplicația este **atât document-centric, cât și interactivă**. Este document-centric deoarece oferă pagini cu conținut informativ static (descrieri de locații, program etc.), iar în același timp este interactivă deoarece home page-ul încarcă dinamic datele din `resources.json`, le afișează sub formă de listă și permite utilizatorului să aplice filtre (după tip și după destinația de studiu).

