import{r as f,a as P,R as S}from"./vendor-nf7bT_Uh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=l(i);fetch(i.href,a)}})();var M={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=f,G=Symbol.for("react.element"),D=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,F=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function I(s,r,l){var n,i={},a=null,o=null;l!==void 0&&(a=""+l),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(o=r.ref);for(n in r)B.call(r,n)&&!q.hasOwnProperty(n)&&(i[n]=r[n]);if(s&&s.defaultProps)for(n in r=s.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return{$$typeof:G,type:s,key:a,ref:o,props:i,_owner:F.current}}N.Fragment=D;N.jsx=I;N.jsxs=I;M.exports=N;var e=M.exports,k={},R=P;k.createRoot=R.createRoot,k.hydrateRoot=R.hydrateRoot;const Y=S.memo(({selectedText:s})=>{const r=f.useMemo(()=>{switch(s){case"BHAGAVAD_GITA":return{icon:"fas fa-om",title:"Hindu Wisdom",subtitle:"Sacred guidance from the Bhagavad Gita"};case"VEDAS":return{icon:"fas fa-om",title:"Vedic Wisdom",subtitle:"Sacred guidance from the Vedas"};case"QURAN":return{icon:"fas fa-star-and-crescent",title:"Islamic Wisdom",subtitle:"Sacred guidance from the Holy Quran"};case"BIBLE":return{icon:"fas fa-cross",title:"Christian Wisdom",subtitle:"Sacred guidance from the Holy Bible"};case"GURU_GRANTH_SAHIB":return{icon:"☬",title:"Sikh Wisdom",subtitle:"Sacred guidance from the Guru Granth Sahib"};case"TRIPITAKA":return{icon:"fas fa-dharmachakra",title:"Buddhist Wisdom",subtitle:"Sacred guidance from the Tripitaka"};case"ALL":default:return{icon:"🕉️",title:"Divine Wisdom",subtitle:"Sacred guidance from ancient texts"}}},[s]);return e.jsx("div",{className:"divine-header",children:e.jsxs("div",{className:"header-content",children:[e.jsxs("h1",{className:"divine-title",children:[r.icon.startsWith("fas")?e.jsx("i",{className:r.icon}):e.jsx("span",{className:"unicode-icon",children:r.icon}),e.jsx("span",{children:r.title})]}),e.jsx("p",{className:"divine-subtitle",children:r.subtitle})]})})}),H=s=>{switch(s){case"BHAGAVAD_GITA":return"The sacred Hindu scripture containing the teachings of Lord Krishna to Arjuna on the battlefield of Kurukshetra.";case"VEDAS":return"The oldest sacred texts of Hinduism, containing hymns, philosophy, and spiritual knowledge.";case"QURAN":return"The holy book of Islam, containing the revelations of Allah to Prophet Muhammad (PBUH).";case"BIBLE":return"The sacred text of Christianity, containing the Old and New Testaments with teachings of Jesus Christ.";case"GURU_GRANTH_SAHIB":return"The central religious scripture of Sikhism, containing the teachings of the Sikh Gurus.";case"TRIPITAKA":return"The sacred texts of Buddhism, containing the teachings of Gautama Buddha and his disciples.";case"TAO_TE_CHING":return"The fundamental text of Taoism, containing the teachings of Lao Tzu on harmony, balance, and natural living.";case"ANALECTS_OF_CONFUCIUS":return"The collection of sayings and ideas attributed to Confucius, focusing on ethics, education, and social harmony.";case"DHAMMAPADA":return"A collection of verses from the Buddhist canon, containing the essence of Buddha's teachings on wisdom and ethical living.";case"UPANISHADS":return"Ancient Hindu philosophical texts that explore the nature of reality, consciousness, and spiritual knowledge.";case"TALMUD":return"The central text of Rabbinic Judaism, containing discussions, debates, and interpretations of Jewish law and ethics.";case"AVESTA":return"The sacred texts of Zoroastrianism, containing the teachings of Zarathustra on truth, goodness, and ethical living.";case"ALL":return"Wisdom from all major spiritual traditions and sacred texts.";default:return""}},Q=S.memo(({userInput:s,setUserInput:r,selectedText:l,onTextChange:n,onSubmit:i,isLoading:a})=>{const[o,v]=f.useState(!1),[p,c]=f.useState(!1),h=s.length,g=1e3,u=h/g*100,t=()=>{switch(l){case"BHAGAVAD_GITA":return"Share your thoughts, struggles, or questions for guidance from the Bhagavad Gita...";case"VEDAS":return"Seek wisdom from the ancient Vedas. What's on your mind?";case"QURAN":return"Reflect on your journey and seek guidance from the Holy Quran...";case"BIBLE":return"Share your heart and find comfort in the teachings of the Holy Bible...";case"GURU_GRANTH_SAHIB":return"Connect with the wisdom of the Guru Granth Sahib. What guidance do you seek?";case"TRIPITAKA":return"Meditate on your questions and seek enlightenment from the Tripitaka...";case"TAO_TE_CHING":return"Seek harmony and balance through the wisdom of the Tao Te Ching...";case"ANALECTS_OF_CONFUCIUS":return"Find ethical guidance and wisdom from the Analects of Confucius...";case"DHAMMAPADA":return"Meditate on your questions and seek wisdom from the Dhammapada...";case"UPANISHADS":return"Explore consciousness and spiritual knowledge through the Upanishads...";case"TALMUD":return"Seek wisdom and ethical guidance from the Talmud...";case"AVESTA":return"Find truth and goodness through the teachings of the Avesta...";default:return"Tell me about your feelings, struggles, or what's on your mind for divine guidance..."}},m=()=>{switch(l){case"BHAGAVAD_GITA":case"VEDAS":case"UPANISHADS":return"fas fa-om";case"QURAN":return"fas fa-star-and-crescent";case"BIBLE":return"fas fa-cross";case"GURU_GRANTH_SAHIB":return"☬";case"TRIPITAKA":case"DHAMMAPADA":return"fas fa-dharmachakra";case"TAO_TE_CHING":return"☯️";case"ANALECTS_OF_CONFUCIUS":return"📚";case"TALMUD":return"✡️";case"AVESTA":return"🔥";default:return"fas fa-heart"}},d=w=>{const E=w.target.value;E.length<=g&&r(E)},T=()=>{v(!0),c(!0)},b=()=>{v(!1),s.length===0&&c(!1)};return e.jsxs("form",{id:"guidanceForm",onSubmit:i,className:"enhanced-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"userMessage",className:"form-label",children:[e.jsx("i",{className:m()}),"Share your heart's journey",p&&e.jsxs("span",{className:"character-count",children:[h,"/",g]})]}),e.jsxs("div",{className:"textarea-container",style:{position:"relative",transition:"var(--transition-smooth)"},children:[e.jsx("textarea",{id:"userMessage",value:s,onChange:d,onFocus:T,onBlur:b,placeholder:t(),className:`form-control ${o?"focused":""}`,rows:"5",required:!0,style:{resize:"vertical",minHeight:"120px",transition:"var(--transition-smooth)"}}),p&&e.jsx("div",{className:"character-indicator",style:{position:"absolute",bottom:"10px",right:"15px",fontSize:"0.8rem",color:u>90?"var(--divine-purple)":"var(--divine-dark)",opacity:.7,transition:"var(--transition-smooth)"},children:h}),p&&e.jsx("div",{className:"character-progress",style:{position:"absolute",bottom:0,left:0,right:0,height:"3px",background:"rgba(0, 0, 0, 0.1)",borderRadius:"0 0 15px 15px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${u}%`,height:"100%",background:u>90?"var(--divine-purple)":"var(--divine-gradient)",transition:"width 0.3s ease",borderRadius:"0 0 15px 15px"}})})]}),e.jsx("div",{className:"form-tips",style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"var(--divine-purple)",opacity:.8,fontStyle:"italic"},children:"💡 Tip: Be specific about your situation for more personalized guidance"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"selectedText",className:"form-label",children:[e.jsx("i",{className:"fas fa-book-open"})," Choose your sacred source"]}),e.jsxs("div",{className:"select-container",style:{position:"relative",transition:"var(--transition-smooth)"},children:[e.jsxs("select",{id:"selectedText",value:l,onChange:n,className:"form-select",required:!0,children:[e.jsx("option",{value:"",children:"Select divine wisdom..."}),e.jsx("option",{value:"BHAGAVAD_GITA",children:"🕉️ Bhagavad Gita"}),e.jsx("option",{value:"VEDAS",children:"📜 The Vedas"}),e.jsx("option",{value:"UPANISHADS",children:"🧘 Upanishads"}),e.jsx("option",{value:"QURAN",children:"☪️ Holy Quran"}),e.jsx("option",{value:"BIBLE",children:"✝️ Holy Bible"}),e.jsx("option",{value:"TALMUD",children:"✡️ The Talmud"}),e.jsx("option",{value:"GURU_GRANTH_SAHIB",children:"☬ Guru Granth Sahib"}),e.jsx("option",{value:"TRIPITAKA",children:"☸️ The Tripitaka"}),e.jsx("option",{value:"DHAMMAPADA",children:"🌸 The Dhammapada"}),e.jsx("option",{value:"TAO_TE_CHING",children:"☯️ Tao Te Ching"}),e.jsx("option",{value:"ANALECTS_OF_CONFUCIUS",children:"📚 Analects of Confucius"}),e.jsx("option",{value:"AVESTA",children:"🔥 The Avesta"}),e.jsx("option",{value:"ALL",children:"🌟 All Sacred Texts"})]}),e.jsx("div",{className:"select-arrow",style:{position:"absolute",right:"15px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none",transition:"var(--transition-smooth)"},children:e.jsx("i",{className:"fas fa-chevron-down",style:{color:"var(--divine-purple)",fontSize:"0.9rem"}})})]}),l&&e.jsxs("div",{className:"source-description",style:{marginTop:"0.5rem",padding:"0.8rem",background:"rgba(212, 175, 55, 0.1)",borderRadius:"8px",fontSize:"0.9rem",color:"var(--divine-dark)",border:"1px solid rgba(212, 175, 55, 0.2)",animation:"fadeInUp 0.3s ease-out"},children:[e.jsx("strong",{children:"Selected:"})," ",H(l)]})]}),e.jsx("button",{type:"submit",className:`divine-btn ${a?"loading":""}`,disabled:a||h===0,style:{position:"relative",overflow:"hidden"},children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btn-loading-spinner",style:{display:"inline-block",width:"16px",height:"16px",border:"2px solid transparent",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 1s linear infinite",marginRight:"8px"}}),"Seeking divine wisdom..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-search"}),"Seek Divine Guidance"]})})]})}),x={मत्ती:"Matthew",मरकुस:"Mark",लूका:"Luke",यूहन्ना:"John",प्रेरितों:"Acts",रोमियों:"Romans",कुरिन्थियों:"Corinthians",गलातियों:"Galatians",इफिसियों:"Ephesians",फिलिप्पियों:"Philippians",कुलुस्सियों:"Colossians",थिस्सलुनीकियों:"Thessalonians",तिमुथियुस:"Timothy",तीतुस:"Titus",फिलेमोन:"Philemon",इब्रानियों:"Hebrews",याकूब:"James",पतरस:"Peter",यहूदा:"Jude",प्रकाशितवाक्य:"Revelation",उत्पत्ति:"Genesis",निर्गम:"Exodus",लैव्यव्यवस्था:"Leviticus",गिनती:"Numbers",व्यवस्थाविवरण:"Deuteronomy",यहोशू:"Joshua",न्यायियों:"Judges",यूलूसेज:"Judges",रूत:"Ruth",शमूएल:"Samuel",राजाओं:"Kings",इतिहास:"Chronicles",एज्रा:"Ezra",नहेमायाह:"Nehemiah",एस्तर:"Esther",अय्यूब:"Job","भजन संहिता":"Psalms",नीतिवचन:"Proverbs",सभोपदेशक:"Ecclesiastes",श्रेष्ठगीत:"Song of Solomon",यशायाह:"Isaiah",यिर्मयाह:"Jeremiah",विलापगीत:"Lamentations",यहेजकेल:"Ezekiel",दानिय्येल:"Daniel",होशे:"Hosea",योएल:"Joel",आमोस:"Amos",ओबद्याह:"Obadiah",योना:"Jonah",मीखाह:"Micah",नहूम:"Nahum",हबकूक:"Habakkuk",सपन्याह:"Zephaniah",हाग्गै:"Haggai",जकर्याह:"Zechariah",मलाकी:"Malachi","भगवद गीता":"Bhagavad Gita",श्रीमद्भगवद्गीता:"Bhagavad Gita",गीता:"Bhagavad Gita",भगवद्गीता:"Bhagavad Gita","श्रीमद्भगवद गीता":"Bhagavad Gita",क़ुरआन:"Quran",क़ुरान:"Quran",कुरान:"Quran",कुरआन:"Quran","पवित्र कुरान":"Quran","कुरान शरीफ":"Quran","गुरु ग्रंथ साहिब":"Guru Granth Sahib","गुरु ग्रंथ":"Guru Granth Sahib","ग्रंथ साहिब":"Guru Granth Sahib","गुरु ग्रंथ साहिब जी":"Guru Granth Sahib",त्रिपिटक:"Tripitaka",तीपिटक:"Tripitaka","पालि कैनन":"Tripitaka","बौद्ध ग्रंथ":"Tripitaka",धम्मपद:"Dhammapada","सुत्त पिटक":"Sutta Pitaka","विनय पिटक":"Vinaya Pitaka","अभिधम्म पिटक":"Abhidhamma Pitaka",Mateo:"Matthew",Juan:"John",Hechos:"Acts",Corintios:"Corinthians",Efesios:"Ephesians",Filipenses:"Philippians",Colosenses:"Colossians",Tesalonicenses:"Thessalonians",Timoteo:"Timothy",Filemón:"Philemon",Hebreos:"Hebrews",Santiago:"James",Apocalipsis:"Revelation",Génesis:"Genesis",Éxodo:"Exodus",Deuteronomio:"Deuteronomy",Jueces:"Judges",Proverbios:"Proverbs",Eclesiastés:"Ecclesiastes",Cantares:"Song of Solomon",Jeremías:"Jeremiah",Lamentaciones:"Lamentations",Oseas:"Hosea",Abdías:"Obadiah",Jonás:"Jonah",Miqueas:"Micah",Nahúm:"Nahum",Sofonías:"Zephaniah",Hageo:"Haggai",Zacarías:"Zechariah",Malaquías:"Malachi","El Bhagavad Gita":"Bhagavad Gita",Corán:"Quran","El Corán":"Quran","Corán Sagrado":"Quran","El Corán Sagrado":"Quran","El Guru Granth Sahib":"Guru Granth Sahib","El Tripitaka":"Tripitaka","El Tipitaka":"Tripitaka","El Canon Pali":"Tripitaka","Las Escrituras Budistas":"Tripitaka","El Dhammapada":"Dhammapada",Mateus:"Matthew",Marcos:"Mark",Lucas:"Luke",João:"John",Atos:"Acts",Romanos:"Romans",Coríntios:"Corinthians",Gálatas:"Galatians",Efésios:"Ephesians",Filipenses:"Philippians",Colossenses:"Colossians",Tessalonicenses:"Thessalonians",Timóteo:"Timothy",Tito:"Titus",Filemom:"Philemon",Hebreus:"Hebrews",Tiago:"James",Pedro:"Peter",Apocalipse:"Revelation",Gênesis:"Genesis",Êxodo:"Exodus",Levítico:"Leviticus",Números:"Numbers",Deuteronômio:"Deuteronomy",Juízes:"Judges",Rute:"Ruth",Salmos:"Psalms",Provérbios:"Proverbs",Eclesiastes:"Ecclesiastes",Cânticos:"Song of Solomon",Isaías:"Isaiah",Jeremias:"Jeremiah",Lamentações:"Lamentations",Ezequiel:"Ezekiel",Oséias:"Hosea",Amós:"Amos",Obadias:"Obadiah",Miquéias:"Micah",Naum:"Nahum",Habacuque:"Habakkuk",Sofonias:"Zephaniah",Ageu:"Haggai",Zacarias:"Zechariah",Malaquias:"Malachi","O Bhagavad Gita":"Bhagavad Gita","A Gita":"Bhagavad Gita",Alcorão:"Quran","O Alcorão":"Quran","Alcorão Sagrado":"Quran","O Alcorão Sagrado":"Quran","O Guru Granth Sahib":"Guru Granth Sahib","O Tripitaka":"Tripitaka","O Tipitaka":"Tripitaka","O Canon Pali":"Tripitaka","As Escrituras Budistas":"Tripitaka","O Dhammapada":"Dhammapada",Matthieu:"Matthew",Marc:"Mark",Luc:"Luke",Jean:"John",Actes:"Acts",Romains:"Romans",Corinthiens:"Corinthians",Galates:"Galatians",Éphésiens:"Ephesians",Philippiens:"Philippians",Colossiens:"Colossians",Thessaloniciens:"Thessalonians",Timothée:"Timothy",Tite:"Titus",Philémon:"Philemon",Hébreux:"Hebrews",Jacques:"James",Pierre:"Peter",Apocalypse:"Revelation",Genèse:"Genesis",Exode:"Exodus",Lévitique:"Leviticus",Nombres:"Numbers",Deutéronome:"Deuteronomy",Josué:"Joshua",Juges:"Judges",Psaumes:"Psalms",Proverbes:"Proverbs",Ecclésiaste:"Ecclesiastes",Cantique:"Song of Solomon",Ésaïe:"Isaiah",Jérémie:"Jeremiah",Ézéchiel:"Ezekiel",Osée:"Hosea",Joël:"Joel",Abdias:"Obadiah",Jonas:"Jonah",Michée:"Micah",Habacuc:"Habakkuk",Sophonie:"Zephaniah",Aggée:"Haggai",Zacharie:"Zechariah",Malachie:"Malachi","Le Bhagavad Gita":"Bhagavad Gita","La Gita":"Bhagavad Gita",Coran:"Quran","Le Coran":"Quran","Coran Sacré":"Quran","Le Coran Sacré":"Quran","Le Guru Granth Sahib":"Guru Granth Sahib","Le Tripitaka":"Tripitaka","Le Tipitaka":"Tripitaka","Le Canon Pali":"Tripitaka","Les Ecritures Bouddhiques":"Tripitaka","Le Dhammapada":"Dhammapada",Matthäus:"Matthew",Markus:"Mark",Lukas:"Luke",Johannes:"John",Apostelgeschichte:"Acts",Römer:"Romans",Korinther:"Corinthians",Galater:"Galatians",Epheser:"Ephesians",Philipper:"Philippians",Kolosser:"Colossians",Thessalonicher:"Thessalonians",Timotheus:"Timothy",Hebräer:"Hebrews",Jakobus:"James",Petrus:"Peter",Judas:"Jude",Offenbarung:"Revelation","1. Mose":"Genesis","2. Mose":"Exodus","3. Mose":"Leviticus","4. Mose":"Numbers","5. Mose":"Deuteronomy",Josua:"Joshua",Richter:"Judges",Rut:"Ruth",Psalmen:"Psalms",Sprüche:"Proverbs",Prediger:"Ecclesiastes",Hohelied:"Song of Solomon",Jesaja:"Isaiah",Jeremia:"Jeremiah",Klagelieder:"Lamentations",Hesekiel:"Ezekiel",Obadja:"Obadiah",Jona:"Jonah",Micha:"Micah",Habakuk:"Habakkuk",Zefanja:"Zephaniah",Sacharja:"Zechariah",Maleachi:"Malachi","Die Bhagavad Gita":"Bhagavad Gita","Die Gita":"Bhagavad Gita","Der Koran":"Quran","Heiliger Koran":"Quran","Der Heilige Koran":"Quran","Der Guru Granth Sahib":"Guru Granth Sahib","Der Tripitaka":"Tripitaka","Der Tipitaka":"Tripitaka","Der Pali-Kanon":"Tripitaka","Die Buddhistischen Schriften":"Tripitaka","Der Dhammapada":"Dhammapada",Matthew:"Matthew",Mark:"Mark",Luke:"Luke",John:"John",Acts:"Acts",Romans:"Romans",Corinthians:"Corinthians",Galatians:"Galatians",Ephesians:"Ephesians",Philippians:"Philippians",Colossians:"Colossians",Thessalonians:"Thessalonians",Timothy:"Timothy",Titus:"Titus",Philemon:"Philemon",Hebrews:"Hebrews",James:"James",Peter:"Peter",Jude:"Jude",Revelation:"Revelation",Genesis:"Genesis",Exodus:"Exodus",Leviticus:"Leviticus",Numbers:"Numbers",Deuteronomy:"Deuteronomy",Joshua:"Joshua",Judges:"Judges",Ruth:"Ruth",Psalms:"Psalms",Proverbs:"Proverbs",Ecclesiastes:"Ecclesiastes","Song of Solomon":"Song of Solomon",Isaiah:"Isaiah",Jeremiah:"Jeremiah",Lamentations:"Lamentations",Ezekiel:"Ezekiel",Daniel:"Daniel",Hosea:"Hosea",Joel:"Joel",Amos:"Amos",Obadiah:"Obadiah",Jonah:"Jonah",Micah:"Micah",Nahum:"Nahum",Habakkuk:"Habakkuk",Zephaniah:"Zephaniah",Haggai:"Haggai",Zechariah:"Zechariah",Malachi:"Malachi","Bhagavad Gita":"Bhagavad Gita","Bhagwat Gita":"Bhagavad Gita","Bhagwad Gita":"Bhagavad Gita","Shrimad Bhagavad Gita":"Bhagavad Gita","The Bhagavad Gita":"Bhagavad Gita",Gita:"Bhagavad Gita",Quran:"Quran","Al-Quran":"Quran","Al-Qur'an":"Quran",Koran:"Quran","Holy Quran":"Quran","The Quran":"Quran","The Holy Quran":"Quran","Guru Granth Sahib":"Guru Granth Sahib","Guru Granth":"Guru Granth Sahib","Granth Sahib":"Guru Granth Sahib","Adi Granth":"Guru Granth Sahib","The Guru Granth Sahib":"Guru Granth Sahib",Tripitaka:"Tripitaka","The Tripitaka":"Tripitaka",Tipitaka:"Tripitaka","The Tipitaka":"Tipitaka","Pali Canon":"Tripitaka","The Pali Canon":"Tripitaka","Buddhist Scriptures":"Tripitaka","Buddhist Canon":"Tripitaka",Dhammapada:"Dhammapada","The Dhammapada":"Dhammapada","Sutta Pitaka":"Sutta Pitaka","Vinaya Pitaka":"Vinaya Pitaka","Abhidhamma Pitaka":"Abhidhamma Pitaka","Majjhima Nikaya":"Majjhima Nikaya","Digha Nikaya":"Digha Nikaya","Samyutta Nikaya":"Samyutta Nikaya","Anguttara Nikaya":"Anguttara Nikaya",القرآن:"Quran","القرآن الكريم":"Quran","القرآن المجيد":"Quran","كتاب الله":"Quran","ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ":"Guru Granth Sahib","ਗੁਰੂ ਗ੍ਰੰਥ":"Guru Granth Sahib","ਗ੍ਰੰਥ ਸਾਹਿਬ":"Guru Granth Sahib","ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ":"Guru Granth Sahib",قرآن:"Quran","قرآن پاک":"Quran","قرآن مجید":"Quran",वेद:"Vedas",ऋग्वेद:"Rigveda",यजुर्वेद:"Yajurveda",सामवेद:"Samaveda",अथर्ववेद:"Atharvaveda",Rigveda:"Rigveda","Rig Veda":"Rigveda",Yajurveda:"Yajurveda","Yajur Veda":"Yajurveda",Samaveda:"Samaveda","Sama Veda":"Samaveda",Atharvaveda:"Atharvaveda","Atharva Veda":"Atharvaveda"},A=new Map;function C(s){if(!s)return"";if(A.has(s))return A.get(s);if(Object.values(x).includes(s))return A.set(s,s),s;const l=x[s]||s;return A.set(s,l),l}function V(s,r){if(!s||!r)return null;const l=C(s),n=l.toLowerCase().replace(/[^a-z0-9]/g,"");let i,a;const o=r.match(/(?:Ang|अंग)\s*(\d+)/i);if(o)i=o[1],a=null;else if(/^\d+\.\d+(?:\.\d+)?$/.test(r)){const t=r.split(".");i=t[0],a=t.slice(1).join(".")||null}else{const[t,m]=r.split(":").map(d=>d.trim());if(!t)return null;i=t.replace(/[^0-9]/g,""),a=m?m.replace(/[^0-9]/g,""):null}if(["quran","alquran","alqur'an","koran","surah","sura","holyquran","सूरह","सूरा"].some(t=>n.includes(t))||l.toLowerCase().includes("surah")||l.toLowerCase().includes("sura"))return a?`https://quran.com/${i}/${a}`:null;if(["bhagavadgita","gita","bhagwatgita","shrimadbhagavadgita","bhagavad","भगवद गीता","भगवद","गीता"].some(t=>n.includes(t)))return a?`https://bhagavadgita.io/chapter/${i}/verse/${a}`:null;if(["granth","guru","sahib","gurugranthsahib","गुरु ग्रंथ साहिब","गुरु","ग्रंथ","साहिब"].some(t=>n.includes(t))||l.toLowerCase().includes("guru granth sahib")||l.toLowerCase().includes("गुरु ग्रंथ साहिब"))return`https://www.searchgurbani.com/guru-granth-sahib/ang/${i}`;const h=["rigveda","yajurveda","samaveda","atharvaveda"];for(const t of h)if(n.includes(t)){if(!i)return null;if(t==="rigveda"){if(!i||!a)return null;const m=String(i).padStart(3,"0"),d=String(a).padStart(2,"0"),T={1:191,2:43,3:62,4:58,5:87,6:75,7:104,8:103,9:114,10:99};return T[parseInt(i)]&&parseInt(a)>T[parseInt(i)]?`https://www.sacred-texts.com/hin/rigveda/rvi${String(i).padStart(2,"0")}.htm`:`https://www.sacred-texts.com/hin/rigveda/rv${m}${d}.htm`}if(t==="atharvaveda")return`https://www.sacred-texts.com/hin/av/avbook${String(i).padStart(2,"0")}.htm`;if(t==="samaveda")return i?`https://www.sacred-texts.com/hin/sv/sv${String(i).padStart(2,"0")}.htm`:null;if(t==="yajurveda")return i?`https://www.sacred-texts.com/hin/yv/yv${String(i).padStart(2,"0")}.htm`:null}if(/\b(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|samuel|kings|chronicles|ezra|nehemiah|esther|job|psalms?|proverbs?|ecclesiastes|songofsolomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation|यूलूसेज|यूहन्ना|मत्ती|मरकुस|लूका|प्रेरितों|रोमियों|कुरिन्थियों|गलातियों|इफिसियों|फिलिप्पियों|कुलुस्सियों|थिस्स्सलुनीकियों|तीमुथियुस|तीतुस|फिलेमोन|इब्रानियों|याकूब|पतरस|यहूदा|प्रकाशितवाक्य)\b/i.test(l)||n.includes("bible")||n.includes("holybible")||l.toLowerCase().includes("यूलूसेज")){const m=l.replace(/\b(Holy\s)?Bible\b/i,"").trim().replace(/^The\s+/i,""),d=a?`${i}:${a}`:i,T={यूलूसेज:"Judges",यूहन्ना:"John",मत्ती:"Matthew",मरकुस:"Mark",लूका:"Luke",प्रेरितों:"Acts",रोमियों:"Romans",कुरिन्थियों:"Corinthians",गलातियों:"Galatians",इफिसियों:"Ephesians",फिलिप्पियों:"Philippians",कुलुस्सियों:"Colossians",थिस्स्सलुनीकियों:"Thessalonians",तीमुथियुस:"Timothy",तीतुस:"Titus",फिलेमोन:"Philemon",इब्रानियों:"Hebrews",याकूब:"James",पतरस:"Peter",यहूदा:"Jude",प्रकाशितवाक्य:"Revelation"};let b=m;for(const[E,L]of Object.entries(T))if(m.includes(E)){b=L;break}return`https://www.biblegateway.com/passage/?search=${b.replace(/\s+/g,"+")}+${d}`}if(["tripitaka","tipitaka","palicanon","buddhistscriptures","buddhistcanon","dhammapada","suttapitaka","vinayapitaka","abhidhammapitaka","majjhimanikaya","dighanikaya","samyuttanikaya","anguttaranikaya","त्रिपिटक","तीपिटक","पालि कैनन","बौद्ध ग्रंथ","धम्मपद","सुत्त पिटक","विनय पिटक","अभिधम्म पिटक"].some(t=>n.includes(t))||l.toLowerCase().includes("nikaya")||l.toLowerCase().includes("pitaka")||l.toLowerCase().includes("dhammapada")){const t=l.toLowerCase();if(t.includes("dhammapada")||t.includes("धम्मपद"))return a?`https://www.dhammatalks.org/suttas/KN/Dhp/Ch${i.padStart(2,"0")}.html`:null;if(t.includes("majjhima")||t.includes("majjhima nikaya"))return a?`https://www.dhammatalks.org/suttas/MN/MN${i}.html`:null;if(t.includes("digha")||t.includes("digha nikaya"))return a?`https://www.dhammatalks.org/suttas/DN/DN${i.padStart(2,"0")}.html`:null;if(t.includes("samyutta")||t.includes("samyutta nikaya"))return a?`https://www.dhammatalks.org/suttas/SN/SN${i}_${a}.html`:null;if(t.includes("anguttara")||t.includes("anguttara nikaya"))return a?`https://www.dhammatalks.org/suttas/AN/AN${i}_${a}.html`:null;if(t.includes("vinaya")||t.includes("vinaya pitaka")||t.includes("विनय पिटक"))return a?`https://www.dhammatalks.org/suttas/Vin/Mv/Mv${i}.html`:null;if(t.includes("khuddakapatha")||t.includes("khuddaka patha"))return a?`https://www.dhammatalks.org/suttas/KN/Khp/khp${i}.html`:null;if(t.includes("udana")||t.includes("udāna"))return a?`https://www.dhammatalks.org/suttas/KN/Ud/ud${i}_${a}.html`:null;if(t.includes("itivuttaka")||t.includes("iti"))return a?`https://www.dhammatalks.org/suttas/KN/Iti/iti${i}.html`:null;if(t.includes("sutta nipata")||t.includes("suttanipata")||t.includes("stnp"))return a?`https://www.dhammatalks.org/suttas/KN/StNp/StNp${i}_${a}.html`:null;if(t.includes("theragatha")||t.includes("theragāthā")||t.includes("thag"))return a?`https://www.dhammatalks.org/suttas/KN/Thag/thag${i}_${a}.html`:null;if(t.includes("therigatha")||t.includes("therīgāthā")||t.includes("thig"))return a?`https://www.dhammatalks.org/suttas/KN/Thig/thig${i}_${a}.html`:null;if(t.includes("sutta pitaka")||t.includes("सुत्त पिटक")||t.includes("abhidhamma")||t.includes("abhidhamma pitaka")||t.includes("अभिधम्म पिटक"))return a?"https://www.dhammatalks.org/suttas/":null;if(t.includes("tripitaka")||t.includes("tipitaka")||t.includes("त्रिपिटक")||t.includes("तीपिटक"))return"https://www.dhammatalks.org/suttas/"}return null}function _(s){if(!s)return{bookName:"",chapter:"",verse:""};if(/the vedas/i.test(s)&&/,/.test(s)){const a=s.split(",");for(let o of a){o=o.trim();const v=/^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i,p=o.match(v);if(p){let c=p[1].replace(/\s*-?\s*/g,"").toLowerCase(),h="";c.startsWith("rig")?h="Rigveda":c.startsWith("yajur")?h="Yajurveda":c.startsWith("sama")?h="Samaveda":c.startsWith("atharva")&&(h="Atharvaveda");const g=p[2]||"";let u=p[3]||"";return p[4]&&(u+="."+p[4]),{bookName:h,chapter:g,verse:u}}}}const r=/^(Rig\s*-?\s*Veda|Yajur\s*-?\s*Veda|Sama\s*-?\s*Veda|Atharva\s*-?\s*Veda|Rigveda|Yajurveda|Samaveda|Atharvaveda)\s*(\d+)(?:\.(\d+))?(?:\.(\d+))?/i,l=s.match(r);if(l){let a=l[1].replace(/\s*-?\s*/g,"").toLowerCase(),o="";a.startsWith("rig")?o="Rigveda":a.startsWith("yajur")?o="Yajurveda":a.startsWith("sama")?o="Samaveda":a.startsWith("atharva")&&(o="Atharvaveda");const v=l[2]||"";let p=l[3]||"";return l[4]&&(p+="."+l[4]),{bookName:o,chapter:v,verse:p}}const n=s.match(/^(.*?)(?:\s+(\d+):(\d+)|(?:\s+Chapter\s+(\d+)\s+Verse\s+(\d+))|(?:\s+Ang\s+(\d+)))$/i);return n?{bookName:C(n[1].trim()),chapter:n[2]||n[4]||n[6]||"",verse:n[3]||n[5]||""}:{bookName:s,chapter:"",verse:""}}const J=S.memo(({response:s,isLoading:r})=>{const[l,n]=f.useState(new Set);if(r)return e.jsxs("div",{id:"loadingSpinner",className:"loading",style:{display:"block"},children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{children:"Seeking divine wisdom..."})]});if(!s)return null;const i=c=>{const h=[];let g="",u={};const t=c.split(`
`);for(let m=0;m<t.length;m++){const d=t[m].trim();if(d)if(d.startsWith("QUOTE:"))u.quote&&h.push({...u}),u={quote:d.replace("QUOTE:","").trim()};else if(d.startsWith("SOURCE:"))u.source=d.replace("SOURCE:","").trim();else if(d.startsWith("CONTEXT:"))u.context=d.replace("CONTEXT:","").trim();else if(d.startsWith("SUMMARY:")){let T=d.replace("SUMMARY:","").trim(),b=m+1;for(;b<t.length;){const w=t[b].trim();if(w&&(w.startsWith("QUOTE:")||w.startsWith("SOURCE:")||w.startsWith("CONTEXT:")))break;w&&(T+=" "+w),b++}g=T.trim(),m=b-1}else d.startsWith('"')&&d.endsWith('"')?(u.quote&&h.push({...u}),u={quote:d}):u.quote&&!u.source&&d.includes(":")?d.includes("Bhagavad Gita")||d.includes("Quran")||d.includes("Bible")||d.includes("Rigveda")||d.includes("Guru Granth Sahib")||d.includes("Tripitaka")?u.source=d:u.context=d:u.quote&&!u.context&&d.length>50&&(u.context=d)}if(u.quote&&h.push(u),h.length===0&&c.split(`

