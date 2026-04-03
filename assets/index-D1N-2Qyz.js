(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const C=[{id:"nackademin_ux",name:"Nackademin UX",goal_exam:"Antagningsprov (analys + problemlösning)",weight:70,language_mode:"sv"},{id:"iths_itsec",name:"IT-Högskolan IT-säkerhet",goal_exam:"Antagningsprov Del 1 + Del 2",weight:60,language_mode:"sv-en"},{id:"prog1a",name:"Programmering 1/A-prövning",goal_exam:"Prövning/validering",weight:25,language_mode:"sv-en"}],f=[{id:"ux-1",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"En app tappar 40% användare i steg 2 av onboarding. Vilket första steg är mest UX-rimligt?",options:[{id:"a",text:"Lägg till fler funktioner i steg 1"},{id:"b",text:"Mät varför avhopp sker med funnel + kort användartest"},{id:"c",text:"Byt färgtema"},{id:"d",text:"Skippa onboarding helt"}],answer_key:"b",explanation:"Börja med evidens. Mätning och snabb testning ger orsak innan lösning."},{id:"ux-2",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken prioritering är mest rimlig i en MVP?",options:[{id:"a",text:"Must-have före nice-to-have"},{id:"b",text:"Bygg allt samtidigt"},{id:"c",text:"Fokusera på animationer"},{id:"d",text:"Ingen prioritering behövs"}],answer_key:"a",explanation:"MVP fokuserar på kärnnytta först."},{id:"ux-3",track_id:"nackademin_ux",topic:"Teststrategi",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv 2 korta hypoteser du skulle testa om en bokningssida har låg konvertering.",answer_key:"Exempel: 1) Otydliga priser minskar tillit. 2) För många steg i flödet orsakar avhopp.",explanation:"Bra svar kopplar observerbart problem till testbar hypotes."},{id:"ux-4",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Svår",source_tier:"Community",estimated_minutes:4,prompt:"Tre designförslag höjer NPS men sänker task success. Vad bör teamet göra först?",options:[{id:"a",text:"Välj högst NPS direkt"},{id:"b",text:"Analysera konflikt mellan upplevd nöjdhet och faktisk användbarhet"},{id:"c",text:"Skippa mätdata"},{id:"d",text:"Lansera alla tre"}],answer_key:"b",explanation:"Måtten pekar åt olika håll; orsaksanalys krävs."},{id:"ux-5",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vilken data är mest användbar för att utvärdera en ny navigering?",options:[{id:"a",text:"Antal likes på sociala medier"},{id:"b",text:"Task success rate + tid till mål"},{id:"c",text:"Utvecklingstid"},{id:"d",text:"Färgpalettens trendighet"}],answer_key:"b",explanation:"Task success och tidsmått följer navigeringens effekt."},{id:"ux-7",track_id:"nackademin_ux",topic:"Informationsarkitektur",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad är det mest rimliga första steget när en tjänst känns otydlig och har många menyer?",options:[{id:"a",text:"Lägg till fler menyval för att täcka allt"},{id:"b",text:"Kartlägg användarnas viktigaste mål och gruppera innehållet efter toppuppgifter"},{id:"c",text:"Gör alla sidor lika långa"},{id:"d",text:"Byt namn på alla knappar samtidigt"}],answer_key:"b",explanation:"Informationsarkitektur börjar med användarens viktigaste uppgifter, inte med fler val."},{id:"ux-8",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:5,prompt:"Skriv en snabb testplan för en prototyp i tre punkter: vad du vill testa, vem du testar på och vad du letar efter.",answer_key:"Exempel: 1) Testa om användaren förstår flödet. 2) Testa med 3-5 personer från målgruppen. 3) Leta efter avbrott, tvekan och missförstånd.",explanation:"Bra svar är konkret, kort och kopplar testmål till observerbart beteende."},{id:"it-1",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilket lager i OSI-modellen hanterar IP-adressering?",options:[{id:"a",text:"Transport"},{id:"b",text:"Nätverk"},{id:"c",text:"Fysiskt"},{id:"d",text:"Session"}],answer_key:"b",explanation:"IP hör till nätverkslagret."},{id:"it-2",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad gör en brandvägg (firewall) främst?",options:[{id:"a",text:"Komprimerar filer"},{id:"b",text:"Filtrerar trafik enligt regler"},{id:"c",text:"Byter IP-klass"},{id:"d",text:"Skapar backup"}],answer_key:"b",explanation:"Brandväggar kontrollerar in/ut-trafik mot policy."},{id:"it-3",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Engelsk term: 'confidentiality' betyder närmast:",options:[{id:"a",text:"Tillgänglighet"},{id:"b",text:"Konfidentialitet"},{id:"c",text:"Felsökning"},{id:"d",text:"Skalbarhet"}],answer_key:"b",explanation:"CIA-triaden: confidentiality, integrity, availability."},{id:"it-4",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Förklara skillnaden mellan TCP och UDP med en mening vardera.",answer_key:"TCP är anslutningsorienterat och tillförlitligt. UDP är snabbare, utan garanti för leverans.",explanation:"Fokus på tillförlitlighet kontra hastighet/överhead."},{id:"it-5",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilket påstående om VPN är mest korrekt?",options:[{id:"a",text:"VPN krypterar aldrig trafik"},{id:"b",text:"VPN skapar en krypterad tunnel över osäkert nät"},{id:"c",text:"VPN ersätter alla säkerhetskontroller"},{id:"d",text:"VPN gör användaren anonym i alla situationer"}],answer_key:"b",explanation:"VPN minskar risk i transit men ersätter inte helhetsarbete."},{id:"it-7",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad används DNS främst till?",options:[{id:"a",text:"Att kryptera trafik mellan datorer"},{id:"b",text:"Att förvandla domännamn till IP-adresser"},{id:"c",text:"Att skapa brandväggsregler"},{id:"d",text:"Att komprimera webbsidor"}],answer_key:"b",explanation:"DNS översätter namn som exempel.se till IP-adresser som nätverket kan routa till."},{id:"it-8",track_id:"iths_itsec",topic:"Säkerhet och social engineering",format:"mcq",difficulty:"Medel",source_tier:"Community",estimated_minutes:3,prompt:"Vilket exempel är social engineering?",options:[{id:"a",text:"Att installera en uppdatering för operativsystemet"},{id:"b",text:"Att skicka ett falskt meddelande som försöker få någon att lämna ut lösenord"},{id:"c",text:"Att byta till starkare Wi-Fi-kryptering"},{id:"d",text:"Att dokumentera en routerkonfiguration"}],answer_key:"b",explanation:"Social engineering handlar om att manipulera människor, inte system."},{id:"prog-1",track_id:"prog1a",topic:"Variabler och datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken datatyp passar bäst för heltal i Java?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"double[]"}],answer_key:"a",explanation:"int används för heltalsvärden."},{id:"prog-2",track_id:"prog1a",topic:"Villkor",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken operator betyder 'lika med' i ett villkor?",options:[{id:"a",text:"="},{id:"b",text:"=="},{id:"c",text:":="},{id:"d",text:"=>"}],answer_key:"b",explanation:"`==` jämför värden; `=` tilldelar."},{id:"prog-3",track_id:"prog1a",topic:"Loopar",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vad skriver denna kod ut? for(int i=1;i<=3;i++){System.out.print(i);}",options:[{id:"a",text:"123"},{id:"b",text:"012"},{id:"c",text:"13"},{id:"d",text:"321"}],answer_key:"a",explanation:"i går från 1 till 3 inklusive."},{id:"prog-4",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv en metodsignatur i Java för att summera två heltal.",answer_key:"Exempel: static int sum(int a, int b)",explanation:"Metodnamn, returtyp och parametrar ska framgå."},{id:"prog-5",track_id:"prog1a",topic:"Felsökning",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilken buggrisk är störst här: int[] a = new int[3]; System.out.println(a[3]);",options:[{id:"a",text:"NullPointerException"},{id:"b",text:"ArrayIndexOutOfBoundsException"},{id:"c",text:"StackOverflowError"},{id:"d",text:"Ingen risk"}],answer_key:"b",explanation:"Index 3 ligger utanför giltiga index 0-2."},{id:"core-1",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Om 20% av 150 är korrekt beräknat, vilket svar är rätt?",options:[{id:"a",text:"20"},{id:"b",text:"25"},{id:"c",text:"30"},{id:"d",text:"35"}],answer_key:"c",explanation:"0,2 * 150 = 30."},{id:"ux-6",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:6,prompt:"Designa en ny returhantering för IKEA där kunden kan boka upphämtning via appen. Beskriv kort: målgrupp, enkel wireframe-idé och motivering.",answer_key:"Exempel: målgrupp = kunder med stora varor; wireframe = välj order, välj tidsfönster, bekräfta; motivering = minskar friktion och supportärenden.",explanation:"Bedöm på struktur: målgrupp -> lösning -> motivering. Det finns inget enda facit."},{id:"it-6",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"På vilket OSI-lager verkar en router?",options:[{id:"a",text:"Lager 2 - Datalänk"},{id:"b",text:"Lager 3 - Nätverk"},{id:"c",text:"Lager 4 - Transport"},{id:"d",text:"Lager 7 - Applikation"}],answer_key:"b",explanation:"Routrar routar IP-trafik på lager 3."},{id:"prog-6",track_id:"prog1a",topic:"Datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken datatyp är bäst för att lagra true/false?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"float"}],answer_key:"c",explanation:"boolean lagrar sant/falskt-värden."},{id:"prog-7",track_id:"prog1a",topic:"Code tracing",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vad blir värdet på x?
let x = 2;
for (let i = 0; i < 3; i++) { x = x + i; }`,options:[{id:"a",text:"3"},{id:"b",text:"4"},{id:"c",text:"5"},{id:"d",text:"6"}],answer_key:"c",explanation:"x blir 2+0+1+2 = 5."},{id:"prog-8",track_id:"prog1a",topic:"Debugging-game",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vilket fel är tydligast i denna kod?
for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }`,options:[{id:"a",text:"Fel variabelnamn i loggen"},{id:"b",text:"Loopvillkoret bör vara i < arr.length"},{id:"c",text:"for-loop kan inte användas med arrayer"},{id:"d",text:"console.log kräver string"}],answer_key:"b",explanation:"i <= arr.length går ett steg för långt och ger undefined sista varvet."},{id:"prog-9",track_id:"prog1a",topic:"Villkor och logik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:`Vad skrivs ut?
int score = 7;
if (score >= 5) {
  System.out.print("Godkänd");
} else {
  System.out.print("Underkänd");
}`,options:[{id:"a",text:"Godkänd"},{id:"b",text:"Underkänd"},{id:"c",text:"5"},{id:"d",text:"Inget skrivs ut"}],answer_key:"a",explanation:"7 är större än eller lika med 5, så första grenen körs."},{id:"prog-10",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:5,prompt:"Förklara kort vad en metod gör i Java och ge ett enkelt exempel på vad den kan användas till.",answer_key:"En metod samlar kod som kan återanvändas. Exempel: en method som tar emot två tal och returnerar summan.",explanation:"Svar ska visa förståelse för återanvändning, input/return och ett konkret användningsfall."}],S=[{id:"mock-nack-60",name:"Nackademin-liknande 60 min",track_id:"nackademin_ux",total_minutes:60,sections:[{title:"Analys & logik",track_id:"nackademin_ux",topics:["Logik/analys","Problemlösning","Teststrategi","Scenario-övning"],question_ids:["ux-1","ux-2","ux-3","ux-4","ux-5","ux-6"],minutes:60,weight:1}],scoring_rules:"Poäng per korrekt svar. Korta svar bedöms mot modellförslag."},{id:"mock-iths-90",name:"IT-H Del 1+2 (90 min)",track_id:"iths_itsec",total_minutes:90,sections:[{title:"Del 1: Svenska/Engelska/Matte",track_id:"iths_itsec",topics:["Svenska/Engelska/Matte"],question_ids:["it-3","core-1"],minutes:20,weight:.2},{title:"Del 2: Dator- och nätverksteknik",track_id:"iths_itsec",topics:["Dator- och nätverksteknik"],question_ids:["it-1","it-2","it-4","it-5","it-6"],minutes:70,weight:.8}],scoring_rules:"Separat delpoäng, total viktad poäng enligt 20/80."},{id:"mock-prog-45",name:"Programmering 1/A delprov (45 min)",track_id:"prog1a",total_minutes:45,sections:[{title:"Del 1: Grunder",track_id:"prog1a",topics:["Variabler och datatyper","Villkor"],question_ids:["prog-1","prog-2","prog-6"],minutes:15,weight:.33},{title:"Del 2: Flöde och läsning",track_id:"prog1a",topics:["Loopar","Code tracing"],question_ids:["prog-3","prog-7","prog-9"],minutes:15,weight:.33},{title:"Del 3: Metoder och felsökning",track_id:"prog1a",topics:["Metoder","Felsökning","Debugging-game"],question_ids:["prog-4","prog-5","prog-8","prog-10"],minutes:15,weight:.34}],scoring_rules:"Separat poäng per del, fokus på grunder först och tydlig återkoppling på feltyper."}],T=[{id:"ev-nack-1",provider:"Nackademin",url:"https://nackademin.se/antagning/urval-och-antagningsprov/",claim:"Urvalet omfattar antagningsprov med fokus på analys- och problemlösningsförmåga.",confidence:"Hög",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-nack-2",provider:"Nackademin (EN)",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Den engelska antagningssidan bekräftar att provet används för att bedöma lämplighet och förmåga att hantera programmens upplägg.",confidence:"Medel",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-iths-1",provider:"IT-Högskolan",url:"https://www.iths.se/antagningsprovet/",claim:"Antagningsprovet består av två delar: allmän del och programspecifik del.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-3",provider:"IT-Högskolan (FAQ/antagning)",url:"https://www.iths.se/vanliga-fragor/",claim:"IT-Högskolan hänvisar till att antagning och förberedande material kan variera, vilket gör det rimligt att träna både allmän del och programspecifik del separat.",confidence:"Medel",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-2",provider:"IT-Högskolan",url:"https://www.iths.se/utbildningar/preparandkurs/",claim:"Förkunskapsspåret för IT-säkerhet lyfter dator- och nätverksteknik.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-prog-1",provider:"Linköpings kommun (Komvux-info)",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i programmering brukar innehålla praktiska moment, teori och uppgifter i flera delar.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-prog-2",provider:"Komvux/exempel på prövning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i gymnasiala kurser brukar kombinera teori med praktiska uppgifter, vilket passar ett programmeringsspår med både kunskapstest och kodläsning.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-community-1",provider:"Community-sammanställning",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Tidigare sökande beskriver tidsbrist som huvudutmaning; träningsmönster fokuserar därför på tidsatta övningar.",confidence:"Låg",source_tier:"Community",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-community-2",provider:"Community-sammanställning",url:"https://www.iths.se/antagningsprovet/",claim:"Tidigare sökande beskriver att del 1 ofta känns bred och att del 2 kräver fokus på nätverk, säkerhet och begrepp som brukar återkomma.",confidence:"Låg",source_tier:"Community",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-community-3",provider:"Community-sammanställning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"I programmeringsprövningar återkommer ofta uppgifter om variabler, villkor, loopar och felsökning snarare än enbart teori.",confidence:"Låg",source_tier:"Community",track_id:"prog1a",last_verified_date:"2026-04-03"}],X=30,G=45,ut=1440*60*1e3,E=new Date(2026,3,7,9,0,0);function Y(e,t,i){return Math.min(i,Math.max(t,e))}function D(e){return e.reduce((t,i)=>t+i.minutes,0)}function A(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}function mt(e=E){return new Intl.DateTimeFormat("sv-SE",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}function z(e=new Date,t=E){return Math.round((A(t)-A(e))/ut)}function gt(e=new Date,t=E){const i=z(e,t);return i<0?"Första provet är genomfört":i===0?"D-0 idag":`D-${i}`}function Z(e){const t=D(e);if(t>=X&&t<=G)return e;const i=Y(t,X,G),r=i/Math.max(t,1),n=e.map(s=>({...s,minutes:Math.max(3,Math.round(s.minutes*r))})),a=Y(i-D(n),-5,5);return a!==0&&(n[0]={...n[0],minutes:Math.max(3,n[0].minutes+a)}),n}function tt(e=new Date,t=E){return A(e)<=A(t)?"A":"B"}function kt(e){const t=z(e);return`Sprint A (${t<=0?"D-0: provdag":`D-${t} till D-0`}): Nackademin-prioritet`}function ft(){return Z([{trackId:"nackademin_ux",topic:"Analys + problemlösning",minutes:25,mode:"Drill"},{trackId:"prog1a",topic:"Programmeringsgrunder (variabler/villkor/loopar)",minutes:7,mode:"Lär"},{trackId:"iths_itsec",topic:"Snabb engelska/matte-rep",minutes:3,mode:"Drill"}])}function vt(){return Z([{trackId:"iths_itsec",topic:"Dator- och nätverksteknik",minutes:24,mode:"Drill"},{trackId:"prog1a",topic:"Kodövning + felsökning",minutes:10,mode:"Drill"},{trackId:"nackademin_ux",topic:"Teststrategi och tidsdisciplin",minutes:6,mode:"Lär"}])}function N(e=new Date){const t=tt(e),i=t==="A"?ft():vt();return{sprint:t,title:t==="A"?kt(e):"Sprint B (efter första provet): IT-H-prioritet",totalMinutes:D(i),blocks:i}}function ht(e){const t=D(e)||1,i={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)i[r.trackId]+=r.minutes;return{nackademin_ux:Math.round(i.nackademin_ux/t*100),iths_itsec:Math.round(i.iths_itsec/t*100),prog1a:Math.round(i.prog1a/t*100)}}function et(e=new Date){return tt(e)==="A"?{id:"mock-nack-60",label:"Nackademin-liknande 60 min",minutes:60}:{id:"mock-iths-90",label:"IT-H Del 1+2 (90 min)",minutes:90}}function it(e,t){return e.filter(i=>!(t.trackId!=="all"&&i.track_id!==t.trackId||t.topic!=="all"&&i.topic!==t.topic||t.difficulty!=="all"&&i.difficulty!==t.difficulty||t.sourceTier!=="all"&&i.source_tier!==t.sourceTier))}function $(e){const t=e.reduce((i,r)=>i+r.estimated_minutes,0);return Math.min(45,Math.max(15,t))}function F(e,t){let i=0;const r=new Map;for(const o of e){const c=(t[o.id]||"").trim().toLowerCase(),m=o.answer_key.trim().toLowerCase();if(o.format==="mcq"?c===m:c.length>0&&m.includes(c.slice(0,8))){i+=1;continue}r.set(o.topic,(r.get(o.topic)||0)+1)}const n=e.length,a=n>0?Math.round(i/n*100):0,s=[...r.entries()].sort((o,c)=>c[1]-o[1]).map(([o])=>o).slice(0,3);return{correct:i,total:n,scorePercent:a,weakTopics:s}}const R="yh.study-sessions",M="yh.active-session",_t=1;function rt(e,t){if(!e)return t;try{return JSON.parse(e)}catch{return t}}function U(){return rt(localStorage.getItem(R),[])}function bt(e){const t=U();t.unshift(e),localStorage.setItem(R,JSON.stringify(t.slice(0,100)))}function B(){return rt(localStorage.getItem(M),null)}function w(e){localStorage.setItem(M,JSON.stringify(e))}function nt(){localStorage.removeItem(M)}function yt(){return{version:_t,exportedAt:new Date().toISOString(),studySessions:U(),activeSession:B()}}function xt(e){const t=Array.isArray(e.studySessions)?e.studySessions.slice(0,100):[];localStorage.setItem(R,JSON.stringify(t));const i=!!e.activeSession&&typeof e.activeSession=="object";return i?localStorage.setItem(M,JSON.stringify(e.activeSession)):localStorage.removeItem(M),{importedSessions:t.length,restoredActiveSession:i}}const at=document.querySelector("#app");if(!at)throw new Error("App container saknas");const O=at,St={overview:"Översikt",tracks:"Spår",bank:"Frågebank",mock:"Mockprov",research:"Research",logic:"Logik"};let b="overview",k={trackId:"all",topic:"all",difficulty:"all",sourceTier:"all"},H=et().id,l=B(),g=null,h=null,K=navigator.onLine,L="",st="Designa en digital tjänst för IKEA som löser problemet: kunden vill boka upphämtning av returvaror.";const ot="yh.study-profile",x={sessionPreference:[{id:"30",label:"30 min fokuspass (rekommenderat nu)"},{id:"45",label:"45 min standardpass"},{id:"60",label:"60 min när jag har energi"}],blocker:[{id:"time",label:"Tidsstress i prov"},{id:"logic",label:"Logik och resonemang"},{id:"network",label:"IT/nätverkstermer"},{id:"coding",label:"Kodförståelse/felsökning"},{id:"other",label:"Annat (skriv i fritext)"}],confidence:[{id:"low",label:"Låg - behöver tydlig guidning"},{id:"mid",label:"Medel - behöver mest träning"},{id:"high",label:"Hög - vill främst ha tidsprov"}],targetPriority:[{id:"nack",label:"Nackademin UX (akut)"},{id:"iths",label:"IT-H IT-säkerhet"},{id:"prog",label:"Programmering 1/A"}]};let u=Pt();function I(e){return C.find(t=>t.id===e)?.name||e}function j(e){return`track-${e}`}function $t(e){const t=Math.max(0,Math.floor(e/1e3)),i=Math.floor(t/60).toString().padStart(2,"0"),r=(t%60).toString().padStart(2,"0");return`${i}:${r}`}function lt(e){return e.questionIds.map(t=>f.find(i=>i.id===t)).filter(Boolean)}function wt(e){return e.reduce((t,i)=>t+i.duration_minutes,0)}function Mt(e){const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)t.nackademin_ux+=r.track_mix.nackademin_ux||0,t.iths_itsec+=r.track_mix.iths_itsec||0,t.prog1a+=r.track_mix.prog1a||0;const i=Math.max(1,e.length);return{nackademin_ux:Math.round(t.nackademin_ux/i),iths_itsec:Math.round(t.iths_itsec/i),prog1a:Math.round(t.prog1a/i)}}function ct(){return f.filter(e=>["Logik/analys","Svenska/Engelska/Matte","Code tracing","Debugging-game"].includes(e.topic))}function It(){const e=["IKEA","1177","SJ","Skatteverket","Foodora"],t=["användaren hittar inte status på sitt ärende","för många steg gör att användaren avbryter","det är otydligt vad som händer efter beställning","returer och ombokningar upplevs krångliga","supporten får för många repetitiva frågor"],i=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)];return`Designa en digital tjänst för ${i} som löser problemet: ${r}.`}function V(){return{sessionPreference:"30",blocker:"time",confidence:"mid",targetPriority:"nack",notes:""}}function Pt(){try{const e=localStorage.getItem(ot);if(!e)return V();const t=JSON.parse(e);return{...V(),...t}}catch{return V()}}function Tt(e){localStorage.setItem(ot,JSON.stringify(e))}function Dt(e,t,i){const r=F(t,i);if(!e)return{sectionResults:[],finalScore:r.scorePercent};const n=S.find(c=>c.id===e);if(!n)return{sectionResults:[],finalScore:r.scorePercent};const a=n.sections.map(c=>{const m=t.filter(y=>c.question_ids.includes(y.id)),v=F(m,i);return{title:c.title,scorePercent:v.scorePercent,correct:v.correct,total:v.total,weight:c.weight}}),s=a.reduce((c,m)=>c+m.weight,0)||1,o=a.reduce((c,m)=>c+m.scorePercent*(m.weight/s),0);return{templateName:n.name,sectionResults:a,finalScore:Math.round(o)}}function q(e,t){return x[e].find(i=>i.id===t)?.label||t}function Q(e){return e==="iths"?"iths_itsec":e==="prog"?"prog1a":"nackademin_ux"}function At(e){if(e==="logic"){b="logic",p();return}b="bank",k={trackId:e==="ux"?"nackademin_ux":e==="it"?"iths_itsec":"prog1a",topic:"all",difficulty:"all",sourceTier:"all"},p()}function dt(){const e=N(),t=[],i=Q(u.targetPriority),n={time:["Logik/analys","Problemlösning","Svenska/Engelska/Matte"],logic:["Logik/analys","Code tracing","Debugging-game"],network:["Dator- och nätverksteknik","Säkerhet och social engineering"],coding:["Loopar","Metoder","Felsökning","Code tracing","Debugging-game"],other:[]}[u.blocker]||[];for(const s of e.blocks){const o=f.filter(v=>v.track_id===s.trackId),c=s.minutes>=20?4:s.minutes>=10?3:2,m=o.slice(0,c);for(const v of m)t.find(y=>y.id===v.id)||t.push(v)}const a=f.filter(s=>s.track_id===i);for(const s of a)if(t.find(o=>o.id===s.id)||t.unshift(s),t.length>=12)break;if(n.length>0){const s=f.filter(o=>n.includes(o.topic));for(const o of s)if(t.find(c=>c.id===o.id)||t.push(o),t.length>=12)break}if(t.length<8){for(const s of f)if(t.find(o=>o.id===s.id)||t.push(s),t.length>=8)break}return t.slice(0,12)}function P(e){L=e,p(),window.setTimeout(()=>{L="",p()},3500)}function Lt(){const e=yt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a"),n=new Date().toISOString().replace(/[:.]/g,"-");r.href=i,r.download=`yh-prep-backup-${n}.json`,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(i),P("Backup exporterat.")}async function Et(e){try{const t=await e.text(),i=JSON.parse(t),r=xt(i);l=B(),P(`Import klar: ${r.importedSessions} pass, aktiv session ${r.restoredActiveSession?"återställd":"saknas"}.`)}catch{P("Import misslyckades. Kontrollera att filen är en giltig backup.")}}function Nt(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{P("Kunde inte aktivera offline-läge.")})}function pt(){h&&(window.clearInterval(h),h=null),l&&(h=window.setInterval(()=>{if(l){if(Date.now()>=l.endsAt){J(!0);return}p()}},1e3))}function Ot(e){if(e.length===0)return{nackademin_ux:0,iths_itsec:0,prog1a:0};const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)t[i.track_id]+=1;return{nackademin_ux:Math.round(t.nackademin_ux/e.length*100),iths_itsec:Math.round(t.iths_itsec/e.length*100),prog1a:Math.round(t.prog1a/e.length*100)}}function _(e,t,i,r){t.length!==0&&(l={id:crypto.randomUUID(),mode:e,startedAt:Date.now(),endsAt:Date.now()+i*6e4,questionIds:t,currentIndex:0,answers:{},templateId:r},w(l),pt(),p())}function J(e=!1){if(!l)return;const t=lt(l),i=F(t,l.answers),r=Dt(l.templateId,t,l.answers),n=Ot(t),a=Math.max(1,Math.round((Date.now()-l.startedAt)/6e4));bt({id:l.id,date:new Date().toISOString(),duration_minutes:a,mode:l.mode,track_mix:n,score:r.finalScore,weak_topics:i.weakTopics}),g={mode:l.mode,scorePercent:r.finalScore,correct:i.correct,total:i.total,weakTopics:i.weakTopics,autoSubmitted:e,sectionResults:r.sectionResults,templateName:r.templateName},l=null,nt(),h&&(window.clearInterval(h),h=null),p()}function jt(){l=null,nt(),h&&(window.clearInterval(h),h=null),p()}function W(){const e=U(),t=N(),i=ht(t.blocks),r=Mt(e),n=gt(),a=mt(),s=et(),o=dt(),c=Q(u.targetPriority),m=I(c),v=Number.parseInt(u.sessionPreference,10)||t.totalMinutes,y=q("blocker",u.blocker);return`
    <div class="grid overview-grid">
      <section class="card critical-card span-12">
        <h3>Snabbstart idag</h3>
        <p class="muted">Status: ${K?"Online":"Offline"} • ${t.totalMinutes} min</p>
        <div class="critical-kpis">
          <p><strong>Prov:</strong> ${n}</p>
          <p><strong>Nästa mock:</strong> ${s.minutes} min</p>
        </div>
        <p class="muted">Prioriterat nu: ${m} • Passmål: ${v} min • Fokus: ${y}</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-today-drill">Starta dagens pass</button>
          <button class="secondary" data-action="jump-mock">Mockprov</button>
          <button class="secondary" data-action="start-priority-learn">Lär i prioriterat spår</button>
        </div>
      </section>

      <section class="card span-12">
        <details>
          <summary>2-min intervju (för personlig plan)</summary>
          <p class="muted">Flervalsfrågor med fritext för "Annat". Svaren styr rekommenderad träning i appen.</p>
          <div class="inline-controls">
            <label for="profile-sessionPreference">Passlängd</label>
            <select id="profile-sessionPreference" data-profile="sessionPreference">
              ${x.sessionPreference.map(d=>`<option value="${d.id}" ${u.sessionPreference===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-blocker">Största hinder</label>
            <select id="profile-blocker" data-profile="blocker">
              ${x.blocker.map(d=>`<option value="${d.id}" ${u.blocker===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-confidence">Nuvarande nivå</label>
            <select id="profile-confidence" data-profile="confidence">
              ${x.confidence.map(d=>`<option value="${d.id}" ${u.confidence===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-targetPriority">Primärt mål</label>
            <select id="profile-targetPriority" data-profile="targetPriority">
              ${x.targetPriority.map(d=>`<option value="${d.id}" ${u.targetPriority===d.id?"selected":""}>${d.label}</option>`).join("")}
            </select>

            <label for="profile-notes">Annat du vill att planen tar hänsyn till</label>
            <textarea id="profile-notes" data-profile="notes" rows="3" placeholder="Skriv fritt här (valfritt)">${u.notes}</textarea>
            <button class="primary" data-action="save-profile">Spara intervju</button>
          </div>
          <p class="muted">Valt just nu: ${q("sessionPreference",u.sessionPreference)} • ${q("blocker",u.blocker)}</p>
        </details>
      </section>

      <section class="card span-12">
        <details>
          <summary>Visa dagens plan (${t.blocks.length} block)</summary>
          <p class="muted">${t.title}</p>
          <ol class="list-clean">
            ${t.blocks.map(d=>`<li><span class="track-pill ${j(d.trackId)}">${I(d.trackId)}</span> ${d.topic} (${d.minutes} min)</li>`).join("")}
          </ol>
          <p class="muted">Fördelning: UX ${i.nackademin_ux}% • IT-H ${i.iths_itsec}% • Prog1/A ${i.prog1a}%</p>
          <p class="muted">Frågor i dagens pass: ${o.length}</p>
        </details>
      </section>

      <section class="card span-12">
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

      <section class="card span-12">
        <details>
          <summary>Visa provdetaljer och backup</summary>
          <p><strong>Första provdatum:</strong> ${a}</p>
          <p><strong>Genomförd tid:</strong> ${wt(e)} min (${e.length} pass)</p>
          <div class="inline-controls">
            <button class="secondary" data-action="export-progress">Exportera backup</button>
            <input type="file" accept="application/json" data-input="import-progress" />
          </div>
          ${L?`<p class="success">${L}</p>`:""}
        </details>
      </section>
    </div>
  `}function Vt(){const e=["Logik/analys","Mattebas","Teststrategi","Programmeringsgrunder"];return`
    <div class="grid">
      ${C.map(t=>`
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
        <p>${st}</p>
        <p class="muted">
          Workflow: 1) Målgruppsanalys → 2) Enkel wireframe-idé (text/skiss) → 3) Motivering.
        </p>
        <button class="primary" data-action="generate-ux-case">Generera nytt case</button>
      </section>
    </div>
  `}function qt(){const e=it(f,k),t=Array.from(new Set(f.map(i=>i.topic))).sort();return`
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
            <option value="all" ${k.trackId==="all"?"selected":""}>Alla spår</option>
            ${C.map(i=>`<option value="${i.id}" ${k.trackId===i.id?"selected":""}>${i.name}</option>`).join("")}
          </select>

          <select data-filter="topic">
            <option value="all" ${k.topic==="all"?"selected":""}>Alla ämnen</option>
            ${t.map(i=>`<option value="${i}" ${k.topic===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <select data-filter="difficulty">
            <option value="all" ${k.difficulty==="all"?"selected":""}>Alla nivåer</option>
            ${["Lätt","Medel","Svår"].map(i=>`<option value="${i}" ${k.difficulty===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <select data-filter="sourceTier">
            <option value="all" ${k.sourceTier==="all"?"selected":""}>Alla källnivåer</option>
            ${["Officiell","Sekundär","Community"].map(i=>`<option value="${i}" ${k.sourceTier===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <button class="primary" data-action="start-drill">Starta Drill (${$(e)} min)</button>
        </div>
        <p class="muted">${e.length} frågor matchar filter.</p>
      </section>

      ${e.map(i=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${j(i.track_id)}">${I(i.track_id)}</span>
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
  `}function Ft(){const e=S.find(i=>i.id===H)||S[0],t=e.sections.reduce((i,r)=>i+r.question_ids.length,0);return`
    <div class="grid">
      <section class="card span-12">
        <h3>Mockprov (tidsprov)</h3>
        <div class="inline-controls">
          <select data-mock-select="true">
            ${S.map(i=>`<option value="${i.id}" ${i.id===e.id?"selected":""}>${i.name}</option>`).join("")}
          </select>
          <button class="primary" data-action="start-mock">Starta ${e.total_minutes} min</button>
        </div>
        <p class="muted">${t} frågor i detta mockprov.</p>
        <p class="muted">Poängregel: ${e.scoring_rules}</p>
      </section>

      ${e.sections.map(i=>`
            <section class="card span-6">
              <h3>${i.title}</h3>
              <p><span class="track-pill ${j(i.track_id)}">${I(i.track_id)}</span></p>
              <p>Tid: ${i.minutes} min • Vikt: ${Math.round(i.weight*100)}%</p>
              <p>Ämnen: ${i.topics.join(" • ")}</p>
              <p class="muted">Frågor: ${i.question_ids.join(", ")}</p>
            </section>
          `).join("")}
    </div>
  `}function Ct(){const e=T.filter(r=>r.source_tier==="Officiell").length,t=T.filter(r=>r.source_tier==="Community").length,i=T.filter(r=>r.source_tier==="Sekundär").length;return`
    <div class="grid">
      <section class="card span-12">
        <h3>Evidence-kort: tidigare års prov och mönster</h3>
        <p class="muted">Officiell: ${e} • Sekundär: ${i} • Community: ${t}</p>
      </section>
      ${T.map(r=>`
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
  `}function Rt(){const e=ct();return`
    <div class="grid">
      <section class="card span-12">
        <h3>Logik-flik</h3>
        <p class="muted">Inspirerad av Gemini-planens dashboard med egen logikmodul.</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-logic-drill">
            Starta logik-drill (${$(e)} min)
          </button>
          <button class="secondary" data-action="quick-tab" data-tab="ux">Till UX</button>
          <button class="secondary" data-action="quick-tab" data-tab="it">Till IT</button>
          <button class="secondary" data-action="quick-tab" data-tab="prog">Till Prog</button>
        </div>
      </section>
      ${e.map(t=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${j(t.track_id)}">${I(t.track_id)}</span>
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
  `}function Ut(){if(!l)return"";const e=lt(l),t=e[l.currentIndex];if(!t)return"";const i=l.endsAt-Date.now(),r=Object.keys(l.answers).length,n=l.answers[t.id]||"";return`
    <section class="card session">
      <h3>Aktiv ${l.mode}</h3>
      <p class="session-timer ${i<5*6e4?"warning":""}">Tid kvar: ${$t(i)}</p>
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
  `}function Bt(){if(!g)return"";const e=g.sectionResults.length===0?"":`
        <p><strong>Sektionsrapport:</strong></p>
        <ul class="list-clean">
          ${g.sectionResults.map(t=>`<li>${t.title}: ${t.correct}/${t.total} (${t.scorePercent}%) • Vikt ${Math.round(t.weight*100)}%</li>`).join("")}
        </ul>
      `;return`
    <section class="card">
      <h3 class="success">Senaste resultat: ${g.scorePercent}%</h3>
      <p>${g.mode} • ${g.correct}/${g.total} rätt ${g.autoSubmitted?"(autosubmit vid timeout)":""}</p>
      ${g.templateName?`<p class="muted">Mall: ${g.templateName}</p>`:""}
      ${e}
      <p><strong>Svaga områden:</strong> ${g.weakTopics.length>0?g.weakTopics.join(" • "):"Inga tydliga svagheter"}</p>
    </section>
  `}function Ht(){switch(b){case"overview":return W();case"tracks":return Vt();case"bank":return qt();case"mock":return Ft();case"research":return Ct();case"logic":return Rt();default:return W()}}function p(){const e=N();O.innerHTML=`
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
          ${Object.entries(St).map(([t,i])=>`<button data-view="${t}" class="${b===t?"active":""}">${i}</button>`).join("")}
        </nav>
      </header>

      <main>
        ${Ut()}
        ${Bt()}
        ${Ht()}
      </main>
    </div>
  `}O.addEventListener("click",e=>{const t=e.target,i=t.closest("button[data-view]");if(i){b=i.dataset.view,p();return}const r=t.closest("[data-action]");if(!r)return;const n=r.dataset.action;if(n){if(n==="jump-mock"){b="mock",p();return}if(n==="export-progress"){Lt();return}if(n==="start-today-drill"){const a=dt(),s=N(),o=Number.parseInt(u.sessionPreference,10);_("Drill",a.map(c=>c.id),Number.isNaN(o)?s.totalMinutes:Math.max(30,Math.min(45,o)));return}if(n==="start-priority-learn"){const a=Q(u.targetPriority),s=f.filter(o=>o.track_id===a).slice(0,6);_("Lär",s.map(o=>o.id),20);return}if(n==="quick-tab"){const a=r.dataset.tab;a&&At(a);return}if(n==="generate-ux-case"){st=It(),p();return}if(n==="start-logic-drill"){const a=ct();_("Drill",a.slice(0,12).map(s=>s.id),$(a));return}if(n==="start-track-drill"){const a=r.dataset.track,s=f.filter(o=>o.track_id===a).slice(0,8).map(o=>o.id);_("Drill",s,$(f.filter(o=>s.includes(o.id))));return}if(n==="start-track-learn"){const a=r.dataset.track,s=f.filter(o=>o.track_id===a).slice(0,6).map(o=>o.id);_("Lär",s,20);return}if(n==="open-python-course"){window.open("/python-minikurs.html","_blank","noopener,noreferrer");return}if(n==="start-drill"){const a=it(f,k);_("Drill",a.slice(0,12).map(s=>s.id),$(a));return}if(n==="start-mock"){const a=S.find(o=>o.id===H);if(!a)return;const s=a.sections.flatMap(o=>o.question_ids);_("Tidsprov",s,a.total_minutes,a.id);return}if(n==="save-profile"){Tt(u),P("Intervju sparad. Rekommenderad plan uppdaterad.");return}if(l){if(n==="prev-q"){l.currentIndex=Math.max(0,l.currentIndex-1),w(l),p();return}if(n==="next-q"){l.currentIndex=Math.min(l.questionIds.length-1,l.currentIndex+1),w(l),p();return}if(n==="submit-session"){J(!1);return}if(n==="cancel-session"){jt();return}if(n==="answer"){const a=t,s=a.dataset.qid;if(!s)return;l.answers[s]=a.value,w(l),p()}}}});O.addEventListener("input",e=>{const t=e.target,i=t.closest("[data-profile]");if(i){const s=i.dataset.profile;s&&(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement)&&(u={...u,[s]:t.value});return}const r=t.closest("textarea[data-action='answer-text']");if(r&&l){const s=r.dataset.qid;s&&(l.answers[s]=r.value,w(l));return}const n=t.closest("select[data-filter]");if(n){const s=n.dataset.filter;k={...k,[s]:n.value},p();return}const a=t.closest("select[data-mock-select='true']");a&&(H=a.value,p())});O.addEventListener("change",e=>{const i=e.target.closest("input[data-input='import-progress']");if(!i||!i.files||i.files.length===0)return;const[r]=i.files;Et(r),i.value=""});window.addEventListener("online",()=>{K=!0,p()});window.addEventListener("offline",()=>{K=!1,p()});Nt();l&&Date.now()>=l.endsAt?J(!0):(pt(),p());
