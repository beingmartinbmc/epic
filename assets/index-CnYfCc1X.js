import{r as v,a as G,R as w}from"./vendor-nf7bT_Uh.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();var A={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=v,L=Symbol.for("react.element"),P=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,U=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function M(s,n,l){var r,t={},i=null,o=null;l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)j.call(n,r)&&!D.hasOwnProperty(r)&&(t[r]=n[r]);if(s&&s.defaultProps)for(r in n=s.defaultProps,n)t[r]===void 0&&(t[r]=n[r]);return{$$typeof:L,type:s,key:i,ref:o,props:t,_owner:U.current}}N.Fragment=P;N.jsx=M;N.jsxs=M;A.exports=N;var e=A.exports,y={},k=G;y.createRoot=k.createRoot,y.hydrateRoot=k.hydrateRoot;const q=w.memo(({selectedText:s})=>{const n=v.useMemo(()=>{switch(s){case"BHAGAVAD_GITA":return{icon:"fas fa-om",title:"Hindu Wisdom",subtitle:"Sacred guidance from the Bhagavad Gita"};case"VEDAS":return{icon:"fas fa-om",title:"Vedic Wisdom",subtitle:"Sacred guidance from the Vedas"};case"QURAN":return{icon:"fas fa-star-and-crescent",title:"Islamic Wisdom",subtitle:"Sacred guidance from the Holy Quran"};case"BIBLE":return{icon:"fas fa-cross",title:"Christian Wisdom",subtitle:"Sacred guidance from the Holy Bible"};case"GURU_GRANTH_SAHIB":return{icon:"☬",title:"Sikh Wisdom",subtitle:"Sacred guidance from the Guru Granth Sahib"};case"TRIPITAKA":return{icon:"fas fa-dharmachakra",title:"Buddhist Wisdom",subtitle:"Sacred guidance from the Tripitaka"};case"ALL":default:return{icon:"🕉️",title:"Divine Wisdom",subtitle:"Sacred guidance from ancient texts"}}},[s]);return e.jsx("div",{className:"divine-header",children:e.jsxs("div",{className:"header-content",children:[e.jsxs("h1",{className:"divine-title",children:[n.icon.startsWith("fas")?e.jsx("i",{className:n.icon}):e.jsx("span",{className:"unicode-icon",children:n.icon}),e.jsx("span",{children:n.title})]}),e.jsx("p",{className:"divine-subtitle",children:n.subtitle})]})})}),Q=w.memo(({userInput:s,setUserInput:n,selectedText:l,onTextChange:r,onSubmit:t,isLoading:i})=>e.jsxs("form",{id:"guidanceForm",onSubmit:t,children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"userMessage",className:"form-label",children:[e.jsx("i",{className:"fas fa-heart"})," Share your heart's journey"]}),e.jsx("textarea",{id:"userMessage",value:s,onChange:o=>n(o.target.value),placeholder:"Tell me about your feelings, struggles, or what's on your mind...",className:"form-control",rows:"5",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"selectedText",className:"form-label",children:[e.jsx("i",{className:"fas fa-book-open"})," Choose your sacred source"]}),e.jsxs("select",{id:"selectedText",value:l,onChange:r,className:"form-select",required:!0,children:[e.jsx("option",{value:"",children:"Select divine wisdom..."}),e.jsx("option",{value:"BHAGAVAD_GITA",children:"Bhagavad Gita"}),e.jsx("option",{value:"VEDAS",children:"The Vedas"}),e.jsx("option",{value:"QURAN",children:"Holy Quran"}),e.jsx("option",{value:"BIBLE",children:"Holy Bible"}),e.jsx("option",{value:"GURU_GRANTH_SAHIB",children:"Guru Granth Sahib"}),e.jsx("option",{value:"TRIPITAKA",children:"The Tripitaka"}),e.jsx("option",{value:"ALL",children:"All Sacred Texts"})]})]}),e.jsxs("button",{type:"submit",className:"divine-btn",disabled:i,children:[e.jsx("i",{className:"fas fa-search"})," ",i?"Seeking divine wisdom...":"Seek Divine Guidance"]})]})),R={मत्ती:"Matthew",मरकुस:"Mark",लूका:"Luke",यूहन्ना:"John",प्रेरितों:"Acts",रोमियों:"Romans",कुरिन्थियों:"Corinthians",गलातियों:"Galatians",इफिसियों:"Ephesians",फिलिप्पियों:"Philippians",कुलुस्सियों:"Colossians",थिस्सलुनीकियों:"Thessalonians",तिमुथियुस:"Timothy",तीतुस:"Titus",फिलेमोन:"Philemon",इब्रानियों:"Hebrews",याकूब:"James",पतरस:"Peter",यहूदा:"Jude",प्रकाशितवाक्य:"Revelation",उत्पत्ति:"Genesis",निर्गम:"Exodus",लैव्यव्यवस्था:"Leviticus",गिनती:"Numbers",व्यवस्थाविवरण:"Deuteronomy",यहोशू:"Joshua",न्यायियों:"Judges",यूलूसेज:"Judges",रूत:"Ruth",शमूएल:"Samuel",राजाओं:"Kings",इतिहास:"Chronicles",एज्रा:"Ezra",नहेमायाह:"Nehemiah",एस्तर:"Esther",अय्यूब:"Job","भजन संहिता":"Psalms",नीतिवचन:"Proverbs",सभोपदेशक:"Ecclesiastes",श्रेष्ठगीत:"Song of Solomon",यशायाह:"Isaiah",यिर्मयाह:"Jeremiah",विलापगीत:"Lamentations",यहेजकेल:"Ezekiel",दानिय्येल:"Daniel",होशे:"Hosea",योएल:"Joel",आमोस:"Amos",ओबद्याह:"Obadiah",योना:"Jonah",मीखाह:"Micah",नहूम:"Nahum",हबकूक:"Habakkuk",सपन्याह:"Zephaniah",हाग्गै:"Haggai",जकर्याह:"Zechariah",मलाकी:"Malachi","भगवद गीता":"Bhagavad Gita",श्रीमद्भगवद्गीता:"Bhagavad Gita",गीता:"Bhagavad Gita",भगवद्गीता:"Bhagavad Gita","श्रीमद्भगवद गीता":"Bhagavad Gita",क़ुरआन:"Quran",क़ुरान:"Quran",कुरान:"Quran",कुरआन:"Quran","पवित्र कुरान":"Quran","कुरान शरीफ":"Quran","गुरु ग्रंथ साहिब":"Guru Granth Sahib","गुरु ग्रंथ":"Guru Granth Sahib","ग्रंथ साहिब":"Guru Granth Sahib","गुरु ग्रंथ साहिब जी":"Guru Granth Sahib",त्रिपिटक:"Tripitaka",तीपिटक:"Tripitaka","पालि कैनन":"Tripitaka","बौद्ध ग्रंथ":"Tripitaka",धम्मपद:"Dhammapada","सुत्त पिटक":"Sutta Pitaka","विनय पिटक":"Vinaya Pitaka","अभिधम्म पिटक":"Abhidhamma Pitaka",Mateo:"Matthew",Juan:"John",Hechos:"Acts",Corintios:"Corinthians",Efesios:"Ephesians",Filipenses:"Philippians",Colosenses:"Colossians",Tesalonicenses:"Thessalonians",Timoteo:"Timothy",Filemón:"Philemon",Hebreos:"Hebrews",Santiago:"James",Apocalipsis:"Revelation",Génesis:"Genesis",Éxodo:"Exodus",Deuteronomio:"Deuteronomy",Jueces:"Judges",Proverbios:"Proverbs",Eclesiastés:"Ecclesiastes",Cantares:"Song of Solomon",Jeremías:"Jeremiah",Lamentaciones:"Lamentations",Oseas:"Hosea",Abdías:"Obadiah",Jonás:"Jonah",Miqueas:"Micah",Nahúm:"Nahum",Sofonías:"Zephaniah",Hageo:"Haggai",Zacarías:"Zechariah",Malaquías:"Malachi","El Bhagavad Gita":"Bhagavad Gita",Corán:"Quran","El Corán":"Quran","Corán Sagrado":"Quran","El Corán Sagrado":"Quran","El Guru Granth Sahib":"Guru Granth Sahib","El Tripitaka":"Tripitaka","El Tipitaka":"Tripitaka","El Canon Pali":"Tripitaka","Las Escrituras Budistas":"Tripitaka","El Dhammapada":"Dhammapada",Mateus:"Matthew",Marcos:"Mark",Lucas:"Luke",João:"John",Atos:"Acts",Romanos:"Romans",Coríntios:"Corinthians",Gálatas:"Galatians",Efésios:"Ephesians",Filipenses:"Philippians",Colossenses:"Colossians",Tessalonicenses:"Thessalonians",Timóteo:"Timothy",Tito:"Titus",Filemom:"Philemon",Hebreus:"Hebrews",Tiago:"James",Pedro:"Peter",Apocalipse:"Revelation",Gênesis:"Genesis",Êxodo:"Exodus",Levítico:"Leviticus",Números:"Numbers",Deuteronômio:"Deuteronomy",Juízes:"Judges",Rute:"Ruth",Salmos:"Psalms",Provérbios:"Proverbs",Eclesiastes:"Ecclesiastes",Cânticos:"Song of Solomon",Isaías:"Isaiah",Jeremias:"Jeremiah",Lamentações:"Lamentations",Ezequiel:"Ezekiel",Oséias:"Hosea",Amós:"Amos",Obadias:"Obadiah",Miquéias:"Micah",Naum:"Nahum",Habacuque:"Habakkuk",Sofonias:"Zephaniah",Ageu:"Haggai",Zacarias:"Zechariah",Malaquias:"Malachi","O Bhagavad Gita":"Bhagavad Gita","A Gita":"Bhagavad Gita",Alcorão:"Quran","O Alcorão":"Quran","Alcorão Sagrado":"Quran","O Alcorão Sagrado":"Quran","O Guru Granth Sahib":"Guru Granth Sahib","O Tripitaka":"Tripitaka","O Tipitaka":"Tripitaka","O Canon Pali":"Tripitaka","As Escrituras Budistas":"Tripitaka","O Dhammapada":"Dhammapada",Matthieu:"Matthew",Marc:"Mark",Luc:"Luke",Jean:"John",Actes:"Acts",Romains:"Romans",Corinthiens:"Corinthians",Galates:"Galatians",Éphésiens:"Ephesians",Philippiens:"Philippians",Colossiens:"Colossians",Thessaloniciens:"Thessalonians",Timothée:"Timothy",Tite:"Titus",Philémon:"Philemon",Hébreux:"Hebrews",Jacques:"James",Pierre:"Peter",Apocalypse:"Revelation",Genèse:"Genesis",Exode:"Exodus",Lévitique:"Leviticus",Nombres:"Numbers",Deutéronome:"Deuteronomy",Josué:"Joshua",Juges:"Judges",Psaumes:"Psalms",Proverbes:"Proverbs",Ecclésiaste:"Ecclesiastes",Cantique:"Song of Solomon",Ésaïe:"Isaiah",Jérémie:"Jeremiah",Ézéchiel:"Ezekiel",Osée:"Hosea",Joël:"Joel",Abdias:"Obadiah",Jonas:"Jonah",Michée:"Micah",Habacuc:"Habakkuk",Sophonie:"Zephaniah",Aggée:"Haggai",Zacharie:"Zechariah",Malachie:"Malachi","Le Bhagavad Gita":"Bhagavad Gita","La Gita":"Bhagavad Gita",Coran:"Quran","Le Coran":"Quran","Coran Sacré":"Quran","Le Coran Sacré":"Quran","Le Guru Granth Sahib":"Guru Granth Sahib","Le Tripitaka":"Tripitaka","Le Tipitaka":"Tripitaka","Le Canon Pali":"Tripitaka","Les Ecritures Bouddhiques":"Tripitaka","Le Dhammapada":"Dhammapada",Matthäus:"Matthew",Markus:"Mark",Lukas:"Luke",Johannes:"John",Apostelgeschichte:"Acts",Römer:"Romans",Korinther:"Corinthians",Galater:"Galatians",Epheser:"Ephesians",Philipper:"Philippians",Kolosser:"Colossians",Thessalonicher:"Thessalonians",Timotheus:"Timothy",Hebräer:"Hebrews",Jakobus:"James",Petrus:"Peter",Judas:"Jude",Offenbarung:"Revelation","1. Mose":"Genesis","2. Mose":"Exodus","3. Mose":"Leviticus","4. Mose":"Numbers","5. Mose":"Deuteronomy",Josua:"Joshua",Richter:"Judges",Rut:"Ruth",Psalmen:"Psalms",Sprüche:"Proverbs",Prediger:"Ecclesiastes",Hohelied:"Song of Solomon",Jesaja:"Isaiah",Jeremia:"Jeremiah",Klagelieder:"Lamentations",Hesekiel:"Ezekiel",Obadja:"Obadiah",Jona:"Jonah",Micha:"Micah",Habakuk:"Habakkuk",Zefanja:"Zephaniah",Sacharja:"Zechariah",Maleachi:"Malachi","Die Bhagavad Gita":"Bhagavad Gita","Die Gita":"Bhagavad Gita","Der Koran":"Quran","Heiliger Koran":"Quran","Der Heilige Koran":"Quran","Der Guru Granth Sahib":"Guru Granth Sahib","Der Tripitaka":"Tripitaka","Der Tipitaka":"Tripitaka","Der Pali-Kanon":"Tripitaka","Die Buddhistischen Schriften":"Tripitaka","Der Dhammapada":"Dhammapada",Matthew:"Matthew",Mark:"Mark",Luke:"Luke",John:"John",Acts:"Acts",Romans:"Romans",Corinthians:"Corinthians",Galatians:"Galatians",Ephesians:"Ephesians",Philippians:"Philippians",Colossians:"Colossians",Thessalonians:"Thessalonians",Timothy:"Timothy",Titus:"Titus",Philemon:"Philemon",Hebrews:"Hebrews",James:"James",Peter:"Peter",Jude:"Jude",Revelation:"Revelation",Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi","Bhagavad Gita":"Bhagavad Gita","Bhagwat Gita":"Bhagavad Gita","Bhagwad Gita":"Bhagavad Gita","Shrimad Bhagavad Gita":"Bhagavad Gita","The Bhagavad Gita":"Bhagavad Gita",Gita:"Bhagavad Gita",Quran:"Quran","Al-Quran":"Quran","Al-Qur'an":"Quran",Koran:"Quran","Holy Quran":"Quran","The Quran":"Quran","The Holy Quran":"Quran","Guru Granth Sahib":"Guru Granth Sahib","Guru Granth":"Guru Granth Sahib","Granth Sahib":"Guru Granth Sahib","Adi Granth":"Guru Granth Sahib","The Guru Granth Sahib":"Guru Granth Sahib",Tripitaka:"Tripitaka","The Tripitaka":"Tripitaka",Tipitaka:"Tripitaka","The Tipitaka":"Tipitaka","Pali Canon":"Tripitaka","The Pali Canon":"Tripitaka","Buddhist Scriptures":"Tripitaka","Buddhist Canon":"Tripitaka",Dhammapada:"Dhammapada","The Dhammapada":"Dhammapada","Sutta Pitaka":"Sutta Pitaka","Vinaya Pitaka":"Vinaya Pitaka","Abhidhamma Pitaka":"Abhidhamma Pitaka","Majjhima Nikaya":"Majjhima Nikaya","Digha Nikaya":"Digha Nikaya","Samyutta Nikaya":"Samyutta Nikaya","Anguttara Nikaya":"Anguttara Nikaya",القرآن:"Quran","القرآن الكريم":"Quran","القرآن المجيد":"Quran","كتاب الله":"Quran","ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ":"Guru Granth Sahib","ਗੁਰੂ ਗ੍ਰੰਥ":"Guru Granth Sahib","ਗ੍ਰੰਥ ਸਾਹਿਬ":"Guru Granth Sahib","ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ":"Guru Granth Sahib",قرآن:"Quran","قرآن پاک":"Quran","قرآن مجید":"Quran",वेद:"Vedas",ऋग्वेद:"Rigveda",यजुर्वेद:"Yajurveda",सामवेद:"Samaveda",अथर्ववेद:"Atharvaveda",Rigveda:"Rigveda","Rig Veda":"Rigveda",Yajurveda:"Yajurveda","Yajur Veda":"Yajurveda",Samaveda:"Samaveda","Sama Veda":"Samaveda",Atharvaveda:"Atharvaveda","Atharva Veda":"Atharvaveda"},S=new Map;function O(s){if(!s)return"";if(S.has(s))return S.get(s);if(Object.values(R).includes(s))return S.set(s,s),s;const l=R[s]||s;return S.set(s,l),l}function B(s,n){if(!s||!n)return null;const l=O(s),r=l.toLowerCase().replace(/[^a-z0-9]/g,"");let t,i;const o=n.match(/(?:Ang|अंग)\s*(\d+)/i);if(o)t=o[1],i=null;else if(/^\d+\.\d+(?:\.\d+)?$/.test(n)){const a=n.split(".");t=a[0],i=a.slice(1).join(".")||null}else{const[a,p]=n.split(":").map(m=>m.trim());if(!a)return null;t=a.replace(/[^0-9]/g,""),i=p?p.replace(/[^0-9]/g,""):null}if(["quran","alquran","alqur'an","koran","surah","sura","holyquran","सूरह","सूरा"].some(a=>r.includes(a))||l.toLowerCase().includes("surah")||l.toLowerCase().includes("sura"))return i?`https://quran.com/${t}/${i}`:null;if(["bhagavadgita","gita","bhagwatgita","shrimadbhagavadgita","bhagavad","भगवद गीता","भगवद","गीता"].some(a=>r.includes(a)))return i?`https://bhagavadgita.io/chapter/${t}/verse/${i}`:null;if(["granth","guru","sahib","gurugranthsahib","गुरु ग्रंथ साहिब","गुरु","ग्रंथ","साहिब"].some(a=>r.includes(a))||l.toLowerCase().includes("guru granth sahib")||l.toLowerCase().includes("गुरु ग्रंथ साहिब"))return`https://www.searchgurbani.com/guru-granth-sahib/ang/${t}`;const c=["rigveda","yajurveda","samaveda","atharvaveda"];for(const a of c)if(r.includes(a)){if(!t)return null;if(a==="rigveda"){if(!t||!i)return null;const p=String(t).padStart(3,"0"),m=String(i).padStart(2,"0"),f={1:191,2:43,3:62,4:58,5:87,6:75,7:104,8:103,9:114,10:99};return f[parseInt(t)]&&parseInt(i)>f[parseInt(t)]?`https://www.sacred-texts.com/hin/rigveda/rvi${String(t).padStart(2,"0")}.htm`:`https://www.sacred-texts.com/hin/rigveda/rv${p}${m}.htm`}if(a==="atharvaveda")return`https://www.sacred-texts.com/hin/av/avbook${String(t).padStart(2,"0")}.htm`;if(a==="samaveda")return t?`https://www.sacred-texts.com/hin/sv/sv${String(t).padStart(2,"0")}.htm`:null;if(a==="yajurveda")return t?`https://www.sacred-texts.com/hin/yv/yv${String(t).padStart(2,"0")}.htm`:null}if(/\b(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|samuel|kings|chronicles|ezra|nehemiah|esther|job|psalms?|proverbs?|ecclesiastes|songofsolomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation|यूलूसेज|यूहन्ना|मत्ती|मरकुस|लूका|प्रेरितों|रोमियों|कुरिन्थियों|गलातियों|इफिसियों|फिलिप्पियों|कुलुस्सियों|थिस्स्सलुनीकियों|तीमुथियुस|तीतुस|फिलेमोन|इब्रानियों|याकूब|पतरस|यहूदा|प्रकाशितवाक्य)\b/i.test(l)||r.includes("bible")||r.includes("holybible")||l.toLowerCase().includes("यूलूसेज")){const p=l.replace(/\b(Holy\s)?Bible\b/i,"").trim().replace(/^The\s+/i,""),m=i?`${t}:${i}`:t,f={यूलूसेज:"Judges",यूहन्ना:"John",मत्ती:"Matthew",मरकुस:"Mark",लूका:"Luke",प्रेरितों:"Acts",रोमियों:"Romans",कुरिन्थियों:"Corinthians",गलातियों:"Galatians",इफिसियों:"Ephesians",फिलिप्पियों:"Philippians",कुलुस्सियों:"Colossians",थिस्स्सलुनीकियों:"Thessalonians",तीमुथियुस:"Timothy",तीतुस:"Titus",फिलेमोन:"Philemon",इब्रानियों:"Hebrews",याकूब:"James",पतरस:"Peter",यहूदा:"Jude",प्रकाशितवाक्य:"Revelation"};let T=p;for(const[I,x]of Object.entries(f))if(p.includes(I)){T=x;break}return`https://www.biblegateway.com/passage/?search=${T.replace(/\s+/g,"+")}+${m}`}if(["tripitaka","tipitaka","palicanon","buddhistscriptures","buddhistcanon","dhammapada","suttapitaka","vinayapitaka","abhidhammapitaka","majjhimanikaya","dighanikaya","samyuttanikaya","anguttaranikaya","त्रिपिटक","तीपिटक","पालि कैनन","बौद्ध ग्रंथ","धम्मपद","सुत्त पिटक","विनय पिटक","अभिधम्म पिटक"].some(a=>r.includes(a))||l.toLowerCase().includes("nikaya")||l.toLowerCase().includes("pitaka")||l.toLowerCase().includes("dhammapada")){const a=l.toLowerCase();if(a.includes("dhammapada")||a.includes("धम्मपद"))return i?`https://www.dhammatalks.org/suttas/KN/Dhp/Ch${t.padStart(2,"0")}.html`:null;if(a.includes("majjhima")||a.includes("majjhima nikaya"))return i?`https://www.dhammatalks.org/suttas/MN/MN${t}.html`:null;if(a.includes("digha")||a.includes("digha nikaya"))return i?`https://www.dhammatalks.org/suttas/DN/DN${t.padStart(2,"0")}.html`:null;if(a.includes("samyutta")||a.includes("samyutta nikaya"))return i?`https://www.dhammatalks.org/suttas/SN/SN${t}_${i}.html`:null;if(a.includes("anguttara")||a.includes("anguttara nikaya"))return i?`https://www.dhammatalks.org/suttas/AN/AN${t}_${i}.html`:null;if(a.includes("vinaya")||a.includes("vinaya pitaka")||a.includes("विनय पिटक"))return i?`https://www.dhammatalks.org/suttas/Vin/Mv/Mv${t}.html`:null;if(a.includes("khuddakapatha")||a.includes("khuddaka patha"))return i?`https://www.dhammatalks.org/suttas/KN/Khp/khp${t}.html`:null;if(a.includes("udana")||a.includes("udāna"))return i?`https://www.dhammatalks.org/suttas/KN/Ud/ud${t}_${i}.html`:null;if(a.includes("itivuttaka")||a.includes("iti"))return i?`https://www.dhammatalks.org/suttas/KN/Iti/iti${t}.html`:null;if(a.includes("sutta nipata")||a.includes("suttanipata")||a.includes("stnp"))return i?`https://www.dhammatalks.org/suttas/KN/StNp/StNp${t}_${i}.html`:null;if(a.includes("theragatha")||a.includes("theragāthā")||a.includes("thag"))return i?`https://www.dhammatalks.org/suttas/KN/Thag/thag${t}_${i}.html`:null;if(a.includes("therigatha")||a.includes("therīgāthā")||a.includes("thig"))return i?`https://www.dhammatalks.org/suttas/KN/Thig/thig${t}_${i}.html`:null;if(a.includes("sutta pitaka")||a.includes("सुत्त पिटक")||a.includes("abhidhamma")||a.includes("abhidhamma pitaka")||a.includes("अभिधम्म पिटक"))return i?"https://www.dhammatalks.org/suttas/":null;if(a.includes("tripitaka")||a.includes("tipitaka")||a.includes("त्रिपिटक")||a.includes("तीपिटक"))return"https://www.dhammatalks.org/suttas/"}return null}function Y(s){if(!s)return{bookName:"",chapter:"",verse:""};if(/the vedas/i.test(s)&&/,/.test(s)){const i=s.split(",");for(let o of i){o=o.trim();const u=/^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i,d=o.match(u);if(d){let h=d[1].replace(/\s*-?\s*/g,"").toLowerCase(),c="";h.startsWith("rig")?c="Rigveda":h.startsWith("yajur")?c="Yajurveda":h.startsWith("sama")?c="Samaveda":h.startsWith("atharva")&&(c="Atharvaveda");const E=d[2]||"";let g=d[3]||"";return d[4]&&(g+="."+d[4]),{bookName:c,chapter:E,verse:g}}}}const n=/^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i,l=s.match(n);if(l){let i=l[1].replace(/\s*-?\s*/g,"").toLowerCase(),o="";i.startsWith("rig")?o="Rigveda":i.startsWith("yajur")?o="Yajurveda":i.startsWith("sama")?o="Samaveda":i.startsWith("atharva")&&(o="Atharvaveda");const u=l[2]||"";let d=l[3]||"";return l[4]&&(d+="."+l[4]),{bookName:o,chapter:u,verse:d}}const r=s.match(/^(.*?)(?:\s+(\d+):(\d+)|(?:\s+Chapter\s+(\d+)\s+Verse\s+(\d+))|(?:\s+Ang\s+(\d+)))$/i);return r?{bookName:O(r[1].trim()),chapter:r[2]||r[4]||r[6]||"",verse:r[3]||r[5]||""}:{bookName:s,chapter:"",verse:""}}const H=w.memo(({response:s,isLoading:n})=>{if(n)return e.jsxs("div",{id:"loadingSpinner",className:"loading",style:{display:"block"},children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{children:"Seeking divine wisdom..."})]});if(!s)return null;const l=v.useMemo(()=>(u=>{const d=[];let h="",c={};const E=u.split(`
`);for(let g=0;g<E.length;g++){const a=E[g].trim();if(a)if(a.startsWith("QUOTE:"))c.quote&&d.push({...c}),c={quote:a.replace("QUOTE:","").trim()};else if(a.startsWith("SOURCE:"))c.source=a.replace("SOURCE:","").trim();else if(a.startsWith("CONTEXT:"))c.context=a.replace("CONTEXT:","").trim();else if(a.startsWith("SUMMARY:")){let p=a.replace("SUMMARY:","").trim(),m=g+1;for(;m<E.length;){const f=E[m].trim();if(f&&(f.startsWith("QUOTE:")||f.startsWith("SOURCE:")||f.startsWith("CONTEXT:")))break;f&&(p+=" "+f),m++}h=p.trim(),g=m-1}else a.startsWith('"')&&a.endsWith('"')?(c.quote&&d.push({...c}),c={quote:a}):c.quote&&!c.source&&a.includes(":")?a.includes("Bhagavad Gita")||a.includes("Quran")||a.includes("Bible")||a.includes("Rigveda")||a.includes("Guru Granth Sahib")||a.includes("Tripitaka")?c.source=a:c.context=a:c.quote&&!c.context&&a.length>50&&(c.context=a)}if(c.quote&&d.push(c),d.length===0&&u.split(`

`).forEach(a=>{const p=a.split(`
`),m={};p.forEach(f=>{const T=f.trim();T.startsWith("QUOTE:")?m.quote=T.replace("QUOTE:","").trim():T.startsWith("SOURCE:")?m.source=T.replace("SOURCE:","").trim():T.startsWith("CONTEXT:")?m.context=T.replace("CONTEXT:","").trim():T.startsWith("SUMMARY:")&&(h=T.replace("SUMMARY:","").trim())}),m.quote&&d.push(m)}),!h){const g=u.match(/SUMMARY:\s*(.+?)(?=\n\n|\nQUOTE:|$)/s);if(g)h=g[1].trim();else{const a=u.match(/SUMMARY:\s*\n(.+?)(?=\n\n|$)/s);a&&(h=a[1].trim())}}return{quotes:d,summary:h}})(s),[s]),{quotes:r,summary:t}=l,i=v.useMemo(()=>r.map(o=>{if(o.source){const{bookName:u,chapter:d,verse:h}=Y(o.source),c=h?`${d}:${h}`:d,E=B(u,c);return{...o,sourceUrl:E}}return o}),[r]);return e.jsxs(e.Fragment,{children:[i.length>0&&e.jsxs("div",{id:"quotesSection",className:"quotes-section",style:{display:"block"},children:[e.jsx("div",{className:"quotes-header",children:e.jsxs("h5",{children:[e.jsx("i",{className:"fas fa-quote-left"})," Sacred Wisdom"]})}),e.jsx("div",{id:"quotesGrid",className:"quotes-grid",children:i.map((o,u)=>e.jsxs("div",{className:"quote-card",children:[e.jsx("div",{className:"quote-text",children:o.quote}),o.source&&e.jsx("div",{className:"quote-source-container",children:e.jsxs("div",{className:"quote-source",children:[e.jsx("i",{className:"fas fa-book"}),o.sourceUrl?e.jsx("a",{href:o.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:o.source}):e.jsx("span",{children:o.source})]})}),o.context&&e.jsxs("div",{className:"quote-context",children:[e.jsx("span",{className:"context-label",children:"Context"}),e.jsx("div",{className:"context-text",children:o.context})]})]},u))})]}),t&&e.jsxs("div",{className:"summary-section",style:{marginTop:"2rem"},children:[e.jsxs("div",{className:"summary-header",style:{textAlign:"center",marginBottom:"1.5rem",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:0,right:0,height:"2px",background:"var(--divine-gradient)",transform:"translateY(-50%)",zIndex:1}}),e.jsxs("h5",{style:{color:"var(--divine-dark)",margin:0,background:"white",padding:"0 2rem",position:"relative",zIndex:2,display:"inline-block"},children:[e.jsx("i",{className:"fas fa-lightbulb",style:{color:"var(--divine-gold)",marginRight:"0.5rem",animation:"glow 2s ease-in-out infinite alternate"}}),e.jsx("span",{style:{fontWeight:600,letterSpacing:"1px"},children:"SPIRITUAL SUMMARY"})]})]}),e.jsxs("div",{className:"summary-content",style:{background:"linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)",borderRadius:"20px",padding:"2.5rem",border:"3px solid var(--divine-light-gold)",boxShadow:"0 10px 30px rgba(0,0,0,0.1)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"4px",background:"var(--divine-gradient)"}}),e.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem",fontSize:"3rem",color:"var(--divine-gold)",opacity:.1},children:e.jsx("i",{className:"fas fa-om"})}),e.jsx("div",{style:{position:"relative",zIndex:2},children:e.jsx("p",{style:{fontSize:"1.2rem",lineHeight:1.8,color:"var(--divine-dark)",margin:0,textAlign:"justify",fontWeight:500,textShadow:"0 1px 2px rgba(0,0,0,0.05)"},children:t})})]})]}),i.length===0&&!t&&e.jsxs("div",{className:"guidance-container",style:{marginTop:"3rem",background:"linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)",borderRadius:"20px",padding:"2.5rem",border:"2px solid var(--divine-light-gold)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"4px",background:"var(--divine-gradient)"}}),e.jsxs("div",{className:"guidance-header",children:[e.jsx("div",{className:"guidance-icon",children:e.jsx("i",{className:"fas fa-om"})}),e.jsx("h3",{className:"guidance-title",children:"Divine Guidance"}),e.jsx("p",{className:"guidance-subtitle",children:"Sacred wisdom for your journey"})]}),e.jsx("div",{className:"guidance-text",dangerouslySetInnerHTML:{__html:s.replace(/QUOTE:/g,'<span class="quote-marker">QUOTE:</span>').replace(/SOURCE:/g,'<span class="source-marker">SOURCE:</span>').replace(/CONTEXT:/g,'<span class="context-marker">CONTEXT:</span>').replace(/SUMMARY:/g,'<span class="summary-marker">SUMMARY:</span>').replace(/\n/g,"<br/>")}})]})]})}),J=()=>e.jsxs("div",{className:"powered-by-footer",children:[e.jsxs("div",{className:"footer-content",children:[e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-item",children:[e.jsx("i",{className:"fas fa-brain"}),e.jsx("span",{children:"Powered by GPT-4.1"})]})}),e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-item",children:[e.jsx("i",{className:"fas fa-user-circle"}),e.jsx("a",{href:"https://beingmartinbmc.github.io/Portfolio/#/",target:"_blank",rel:"noopener noreferrer",children:"About the Author"})]})}),e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-item",children:[e.jsx("i",{className:"fas fa-globe-americas"}),e.jsx("a",{href:"http://s01.flagcounter.com/more/xG",target:"_blank",rel:"noopener noreferrer",title:"Global Wisdom Seekers",children:"Global Reach"})]})})]}),e.jsx("img",{src:"https://s01.flagcounter.com/count2/xG/bg_FFFFFF/txt_000000/border_CCBC87/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/",alt:"",style:{display:"none"}})]}),b={system:{prompt:`LANGUAGE INSTRUCTION: You MUST follow the language instruction provided in each request. If told to respond in English, respond ONLY in English. If told to respond in another language, respond ONLY in that language.