`).forEach(d=>{const T=d.split(`
`),b={};T.forEach(w=>{const E=w.trim();E.startsWith('"')&&E.endsWith('"')?b.quote=E:E.includes("Bhagavad Gita")||E.includes("Quran")||E.includes("Bible")||E.includes("Rigveda")||E.includes("Guru Granth Sahib")||E.includes("Tripitaka")?b.source=E:E.length>30&&!b.context&&(b.context=E)}),b.quote&&h.push(b)}),!g){const m=c.match(/SUMMARY:\s*(.+?)(?=\n\n|\nQUOTE:|$)/s);if(m)g=m[1].trim();else{const d=c.match(/SUMMARY:\s*\n(.+?)(?=\n\n|$)/s);d&&(g=d[1].trim())}}return{quotes:h,summary:g}},{quotes:a,summary:o}=i(s),v=a.map(c=>{const h={...c};if(c.source)try{const{bookName:g,chapter:u,verse:t}=_(c.source),m=t?`${u}:${t}`:u,d=V(g,m);h.sourceUrl=d}catch(g){console.warn("Error processing quote source:",g),h.sourceUrl=null}return h}),p=c=>{n(h=>{const g=new Set(h);return g.has(c)?g.delete(c):g.add(c),g})};return e.jsxs(e.Fragment,{children:[v.length>0&&e.jsxs("div",{id:"quotesSection",className:"quotes-section",style:{display:"block"},children:[e.jsx("div",{className:"quotes-header",children:e.jsxs("h5",{children:[e.jsx("i",{className:"fas fa-quote-left",style:{color:"var(--divine-gold)",marginRight:"0.5rem",animation:"quoteIconPulse 2s ease-in-out infinite"}}),"Sacred Wisdom"]})}),e.jsx("div",{id:"quotesGrid",className:"quotes-grid",children:v.map((c,h)=>{const g=l.has(h),u=c.context&&c.context.length>100;return e.jsxs("div",{className:"quote-card enhanced-quote-card",style:{animation:`fadeInUp ${.3+h*.1}s ease-out`,animationFillMode:"both"},children:[e.jsx("div",{className:"quote-text",children:c.quote}),c.source&&e.jsx("div",{className:"quote-source-container",children:e.jsxs("div",{className:"quote-source",children:[e.jsx("i",{className:"fas fa-book"}),c.sourceUrl?e.jsx("a",{href:c.sourceUrl,target:"_blank",rel:"noopener noreferrer",children:c.source}):e.jsx("span",{children:c.source})]})}),c.context&&e.jsxs("div",{className:"quote-context enhanced-context",children:[e.jsxs("span",{className:"context-label",children:[e.jsx("i",{className:"fas fa-info-circle",style:{marginRight:"0.5rem"}}),"Context"]}),e.jsx("div",{className:"context-text",children:u&&!g?e.jsxs(e.Fragment,{children:[c.context.substring(0,100),"...",e.jsx("button",{onClick:()=>p(h),style:{background:"none",border:"none",color:"var(--divine-purple)",cursor:"pointer",textDecoration:"underline",marginLeft:"0.5rem",fontSize:"0.9rem"},children:"Read more"})]}):e.jsxs(e.Fragment,{children:[c.context,u&&e.jsx("button",{onClick:()=>p(h),style:{background:"none",border:"none",color:"var(--divine-purple)",cursor:"pointer",textDecoration:"underline",marginLeft:"0.5rem",fontSize:"0.9rem"},children:"Show less"})]})})]}),e.jsxs("div",{className:"quote-actions",style:{display:"flex",justifyContent:"flex-end",gap:"1rem",marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid rgba(0, 0, 0, 0.1)"},children:[e.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(c.quote)},style:{background:"none",border:"1px solid var(--divine-gold)",borderRadius:"20px",padding:"0.5rem 1rem",color:"var(--divine-gold)",cursor:"pointer",fontSize:"0.8rem",transition:"var(--transition-smooth)",display:"flex",alignItems:"center",gap:"0.5rem"},onMouseEnter:t=>{t.target.style.background="var(--divine-gold)",t.target.style.color="white"},onMouseLeave:t=>{t.target.style.background="none",t.target.style.color="var(--divine-gold)"},children:[e.jsx("i",{className:"fas fa-copy"}),"Copy"]}),c.sourceUrl&&e.jsxs("a",{href:c.sourceUrl,target:"_blank",rel:"noopener noreferrer",style:{background:"none",border:"1px solid var(--divine-purple)",color:"var(--divine-purple)",cursor:"pointer",fontSize:"0.8rem",transition:"var(--transition-smooth)",display:"flex",alignItems:"center",gap:"0.5rem",textDecoration:"none",borderRadius:"20px",padding:"0.5rem 1rem"},onMouseEnter:t=>{t.target.style.background="var(--divine-purple)",t.target.style.color="white"},onMouseLeave:t=>{t.target.style.background="none",t.target.style.color="var(--divine-purple)"},children:[e.jsx("i",{className:"fas fa-external-link-alt"}),"Source"]})]})]},h)})})]}),o&&e.jsxs("div",{className:"summary-section enhanced-summary",style:{marginTop:"2rem",animation:"fadeInUp 0.5s ease-out"},children:[e.jsxs("div",{className:"summary-header",style:{textAlign:"center",marginBottom:"1.5rem",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:0,right:0,height:"2px",background:"var(--divine-gradient)",transform:"translateY(-50%)",zIndex:1}}),e.jsxs("h5",{style:{color:"var(--divine-dark)",margin:0,background:"white",padding:"0 2rem",position:"relative",zIndex:2,display:"inline-block"},children:[e.jsx("i",{className:"fas fa-lightbulb",style:{color:"var(--divine-gold)",marginRight:"0.5rem",animation:"glow 2s ease-in-out infinite alternate"}}),e.jsx("span",{style:{fontWeight:600,letterSpacing:"1px"},children:"SPIRITUAL SUMMARY"})]})]}),e.jsxs("div",{className:"summary-content",style:{background:"linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)",borderRadius:"20px",padding:"2.5rem",border:"3px solid var(--divine-light-gold)",boxShadow:"0 10px 30px rgba(0,0,0,0.1)",position:"relative",overflow:"hidden",backdropFilter:"blur(10px)"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"4px",background:"var(--divine-gradient)"}}),e.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem",fontSize:"3rem",color:"var(--divine-gold)",opacity:.1},children:e.jsx("i",{className:"fas fa-om"})}),e.jsx("div",{style:{position:"relative",zIndex:2},children:e.jsx("p",{style:{fontSize:"1.2rem",lineHeight:1.8,color:"var(--divine-dark)",margin:0,textAlign:"justify",fontWeight:500,textShadow:"0 1px 2px rgba(0,0,0,0.05)"},children:o})})]})]}),v.length===0&&!o&&e.jsxs("div",{className:"guidance-container enhanced-guidance",style:{marginTop:"3rem",background:"linear-gradient(135deg, var(--divine-cream) 0%, #FFF8F0 100%)",borderRadius:"20px",padding:"2.5rem",border:"2px solid var(--divine-light-gold)",position:"relative",overflow:"hidden",backdropFilter:"blur(10px)",animation:"fadeInUp 0.3s ease-out"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"4px",background:"var(--divine-gradient)"}}),e.jsxs("div",{className:"guidance-header",children:[e.jsx("div",{className:"guidance-icon",children:e.jsx("i",{className:"fas fa-om"})}),e.jsx("h3",{className:"guidance-title",children:"Divine Guidance"}),e.jsx("p",{className:"guidance-subtitle",children:"Sacred wisdom for your journey"})]}),e.jsx("div",{className:"guidance-text",dangerouslySetInnerHTML:{__html:s.replace(/QUOTE:/g,'<span class="quote-marker">QUOTE:</span>').replace(/SOURCE:/g,'<span class="source-marker">SOURCE:</span>').replace(/CONTEXT:/g,'<span class="context-marker">CONTEXT:</span>').replace(/SUMMARY:/g,'<span class="summary-marker">SUMMARY:</span>').replace(/\n/g,"<br/>")}})]})]})}),z=()=>e.jsxs("div",{className:"powered-by-footer",children:[e.jsxs("div",{className:"footer-content",children:[e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-item",children:[e.jsx("i",{className:"fas fa-brain"}),e.jsx("span",{children:"Powered by GPT-4.1"})]})}),e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-item",children:[e.jsx("i",{className:"fas fa-user-circle"}),e.jsx("a",{href:"https://beingmartinbmc.github.io/Portfolio/#/",target:"_blank",rel:"noopener noreferrer",children:"About the Author"})]})}),e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-item",children:[e.jsx("i",{className:"fas fa-globe-americas"}),e.jsx("a",{href:"http://s01.flagcounter.com/more/xG",target:"_blank",rel:"noopener noreferrer",title:"Global Wisdom Seekers",children:"Global Reach"})]})})]}),e.jsx("img",{src:"https://s01.flagcounter.com/count2/xG/bg_FFFFFF/txt_000000/border_CCBC87/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/",alt:"",style:{display:"none"}})]}),O=S.memo(({theme:s="universal"})=>{const r=f.useRef(null),l=f.useMemo(()=>({universal:["rgba(235, 188, 121, 0.15)","rgba(190, 190, 230, 0.15)","rgba(235, 190, 205, 0.15)"],hindu:["rgba(255, 153, 51, 0.15)","rgba(255, 107, 107, 0.15)","rgba(255, 228, 181, 0.15)"],islamic:["rgba(34, 139, 34, 0.15)","rgba(50, 205, 50, 0.15)","rgba(144, 238, 144, 0.15)"],christian:["rgba(65, 105, 225, 0.15)","rgba(135, 206, 235, 0.15)","rgba(176, 196, 222, 0.15)"],sikh:["rgba(255, 215, 0, 0.15)","rgba(255, 183, 0, 0.15)","rgba(255, 228, 181, 0.15)"],buddhist:["rgba(255, 165, 0, 0.15)","rgba(210, 105, 30, 0.15)","rgba(255, 228, 181, 0.15)"],taoist:["rgba(34, 139, 34, 0.15)","rgba(0, 100, 0, 0.15)","rgba(144, 238, 144, 0.15)"],confucian:["rgba(139, 0, 0, 0.15)","rgba(220, 20, 60, 0.15)","rgba(255, 228, 225, 0.15)"],jewish:["rgba(0, 0, 128, 0.15)","rgba(25, 25, 112, 0.15)","rgba(176, 196, 222, 0.15)"],zoroastrian:["rgba(255, 215, 0, 0.15)","rgba(255, 165, 0, 0.15)","rgba(255, 228, 181, 0.15)"]}),[]),n=f.useCallback(()=>{const i=r.current;if(!i)return;const a=i.getContext("2d");let o,v=0;const p=()=>{i.width=window.innerWidth,i.height=window.innerHeight};p(),window.addEventListener("resize",p);const c=l[s],h=i.width*.3,g=i.width*.7,u=i.height*.5,t=()=>{v+=.01,a.clearRect(0,0,i.width,i.height);const d=120*(1+Math.sin(v*.5)*.08);for(let T=0;T<2;T++){const b=T===0?h:g,w=u+Math.sin(v+T)*20,E=a.createRadialGradient(b,w,0,b,w,d);E.addColorStop(0,c[0]),E.addColorStop(.5,c[1]),E.addColorStop(1,c[2]),a.fillStyle=E,a.beginPath(),a.arc(b,w,d,0,Math.PI*2),a.fill()}o=requestAnimationFrame(t)};return t(),()=>{window.removeEventListener("resize",p),cancelAnimationFrame(o)}},[s,l]);return f.useEffect(()=>n(),[n]),e.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.8}})});O.displayName="BreathingBackground";const U=S.memo(({theme:s="universal"})=>{const r=f.useRef(null),l=f.useMemo(()=>({universal:["✨","🌟"],hindu:["🕉️","🌸"],islamic:["☪️","⭐"],christian:["✝️","🕊️"],sikh:["☬","🌸"],buddhist:["☸️","🌸"],taoist:["☯️","🌿"],confucian:["📚","🏛️"],jewish:["✡️","🕯️"],zoroastrian:["🔥","☀️"]}),[]),n=f.useMemo(()=>class{constructor(o){this.symbolArray=o,this.reset()}reset(){this.symbol=this.symbolArray[Math.floor(Math.random()*this.symbolArray.length)],this.x=Math.random()*window.innerWidth,this.y=Math.random()*window.innerHeight,this.size=Math.random()*12+10,this.speedX=(Math.random()-.5)*.4,this.speedY=(Math.random()-.5)*.4,this.opacity=Math.random()*.3+.3,this.rotation=Math.random()*360,this.rotationSpeed=(Math.random()-.5)*.4}update(o,v){this.x+=this.speedX,this.y+=this.speedY,this.rotation+=this.rotationSpeed,this.x>o&&(this.x=0),this.x<0&&(this.x=o),this.y>v&&(this.y=0),this.y<0&&(this.y=v)}draw(o){o.save(),o.globalAlpha=this.opacity,o.translate(this.x,this.y),o.rotate(this.rotation*Math.PI/180),o.font=`${this.size}px Arial`,o.textAlign="center",o.textBaseline="middle",o.fillText(this.symbol,0,0),o.restore()}},[]),i=f.useCallback(()=>{const a=r.current;if(!a)return;const o=a.getContext("2d");let v;const p=()=>{a.width=window.innerWidth,a.height=window.innerHeight};p(),window.addEventListener("resize",p);const c=l[s],h=Array.from({length:6},()=>new n(c)),g=a.width,u=a.height,t=()=>{o.clearRect(0,0,g,u),h.forEach(m=>{m.update(g,u),m.draw(o)}),v=requestAnimationFrame(t)};return t(),()=>{window.removeEventListener("resize",p),cancelAnimationFrame(v)}},[s,l,n]);return f.useEffect(()=>i(),[i]),e.jsx("canvas",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,opacity:.7}})});U.displayName="FloatingParticles";const $=({isLoading:s,theme:r="universal"})=>{const[l,n]=f.useState(0),[i,a]=f.useState(0),o={universal:["🕉️","☮️","✨","🌟","💫"],hindu:["🕉️","🌸","🌺","🌼","✨"],islamic:["☪️","⭐","🌙","✨","🌟"],christian:["✝️","🕊️","⭐","✨","🌟"],sikh:["☬","🌸","✨","🌟","💫"],buddhist:["☸️","🌸","🌺","✨","🌟"],taoist:["☯️","🌿","🍃","🌱","✨"],confucian:["📚","🏛️","🎓","📖","✨"],jewish:["✡️","🕯️","📜","🕍","✨"],zoroastrian:["🔥","☀️","⭐","🌟","✨"]},v={universal:["Seeking divine wisdom...","Connecting with sacred knowledge...","Meditating on ancient texts...","Channeling spiritual guidance...","Awakening inner wisdom..."],hindu:["Meditating on the Bhagavad Gita...","Seeking guidance from the Vedas...","Connecting with divine consciousness...","Awakening the Atman...","Embracing Dharma..."],islamic:["Reflecting on the Holy Quran...","Seeking Allah's guidance...","Meditating on divine wisdom...","Connecting with spiritual truth...","Embracing Islamic teachings..."],christian:["Reflecting on the Holy Bible...","Seeking God's guidance...","Meditating on divine wisdom...","Connecting with spiritual truth...","Embracing Christian teachings..."],sikh:["Meditating on the Guru Granth Sahib...","Seeking guidance from the Gurus...","Connecting with divine wisdom...","Awakening spiritual consciousness...","Embracing Sikh teachings..."],buddhist:["Meditating on the Tripitaka...","Seeking enlightenment...","Connecting with Buddha's wisdom...","Awakening mindfulness...","Embracing the Eightfold Path..."],taoist:["Following the Tao...","Embracing natural harmony...","Seeking effortless action...","Connecting with the Way...","Awakening to simplicity..."],confucian:["Studying the Analects...","Cultivating virtue...","Seeking moral wisdom...","Connecting with ancient teachings...","Embracing ethical living..."],jewish:["Studying the Talmud...","Seeking Jewish wisdom...","Connecting with ancient teachings...","Embracing ethical living...","Awakening to community values..."],zoroastrian:["Reflecting on the Avesta...","Seeking truth and goodness...","Connecting with ancient wisdom...","Embracing ethical dualism...","Awakening to environmental stewardship..."]};return f.useEffect(()=>{if(!s){a(0);return}const p=setInterval(()=>{n(h=>(h+1)%o[r].length)},800),c=setInterval(()=>{a(h=>h>=90?h:h+Math.random()*10)},200);return()=>{clearInterval(p),clearInterval(c)}},[s,r,o]),s?e.jsxs("div",{className:"spiritual-loader",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(255, 255, 255, 0.95)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:9999,backdropFilter:"blur(10px)",animation:"fadeIn 0.3s ease-out"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300px",height:"300px",borderRadius:"50%",background:"conic-gradient(from 0deg, transparent, var(--divine-gold), transparent)",animation:"rotate 3s linear infinite",opacity:.1}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"200px",height:"200px",borderRadius:"50%",background:"conic-gradient(from 180deg, transparent, var(--divine-purple), transparent)",animation:"rotate 2s linear infinite reverse",opacity:.1}}),e.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",background:"rgba(255, 255, 255, 0.8)",padding:"3rem",borderRadius:"20px",backdropFilter:"blur(15px)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.1)",animation:"loaderFloat 3s ease-in-out infinite"},children:[e.jsxs("div",{style:{position:"relative",marginBottom:"2rem"},children:[e.jsx("div",{className:"loader-symbol",style:{fontSize:"4rem",animation:"spiritualFloat 2s ease-in-out infinite",filter:"drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))"},children:o[r][l]}),[0,1,2].map(p=>e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"8px",height:"8px",borderRadius:"50%",background:"var(--divine-gold)",transform:`translate(-50%, -50%) rotate(${p*120}deg) translateY(-60px)`,animation:`orbit ${2+p*.5}s linear infinite`,opacity:.6}},p))]}),e.jsx("div",{style:{width:"200px",height:"4px",background:"rgba(0, 0, 0, 0.1)",borderRadius:"2px",margin:"0 auto 1.5rem",overflow:"hidden",position:"relative"},children:e.jsx("div",{style:{width:`${i}%`,height:"100%",background:"var(--divine-gradient)",borderRadius:"2px",transition:"width 0.3s ease",position:"relative"},children:e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:"shimmer 1.5s ease-in-out infinite"}})})}),e.jsx("div",{className:"loader-text",style:{fontSize:"1.5rem",color:"var(--divine-dark)",fontWeight:500,textAlign:"center",animation:"spiritualPulse 2s ease-in-out infinite",marginBottom:"0.5rem"},children:v[r][l%v[r].length]}),e.jsxs("div",{className:"loader-subtitle",style:{fontSize:"1rem",color:"var(--divine-purple)",opacity:.8,fontStyle:"italic"},children:[Math.round(i),"% complete"]})]})]}):null},W=({message:s,type:r="info",duration:l=4e3,onClose:n})=>{const[i,a]=f.useState(!0),[o,v]=f.useState(!1);f.useEffect(()=>{const u=setTimeout(()=>{p()},l);return()=>clearTimeout(u)},[l]);const p=()=>{v(!0),setTimeout(()=>{a(!1),n==null||n()},300)};if(!i)return null;const c=()=>{switch(r){case"success":return"fas fa-check-circle";case"error":return"fas fa-exclamation-circle";case"warning":return"fas fa-exclamation-triangle";case"info":default:return"fas fa-info-circle"}},h=()=>{switch(r){case"success":return"var(--divine-gold)";case"error":return"#ff6b6b";case"warning":return"#ffa500";case"info":default:return"var(--divine-purple)"}},g=()=>{switch(r){case"success":return"linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)";case"error":return"linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)";case"warning":return"linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)";case"info":default:return"linear-gradient(135deg, rgba(139, 90, 150, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)"}};return e.jsxs("div",{className:`notification-toast ${o?"exiting":""}`,style:{position:"fixed",top:"20px",right:"20px",background:g(),backdropFilter:"blur(15px)",border:`1px solid ${h()}40`,borderRadius:"15px",padding:"1rem 1.5rem",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)",zIndex:1e4,minWidth:"300px",maxWidth:"400px",transform:o?"translateX(100%)":"translateX(0)",opacity:o?0:1,transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",animation:"slideInRight 0.3s ease-out"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.8rem"},children:[e.jsx("div",{style:{color:h(),fontSize:"1.2rem",marginTop:"0.1rem",flexShrink:0},children:e.jsx("i",{className:c()})}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontWeight:600,color:"var(--divine-dark)",marginBottom:"0.2rem",fontSize:"0.95rem"},children:r.charAt(0).toUpperCase()+r.slice(1)}),e.jsx("div",{style:{color:"var(--divine-dark)",fontSize:"0.9rem",lineHeight:1.4},children:s})]}),e.jsx("button",{onClick:p,style:{background:"none",border:"none",color:"var(--divine-dark)",cursor:"pointer",padding:"0.2rem",borderRadius:"50%",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",flexShrink:0},onMouseEnter:u=>{u.target.style.background="rgba(0, 0, 0, 0.1)",u.target.style.transform="scale(1.1)"},onMouseLeave:u=>{u.target.style.background="none",u.target.style.transform="scale(1)"},children:e.jsx("i",{className:"fas fa-times",style:{fontSize:"0.8rem"}})})]}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"3px",background:"rgba(0, 0, 0, 0.1)",borderRadius:"0 0 15px 15px",overflow:"hidden"},children:e.jsx("div",{style:{width:"100%",height:"100%",background:h(),borderRadius:"0 0 15px 15px",animation:"progressShrink 4s linear forwards"}})})]})},K=()=>{const[s,r]=f.useState(!1);f.useEffect(()=>{const n=()=>{window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s?e.jsxs("button",{onClick:l,className:"scroll-to-top",style:{position:"fixed",bottom:"30px",right:"30px",width:"50px",height:"50px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.9)",backdropFilter:"blur(15px)",border:"1px solid rgba(212, 175, 55, 0.3)",boxShadow:"0 8px 25px rgba(0, 0, 0, 0.1)",cursor:"pointer",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",animation:"fadeInUp 0.3s ease-out"},onMouseEnter:n=>{n.target.style.transform="translateY(-5px) scale(1.1)",n.target.style.boxShadow="0 15px 35px rgba(212, 175, 55, 0.3)",n.target.style.background="rgba(255, 255, 255, 0.95)"},onMouseLeave:n=>{n.target.style.transform="translateY(0) scale(1)",n.target.style.boxShadow="0 8px 25px rgba(0, 0, 0, 0.1)",n.target.style.background="rgba(255, 255, 255, 0.9)"},"aria-label":"Scroll to top",children:[e.jsx("i",{className:"fas fa-chevron-up",style:{color:"var(--divine-gold)",fontSize:"1.2rem",transition:"transform 0.3s ease"}}),e.jsxs("div",{style:{position:"absolute",bottom:"100%",right:"50%",transform:"translateX(50%)",background:"rgba(0, 0, 0, 0.8)",color:"white",padding:"0.5rem 0.8rem",borderRadius:"6px",fontSize:"0.8rem",whiteSpace:"nowrap",opacity:0,pointerEvents:"none",transition:"opacity 0.3s ease",marginBottom:"8px"},onMouseEnter:n=>{n.target.style.opacity="1"},onMouseLeave:n=>{n.target.style.opacity="0"},children:["Scroll to top",e.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",border:"4px solid transparent",borderTopColor:"rgba(0, 0, 0, 0.8)"}})]})]}):null},y={system:{prompt:`LANGUAGE INSTRUCTION: You MUST follow the language instruction provided in each request. If told to respond in English, respond ONLY in English. If told to respond in another language, respond ONLY in that language.

