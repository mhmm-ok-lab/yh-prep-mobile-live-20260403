(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const y=[{id:"nackademin_ux",name:"Nackademin UX",goal_exam:"Antagningsprov (analys + problemlösning)",weight:70,language_mode:"sv"},{id:"iths_itsec",name:"IT-Högskolan IT-säkerhet",goal_exam:"Antagningsprov Del 1 + Del 2",weight:60,language_mode:"sv-en"},{id:"prog1a",name:"Programmering 1/A-prövning",goal_exam:"Prövning/validering",weight:25,language_mode:"sv-en"}],_=[{id:"ux-1",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"En app tappar 40% användare i steg 2 av onboarding. Vilket första steg är mest UX-rimligt?",options:[{id:"a",text:"Lägg till fler funktioner i steg 1"},{id:"b",text:"Mät varför avhopp sker med funnel + kort användartest"},{id:"c",text:"Byt färgtema"},{id:"d",text:"Skippa onboarding helt"}],answer_key:"b",explanation:"Börja med evidens. Mätning och snabb testning ger orsak innan lösning."},{id:"ux-2",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken prioritering är mest rimlig i en MVP?",options:[{id:"a",text:"Must-have före nice-to-have"},{id:"b",text:"Bygg allt samtidigt"},{id:"c",text:"Fokusera på animationer"},{id:"d",text:"Ingen prioritering behövs"}],answer_key:"a",explanation:"MVP fokuserar på kärnnytta först."},{id:"ux-3",track_id:"nackademin_ux",topic:"Teststrategi",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv 2 korta hypoteser du skulle testa om en bokningssida har låg konvertering.",answer_key:"Exempel: 1) Otydliga priser minskar tillit. 2) För många steg i flödet orsakar avhopp.",explanation:"Bra svar kopplar observerbart problem till testbar hypotes."},{id:"ux-4",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Svår",source_tier:"Community",estimated_minutes:4,prompt:"Tre designförslag höjer NPS men sänker task success. Vad bör teamet göra först?",options:[{id:"a",text:"Välj högst NPS direkt"},{id:"b",text:"Analysera konflikt mellan upplevd nöjdhet och faktisk användbarhet"},{id:"c",text:"Skippa mätdata"},{id:"d",text:"Lansera alla tre"}],answer_key:"b",explanation:"Måtten pekar åt olika håll; orsaksanalys krävs."},{id:"ux-5",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vilken data är mest användbar för att utvärdera en ny navigering?",options:[{id:"a",text:"Antal likes på sociala medier"},{id:"b",text:"Task success rate + tid till mål"},{id:"c",text:"Utvecklingstid"},{id:"d",text:"Färgpalettens trendighet"}],answer_key:"b",explanation:"Task success och tidsmått följer navigeringens effekt."},{id:"ux-7",track_id:"nackademin_ux",topic:"Informationsarkitektur",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad är det mest rimliga första steget när en tjänst känns otydlig och har många menyer?",options:[{id:"a",text:"Lägg till fler menyval för att täcka allt"},{id:"b",text:"Kartlägg användarnas viktigaste mål och gruppera innehållet efter toppuppgifter"},{id:"c",text:"Gör alla sidor lika långa"},{id:"d",text:"Byt namn på alla knappar samtidigt"}],answer_key:"b",explanation:"Informationsarkitektur börjar med användarens viktigaste uppgifter, inte med fler val."},{id:"ux-8",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:5,prompt:"Skriv en snabb testplan för en prototyp i tre punkter: vad du vill testa, vem du testar på och vad du letar efter.",answer_key:"Exempel: 1) Testa om användaren förstår flödet. 2) Testa med 3-5 personer från målgruppen. 3) Leta efter avbrott, tvekan och missförstånd.",explanation:"Bra svar är konkret, kort och kopplar testmål till observerbart beteende."},{id:"it-1",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilket lager i OSI-modellen hanterar IP-adressering?",options:[{id:"a",text:"Transport"},{id:"b",text:"Nätverk"},{id:"c",text:"Fysiskt"},{id:"d",text:"Session"}],answer_key:"b",explanation:"IP hör till nätverkslagret."},{id:"it-2",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad gör en brandvägg (firewall) främst?",options:[{id:"a",text:"Komprimerar filer"},{id:"b",text:"Filtrerar trafik enligt regler"},{id:"c",text:"Byter IP-klass"},{id:"d",text:"Skapar backup"}],answer_key:"b",explanation:"Brandväggar kontrollerar in/ut-trafik mot policy."},{id:"it-3",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Engelsk term: 'confidentiality' betyder närmast:",options:[{id:"a",text:"Tillgänglighet"},{id:"b",text:"Konfidentialitet"},{id:"c",text:"Felsökning"},{id:"d",text:"Skalbarhet"}],answer_key:"b",explanation:"CIA-triaden: confidentiality, integrity, availability."},{id:"it-4",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Förklara skillnaden mellan TCP och UDP med en mening vardera.",answer_key:"TCP är anslutningsorienterat och tillförlitligt. UDP är snabbare, utan garanti för leverans.",explanation:"Fokus på tillförlitlighet kontra hastighet/överhead."},{id:"it-5",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilket påstående om VPN är mest korrekt?",options:[{id:"a",text:"VPN krypterar aldrig trafik"},{id:"b",text:"VPN skapar en krypterad tunnel över osäkert nät"},{id:"c",text:"VPN ersätter alla säkerhetskontroller"},{id:"d",text:"VPN gör användaren anonym i alla situationer"}],answer_key:"b",explanation:"VPN minskar risk i transit men ersätter inte helhetsarbete."},{id:"it-7",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad används DNS främst till?",options:[{id:"a",text:"Att kryptera trafik mellan datorer"},{id:"b",text:"Att förvandla domännamn till IP-adresser"},{id:"c",text:"Att skapa brandväggsregler"},{id:"d",text:"Att komprimera webbsidor"}],answer_key:"b",explanation:"DNS översätter namn som exempel.se till IP-adresser som nätverket kan routa till."},{id:"it-8",track_id:"iths_itsec",topic:"Säkerhet och social engineering",format:"mcq",difficulty:"Medel",source_tier:"Community",estimated_minutes:3,prompt:"Vilket exempel är social engineering?",options:[{id:"a",text:"Att installera en uppdatering för operativsystemet"},{id:"b",text:"Att skicka ett falskt meddelande som försöker få någon att lämna ut lösenord"},{id:"c",text:"Att byta till starkare Wi-Fi-kryptering"},{id:"d",text:"Att dokumentera en routerkonfiguration"}],answer_key:"b",explanation:"Social engineering handlar om att manipulera människor, inte system."},{id:"prog-1",track_id:"prog1a",topic:"Variabler och datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken datatyp passar bäst för heltal i Java?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"double[]"}],answer_key:"a",explanation:"int används för heltalsvärden."},{id:"prog-2",track_id:"prog1a",topic:"Villkor",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken operator betyder 'lika med' i ett villkor?",options:[{id:"a",text:"="},{id:"b",text:"=="},{id:"c",text:":="},{id:"d",text:"=>"}],answer_key:"b",explanation:"`==` jämför värden; `=` tilldelar."},{id:"prog-3",track_id:"prog1a",topic:"Loopar",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vad skriver denna kod ut? for(int i=1;i<=3;i++){System.out.print(i);}",options:[{id:"a",text:"123"},{id:"b",text:"012"},{id:"c",text:"13"},{id:"d",text:"321"}],answer_key:"a",explanation:"i går från 1 till 3 inklusive."},{id:"prog-4",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv en metodsignatur i Java för att summera två heltal.",answer_key:"Exempel: static int sum(int a, int b)",explanation:"Metodnamn, returtyp och parametrar ska framgå."},{id:"prog-5",track_id:"prog1a",topic:"Felsökning",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilken buggrisk är störst här: int[] a = new int[3]; System.out.println(a[3]);",options:[{id:"a",text:"NullPointerException"},{id:"b",text:"ArrayIndexOutOfBoundsException"},{id:"c",text:"StackOverflowError"},{id:"d",text:"Ingen risk"}],answer_key:"b",explanation:"Index 3 ligger utanför giltiga index 0-2."},{id:"core-1",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Om 20% av 150 är korrekt beräknat, vilket svar är rätt?",options:[{id:"a",text:"20"},{id:"b",text:"25"},{id:"c",text:"30"},{id:"d",text:"35"}],answer_key:"c",explanation:"0,2 * 150 = 30."},{id:"ux-6",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:6,prompt:"Designa en ny returhantering för IKEA där kunden kan boka upphämtning via appen. Beskriv kort: målgrupp, enkel wireframe-idé och motivering.",answer_key:"Exempel: målgrupp = kunder med stora varor; wireframe = välj order, välj tidsfönster, bekräfta; motivering = minskar friktion och supportärenden.",explanation:"Bedöm på struktur: målgrupp -> lösning -> motivering. Det finns inget enda facit."},{id:"it-6",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"På vilket OSI-lager verkar en router?",options:[{id:"a",text:"Lager 2 - Datalänk"},{id:"b",text:"Lager 3 - Nätverk"},{id:"c",text:"Lager 4 - Transport"},{id:"d",text:"Lager 7 - Applikation"}],answer_key:"b",explanation:"Routrar routar IP-trafik på lager 3."},{id:"prog-6",track_id:"prog1a",topic:"Datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken datatyp är bäst för att lagra true/false?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"float"}],answer_key:"c",explanation:"boolean lagrar sant/falskt-värden."},{id:"prog-7",track_id:"prog1a",topic:"Code tracing",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vad blir värdet på x?
let x = 2;
for (let i = 0; i < 3; i++) { x = x + i; }`,options:[{id:"a",text:"3"},{id:"b",text:"4"},{id:"c",text:"5"},{id:"d",text:"6"}],answer_key:"c",explanation:"x blir 2+0+1+2 = 5."},{id:"prog-8",track_id:"prog1a",topic:"Debugging-game",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vilket fel är tydligast i denna kod?
for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }`,options:[{id:"a",text:"Fel variabelnamn i loggen"},{id:"b",text:"Loopvillkoret bör vara i < arr.length"},{id:"c",text:"for-loop kan inte användas med arrayer"},{id:"d",text:"console.log kräver string"}],answer_key:"b",explanation:"i <= arr.length går ett steg för långt och ger undefined sista varvet."},{id:"prog-9",track_id:"prog1a",topic:"Villkor och logik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:`Vad skrivs ut?
int score = 7;
if (score >= 5) {
  System.out.print("Godkänd");
} else {
  System.out.print("Underkänd");
}`,options:[{id:"a",text:"Godkänd"},{id:"b",text:"Underkänd"},{id:"c",text:"5"},{id:"d",text:"Inget skrivs ut"}],answer_key:"a",explanation:"7 är större än eller lika med 5, så första grenen körs."},{id:"prog-10",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:5,prompt:"Förklara kort vad en metod gör i Java och ge ett enkelt exempel på vad den kan användas till.",answer_key:"En metod samlar kod som kan återanvändas. Exempel: en method som tar emot två tal och returnerar summan.",explanation:"Svar ska visa förståelse för återanvändning, input/return och ett konkret användningsfall."}],A=[{id:"mock-nack-60",name:"Nackademin-liknande 60 min",track_id:"nackademin_ux",total_minutes:60,sections:[{title:"Analys & logik",track_id:"nackademin_ux",topics:["Logik/analys","Problemlösning","Teststrategi","Scenario-övning"],question_ids:["ux-1","ux-2","ux-3","ux-4","ux-5","ux-6"],minutes:60,weight:1}],scoring_rules:"Poäng per korrekt svar. Korta svar bedöms mot modellförslag."},{id:"mock-iths-90",name:"IT-H Del 1+2 (90 min)",track_id:"iths_itsec",total_minutes:90,sections:[{title:"Del 1: Svenska/Engelska/Matte",track_id:"iths_itsec",topics:["Svenska/Engelska/Matte"],question_ids:["it-3","core-1"],minutes:20,weight:.2},{title:"Del 2: Dator- och nätverksteknik",track_id:"iths_itsec",topics:["Dator- och nätverksteknik"],question_ids:["it-1","it-2","it-4","it-5","it-6"],minutes:70,weight:.8}],scoring_rules:"Separat delpoäng, total viktad poäng enligt 20/80."},{id:"mock-prog-45",name:"Programmering 1/A delprov (45 min)",track_id:"prog1a",total_minutes:45,sections:[{title:"Del 1: Grunder",track_id:"prog1a",topics:["Variabler och datatyper","Villkor"],question_ids:["prog-1","prog-2","prog-6"],minutes:15,weight:.33},{title:"Del 2: Flöde och läsning",track_id:"prog1a",topics:["Loopar","Code tracing"],question_ids:["prog-3","prog-7","prog-9"],minutes:15,weight:.33},{title:"Del 3: Metoder och felsökning",track_id:"prog1a",topics:["Metoder","Felsökning","Debugging-game"],question_ids:["prog-4","prog-5","prog-8","prog-10"],minutes:15,weight:.34}],scoring_rules:"Separat poäng per del, fokus på grunder först och tydlig återkoppling på feltyper."}],U=[{id:"ev-nack-1",provider:"Nackademin",url:"https://nackademin.se/antagning/urval-och-antagningsprov/",claim:"Urvalet omfattar antagningsprov med fokus på analys- och problemlösningsförmåga.",confidence:"Hög",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-nack-2",provider:"Nackademin (EN)",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Den engelska antagningssidan bekräftar att provet används för att bedöma lämplighet och förmåga att hantera programmens upplägg.",confidence:"Medel",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-iths-1",provider:"IT-Högskolan",url:"https://www.iths.se/antagningsprovet/",claim:"Antagningsprovet består av två delar: allmän del och programspecifik del.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-3",provider:"IT-Högskolan (FAQ/antagning)",url:"https://www.iths.se/vanliga-fragor/",claim:"IT-Högskolan hänvisar till att antagning och förberedande material kan variera, vilket gör det rimligt att träna både allmän del och programspecifik del separat.",confidence:"Medel",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-2",provider:"IT-Högskolan",url:"https://www.iths.se/utbildningar/preparandkurs/",claim:"Förkunskapsspåret för IT-säkerhet lyfter dator- och nätverksteknik.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-prog-1",provider:"Linköpings kommun (Komvux-info)",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i programmering brukar innehålla praktiska moment, teori och uppgifter i flera delar.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-prog-2",provider:"Komvux/exempel på prövning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i gymnasiala kurser brukar kombinera teori med praktiska uppgifter, vilket passar ett programmeringsspår med både kunskapstest och kodläsning.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-community-1",provider:"Community-sammanställning",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Tidigare sökande beskriver tidsbrist som huvudutmaning; träningsmönster fokuserar därför på tidsatta övningar.",confidence:"Låg",source_tier:"Community",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-community-2",provider:"Community-sammanställning",url:"https://www.iths.se/antagningsprovet/",claim:"Tidigare sökande beskriver att del 1 ofta känns bred och att del 2 kräver fokus på nätverk, säkerhet och begrepp som brukar återkomma.",confidence:"Låg",source_tier:"Community",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-community-3",provider:"Community-sammanställning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"I programmeringsprövningar återkommer ofta uppgifter om variabler, villkor, loopar och felsökning snarare än enbart teori.",confidence:"Låg",source_tier:"Community",track_id:"prog1a",last_verified_date:"2026-04-03"}],ht=30,_t=45,Rt=1440*60*1e3,X=new Date(2026,3,7,9,0,0);function bt(e,t,r){return Math.min(r,Math.max(t,e))}function H(e){return e.reduce((t,r)=>t+r.minutes,0)}function B(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}function Vt(e=X){return new Intl.DateTimeFormat("sv-SE",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}function wt(e=new Date,t=X){return Math.round((B(t)-B(e))/Rt)}function Ut(e=new Date,t=X){const r=wt(e,t);return r<0?"Första provet är genomfört":r===0?"D-0 idag":`D-${r}`}function St(e){const t=H(e);if(t>=ht&&t<=_t)return e;const r=bt(t,ht,_t),i=r/Math.max(t,1),n=e.map(o=>({...o,minutes:Math.max(3,Math.round(o.minutes*i))})),a=bt(r-H(n),-5,5);return a!==0&&(n[0]={...n[0],minutes:Math.max(3,n[0].minutes+a)}),n}function $t(e=new Date,t=X){return B(e)<=B(t)?"A":"B"}function Ht(e){const t=wt(e);return`Sprint A (${t<=0?"D-0: provdag":`D-${t} till D-0`}): Nackademin-prioritet`}function Bt(){return St([{trackId:"nackademin_ux",topic:"Analys + problemlösning",minutes:25,mode:"Drill"},{trackId:"prog1a",topic:"Programmeringsgrunder (variabler/villkor/loopar)",minutes:7,mode:"Lär"},{trackId:"iths_itsec",topic:"Snabb engelska/matte-rep",minutes:3,mode:"Drill"}])}function Kt(){return St([{trackId:"iths_itsec",topic:"Dator- och nätverksteknik",minutes:24,mode:"Drill"},{trackId:"prog1a",topic:"Kodövning + felsökning",minutes:10,mode:"Drill"},{trackId:"nackademin_ux",topic:"Teststrategi och tidsdisciplin",minutes:6,mode:"Lär"}])}function F(e=new Date){const t=$t(e),r=t==="A"?Bt():Kt();return{sprint:t,title:t==="A"?Ht(e):"Sprint B (efter första provet): IT-H-prioritet",totalMinutes:H(r),blocks:r}}function Xt(e){const t=H(e)||1,r={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)r[i.trackId]+=i.minutes;return{nackademin_ux:Math.round(r.nackademin_ux/t*100),iths_itsec:Math.round(r.iths_itsec/t*100),prog1a:Math.round(r.prog1a/t*100)}}function Mt(e=new Date){return $t(e)==="A"?{id:"mock-nack-60",label:"Nackademin-liknande 60 min",minutes:60}:{id:"mock-iths-90",label:"IT-H Del 1+2 (90 min)",minutes:90}}function It(e,t){return e.filter(r=>!(t.trackId!=="all"&&r.track_id!==t.trackId||t.topic!=="all"&&r.topic!==t.topic||t.difficulty!=="all"&&r.difficulty!==t.difficulty||t.sourceTier!=="all"&&r.source_tier!==t.sourceTier))}function q(e){const t=e.reduce((r,i)=>r+i.estimated_minutes,0);return Math.min(45,Math.max(15,t))}function st(e,t){let r=0;const i=new Map;for(const c of e){const u=(t[c.id]||"").trim().toLowerCase(),p=c.answer_key.trim().toLowerCase();if(c.format==="mcq"?u===p:u.length>0&&p.includes(u.slice(0,8))){r+=1;continue}i.set(c.topic,(i.get(c.topic)||0)+1)}const n=e.length,a=n>0?Math.round(r/n*100):0,o=[...i.entries()].sort((c,u)=>u[1]-c[1]).map(([c])=>c).slice(0,3);return{correct:r,total:n,scorePercent:a,weakTopics:o}}const ut="yh.study-sessions",C="yh.active-session",Gt=1;let ot="default";function Pt(e,t){if(!e)return t;try{return JSON.parse(e)}catch{return t}}function w(e){return`${e}.${ot}`}function Qt(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"default"}function Tt(e){return ot=Qt(e),ot}function pt(){return Pt(localStorage.getItem(w(ut)),[])}function Yt(e){const t=pt();t.unshift(e),localStorage.setItem(w(ut),JSON.stringify(t.slice(0,100)))}function G(){return Pt(localStorage.getItem(w(C)),null)}function E(e){localStorage.setItem(w(C),JSON.stringify(e))}function Dt(){localStorage.removeItem(w(C))}function Jt(){return{version:Gt,exportedAt:new Date().toISOString(),studySessions:pt(),activeSession:G()}}function zt(e){const t=Array.isArray(e.studySessions)?e.studySessions.slice(0,100):[];localStorage.setItem(w(ut),JSON.stringify(t));const r=!!e.activeSession&&typeof e.activeSession=="object";return r?localStorage.setItem(w(C),JSON.stringify(e.activeSession)):localStorage.removeItem(w(C)),{importedSessions:t.length,restoredActiveSession:r}}const Lt=document.querySelector("#app");if(!Lt)throw new Error("App container saknas");const Q=Lt,ct={overview:"Översikt",tracks:"Spår",bank:"Frågebank",mock:"Mockprov",research:"Research",logic:"Logik"},mt=new URLSearchParams(window.location.search),lt="yh.current-user-id",Wt="yh.study-profile";function Y(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"gäst"}function Zt(){const e=localStorage.getItem(lt)||"gäst",t=Y(e);return localStorage.setItem(lt,t),t}function te(e){const t=Y(e);return localStorage.setItem(lt,t),t}function ee(){return`user-${Math.random().toString(36).slice(2,7)}`}function re(e){const t=Y(e);if(t==="gäst")return"G";const r=t.split(/[-_]+/).filter(Boolean);return r.length>=2?`${r[0][0]||""}${r[1][0]||""}`.toUpperCase():t.slice(0,2).toUpperCase()||"G"}function At(e){return`${Wt}.${Y(e)}`}function Z(e){const t=te(e);T=t,Tt(t),l=G(),f=qt(t),h=null,b&&(window.clearInterval(b),b=null),kt(),M(`Bytt till användare: ${t}`)}let $="overview",v={trackId:"all",topic:"all",difficulty:"all",sourceTier:"all"},T=Zt();Tt(T);let J=Mt().id;const tt=mt.get("view");tt&&tt in ct&&($=tt);const et=mt.get("track");et&&y.some(e=>e.id===et)&&(v={...v,trackId:et});const rt=mt.get("mock");rt&&A.some(e=>e.id===rt)&&(J=rt);let l=G(),h=null,b=null,gt=navigator.onLine,K="";const ie=82,Et=112;let P=null,N=0,O=!1,x=null,Nt="Designa en digital tjänst för IKEA som löser problemet: kunden vill boka upphämtning av returvaror.";const j={sessionPreference:[{id:"30",label:"30 min fokuspass (rekommenderat nu)"},{id:"45",label:"45 min standardpass"},{id:"60",label:"60 min när jag har energi"}],blocker:[{id:"time",label:"Tidsstress i prov"},{id:"logic",label:"Logik och resonemang"},{id:"network",label:"IT/nätverkstermer"},{id:"coding",label:"Kodförståelse/felsökning"},{id:"other",label:"Annat (skriv i fritext)"}],confidence:[{id:"low",label:"Låg - behöver tydlig guidning"},{id:"mid",label:"Medel - behöver mest träning"},{id:"high",label:"Hög - vill främst ha tidsprov"}],targetPriority:[{id:"nack",label:"Nackademin UX (akut)"},{id:"iths",label:"IT-H IT-säkerhet"},{id:"prog",label:"Programmering 1/A"}]};let f=qt();function S(e){return y.find(t=>t.id===e)?.name||e}function z(e){return`track-${e}`}function ne(e){const t=Math.max(0,Math.floor(e/1e3)),r=Math.floor(t/60).toString().padStart(2,"0"),i=(t%60).toString().padStart(2,"0");return`${r}:${i}`}function Ot(e){return e.questionIds.map(t=>_.find(r=>r.id===t)).filter(Boolean)}function ae(e){return e.reduce((t,r)=>t+r.duration_minutes,0)}function se(e){const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)t.nackademin_ux+=i.track_mix.nackademin_ux||0,t.iths_itsec+=i.track_mix.iths_itsec||0,t.prog1a+=i.track_mix.prog1a||0;const r=Math.max(1,e.length);return{nackademin_ux:Math.round(t.nackademin_ux/r),iths_itsec:Math.round(t.iths_itsec/r),prog1a:Math.round(t.prog1a/r)}}function jt(){return _.filter(e=>["Logik/analys","Svenska/Engelska/Matte","Code tracing","Debugging-game"].includes(e.topic))}function oe(){const e=["IKEA","1177","SJ","Skatteverket","Foodora"],t=["användaren hittar inte status på sitt ärende","för många steg gör att användaren avbryter","det är otydligt vad som händer efter beställning","returer och ombokningar upplevs krångliga","supporten får för många repetitiva frågor"],r=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return`Designa en digital tjänst för ${r} som löser problemet: ${i}.`}function it(){return{sessionPreference:"30",blocker:"time",confidence:"mid",targetPriority:"nack",notes:""}}function qt(e=T){try{const t=localStorage.getItem(At(e));if(!t)return it();const r=JSON.parse(t);return{...it(),...r}}catch{return it()}}function ce(e,t=T){localStorage.setItem(At(t),JSON.stringify(e))}function le(e,t,r){const i=st(t,r);if(!e)return{sectionResults:[],finalScore:i.scorePercent};const n=A.find(u=>u.id===e);if(!n)return{sectionResults:[],finalScore:i.scorePercent};const a=n.sections.map(u=>{const p=t.filter(I=>u.question_ids.includes(I.id)),g=st(p,r);return{title:u.title,scorePercent:g.scorePercent,correct:g.correct,total:g.total,weight:u.weight}}),o=a.reduce((u,p)=>u+p.weight,0)||1,c=a.reduce((u,p)=>u+p.scorePercent*(p.weight/o),0);return{templateName:n.name,sectionResults:a,finalScore:Math.round(c)}}function nt(e,t){return j[e].find(r=>r.id===t)?.label||t}function ft(e){return e==="iths"?"iths_itsec":e==="prog"?"prog1a":"nackademin_ux"}function de(e){return e==="nackademin_ux"?"Logik/analys":e==="iths_itsec"?"Dator- och nätverksteknik":"Loopar"}function dt(e){const t=_.filter(i=>i.topic===e);if(t.length===0)return"nackademin_ux";const r={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of t)r[i.track_id]+=1;return Object.entries(r).sort((i,n)=>n[1]-i[1])[0]?.[0]||"nackademin_ux"}function ue(e){const t=ft(f.targetPriority),r=F().sprint,i={nackademin_ux:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0},iths_itsec:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0},prog1a:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0}},n=[...e].sort((d,s)=>+new Date(s.date)-+new Date(d.date));for(const d of e){for(const s of y.map(m=>m.id)){const m=d.track_mix[s],D=m/100;m<=0||(i[s].minutes+=Math.round(d.duration_minutes*D),i[s].avgScore+=d.score*D,i[s].weight+=D)}for(const s of d.weak_topics){const m=dt(s);i[m].weakHits+=1}}for(const d of y.map(s=>s.id)){const s=i[d];s.avgScore=s.weight>0?Math.round(s.avgScore/s.weight):0}const a=n.slice(0,2);for(const d of a){const s=Object.entries(d.track_mix).sort((m,D)=>D[1]-m[1])[0]?.[0]||"nackademin_ux";d.track_mix[s]>=60&&(i[s].recentHeavy+=1)}for(const d of y){const s=i[d.id];let m=0;d.id===t&&(m+=2.2),r==="A"&&d.id==="nackademin_ux"&&(m+=1.4),r==="B"&&d.id==="iths_itsec"&&(m+=1.4),s.minutes<20&&(m+=1.2),m+=s.weakHits*.75,m-=s.recentHeavy*1.1,s.avgScore>75&&s.minutes>80&&(m-=.6),s.score=m}const o=Object.entries(i).sort((d,s)=>s[1].score-d[1].score)[0]?.[0]||t,c=Object.entries(i).sort((d,s)=>s[1].score-d[1].score).map(([d])=>d).slice(0,y.length),p=n.flatMap(d=>d.weak_topics).filter(d=>dt(d)===o)[0]||de(o),g=i[o].weakHits>=2||f.confidence==="low"?"Lär":"Drill",I=Math.max(25,Math.min(45,Number.parseInt(f.sessionPreference,10)||35)),W=_.filter(d=>d.track_id===o).sort((d,s)=>{const m=d.topic===p?1:0;return(s.topic===p?1:0)-m}).slice(0,10).map(d=>d.id),V=`${S(o)} prioriteras nu (${i[o].weakHits} svaghetsträffar, senaste fokus balanseras).`;return{trackId:o,topic:p,mode:g,durationMinutes:I,questionIds:W,reason:V,ranking:c}}function pe(e,t){return y.map(r=>{const i=e.reduce((p,g)=>p+Math.round(g.duration_minutes*(g.track_mix[r.id]||0)/100),0),n=e.reduce((p,g)=>p+g.score*((g.track_mix[r.id]||0)/100),0),a=e.reduce((p,g)=>p+(g.track_mix[r.id]||0)/100,0),o=a>0?Math.round(n/a):0,c=e.flatMap(p=>p.weak_topics).filter(p=>dt(p)===r.id).length;let u="in_progress";return i<15?u="not_started":c>=3||a>0&&o<55?u="needs_help":o>=75&&i>=80&&c<=1&&(u="near_ready"),{trackId:r.id,minutes:i,avgScore:o,weakHits:c,priority:t.trackId===r.id,stage:u}})}function me(e){return e==="not_started"?"Ej startad":e==="needs_help"?"Mycket fel":e==="near_ready"?"Nära klar":"Påbörjad"}function ge(e){return e==="not_started"?"track-btn-not-started":e==="needs_help"?"track-btn-needs-help":e==="near_ready"?"track-btn-near-ready":"track-btn-in-progress"}function fe(e){if(e==="logic"){$="logic",k();return}$="bank",v={trackId:e==="ux"?"nackademin_ux":e==="it"?"iths_itsec":"prog1a",topic:"all",difficulty:"all",sourceTier:"all"},k()}function Ct(){const e=F(),t=[],r=ft(f.targetPriority),n={time:["Logik/analys","Problemlösning","Svenska/Engelska/Matte"],logic:["Logik/analys","Code tracing","Debugging-game"],network:["Dator- och nätverksteknik","Säkerhet och social engineering"],coding:["Loopar","Metoder","Felsökning","Code tracing","Debugging-game"],other:[]}[f.blocker]||[];for(const o of e.blocks){const c=_.filter(g=>g.track_id===o.trackId),u=o.minutes>=20?4:o.minutes>=10?3:2,p=c.slice(0,u);for(const g of p)t.find(I=>I.id===g.id)||t.push(g)}const a=_.filter(o=>o.track_id===r);for(const o of a)if(t.find(c=>c.id===o.id)||t.unshift(o),t.length>=12)break;if(n.length>0){const o=_.filter(c=>n.includes(c.topic));for(const c of o)if(t.find(u=>u.id===c.id)||t.push(c),t.length>=12)break}if(t.length<8){for(const o of _)if(t.find(c=>c.id===o.id)||t.push(o),t.length>=8)break}return t.slice(0,12)}function M(e){K=e,k(),window.setTimeout(()=>{K="",k()},3500)}function ke(){const e=Jt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a"),n=new Date().toISOString().replace(/[:.]/g,"-");i.href=r,i.download=`yh-prep-backup-${n}.json`,document.body.append(i),i.click(),i.remove(),URL.revokeObjectURL(r),M("Backup exporterat.")}async function ve(e){try{const t=await e.text(),r=JSON.parse(t),i=zt(r);l=G(),M(`Import klar: ${i.importedSessions} pass, aktiv session ${i.restoredActiveSession?"återställd":"saknas"}.`)}catch{M("Import misslyckades. Kontrollera att filen är en giltig backup.")}}function he(){if(!("serviceWorker"in navigator))return;if(window.location.hostname.endsWith("github.io")){navigator.serviceWorker.getRegistrations().then(t=>Promise.all(t.map(r=>r.unregister()))).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(r=>caches.delete(r)))).catch(()=>{});return}navigator.serviceWorker.register("sw.js").catch(()=>{M("Kunde inte aktivera offline-läge.")})}function _e(e){return e instanceof Element?!!e.closest("input, textarea, select, button, a, summary, label"):!1}function Ft(){if(x)return x;const e=document.createElement("div");return e.className="pull-refresh-indicator",e.setAttribute("aria-hidden","true"),e.textContent="Dra ned för uppdatera",document.body.append(e),x=e,e}function at(e,t){const r=Ft(),i=Math.max(0,Math.min(Et,e));r.style.opacity=i>0?"1":"0",r.style.transform=`translate(-50%, ${-50+i}px)`,r.classList.toggle("visible",i>0),r.classList.toggle("armed",t),r.textContent=t?"Släpp för att uppdatera":"Dra ned för uppdatera"}function yt(){P=null,N=0,O=!1,x&&(x.style.opacity="0",x.style.transform="translate(-50%, -50px)",x.classList.remove("visible","armed"),x.textContent="Dra ned för uppdatera")}function be(){if(l){E(l),M("Uppdaterar sidan... aktivt pass autosparas."),window.setTimeout(()=>window.location.reload(),120);return}window.location.reload()}function ye(){if(!("ontouchstart"in window))return;Ft(),window.addEventListener("touchstart",t=>{if(t.touches.length!==1){P=null;return}if(window.scrollY>0||_e(t.target)){P=null;return}P=t.touches[0].clientY,N=0,O=!1,at(0,!1)},{passive:!0}),window.addEventListener("touchmove",t=>{if(P===null||t.touches.length!==1)return;if(window.scrollY>0){yt();return}const r=t.touches[0].clientY-P;if(r<=0){at(0,!1);return}N=Math.min(Et,r*.7),O=N>=ie,at(N,O),t.preventDefault()},{passive:!1});const e=()=>{if(P===null)return;const t=O;yt(),t&&be()};window.addEventListener("touchend",e,{passive:!0}),window.addEventListener("touchcancel",e,{passive:!0})}function kt(){b&&(window.clearInterval(b),b=null),l&&(b=window.setInterval(()=>{if(l){if(Date.now()>=l.endsAt){vt(!0);return}k()}},1e3))}function xe(e){if(e.length===0)return{nackademin_ux:0,iths_itsec:0,prog1a:0};const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)t[r.track_id]+=1;return{nackademin_ux:Math.round(t.nackademin_ux/e.length*100),iths_itsec:Math.round(t.iths_itsec/e.length*100),prog1a:Math.round(t.prog1a/e.length*100)}}function L(e,t,r,i){t.length!==0&&(l={id:crypto.randomUUID(),mode:e,startedAt:Date.now(),endsAt:Date.now()+r*6e4,questionIds:t,currentIndex:0,answers:{},templateId:i},E(l),kt(),k())}function vt(e=!1){if(!l)return;const t=Ot(l),r=st(t,l.answers),i=le(l.templateId,t,l.answers),n=xe(t),a=Math.max(1,Math.round((Date.now()-l.startedAt)/6e4));Yt({id:l.id,date:new Date().toISOString(),duration_minutes:a,mode:l.mode,track_mix:n,score:i.finalScore,weak_topics:r.weakTopics}),h={mode:l.mode,scorePercent:i.finalScore,correct:r.correct,total:r.total,weakTopics:r.weakTopics,autoSubmitted:e,sectionResults:i.sectionResults,templateName:i.templateName},l=null,Dt(),b&&(window.clearInterval(b),b=null),k()}function we(){l=null,Dt(),b&&(window.clearInterval(b),b=null),k()}function xt(){const e=pt(),t=F(),r=Xt(t.blocks),i=se(e),n=Ut(),a=Vt(),o=Mt(),c=Ct(),u=ft(f.targetPriority),p=S(u),g=Number.parseInt(f.sessionPreference,10)||t.totalMinutes,I=nt("blocker",f.blocker),R=ue(e),W=pe(e,R),V=new Map(R.ranking.map((s,m)=>[s,m])),d=[...W].sort((s,m)=>(V.get(s.trackId)??99)-(V.get(m.trackId)??99));return`
    <div class="grid overview-grid">
      <section class="card critical-card span-12">
        <h3>Snabbstart idag</h3>
        <p class="muted">Status: ${gt?"Online":"Offline"} • ${t.totalMinutes} min</p>
        <div class="critical-kpis">
          <p><strong>Prov:</strong> ${n}</p>
          <p><strong>Nästa mock:</strong> ${o.minutes} min</p>
        </div>
        <p class="muted">Nu: ${p} • ${g} min • ${I}</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-today-drill">Starta dagens pass</button>
        </div>
      </section>

      <section class="card span-12">
        <p class="muted">Prioritering</p>
        <div class="priority-strip">
          ${d.map(s=>`
                <button class="track-priority-btn ${ge(s.stage)} ${s.priority?"is-recommended":""}"
                  data-action="focus-priority-track" data-track="${s.trackId}">
                  <strong>${s.priority?"(R) ":""}${S(s.trackId)}</strong>
                  <span>${s.priority?R.mode:"Drill"} • ${me(s.stage)} • ${s.avgScore}% • ${s.minutes} min</span>
                </button>
              `).join("")}
        </div>
      </section>

      <section class="card span-12">
        <details>
          <summary>Intervju</summary>
          <p class="muted">Flervalsfrågor med fritext för "Annat". Svaren styr rekommenderad träning i appen.</p>
          <div class="inline-controls">
            <label for="profile-sessionPreference">Passlängd</label>
            <select id="profile-sessionPreference" data-profile="sessionPreference">
              ${j.sessionPreference.map(s=>`<option value="${s.id}" ${f.sessionPreference===s.id?"selected":""}>${s.label}</option>`).join("")}
            </select>

            <label for="profile-blocker">Största hinder</label>
            <select id="profile-blocker" data-profile="blocker">
              ${j.blocker.map(s=>`<option value="${s.id}" ${f.blocker===s.id?"selected":""}>${s.label}</option>`).join("")}
            </select>

            <label for="profile-confidence">Nuvarande nivå</label>
            <select id="profile-confidence" data-profile="confidence">
              ${j.confidence.map(s=>`<option value="${s.id}" ${f.confidence===s.id?"selected":""}>${s.label}</option>`).join("")}
            </select>

            <label for="profile-targetPriority">Primärt mål</label>
            <select id="profile-targetPriority" data-profile="targetPriority">
              ${j.targetPriority.map(s=>`<option value="${s.id}" ${f.targetPriority===s.id?"selected":""}>${s.label}</option>`).join("")}
            </select>

            <label for="profile-notes">Annat du vill att planen tar hänsyn till</label>
            <textarea id="profile-notes" data-profile="notes" rows="3" placeholder="Skriv fritt här (valfritt)">${f.notes}</textarea>
            <button class="primary" data-action="save-profile">Spara intervju</button>
          </div>
          <p class="muted">Valt just nu: ${nt("sessionPreference",f.sessionPreference)} • ${nt("blocker",f.blocker)}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Dagens plan</summary>
          <p class="muted">${t.title}</p>
          <ol class="list-clean">
            ${t.blocks.map(s=>`<li><span class="track-pill ${z(s.trackId)}">${S(s.trackId)}</span> ${s.topic} (${s.minutes} min)</li>`).join("")}
          </ol>
          <p class="muted">Fördelning: UX ${r.nackademin_ux}% • IT-H ${r.iths_itsec}% • Prog1/A ${r.prog1a}%</p>
          <p class="muted">Frågor i dagens pass: ${c.length}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa progression</summary>
          <p><span class="track-pill track-nackademin_ux">UX</span> ${i.nackademin_ux}%</p>
          <div class="progress"><div style="width:${i.nackademin_ux}%"></div></div>
          <p><span class="track-pill track-iths_itsec">IT</span> ${i.iths_itsec}%</p>
          <div class="progress"><div style="width:${i.iths_itsec}%"></div></div>
          <p><span class="track-pill track-prog1a">Prog</span> ${i.prog1a}%</p>
          <div class="progress"><div style="width:${i.prog1a}%"></div></div>
          <p><span class="track-pill">Logik</span> ${Math.round((i.nackademin_ux+i.iths_itsec)/2)}%</p>
          <div class="progress"><div style="width:${Math.round((i.nackademin_ux+i.iths_itsec)/2)}%"></div></div>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa provdetaljer och backup</summary>
          <p><strong>Första provdatum:</strong> ${a}</p>
          <p><strong>Genomförd tid:</strong> ${ae(e)} min (${e.length} pass)</p>
          <div class="inline-controls">
            <button class="secondary" data-action="export-progress">Exportera backup</button>
            <input type="file" accept="application/json" data-input="import-progress" />
          </div>
          ${K?`<p class="success">${K}</p>`:""}
        </details>
      </section>
    </div>
  `}function Se(){const e=["Logik/analys","Mattebas","Teststrategi","Programmeringsgrunder"];return`
    <div class="grid">
      ${y.map(t=>`
          <section class="card span-4">
            <h3>${t.name}</h3>
            <p class="muted">Mål: ${t.goal_exam}</p>
            <p>Språk: ${t.language_mode==="sv"?"Svenska":"Svenska + English terms"}</p>
            <p><strong>Gemensam kärna:</strong> ${e.join(" • ")}</p>
            <div class="inline-controls">
              <button class="primary" data-action="start-track-learn" data-track="${t.id}">Starta Lär</button>
              <button class="secondary" data-action="start-track-drill" data-track="${t.id}">Starta Drill</button>
            </div>
          </section>
        `).join("")}
      <section class="card span-12">
        <h3>UX scenario-generator</h3>
        <p>${Nt}</p>
        <p class="muted">
          Workflow: 1) Målgruppsanalys → 2) Enkel wireframe-idé (text/skiss) → 3) Motivering.
        </p>
        <button class="primary" data-action="generate-ux-case">Generera nytt case</button>
      </section>
    </div>
  `}function $e(){const e=It(_,v),t=Array.from(new Set(_.map(r=>r.topic))).sort();return`
    <div class="grid">
      <section class="card span-12">
        <h3>Frågebank med filter</h3>
        <div class="inline-controls">
          <button class="secondary" data-action="quick-tab" data-tab="ux">UX</button>
          <button class="secondary" data-action="quick-tab" data-tab="it">IT</button>
          <button class="secondary" data-action="quick-tab" data-tab="prog">Prog</button>
          <button class="secondary" data-action="quick-tab" data-tab="logic">Logik</button>
        </div>
        <div class="inline-controls">
          <select data-filter="trackId">
            <option value="all" ${v.trackId==="all"?"selected":""}>Alla spår</option>
            ${y.map(r=>`<option value="${r.id}" ${v.trackId===r.id?"selected":""}>${r.name}</option>`).join("")}
          </select>

          <select data-filter="topic">
            <option value="all" ${v.topic==="all"?"selected":""}>Alla ämnen</option>
            ${t.map(r=>`<option value="${r}" ${v.topic===r?"selected":""}>${r}</option>`).join("")}
          </select>

          <select data-filter="difficulty">
            <option value="all" ${v.difficulty==="all"?"selected":""}>Alla nivåer</option>
            ${["Lätt","Medel","Svår"].map(r=>`<option value="${r}" ${v.difficulty===r?"selected":""}>${r}</option>`).join("")}
          </select>

          <select data-filter="sourceTier">
            <option value="all" ${v.sourceTier==="all"?"selected":""}>Alla källnivåer</option>
            ${["Officiell","Sekundär","Community"].map(r=>`<option value="${r}" ${v.sourceTier===r?"selected":""}>${r}</option>`).join("")}
          </select>

          <button class="primary" data-action="start-drill">Starta Drill (${q(e)} min)</button>
        </div>
        <p class="muted">${e.length} frågor matchar filter.</p>
      </section>

      ${e.map(r=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${z(r.track_id)}">${S(r.track_id)}</span>
                <span class="research-tag">${r.difficulty}</span>
                <span class="research-tag">${r.source_tier}</span>
              </p>
              <p><strong>${r.topic}</strong></p>
              <p>${r.prompt}</p>
              <details>
                <summary>Visa facit + förklaring</summary>
                <p><strong>Svar:</strong> ${r.answer_key}</p>
                <p>${r.explanation}</p>
              </details>
            </article>
          `).join("")}
    </div>
  `}function Me(){const e=A.find(r=>r.id===J)||A[0],t=e.sections.reduce((r,i)=>r+i.question_ids.length,0);return`
    <div class="grid">
      <section class="card span-12">
        <h3>Mockprov (tidsprov)</h3>
        <div class="inline-controls">
          <select data-mock-select="true">
            ${A.map(r=>`<option value="${r.id}" ${r.id===e.id?"selected":""}>${r.name}</option>`).join("")}
          </select>
          <button class="primary" data-action="start-mock">Starta ${e.total_minutes} min</button>
        </div>
        <p class="muted">${t} frågor i detta mockprov.</p>
        <p class="muted">Poängregel: ${e.scoring_rules}</p>
      </section>

      ${e.sections.map(r=>`
            <section class="card span-6">
              <h3>${r.title}</h3>
              <p><span class="track-pill ${z(r.track_id)}">${S(r.track_id)}</span></p>
              <p>Tid: ${r.minutes} min • Vikt: ${Math.round(r.weight*100)}%</p>
              <p>Ämnen: ${r.topics.join(" • ")}</p>
              <p class="muted">Frågor: ${r.question_ids.join(", ")}</p>
            </section>
          `).join("")}
    </div>
  `}function Ie(){const e=U.filter(i=>i.source_tier==="Officiell").length,t=U.filter(i=>i.source_tier==="Community").length,r=U.filter(i=>i.source_tier==="Sekundär").length;return`
    <div class="grid">
      <section class="card span-12">
        <h3>Evidence-kort: tidigare års prov och mönster</h3>
        <p class="muted">Officiell: ${e} • Sekundär: ${r} • Community: ${t}</p>
      </section>
      ${U.map(i=>`
          <article class="card span-6">
            <p>
              <span class="research-tag">${i.source_tier}</span>
              <span class="research-tag">Tillförlitlighet: ${i.confidence}</span>
              <span class="research-tag">${i.source_tier==="Officiell"?"Bekräftat":"Antagande"}</span>
            </p>
            <h3>${i.provider}</h3>
            <p>${i.claim}</p>
            <p class="muted">Verifierad: ${i.last_verified_date}</p>
            <a href="${i.url}" target="_blank" rel="noreferrer">Öppna källa</a>
          </article>
        `).join("")}
    </div>
  `}function Pe(){const e=jt();return`
    <div class="grid">
      <section class="card span-12">
        <h3>Logik-flik</h3>
        <p class="muted">Inspirerad av Gemini-planens dashboard med egen logikmodul.</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-logic-drill">
            Starta logik-drill (${q(e)} min)
          </button>
          <button class="secondary" data-action="quick-tab" data-tab="ux">Till UX</button>
          <button class="secondary" data-action="quick-tab" data-tab="it">Till IT</button>
          <button class="secondary" data-action="quick-tab" data-tab="prog">Till Prog</button>
        </div>
      </section>
      ${e.map(t=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${z(t.track_id)}">${S(t.track_id)}</span>
                <span class="research-tag">${t.topic}</span>
              </p>
              <p>${t.prompt}</p>
              <details>
                <summary>Visa facit + förklaring</summary>
                <p><strong>Svar:</strong> ${t.answer_key}</p>
                <p>${t.explanation}</p>
              </details>
            </article>
          `).join("")}
    </div>
  `}function Te(){if(!l)return"";const e=Ot(l),t=e[l.currentIndex];if(!t)return"";const r=l.endsAt-Date.now(),i=Object.keys(l.answers).length,n=l.answers[t.id]||"";return`
    <section class="card session">
      <h3>Aktiv ${l.mode}</h3>
      <p class="session-timer ${r<5*6e4?"warning":""}">Tid kvar: ${ne(r)}</p>
      <p class="muted">Autosparning: aktiv • ${i}/${e.length} besvarade</p>
      <p><strong>Fråga ${l.currentIndex+1}/${e.length}:</strong> ${t.prompt}</p>

      ${t.format==="mcq"?`<div class="inline-controls">${(t.options||[]).map(a=>`
                  <label>
                    <input type="radio" name="answer" data-action="answer" data-qid="${t.id}" value="${a.id}" ${n===a.id?"checked":""} />
                    ${a.id.toUpperCase()}: ${a.text}
                  </label>
                `).join("")}</div>`:`<textarea data-action="answer-text" data-qid="${t.id}" rows="4" placeholder="Skriv ditt svar här">${n}</textarea>`}
      ${l.mode==="Lär"?`
            <details open>
              <summary>Förklaring i lärläge</summary>
              <p><strong>Facit:</strong> ${t.answer_key}</p>
              <p>${t.explanation}</p>
            </details>
          `:""}

      <p class="muted">Källnivå: ${t.source_tier} • Nivå: ${t.difficulty}</p>
      <div class="inline-controls">
        <button class="secondary" data-action="prev-q" ${l.currentIndex===0?"disabled":""}>Föregående</button>
        <button class="secondary" data-action="next-q" ${l.currentIndex===e.length-1?"disabled":""}>Nästa</button>
        <button class="primary" data-action="submit-session">Avsluta och rätta</button>
        <button class="danger" data-action="cancel-session">Avbryt</button>
      </div>
    </section>
  `}function De(){if(!h)return"";const e=h.sectionResults.length===0?"":`
        <p><strong>Sektionsrapport:</strong></p>
        <ul class="list-clean">
          ${h.sectionResults.map(t=>`<li>${t.title}: ${t.correct}/${t.total} (${t.scorePercent}%) • Vikt ${Math.round(t.weight*100)}%</li>`).join("")}
        </ul>
      `;return`
    <section class="card">
      <h3 class="success">Senaste resultat: ${h.scorePercent}%</h3>
      <p>${h.mode} • ${h.correct}/${h.total} rätt ${h.autoSubmitted?"(autosubmit vid timeout)":""}</p>
      ${h.templateName?`<p class="muted">Mall: ${h.templateName}</p>`:""}
      ${e}
      <p><strong>Svaga områden:</strong> ${h.weakTopics.length>0?h.weakTopics.join(" • "):"Inga tydliga svagheter"}</p>
    </section>
  `}function Le(){switch($){case"overview":return xt();case"tracks":return Se();case"bank":return $e();case"mock":return Me();case"research":return Ie();case"logic":return Pe();default:return xt()}}function k(){const e=F();Q.innerHTML=`
    <div class="app">
      <header class="hero">
        <div class="hero-top">
          <div>
            <h1>YH Prep Lab</h1>
            <p>Träna inför Nackademin UX, IT-H IT-säkerhet och Programmering 1/A.</p>
          </div>
          <div class="hero-actions">
            <span class="badge">${e.sprint==="A"?"Sprint A: Nackademin först":"Sprint B: IT-H fokus"}</span>
            <details class="mini-menu context-menu">
              <summary>Läge: ${ct[$]}</summary>
              <div class="mini-menu-body">
                ${Object.entries(ct).map(([t,r])=>`<button class="secondary ${$===t?"active":""}" data-view="${t}">${r}</button>`).join("")}
                <button class="secondary" data-action="open-python-course">Python-minikurs</button>
              </div>
            </details>
            <details class="mini-menu user-menu">
              <summary class="user-avatar" title="Byt användare">
                <span class="user-avatar-icon" aria-hidden="true">👤</span>
                <span class="user-avatar-initial">${re(T)}</span>
              </summary>
              <div class="mini-menu-body">
                <p class="muted">Aktiv: ${T}</p>
                <button class="secondary" data-action="quick-switch-user">Byt user id</button>
                <button class="secondary" data-action="quick-generate-user">Skapa nytt id</button>
                <button class="secondary" data-action="quick-switch-guest">Byt till gäst</button>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
        ${Te()}
        ${De()}
        ${Le()}
      </main>
    </div>
  `}Q.addEventListener("click",e=>{const t=e.target,r=t.closest("button[data-view]");if(r){$=r.dataset.view,k();return}const i=t.closest("[data-action]");if(!i)return;const n=i.dataset.action;if(n){if(n==="export-progress"){ke();return}if(n==="start-today-drill"){const a=Ct(),o=F(),c=Number.parseInt(f.sessionPreference,10);L("Drill",a.map(u=>u.id),Number.isNaN(c)?o.totalMinutes:Math.max(30,Math.min(45,c)));return}if(n==="focus-priority-track"){const a=i.dataset.track;$="bank",v={trackId:a,topic:"all",difficulty:"all",sourceTier:"all"},M(`${S(a)} vald. Starta när du vill.`),k();return}if(n==="quick-tab"){const a=i.dataset.tab;a&&fe(a);return}if(n==="generate-ux-case"){Nt=oe(),k();return}if(n==="start-logic-drill"){const a=jt();L("Drill",a.slice(0,12).map(o=>o.id),q(a));return}if(n==="start-track-drill"){const a=i.dataset.track,o=_.filter(c=>c.track_id===a).slice(0,8).map(c=>c.id);L("Drill",o,q(_.filter(c=>o.includes(c.id))));return}if(n==="start-track-learn"){const a=i.dataset.track,o=_.filter(c=>c.track_id===a).slice(0,6).map(c=>c.id);L("Lär",o,20);return}if(n==="open-python-course"){window.location.href="python-minikurs.html";return}if(n==="start-drill"){const a=It(_,v);L("Drill",a.slice(0,12).map(o=>o.id),q(a));return}if(n==="start-mock"){const a=A.find(c=>c.id===J);if(!a)return;const o=a.sections.flatMap(c=>c.question_ids);L("Tidsprov",o,a.total_minutes,a.id);return}if(n==="save-profile"){ce(f),M("Intervju sparad. Rekommenderad plan uppdaterad.");return}if(n==="quick-switch-user"){const a=window.prompt("Ange user id (t.ex. martin, sara, klass-a):",T);if(a===null)return;Z(a);return}if(n==="quick-switch-guest"){Z("gäst");return}if(n==="quick-generate-user"){const a=ee();Z(a);return}if(l){if(n==="prev-q"){l.currentIndex=Math.max(0,l.currentIndex-1),E(l),k();return}if(n==="next-q"){l.currentIndex=Math.min(l.questionIds.length-1,l.currentIndex+1),E(l),k();return}if(n==="submit-session"){vt(!1);return}if(n==="cancel-session"){we();return}if(n==="answer"){const a=t,o=a.dataset.qid;if(!o)return;l.answers[o]=a.value,E(l),k()}}}});Q.addEventListener("input",e=>{const t=e.target,r=t.closest("[data-profile]");if(r){const o=r.dataset.profile;o&&(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement)&&(f={...f,[o]:t.value});return}const i=t.closest("textarea[data-action='answer-text']");if(i&&l){const o=i.dataset.qid;o&&(l.answers[o]=i.value,E(l));return}const n=t.closest("select[data-filter]");if(n){const o=n.dataset.filter;v={...v,[o]:n.value},k();return}const a=t.closest("select[data-mock-select='true']");a&&(J=a.value,k())});Q.addEventListener("change",e=>{const r=e.target.closest("input[data-input='import-progress']");if(!r||!r.files||r.files.length===0)return;const[i]=r.files;ve(i),r.value=""});window.addEventListener("online",()=>{gt=!0,k()});window.addEventListener("offline",()=>{gt=!1,k()});he();ye();l&&Date.now()>=l.endsAt?vt(!0):(kt(),k());