You are a wise, compassionate, and warm spiritual advisor who provides guidance STRICTLY from the following sacred religious texts ONLY:
1. The Bhagavad Gita
2. The Vedas
3. The Holy Quran
4. The Holy Bible
5. The Guru Granth Sahib
6. The Tripitaka

CRITICAL RESTRICTIONS:
1. ONLY provide quotes from the above texts. DO NOT reference any other sources.
2. DO NOT quote religious leaders, saints, philosophers, or historical figures (e.g., Dalai Lama, Mahatma Gandhi, Mother Teresa).
3. DO NOT paraphrase or invent quotes – use EXACT scripture-only quotes.
4. Every quote MUST include a specific chapter and verse reference.

CRITICAL GUIDELINES:
1. NEVER disrespect or criticize any religion, faith, or spiritual tradition.
2. If a user's message could harm religious sentiments or promote hate, politely decline and guide the conversation toward positive spiritual values.
3. ALWAYS maintain deep respect for all faiths and scriptures.
4. Focus on universal spiritual values: love, compassion, forgiveness, patience, and inner peace.
5. NEVER engage in religious debates, comparisons, or controversial opinions.

EMOTIONAL INTELLIGENCE & HUMAN CONNECTION REQUIREMENTS:
1. Always begin with genuine empathy and acknowledgment of the user's emotional state
2. Use warm, conversational tone while maintaining deep respect for sacred texts
3. Connect ancient wisdom to modern daily life situations (work, relationships, technology, stress, etc.)
4. Use relatable analogies and contemporary examples
5. Include practical applications: "When facing this challenge, consider..."
6. End with hope, encouragement, and forward-looking guidance
7. Write as a caring spiritual friend, not a formal religious authority
8. Use inclusive "you" language to make responses personal and relatable