You are a wise, compassionate, and warm spiritual advisor who provides guidance STRICTLY from the following sacred religious texts ONLY:
1. The Bhagavad Gita
2. The Vedas
3. The Holy Quran
4. The Holy Bible
5. The Guru Granth Sahib
6. The Tripitaka
7. The Tao Te Ching
8. The Analects of Confucius
9. The Dhammapada
10. The Upanishads
11. The Talmud
12. The Avesta
7. The Tao Te Ching
8. The Analects of Confucius
9. The Dhammapada
10. The Upanishads
11. The Talmud
12. The Avesta

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
  * Tao Te Ching: Chapter 1, Chapter 2, Chapter 3
  * Dhammapada: Chapter 1, Chapter 2, Chapter 3
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

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,taoTeChing:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Tao Te Ching. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Use format: "Tao Te Ching Chapter [number]". Focus on Taoist wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Taoist wisdom
3. Provide 10+ Tao Te Ching quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT chapters across the entire Tao Te Ching (all 81 chapters)
- STRICTLY AVOID overusing popular chapters unless essential: Chapter 1, Chapter 2, Chapter 3
- Provide balanced selection covering:
  * Early chapters (1-20): Fundamental Taoist principles, the nature of Tao
  * Middle chapters (21-60): Practical wisdom, leadership, harmony
  * Later chapters (61-81): Advanced teachings, governance, personal cultivation
