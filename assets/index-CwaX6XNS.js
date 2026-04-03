(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const $=[{id:"nackademin_ux",name:"Nackademin UX",goal_exam:"Antagningsprov (analys + problemlösning)",weight:70,language_mode:"sv"},{id:"iths_itsec",name:"IT-Högskolan IT-säkerhet",goal_exam:"Antagningsprov Del 1 + Del 2",weight:60,language_mode:"sv-en"},{id:"prog1a",name:"Programmering 1/A-prövning",goal_exam:"Prövning/validering",weight:25,language_mode:"sv-en"}],h=[{id:"ux-1",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"En app tappar 40% användare i steg 2 av onboarding. Vilket första steg är mest UX-rimligt?",options:[{id:"a",text:"Lägg till fler funktioner i steg 1"},{id:"b",text:"Mät varför avhopp sker med funnel + kort användartest"},{id:"c",text:"Byt färgtema"},{id:"d",text:"Skippa onboarding helt"}],answer_key:"b",explanation:"Börja med evidens. Mätning och snabb testning ger orsak innan lösning."},{id:"ux-2",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken prioritering är mest rimlig i en MVP?",options:[{id:"a",text:"Must-have före nice-to-have"},{id:"b",text:"Bygg allt samtidigt"},{id:"c",text:"Fokusera på animationer"},{id:"d",text:"Ingen prioritering behövs"}],answer_key:"a",explanation:"MVP fokuserar på kärnnytta först."},{id:"ux-3",track_id:"nackademin_ux",topic:"Teststrategi",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv 2 korta hypoteser du skulle testa om en bokningssida har låg konvertering.",answer_key:"Exempel: 1) Otydliga priser minskar tillit. 2) För många steg i flödet orsakar avhopp.",explanation:"Bra svar kopplar observerbart problem till testbar hypotes."},{id:"ux-4",track_id:"nackademin_ux",topic:"Logik/analys",format:"mcq",difficulty:"Svår",source_tier:"Community",estimated_minutes:4,prompt:"Tre designförslag höjer NPS men sänker task success. Vad bör teamet göra först?",options:[{id:"a",text:"Välj högst NPS direkt"},{id:"b",text:"Analysera konflikt mellan upplevd nöjdhet och faktisk användbarhet"},{id:"c",text:"Skippa mätdata"},{id:"d",text:"Lansera alla tre"}],answer_key:"b",explanation:"Måtten pekar åt olika håll; orsaksanalys krävs."},{id:"ux-5",track_id:"nackademin_ux",topic:"Problemlösning",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vilken data är mest användbar för att utvärdera en ny navigering?",options:[{id:"a",text:"Antal likes på sociala medier"},{id:"b",text:"Task success rate + tid till mål"},{id:"c",text:"Utvecklingstid"},{id:"d",text:"Färgpalettens trendighet"}],answer_key:"b",explanation:"Task success och tidsmått följer navigeringens effekt."},{id:"ux-7",track_id:"nackademin_ux",topic:"Informationsarkitektur",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad är det mest rimliga första steget när en tjänst känns otydlig och har många menyer?",options:[{id:"a",text:"Lägg till fler menyval för att täcka allt"},{id:"b",text:"Kartlägg användarnas viktigaste mål och gruppera innehållet efter toppuppgifter"},{id:"c",text:"Gör alla sidor lika långa"},{id:"d",text:"Byt namn på alla knappar samtidigt"}],answer_key:"b",explanation:"Informationsarkitektur börjar med användarens viktigaste uppgifter, inte med fler val."},{id:"ux-8",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:5,prompt:"Skriv en snabb testplan för en prototyp i tre punkter: vad du vill testa, vem du testar på och vad du letar efter.",answer_key:"Exempel: 1) Testa om användaren förstår flödet. 2) Testa med 3-5 personer från målgruppen. 3) Leta efter avbrott, tvekan och missförstånd.",explanation:"Bra svar är konkret, kort och kopplar testmål till observerbart beteende."},{id:"it-1",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilket lager i OSI-modellen hanterar IP-adressering?",options:[{id:"a",text:"Transport"},{id:"b",text:"Nätverk"},{id:"c",text:"Fysiskt"},{id:"d",text:"Session"}],answer_key:"b",explanation:"IP hör till nätverkslagret."},{id:"it-2",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad gör en brandvägg (firewall) främst?",options:[{id:"a",text:"Komprimerar filer"},{id:"b",text:"Filtrerar trafik enligt regler"},{id:"c",text:"Byter IP-klass"},{id:"d",text:"Skapar backup"}],answer_key:"b",explanation:"Brandväggar kontrollerar in/ut-trafik mot policy."},{id:"it-3",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Engelsk term: 'confidentiality' betyder närmast:",options:[{id:"a",text:"Tillgänglighet"},{id:"b",text:"Konfidentialitet"},{id:"c",text:"Felsökning"},{id:"d",text:"Skalbarhet"}],answer_key:"b",explanation:"CIA-triaden: confidentiality, integrity, availability."},{id:"it-4",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Förklara skillnaden mellan TCP och UDP med en mening vardera.",answer_key:"TCP är anslutningsorienterat och tillförlitligt. UDP är snabbare, utan garanti för leverans.",explanation:"Fokus på tillförlitlighet kontra hastighet/överhead."},{id:"it-5",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilket påstående om VPN är mest korrekt?",options:[{id:"a",text:"VPN krypterar aldrig trafik"},{id:"b",text:"VPN skapar en krypterad tunnel över osäkert nät"},{id:"c",text:"VPN ersätter alla säkerhetskontroller"},{id:"d",text:"VPN gör användaren anonym i alla situationer"}],answer_key:"b",explanation:"VPN minskar risk i transit men ersätter inte helhetsarbete."},{id:"it-7",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:"Vad används DNS främst till?",options:[{id:"a",text:"Att kryptera trafik mellan datorer"},{id:"b",text:"Att förvandla domännamn till IP-adresser"},{id:"c",text:"Att skapa brandväggsregler"},{id:"d",text:"Att komprimera webbsidor"}],answer_key:"b",explanation:"DNS översätter namn som exempel.se till IP-adresser som nätverket kan routa till."},{id:"it-8",track_id:"iths_itsec",topic:"Säkerhet och social engineering",format:"mcq",difficulty:"Medel",source_tier:"Community",estimated_minutes:3,prompt:"Vilket exempel är social engineering?",options:[{id:"a",text:"Att installera en uppdatering för operativsystemet"},{id:"b",text:"Att skicka ett falskt meddelande som försöker få någon att lämna ut lösenord"},{id:"c",text:"Att byta till starkare Wi-Fi-kryptering"},{id:"d",text:"Att dokumentera en routerkonfiguration"}],answer_key:"b",explanation:"Social engineering handlar om att manipulera människor, inte system."},{id:"prog-1",track_id:"prog1a",topic:"Variabler och datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken datatyp passar bäst för heltal i Java?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"double[]"}],answer_key:"a",explanation:"int används för heltalsvärden."},{id:"prog-2",track_id:"prog1a",topic:"Villkor",format:"mcq",difficulty:"Lätt",source_tier:"Officiell",estimated_minutes:2,prompt:"Vilken operator betyder 'lika med' i ett villkor?",options:[{id:"a",text:"="},{id:"b",text:"=="},{id:"c",text:":="},{id:"d",text:"=>"}],answer_key:"b",explanation:"`==` jämför värden; `=` tilldelar."},{id:"prog-3",track_id:"prog1a",topic:"Loopar",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Vad skriver denna kod ut? for(int i=1;i<=3;i++){System.out.print(i);}",options:[{id:"a",text:"123"},{id:"b",text:"012"},{id:"c",text:"13"},{id:"d",text:"321"}],answer_key:"a",explanation:"i går från 1 till 3 inklusive."},{id:"prog-4",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Community",estimated_minutes:4,prompt:"Skriv en metodsignatur i Java för att summera två heltal.",answer_key:"Exempel: static int sum(int a, int b)",explanation:"Metodnamn, returtyp och parametrar ska framgå."},{id:"prog-5",track_id:"prog1a",topic:"Felsökning",format:"mcq",difficulty:"Svår",source_tier:"Sekundär",estimated_minutes:4,prompt:"Vilken buggrisk är störst här: int[] a = new int[3]; System.out.println(a[3]);",options:[{id:"a",text:"NullPointerException"},{id:"b",text:"ArrayIndexOutOfBoundsException"},{id:"c",text:"StackOverflowError"},{id:"d",text:"Ingen risk"}],answer_key:"b",explanation:"Index 3 ligger utanför giltiga index 0-2."},{id:"core-1",track_id:"iths_itsec",topic:"Svenska/Engelska/Matte",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:"Om 20% av 150 är korrekt beräknat, vilket svar är rätt?",options:[{id:"a",text:"20"},{id:"b",text:"25"},{id:"c",text:"30"},{id:"d",text:"35"}],answer_key:"c",explanation:"0,2 * 150 = 30."},{id:"ux-6",track_id:"nackademin_ux",topic:"Scenario-övning",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:6,prompt:"Designa en ny returhantering för IKEA där kunden kan boka upphämtning via appen. Beskriv kort: målgrupp, enkel wireframe-idé och motivering.",answer_key:"Exempel: målgrupp = kunder med stora varor; wireframe = välj order, välj tidsfönster, bekräfta; motivering = minskar friktion och supportärenden.",explanation:"Bedöm på struktur: målgrupp -> lösning -> motivering. Det finns inget enda facit."},{id:"it-6",track_id:"iths_itsec",topic:"Dator- och nätverksteknik",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"På vilket OSI-lager verkar en router?",options:[{id:"a",text:"Lager 2 - Datalänk"},{id:"b",text:"Lager 3 - Nätverk"},{id:"c",text:"Lager 4 - Transport"},{id:"d",text:"Lager 7 - Applikation"}],answer_key:"b",explanation:"Routrar routar IP-trafik på lager 3."},{id:"prog-6",track_id:"prog1a",topic:"Datatyper",format:"mcq",difficulty:"Lätt",source_tier:"Sekundär",estimated_minutes:2,prompt:"Vilken datatyp är bäst för att lagra true/false?",options:[{id:"a",text:"int"},{id:"b",text:"String"},{id:"c",text:"boolean"},{id:"d",text:"float"}],answer_key:"c",explanation:"boolean lagrar sant/falskt-värden."},{id:"prog-7",track_id:"prog1a",topic:"Code tracing",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vad blir värdet på x?
let x = 2;
for (let i = 0; i < 3; i++) { x = x + i; }`,options:[{id:"a",text:"3"},{id:"b",text:"4"},{id:"c",text:"5"},{id:"d",text:"6"}],answer_key:"c",explanation:"x blir 2+0+1+2 = 5."},{id:"prog-8",track_id:"prog1a",topic:"Debugging-game",format:"mcq",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:3,prompt:`Vilket fel är tydligast i denna kod?
for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }`,options:[{id:"a",text:"Fel variabelnamn i loggen"},{id:"b",text:"Loopvillkoret bör vara i < arr.length"},{id:"c",text:"for-loop kan inte användas med arrayer"},{id:"d",text:"console.log kräver string"}],answer_key:"b",explanation:"i <= arr.length går ett steg för långt och ger undefined sista varvet."},{id:"prog-9",track_id:"prog1a",topic:"Villkor och logik",format:"mcq",difficulty:"Medel",source_tier:"Officiell",estimated_minutes:3,prompt:`Vad skrivs ut?
int score = 7;
if (score >= 5) {
  System.out.print("Godkänd");
} else {
  System.out.print("Underkänd");
}`,options:[{id:"a",text:"Godkänd"},{id:"b",text:"Underkänd"},{id:"c",text:"5"},{id:"d",text:"Inget skrivs ut"}],answer_key:"a",explanation:"7 är större än eller lika med 5, så första grenen körs."},{id:"prog-10",track_id:"prog1a",topic:"Metoder",format:"short",difficulty:"Medel",source_tier:"Sekundär",estimated_minutes:5,prompt:"Förklara kort vad en metod gör i Java och ge ett enkelt exempel på vad den kan användas till.",answer_key:"En metod samlar kod som kan återanvändas. Exempel: en method som tar emot två tal och returnerar summan.",explanation:"Svar ska visa förståelse för återanvändning, input/return och ett konkret användningsfall."}],D=[{id:"mock-nack-60",name:"Nackademin-liknande 60 min",track_id:"nackademin_ux",total_minutes:60,sections:[{title:"Analys & logik",track_id:"nackademin_ux",topics:["Logik/analys","Problemlösning","Teststrategi","Scenario-övning"],question_ids:["ux-1","ux-2","ux-3","ux-4","ux-5","ux-6"],minutes:60,weight:1}],scoring_rules:"Poäng per korrekt svar. Korta svar bedöms mot modellförslag."},{id:"mock-iths-90",name:"IT-H Del 1+2 (90 min)",track_id:"iths_itsec",total_minutes:90,sections:[{title:"Del 1: Svenska/Engelska/Matte",track_id:"iths_itsec",topics:["Svenska/Engelska/Matte"],question_ids:["it-3","core-1"],minutes:20,weight:.2},{title:"Del 2: Dator- och nätverksteknik",track_id:"iths_itsec",topics:["Dator- och nätverksteknik"],question_ids:["it-1","it-2","it-4","it-5","it-6"],minutes:70,weight:.8}],scoring_rules:"Separat delpoäng, total viktad poäng enligt 20/80."},{id:"mock-prog-45",name:"Programmering 1/A delprov (45 min)",track_id:"prog1a",total_minutes:45,sections:[{title:"Del 1: Grunder",track_id:"prog1a",topics:["Variabler och datatyper","Villkor"],question_ids:["prog-1","prog-2","prog-6"],minutes:15,weight:.33},{title:"Del 2: Flöde och läsning",track_id:"prog1a",topics:["Loopar","Code tracing"],question_ids:["prog-3","prog-7","prog-9"],minutes:15,weight:.33},{title:"Del 3: Metoder och felsökning",track_id:"prog1a",topics:["Metoder","Felsökning","Debugging-game"],question_ids:["prog-4","prog-5","prog-8","prog-10"],minutes:15,weight:.34}],scoring_rules:"Separat poäng per del, fokus på grunder först och tydlig återkoppling på feltyper."}],F=[{id:"ev-nack-1",provider:"Nackademin",url:"https://nackademin.se/antagning/urval-och-antagningsprov/",claim:"Urvalet omfattar antagningsprov med fokus på analys- och problemlösningsförmåga.",confidence:"Hög",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-nack-2",provider:"Nackademin (EN)",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Den engelska antagningssidan bekräftar att provet används för att bedöma lämplighet och förmåga att hantera programmens upplägg.",confidence:"Medel",source_tier:"Officiell",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-iths-1",provider:"IT-Högskolan",url:"https://www.iths.se/antagningsprovet/",claim:"Antagningsprovet består av två delar: allmän del och programspecifik del.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-3",provider:"IT-Högskolan (FAQ/antagning)",url:"https://www.iths.se/vanliga-fragor/",claim:"IT-Högskolan hänvisar till att antagning och förberedande material kan variera, vilket gör det rimligt att träna både allmän del och programspecifik del separat.",confidence:"Medel",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-iths-2",provider:"IT-Högskolan",url:"https://www.iths.se/utbildningar/preparandkurs/",claim:"Förkunskapsspåret för IT-säkerhet lyfter dator- och nätverksteknik.",confidence:"Hög",source_tier:"Officiell",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-prog-1",provider:"Linköpings kommun (Komvux-info)",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i programmering brukar innehålla praktiska moment, teori och uppgifter i flera delar.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-prog-2",provider:"Komvux/exempel på prövning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"Prövning i gymnasiala kurser brukar kombinera teori med praktiska uppgifter, vilket passar ett programmeringsspår med både kunskapstest och kodläsning.",confidence:"Medel",source_tier:"Sekundär",track_id:"prog1a",last_verified_date:"2026-04-03"},{id:"ev-community-1",provider:"Community-sammanställning",url:"https://nackademin.se/en/admission/selection-entrance-exam/",claim:"Tidigare sökande beskriver tidsbrist som huvudutmaning; träningsmönster fokuserar därför på tidsatta övningar.",confidence:"Låg",source_tier:"Community",track_id:"nackademin_ux",last_verified_date:"2026-04-03"},{id:"ev-community-2",provider:"Community-sammanställning",url:"https://www.iths.se/antagningsprovet/",claim:"Tidigare sökande beskriver att del 1 ofta känns bred och att del 2 kräver fokus på nätverk, säkerhet och begrepp som brukar återkomma.",confidence:"Låg",source_tier:"Community",track_id:"iths_itsec",last_verified_date:"2026-04-03"},{id:"ev-community-3",provider:"Community-sammanställning",url:"https://www.linkoping.se/forskola-och-utbildning/vuxenutbildning/komvux/alla-skolor-inom-komvux-i-linkoping/linvux/provning/provning---gymnasiala-kurser",claim:"I programmeringsprövningar återkommer ofta uppgifter om variabler, villkor, loopar och felsökning snarare än enbart teori.",confidence:"Låg",source_tier:"Community",track_id:"prog1a",last_verified_date:"2026-04-03"}],pt=30,mt=45,Nt=1440*60*1e3,B=new Date(2026,3,7,9,0,0);function gt(e,t,i){return Math.min(i,Math.max(t,e))}function V(e){return e.reduce((t,i)=>t+i.minutes,0)}function U(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}function Et(e=B){return new Intl.DateTimeFormat("sv-SE",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}function kt(e=new Date,t=B){return Math.round((U(t)-U(e))/Nt)}function Ot(e=new Date,t=B){const i=kt(e,t);return i<0?"Första provet är genomfört":i===0?"D-0 idag":`D-${i}`}function vt(e){const t=V(e);if(t>=pt&&t<=mt)return e;const i=gt(t,pt,mt),r=i/Math.max(t,1),n=e.map(s=>({...s,minutes:Math.max(3,Math.round(s.minutes*r))})),a=gt(i-V(n),-5,5);return a!==0&&(n[0]={...n[0],minutes:Math.max(3,n[0].minutes+a)}),n}function ht(e=new Date,t=B){return U(e)<=U(t)?"A":"B"}function jt(e){const t=kt(e);return`Sprint A (${t<=0?"D-0: provdag":`D-${t} till D-0`}): Nackademin-prioritet`}function qt(){return vt([{trackId:"nackademin_ux",topic:"Analys + problemlösning",minutes:25,mode:"Drill"},{trackId:"prog1a",topic:"Programmeringsgrunder (variabler/villkor/loopar)",minutes:7,mode:"Lär"},{trackId:"iths_itsec",topic:"Snabb engelska/matte-rep",minutes:3,mode:"Drill"}])}function Ct(){return vt([{trackId:"iths_itsec",topic:"Dator- och nätverksteknik",minutes:24,mode:"Drill"},{trackId:"prog1a",topic:"Kodövning + felsökning",minutes:10,mode:"Drill"},{trackId:"nackademin_ux",topic:"Teststrategi och tidsdisciplin",minutes:6,mode:"Lär"}])}function q(e=new Date){const t=ht(e),i=t==="A"?qt():Ct();return{sprint:t,title:t==="A"?jt(e):"Sprint B (efter första provet): IT-H-prioritet",totalMinutes:V(i),blocks:i}}function Ft(e){const t=V(e)||1,i={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)i[r.trackId]+=r.minutes;return{nackademin_ux:Math.round(i.nackademin_ux/t*100),iths_itsec:Math.round(i.iths_itsec/t*100),prog1a:Math.round(i.prog1a/t*100)}}function _t(e=new Date){return ht(e)==="A"?{id:"mock-nack-60",label:"Nackademin-liknande 60 min",minutes:60}:{id:"mock-iths-90",label:"IT-H Del 1+2 (90 min)",minutes:90}}function bt(e,t){return e.filter(i=>!(t.trackId!=="all"&&i.track_id!==t.trackId||t.topic!=="all"&&i.topic!==t.topic||t.difficulty!=="all"&&i.difficulty!==t.difficulty||t.sourceTier!=="all"&&i.source_tier!==t.sourceTier))}function N(e){const t=e.reduce((i,r)=>i+r.estimated_minutes,0);return Math.min(45,Math.max(15,t))}function nt(e,t){let i=0;const r=new Map;for(const o of e){const d=(t[o.id]||"").trim().toLowerCase(),p=o.answer_key.trim().toLowerCase();if(o.format==="mcq"?d===p:d.length>0&&p.includes(d.slice(0,8))){i+=1;continue}r.set(o.topic,(r.get(o.topic)||0)+1)}const n=e.length,a=n>0?Math.round(i/n*100):0,s=[...r.entries()].sort((o,d)=>d[1]-o[1]).map(([o])=>o).slice(0,3);return{correct:i,total:n,scorePercent:a,weakTopics:s}}const ot="yh.study-sessions",O="yh.active-session",Vt=1;let R="default";function yt(e,t){if(!e)return t;try{return JSON.parse(e)}catch{return t}}function M(e){return`${e}.${R}`}function Ut(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"default"}function xt(e){return R=Ut(e),R}function Rt(){return R}function K(){return yt(localStorage.getItem(M(ot)),[])}function Ht(e){const t=K();t.unshift(e),localStorage.setItem(M(ot),JSON.stringify(t.slice(0,100)))}function Q(){return yt(localStorage.getItem(M(O)),null)}function E(e){localStorage.setItem(M(O),JSON.stringify(e))}function wt(){localStorage.removeItem(M(O))}function Bt(){return{version:Vt,exportedAt:new Date().toISOString(),studySessions:K(),activeSession:Q()}}function Kt(e){const t=Array.isArray(e.studySessions)?e.studySessions.slice(0,100):[];localStorage.setItem(M(ot),JSON.stringify(t));const i=!!e.activeSession&&typeof e.activeSession=="object";return i?localStorage.setItem(M(O),JSON.stringify(e.activeSession)):localStorage.removeItem(M(O)),{importedSessions:t.length,restoredActiveSession:i}}const St=document.querySelector("#app");if(!St)throw new Error("App container saknas");const J=St,$t={overview:"Översikt",tracks:"Spår",bank:"Frågebank",mock:"Mockprov",research:"Research",logic:"Logik"},ct=new URLSearchParams(window.location.search),at="yh.current-user-id",Qt="yh.study-profile";function C(e){return e.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"")||"gäst"}function Jt(){const e=localStorage.getItem(at)||"gäst",t=C(e);return localStorage.setItem(at,t),t}function Xt(e){const t=C(e);return localStorage.setItem(at,t),t}function Gt(){return`user-${Math.random().toString(36).slice(2,7)}`}function zt(e){const t=C(e);if(t==="gäst")return"G";const i=t.split(/[-_]+/).filter(Boolean);return i.length>=2?`${i[0][0]||""}${i[1][0]||""}`.toUpperCase():t.slice(0,2).toUpperCase()||"G"}function Mt(e){return`${Qt}.${C(e)}`}function Y(e){const t=Xt(e);y=t,j=t,xt(t),l=Q(),g=Dt(t),_=null,b&&(window.clearInterval(b),b=null),dt(),A(`Bytt till användare: ${t}`)}let I="overview",v={trackId:"all",topic:"all",difficulty:"all",sourceTier:"all"},y=Jt();xt(y);let j=y,X=_t().id;const Z=ct.get("view");Z&&Z in $t&&(I=Z);const tt=ct.get("track");tt&&$.some(e=>e.id===tt)&&(v={...v,trackId:tt});const et=ct.get("mock");et&&D.some(e=>e.id===et)&&(X=et);let l=Q(),_=null,b=null,lt=navigator.onLine,H="",It="Designa en digital tjänst för IKEA som löser problemet: kunden vill boka upphämtning av returvaror.";const L={sessionPreference:[{id:"30",label:"30 min fokuspass (rekommenderat nu)"},{id:"45",label:"45 min standardpass"},{id:"60",label:"60 min när jag har energi"}],blocker:[{id:"time",label:"Tidsstress i prov"},{id:"logic",label:"Logik och resonemang"},{id:"network",label:"IT/nätverkstermer"},{id:"coding",label:"Kodförståelse/felsökning"},{id:"other",label:"Annat (skriv i fritext)"}],confidence:[{id:"low",label:"Låg - behöver tydlig guidning"},{id:"mid",label:"Medel - behöver mest träning"},{id:"high",label:"Hög - vill främst ha tidsprov"}],targetPriority:[{id:"nack",label:"Nackademin UX (akut)"},{id:"iths",label:"IT-H IT-säkerhet"},{id:"prog",label:"Programmering 1/A"}]};let g=Dt();function S(e){return $.find(t=>t.id===e)?.name||e}function G(e){return`track-${e}`}function Wt(e){const t=Math.max(0,Math.floor(e/1e3)),i=Math.floor(t/60).toString().padStart(2,"0"),r=(t%60).toString().padStart(2,"0");return`${i}:${r}`}function Pt(e){return e.questionIds.map(t=>h.find(i=>i.id===t)).filter(Boolean)}function Yt(e){return e.reduce((t,i)=>t+i.duration_minutes,0)}function Zt(e){const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of e)t.nackademin_ux+=r.track_mix.nackademin_ux||0,t.iths_itsec+=r.track_mix.iths_itsec||0,t.prog1a+=r.track_mix.prog1a||0;const i=Math.max(1,e.length);return{nackademin_ux:Math.round(t.nackademin_ux/i),iths_itsec:Math.round(t.iths_itsec/i),prog1a:Math.round(t.prog1a/i)}}function Tt(){return h.filter(e=>["Logik/analys","Svenska/Engelska/Matte","Code tracing","Debugging-game"].includes(e.topic))}function te(){const e=["IKEA","1177","SJ","Skatteverket","Foodora"],t=["användaren hittar inte status på sitt ärende","för många steg gör att användaren avbryter","det är otydligt vad som händer efter beställning","returer och ombokningar upplevs krångliga","supporten får för många repetitiva frågor"],i=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)];return`Designa en digital tjänst för ${i} som löser problemet: ${r}.`}function it(){return{sessionPreference:"30",blocker:"time",confidence:"mid",targetPriority:"nack",notes:""}}function Dt(e=y){try{const t=localStorage.getItem(Mt(e));if(!t)return it();const i=JSON.parse(t);return{...it(),...i}}catch{return it()}}function ee(e,t=y){localStorage.setItem(Mt(t),JSON.stringify(e))}function ie(e,t,i){const r=nt(t,i);if(!e)return{sectionResults:[],finalScore:r.scorePercent};const n=D.find(d=>d.id===e);if(!n)return{sectionResults:[],finalScore:r.scorePercent};const a=n.sections.map(d=>{const p=t.filter(P=>d.question_ids.includes(P.id)),m=nt(p,i);return{title:d.title,scorePercent:m.scorePercent,correct:m.correct,total:m.total,weight:d.weight}}),s=a.reduce((d,p)=>d+p.weight,0)||1,o=a.reduce((d,p)=>d+p.scorePercent*(p.weight/s),0);return{templateName:n.name,sectionResults:a,finalScore:Math.round(o)}}function rt(e,t){return L[e].find(i=>i.id===t)?.label||t}function z(e){return e==="iths"?"iths_itsec":e==="prog"?"prog1a":"nackademin_ux"}function re(e){return e==="nackademin_ux"?"Logik/analys":e==="iths_itsec"?"Dator- och nätverksteknik":"Loopar"}function st(e){const t=h.filter(r=>r.topic===e);if(t.length===0)return"nackademin_ux";const i={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const r of t)i[r.track_id]+=1;return Object.entries(i).sort((r,n)=>n[1]-r[1])[0]?.[0]||"nackademin_ux"}function At(e){const t=z(g.targetPriority),i=q().sprint,r={nackademin_ux:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0},iths_itsec:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0},prog1a:{minutes:0,avgScore:0,weight:0,weakHits:0,recentHeavy:0,score:0}},n=[...e].sort((u,c)=>+new Date(c.date)-+new Date(u.date));for(const u of e){for(const c of $.map(k=>k.id)){const k=u.track_mix[c],T=k/100;k<=0||(r[c].minutes+=Math.round(u.duration_minutes*T),r[c].avgScore+=u.score*T,r[c].weight+=T)}for(const c of u.weak_topics){const k=st(c);r[k].weakHits+=1}}for(const u of $.map(c=>c.id)){const c=r[u];c.avgScore=c.weight>0?Math.round(c.avgScore/c.weight):0}const a=n.slice(0,2);for(const u of a){const c=Object.entries(u.track_mix).sort((k,T)=>T[1]-k[1])[0]?.[0]||"nackademin_ux";u.track_mix[c]>=60&&(r[c].recentHeavy+=1)}for(const u of $){const c=r[u.id];let k=0;u.id===t&&(k+=2.2),i==="A"&&u.id==="nackademin_ux"&&(k+=1.4),i==="B"&&u.id==="iths_itsec"&&(k+=1.4),c.minutes<20&&(k+=1.2),k+=c.weakHits*.75,k-=c.recentHeavy*1.1,c.avgScore>75&&c.minutes>80&&(k-=.6),c.score=k}const s=Object.entries(r).sort((u,c)=>c[1].score-u[1].score)[0]?.[0]||t,d=n.flatMap(u=>u.weak_topics).filter(u=>st(u)===s)[0]||re(s),p=r[s].weakHits>=2||g.confidence==="low"?"Lär":"Drill",m=Math.max(25,Math.min(45,Number.parseInt(g.sessionPreference,10)||35)),W=h.filter(u=>u.track_id===s).sort((u,c)=>{const k=u.topic===d?1:0;return(c.topic===d?1:0)-k}).slice(0,10).map(u=>u.id),x=`${S(s)} prioriteras nu (${r[s].weakHits} svaghetsträffar, senaste fokus balanseras).`;return{trackId:s,topic:d,mode:p,durationMinutes:m,questionIds:W,reason:x}}function ne(e,t){return $.map(i=>{const r=e.reduce((p,m)=>p+Math.round(m.duration_minutes*(m.track_mix[i.id]||0)/100),0),n=e.reduce((p,m)=>p+m.score*((m.track_mix[i.id]||0)/100),0),a=e.reduce((p,m)=>p+(m.track_mix[i.id]||0)/100,0),s=a>0?Math.round(n/a):0,o=e.flatMap(p=>p.weak_topics).filter(p=>st(p)===i.id).length;let d="in_progress";return r<15?d="not_started":o>=3||a>0&&s<55?d="needs_help":s>=75&&r>=80&&o<=1&&(d="near_ready"),{trackId:i.id,minutes:r,avgScore:s,weakHits:o,priority:t.trackId===i.id,stage:d}})}function ae(e){return e==="not_started"?"Ej startad":e==="needs_help"?"Mycket fel":e==="near_ready"?"Nära klar":"Påbörjad"}function se(e){return e==="not_started"?"chip-not-started":e==="needs_help"?"chip-needs-help":e==="near_ready"?"chip-near-ready":"chip-in-progress"}function oe(e){if(e==="logic"){I="logic",f();return}I="bank",v={trackId:e==="ux"?"nackademin_ux":e==="it"?"iths_itsec":"prog1a",topic:"all",difficulty:"all",sourceTier:"all"},f()}function Lt(){const e=q(),t=[],i=z(g.targetPriority),n={time:["Logik/analys","Problemlösning","Svenska/Engelska/Matte"],logic:["Logik/analys","Code tracing","Debugging-game"],network:["Dator- och nätverksteknik","Säkerhet och social engineering"],coding:["Loopar","Metoder","Felsökning","Code tracing","Debugging-game"],other:[]}[g.blocker]||[];for(const s of e.blocks){const o=h.filter(m=>m.track_id===s.trackId),d=s.minutes>=20?4:s.minutes>=10?3:2,p=o.slice(0,d);for(const m of p)t.find(P=>P.id===m.id)||t.push(m)}const a=h.filter(s=>s.track_id===i);for(const s of a)if(t.find(o=>o.id===s.id)||t.unshift(s),t.length>=12)break;if(n.length>0){const s=h.filter(o=>n.includes(o.topic));for(const o of s)if(t.find(d=>d.id===o.id)||t.push(o),t.length>=12)break}if(t.length<8){for(const s of h)if(t.find(o=>o.id===s.id)||t.push(s),t.length>=8)break}return t.slice(0,12)}function A(e){H=e,f(),window.setTimeout(()=>{H="",f()},3500)}function ce(){const e=Bt(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a"),n=new Date().toISOString().replace(/[:.]/g,"-");r.href=i,r.download=`yh-prep-backup-${n}.json`,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(i),A("Backup exporterat.")}async function le(e){try{const t=await e.text(),i=JSON.parse(t),r=Kt(i);l=Q(),A(`Import klar: ${r.importedSessions} pass, aktiv session ${r.restoredActiveSession?"återställd":"saknas"}.`)}catch{A("Import misslyckades. Kontrollera att filen är en giltig backup.")}}function de(){if(!("serviceWorker"in navigator))return;if(window.location.hostname.endsWith("github.io")){navigator.serviceWorker.getRegistrations().then(t=>Promise.all(t.map(i=>i.unregister()))).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(i=>caches.delete(i)))).catch(()=>{});return}navigator.serviceWorker.register("sw.js").catch(()=>{A("Kunde inte aktivera offline-läge.")})}function dt(){b&&(window.clearInterval(b),b=null),l&&(b=window.setInterval(()=>{if(l){if(Date.now()>=l.endsAt){ut(!0);return}f()}},1e3))}function ue(e){if(e.length===0)return{nackademin_ux:0,iths_itsec:0,prog1a:0};const t={nackademin_ux:0,iths_itsec:0,prog1a:0};for(const i of e)t[i.track_id]+=1;return{nackademin_ux:Math.round(t.nackademin_ux/e.length*100),iths_itsec:Math.round(t.iths_itsec/e.length*100),prog1a:Math.round(t.prog1a/e.length*100)}}function w(e,t,i,r){t.length!==0&&(l={id:crypto.randomUUID(),mode:e,startedAt:Date.now(),endsAt:Date.now()+i*6e4,questionIds:t,currentIndex:0,answers:{},templateId:r},E(l),dt(),f())}function ut(e=!1){if(!l)return;const t=Pt(l),i=nt(t,l.answers),r=ie(l.templateId,t,l.answers),n=ue(t),a=Math.max(1,Math.round((Date.now()-l.startedAt)/6e4));Ht({id:l.id,date:new Date().toISOString(),duration_minutes:a,mode:l.mode,track_mix:n,score:r.finalScore,weak_topics:i.weakTopics}),_={mode:l.mode,scorePercent:r.finalScore,correct:i.correct,total:i.total,weakTopics:i.weakTopics,autoSubmitted:e,sectionResults:r.sectionResults,templateName:r.templateName},l=null,wt(),b&&(window.clearInterval(b),b=null),f()}function pe(){l=null,wt(),b&&(window.clearInterval(b),b=null),f()}function ft(){const e=K(),t=q(),i=Ft(t.blocks),r=Zt(e),n=Ot(),a=Et(),s=_t(),o=Lt(),d=z(g.targetPriority),p=S(d),m=Number.parseInt(g.sessionPreference,10)||t.totalMinutes,P=rt("blocker",g.blocker),W=Rt(),x=At(e),u=ne(e,x);return`
    <div class="grid overview-grid">
      <section class="card critical-card span-12">
        <h3>Snabbstart idag</h3>
        <p class="muted">Status: ${lt?"Online":"Offline"} • ${t.totalMinutes} min</p>
        <div class="critical-kpis">
          <p><strong>Prov:</strong> ${n}</p>
          <p><strong>Nästa mock:</strong> ${s.minutes} min</p>
        </div>
        <p class="muted">Prioriterat nu: ${p} • Passmål: ${m} min • Fokus: ${P}</p>
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
          ${S(x.trackId)} • ${x.topic} • ${x.mode} (${x.durationMinutes} min)
        </p>
        <p class="muted">${x.reason}</p>
        <div class="inline-controls">
          <button class="primary" data-action="start-recommended">Starta rekommenderat pass</button>
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
                    <span class="status-chip ${se(c.stage)}">${ae(c.stage)}</span>
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
            <input id="user-id-input" data-user-id="draft" value="${j}" placeholder="t.ex. martin, sara, klass-a" />
            <button class="secondary" data-action="generate-user-id">Skapa nytt id</button>
            <button class="primary" data-action="switch-user-id">Byt användare</button>
          </div>
          <p class="muted">Aktiv användare: <strong>${y}</strong> • Storage: ${W}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>2-min intervju (för personlig plan)</summary>
          <p class="muted">Flervalsfrågor med fritext för "Annat". Svaren styr rekommenderad träning i appen.</p>
          <div class="inline-controls">
            <label for="profile-sessionPreference">Passlängd</label>
            <select id="profile-sessionPreference" data-profile="sessionPreference">
              ${L.sessionPreference.map(c=>`<option value="${c.id}" ${g.sessionPreference===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-blocker">Största hinder</label>
            <select id="profile-blocker" data-profile="blocker">
              ${L.blocker.map(c=>`<option value="${c.id}" ${g.blocker===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-confidence">Nuvarande nivå</label>
            <select id="profile-confidence" data-profile="confidence">
              ${L.confidence.map(c=>`<option value="${c.id}" ${g.confidence===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-targetPriority">Primärt mål</label>
            <select id="profile-targetPriority" data-profile="targetPriority">
              ${L.targetPriority.map(c=>`<option value="${c.id}" ${g.targetPriority===c.id?"selected":""}>${c.label}</option>`).join("")}
            </select>

            <label for="profile-notes">Annat du vill att planen tar hänsyn till</label>
            <textarea id="profile-notes" data-profile="notes" rows="3" placeholder="Skriv fritt här (valfritt)">${g.notes}</textarea>
            <button class="primary" data-action="save-profile">Spara intervju</button>
          </div>
          <p class="muted">Valt just nu: ${rt("sessionPreference",g.sessionPreference)} • ${rt("blocker",g.blocker)}</p>
        </details>
      </section>

      <section class="card span-6">
        <details>
          <summary>Visa dagens plan (${t.blocks.length} block)</summary>
          <p class="muted">${t.title}</p>
          <ol class="list-clean">
            ${t.blocks.map(c=>`<li><span class="track-pill ${G(c.trackId)}">${S(c.trackId)}</span> ${c.topic} (${c.minutes} min)</li>`).join("")}
          </ol>
          <p class="muted">Fördelning: UX ${i.nackademin_ux}% • IT-H ${i.iths_itsec}% • Prog1/A ${i.prog1a}%</p>
          <p class="muted">Frågor i dagens pass: ${o.length}</p>
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
          <p><strong>Genomförd tid:</strong> ${Yt(e)} min (${e.length} pass)</p>
          <div class="inline-controls">
            <button class="secondary" data-action="export-progress">Exportera backup</button>
            <input type="file" accept="application/json" data-input="import-progress" />
          </div>
          ${H?`<p class="success">${H}</p>`:""}
        </details>
      </section>
    </div>
  `}function me(){const e=["Logik/analys","Mattebas","Teststrategi","Programmeringsgrunder"];return`
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
        <p>${It}</p>
        <p class="muted">
          Workflow: 1) Målgruppsanalys → 2) Enkel wireframe-idé (text/skiss) → 3) Motivering.
        </p>
        <button class="primary" data-action="generate-ux-case">Generera nytt case</button>
      </section>
    </div>
  `}function ge(){const e=bt(h,v),t=Array.from(new Set(h.map(i=>i.topic))).sort();return`
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
            ${$.map(i=>`<option value="${i.id}" ${v.trackId===i.id?"selected":""}>${i.name}</option>`).join("")}
          </select>

          <select data-filter="topic">
            <option value="all" ${v.topic==="all"?"selected":""}>Alla ämnen</option>
            ${t.map(i=>`<option value="${i}" ${v.topic===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <select data-filter="difficulty">
            <option value="all" ${v.difficulty==="all"?"selected":""}>Alla nivåer</option>
            ${["Lätt","Medel","Svår"].map(i=>`<option value="${i}" ${v.difficulty===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <select data-filter="sourceTier">
            <option value="all" ${v.sourceTier==="all"?"selected":""}>Alla källnivåer</option>
            ${["Officiell","Sekundär","Community"].map(i=>`<option value="${i}" ${v.sourceTier===i?"selected":""}>${i}</option>`).join("")}
          </select>

          <button class="primary" data-action="start-drill">Starta Drill (${N(e)} min)</button>
        </div>
        <p class="muted">${e.length} frågor matchar filter.</p>
      </section>

      ${e.map(i=>`
            <article class="card span-6">
              <p>
                <span class="track-pill ${G(i.track_id)}">${S(i.track_id)}</span>
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
  `}function fe(){const e=D.find(i=>i.id===X)||D[0],t=e.sections.reduce((i,r)=>i+r.question_ids.length,0);return`
    <div class="grid">
      <section class="card span-12">
        <h3>Mockprov (tidsprov)</h3>
        <div class="inline-controls">
          <select data-mock-select="true">
            ${D.map(i=>`<option value="${i.id}" ${i.id===e.id?"selected":""}>${i.name}</option>`).join("")}
          </select>
          <button class="primary" data-action="start-mock">Starta ${e.total_minutes} min</button>
        </div>
        <p class="muted">${t} frågor i detta mockprov.</p>
        <p class="muted">Poängregel: ${e.scoring_rules}</p>
      </section>

      ${e.sections.map(i=>`
            <section class="card span-6">
              <h3>${i.title}</h3>
              <p><span class="track-pill ${G(i.track_id)}">${S(i.track_id)}</span></p>
              <p>Tid: ${i.minutes} min • Vikt: ${Math.round(i.weight*100)}%</p>
              <p>Ämnen: ${i.topics.join(" • ")}</p>
              <p class="muted">Frågor: ${i.question_ids.join(", ")}</p>
            </section>
          `).join("")}
    </div>
  `}function ke(){const e=F.filter(r=>r.source_tier==="Officiell").length,t=F.filter(r=>r.source_tier==="Community").length,i=F.filter(r=>r.source_tier==="Sekundär").length;return`
    <div class="grid">
      <section class="card span-12">
        <h3>Evidence-kort: tidigare års prov och mönster</h3>
        <p class="muted">Officiell: ${e} • Sekundär: ${i} • Community: ${t}</p>
      </section>
      ${F.map(r=>`
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
  `}function ve(){const e=Tt();return`
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
                <span class="track-pill ${G(t.track_id)}">${S(t.track_id)}</span>
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
  `}function he(){if(!l)return"";const e=Pt(l),t=e[l.currentIndex];if(!t)return"";const i=l.endsAt-Date.now(),r=Object.keys(l.answers).length,n=l.answers[t.id]||"";return`
    <section class="card session">
      <h3>Aktiv ${l.mode}</h3>
      <p class="session-timer ${i<5*6e4?"warning":""}">Tid kvar: ${Wt(i)}</p>
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
  `}function _e(){if(!_)return"";const e=_.sectionResults.length===0?"":`
        <p><strong>Sektionsrapport:</strong></p>
        <ul class="list-clean">
          ${_.sectionResults.map(t=>`<li>${t.title}: ${t.correct}/${t.total} (${t.scorePercent}%) • Vikt ${Math.round(t.weight*100)}%</li>`).join("")}
        </ul>
      `;return`
    <section class="card">
      <h3 class="success">Senaste resultat: ${_.scorePercent}%</h3>
      <p>${_.mode} • ${_.correct}/${_.total} rätt ${_.autoSubmitted?"(autosubmit vid timeout)":""}</p>
      ${_.templateName?`<p class="muted">Mall: ${_.templateName}</p>`:""}
      ${e}
      <p><strong>Svaga områden:</strong> ${_.weakTopics.length>0?_.weakTopics.join(" • "):"Inga tydliga svagheter"}</p>
    </section>
  `}function be(){switch(I){case"overview":return ft();case"tracks":return me();case"bank":return ge();case"mock":return fe();case"research":return ke();case"logic":return ve();default:return ft()}}function f(){const e=q();J.innerHTML=`
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
            <details class="mini-menu user-menu">
              <summary class="user-avatar" title="Byt användare">${zt(y)}</summary>
              <div class="mini-menu-body">
                <p class="muted">Aktiv: ${y}</p>
                <button class="secondary" data-action="quick-switch-user">Byt user id</button>
                <button class="secondary" data-action="quick-switch-guest">Byt till gäst</button>
              </div>
            </details>
          </div>
        </div>

        <nav class="nav">
          ${Object.entries($t).map(([t,i])=>`<button data-view="${t}" class="${I===t?"active":""}">${i}</button>`).join("")}
        </nav>
      </header>

      <main>
        ${he()}
        ${_e()}
        ${be()}
      </main>
    </div>
  `}J.addEventListener("click",e=>{const t=e.target,i=t.closest("button[data-view]");if(i){I=i.dataset.view,f();return}const r=t.closest("[data-action]");if(!r)return;const n=r.dataset.action;if(n){if(n==="jump-mock"){I="mock",f();return}if(n==="export-progress"){ce();return}if(n==="start-today-drill"){const a=Lt(),s=q(),o=Number.parseInt(g.sessionPreference,10);w("Drill",a.map(d=>d.id),Number.isNaN(o)?s.totalMinutes:Math.max(30,Math.min(45,o)));return}if(n==="start-priority-learn"){const a=z(g.targetPriority),s=h.filter(o=>o.track_id===a).slice(0,6);w("Lär",s.map(o=>o.id),20);return}if(n==="start-recommended"){const a=At(K());w(a.mode,a.questionIds,a.durationMinutes);return}if(n==="quick-tab"){const a=r.dataset.tab;a&&oe(a);return}if(n==="generate-ux-case"){It=te(),f();return}if(n==="start-logic-drill"){const a=Tt();w("Drill",a.slice(0,12).map(s=>s.id),N(a));return}if(n==="start-track-drill"){const a=r.dataset.track,s=h.filter(o=>o.track_id===a).slice(0,8).map(o=>o.id);w("Drill",s,N(h.filter(o=>s.includes(o.id))));return}if(n==="start-track-learn"){const a=r.dataset.track,s=h.filter(o=>o.track_id===a).slice(0,6).map(o=>o.id);w("Lär",s,20);return}if(n==="open-python-course"){window.location.href="python-minikurs.html";return}if(n==="start-drill"){const a=bt(h,v);w("Drill",a.slice(0,12).map(s=>s.id),N(a));return}if(n==="start-mock"){const a=D.find(o=>o.id===X);if(!a)return;const s=a.sections.flatMap(o=>o.question_ids);w("Tidsprov",s,a.total_minutes,a.id);return}if(n==="save-profile"){ee(g),A("Intervju sparad. Rekommenderad plan uppdaterad.");return}if(n==="generate-user-id"){j=Gt(),f();return}if(n==="quick-switch-user"){const a=window.prompt("Ange user id (t.ex. martin, sara, klass-a):",y);if(a===null)return;Y(a);return}if(n==="quick-switch-guest"){Y("gäst");return}if(n==="switch-user-id"){Y(j);return}if(l){if(n==="prev-q"){l.currentIndex=Math.max(0,l.currentIndex-1),E(l),f();return}if(n==="next-q"){l.currentIndex=Math.min(l.questionIds.length-1,l.currentIndex+1),E(l),f();return}if(n==="submit-session"){ut(!1);return}if(n==="cancel-session"){pe();return}if(n==="answer"){const a=t,s=a.dataset.qid;if(!s)return;l.answers[s]=a.value,E(l),f()}}}});J.addEventListener("input",e=>{const t=e.target,i=t.closest("input[data-user-id='draft']");if(i){j=C(i.value);return}const r=t.closest("[data-profile]");if(r){const o=r.dataset.profile;o&&(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement)&&(g={...g,[o]:t.value});return}const n=t.closest("textarea[data-action='answer-text']");if(n&&l){const o=n.dataset.qid;o&&(l.answers[o]=n.value,E(l));return}const a=t.closest("select[data-filter]");if(a){const o=a.dataset.filter;v={...v,[o]:a.value},f();return}const s=t.closest("select[data-mock-select='true']");s&&(X=s.value,f())});J.addEventListener("change",e=>{const i=e.target.closest("input[data-input='import-progress']");if(!i||!i.files||i.files.length===0)return;const[r]=i.files;le(r),i.value=""});window.addEventListener("online",()=>{lt=!0,f()});window.addEventListener("offline",()=>{lt=!1,f()});de();l&&Date.now()>=l.endsAt?ut(!0):(dt(),f());