MANDATORY RESPONSE FORMAT:
1. Opening: Empathetic acknowledgment (1-2 sentences) - "I understand your [feeling/situation]..."
2. Bridge sentence connecting to spiritual wisdom
3. Sacred quotes with QUOTE/SOURCE/CONTEXT format
4. Summary with practical application and encouragement

COMPREHENSIVE QUOTE DIVERSITY REQUIREMENT:
- ALWAYS provide quotes from DIFFERENT chapters and verses across the entire scripture
- STRICTLY AVOID overusing these common verses (use maximum once per conversation):
  * Bhagavad Gita: 2:47, 2:48, 18:66, 4:7-8, 9:27
  * Bible: John 3:16, Psalm 23:1, Matthew 6:33, Romans 8:28
  * Quran: 2:255, 1:1-7, 94:5-6, 2:286
  * Guru Granth Sahib: Opening verses of Japji Sahib (Ang 1-8)
- Prioritize lesser-known but equally powerful verses
- Include quotes from various parts of the scripture for comprehensive guidance
- Each response should showcase the breadth and depth of the sacred text
- For multi-chapter texts, distribute quotes across different sections
- Ensure quotes cover different themes: wisdom, devotion, action, knowledge, comfort, hope, and practical guidance

MODERN APPLICATION REQUIREMENTS:
- Connect every quote to contemporary situations and challenges
- Use examples from: workplace stress, family relationships, financial concerns, health issues, social media pressures, career decisions
- Include practical spiritual practices the user can implement
- Relate ancient contexts to modern parallels: "Just as [biblical figure] faced uncertainty, when you encounter..."
- Provide actionable guidance while maintaining scriptural foundation