- Include verses about: wu-wei (effortless action), natural harmony, simplicity, balance, and inner peace
- Ensure quotes represent different themes: leadership, personal growth, relationships, and spiritual development

MODERN CONNECTION REQUIREMENTS:
- Connect Taoist principles to modern challenges: work stress, decision-making, leadership, relationships
- Include practical applications of wu-wei in contemporary life
- Relate concepts of natural harmony to modern work-life balance and environmental consciousness
- Show how Taoist wisdom applies to today's fast-paced, complex world

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,analectsOfConfucius:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Analects of Confucius. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Use format: "Analects [Book number]:[Chapter number]". Focus on Confucian wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Confucian wisdom
3. Provide 10+ Analects quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT books across the entire Analects (all 20 books)
- STRICTLY AVOID overusing popular books unless essential: Book 1, Book 2, Book 4
- Provide balanced selection covering:
  * Early books (1-7): Core teachings, fundamental principles, personal cultivation
  * Middle books (8-15): Advanced teachings, governance, social relationships
  * Later books (16-20): Philosophical insights, historical context, practical wisdom
- Include verses about: ren (humaneness), li (ritual/propriety), xiao (filial piety), and junzi (noble person)
- Ensure quotes represent different themes: education, leadership, relationships, ethics, and personal development

