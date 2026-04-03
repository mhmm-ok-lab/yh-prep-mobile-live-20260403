(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const J=[{id:"nackademin_ux",name:"Nackademin UX",goal_exam:"Antagningsprov (analys + problemlösning)",weight:70,language_mode:"sv"},{id:"iths_itsec",name:"IT-Högskolan IT-säkerhet",goal_exam:"Antagningsprov Del 1 + Del 2",weight:60,language_mode:"sv-en"},{id:"prog1a",name:"Programmering 1/A-prövning",goal_exam:"Prövning/validering",weight:25,language_mode:"sv-en"}],k=[{id:"ux-1",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"En app tappar 40% användare i steg 2 av onboarding. Vilket första steg är mest UX-rimligt?",options:[{id:"a",text:"Lägg till fler funktioner i steg 1"},{id:"b",text:"Mät varför avhopp sker med funnel + kort användartest"},{id:"c",text:"Byt färgtema"},{id:"d",text:"Skippa onboarding helt"}],answer_key:"b",explanation:"Börja med evidens. Mätning och snabb testning ger orsak innan lösning."},{id:"ux-2",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken prioritering är mest rimlig i en MVP?",options:[{id:"a",text:"Must-have före nice-to-have"},{id:"b",text:"Bygg allt samtidigt"},{id:"c",text:"Fokusera på animationer"},{id:"d",text:"Ingen prioritering behövs"}],answer_key:"a",explanation:"MVP fokuserar på kärnnytta först."},{id:"ux-3",track_id:"nackademin_ux",topic:"Teststrategi",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv 2 korta hypoteser du skulle testa om en bokningssida har låg konvertering.",answer_key:"Exempel: 1) Otydliga priser minskar tillit. 2) För många steg i flödet orsakar avhopp.",explanation:"Bra svar kopplar observerbart problem till testbar hypotes."},{id:"ux-4",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Svår",source_tier:"Community",estimated_minutes:4,prompt:"Tre designförslag höjer NPS men sänker task success. Vad bör teamet göra först?",options:[{id:"a",text:"Välj högst NPS direkt"},{id:"b",text:"Analysera konflikt mellan upplevd nöjdhet och faktisk användbarhet"},{id:"c",text:"Skippa mätdata"},{id:"d",text:"Lansera alla tre"}],answer_key:"b",explanation:"Måtten pekar åt olika håll; orsaksanalys krävs."},{id:"ux-5",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vilken data är mest användbar för att utvärdera en ny navigering?",options:[{id:"a",text:"Antal likes på sociala medier"},{id:"b",text:"Task success rate + tid till mål"},{id:"c",text:"Utvecklingstid"},{id:"d",text:"Färgpalettens trendighet"}],answer_key:"b",explanation:"Task success och tidsmått följer navigeringens effekt."},{id:"ux-7",track_id:"nackademin_ux",topic:"Informationsarkitektur",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad är det mest rimliga första steget när en tjänst känns otydlig och har många menyer?",options:[{id:"a",text:"Lägg till fler menyval för att täcka allt"},{id:"b",text:"Kartlägg användarnas viktigaste mål och gruppera innehållet efter toppuppgifter"},{id:"c",text:"Gör alla sidor lika långa"},{id:"d",text:"Byt namn på alla knappar samtidigt"}],answer_key:"b",explanation:"Informationsarkitektur börjar med användarens viktigaste uppgifter, inte med fler val."},{id:"ux-8",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:5,prompt:"Skriv en snabb testplan för en prototyp i tre punkter: vad du vill testa, vem du testar på och vad du letar efter.",answer_key:"Exempel: 1) Testa om användaren förstår flödet. 2) Testa med 3-5 personer från målgruppen. 3) Leta efter avbrott, tvekan och missförstånd.",explanation:"Bra svar är konkret, kort och kopplar testmål till observerbart beteende."},{id:"it-1",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilket lager i OSI-modellen hanterar IP-adressering?",options:[{id:"a",text:"Transport"},{id:"b",text:"Nätverk"},{id:"c",text:"Fysiskt"},{id:"d",text:"Session"}],answer_key:"b",explanation:"IP hör till nätverkslagret."},{id:"it-2",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad gör en brandvägg (firewall) främst?",options:[{id:"a",text:"Komprimerar filer"},{id:"b",text:"Filtrerar trafik enligt regler"},{id:"c",text:"Byter IP-klass"},{id:"d",text:"Skapar backup"}],answer_key:"b",explanation:"Brandväggar kontrollerar in/ut-trafik mot policy."},{id:"it-3",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Engelsk term: 'confidentiality' betyder närmast:",options:[{id:"a",text:"Tillgänglighet"},{id:"b",text:"Konfidentialitet"},{id:"c",text:"Felsökning"},{id:"d",text:"Skalbarhet"}],answer_key:"b",explanation:"CIA-triaden: confidentiality, integrity, availability."},{id:"it-4",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Förklara skillnaden mellan TCP och UDP med en mening vardera.",answer_key:"TCP är anslutningsorienterat och tillförlitligt. UDP är snabbare, utan garanti för leverans.",explanation:"Fokus på tillförlitlighet kontra hastighet/överhead."},{id:"it-5",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilket påstående om VPN är mest korrekt?",options:[{id:"a",text:"VPN krypterar aldrig trafik"},{id:"b",text:"VPN skapar en krypterad tunnel över osäkert nät"},{id:"c",text:"VPN ersätter alla säkerhetskontroller"},{id:"d",text:"VPN gör användaren anonym i alla situationer"}],answer_key:"b",explanation:"VPN minskar risk i transit men ersätter inte helhetsarbete."},{id:"it-7",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad används DNS främst till?",options:[{id:"a",text:"Att kryptera trafik mellan datorer"},{id:"b",text:"Att förvandla domännamn till IP-adresser"},{id:"c",text:"Att skapa brandväggsregler"},{id:"d",text:"Att komprimera webbsidor"}],answer_key:"b",explanation:"DNS översätter namn som exempel.se till IP-adresser som nätverket kan routa till."},{id:"it-8",track_id:"iths_itsec",topic:"Säkerhet och social engineering",format:"mcq",difficulty:"Medel",source_tier:"Community",estimated_minutes:3,prompt:"Vilket exempel är social engineering?",options:[{id:"a",text:"Att installera en uppdatering för operativsystemet"},{id:"b",text:"Att skicka ett falskt meddelande som försöker få någon att lämna ut lösenord"},{id:"c",text:"Att byta till starkare Wi-Fi-kryptering"},{id:"d",text:"Att dokumentera en routerkonfiguration"}],answer_key:"b",explanation:"Social engineering handlar om att manipulera människor, inte system."},{id:"prog-1",track_id:"prog1a",topic:"Variabler och datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken datatyp passar bäst för heltal i Java?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"double[]"}],answer_key:"a",explanation:"int används för heltalsvärden."},{id:"prog-2",track_id:"prog1a",topic:"Villkor",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken operator betyder 'lika med' i ett villkor?",options:[{id:"a",text:"="},{id:"b",text:"=="},{id:"c",text:":="},{id:"d",text:"=>"}],answer_key:"b",explanation:"`==` jämför värden; `=` tilldelar."},{id:"prog-3",track_id:"prog1a",topic:"Loopar",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vad skriver denna kod ut? for(int i=1;i<=3;i++){System.out.print(i);}",options:[{id:"a",text:"123"},{id:"b",text:"012"},{id:"c",text:"13"},{id:"d",text:"321"}],answer_key:"a",explanation:"i går från 1 till 3 inklusive."},{id:"prog-4",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv en metodsignatur i Java för att summera två heltal.",answer_key:"Exempel: static int sum(int a, int b)",explanation:"Metodnamn, returtyp och parametrar ska framgå."},{id:"prog-5",track_id:"prog1a",topic:"Felsökning",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilken buggrisk är störst här: int[] a = new int[3]; System.out.println(a[3]);",options:[{id:"a",text:"NullPointerException"},{id:"b",text:"ArrayIndexOutOfBoundsException"},{id:"c",text:"StackOverflowError"},{id:"d",text:"Ingen risk"}],answer_key:"b",explanation:"Index 3 ligger utanför giltiga index 0-2."},{id:"core-1",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Om 20% av 150 är korrekt beräknat, vilket svar är rätt?",options:[{id:"a",text:"20"},{id:"b",text:"25"},{id:"c",text:"30"},{id:"d",text:"35"}],answer_key:"c",explanation:"0,2 * 150 = 30."},{id:"ux-6",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:6,prompt:"Designa en ny returhantering för IKEA där kunden kan boka upphämtning via appen. Beskriv kort: målgrupp, enkel wireframe-idé och motivering.",answer_key:"Exempel: målgrupp = kunder med stora varor; wireframe = välj order, välj tidsfönster, bekräfta; motivering = minskar friktion och supportärenden.",explanation:"Bedöm på struktur: målgrupp -> lösning -> motivering. Det finns inget enda facit."},{id:"it-6",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"På vilket OSI-lager verkar en router?",options:[{id:"a",text:"Lager 2 - Datalänk"},{id:"b",text:"Lager 3 - Nätverk"},{id:"c",text:"Lager 4 - Transport"},{id:"d",text:"Lager 7 - Applikation"}],answer_key:"b",explanation:"Routrar routar IP-trafik på lager 3."},{id:"prog-6",track_id:"prog1a",topic:"Datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken datatyp är bäst för att lagra true/false?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"float"}],answer_key:"c",explanation:"boolean lagrar sant/falskt-värden."},{id:"prog-7",track_id:"prog1a",topic:"Code tracing",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vad blir värdet på x?
let x = 2;
for (let i = 0; i < 3; i++) { x = x + i; }`,options:[{id:"a",text:"3"},{id:"b",text:"4"},{id:"c",text:"5"},{id:"d",text:"6"}],answer_key:"c",explanation:"x blir 2+0+1+2 = 5."},{id:"prog-8",track_id:"prog1a",topic:"Debugging-game",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vilket fel är tydligast i denna kod?
for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }`,options:[{id:"a",text:"Fel variabelnamn i loggen"},{id:"b",text:"Loopvillkoret bör vara i < arr.length"},{id:"c",text:"for-loop kan inte användas med arrayer"},{id:"d",text:"console.log kräver string"}],answer_key:"b",explanation:"i <= arr.length går ett steg för långt och ger undefined sista varvet."},{id:"prog-9",track_id:"prog1a",topic:"Villkor och logik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:`Vad skrivs ut?
int score = 7;
if (score >= 5) {
  System.out.print("Godkänd");
} else {
  System.out.print("Underkänd");
}`,options:[{id:"a",text:"Godkänd"},{id:"b",text:"Underkänd"},{id:"c",text:"5"},{id:"d",text:"Inget skrivs ut"}],answer_key:"a",explanation:"7 är större än eller lika med 5, så första grenen körs."},{id:"prog-10",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:5,prompt:"Förklara kort vad en metod gör i Java och ge ett enkelt exempel på vad den kan användas till.",answer_key:"En metod samlar kod som kan återanvändas. Exempel: en method som tar emot två tal och returnerar summan.",explanation:"Svar ska visa förståelse för återanvändning, input/return och ett konkret användningsfall."}],I=[{id:"mock-nack-60",name:"Nackademin-liknande 60 min",track_id:"nackademin_ux",total_minutes:60,sections:[{title:"Analys & logik",track_id:"nackademin_ux",topics:["Logik/analys","Problemlösning","Teststrategi","Scenario-övning"],question_ids:["ux-1","ux-2","ux-3","ux-4","ux-5","ux-6"],minutes:60,weight:1}],scoring_rules:"Poäng per korrekt svar. Korta svar bedöms mot modellförslag."},{id:"mock-iths-90",name:"IT-H Del 1+2 (90 min)",track_id:"iths_itsec",total_minutes:90,sections:[{title:"Del 1: Svenska/Engelska/Matte",track_id:"iths_itsec",topics:["Svenska/Engelska/Matte"],question_ids:["it-3","core-1"],minutes:20,weight:.2},{title:"Del 2: Dator- och nätverksteknik",track_id:"iths_itsec",topics:["Dator- och nätverksteknik"],question_ids:["it-1","it-2","it-4","it-5","it-6"],minutes:70,weight:.8}],scoring_rules:"Separat delpoäng, total viktad poäng enligt 20/80."},{id:"mock-prog-45",name:"Programmering 1/A delprov (45 min)",track_id:"prog1a",total_minutes:45,sections:[{title:"Del 1: Grunder",track_id:"prog1a",topics:["Variabler och datatyper","Villkor"],question_ids:["prog-1","prog-2","prog-6"],minutes:15,weight:.33},{title:"Del 2: Flöde och läsning",track_id:"prog1a",topics:["Loopar","Code tracing"],question_ids:["prog-3","prog-7","prog-9"],minutes:15,weight:.33},{title:"Del 3: Metoder och felsökning",track_id:"prog1a",topics:["Metoder","Felsökning","Debugging-game"],question_ids:["prog-4","prog-5","prog-8","prog-10"],minutes:15,weight:.34}],scoring_rules:"Separat poäng per del, fokus på grunder först och tydlig återkoppling på feltyper."}],L=[{id:"ev-nack-1",provider:"Nackademin",url:"https://nackademin.se/antagning/urval-och-antagningsprov/",claim:"Urvalet omfattar antagningsprov med fokus på analys- och problemlösningsförmåga.",confidence:"Hög",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-nack-2",provider:"Nackademin (EN)",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Den engelska antagningssidan bekräftar att provet används för att bedöma lämplighet och förmåga att hantera programmens upplägg.",confidence:"Medel",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-iths-1",provider:"IT-Högskolan",url:"https://www.iths.se/antagningsprovet/",claim:"Antagningsprovet består av två delar: allmän del och programspecifik del.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-3",provider:"IT-Högskolan (FAQ/antagning)",url:"https://www.iths.se/vanliga-fragor/",claim:"IT-Högskolan hänvisar till att antagning och förberedande material kan variera, vilket gör det rimligt att träna både allmän del och programspecifik del separat.",confidence:"Medel",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-2",provider:"IT-Högskolan",url:"https://www.iths.se/utbildningar/preparandkurs/",claim:"Förkunskapsspåret för IT-säkerhet lyfter dator- och nätverksteknik.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-prog-1",provider:"Linköpings kommun (Komvux-info)",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i programmering brukar innehålla praktiska moment, teori och uppgifter i flera delar.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-prog-2",provider:"Komvux/exempel på prövning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i gymnasiala kurser brukar kombinera teori med praktiska uppgifter, vilket passar ett programmeringsspår med både kunskapstest och kodläsning.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-community-1",provider:"Community-sammanställning",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Tidigare sökande beskriver tidsbrist som huvudutmaning; träningsmönster fokuserar därför på tidsatta övningar.",confidence:"Låg",source_tier:"Community",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-community-2",provider:"Community-sammanställning",url:"https://www.iths.se/antagningsprovet/",claim:"Tidigare sökande beskriver att del 1 ofta känns bred och att del 2 kräver fokus på nätverk, säkerhet och begrepp som brukar återkomma.",confidence:"Låg",source_tier:"Community",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-community-3",provider:"Community-sammanställning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"I programmeringsprövningar återkommer ofta uppgifter om variabler, villkor, loopar och felsökning snarare än enbart teori.",confidence:"Låg",source_tier:"Community",track_id:"prog1a",last_verified_date:"2026-04-03"}],et=30,it=45,yt=1440*60*1e3,C=new Date(2026,3,7,9,0,0);function rt(e,t,i){return Math.min(i,Math.max(t,e))}function N(e){return e.reduce((t,i)=>t+i.minutes,0)}function E(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}function xt(e=C){return new Intl.DateTimeFormat("sv-SE",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}function at(e=new Date,t=C){return Math.round((E(t)-E(e))/yt)}function St(e=new Date,t=C){const i=at(e,t);return i<0?"Första provet är genomfört":i===0?"D-0 idag":`D-${i}`}function st(e){const t=N(e);if(t>=et&&t<=it)return e;const i=rt(t,et,it),r=i/Math.max(t,1),n=e.map(o=>({...o,minutes:Math.max(3,Math.round(o.minutes*r))})),a=rt(i-N(n),-5,5);return a!==0&&(n[0]={...n[0],minutes:Math.max(3,n[0].minutes+a)}),n}function ot(e=new Date,t=C){return E(e)<=E(t)?"A":"B"}function $t(e){const t=at(e);return`Sprint A (${t<=0?"D-0: provdag":`D-${t} till D-0`}): Nackademin-prioritet`}function wt(){return st([{trackId:"nackademin_ux",topic:"Analys + problemlösning",minutes:25,mode:"Drill"},{trackId:"prog1a",topic:"Programmeringsgrunder (variabler/villkor/loopar)",minutes:7,mode:"Lär"},{trackId:"iths_itsec",topic:"Snabb engelska/matte-rep",minutes:3,mode:"Drill"}])}function It(){return st([{trackId:"iths_itsec",topic:"Dator- och nätverksteknik",minutes:24,mode:"Drill"},{trackId:"prog1a",topic:"Kodövning + felsökning",minutes:10,mode:"Drill"},{trackId:"nackademin_ux",topic:"Teststrategi och tidsdisciplin",minutes:6,mode:"Lär"}])}function F(e=new Date){const t=ot(e),i=t==="A"?wt():It();return{sprint:t,title:t==="A"?$t(e):"Sprint B (efter första provet): IT-H-prioritet",totalMinutes:N(i),blocks:i}}function Mt(e){const t=N(e)||1,i={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)i[r.trackId]+=r.minutes;return{nackademin_ux:Math.round(i.nackademin_ux/t*100),iths_itsec:Math.round(i.iths_itsec/t*100),prog1a:Math.round(i.prog1a/t*100)}}function lt(e=new Date){return ot(e)==="A"?{id:"mock-nack-60",label:"Nackademin-liknande 60 min",minutes:60}:{id:"mock-iths-90",label:"IT-H Del 1+2 (90 min)",minutes:90}}function ct(e,t){return e.filter(i=>!(t.trackId!=="all"&&i.track_id!==t.trackId||t.topic!=="all"&&i.topic!==t.topic||t.difficulty!=="all"&&i.difficulty!==t.difficulty||t.sourceTier!=="all"&&i.source_tier!==t.sourceTier))}function M(e){const t=e.reduce((i,r)=>i+r.estimated_minutes,0);return Math.min(45,Math.max(15,t))}function H(e,t){let i=0;const r=new Map;for(const s of e){const c=(t[s.id]||"").trim().toLowerCase(),g=s.answer_key.trim().toLowerCase();if(s.format==="mcq"?c===g:c.length>0&&g.includes(c.slice(0,8))){i+=1;continue}r.set(s.topic,(r.get(s.topic)||0)+1)}const n=e.length,a=n>0?Math.round(i/n*100):0,o=[...r.entries()].sort((s,c)=>c[1]-s[1]).map(([s])=>s).slice(0,3);return{correct:i,total:n,scorePercent:a,weakTopics:o}}const X="yh.study-sessions",D="yh.active-session",Pt=1;let O="default";function dt(e,t){if(!e)return t;try{return JSON.parse(e)}catch{return t}}function _(e){return`${e}.${O}`}function Tt(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"default"}function ut(e){return O=Tt(e),O}function Dt(){return O}function G(){return dt(localStorage.getItem(_(X)),[])}function At(e){const t=G();t.unshift(e),localStorage.setItem(_(X),JSON.stringify(t.slice(0,100)))}function V(){return dt(localStorage.getItem(_(D)),null)}function P(e){localStorage.setItem(_(D),JSON.stringify(e))}function pt(){localStorage.removeItem(_(D))}function Lt(){return{version:Pt,exportedAt:new Date().toISOString(),studySessions:G(),activeSession:V()}}function Nt(e){const t=Array.isArray(e.studySessions)?e.studySessions.slice(0,100):[];localStorage.setItem(_(X),JSON.stringify(t));const i=!!e.activeSession&&typeof e.activeSession=="object";return i?localStorage.setItem(_(D),JSON.stringify(e.activeSession)):localStorage.removeItem(_(D)),{importedSessions:t.length,restoredActiveSession:i}}const mt=document.querySelector("#app");if(!mt)throw new Error("App container saknas");const q=mt,Et={overview:"Översikt",tracks:"Spår",bank:"Frågebank",mock:"Mockprov",research:"Research",logic:"Logik"},Q="yh.current-user-id",Ot="yh.study-profile";function U(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"gäst"}function jt(){const e=localStorage.getItem(Q)||"gäst",t=U(e);return localStorage.setItem(Q,t),t}function Ct(e){const t=U(e);return localStorage.setItem(Q,t),t}function Ft(){return`user-${Math.random().toString(36).slice(2,7)}`}function gt(e){return`${Ot}.${U(e)}`}let y="overview",f={trackId:"all",topic:"all",difficulty:"all",sourceTier:"all"},S=jt();ut(S);let T=S,z=lt().id,l=V(),m=null,v=null,W=navigator.onLine,j="",ft="Designa en digital tjänst för IKEA som löser problemet: kunden vill boka upphämtning av returvaror.";const w={sessionPreference:[{id:"30",label:"30 min fokuspass (rekommenderat nu)"},{id:"45",label:"45 min standardpass"},{id:"60",label:"60 min när jag har energi"}],blocker:[{id:"time",label:"Tidsstress i prov"},{id:"logic",label:"Logik och resonemang"},{id:"network",label:"IT/nätverkstermer"},{id:"coding",label:"Kodförståelse/felsökning"},{id:"other",label:"Annat (skriv i fritext)"}],confidence:[{id:"low",label:"Låg - behöver tydlig guidning"},{id:"mid",label:"Medel - behöver mest träning"},{id:"high",label:"Hög - vill främst ha tidsprov"}],targetPriority:[{id:"nack",label:"Nackademin UX (akut)"},{id:"iths",label:"IT-H IT-säkerhet"},{id:"prog",label:"Programmering 1/A"}]};let p=ht();function A(e){return J.find(t=>t.id===e)?.name||e}function R(e){return`track-${e}`}function Vt(e){const t=Math.max(0,Math.floor(e/1e3)),i=Math.floor(t/60).toString().padStart(2,"0"),r=(t%60).toString().padStart(2,"0");return`${i}:${r}`}function kt(e){return e.questionIds.map(t=>k.find(i=>i.id===t)).filter(Boolean)}function qt(e){return e.reduce((t,i)=>t+i.duration_minutes,0)}function Ut(e){const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)t.nackademin_ux+=r.track_mix.nackademin_ux||0,t.iths_itsec+=r.track_mix.iths_itsec||0,t.prog1a+=r.track_mix.prog1a||0;const i=Math.max(1,e.length);return{nackademin_ux:Math.round(t.nackademin_ux/i),iths_itsec:Math.round(t.iths_itsec/i),prog1a:Math.round(t.prog1a/i)}}function vt(){return k.filter(e=>["Logik/analys","Svenska/Engelska/Matte","Code tracing","Debugging-game"].includes(e.topic))}function Rt(){const e=["IKEA","1177","SJ","Skatteverket","Foodora"],t=["användaren hittar inte status på sitt ärende","för många steg gör att användaren avbryter","det är otydligt vad som händer efter beställning","returer och ombokningar upplevs krångliga","supporten får för många repetitiva frågor"],i=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)];return`Designa en digital tjänst för ${i} som löser problemet: ${r}.`}function B(){return{sessionPreference:"30",blocker:"time",confidence:"mid",targetPriority:"nack",notes:""}}function ht(e=S){try{const t=localStorage.getItem(gt(e));if(!t)return B();const i=JSON.parse(t);return{...B(),...i}}catch{return B()}}function Bt(e,t=S){localStorage.setItem(gt(t),JSON.stringify(e))}function Kt(e,t,i){const r=H(t,i);if(!e)return{sectionResults:[],finalScore:r.scorePercent};const n=I.find(c=>c.id===e);if(!n)return{sectionResults:[],finalScore:r.scorePercent};const a=n.sections.map(c=>{const g=t.filter($=>c.question_ids.includes($.id)),h=H(g,i);return{title:c.title,scorePercent:h.scorePercent,correct:h.correct,total:h.total,weight:c.weight}}),o=a.reduce((c,g)=>c+g.weight,0)||1,s=a.reduce((c,g)=>c+g.scorePercent*(g.weight/o),0);return{templateName:n.name,sectionResults:a,finalScore:Math.round(s)}}function K(e,t){return w[e].find(i=>i.id===t)?.label||t}function Y(e){return e==="iths"?"iths_itsec":e==="prog"?"prog1a":"nackademin_ux"}function Ht(e){if(e==="logic"){y="logic",u();return}y="bank",f={trackId:e==="ux"?"nackademin_ux":e==="it"?"iths_itsec":"prog1a",topic:"all",difficulty:"all",sourceTier:"all"},u()}function _t(){const e=F(),t=[],i=Y(p.targetPriority),n={time:["Logik/analys","Problemlösning","Svenska/Engelska/Matte"],logic:["Logik/analys","Code tracing","Debugging-game"],network:["Dator- och nätverksteknik","Säkerhet och social engineering"],coding:["Loopar","Metoder","Felsökning","Code tracing","Debugging-game"],other:[]}[p.blocker]||[];for(const o of e.blocks){const s=k.filter(h=>h.track_id===o.trackId),c=o.minutes>=20?4:o.minutes>=10?3:2,g=s.slice(0,c);for(const h of g)t.find($=>$.id===h.id)||t.push(h)}const a=k.filter(o=>o.track_id===i);for(const o of a)if(t.find(s=>s.id===o.id)||t.unshift(o),t.length>=12)break;if(n.length>0){const o=k.filter(s=>n.includes(s.topic));for(const s of o)if(t.find(c=>c.id===s.id)||t.push(s),t.length>=12)break}if(t.length<8){for(const o of k)if(t.find(s=>s.id===o.id)||t.push(o),t.length>=8)break}return t.slice(0,12)}function x(e){j=e,u(),window.setTimeout(()=>{j="",u()},3500)}function Qt(){const e=Lt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a"),n=new Date().toISOString().replace(/[:.]/g,"-");r.href=i,r.download=`yh-prep-backup-${n}.json`,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(i),x("Backup exporterat.")}async function Jt(e){try{const t=await e.text(),i=JSON.parse(t),r=Nt(i);l=V(),x(`Import klar: ${r.importedSessions} pass, aktiv session ${r.restoredActiveSession?"återställd":"saknas"}.`)}catch{x("Import misslyckades. Kontrollera att filen är en giltig backup.")}}function Xt(){if(!("serviceWorker"in navigator))return;if(window.location.hostname.endsWith("github.io")){navigator.serviceWorker.getRegistrations().then(t=>Promise.all(t.map(i=>i.unregister()))).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(i=>caches.delete(i)))).catch(()=>{});return}navigator.serviceWorker.register("sw.js").catch(()=>{x("Kunde inte aktivera offline-läge.")})}function Z(){v&&(window.clearInterval(v),v=null),l&&(v=window.setInterval(()=>{if(l){if(Date.now()>=l.endsAt){tt(!0);return}u()}},1e3))}function Gt(e){if(e.length===0)return{nackademin_ux:0,iths_itsec:0,prog1a:0};const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)t[i.track_id]+=1;return{nackademin_ux:Math.round(t.nackademin_ux/e.length*100),iths_itsec:Math.round(t.iths_itsec/e.length*100),prog1a:Math.round(t.prog1a/e.length*100)}}function b(e,t,i,r){t.length!==0&&(l={id:crypto.randomUUID(),mode:e,startedAt:Date.now(),endsAt:Date.now()+i*6e4,questionIds:t,currentIndex:0,answers:{},templateId:r},P(l),Z(),u())}function tt(e=!1){if(!l)return;const t=kt(l),i=H(t,l.answers),r=Kt(l.templateId,t,l.answers),n=Gt(t),a=Math.max(1,Math.round((Date.now()-l.startedAt)/6e4));At({id:l.id,date:new Date().toISOString(),duration_minutes:a,mode:l.mode,track_mix:n,score:r.finalScore,weak_topics:i.weakTopics}),m={mode:l.mode,scorePercent:r.finalScore,correct:i.correct,total:i.total,weakTopics:i.weakTopics,autoSubmitted:e,sectionResults:r.sectionResults,templateName:r.templateName},l=null,pt(),v&&(window.clearInterval(v),v=null),u()}function zt(){l=null,pt(),v&&(window.clearInterval(v),v=null),u()}function nt(){const e=G(),t=F(),i=Mt(t.blocks),r=Ut(e),n=St(),a=xt(),o=lt(),s=_t(),c=Y(p.targetPriority),g=A(c),h=Number.parseInt(p.sessionPreference,10)||t.totalMinutes,$=K("blocker",p.blocker),bt=Dt();return`
    <div class="grid overview-grid">
      <section class="card critical-card span-12">
        <h3>Snabbstart idag</h3>
        <p class="muted">Status: ${W?"Online":"Offline"} • ${t.totalMinutes} min</p>
        <div class="critical-kpis">
          <p><strong>Prov:</strong> ${n}</p>
          <p><strong>Nästa mock:</strong> ${o.minutes} min</p>
        </div>
        <p class="muted">Prioriterat nu: ${g} • Passmål: ${h} min • Fokus: ${$}</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-today-drill">Starta dagens pass</button>
          <button class="secondary" data-action="jump-mock">Mockprov</button>
          <button class="secondary" data-action="start-priority-learn">Lär i prioriterat spår</button>
          <button class="secondary" data-action="open-python-course">Python-kurs</button>
        </div>
      </section>

      <section class="card span-6">
        <details>
          <summary>Användare och progress</summary>
          <p class="muted">Byt user id för separat progress per person på samma app.</p>
          <div class="inline-controls">
            <label for="user-id-input">User id</label>
            <input id="user-id-input" data-user-id="draft" value="${T}" placeholder="t.ex. martin, sara, klass-a" />
            <button class="secondary" data-action="generate-user-id">Skapa nytt id</button>
            <button class="primary" data-action="switch-user-id">Byt användare</button>
          </div>
          <p class="muted">Aktiv användare: <strong>${S}</strong> • Storage: ${bt}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>2-min intervju (för personlig plan)</summary>
          <p class="muted">Flervalsfrågor med fritext för "Annat". Svaren styr rekommenderad träning i appen.</p>
          <div class="inline-controls">
            <label for="profile-sessionPreference">Passlängd</label>
            <select id="profile-sessionPreference" data-profile="sessionPreference">
              ${w.sessionPreference.map(d=>`<option value="${d.id}" ${p.sessionPreference===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-blocker">Största hinder</label>
            <select id="profile-blocker" data-profile="blocker">
              ${w.blocker.map(d=>`<option value="${d.id}" ${p.blocker===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-confidence">Nuvarande nivå</label>
            <select id="profile-confidence" data-profile="confidence">
              ${w.confidence.map(d=>`<option value="${d.id}" ${p.confidence===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-targetPriority">Primärt mål</label>
            <select id="profile-targetPriority" data-profile="targetPriority">
              ${w.targetPriority.map(d=>`<option value="${d.id}" ${p.targetPriority===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-notes">Annat du vill att planen tar hänsyn till</label>
            <textarea id="profile-notes" data-profile="notes" rows="3" placeholder="Skriv fritt här (valfritt)">${p.notes}</textarea>
            <button class="primary" data-action="save-profile">Spara intervju</button>
          </div>
          <p class="muted">Valt just nu: ${K("sessionPreference",p.sessionPreference)} • ${K("blocker",p.blocker)}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa dagens plan (${t.blocks.length} block)</summary>
          <p class="muted">${t.title}</p>
          <ol class="list-clean">
            ${t.blocks.map(d=>`<li><span class="track-pill ${R(d.trackId)}">${A(d.trackId)}</span> ${d.topic} (${d.minutes} min)</li>`).join("")}
          </ol>
          <p class="muted">Fördelning: UX ${i.nackademin_ux}% • IT-H ${i.iths_itsec}% • Prog1/A ${i.prog1a}%</p>
          <p class="muted">Frågor i dagens pass: ${s.length}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa progression</summary>
          <p><span class="track-pill track-nackademin_ux">UX</span> ${r.nackademin_ux}%</p>
          <div class="progress"><div style="width:${r.nackademin_ux}%"></div></div>
          <p><span class="track-pill track-iths_itsec">IT</span> ${r.iths_itsec}%</p>
          <div class="progress"><div style="width:${r.iths_itsec}%"></div></div>
          <p><span class="track-pill track-prog1a">Prog</span> ${r.prog1a}%</p>
          <div class="progress"><div style="width:${r.prog1a}%"></div></div>
          <p><span class="track-pill">Logik</span> ${Math.round((r.nackademin_ux+r.iths_itsec)/2)}%</p>
          <div class="progress"><div style="width:${Math.round((r.nackademin_ux+r.iths_itsec)/2)}%"></div></div>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa provdetaljer och backup</summary>
          <p><strong>Första provdatum:</strong> ${a}</p>
          <p><strong>Genomförd tid:</strong> ${qt(e)} min (${e.length} pass)</p>
          <div class="inline-controls">
            <button class="secondary" data-action="export-progress">Exportera backup</button>
            <input type="file" accept="application/json" data-input="import-progress" />
          </div>
          ${j?`<p class="success">${j}</p>`:""}
        </details>
      </section>
    </div>
  `}function Wt(){const e=["Logik/analys","Mattebas","Teststrategi","Programmeringsgrunder"];return`
    <div class="grid">
      ${J.map(t=>`
          <section class="card span-4">
            <h3>${t.name}</h3>
            <p class="muted">Mål: ${t.goal_exam}</p>
            <p>Språk: ${t.language_mode==="sv"?"Svenska":"Svenska + English terms"}</p>
            <p><strong>Gemensam kärna:</strong> ${e.join(" • ")}</p>
            <div class="inline-controls">
              <button class="primary" data-action="start-track-learn" data-track="${t.id}">Starta Lär</button>
              <button class="secondary" data-action="start-track-drill" data-track="${t.id}">Starta Drill</button>
              ${t.id==="prog1a"?'<button class="secondary" data-action="open-python-course">Öppna Python-minikurs</button>':""}
            </div>
          </section>
        `).join("")}
      <section class="card span-12">
        <h3>UX scenario-generator</h3>
        <p>${ft}</p>
        <p class="muted">
          Workflow: 1) Målgruppsanalys → 2) Enkel wireframe-idé (text/skiss) → 3) Motivering.
        </p>
        <button class="primary" data-action="generate-ux-case">Generera nytt case</button>
      </section>
    </div>
  `}function Yt(){const e=ct(k,f),t=Array.from(new Set(k.map(i=>i.topic))).sort();return`
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
            <option value="all" ${f.trackId==="all"?"selected":""}>Alla spår</option>
            ${J.map(i=>`<option value="${i.id}" ${f.trackId===i.id?"selected":""}>${i.name}</option>`).join("")}
          </select>

          <select data-filter="topic">
            <option value="all" ${f.topic==="all"?"selected":""}>Alla ämnen</option>
            ${t.map(i=>`<option value="${i}" ${f.topic===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <select data-filter="difficulty">
            <option value="all" ${f.difficulty==="all"?"selected":""}>Alla nivåer</option>
            ${["Lätt","Medel","Svår"].map(i=>`<option value="${i}" ${f.difficulty===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <select data-filter="sourceTier">
            <option value="all" ${f.sourceTier==="all"?"selected":""}>Alla källnivåer</option>
            ${["Officiell","Sekundär","Community"].map(i=>`<option value="${i}" ${f.sourceTier===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <button class="primary" data-action="start-drill">Starta Drill (${M(e)} min)</button>
        </div>
        <p class="muted">${e.length} frågor matchar filter.</p>
      </section>

      ${e.map(i=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${R(i.track_id)}">${A(i.track_id)}</span>
                <span class="research-tag">${i.difficulty}</span>
                <span class="research-tag">${i.source_tier}</span>
              </p>
              <p><strong>${i.topic}</strong></p>
              <p>${i.prompt}</p>
              <details>
                <summary>Visa facit + förklaring</summary>
                <p><strong>Svar:</strong> ${i.answer_key}</p>
                <p>${i.explanation}</p>
              </details>
            </article>
          `).join("")}
    </div>
  `}function Zt(){const e=I.find(i=>i.id===z)||I[0],t=e.sections.reduce((i,r)=>i+r.question_ids.length,0);return`
    <div class="grid">
      <section class="card span-12">
        <h3>Mockprov (tidsprov)</h3>
        <div class="inline-controls">
          <select data-mock-select="true">
            ${I.map(i=>`<option value="${i.id}" ${i.id===e.id?"selected":""}>${i.name}</option>`).join("")}
          </select>
          <button class="primary" data-action="start-mock">Starta ${e.total_minutes} min</button>
        </div>
        <p class="muted">${t} frågor i detta mockprov.</p>
        <p class="muted">Poängregel: ${e.scoring_rules}</p>
      </section>

      ${e.sections.map(i=>`
            <section class="card span-6">
              <h3>${i.title}</h3>
              <p><span class="track-pill ${R(i.track_id)}">${A(i.track_id)}</span></p>
              <p>Tid: ${i.minutes} min • Vikt: ${Math.round(i.weight*100)}%</p>
              <p>Ämnen: ${i.topics.join(" • ")}</p>
              <p class="muted">Frågor: ${i.question_ids.join(", ")}</p>
            </section>
          `).join("")}
    </div>
  `}function te(){const e=L.filter(r=>r.source_tier==="Officiell").length,t=L.filter(r=>r.source_tier==="Community").length,i=L.filter(r=>r.source_tier==="Sekundär").length;return`
    <div class="grid">
      <section class="card span-12">
        <h3>Evidence-kort: tidigare års prov och mönster</h3>
        <p class="muted">Officiell: ${e} • Sekundär: ${i} • Community: ${t}</p>
      </section>
      ${L.map(r=>`
          <article class="card span-6">
            <p>
              <span class="research-tag">${r.source_tier}</span>
              <span class="research-tag">Tillförlitlighet: ${r.confidence}</span>
              <span class="research-tag">${r.source_tier==="Officiell"?"Bekräftat":"Antagande"}</span>
            </p>
            <h3>${r.provider}</h3>
            <p>${r.claim}</p>
            <p class="muted">Verifierad: ${r.last_verified_date}</p>
            <a href="${r.url}" target="_blank" rel="noreferrer">Öppna källa</a>
          </article>
        `).join("")}
    </div>
  `}function ee(){const e=vt();return`
    <div class="grid">
      <section class="card span-12">
        <h3>Logik-flik</h3>
        <p class="muted">Inspirerad av Gemini-planens dashboard med egen logikmodul.</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-logic-drill">
            Starta logik-drill (${M(e)} min)
          </button>
          <button class="secondary" data-action="quick-tab" data-tab="ux">Till UX</button>
          <button class="secondary" data-action="quick-tab" data-tab="it">Till IT</button>
          <button class="secondary" data-action="quick-tab" data-tab="prog">Till Prog</button>
        </div>
      </section>
      ${e.map(t=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${R(t.track_id)}">${A(t.track_id)}</span>
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
  `}function ie(){if(!l)return"";const e=kt(l),t=e[l.currentIndex];if(!t)return"";const i=l.endsAt-Date.now(),r=Object.keys(l.answers).length,n=l.answers[t.id]||"";return`
    <section class="card session">
      <h3>Aktiv ${l.mode}</h3>
      <p class="session-timer ${i<5*6e4?"warning":""}">Tid kvar: ${Vt(i)}</p>
      <p class="muted">Autosparning: aktiv • ${r}/${e.length} besvarade</p>
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
  `}function re(){if(!m)return"";const e=m.sectionResults.length===0?"":`
        <p><strong>Sektionsrapport:</strong></p>
        <ul class="list-clean">
          ${m.sectionResults.map(t=>`<li>${t.title}: ${t.correct}/${t.total} (${t.scorePercent}%) • Vikt ${Math.round(t.weight*100)}%</li>`).join("")}
        </ul>
      `;return`
    <section class="card">
      <h3 class="success">Senaste resultat: ${m.scorePercent}%</h3>
      <p>${m.mode} • ${m.correct}/${m.total} rätt ${m.autoSubmitted?"(autosubmit vid timeout)":""}</p>
      ${m.templateName?`<p class="muted">Mall: ${m.templateName}</p>`:""}
      ${e}
      <p><strong>Svaga områden:</strong> ${m.weakTopics.length>0?m.weakTopics.join(" • "):"Inga tydliga svagheter"}</p>
    </section>
  `}function ne(){switch(y){case"overview":return nt();case"tracks":return Wt();case"bank":return Yt();case"mock":return Zt();case"research":return te();case"logic":return ee();default:return nt()}}function u(){const e=F();q.innerHTML=`
    <div class="app">
      <header class="hero">
        <div class="hero-top">
          <div>
            <h1>YH Prep Lab</h1>
            <p>Träna inför Nackademin UX, IT-H IT-säkerhet och Programmering 1/A.</p>
          </div>
          <span class="badge">${e.sprint==="A"?"Sprint A: Nackademin först":"Sprint B: IT-H fokus"}</span>
        </div>

        <nav class="nav">
          ${Object.entries(Et).map(([t,i])=>`<button data-view="${t}" class="${y===t?"active":""}">${i}</button>`).join("")}
        </nav>
      </header>

      <main>
        ${ie()}
        ${re()}
        ${ne()}
      </main>
    </div>
  `}q.addEventListener("click",e=>{const t=e.target,i=t.closest("button[data-view]");if(i){y=i.dataset.view,u();return}const r=t.closest("[data-action]");if(!r)return;const n=r.dataset.action;if(n){if(n==="jump-mock"){y="mock",u();return}if(n==="export-progress"){Qt();return}if(n==="start-today-drill"){const a=_t(),o=F(),s=Number.parseInt(p.sessionPreference,10);b("Drill",a.map(c=>c.id),Number.isNaN(s)?o.totalMinutes:Math.max(30,Math.min(45,s)));return}if(n==="start-priority-learn"){const a=Y(p.targetPriority),o=k.filter(s=>s.track_id===a).slice(0,6);b("Lär",o.map(s=>s.id),20);return}if(n==="quick-tab"){const a=r.dataset.tab;a&&Ht(a);return}if(n==="generate-ux-case"){ft=Rt(),u();return}if(n==="start-logic-drill"){const a=vt();b("Drill",a.slice(0,12).map(o=>o.id),M(a));return}if(n==="start-track-drill"){const a=r.dataset.track,o=k.filter(s=>s.track_id===a).slice(0,8).map(s=>s.id);b("Drill",o,M(k.filter(s=>o.includes(s.id))));return}if(n==="start-track-learn"){const a=r.dataset.track,o=k.filter(s=>s.track_id===a).slice(0,6).map(s=>s.id);b("Lär",o,20);return}if(n==="open-python-course"){window.open("python-minikurs.html","_blank","noopener,noreferrer");return}if(n==="start-drill"){const a=ct(k,f);b("Drill",a.slice(0,12).map(o=>o.id),M(a));return}if(n==="start-mock"){const a=I.find(s=>s.id===z);if(!a)return;const o=a.sections.flatMap(s=>s.question_ids);b("Tidsprov",o,a.total_minutes,a.id);return}if(n==="save-profile"){Bt(p),x("Intervju sparad. Rekommenderad plan uppdaterad.");return}if(n==="generate-user-id"){T=Ft(),u();return}if(n==="switch-user-id"){const a=Ct(T);S=a,T=a,ut(a),l=V(),p=ht(a),m=null,v&&(window.clearInterval(v),v=null),Z(),x(`Bytt till användare: ${a}`);return}if(l){if(n==="prev-q"){l.currentIndex=Math.max(0,l.currentIndex-1),P(l),u();return}if(n==="next-q"){l.currentIndex=Math.min(l.questionIds.length-1,l.currentIndex+1),P(l),u();return}if(n==="submit-session"){tt(!1);return}if(n==="cancel-session"){zt();return}if(n==="answer"){const a=t,o=a.dataset.qid;if(!o)return;l.answers[o]=a.value,P(l),u()}}}});q.addEventListener("input",e=>{const t=e.target,i=t.closest("input[data-user-id='draft']");if(i){T=U(i.value);return}const r=t.closest("[data-profile]");if(r){const s=r.dataset.profile;s&&(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement)&&(p={...p,[s]:t.value});return}const n=t.closest("textarea[data-action='answer-text']");if(n&&l){const s=n.dataset.qid;s&&(l.answers[s]=n.value,P(l));return}const a=t.closest("select[data-filter]");if(a){const s=a.dataset.filter;f={...f,[s]:a.value},u();return}const o=t.closest("select[data-mock-select='true']");o&&(z=o.value,u())});q.addEventListener("change",e=>{const i=e.target.closest("input[data-input='import-progress']");if(!i||!i.files||i.files.length===0)return;const[r]=i.files;Jt(r),i.value=""});window.addEventListener("online",()=>{W=!0,u()});window.addEventListener("offline",()=>{W=!1,u()});Xt();l&&Date.now()>=l.endsAt?tt(!0):(Z(),u());