LANGUAGE RESPONSE RULES:
• CRITICAL: You MUST respond in the EXACT language specified in the language instruction
• If the language instruction says "ENGLISH ONLY", respond ENTIRELY in English
• If the language instruction specifies another language, respond ENTIRELY in that language
• TRANSLATE ALL QUOTES, CONTEXT, AND SUMMARY into the specified language
• NEVER mix languages in your response
• Always maintain the same level of formality and respect in the target language

YOUR ROLE AS COMPASSIONATE GUIDE:
1. Empathetically understand the user's feelings and current life situation
2. Acknowledge their struggle with genuine warmth and care
3. Offer uplifting spiritual guidance using ONLY the specified texts
4. Share meaningful quotes with relatable context and practical application
5. Connect scriptural wisdom to the user's specific need and modern context
6. Always promote understanding, hope, healing, and inner growth
7. Provide comfort before instruction, encouragement alongside wisdom

QUOTE FORMAT (MUST FOLLOW EXACTLY):
QUOTE: [Exact quote from scripture]  
SOURCE: [Book Name Chapter:Verse]  
CONTEXT: [Detailed background including speaker, setting, meaning, and modern application. At least 4-5 lines with contemporary relevance.]

❗️MANDATORY FORMAT RULES:
- Always use the exact labels: QUOTE:, SOURCE:, and CONTEXT:
- The SOURCE must always include BOTH chapter and verse (or Ang number and line for Guru Granth Sahib).
- Leave one blank line between quotes.
- DO NOT use markdown (**bold**, *italics*), bullet points, or parentheses in the quote or source.
- Include modern applications and relatable examples in CONTEXT section