MODERN CONNECTION REQUIREMENTS:
- Connect Confucian principles to modern challenges: education, leadership, family relationships, workplace ethics
- Include practical applications of Confucian values in contemporary society
- Relate concepts of ren and li to modern interpersonal relationships and social harmony
- Show how Confucian teachings apply to today's educational and professional environments

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,dhammapada:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Dhammapada. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Use format: "Dhammapada [Chapter number]:[Verse number]". Focus on Buddhist wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Buddhist wisdom
3. Provide 10+ Dhammapada quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT chapters across the entire Dhammapada (all 26 chapters)
- STRICTLY AVOID overusing popular chapters unless essential: Chapter 1, Chapter 2, Chapter 3
- Provide balanced selection covering:
  * Early chapters (1-10): Core Buddhist principles, mindfulness, wisdom
  * Middle chapters (11-20): Practical teachings, ethical living, mental discipline
  * Later chapters (21-26): Advanced wisdom, spiritual development, liberation
- Include verses about: mindfulness, wisdom, ethical conduct, mental discipline, and spiritual growth
- Ensure quotes represent different themes: meditation, compassion, wisdom, and personal transformation

MODERN CONNECTION REQUIREMENTS:
- Connect Dhammapada teachings to modern challenges: stress, anxiety, mindfulness, ethical decision-making
- Include practical applications of Buddhist practices in contemporary life
- Relate concepts of mindfulness and mental discipline to modern wellness and mental health
- Show how Dhammapada wisdom applies to today's fast-paced, stressful world

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,upanishads:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Upanishads. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Use format: "[Upanishad name] [Chapter number]:[Verse number]". Focus on Hindu philosophical wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Upanishadic wisdom
3. Provide 10+ Upanishad quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT Upanishads across the major texts
- Include quotes from: Brihadaranyaka, Chandogya, Taittiriya, Aitareya, Kena, Katha, Isha, Mundaka, Mandukya, Prashna
- STRICTLY AVOID overusing popular Upanishads unless essential: Brihadaranyaka, Chandogya
- Provide balanced selection covering:
  * Major Upanishads: Brihadaranyaka, Chandogya, Taittiriya, Aitareya
  * Middle Upanishads: Kena, Katha, Isha, Mundaka
  * Minor Upanishads: Mandukya, Prashna
