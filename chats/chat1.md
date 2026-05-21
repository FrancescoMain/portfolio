# Portfolio Interattivo Ambizioni

_Started 2026-05-21 16:50 UTC_

---

## User

devo creare un sito di portfolio statico graficamente pazzesco, per riuscire a prendere più proposte di lavoro possibili, voglio che rispecchi la mia personalità, il mio essere ambizioso e sognare di diventare un giorno un manager o un imprenditore di successo, per far questo credo che dovrò raccontarti i miei dati, quello che mi immagino è una sorta di web app dove ci sono delle animazioni che raccontano il mio percorso e le mie aspirazioni e per ogni click su avanti si va avanti nel mio percorso che mi racconta

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- nome: Francesco Cesarano
- eta_luogo: 29 anni, Napoli
- tagline: "Quando ero un bambino, ero un sognatore. Leggevo fumetti ed ero l'eroe di quei fumetti. Guardavo film ed ero l'eroe di quei film. Adesso ogni mio sogno è diventato realtà". Elvis Presley 
- percorso: Mi sono diplomato nel 2016 come perito informatico all'iti renato elia, dopo una prima parte della mia vita dedicata alla musica dove volevo fare il musicista decido di rendere la mia seconda passione, l'informatica, il mio lavoro, nel 2022 inizio boolean, un master professionalitzzante di 6 mesi, che praticamente mi cambia la vita, dopo 6 mesi inizio subito a fare alcuni stage, uno in una azienda di nome UNITIVA dove imparo ad usare meglio REACT, e da li amore a prima vista verso questo framework che diventerà la mia arma migliore, dopo quello stage ne inizio un altro, in SFIDA, sfida diventa il nido dove cresco, vengo assunto a indeterminato, vengo promosso e coccolato in figure di responsabilità, iniziando anche a formare e seguire piccoli team. Poi la chiamata da parte dia Accenture, una grandissima multinazionale, dove vengo assunto come SENIOR ANALYST, e dove sono tutt'ora, in questo periodo ho affrontato mille sfide e tantissibi progetti, e tantissime tecnologie diverse, sopratutto nell'ultimo anno, con l'avvento dell'ia e dell'implementazioni dei sistemi agentici 
- skills: FRONT END REACT, javascript, html, css lvl max
Typescript 4 stelle su 5
Express mysql node, 3 su 5
Java, php openapi, 2 su 5

Claude code, rag system, obsidian knowledge, agentic system, llm implementation 5 su 5

- progetti: Ho messo su più di un progetto di agenti ai che autmatizzano il fllusso di team numerosi di sviluppo test e documentazione
Ho formato almeno una decina di risorse nella mia carriera, la maggior parte dei quali sono diventati poi ottimi sviluppatori (anche migliori di me)
Sto creando un applicazione fighissima, che spero mi renderà ricco!
- aspirazioni: Creare qualcosa di mio che impatti le persone, diventare libero professionista/imprenditore o in alternativa manager di un azienda figa 
- settore_target: Qualsiasi tipo, preferisco contatti da freelancer ma essendo ancora in accenture valuto anche lavoro come dipendente 
- contatti: linkedin https://www.linkedin.com/in/francescocesarano/details/education/, github https://github.com/FrancescoMain, 3387470283, cesaranofrancescomain@gmail.com
- foto: uploads/foto-1779383165080.jpg
- stile_visivo: Tech / futuristico — griglie, monospace, terminal vibes, accenti neon
- navigazione: Scroll narrativo con animazioni che si attivano
- animazioni: Spettacolari — particelle, parallax, tipografia in movimento, effetti WebGL-like
- sezioni_extra: CV scaricabile (placeholder), Lista letture / influenze, Statistiche personali animate (anni, progetti, ecc.), Citazioni o frasi che ti guidano, Pagina contatti con form
- lingua: Entrambe (toggle)

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: image_metadata]_

_[tool: view_image]_

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: grep]_

_[tool: write_file]_

Building the portfolio now. I'll structure it as a scroll-narrative with 9 chapters, each full-viewport, with a live canvas grid background, neon-green terminal accents, IT/EN toggle, and tweaks.

_[tool: write_file]_

Now the canvas background — animated grid + drifting particles that respond to scroll & mouse.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

Now the HTML shell:

_[tool: write_file]_

_[tool: done]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: str_replace_edit]_

The boot section's fade-up isn't activating. The animation rule only targets `.chapter.is-active` — but boot uses `.boot`. Fix:

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: sleep]_

_[tool: fork_verifier_agent]_

I'll wait for the verifier report before debugging further.

## User

mi piacerebbe lo scroll automatico, ovvero scrollo giu e mi porta direttamente alla seconda sezione

## Assistant

_[tool: eval_js]_

Aggiungo lo scroll snap. Anche controllo che le animazioni partano correttamente.

_[tool: str_replace_edit]_

Site funziona correttamente — era solo un artefatto degli screenshot. Aggiungo lo scroll snap:

_[tool: done]_

Fatto. Lo scroll ora è snap: ogni rotella/freccia/swipe ti porta direttamente alla sezione successiva (boot → origine → salto → scalata → oggi → numeri → stack → progetti → missione → influenze → contatti → footer).

Puoi anche usare frecce ↑ ↓ o PageUp/PageDown per navigare, e il pulsante **AVANTI** in basso a destra.

## User

questa parte diediamola

Sono nato a Napoli,
in mezzo al rumore.
Da piccolo ero un sognatore. Vivevo dentro i fumetti, dentro i film, sempre con l'idea di essere l'eroe di una storia più grande. La prima ossessione è stata la musica — volevo diventare un musicista. Ma c'era anche un'altra passione, più silenziosa, che mi teneva incollato allo schermo del pc, che mi faceva passare le notti a sperimentare.

## Assistant

_[tool: str_replace_edit]_

Aggiornato sia IT che EN.

## User

Save this design as a PDF: Portfolio Francesco.html

## User

mi crei anche la version in cobalt singola pagina come cv in inglese?