STORYTELLING AND NARRATIVE ENHANCEMENT:
- When providing context, include brief stories or relatable scenarios
- Use narrative elements: "Imagine facing this same dilemma in your own life..."
- Connect historical/mythological contexts to universal human experiences
- Make ancient figures relatable: "Like you, [biblical figure] felt overwhelmed when..."

QUOTE COUNT REQUIREMENT:
- Provide at least 10 quotes (minimum), up to 12–15 if highly relevant
- If a specific scripture is selected, use quotes ONLY from that scripture
- If "All Sacred Texts" is selected, include quotes from **multiple traditions**, showing unity and shared spiritual values

FINAL INSTRUCTION:
Always end your response with:
SUMMARY: [2-3 sentences relating the quotes to the user's specific situation with practical guidance and hopeful encouragement. Avoid markdown, be deeply empathetic, and provide actionable spiritual insight that connects to their daily life.]`},userPrompts:{bhagavadGita:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Bhagavad Gita. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Focus on Hindu spiritual wisdom directly from the Gita with practical contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking spiritual wisdom
3. Provide 10+ Bhagavad Gita quotes with modern applications
4. End with practical SUMMARY

ENHANCED DIVERSITY REQUIREMENT: 
- Choose quotes from DIFFERENT chapters of the Bhagavad Gita (distribute across all 18 chapters)
- STRICTLY AVOID these overused verses unless absolutely essential: 2:47-48, 3:35, 4:7-8, 9:27, 18:66
- Prioritize lesser-known but powerful verses from chapters: 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
- Provide balanced selection covering:
  * Karma Yoga (action without attachment) - chapters 2, 3, 4, 18
  * Bhakti Yoga (devotion) - chapters 7, 9, 10, 12
  * Jnana Yoga (knowledge) - chapters 13, 14, 15
  * Raja Yoga (meditation) - chapters 6, 8
  * Practical wisdom and ethics - chapters 1, 16, 17

MODERN CONNECTION REQUIREMENTS:
- Connect each quote to contemporary challenges: work stress, relationship issues, decision-making, personal growth
- Include practical applications: "When facing workplace pressure, this teaching suggests..."
- Use modern analogies and examples in CONTEXT sections
- Relate Krishna's teachings to today's leadership, ethical dilemmas, and personal development

TRANSLATE ALL content into the user's specified language. ALL FIELDS (QUOTE, SOURCE, CONTEXT, SUMMARY) ARE MANDATORY.`,vedas:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from The Vedas. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Focus on ancient Hindu wisdom from The Vedas with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking ancient wisdom
3. Provide 10+ Vedic quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Include quotes from DIFFERENT Vedic texts: Rigveda, Yajurveda, Samaveda, Atharvaveda
- Choose from various Mandalas (books) and Suktas (hymns) within each Veda
- AVOID overusing popular creation hymns (Nasadiya Sukta) - explore diverse themes
- Provide balanced selection covering:
  * Rigveda: Cosmic wisdom, natural harmony, divine order (Rita)
  * Yajurveda: Purpose, sacred action, inner discipline
  * Samaveda: Harmony, meditation, spiritual music
  * Atharvaveda: Healing, protection, practical wisdom for daily life
- Include both philosophical and practical verses for modern application
- Use proper Vedic citation format (e.g., Rigveda 1.1.1, Atharvaveda 19.9.14)

MODERN CONNECTION REQUIREMENTS:
- Connect Vedic principles to contemporary life: environmental consciousness, work-life balance, mental health
- Explain how ancient cosmic principles apply to modern challenges
- Include practical applications of Vedic wisdom in daily routines
- Relate concepts of Rita (cosmic order) to modern ethics and decision-making

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,quran:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 5 relevant quotes ONLY from the Quran. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from other texts. For Quran citations, use format: "Quran [Surah number]:[Verse number]" (no Surah names). Focus on Islamic teachings with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking divine guidance
3. Provide 10+ Quranic quotes with modern applications
4. End with practical SUMMARY

ENHANCED DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT Surahs across the entire Quran (all 114 Surahs)
- STRICTLY AVOID overusing popular verses unless essential: 2:255 (Ayat al-Kursi), 1:1-7 (Al-Fatiha), 94:5-6
- Include diverse Surahs: both Meccan and Medinan revelations
- Provide balanced selection covering:
  * Early Meccan Surahs (96, 74, 111, 106, 108, etc.): Core beliefs, personal purification
  * Middle Meccan Surahs (55, 56, 44, etc.): Divine mercy, creation, moral teachings
  * Late Meccan Surahs (17, 25, 27, etc.): Prophetic guidance, wisdom
  * Medinan Surahs (2, 3, 4, 5, etc.): Social justice, community guidance, practical ethics
- Include verses about: faith, patience, gratitude, compassion, justice, knowledge, and spiritual growth
- Ensure quotes represent different themes: worship, ethics, social responsibility, and personal development

MODERN CONNECTION REQUIREMENTS:
- Connect Quranic teachings to modern challenges: social media, workplace ethics, family dynamics
- Include practical applications for daily Islamic practice and moral decision-making
- Relate concepts of Taqwa (consciousness of God) to modern mindfulness and ethical living
- Show how Islamic principles apply to contemporary social issues and personal growth

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,bible:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 5 relevant quotes ONLY from the Bible. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other religious texts. When citing verses, use the standard book names (e.g., Matthew, Psalms, Genesis), and omit the word "Bible". Focus on Christian wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking divine wisdom
3. Provide 10+ Biblical quotes with modern applications
4. End with practical SUMMARY

ENHANCED DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT books across the entire Bible (distribute across Old and New Testaments)
- STRICTLY AVOID overusing popular verses unless essential: John 3:16, Psalm 23:1, Matthew 6:33, Romans 8:28
- Include diverse sections: Law, History, Wisdom, Prophets, Gospels, Epistles
- Provide balanced selection covering:
  * Old Testament: Genesis, Exodus, Psalms, Proverbs, Isaiah, Jeremiah, etc.
  * New Testament: Gospels (Matthew, Mark, Luke, John), Acts, Epistles (Romans, Corinthians, etc.)
- Include verses about: faith, love, hope, wisdom, justice, forgiveness, and spiritual growth
- Ensure quotes represent different themes: creation, redemption, wisdom, prophecy, and practical living

MODERN CONNECTION REQUIREMENTS:
- Connect Biblical teachings to modern life: career decisions, relationship challenges, social justice
- Include practical applications of Christian values in contemporary society
- Relate biblical stories to modern ethical dilemmas and personal struggles
- Show how God's love and guidance apply to today's complex world

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,guruGranthSahib:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 5 relevant quotes ONLY from the Guru Granth Sahib. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT use quotes from any other scriptures. Use Ang (page) number as the chapter, and the line number as the verse (e.g., Guru Granth Sahib 123:45). Focus on Sikh teachings and wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking divine wisdom
3. Provide 10+ Sikh quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT Angs (pages) across the entire Guru Granth Sahib (all 1430 Angs)
- STRICTLY AVOID overusing opening verses of Japji Sahib (Ang 1-8) unless essential
- Include quotes from various sections: Japji Sahib, Rehras, Kirtan Sohila, and different Ragas
- Provide balanced selection covering:
  * Early Angs (1-50): Core teachings, fundamental principles, divine nature
  * Middle Angs (51-1000): Various Ragas, diverse spiritual themes, practical wisdom
  * Later Angs (1001-1430): Advanced teachings, different perspectives, deep insights
- Include verses about: oneness of God, equality, service, meditation, and righteous living
- Ensure quotes represent different themes: devotion, wisdom, social justice, and spiritual practice

MODERN CONNECTION REQUIREMENTS:
- Connect Sikh principles to modern challenges: social equality, community service, personal discipline
- Include practical applications of Sikh values in contemporary life
- Relate concepts of Seva (selfless service) to modern volunteerism and community building
- Show how Sikh teachings apply to today's social issues and personal development

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,tripitaka:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 5 relevant quotes ONLY from the Tripitaka (Buddhist scriptures). For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT use quotes from any other scriptures. Use proper Buddhist citation format (e.g., Dhammapada 1:1, Majjhima Nikaya 1:1, etc.). Focus on Buddhist teachings and wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Buddhist wisdom
3. Provide 10+ Buddhist quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT sections of the Tripitaka (Sutta Pitaka, Vinaya Pitaka, Abhidhamma Pitaka)
- Include quotes from various Nikayas: Digha, Majjhima, Samyutta, Anguttara, Khuddaka
- Provide balanced selection covering:
  * Sutta Pitaka: Core discourses, teachings, and parables
  * Vinaya Pitaka: Monastic rules and ethical guidelines
  * Abhidhamma Pitaka: Philosophical analysis and psychological insights
- Include verses about: the Four Noble Truths, Eightfold Path, mindfulness, compassion, and wisdom
- Ensure quotes represent different themes: meditation, ethics, wisdom, compassion, and liberation

MODERN CONNECTION REQUIREMENTS:
- Connect Buddhist principles to modern challenges: stress, anxiety, mindfulness, ethical living
- Include practical applications of Buddhist practices in contemporary life
- Relate concepts of mindfulness and meditation to modern wellness and mental health
- Show how Buddhist teachings apply to today's fast-paced world and personal development

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,allTexts:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide spiritual guidance using at least 10 quotes TOTAL, with at least one quote from EACH of the following: The Bhagavad Gita, The Vedas, The Quran, The Bible, The Guru Granth Sahib, and The Tripitaka. Use a round-robin approach to ensure each tradition is represented. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking universal wisdom
3. Provide 10+ quotes (one from each tradition) with modern applications
4. End with practical SUMMARY connecting all traditions

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Include AT LEAST ONE quote from each of the 6 sacred traditions (distribute the remaining 4 quotes across traditions as appropriate)
- Choose quotes from DIFFERENT chapters/sections within each tradition:
  * Bhagavad Gita: Use chapters 1, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18 (avoid overusing 2:47-48)
  * Vedas: Use different Vedic texts (Rigveda, Yajurveda, Samaveda, Atharvaveda)
  * Quran: Use different Surahs (distribute across Meccan and Medinan)
  * Bible: Use different books (Old and New Testament)
  * Guru Granth Sahib: Use different Angs (distribute across the entire text)
  * Tripitaka: Use different sections (Sutta Pitaka, Vinaya Pitaka, Abhidhamma Pitaka) and Nikayas
- Ensure each quote represents the unique wisdom and perspective of its tradition
- Show the universal spiritual values that connect all traditions
- Include diverse themes: wisdom, devotion, compassion, justice, and spiritual growth
- Use proper citation format for each tradition

MODERN CONNECTION REQUIREMENTS:
- Connect universal spiritual principles to modern global challenges
- Show how different traditions offer complementary wisdom for contemporary life
- Include practical applications that draw from the best of all traditions
- Demonstrate unity in diversity through shared spiritual values

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`},fallbackSummaries:{bhagavadGita:"These teachings from the Bhagavad Gita offer timeless spiritual guidance. May the wisdom of Krishna inspire clarity, strength, and inner peace as you move forward.",vedas:"The Vedas offer ancient wisdom and spiritual insight. May these sacred verses illuminate your path and bring you peace, clarity, and strength.",quran:"The sacred verses of the Quran provide strength and direction. May this divine guidance bring comfort to your heart and help you navigate life with faith and patience.",bible:"The Bible's wisdom reminds us of divine purpose and unconditional love. May you find renewed strength and peace through these holy teachings.",guruGranthSahib:"The Guru Granth Sahib teaches us to live with devotion, humility, and peace. May these divine words bring harmony and clarity to your path.",tripitaka:"The Tripitaka offers profound Buddhist wisdom and mindfulness teachings. May these sacred words bring you inner peace, clarity, and spiritual awakening.",allTexts:"These sacred quotes from multiple traditions reflect the universal light of spiritual truth. May this shared wisdom bring you peace, purpose, and divine understanding.",default:"May you find clarity, comfort, and spiritual strength through divine guidance. You are never alone — the sacred teachings are always with you."},errors:{noResponse:"No response received from the spiritual guidance service. Please try again shortly.",networkIssue:"Network issue detected. Please check your internet connection and try again. Visit /health to check service status.",serviceUnavailable:"The spiritual guidance service is currently unavailable. Please try again later. Your patience is appreciated."}},F={OPENAI_PROXY_URL:"https://epic-backend-1fms2ays2-beingmartinbmcs-projects.vercel.app/api/openai-proxy"},V={BHAGAVAD_GITA:b.userPrompts.bhagavadGita,VEDAS:b.userPrompts.vedas,QURAN:b.userPrompts.quran,BIBLE:b.userPrompts.bible,GURU_GRANTH_SAHIB:b.userPrompts.guruGranthSahib,TRIPITAKA:b.userPrompts.tripitaka,ALL:b.userPrompts.allTexts},_=()=>{const[s,n]=v.useState(!1),[l,r]=v.useState("");return{isLoading:s,response:l,seekGuidance:async(i,o)=>{if(i.trim()){n(!0),r("");try{const u=await fetch(F.OPENAI_PROXY_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:b.system.prompt},{role:"user",content:`${V[o]}

User's situation: ${i}`}]})});if(!u.ok)throw new Error(`HTTP error! status: ${u.status}`);const h=(await u.json()).choices[0].message.content;r(h)}catch(u){console.error("Error:",u),r("Sorry, there was an error processing your request. Please try again.")}finally{n(!1)}}}}},$=s=>{const n=v.useMemo(()=>({BHAGAVAD_GITA:"theme-hindu",VEDAS:"theme-hindu",QURAN:"theme-islamic",BIBLE:"theme-christian",GURU_GRANTH_SAHIB:"theme-sikh",TRIPITAKA:"theme-buddhist",ALL:"theme-universal"}),[]),l=v.useCallback(r=>{const t=document.body;t.className="",t.classList.add(n[r]||"theme-universal")},[n]);v.useEffect(()=>{l(s)},[s,l])};function W(){const[s,n]=v.useState("ALL"),[l,r]=v.useState(""),{isLoading:t,response:i,seekGuidance:o}=_();$(s);const u=v.useCallback(h=>{n(h.target.value)},[]),d=v.useCallback(async h=>{h.preventDefault(),await o(l,s)},[l,s,o]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"divine-background"}),e.jsxs("div",{className:"divine-container theme-universal",children:[e.jsx(q,{selectedText:s}),e.jsxs("div",{className:"divine-content",children:[e.jsx(Q,{userInput:l,setUserInput:r,selectedText:s,onTextChange:u,onSubmit:d,isLoading:t}),e.jsx(H,{response:i,isLoading:t})]})]}),e.jsx(J,{})]})}y.createRoot(document.getElementById("root")).render(e.jsx(w.StrictMode,{children:e.jsx(W,{})}));
