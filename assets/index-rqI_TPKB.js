(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const $=[{id:"nackademin_ux",name:"Nackademin UX",goal_exam:"Antagningsprov (analys + problemlösning)",weight:70,language_mode:"sv"},{id:"iths_itsec",name:"IT-Högskolan IT-säkerhet",goal_exam:"Antagningsprov Del 1 + Del 2",weight:60,language_mode:"sv-en"},{id:"prog1a",name:"Programmering 1/A-prövning",goal_exam:"Prövning/validering",weight:25,language_mode:"sv-en"}],v=[{id:"ux-1",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"En app tappar 40% användare i steg 2 av onboarding. Vilket första steg är mest UX-rimligt?",options:[{id:"a",text:"Lägg till fler funktioner i steg 1"},{id:"b",text:"Mät varför avhopp sker med funnel + kort användartest"},{id:"c",text:"Byt färgtema"},{id:"d",text:"Skippa onboarding helt"}],answer_key:"b",explanation:"Börja med evidens. Mätning och snabb testning ger orsak innan lösning."},{id:"ux-2",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken prioritering är mest rimlig i en MVP?",options:[{id:"a",text:"Must-have före nice-to-have"},{id:"b",text:"Bygg allt samtidigt"},{id:"c",text:"Fokusera på animationer"},{id:"d",text:"Ingen prioritering behövs"}],answer_key:"a",explanation:"MVP fokuserar på kärnnytta först."},{id:"ux-3",track_id:"nackademin_ux",topic:"Teststrategi",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv 2 korta hypoteser du skulle testa om en bokningssida har låg konvertering.",answer_key:"Exempel: 1) Otydliga priser minskar tillit. 2) För många steg i flödet orsakar avhopp.",explanation:"Bra svar kopplar observerbart problem till testbar hypotes."},{id:"ux-4",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Svår",source_tier:"Community",estimated_minutes:4,prompt:"Tre designförslag höjer NPS men sänker task success. Vad bör teamet göra först?",options:[{id:"a",text:"Välj högst NPS direkt"},{id:"b",text:"Analysera konflikt mellan upplevd nöjdhet och faktisk användbarhet"},{id:"c",text:"Skippa mätdata"},{id:"d",text:"Lansera alla tre"}],answer_key:"b",explanation:"Måtten pekar åt olika håll; orsaksanalys krävs."},{id:"ux-5",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vilken data är mest användbar för att utvärdera en ny navigering?",options:[{id:"a",text:"Antal likes på sociala medier"},{id:"b",text:"Task success rate + tid till mål"},{id:"c",text:"Utvecklingstid"},{id:"d",text:"Färgpalettens trendighet"}],answer_key:"b",explanation:"Task success och tidsmått följer navigeringens effekt."},{id:"ux-7",track_id:"nackademin_ux",topic:"Informationsarkitektur",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad är det mest rimliga första steget när en tjänst känns otydlig och har många menyer?",options:[{id:"a",text:"Lägg till fler menyval för att täcka allt"},{id:"b",text:"Kartlägg användarnas viktigaste mål och gruppera innehållet efter toppuppgifter"},{id:"c",text:"Gör alla sidor lika långa"},{id:"d",text:"Byt namn på alla knappar samtidigt"}],answer_key:"b",explanation:"Informationsarkitektur börjar med användarens viktigaste uppgifter, inte med fler val."},{id:"ux-8",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:5,prompt:"Skriv en snabb testplan för en prototyp i tre punkter: vad du vill testa, vem du testar på och vad du letar efter.",answer_key:"Exempel: 1) Testa om användaren förstår flödet. 2) Testa med 3-5 personer från målgruppen. 3) Leta efter avbrott, tvekan och missförstånd.",explanation:"Bra svar är konkret, kort och kopplar testmål till observerbart beteende."},{id:"it-1",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilket lager i OSI-modellen hanterar IP-adressering?",options:[{id:"a",text:"Transport"},{id:"b",text:"Nätverk"},{id:"c",text:"Fysiskt"},{id:"d",text:"Session"}],answer_key:"b",explanation:"IP hör till nätverkslagret."},{id:"it-2",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad gör en brandvägg (firewall) främst?",options:[{id:"a",text:"Komprimerar filer"},{id:"b",text:"Filtrerar trafik enligt regler"},{id:"c",text:"Byter IP-klass"},{id:"d",text:"Skapar backup"}],answer_key:"b",explanation:"Brandväggar kontrollerar in/ut-trafik mot policy."},{id:"it-3",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Engelsk term: 'confidentiality' betyder närmast:",options:[{id:"a",text:"Tillgänglighet"},{id:"b",text:"Konfidentialitet"},{id:"c",text:"Felsökning"},{id:"d",text:"Skalbarhet"}],answer_key:"b",explanation:"CIA-triaden: confidentiality, integrity, availability."},{id:"it-4",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Förklara skillnaden mellan TCP och UDP med en mening vardera.",answer_key:"TCP är anslutningsorienterat och tillförlitligt. UDP är snabbare, utan garanti för leverans.",explanation:"Fokus på tillförlitlighet kontra hastighet/överhead."},{id:"it-5",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilket påstående om VPN är mest korrekt?",options:[{id:"a",text:"VPN krypterar aldrig trafik"},{id:"b",text:"VPN skapar en krypterad tunnel över osäkert nät"},{id:"c",text:"VPN ersätter alla säkerhetskontroller"},{id:"d",text:"VPN gör användaren anonym i alla situationer"}],answer_key:"b",explanation:"VPN minskar risk i transit men ersätter inte helhetsarbete."},{id:"it-7",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad används DNS främst till?",options:[{id:"a",text:"Att kryptera trafik mellan datorer"},{id:"b",text:"Att förvandla domännamn till IP-adresser"},{id:"c",text:"Att skapa brandväggsregler"},{id:"d",text:"Att komprimera webbsidor"}],answer_key:"b",explanation:"DNS översätter namn som exempel.se till IP-adresser som nätverket kan routa till."},{id:"it-8",track_id:"iths_itsec",topic:"Säkerhet och social engineering",format:"mcq",difficulty:"Medel",source_tier:"Community",estimated_minutes:3,prompt:"Vilket exempel är social engineering?",options:[{id:"a",text:"Att installera en uppdatering för operativsystemet"},{id:"b",text:"Att skicka ett falskt meddelande som försöker få någon att lämna ut lösenord"},{id:"c",text:"Att byta till starkare Wi-Fi-kryptering"},{id:"d",text:"Att dokumentera en routerkonfiguration"}],answer_key:"b",explanation:"Social engineering handlar om att manipulera människor, inte system."},{id:"prog-1",track_id:"prog1a",topic:"Variabler och datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken datatyp passar bäst för heltal i Java?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"double[]"}],answer_key:"a",explanation:"int används för heltalsvärden."},{id:"prog-2",track_id:"prog1a",topic:"Villkor",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken operator betyder 'lika med' i ett villkor?",options:[{id:"a",text:"="},{id:"b",text:"=="},{id:"c",text:":="},{id:"d",text:"=>"}],answer_key:"b",explanation:"`==` jämför värden; `=` tilldelar."},{id:"prog-3",track_id:"prog1a",topic:"Loopar",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vad skriver denna kod ut? for(int i=1;i<=3;i++){System.out.print(i);}",options:[{id:"a",text:"123"},{id:"b",text:"012"},{id:"c",text:"13"},{id:"d",text:"321"}],answer_key:"a",explanation:"i går från 1 till 3 inklusive."},{id:"prog-4",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv en metodsignatur i Java för att summera två heltal.",answer_key:"Exempel: static int sum(int a, int b)",explanation:"Metodnamn, returtyp och parametrar ska framgå."},{id:"prog-5",track_id:"prog1a",topic:"Felsökning",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilken buggrisk är störst här: int[] a = new int[3]; System.out.println(a[3]);",options:[{id:"a",text:"NullPointerException"},{id:"b",text:"ArrayIndexOutOfBoundsException"},{id:"c",text:"StackOverflowError"},{id:"d",text:"Ingen risk"}],answer_key:"b",explanation:"Index 3 ligger utanför giltiga index 0-2."},{id:"core-1",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Om 20% av 150 är korrekt beräknat, vilket svar är rätt?",options:[{id:"a",text:"20"},{id:"b",text:"25"},{id:"c",text:"30"},{id:"d",text:"35"}],answer_key:"c",explanation:"0,2 * 150 = 30."},{id:"ux-6",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:6,prompt:"Designa en ny returhantering för IKEA där kunden kan boka upphämtning via appen. Beskriv kort: målgrupp, enkel wireframe-idé och motivering.",answer_key:"Exempel: målgrupp = kunder med stora varor; wireframe = välj order, välj tidsfönster, bekräfta; motivering = minskar friktion och supportärenden.",explanation:"Bedöm på struktur: målgrupp -> lösning -> motivering. Det finns inget enda facit."},{id:"it-6",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"På vilket OSI-lager verkar en router?",options:[{id:"a",text:"Lager 2 - Datalänk"},{id:"b",text:"Lager 3 - Nätverk"},{id:"c",text:"Lager 4 - Transport"},{id:"d",text:"Lager 7 - Applikation"}],answer_key:"b",explanation:"Routrar routar IP-trafik på lager 3."},{id:"prog-6",track_id:"prog1a",topic:"Datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken datatyp är bäst för att lagra true/false?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"float"}],answer_key:"c",explanation:"boolean lagrar sant/falskt-värden."},{id:"prog-7",track_id:"prog1a",topic:"Code tracing",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vad blir värdet på x?
let x = 2;
for (let i = 0; i < 3; i++) { x = x + i; }`,options:[{id:"a",text:"3"},{id:"b",text:"4"},{id:"c",text:"5"},{id:"d",text:"6"}],answer_key:"c",explanation:"x blir 2+0+1+2 = 5."},{id:"prog-8",track_id:"prog1a",topic:"Debugging-game",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vilket fel är tydligast i denna kod?
for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }`,options:[{id:"a",text:"Fel variabelnamn i loggen"},{id:"b",text:"Loopvillkoret bör vara i < arr.length"},{id:"c",text:"for-loop kan inte användas med arrayer"},{id:"d",text:"console.log kräver string"}],answer_key:"b",explanation:"i <= arr.length går ett steg för långt och ger undefined sista varvet."},{id:"prog-9",track_id:"prog1a",topic:"Villkor och logik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:`Vad skrivs ut?
int score = 7;
if (score >= 5) {
  System.out.print("Godkänd");
} else {
  System.out.print("Underkänd");
}`,options:[{id:"a",text:"Godkänd"},{id:"b",text:"Underkänd"},{id:"c",text:"5"},{id:"d",text:"Inget skrivs ut"}],answer_key:"a",explanation:"7 är större än eller lika med 5, så första grenen körs."},{id:"prog-10",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:5,prompt:"Förklara kort vad en metod gör i Java och ge ett enkelt exempel på vad den kan användas till.",answer_key:"En metod samlar kod som kan återanvändas. Exempel: en method som tar emot två tal och returnerar summan.",explanation:"Svar ska visa förståelse för återanvändning, input/return och ett konkret användningsfall."}],L=[{id:"mock-nack-60",name:"Nackademin-liknande 60 min",track_id:"nackademin_ux",total_minutes:60,sections:[{title:"Analys & logik",track_id:"nackademin_ux",topics:["Logik/analys","Problemlösning","Teststrategi","Scenario-övning"],question_ids:["ux-1","ux-2","ux-3","ux-4","ux-5","ux-6"],minutes:60,weight:1}],scoring_rules:"Poäng per korrekt svar. Korta svar bedöms mot modellförslag."},{id:"mock-iths-90",name:"IT-H Del 1+2 (90 min)",track_id:"iths_itsec",total_minutes:90,sections:[{title:"Del 1: Svenska/Engelska/Matte",track_id:"iths_itsec",topics:["Svenska/Engelska/Matte"],question_ids:["it-3","core-1"],minutes:20,weight:.2},{title:"Del 2: Dator- och nätverksteknik",track_id:"iths_itsec",topics:["Dator- och nätverksteknik"],question_ids:["it-1","it-2","it-4","it-5","it-6"],minutes:70,weight:.8}],scoring_rules:"Separat delpoäng, total viktad poäng enligt 20/80."},{id:"mock-prog-45",name:"Programmering 1/A delprov (45 min)",track_id:"prog1a",total_minutes:45,sections:[{title:"Del 1: Grunder",track_id:"prog1a",topics:["Variabler och datatyper","Villkor"],question_ids:["prog-1","prog-2","prog-6"],minutes:15,weight:.33},{title:"Del 2: Flöde och läsning",track_id:"prog1a",topics:["Loopar","Code tracing"],question_ids:["prog-3","prog-7","prog-9"],minutes:15,weight:.33},{title:"Del 3: Metoder och felsökning",track_id:"prog1a",topics:["Metoder","Felsökning","Debugging-game"],question_ids:["prog-4","prog-5","prog-8","prog-10"],minutes:15,weight:.34}],scoring_rules:"Separat poäng per del, fokus på grunder först och tydlig återkoppling på feltyper."}],C=[{id:"ev-nack-1",provider:"Nackademin",url:"https://nackademin.se/antagning/urval-och-antagningsprov/",claim:"Urvalet omfattar antagningsprov med fokus på analys- och problemlösningsförmåga.",confidence:"Hög",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-nack-2",provider:"Nackademin (EN)",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Den engelska antagningssidan bekräftar att provet används för att bedöma lämplighet och förmåga att hantera programmens upplägg.",confidence:"Medel",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-iths-1",provider:"IT-Högskolan",url:"https://www.iths.se/antagningsprovet/",claim:"Antagningsprovet består av två delar: allmän del och programspecifik del.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-3",provider:"IT-Högskolan (FAQ/antagning)",url:"https://www.iths.se/vanliga-fragor/",claim:"IT-Högskolan hänvisar till att antagning och förberedande material kan variera, vilket gör det rimligt att träna både allmän del och programspecifik del separat.",confidence:"Medel",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-2",provider:"IT-Högskolan",url:"https://www.iths.se/utbildningar/preparandkurs/",claim:"Förkunskapsspåret för IT-säkerhet lyfter dator- och nätverksteknik.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-prog-1",provider:"Linköpings kommun (Komvux-info)",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i programmering brukar innehålla praktiska moment, teori och uppgifter i flera delar.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-prog-2",provider:"Komvux/exempel på prövning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i gymnasiala kurser brukar kombinera teori med praktiska uppgifter, vilket passar ett programmeringsspår med både kunskapstest och kodläsning.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-community-1",provider:"Community-sammanställning",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Tidigare sökande beskriver tidsbrist som huvudutmaning; träningsmönster fokuserar därför på tidsatta övningar.",confidence:"Låg",source_tier:"Community",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-community-2",provider:"Community-sammanställning",url:"https://www.iths.se/antagningsprovet/",claim:"Tidigare sökande beskriver att del 1 ofta känns bred och att del 2 kräver fokus på nätverk, säkerhet och begrepp som brukar återkomma.",confidence:"Låg",source_tier:"Community",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-community-3",provider:"Community-sammanställning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"I programmeringsprövningar återkommer ofta uppgifter om variabler, villkor, loopar och felsökning snarare än enbart teori.",confidence:"Låg",source_tier:"Community",track_id:"prog1a",last_verified_date:"2026-04-03"}],ot=30,ct=45,It=1440*60*1e3,U=new Date(2026,3,7,9,0,0);function lt(e,t,r){return Math.min(r,Math.max(t,e))}function q(e){return e.reduce((t,r)=>t+r.minutes,0)}function V(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}function Pt(e=U){return new Intl.DateTimeFormat("sv-SE",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}function ut(e=new Date,t=U){return Math.round((V(t)-V(e))/It)}function Tt(e=new Date,t=U){const r=ut(e,t);return r<0?"Första provet är genomfört":r===0?"D-0 idag":`D-${r}`}function pt(e){const t=q(e);if(t>=ot&&t<=ct)return e;const r=lt(t,ot,ct),i=r/Math.max(t,1),a=e.map(s=>({...s,minutes:Math.max(3,Math.round(s.minutes*i))})),n=lt(r-q(a),-5,5);return n!==0&&(a[0]={...a[0],minutes:Math.max(3,a[0].minutes+n)}),a}function mt(e=new Date,t=U){return V(e)<=V(t)?"A":"B"}function Dt(e){const t=ut(e);return`Sprint A (${t<=0?"D-0: provdag":`D-${t} till D-0`}): Nackademin-prioritet`}function At(){return pt([{trackId:"nackademin_ux",topic:"Analys + problemlösning",minutes:25,mode:"Drill"},{trackId:"prog1a",topic:"Programmeringsgrunder (variabler/villkor/loopar)",minutes:7,mode:"Lär"},{trackId:"iths_itsec",topic:"Snabb engelska/matte-rep",minutes:3,mode:"Drill"}])}function Lt(){return pt([{trackId:"iths_itsec",topic:"Dator- och nätverksteknik",minutes:24,mode:"Drill"},{trackId:"prog1a",topic:"Kodövning + felsökning",minutes:10,mode:"Drill"},{trackId:"nackademin_ux",topic:"Teststrategi och tidsdisciplin",minutes:6,mode:"Lär"}])}function F(e=new Date){const t=mt(e),r=t==="A"?At():Lt();return{sprint:t,title:t==="A"?Dt(e):"Sprint B (efter första provet): IT-H-prioritet",totalMinutes:q(r),blocks:r}}function Nt(e){const t=q(e)||1,r={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)r[i.trackId]+=i.minutes;return{nackademin_ux:Math.round(r.nackademin_ux/t*100),iths_itsec:Math.round(r.iths_itsec/t*100),prog1a:Math.round(r.prog1a/t*100)}}function gt(e=new Date){return mt(e)==="A"?{id:"mock-nack-60",label:"Nackademin-liknande 60 min",minutes:60}:{id:"mock-iths-90",label:"IT-H Del 1+2 (90 min)",minutes:90}}function ft(e,t){return e.filter(r=>!(t.trackId!=="all"&&r.track_id!==t.trackId||t.topic!=="all"&&r.topic!==t.topic||t.difficulty!=="all"&&r.difficulty!==t.difficulty||t.sourceTier!=="all"&&r.source_tier!==t.sourceTier))}function N(e){const t=e.reduce((r,i)=>r+i.estimated_minutes,0);return Math.min(45,Math.max(15,t))}function Z(e,t){let r=0;const i=new Map;for(const o of e){const d=(t[o.id]||"").trim().toLowerCase(),p=o.answer_key.trim().toLowerCase();if(o.format==="mcq"?d===p:d.length>0&&p.includes(d.slice(0,8))){r+=1;continue}i.set(o.topic,(i.get(o.topic)||0)+1)}const a=e.length,n=a>0?Math.round(r/a*100):0,s=[...i.entries()].sort((o,d)=>d[1]-o[1]).map(([o])=>o).slice(0,3);return{correct:r,total:a,scorePercent:n,weakTopics:s}}const rt="yh.study-sessions",j="yh.active-session",Et=1;let H="default";function kt(e,t){if(!e)return t;try{return JSON.parse(e)}catch{return t}}function w(e){return`${e}.${H}`}function Ot(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"default"}function vt(e){return H=Ot(e),H}function jt(){return H}function B(){return kt(localStorage.getItem(w(rt)),[])}function Ft(e){const t=B();t.unshift(e),localStorage.setItem(w(rt),JSON.stringify(t.slice(0,100)))}function K(){return kt(localStorage.getItem(w(j)),null)}function E(e){localStorage.setItem(w(j),JSON.stringify(e))}function ht(){localStorage.removeItem(w(j))}function Ct(){return{version:Et,exportedAt:new Date().toISOString(),studySessions:B(),activeSession:K()}}function qt(e){const t=Array.isArray(e.studySessions)?e.studySessions.slice(0,100):[];localStorage.setItem(w(rt),JSON.stringify(t));const r=!!e.activeSession&&typeof e.activeSession=="object";return r?localStorage.setItem(w(j),JSON.stringify(e.activeSession)):localStorage.removeItem(w(j)),{importedSessions:t.length,restoredActiveSession:r}}const _t=document.querySelector("#app");if(!_t)throw new Error("App container saknas");const Q=_t,Vt={overview:"Översikt",tracks:"Spår",bank:"Frågebank",mock:"Mockprov",research:"Research",logic:"Logik"},tt="yh.current-user-id",Ht="yh.study-profile";function J(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"gäst"}function Rt(){const e=localStorage.getItem(tt)||"gäst",t=J(e);return localStorage.setItem(tt,t),t}function Ut(e){const t=J(e);return localStorage.setItem(tt,t),t}function Bt(){return`user-${Math.random().toString(36).slice(2,7)}`}function bt(e){return`${Ht}.${J(e)}`}let P="overview",_={trackId:"all",topic:"all",difficulty:"all",sourceTier:"all"},D=Rt();vt(D);let O=D,it=gt().id,l=K(),h=null,b=null,nt=navigator.onLine,R="",yt="Designa en digital tjänst för IKEA som löser problemet: kunden vill boka upphämtning av returvaror.";const A={sessionPreference:[{id:"30",label:"30 min fokuspass (rekommenderat nu)"},{id:"45",label:"45 min standardpass"},{id:"60",label:"60 min när jag har energi"}],blocker:[{id:"time",label:"Tidsstress i prov"},{id:"logic",label:"Logik och resonemang"},{id:"network",label:"IT/nätverkstermer"},{id:"coding",label:"Kodförståelse/felsökning"},{id:"other",label:"Annat (skriv i fritext)"}],confidence:[{id:"low",label:"Låg - behöver tydlig guidning"},{id:"mid",label:"Medel - behöver mest träning"},{id:"high",label:"Hög - vill främst ha tidsprov"}],targetPriority:[{id:"nack",label:"Nackademin UX (akut)"},{id:"iths",label:"IT-H IT-säkerhet"},{id:"prog",label:"Programmering 1/A"}]};let g=wt();function S(e){return $.find(t=>t.id===e)?.name||e}function X(e){return`track-${e}`}function Kt(e){const t=Math.max(0,Math.floor(e/1e3)),r=Math.floor(t/60).toString().padStart(2,"0"),i=(t%60).toString().padStart(2,"0");return`${r}:${i}`}function xt(e){return e.questionIds.map(t=>v.find(r=>r.id===t)).filter(Boolean)}function Qt(e){return e.reduce((t,r)=>t+r.duration_minutes,0)}function Jt(e){const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)t.nackademin_ux+=i.track_mix.nackademin_ux||0,t.iths_itsec+=i.track_mix.iths_itsec||0,t.prog1a+=i.track_mix.prog1a||0;const r=Math.max(1,e.length);return{nackademin_ux:Math.round(t.nackademin_ux/r),iths_itsec:Math.round(t.iths_itsec/r),prog1a:Math.round(t.prog1a/r)}}function St(){return v.filter(e=>["Logik/analys","Svenska/Engelska/Matte","Code tracing","Debugging-game"].includes(e.topic))}function Xt(){const e=["IKEA","1177","SJ","Skatteverket","Foodora"],t=["användaren hittar inte status på sitt ärende","för många steg gör att användaren avbryter","det är otydligt vad som händer efter beställning","returer och ombokningar upplevs krångliga","supporten får för många repetitiva frågor"],r=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return`Designa en digital tjänst för ${r} som löser problemet: ${i}.`}function W(){return{sessionPreference:"30",blocker:"time",confidence:"mid",targetPriority:"nack",notes:""}}function wt(e=D){try{const t=localStorage.getItem(bt(e));if(!t)return W();const r=JSON.parse(t);return{...W(),...r}}catch{return W()}}function zt(e,t=D){localStorage.setItem(bt(t),JSON.stringify(e))}function Gt(e,t,r){const i=Z(t,r);if(!e)return{sectionResults:[],finalScore:i.scorePercent};const a=L.find(d=>d.id===e);if(!a)return{sectionResults:[],finalScore:i.scorePercent};const n=a.sections.map(d=>{const p=t.filter(M=>d.question_ids.includes(M.id)),m=Z(p,r);return{title:d.title,scorePercent:m.scorePercent,correct:m.correct,total:m.total,weight:d.weight}}),s=n.reduce((d,p)=>d+p.weight,0)||1,o=n.reduce((d,p)=>d+p.scorePercent*(p.weight/s),0);return{templateName:a.name,sectionResults:n,finalScore:Math.round(o)}}function Y(e,t){return A[e].find(r=>r.id===t)?.label||t}function z(e){return e==="iths"?"iths_itsec":e==="prog"?"prog1a":"nackademin_ux"}function Wt(e){return e==="nackademin_ux"?"Logik/analys":e==="iths_itsec"?"Dator- och nätverksteknik":"Loopar"}function et(e){const t=v.filter(i=>i.topic===e);if(t.length===0)return"nackademin_ux";const r={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of t)r[i.track_id]+=1;return Object.entries(r).sort((i,a)=>a[1]-i[1])[0]?.[0]||"nackademin_ux"}function $t(e){const t=z(g.targetPriority),r=F().sprint,i={nackademin_ux:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0},iths_itsec:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0},prog1a:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0}},a=[...e].sort((u,c)=>+new Date(c.date)-+new Date(u.date));for(const u of e){for(const c of $.map(k=>k.id)){const k=u.track_mix[c],I=k/100;k<=0||(i[c].minutes+=Math.round(u.duration_minutes*I),i[c].avgScore+=u.score*I,i[c].weight+=I)}for(const c of u.weak_topics){const k=et(c);i[k].weakHits+=1}}for(const u of $.map(c=>c.id)){const c=i[u];c.avgScore=c.weight>0?Math.round(c.avgScore/c.weight):0}const n=a.slice(0,2);for(const u of n){const c=Object.entries(u.track_mix).sort((k,I)=>I[1]-k[1])[0]?.[0]||"nackademin_ux";u.track_mix[c]>=60&&(i[c].recentHeavy+=1)}for(const u of $){const c=i[u.id];let k=0;u.id===t&&(k+=2.2),r==="A"&&u.id==="nackademin_ux"&&(k+=1.4),r==="B"&&u.id==="iths_itsec"&&(k+=1.4),c.minutes<20&&(k+=1.2),k+=c.weakHits*.75,k-=c.recentHeavy*1.1,c.avgScore>75&&c.minutes>80&&(k-=.6),c.score=k}const s=Object.entries(i).sort((u,c)=>c[1].score-u[1].score)[0]?.[0]||t,d=a.flatMap(u=>u.weak_topics).filter(u=>et(u)===s)[0]||Wt(s),p=i[s].weakHits>=2||g.confidence==="low"?"Lär":"Drill",m=Math.max(25,Math.min(45,Number.parseInt(g.sessionPreference,10)||35)),G=v.filter(u=>u.track_id===s).sort((u,c)=>{const k=u.topic===d?1:0;return(c.topic===d?1:0)-k}).slice(0,10).map(u=>u.id),y=`${S(s)} prioriteras nu (${i[s].weakHits} svaghetsträffar, senaste fokus balanseras).`;return{trackId:s,topic:d,mode:p,durationMinutes:m,questionIds:G,reason:y}}function Yt(e,t){return $.map(r=>{const i=e.reduce((p,m)=>p+Math.round(m.duration_minutes*(m.track_mix[r.id]||0)/100),0),a=e.reduce((p,m)=>p+m.score*((m.track_mix[r.id]||0)/100),0),n=e.reduce((p,m)=>p+(m.track_mix[r.id]||0)/100,0),s=n>0?Math.round(a/n):0,o=e.flatMap(p=>p.weak_topics).filter(p=>et(p)===r.id).length;let d="in_progress";return i<15?d="not_started":o>=3||n>0&&s<55?d="needs_help":s>=75&&i>=80&&o<=1&&(d="near_ready"),{trackId:r.id,minutes:i,avgScore:s,weakHits:o,priority:t.trackId===r.id,stage:d}})}function Zt(e){return e==="not_started"?"Ej startad":e==="needs_help"?"Mycket fel":e==="near_ready"?"Nära klar":"Påbörjad"}function te(e){return e==="not_started"?"chip-not-started":e==="needs_help"?"chip-needs-help":e==="near_ready"?"chip-near-ready":"chip-in-progress"}function ee(e){if(e==="logic"){P="logic",f();return}P="bank",_={trackId:e==="ux"?"nackademin_ux":e==="it"?"iths_itsec":"prog1a",topic:"all",difficulty:"all",sourceTier:"all"},f()}function Mt(){const e=F(),t=[],r=z(g.targetPriority),a={time:["Logik/analys","Problemlösning","Svenska/Engelska/Matte"],logic:["Logik/analys","Code tracing","Debugging-game"],network:["Dator- och nätverksteknik","Säkerhet och social engineering"],coding:["Loopar","Metoder","Felsökning","Code tracing","Debugging-game"],other:[]}[g.blocker]||[];for(const s of e.blocks){const o=v.filter(m=>m.track_id===s.trackId),d=s.minutes>=20?4:s.minutes>=10?3:2,p=o.slice(0,d);for(const m of p)t.find(M=>M.id===m.id)||t.push(m)}const n=v.filter(s=>s.track_id===r);for(const s of n)if(t.find(o=>o.id===s.id)||t.unshift(s),t.length>=12)break;if(a.length>0){const s=v.filter(o=>a.includes(o.topic));for(const o of s)if(t.find(d=>d.id===o.id)||t.push(o),t.length>=12)break}if(t.length<8){for(const s of v)if(t.find(o=>o.id===s.id)||t.push(s),t.length>=8)break}return t.slice(0,12)}function T(e){R=e,f(),window.setTimeout(()=>{R="",f()},3500)}function re(){const e=Ct(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a"),a=new Date().toISOString().replace(/[:.]/g,"-");i.href=r,i.download=`yh-prep-backup-${a}.json`,document.body.append(i),i.click(),i.remove(),URL.revokeObjectURL(r),T("Backup exporterat.")}async function ie(e){try{const t=await e.text(),r=JSON.parse(t),i=qt(r);l=K(),T(`Import klar: ${i.importedSessions} pass, aktiv session ${i.restoredActiveSession?"återställd":"saknas"}.`)}catch{T("Import misslyckades. Kontrollera att filen är en giltig backup.")}}function ne(){if(!("serviceWorker"in navigator))return;if(window.location.hostname.endsWith("github.io")){navigator.serviceWorker.getRegistrations().then(t=>Promise.all(t.map(r=>r.unregister()))).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(r=>caches.delete(r)))).catch(()=>{});return}navigator.serviceWorker.register("sw.js").catch(()=>{T("Kunde inte aktivera offline-läge.")})}function at(){b&&(window.clearInterval(b),b=null),l&&(b=window.setInterval(()=>{if(l){if(Date.now()>=l.endsAt){st(!0);return}f()}},1e3))}function ae(e){if(e.length===0)return{nackademin_ux:0,iths_itsec:0,prog1a:0};const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)t[r.track_id]+=1;return{nackademin_ux:Math.round(t.nackademin_ux/e.length*100),iths_itsec:Math.round(t.iths_itsec/e.length*100),prog1a:Math.round(t.prog1a/e.length*100)}}function x(e,t,r,i){t.length!==0&&(l={id:crypto.randomUUID(),mode:e,startedAt:Date.now(),endsAt:Date.now()+r*6e4,questionIds:t,currentIndex:0,answers:{},templateId:i},E(l),at(),f())}function st(e=!1){if(!l)return;const t=xt(l),r=Z(t,l.answers),i=Gt(l.templateId,t,l.answers),a=ae(t),n=Math.max(1,Math.round((Date.now()-l.startedAt)/6e4));Ft({id:l.id,date:new Date().toISOString(),duration_minutes:n,mode:l.mode,track_mix:a,score:i.finalScore,weak_topics:r.weakTopics}),h={mode:l.mode,scorePercent:i.finalScore,correct:r.correct,total:r.total,weakTopics:r.weakTopics,autoSubmitted:e,sectionResults:i.sectionResults,templateName:i.templateName},l=null,ht(),b&&(window.clearInterval(b),b=null),f()}function se(){l=null,ht(),b&&(window.clearInterval(b),b=null),f()}function dt(){const e=B(),t=F(),r=Nt(t.blocks),i=Jt(e),a=Tt(),n=Pt(),s=gt(),o=Mt(),d=z(g.targetPriority),p=S(d),m=Number.parseInt(g.sessionPreference,10)||t.totalMinutes,M=Y("blocker",g.blocker),G=jt(),y=$t(e),u=Yt(e,y);return`
    <div class="grid overview-grid">
      <section class="card critical-card span-12">
        <h3>Snabbstart idag</h3>
        <p class="muted">Status: ${nt?"Online":"Offline"} • ${t.totalMinutes} min</p>
        <div class="critical-kpis">
          <p><strong>Prov:</strong> ${a}</p>
          <p><strong>Nästa mock:</strong> ${s.minutes} min</p>
        </div>
        <p class="muted">Prioriterat nu: ${p} • Passmål: ${m} min • Fokus: ${M}</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-today-drill">Starta dagens pass</button>
          <button class="secondary" data-action="start-recommended">Kör rekommenderat</button>
          <button class="secondary" data-action="jump-mock">Mockprov</button>
          <button class="secondary" data-action="start-priority-learn">Lär i prioriterat spår</button>
        </div>
      </section>

      <section class="card span-12 recommendation-card">
        <h3>Rekommendation just nu</h3>
        <p>
          <span class="status-chip chip-priority">Prioritet</span>
          ${S(y.trackId)} • ${y.topic} • ${y.mode} (${y.durationMinutes} min)
        </p>
        <p class="muted">${y.reason}</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-recommended">Starta rekommenderat pass</button>
          <button class="secondary" data-action="open-python-course">Python-minikurs</button>
        </div>
        <p class="muted">Sprint-labelen visar fas (A/B). Rekommendationen ovan är din personliga förslagsmarkering.</p>
      </section>

      <section class="card span-12">
        <h3>Statuskarta</h3>
        <div class="status-grid">
          ${u.map(c=>`
                <article class="status-item">
                  <p><strong>${S(c.trackId)}</strong></p>
                  <p>
                    ${c.priority?'<span class="status-chip chip-priority">Viktigast</span>':""}
                    <span class="status-chip ${te(c.stage)}">${Zt(c.stage)}</span>
                  </p>
                  <p class="muted">Tid: ${c.minutes} min • Snitt: ${c.avgScore}% • Svagheter: ${c.weakHits}</p>
                </article>
              `).join("")}
        </div>
      </section>

      <section class="card span-6">
        <details>
          <summary>Användare och progress</summary>
          <p class="muted">Byt user id för separat progress per person på samma app.</p>
          <div class="inline-controls">
            <label for="user-id-input">User id</label>
            <input id="user-id-input" data-user-id="draft" value="${O}" placeholder="t.ex. martin, sara, klass-a" />
            <button class="secondary" data-action="generate-user-id">Skapa nytt id</button>
            <button class="primary" data-action="switch-user-id">Byt användare</button>
          </div>
          <p class="muted">Aktiv användare: <strong>${D}</strong> • Storage: ${G}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>2-min intervju (för personlig plan)</summary>
          <p class="muted">Flervalsfrågor med fritext för "Annat". Svaren styr rekommenderad träning i appen.</p>
          <div class="inline-controls">
            <label for="profile-sessionPreference">Passlängd</label>
            <select id="profile-sessionPreference" data-profile="sessionPreference">
              ${A.sessionPreference.map(c=>`<option value="${c.id}" ${g.sessionPreference===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-blocker">Största hinder</label>
            <select id="profile-blocker" data-profile="blocker">
              ${A.blocker.map(c=>`<option value="${c.id}" ${g.blocker===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-confidence">Nuvarande nivå</label>
            <select id="profile-confidence" data-profile="confidence">
              ${A.confidence.map(c=>`<option value="${c.id}" ${g.confidence===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-targetPriority">Primärt mål</label>
            <select id="profile-targetPriority" data-profile="targetPriority">
              ${A.targetPriority.map(c=>`<option value="${c.id}" ${g.targetPriority===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-notes">Annat du vill att planen tar hänsyn till</label>
            <textarea id="profile-notes" data-profile="notes" rows="3" placeholder="Skriv fritt här (valfritt)">${g.notes}</textarea>
            <button class="primary" data-action="save-profile">Spara intervju</button>
          </div>
          <p class="muted">Valt just nu: ${Y("sessionPreference",g.sessionPreference)} • ${Y("blocker",g.blocker)}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa dagens plan (${t.blocks.length} block)</summary>
          <p class="muted">${t.title}</p>
          <ol class="list-clean">
            ${t.blocks.map(c=>`<li><span class="track-pill ${X(c.trackId)}">${S(c.trackId)}</span> ${c.topic} (${c.minutes} min)</li>`).join("")}
          </ol>
          <p class="muted">Fördelning: UX ${r.nackademin_ux}% • IT-H ${r.iths_itsec}% • Prog1/A ${r.prog1a}%</p>
          <p class="muted">Frågor i dagens pass: ${o.length}</p>
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
          <p><strong>Första provdatum:</strong> ${n}</p>
          <p><strong>Genomförd tid:</strong> ${Qt(e)} min (${e.length} pass)</p>
          <div class="inline-controls">
            <button class="secondary" data-action="export-progress">Exportera backup</button>
            <input type="file" accept="application/json" data-input="import-progress" />
          </div>
          ${R?`<p class="success">${R}</p>`:""}
        </details>
      </section>
    </div>
  `}function oe(){const e=["Logik/analys","Mattebas","Teststrategi","Programmeringsgrunder"];return`
    <div class="grid">
      ${$.map(t=>`
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
        <p>${yt}</p>
        <p class="muted">
          Workflow: 1) Målgruppsanalys → 2) Enkel wireframe-idé (text/skiss) → 3) Motivering.
        </p>
        <button class="primary" data-action="generate-ux-case">Generera nytt case</button>
      </section>
    </div>
  `}function ce(){const e=ft(v,_),t=Array.from(new Set(v.map(r=>r.topic))).sort();return`
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
            <option value="all" ${_.trackId==="all"?"selected":""}>Alla spår</option>
            ${$.map(r=>`<option value="${r.id}" ${_.trackId===r.id?"selected":""}>${r.name}</option>`).join("")}
          </select>

          <select data-filter="topic">
            <option value="all" ${_.topic==="all"?"selected":""}>Alla ämnen</option>
            ${t.map(r=>`<option value="${r}" ${_.topic===r?"selected":""}>${r}</option>`).join("")}
          </select>

          <select data-filter="difficulty">
            <option value="all" ${_.difficulty==="all"?"selected":""}>Alla nivåer</option>
            ${["Lätt","Medel","Svår"].map(r=>`<option value="${r}" ${_.difficulty===r?"selected":""}>${r}</option>`).join("")}
          </select>

          <select data-filter="sourceTier">
            <option value="all" ${_.sourceTier==="all"?"selected":""}>Alla källnivåer</option>
            ${["Officiell","Sekundär","Community"].map(r=>`<option value="${r}" ${_.sourceTier===r?"selected":""}>${r}</option>`).join("")}
          </select>

          <button class="primary" data-action="start-drill">Starta Drill (${N(e)} min)</button>
        </div>
        <p class="muted">${e.length} frågor matchar filter.</p>
      </section>

      ${e.map(r=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${X(r.track_id)}">${S(r.track_id)}</span>
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
  `}function le(){const e=L.find(r=>r.id===it)||L[0],t=e.sections.reduce((r,i)=>r+i.question_ids.length,0);return`
    <div class="grid">
      <section class="card span-12">
        <h3>Mockprov (tidsprov)</h3>
        <div class="inline-controls">
          <select data-mock-select="true">
            ${L.map(r=>`<option value="${r.id}" ${r.id===e.id?"selected":""}>${r.name}</option>`).join("")}
          </select>
          <button class="primary" data-action="start-mock">Starta ${e.total_minutes} min</button>
        </div>
        <p class="muted">${t} frågor i detta mockprov.</p>
        <p class="muted">Poängregel: ${e.scoring_rules}</p>
      </section>

      ${e.sections.map(r=>`
            <section class="card span-6">
              <h3>${r.title}</h3>
              <p><span class="track-pill ${X(r.track_id)}">${S(r.track_id)}</span></p>
              <p>Tid: ${r.minutes} min • Vikt: ${Math.round(r.weight*100)}%</p>
              <p>Ämnen: ${r.topics.join(" • ")}</p>
              <p class="muted">Frågor: ${r.question_ids.join(", ")}</p>
            </section>
          `).join("")}
    </div>
  `}function de(){const e=C.filter(i=>i.source_tier==="Officiell").length,t=C.filter(i=>i.source_tier==="Community").length,r=C.filter(i=>i.source_tier==="Sekundär").length;return`
    <div class="grid">
      <section class="card span-12">
        <h3>Evidence-kort: tidigare års prov och mönster</h3>
        <p class="muted">Officiell: ${e} • Sekundär: ${r} • Community: ${t}</p>
      </section>
      ${C.map(i=>`
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
  `}function ue(){const e=St();return`
    <div class="grid">
      <section class="card span-12">
        <h3>Logik-flik</h3>
        <p class="muted">Inspirerad av Gemini-planens dashboard med egen logikmodul.</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-logic-drill">
            Starta logik-drill (${N(e)} min)
          </button>
          <button class="secondary" data-action="quick-tab" data-tab="ux">Till UX</button>
          <button class="secondary" data-action="quick-tab" data-tab="it">Till IT</button>
          <button class="secondary" data-action="quick-tab" data-tab="prog">Till Prog</button>
        </div>
      </section>
      ${e.map(t=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${X(t.track_id)}">${S(t.track_id)}</span>
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
  `}function pe(){if(!l)return"";const e=xt(l),t=e[l.currentIndex];if(!t)return"";const r=l.endsAt-Date.now(),i=Object.keys(l.answers).length,a=l.answers[t.id]||"";return`
    <section class="card session">
      <h3>Aktiv ${l.mode}</h3>
      <p class="session-timer ${r<5*6e4?"warning":""}">Tid kvar: ${Kt(r)}</p>
      <p class="muted">Autosparning: aktiv • ${i}/${e.length} besvarade</p>
      <p><strong>Fråga ${l.currentIndex+1}/${e.length}:</strong> ${t.prompt}</p>

      ${t.format==="mcq"?`<div class="inline-controls">${(t.options||[]).map(n=>`
                  <label>
                    <input type="radio" name="answer" data-action="answer" data-qid="${t.id}" value="${n.id}" ${a===n.id?"checked":""} />
                    ${n.id.toUpperCase()}: ${n.text}
                  </label>
                `).join("")}</div>`:`<textarea data-action="answer-text" data-qid="${t.id}" rows="4" placeholder="Skriv ditt svar här">${a}</textarea>`}
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
  `}function me(){if(!h)return"";const e=h.sectionResults.length===0?"":`
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
  `}function ge(){switch(P){case"overview":return dt();case"tracks":return oe();case"bank":return ce();case"mock":return le();case"research":return de();case"logic":return ue();default:return dt()}}function f(){const e=F();Q.innerHTML=`
    <div class="app">
      <header class="hero">
        <div class="hero-top">
          <div>
            <h1>YH Prep Lab</h1>
            <p>Träna inför Nackademin UX, IT-H IT-säkerhet och Programmering 1/A.</p>
          </div>
          <div class="hero-actions">
            <span class="badge">${e.sprint==="A"?"Sprint A: Nackademin först":"Sprint B: IT-H fokus"}</span>
            <details class="mini-menu">
              <summary>Snabbval</summary>
              <div class="mini-menu-body">
                <button class="secondary" data-action="start-recommended">Kör rekommenderat</button>
                <button class="secondary" data-action="open-python-course">Python-minikurs</button>
                <button class="secondary" data-action="jump-mock">Mockprov</button>
              </div>
            </details>
          </div>
        </div>

        <nav class="nav">
          ${Object.entries(Vt).map(([t,r])=>`<button data-view="${t}" class="${P===t?"active":""}">${r}</button>`).join("")}
        </nav>
      </header>

      <main>
        ${pe()}
        ${me()}
        ${ge()}
      </main>
    </div>
  `}Q.addEventListener("click",e=>{const t=e.target,r=t.closest("button[data-view]");if(r){P=r.dataset.view,f();return}const i=t.closest("[data-action]");if(!i)return;const a=i.dataset.action;if(a){if(a==="jump-mock"){P="mock",f();return}if(a==="export-progress"){re();return}if(a==="start-today-drill"){const n=Mt(),s=F(),o=Number.parseInt(g.sessionPreference,10);x("Drill",n.map(d=>d.id),Number.isNaN(o)?s.totalMinutes:Math.max(30,Math.min(45,o)));return}if(a==="start-priority-learn"){const n=z(g.targetPriority),s=v.filter(o=>o.track_id===n).slice(0,6);x("Lär",s.map(o=>o.id),20);return}if(a==="start-recommended"){const n=$t(B());x(n.mode,n.questionIds,n.durationMinutes);return}if(a==="quick-tab"){const n=i.dataset.tab;n&&ee(n);return}if(a==="generate-ux-case"){yt=Xt(),f();return}if(a==="start-logic-drill"){const n=St();x("Drill",n.slice(0,12).map(s=>s.id),N(n));return}if(a==="start-track-drill"){const n=i.dataset.track,s=v.filter(o=>o.track_id===n).slice(0,8).map(o=>o.id);x("Drill",s,N(v.filter(o=>s.includes(o.id))));return}if(a==="start-track-learn"){const n=i.dataset.track,s=v.filter(o=>o.track_id===n).slice(0,6).map(o=>o.id);x("Lär",s,20);return}if(a==="open-python-course"){window.open("python-minikurs.html","_blank","noopener,noreferrer");return}if(a==="start-drill"){const n=ft(v,_);x("Drill",n.slice(0,12).map(s=>s.id),N(n));return}if(a==="start-mock"){const n=L.find(o=>o.id===it);if(!n)return;const s=n.sections.flatMap(o=>o.question_ids);x("Tidsprov",s,n.total_minutes,n.id);return}if(a==="save-profile"){zt(g),T("Intervju sparad. Rekommenderad plan uppdaterad.");return}if(a==="generate-user-id"){O=Bt(),f();return}if(a==="switch-user-id"){const n=Ut(O);D=n,O=n,vt(n),l=K(),g=wt(n),h=null,b&&(window.clearInterval(b),b=null),at(),T(`Bytt till användare: ${n}`);return}if(l){if(a==="prev-q"){l.currentIndex=Math.max(0,l.currentIndex-1),E(l),f();return}if(a==="next-q"){l.currentIndex=Math.min(l.questionIds.length-1,l.currentIndex+1),E(l),f();return}if(a==="submit-session"){st(!1);return}if(a==="cancel-session"){se();return}if(a==="answer"){const n=t,s=n.dataset.qid;if(!s)return;l.answers[s]=n.value,E(l),f()}}}});Q.addEventListener("input",e=>{const t=e.target,r=t.closest("input[data-user-id='draft']");if(r){O=J(r.value);return}const i=t.closest("[data-profile]");if(i){const o=i.dataset.profile;o&&(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement)&&(g={...g,[o]:t.value});return}const a=t.closest("textarea[data-action='answer-text']");if(a&&l){const o=a.dataset.qid;o&&(l.answers[o]=a.value,E(l));return}const n=t.closest("select[data-filter]");if(n){const o=n.dataset.filter;_={..._,[o]:n.value},f();return}const s=t.closest("select[data-mock-select='true']");s&&(it=s.value,f())});Q.addEventListener("change",e=>{const r=e.target.closest("input[data-input='import-progress']");if(!r||!r.files||r.files.length===0)return;const[i]=r.files;ie(i),r.value=""});window.addEventListener("online",()=>{nt=!0,f()});window.addEventListener("offline",()=>{nt=!1,f()});ne();l&&Date.now()>=l.endsAt?st(!0):(at(),f());