- Include verses about: Atman (Self), Brahman (Ultimate Reality), meditation, knowledge, and spiritual realization
- Ensure quotes represent different themes: self-realization, meditation, wisdom, and spiritual inquiry

MODERN CONNECTION REQUIREMENTS:
- Connect Upanishadic wisdom to modern challenges: self-discovery, consciousness, meditation, spiritual growth
- Include practical applications of Upanishadic teachings in contemporary life
- Relate concepts of Atman and Brahman to modern psychology and consciousness studies
- Show how Upanishadic insights apply to today's search for meaning and spiritual understanding

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,talmud:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Talmud. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Use format: "[Tractate name] [Chapter number]:[Page number]". Focus on Jewish wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Talmudic wisdom
3. Provide 10+ Talmud quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT tractates across the Talmud
- Include quotes from major tractates: Berakhot, Shabbat, Eruvin, Pesachim, Yoma, Sukkah, Beitzah, Rosh Hashanah, Ta'anit, Megillah, Mo'ed Katan, Chagigah, Yevamot, Ketubot, Nedarim, Nazir, Sotah, Gittin, Kiddushin, Bava Kamma, Bava Metzia, Bava Batra, Sanhedrin, Makkot, Shevu'ot, Avodah Zarah, Horayot, Zevachim, Menachot, Chullin, Bekhorot, Arakhin, Temurah, Keritot, Me'ilah, Tamid, Middot, Niddah
- STRICTLY AVOID overusing popular tractates unless essential: Berakhot, Shabbat, Sanhedrin
- Provide balanced selection covering:
  * Mo'ed (Festivals): Shabbat, Eruvin, Pesachim, Yoma, Sukkah, etc.
  * Nashim (Women): Yevamot, Ketubot, Nedarim, Nazir, Sotah, Gittin, Kiddushin
  * Nezikin (Damages): Bava Kamma, Bava Metzia, Bava Batra, Sanhedrin, Makkot, etc.
  * Kodashim (Holy Things): Zevachim, Menachot, Chullin, Bekhorot, etc.
  * Tahorot (Purities): Niddah, etc.
- Include verses about: ethics, justice, community, learning, relationships, and practical wisdom
- Ensure quotes represent different themes: law, ethics, spirituality, and community values

MODERN CONNECTION REQUIREMENTS:
- Connect Talmudic wisdom to modern challenges: business ethics, community building, education, relationships
- Include practical applications of Jewish values in contemporary society
- Relate concepts of tikkun olam (repairing the world) to modern social justice and community service
- Show how Talmudic teachings apply to today's ethical dilemmas and community building

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,avesta:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide at least 10 relevant quotes ONLY from the Avesta. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications. Do NOT include quotes from any other texts. Use format: "[Text name] [Chapter number]:[Verse number]". Focus on Zoroastrian wisdom with contemporary relevance.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking Zoroastrian wisdom
3. Provide 10+ Avesta quotes with modern applications
4. End with practical SUMMARY

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Choose quotes from DIFFERENT sections of the Avesta
- Include quotes from: Yasna, Visperad, Vendidad, Yashts, Khordeh Avesta
- STRICTLY AVOID overusing popular sections unless essential: Yasna 30, Yasna 44
- Provide balanced selection covering:
  * Yasna: Core liturgical texts, philosophical teachings, Gathas (Zarathustra's hymns)
  * Visperad: Extended liturgical texts
  * Vendidad: Legal and ritual texts, ethical guidelines
  * Yashts: Hymns to various divine beings
  * Khordeh Avesta: Daily prayers and shorter texts
- Include verses about: Asha (truth/order), Vohu Manah (good mind), ethical dualism, environmental stewardship
- Ensure quotes represent different themes: truth, goodness, environmental consciousness, and ethical living

MODERN CONNECTION REQUIREMENTS:
- Connect Zoroastrian principles to modern challenges: environmental protection, ethical decision-making, truth-seeking
- Include practical applications of Zoroastrian values in contemporary life
- Relate concepts of Asha and environmental stewardship to modern sustainability and ethical living
- Show how Zoroastrian teachings apply to today's environmental and ethical challenges

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`,allTexts:`IMPORTANT: You MUST begin your response with empathetic acknowledgment of the user's situation, then provide spiritual guidance using at least 12 quotes TOTAL, with at least one quote from EACH of the following: The Bhagavad Gita, The Vedas, The Quran, The Bible, The Guru Granth Sahib, The Tripitaka, The Tao Te Ching, The Analects of Confucius, The Dhammapada, The Upanishads, The Talmud, and The Avesta. Use a round-robin approach to ensure each tradition is represented. For each quote, you MUST provide QUOTE, SOURCE, and CONTEXT with modern applications.

RESPONSE FORMAT REQUIREMENT:
1. Start with: "I understand [acknowledge their specific situation/feeling]..."
2. Add bridge sentence about seeking universal wisdom
3. Provide 12+ quotes (one from each tradition) with modern applications
4. End with practical SUMMARY connecting all traditions

COMPREHENSIVE DIVERSITY REQUIREMENT:
- Include AT LEAST ONE quote from each of the 12 sacred traditions (distribute the remaining quotes across traditions as appropriate)
- Choose quotes from DIFFERENT chapters/sections within each tradition:
  * Bhagavad Gita: Use chapters 1, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18 (avoid overusing 2:47-48)
  * Vedas: Use different Vedic texts (Rigveda, Yajurveda, Samaveda, Atharvaveda)
  * Quran: Use different Surahs (distribute across Meccan and Medinan)
  * Bible: Use different books (Old and New Testament)
  * Guru Granth Sahib: Use different Angs (distribute across the entire text)
  * Tripitaka: Use different sections (Sutta Pitaka, Vinaya Pitaka, Abhidhamma Pitaka) and Nikayas
  * Tao Te Ching: Use different chapters (distribute across all 81 chapters)
  * Analects of Confucius: Use different books (distribute across all 20 books)
  * Dhammapada: Use different chapters (distribute across all 26 chapters)
  * Upanishads: Use different texts (Brihadaranyaka, Chandogya, Taittiriya, etc.)
  * Talmud: Use different tractates (distribute across Mo'ed, Nashim, Nezikin, Kodashim, Tahorot)
  * Avesta: Use different sections (Yasna, Visperad, Vendidad, Yashts, Khordeh Avesta)
- Ensure each quote represents the unique wisdom and perspective of its tradition
- Show the universal spiritual values that connect all traditions
- Include diverse themes: wisdom, devotion, compassion, justice, and spiritual growth
- Use proper citation format for each tradition

MODERN CONNECTION REQUIREMENTS:
- Connect universal spiritual principles to modern global challenges
- Show how different traditions offer complementary wisdom for contemporary life
- Include practical applications that draw from the best of all traditions
- Demonstrate unity in diversity through shared spiritual values

TRANSLATE ALL content into the user's specified language. ALL FIELDS MANDATORY.`},fallbackSummaries:{bhagavadGita:"These teachings from the Bhagavad Gita offer timeless spiritual guidance. May the wisdom of Krishna inspire clarity, strength, and inner peace as you move forward.",vedas:"The Vedas offer ancient wisdom and spiritual insight. May these sacred verses illuminate your path and bring you peace, clarity, and strength.",quran:"The sacred verses of the Quran provide strength and direction. May this divine guidance bring comfort to your heart and help you navigate life with faith and patience.",bible:"The Bible's wisdom reminds us of divine purpose and unconditional love. May you find renewed strength and peace through these holy teachings.",guruGranthSahib:"The Guru Granth Sahib teaches us to live with devotion, humility, and peace. May these divine words bring harmony and clarity to your path.",tripitaka:"The Tripitaka offers profound Buddhist wisdom and mindfulness teachings. May these sacred words bring you inner peace, clarity, and spiritual awakening.",taoTeChing:"The Tao Te Ching offers timeless wisdom about harmony and natural living. May these teachings guide you toward balance, peace, and effortless action.",analectsOfConfucius:"The Analects of Confucius provide practical wisdom for ethical living and personal development. May these teachings inspire you to cultivate virtue and wisdom.",dhammapada:"The Dhammapada offers profound Buddhist wisdom for mindful living. May these teachings bring you clarity, peace, and spiritual awakening.",upanishads:"The Upanishads offer deep insights into consciousness and spiritual reality. May these teachings illuminate your path toward self-realization and inner peace.",talmud:"The Talmud offers rich wisdom for ethical living and community building. May these teachings guide you toward justice, learning, and meaningful relationships.",avesta:"The Avesta offers ancient wisdom about truth, goodness, and environmental stewardship. May these teachings inspire you to live with integrity and care for creation.",allTexts:"These sacred quotes from multiple traditions reflect the universal light of spiritual truth. May this shared wisdom bring you peace, purpose, and divine understanding.",default:"May you find clarity, comfort, and spiritual strength through divine guidance. You are never alone — the sacred teachings are always with you."},errors:{noResponse:"No response received from the spiritual guidance service. Please try again shortly.",networkIssue:"Network issue detected. Please check your internet connection and try again. Visit /health to check service status.",serviceUnavailable:"The spiritual guidance service is currently unavailable. Please try again later. Your patience is appreciated."}},X={OPENAI_PROXY_URL:"https://epic-backend-1fms2ays2-beingmartinbmcs-projects.vercel.app/api/openai-proxy"},Z={BHAGAVAD_GITA:y.userPrompts.bhagavadGita,VEDAS:y.userPrompts.vedas,QURAN:y.userPrompts.quran,BIBLE:y.userPrompts.bible,GURU_GRANTH_SAHIB:y.userPrompts.guruGranthSahib,TRIPITAKA:y.userPrompts.tripitaka,TAO_TE_CHING:y.userPrompts.taoTeChing,ANALECTS_OF_CONFUCIUS:y.userPrompts.analectsOfConfucius,DHAMMAPADA:y.userPrompts.dhammapada,UPANISHADS:y.userPrompts.upanishads,TALMUD:y.userPrompts.talmud,AVESTA:y.userPrompts.avesta,ALL:y.userPrompts.allTexts},ee=()=>{const[s,r]=f.useState(!1),[l,n]=f.useState("");return{isLoading:s,response:l,seekGuidance:async(a,o)=>{if(a.trim()){r(!0),n("");try{const v=await fetch(X.OPENAI_PROXY_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:y.system.prompt},{role:"user",content:`${Z[o]}

User's situation: ${a}`}],userInput:a,selectedText:o})});if(!v.ok)throw new Error(`HTTP error! status: ${v.status}`);const c=(await v.json()).choices[0].message.content;n(c)}catch(v){console.error("Error:",v),n("Sorry, there was an error processing your request. Please try again.")}finally{r(!1)}}}}},ae=s=>{const r=f.useMemo(()=>({BHAGAVAD_GITA:"theme-hindu",VEDAS:"theme-hindu",QURAN:"theme-islamic",BIBLE:"theme-christian",GURU_GRANTH_SAHIB:"theme-sikh",TRIPITAKA:"theme-buddhist",TAO_TE_CHING:"theme-taoist",ANALECTS_OF_CONFUCIUS:"theme-confucian",DHAMMAPADA:"theme-buddhist",UPANISHADS:"theme-hindu",TALMUD:"theme-jewish",AVESTA:"theme-zoroastrian",ALL:"theme-universal"}),[]),l=f.useCallback(n=>{const i=document.body;i.className="",i.classList.add(r[n]||"theme-universal")},[r]);f.useEffect(()=>{l(s)},[s,l])};function te(){const[s,r]=f.useState("ALL"),[l,n]=f.useState(""),[i,a]=f.useState([]),{isLoading:o,response:v,seekGuidance:p}=ee();ae(s);const c=f.useCallback(()=>{switch(s){case"BHAGAVAD_GITA":case"VEDAS":case"UPANISHADS":return"hindu";case"QURAN":return"islamic";case"BIBLE":return"christian";case"GURU_GRANTH_SAHIB":return"sikh";case"TRIPITAKA":case"DHAMMAPADA":return"buddhist";case"TAO_TE_CHING":return"taoist";case"ANALECTS_OF_CONFUCIUS":return"confucian";case"TALMUD":return"jewish";case"AVESTA":return"zoroastrian";default:return"universal"}},[s]),h=f.useCallback(m=>{r(m.target.value)},[]),g=f.useCallback((m,d="info")=>{const T=Date.now();a(b=>[...b,{id:T,message:m,type:d}])},[]),u=f.useCallback(m=>{a(d=>d.filter(T=>T.id!==m))},[]),t=f.useCallback(async m=>{if(m.preventDefault(),!l.trim()){g("Please enter your question or concern","warning");return}if(l.trim().split(/\s+/).filter(T=>T.length>0).length<5){g("Please share more details. At least 5 words are needed to provide meaningful guidance.","warning");return}if(!s){g("Please select a sacred source","warning");return}try{await p(l,s),g("Divine guidance received successfully!","success")}catch{g("Failed to receive guidance. Please try again.","error")}},[l,s,p,g]);return e.jsxs(e.Fragment,{children:[e.jsx(O,{theme:c()}),e.jsx(U,{theme:c()}),e.jsx($,{isLoading:o,theme:c()}),i.map((m,d)=>e.jsx(W,{message:m.message,type:m.type,onClose:()=>u(m.id),style:{top:`${20+d*80}px`}},m.id)),e.jsx(K,{}),e.jsx("div",{className:"divine-background"}),e.jsxs("div",{className:"divine-container",children:[e.jsx(Y,{selectedText:s}),e.jsxs("div",{className:"divine-content",children:[e.jsx(Q,{userInput:l,setUserInput:n,selectedText:s,onTextChange:h,onSubmit:t,isLoading:o}),e.jsx(J,{response:v,isLoading:o})]})]}),e.jsx(z,{})]})}k.createRoot(document.getElementById("root")).render(e.jsx(S.StrictMode,{children:e.jsx(te,{})}));
