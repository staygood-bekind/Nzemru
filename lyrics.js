//✅ Use YYYY-MM-DD format//
const lyricsData = {
song1: {
    title: { tig: "ስምካ ይኽበር", eng: "smka ykber" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "ምስጋና", eng: "msgana" },
    date: "2025-10-28",
    youtube: "https://youtube.com/...",
    spotify: "",
    cover: "images/album1.jpg",
    tig: `1.እንታይ’ሞ ክብል’የ እንታየ’ኸ ዘቕርቦ 
 ውዕለትካስ ካብ ዓቕመይ ንላዕሊ ኮይኑ /2/ 
  ተደ፦ካብ ሓመድ ኣልዒልካ ሰብ እንዲኻ ትገብር     
        ንዝተረስዐስ ልብኻ ይዝክር  
        ስምካ ይኽበር እግዚ/ር /2/ 
              ስምካ ይኽበር ንዘልኣለም ስምካ ይኽበር 
              ባህ ኢሉካ ክቡር መስዋእተይ እንካ ተቐበል 
              ስምካ ይኽበር እግዚ/ር(8) 
2.ከናፍረይ ንስምካ ከውርያ’የን ንስራሕካ 
  ዝገበርካለይ በዚሑ’ስ ምስጋና ይህበካ /2/ 
      3.ሰላመይ ከም ወሓዚ ረሓቦት ጌርካዮ ዙርያይ 
        ጸጋኻ ንዘልኣለም ከስፋሕፍሕ ኣብ ዘርአይ /2/ 
                እንታይ’ሞ ክብል’የ……… .`,
    eng: `1.eNtaye’mo kibl’e eNtaye’Ke zeqerbo
wuOletkas kab ‘aqmey nLa‘li koynu /2/

tede: kab Hamed Al‘ilka seb endiKa tigeber
nezeteres‘as libka yizker
simka yikheber Egzi/r /2/
simka yikheber nezela‘lem simka yikheber
bah iluKa kibur meswa‘etey enka teqebel
simka yikheber Egzi/r (8)

2.kenafrey nsimka kewurya’ye nserahKa
zgeberkalei bezihu’s mesgana yihbeka /2/

3.selamey kem weHazi reHabot gerKayo zuryay
xegaKa nezela‘lem kesfahfih ab zer‘ay /2/

eNtaye’mo kibl’e ……….`
},
song2: {
    title: { tig: "ተማሪኩ ልበይ ብኣኻ", eng: "temariku lbey beaka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "ኣምልኾ", eng: "Amlko" },
    date: "",
    cover: "images/album1.jpg",
    tig: `
ክንደይከ ይጽብቕ ቲ’ትርኢትካ
ገጽካ የንጸባርቕ ንዝርኣየካ (2)
ኣእጋርካ ከም ኣብ ሓጎዶ ዝረሰነ ኣስራዚ እዩ
ኣዒንትኻ’ውን ከም ሃልሃልታ ሓዊ’ዩ

ተደ፦ ተማሪኹ ልበይ ብኣኻ (2)
መሲጥካ’ዮ ውኖይ ንስኻ (2)
ተማሪኹ’ሎ ልበይ ልበይ ልበይ ልበይ ብኣኻ
ተመሲጡ’ሎ ውኖይ ውኖይ ቀልበይ ምሳኻ (2)

እንሆ ፍትወይ ጽቡቕ ኢኻ
ዝፈስስ ቅበኢ’ውን ኣለዎ ቲ’ስምካ (2)
መኣዛ ሕይወት ኣለዎ ጎይታ’የ ቲ’ድምጽኻ
ሓለፋ ወይኒ ክንእዶ’የ ፍቕርኻ

ኣብ ማእከል ኣእዋም ዱር ከም ዕምበባ
ፈታዊየይ በይንኻ ኣሎካ ሓለፋ (2)
ፍትወይ ናተይ ኢኻ ኣነ ድማ ኢየ ናትካ
ጥዒሙኒ’ሎ ማሪኹኒ ፍቕርኻ

ናይ ገነት ዓይኒ ማይ ኣሎ’ባኻ
ዘልኣለም ሕይወት’ዩ ፈልፋሊ ዒላኻ (2)
ካብ ኣኽራን እናዘለለ ድምጽኻ ምስ’ዝመጸኒ
ሓይለይ ይሕደስ ሓጎስ ይመልኣኒ

ኣብቲ ኣብ ቃቑራ ኣብቲ ጸድፊ
ዘለኺ ጽብቕተይ ካብኡ ንዒ ውጺ (2)
ድምጽኺ ኣስምዕኒ ገጽኪ’ውን ኣርእይኒ
ምስ በልካ ጎይታይ ውኖይ መሲጥካኒ`,
    eng: `
1. kinḍeyka yixibx q t’i tiri’itka
 gexka ye nixibark ni zir’a yeka (2)
 a’igarka kem ab ḥagodo ziresene asirazi iyu
 a’intka’wn kem ḥalḥalta ḥawi’yu
   tede: temariku libey b’aka (2)
        mesiṭka’yo w’noy nisika (2)
        temariku’lo libey libey libey libey b’aka
        temesiṭu’lo w’noy w’noy qelbey misa’ka (2)

2. inho fiṭwey xibux i’ka
  zifes’s qibe’i’wn alewo t’i simka (2)
  me’aza ḥiywet alewo goyta’ye t’i d’mxka
  ḥalefa weyni k’ne’do’ye fiqirka

3. ab ma’ekel a’iwam dur kem ‘embeba
   fetawi yey beyin’ka aloka ḥalefa (2)
   fiṭwey natey i’ka ane d’ma iye natka
   ṭi’imu’ni lo marik’uni fiqirka

4. nay genet ‘ayni may alo’baka
   zelalem ḥiywet’yu felfali ‘ilaka (2)
   kab akhran enazelele dmxka mis’yzmeceni
   ḥayley yihdes ḥagos yimel’ani

5. abti ab qaqura abti xedfi
   zelek’i xibxtey kabu n’i w’xi (2)
   dmxki asmi’ini gexki’wn ar’e’ini
   mis belka goytay w’noy mesiṭkani
`
},
song3: {
    title: { tig: "ከም ስመይ ኮይኑለይ", eng: "kemsm" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "ምስጋና", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: ` 
1.ድርሳናት ናይ ልበይ… ሓደ ክልተ ኢሉ ክቖጽር ጀመረ 
  ኣዝዩ ካብ ምግንፋል… ከም ቅልጡፍ ብርዒ ክጽሕፍ ጀመረ 
  ብመስተንክር ፍቕሩ… እናተገረመ እናተደነቐ           
  ከመይ’ልካ ይውዳእ… ከመይ’ልካ ይውዳእ እቲ  ባህርያቱ 
  እቲ ዓቢ ፍቕሩ……… ምሉእ ምሕረቱ  
  
 
 ተደ፦ኣይይይይይ…… ከም እግዚ/ር ዝበለ መን’ዩ(2) 
       ሓሳብ ሰብ ዝፈልጥ… ናይ ውሽጢ ዝርዳእ                
       ተረዲኡ ድማ… ሽግርካ ዝፈትሕ         
       ኣይይይይይ…… ከም እግዚ/ር ዝበለ መን’ዩ  
2.ብምድራዊ ቋንቋ… ክትዛረበሉ ከምይ’ሉ ይውዳእ  
  ከምቲ ዓቢ ባሕሪ… ብሓንቲ ጭልፋ ምጭላፍ 
  በእምሮ ኣይግመትን’ዩ… ብኣሰር ኣሰር ከቶ ኣይብጻሕን’ዩ 
  ወዳጀ መዓሙቕ… ወዳጀ መዓሙቕ እዩ ፍቕሪ ኣምላኽ 
  መንከ የስተውዕሎ……… መንከ ይጽብጽቦ 
     3.ኮራኹር ኣናብስ… ይስእኑ ይጠምዩ 
       እቶም ንጎይታ ‘የሱስ… ዘይረኸብዎ ይጭነቑ 
       ንእግዚ/ር ዝደልዩ… ’ቲ ሰናይ ዘበለ ከቶ ኣይጎድሎምን 
       ናብኡ ዝጥምቱ… የንጸባርቑ ገጾም ኣይሓፍርን 
       ኣብኡ ዝውከል ሰብ……… ብጹእ እዩ`,
    eng: `
    Dirsanat nay libey… hade klte ilu kqts’r jemere
Azyu kab mig’nfal… ke-m k’ltuf br’i kts’hf jemere
Bemesetnkr fquru… enategereme enatedenqe
Kemey’lka yiwda’e… kemey’lka yiwda’e eti bahryatu
Eti ‘abi fquru……… mlu’ mheretu

Tedefo: ayyyyy… ke-m Igzi/’r zebele men’yu (2)
Hasab seb zefelt… nay wushti zird’a’e
Teredi’u dma… shgirka zefet’h
Ayyyyy…… ke-m Igzi/’r zebele men’yu

Bmedrawi kwankwa… ktizarbelu kemiy’lu yiwda’e
Kemti ‘abi bahri… b’hanti ch’lfa m’ch’laf
Beemro ayigm’tin’yu… b’aser aser keto ayb’shan’yu
Wedaje me’amuq… wedaje me’amuq iyu fquri amlak
Menke yestewe’lo……… menke ytsbtsbo

Korakur anabs… ysi’nu ytem’yu
Etom ngoyta “Yesus… zeyrekhebwo ych’neq’nu
N’igzi/’r zedelyu… ’ti senay zebele keto aygodlomn
Nabu z’t’m’tu… yen’tsebarqu gets’om ayhafrn
Abu z’w’kel seb……… btsu’ iyu`
},
song4: {
    title: { tig: "ኣኽቢርካኒ", eng: "akbirkani" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `
     ተደ፦ኣኽቢርካኒ ‘ንዲኻ ኣምላኸይ 
           ኣኽቢርካኒ ‘ንዲኻ ኢየሱሰይ 
           ካብ ናይ ጸልማት ናብራ ኣውጺእካኒ 
           ኣብ ናይ ብርሃን ሕይወት ኣሰጋጊርካኒ /2/ 
1.ሕይወትካ ስለይ ብምሕላፍካ 
   ፍቕርኻ በዚ ገሊጽካለይ ኢኻ 
   ኣሰይ ኣነስ ተዓዲለ 
   ኣብ ቤትካ ክነብር ተመሪጸ 
         2.ኢየሱሰይ ፍሉይ’ዩ ባህሪኻ 
           ይማርኽ ’ዚ ጡዑም ፍቅርኻ 
           ዘመነይ ምሳኻ ከሕልፎ 
           ንልበይ ኣዝዩ ባህ ይብሎ’ሎ 
3.ኣብ ማእከል ባሕሪ ጎደና ኣሎካ 
   ኣብ ማእከል በረኻ መንገዲ ኣሎካ 
   ንዓኻ’ስ እግዚ/ር እንታይ ይጨንቀካ 
   ንንፋስን ንባሕርን ትእዝዝ ብቓልካ(2) 
     ተደ፦ናትካ ብሙዃነይ  
           ንስኻ’ውን ናተይ ኢየሱሰይ’ውን ናተይ 
           ኣዚዩ ባህ ይብሎ’ሎ ይሕጎስ ኣሎ ልበይ 
           ብብሉጽ መስዋእቲ የቕርቦ ኣብ ቅድሜኻ(2) 
           ጎይታይን ኣምላኸይን መን ኣሎኒ ብዘይካኻ 
4.ንፋስ ኣይረኤኹን ዝናብ ድማ የለን 
   ደመና ኣይረኤኹን ዝናብ ድማ የለን 
   ጎዳጉደይ ግና ማያት ተጎልቢቡ 
   ብጸጋን በረኸትን ኣዚኻ ተንጀርብቦ(2) `,
    eng: `ʼTede:
ʼAkbirka-ni ʼndika Amlakhey
ʼAkbirka-ni ʼndika Iyesusey
Kab nay tslmat nabra awtsiʼeka-ni
Ab nay brhan hiywet aseggagir-ka-ni (x2)

1.
Hiywetka siley bimḥlafka
Fqirka bezi gelitskaley ixa
Asey anes teʼadile
Ab beytka kinebber temeritse

2.
Iyesusey fluy’yu bahrika
Yimarkhʼzi tuʼum fqirka
Zemeney misa-ka kehilfo
Nlibey azzu bah yiblo’lo

3.
Ab maʼekel bahri godena aloka
Ab maʼekel berekha mengedi aloka
Nʼakaʼs Igziʼr entay yichenʼneka
Nʼnfasn nbahrn tʼezzez bʼqalka (x2)

Tede:
Natka bmuʼan-ey
Neskaʼun natey Iyesuseyʼun natey
Aziyu bah yiblo’lo yiḥgos alo libey
Bibluts meswaʼti yeqʼrbo ab qidmeyka (x2)
Goytayen Amlakheyʼn men alo-ni bzeika-ka

4.
Nfas ayreʼekhun zynab dima yelen
Demena ayreʼekhun zynab dima yelen
Godagudey gna mayat tegolbibu
Btsagan berekhetn azikha tenjerbbo (x2)`
},
song5: {
    title: { tig: "ኣብቲ ቅዱስ ቤትካ", eng: "Abti Kudus Betka" },
    author: { tig: " ", eng: " " },
    album: { tig: "", eng: " " },
    genre: { tig: "ምስጋና", eng: "Praise" },
    date: " ",
    cover: "images/album1.jpg",
    tig: `ንዑ ንኣምላኽ ብሓጎስ ንዘምረሉ 
  ንከውሒ መድሕና ብሓባር ንጨድረሉ 
  ኣብ ዝፋኑ ክንበጽሕ ብልዑል ምስጋና 
  ክንዝምረሉ ኢና ብጥዑም ቃና 
      ተደ፦ኣብቲ ቅዱስ ቤትካ ዘመላልሰና 
            ብመንፈስ ሓይሊ ጽድቂ ፍጠረልና /2/ 
2.ኣብ ልዕሊ ኩሉ ኣምላኸይ ንጉስ’ዩ 
  ጠፈር ሃዋህው’ን እውን ምስክር’ዩ 
  ባሕሪ’ውን ናቱ’ዩ ንሱ ዝፈጠሮ 
  ንቑጽ ምድሪ እውን ጥሉል ዝገበሮ 
          3.ንጽምእቲ ነፍሲ ብጸጋኡ ኣዕጊቡ 
             ንጥፍእቲ ነፍሲ ናብ ሰናይ ስሒቡ 
             ንሱ ኣምላኽና’ዩ ንሕና ድማ ሕዝቡ 
             ኣብቲ ልሙዕ ሸኻ ኣኪቡ ስሒቡ 
4.ኣምላኽ ምሳና’ዩ ከቶ ኣይንፈርሕን 
  ሰብከ እንታይ ከይገብረና ፍጹም ኣይንርዕድን 
  ኣብ ትሕቲ ኣኽናፉ ክንዕቆብ ኢና 
  እቲ እኩይ ሓይሊ’ውን ፍጹም ኣይቀርበናን `,
    eng: `1.Niu nimalak bihagos nizemerelu
Nikuhi medhina bihabar nichaderelu
Ab zifanu kinbetsih bilul misgana
Kinizmerelu ina bitum kana

Tede:
Abti kudus betka zemelalsena
Bimenfes hayli tsidki feteralna (×2)

2.Ab lieli kulun amlakay ngus yu
Tefer hawahun inun miskir yu
Bahri un natu yu nissu zifetero
Nikuts midri un tilul zigabero

3.Nitsimiti nefsi bitsaga’u a’gibu
Nitfiti nefsi nab senay sihibu
Nissu amlakna yu nihna dima hizbu
Abti limu’a shekha akibu sihibu

4.Amlak misana yu kito ayniferhin
Sebke entay keygebrena fitsum ayniredin
Ab tihti aknafu kiniqob ina
Eti ikuy hayli un fitsum aykerbena’n`
},
song6: {
    title: { tig: "ስድራቤቱ ንኣምላኽ", eng: "Sidra Betu Nimalak" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `ተደ፦ስድራቤቱ ናይ ኣምላኽ ብሙዃና 
         ኣዚና ሕሩያት ፍጥረት ኢና 
         ብምሕረት ሃብታም ጎይታ ሒዝና                                               
         ምስ ክርስቶስ ሕያዋን ገበረና 
1.ቀደም ዝረሓቕና ዝነበርና ሕጂ ግን ናቱ ኮይና 
  በቲ ክቡር ዋጋ ተዓዲግና ስድራቤት ኣምላኽ ኢና 
  እዚ ብሉጽ ዕጫ ዝበጽሓና ብጎይታ ኮይኑልና 
  ነመስግኖ(2) ነመስግኖ ንጎይታ 
  ብጥዑም ዜማታት ምስ ድሙቕ ዕልልታ(2) 
       2.ክልተ ዝነበሩ ብደሙ ሓደ ዝገበረ 
         ኣብ መንጎ ዝነበረ ከለካሊ ቀጽሪ’ውን ዘፍረሰ 
         ርእሱ ኣወፍዩልና ሞይቱልና ጸይሩ’ውን መስቀሉ 
         ነቲ ጽልኢ(2) ብስጋኡ ስዒሩ 
         ኣብ መስቀል ሰቒሉ ሰላም ኣበሲሩ(2) 
3.ኢየሱስ ርእሰ መኣዝን ዘለዎ ህንጻ ብምንዳቕና 
  ዘልኣለም ኣብ ሕቕፉ ክንነብር ዕድል ብምርካብና 
  ማህደር መንፈስ ቅዱስ ብመንፈስ ክንከውን ሓቢርና 
  ኣብ ቤቱ ኣብ ሕቕፉ ኣብ ጽላል ኣኽናፉ 
  ክንጽምበር ኣብ ኣርያም ምስቶም ቅዱሳኑ(2`,
    eng: `Tede:Sidra Betu nay Amlak bimu’ana
Azina hruyat fɨtret ina
Bimhirret habtam goyta hizna
Mis Kristos hiyawan geberna

1.Qedem zirehaqna zineberna higi gin natu koyna
Beti kibur waga te’adiqna sidra bet Amlak ina
Izi biluts iqcha zibets’hana bigoyta koynulna
Nemesgino (2) nemesgino ngoyta
Bit’um zimatat mis dmuq ililta (2)

2.Kilte zineberu bidemu hade zigebera
Ab mengo zinebera kelekali qetsri un zefr’se
Re’su awfiyulna moytulna tseyru un mesqelu
Neti tsl’i (2) bisga’u sɨi’ru
Ab mesqel seqilu selam abesiru (2)

3.Iyesus r’ese me’azen zelayyo hɨnsa bɨmɨndaqqna
Zelalem ab hɨqfu knenebber ʕɨdl bɨmɨrkabna
Mahder menfes kudus bɨmenfes knkewun ḥabirna
Ab betu ab hɨqfu ab tslal aḥnafu
Knets’mber ab aryam mis tom kudusanu (2)`
},
song7: {
    title: { tig: "እግዚ/ር ሰላምና’ዩ", eng: "Egziher Selamna Yu" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ኩሉ ብርኪ ዝሰግደሉ 
  ረማዕ ገማዕ ውን’ዝብለሉ 
  ኣቱም ሕዝቢ ኣመስግኑ 
  ንኣምላኽና ዓልሉ(2) 
     ተደ፦እግዚ/ር ሰላምናዩ’ሞ 
           ንእግዚ/ር ክብሪ ንሃቦ 
           እግዚ/ር ኣምላኽና’ዩ’ሞ 
           ብምሳጋና ልዕል ነብሎ(2) 
           ብምስጋና ልዕል ነብሎ 
2.ብምሕረቱ ዝጠመተና 
  ኣብ ኣእዳዉ ዝወቀጠና 
  ዕዳ ከፊሉ ሕይወት ሂቡና 
  ይውሕዶ’ኳ ስብሃት ምስጋና(2) 
       3.ንሱ ሓሲሩ ዘኽበረና 
         ርእሰ መኣዝን ዝገበረና 
         ቀጽርታትና ኣብ ዓይኑ’ዩ 
         ሓላዊና ኣይታኸስን’ዩ(2) 
4.ልሳናትና ስሓቕ ዕልልታ 
  ልባትና’ውን ሓጎስ ምስ ደስታ 
  ዘንጀርበበ ድንቂ ጎይታ’ዩ 
  ኣብ ዘመናት መስተንክር ስርሑ(2) 
        ብምስጋና ልዕል ነብሎ 
        ብውዳሴ ልዕል ነብሎ 
        ብሸብሸባ ልዕል ነብሎ 
        ብሳዕሲዒት ልዕል ነብሎ 
        ብዕልልታ ልዕል ነብሎ `,
    eng: `1.Kulu birki zisegdelu
Rema’e gema’e wun ziblela
Atum hizbi amesginu
Ni Amlakna alilu (2)

Tede:Egziher selamna yumo
Ni Egziher kibri nihabo
Egziher Amlakna yumo
Bimisagana li’el neblo (2)
Bimisagana li’el neblo

2.Bimhirretu zitemetna
Ab a’edawu ziweqetena
Ida k’filu hiywet hibuna
Yiwihdo kwa sibhat misgana (2)

3.Nisu hasiru zekiberena
Re’ese me’azen zigeberena
Qetsirtatna ab aynu yu
Halawina aytakhsen yu (2)

4.Lisanatna sihaq ililta
Libatna wun ḥagos mis desta
Zenjerbebe dinqi Goyta yu
Ab zemenat mestenker sirhu (2)

Bimisagana li’el neblo
Biwudase li’el neblo
Bishebsheba li’el neblo
Bisa’si’it li’el neblo
Bi’ililta li’el neblo`
},
song8: {
    title: { tig: "ብጎይታ ዝያዳ ከቢራ", eng: "Bigoyta Zy’ada Kebira" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ንኸድሕነና ጎይታ ምስ ደለየ 
  እኖ ክትኮኖ ንማርያም መረጸ 
  ብልጽቲ ካብ ፍጥረት ኣዳም  
  ምስ ሓጢኣት ዘይብላ ኪዳን 
  ንማርያም ረኺብና ክብረት ለቢስና(2) 
       ተደ፦ብጎይታ ዝያዳ ከቢራ  
             ትነብር ዘልኣለም ደሚቓ   
             ጠበቓ ናይ ፍጥረት ኣዳም  
             ኣዴና ማርያም’ያ ማርያም ማርያም 
             እወ ማርያም’ያ ማርያም  
                 ሰማያ ጽላላ ጌራ  
                 ንሓጢኣት ረጊጻ ብእግራ  
                 ሳልኣ ክብረት ለቢስና 
                 ርሕርሕቲ ኣደ ረኺብና  
                 እወ ኣደ ረኺብና                        
2.ርሕርሕቲ ኣደ ድሌትካ ትፈልጥ 
  ወዳ ሓቲታ ጎደሎ ትምልእ 
  ንግስቲ ኣፍደገ ሰማይ  
  ብልጽቲ መሳልል ሰማይ 
  ንማርያም ረኺብና ክብረት ለቢስና(2) 
           3.ጓል ሰብ ክንሳ ንሰብ ዘይመሰለት 
             ብልጽቲ ፍጥረት ጎይታ ዘየሕዘነት 
             ስልምቲ ከም ጸሓይ ጩራ  
             መድሓኒ ኣብ ከብዳ ጸይራ 
             ንማርያም ረኺብና  ክብረት ለቢስና(2)`,
    eng: `1.Nikhedhena Goyta mis deleye
Eno kitkono ni Maryam meretse
Bilitsi kab fitret Adam
Mis hati’at zeybila kidan
Ni Maryam rehɨbna kibret lebisna (2)

Tede:Bigoyta zy’ada kebira
Tinibr zelalem demika
Tebeka nay fitret Adam
Adena Maryam ya Maryam Maryam
Ewe Maryam ya Maryam
Semaya tslala gera
Nihati’at regitsa bi’igra
Sala kibret lebisna
Rehrɨhti ade rehɨbna
Ewe ade rehɨbna

2.Rehrɨhti ade diletka tifelit
Weda hatita godelo timli’
Nigisti afdege semay
Bilitsi mesalel semay
Ni Maryam rehɨbna kibret lebisna (2)

3.Gwal seb kinsa niseb zeymeselät
Bilitsi fitret Goyta zeyehezenet
Silimti kem tsihay chura
Medhane ab kebda tseyra
Ni Maryam rehɨbna kibret lebisna (2)`
},
song9: {
    title: { tig: "ኣዳልዩለይ ኣሎ", eng: "Adalyuley Alo" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ኣብቲ ዳግማይ ሕይወት ምንባር ተጀሚረ 
 ዘልኣለም ሓጎስ’ዩ እቲ ዝመቀረ 
 ንምንታይ ይጭነቕ ንኽነብር ኢለ 
 ኣይወድቕ ኣይደክም ምስ ኢየሱሰይ ኮይነ 
    ተደ፦ኣዳልዩለይ ኣዳልዩለይ ኣሎ 
          ኣዝዩ ክቡር ቦታ 
          ኣዳልዩለይ ኣዳልዩለይ ኣሎ 
          ኣዝዩ ብሉጽ ስፍራ 
          ኣዳልዩለይ ኣዳልዩለይ ኣሎ 
          ዋጋ ዘይከፍለሉ 
          ኣዳልዩለይ ኣዳልዩለይ ኣሎ 
          ውሽጠይ ዝዓርፈሉ 
             ተስፋይ እዚ እዩ 
             ነብሰይ እትደልዮ(2) 
             ኣኽሊል ክብሪ ሕይወት 
             ነብሰይ ትቕበሎ(2)
2.ጸሓይ ኣየድልዮን ብርሃን ንኽኸውን 
  ወርሒ ከዋኽብቲ ንዕኡ ኣይበቅዕን 
  ወሓዚ ማይ ሕይወት ዝፈስስ ዝውሕዝ  
  ኢየሱስ ኣዳልዩለይ ነቲ ብርሃን ቀንዴል 
        3.ኣዝዩ ብሉጽ ቦታ ዓይኒ ዘይረኣየቶ 
          ትማል ኮነ ሎሚ እዝኒ ዘይሰምዓቶ 
          ኣእምሮ ወድ ሰብ ፍጹም ዘይምርምሮ 
          ኢየሱስ እቲ ሕያው ኣዳልዩለይ ኣሎ 
    ቀሲነ ንኽነብር ምርጭኡ ኾይኑ 
    ንዓይ ንዉሉዱ ክብሪ ሂቡኒ’ዩ 
    በቲ ኮኾብ ጽባሕ ዘልኣለም ሕያው’ዩ 
    ኣነ ዝጽበዮ ተስፋይ ኢየሱስ’ዩ /2/ 
    ኣዳልዩ ሁሁ…… ኣዳልዩ(8)  `,
    eng: `1.Abti dagmay hiywet mɨnbar tejmire
Zelalem ḥagos yu ɨti zimeqere
Nɨmɨntay yich’neq nɨkhenebber ile
Aywedq aydekem mis Iyesusey koyne

Tede:Adalyuley, Adalyuley alo
Azyu kibur bota
Adalyuley, Adalyuley alo
Azyu biluts sifra
Adalyuley, Adalyuley alo
Waga zeykeflelu
Adalyuley, Adalyuley alo
Wushtey zya’rfelu

Tesfay ezi iyu
Nebsey itdeliyo (2)
Akhlil kibri hiywet
Nebsey tikbelo (2)

2.Tsihay ayedl’yon birhan nkhikhon
Werhi kewakbti ni’u aybeq’in
Wehazi may hiywet zifesis zwi’hiz
Iyesus Adalyuley neti birhan qen’del

3.Azyu biluts bota ayni zeyre’ayeto
Timal kone lomi izni zeysem’a’to
A’imro wed seb fitsum zeymrmro
Iyesus iti hiyaw Adalyuley alo

Qesine nkhenebber mirch’u koynu
N’ay n’wludu kibri hibuni yu
Beti kokhob tsbah zelalem hiyaw yu
Ane zitsbeyo Tesfay Iyesus yu (2)

Adalyu huhu…… Adalyu (8)`
},
song10: {
    title: { tig: "ኣይርስዖን’የ", eng: "Ayrson’ye" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ጼርካኒ ኣሎኻ…… 
  ካብ መዓልቲ ንመዓልቲ   
  ብምሕረትካ እናኸለልካ ኦኦኦ… 
  ደው ኢለ ኣለኹ ኣብቲ ሕያው ቃልካ 
  ኦኦኦ… ተተኺለ ኣለኹ ኣብቲ ሕያው ቃልካ 
       ተደ፦ኣይርስዖን’የ… ‘ቲ ምሕረትካ ኣሃሃ… 
                ኣይርስዖን’የ… ‘ቲ ፍቕርኻ ኣሃሃ… 
                   ኣይርስዖን’የ… ‘ቲ ሓልዮትካ ኣሃሃ… 
                   ኣይርስዖን’የ… ጉስነትካ ኣሃሃ… 
2.ከይደክም ከይሕለል ኣጆኺ እናበልካ… 
   ጸልማት ኣብ ዝኾነሉ ብርሃንካ እናብራህካ    
   ንጎቦታት ሜዳ ጌርካዮም 
   ኣሳጊርካኒ ብሩኽ ጎይታ 
   ከምዚ ከማኻ መን ኣሎ ንዓይ  
   ክንዲ ኹሉ ዝኾነለይ (2) 
       3.ክሳብ ሽበት ክሳብ እርግናይ  
           ትስከመኒ  ኣምላኸይ… 
           ክኣምነካ’የ ምሉእ ዘመነይ 
           ሓዚልካ ሓንጊርካ ከም ተጓዕዘኒ 
           ናብ መፈጸምታ ከም ተብጽሓኒ 
           እሙን ኢኻ ጀማሪ እምነተይ  
           ኣይጥርጥረካን ምሉእ ዘመነይ(2) 
              ኣብ ባህ ዘብል ዕጫ በጺሑኒ 
                 አረ ግሩም ርስቲ መጺኡኒ  
                 ኣየ ክንደይ ተዓዲለ (ተዓዊተ)       
                 እግዚኣብሔር ኮይንካ ርስተይ (2) /2/`,
    eng: `1.Tserkani alo kha…
Kab me’alti ni me’alti
Bimhirretka enakhelelka ooo…
Dew ile alekhu abti hiyaw qalka
Ooo… tetekhile alekhu abti hiyaw qalka

Tede:Ayrson’ye… ti mhirretka aha-ha…
Ayrson’ye… ti fqirka aha-ha…
Ayrson’ye… ti halyotka aha-ha…
Ayrson’ye… gusnetka aha-ha…

2.Keydekhem keyħlel ajoḵi enabelka…
Tselmat ab zikhonelu birhanka enabrahka
Nigobotat meda gerkayo’m
Asagirka’ni biruk Goyta
Kemzi kemmakha men alo ni’ay
Kindi khulu zikhonelay (2)

3.Kisab shibet kisab ergnay
Tiskemeni Amlakhay…
Kiamneka’ye mlu’e zemena’y
Hazilka hangirka kem tegwa’ezni
Nab mefets’emta kem tebtsiħani
Emun’ika jemari imnetey
Aytirt’rka’n mlu’e zemena’y (2)

Ab bah zebl ‘itsa bets’huni
Are grum risti mets’i’uni
Aye kindey te’adile (te’awite)
Egziabher koyn’ka ristey (2)`
},
song11: {
    title: { tig: "ካብ ትንፋሰይ ትቐርብ", eng: "Kab Tinfasey Tik’erb" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ልመናይ ትሰምዕ ንብዓተይ ትርኢ  
  ጻውዒተይ ትሰምዓኒ ምላሽ ድማ ትህብ 
  ምስ ዝቐርብ ቅድሜኻ ኣለኹ ትብለኒ 
  መን’ዩ ዝመስለካ ኦ… መድሓኒ   
  ኦ…… 
      ተደ፦ፍቕሪ ዝኾንካ ኣምላኽ ዝወዳደር ነይብልካ 
               ቀረባ ኮይንካኒ ክስዕብ ኣስ’ኣሰርካ  
               መን’ከ ኣሎ ከማኻ ዝኾነለይ  
               ካብ ትንፋሰይ ዝቐርብ 
               ዘፍቅረኒ ዝሓልየለይ   
2.ድኻመይ ትርዳእ ሓይሊ እተዕጥቐኒ 
  መጊብካ እናበርታዕካ ኣብ ሕቑፎኻ ተዕርፈኒ 
  ምኻድ ምስ ሰኣንኩ መንኩብካ ትጾረኒ 
  ኣብ ዓቐበት ቁልቁለት ነይትፍለየኒ 
   ኦ…… 
           3.ዕሽነተይ ትፈልጥ መንገዲ ትመርሓኒ 
              ተሃክዩካ ነይፈልጥ ንኸተረድኣኒ 
              ከይስምብድ ‘ሞ ከይፋልል ቀስ ኢልካ ትመኽረኒ 
              በቲ ጥዑም ድምጽኻ ፍቓድካ ትምህረኒ 
              ኦ…… 
4.ልበይ ምስ ዝሽበር ተጸናንዓኒ  
   መንፈሰይ ምስ ዝቕጥቀጥ ድማ ተድሕነኒ  
   መከራይ ኣብ ዝበዝሓሉ ብኢድካ ተናግፈኒ 
   ኩሉ ስምዒት ናይ ልበይ ብቐረባ ትርድኣኒ 
  ኦ……`,
    eng: `1.Limenay tise’m’ ni b’atey tire’i
Tsaw’itey tise’m’ani milash dima t’ħeb
Mis zikerb k’demeka alekhu tible’ni
Men’yu zimesleka o… medhane
O……

Tede:Fqri zikhonka Amlak ziwedader neyblka
Qereba koynkani k’s’ɨb as’aserrka
Men’ka alo kemmakha zikhonelay
Kab tinfasey zikerb
Zefqreni zihalyelay

2.Dkhamey tirda’e hayli it’ɛtk’eni
Megibka enaberta’ekka ab h’qufoka te’rfeni
Mikhad mis se’anku menkubka tits’orni
Ab aqebet qulkulete neyitf’le’yeni
O……

3.Ishnetey tifelt men’gedi timerhani
Tehakiyuka neyf’elt ni k’etered’ani
Keysimbed ‘mo keyfalel qes ilka timekhrani
Beti t’qum d’mtska f’qadka timhireni
O……

4.Libey mis zishber t’senani
Menfesey mis ziqt’qet dima tedhheni
Mekray ab zibe’zhalu b’idka tenagfeni
Kulu sime’it nay libey b’qereba tirda’ni
O……`
},
song12: {
    title: { tig: "እሙን  ኢኻ", eng: "Emun Ika" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ከመይ ከም ትሰርሖ እንተዘይፈለጥኩ’ኳ    
   ስልጣንካ ኣሚነ ሽግረይ የቕርበልካ     
   ተስፋታተይ ዘቑርጽ ጸገመይ እንተበዝሐ        
   ንስኻ ከም ትፈትሓለይ ኣርጊጸ እፈልጥ’የ   
           ሓያል ዓቢ ኣምላኽ ተኣምራት ትገብር  
             እኣምነካ(3)                              
             ማሕተም ንተገብሮ ከም ሓድሽ ትጅምር       
             እሙን ኢኻ(3) 
2.ናብራይ እናጸልመተ እንተኸደኒ እኳ     
   ዝተጸበኽዎ ነገር እንተዘይኮነለይ ድማ     
   ግዚኡ ሓሊኻ ንስኻ ኢኻ ተብርሆ        
   ንዓኻ ብምሓዘይ ብዓወት ዝሓልፎ  
            ተስፋታትካ ብሉጽ ንሕይወተይ ዘሐድስ 
          እኣምነካ(3)       
          መከራይ ኣልጊስካ በረኸት ተፍስስ     
          እሙን ኢኻ(3)
3.መንገዲ ናይ ረሲእ ብዓመጽ ክቐንዓሉ       
   እርኢ’ለኹ ብዓይነይ ብብዙሕ ክሰልጠሉ     
  ብሓቅኻ ብምኻደይ ከም ዓሻ እንተቑጸረኒ   
  ብሓጢኣት ካብ ዝረኽቦስ ምስኣኑ ይበልጸኒ   
           ናይ ዕለት እንጌራይ ስኢነ ነይፈልጥ 
         እኣምነካ(3) 
         ትሓሊ ወላዲ ዘድልየኒ ትፈልጥ 
         እሙን ኢኻ(3)                                         
4.ክፉእ ርሱን መንትግ ወርዊሩ ክቐትለኒ    
   ከም ሓላዪ ተመሲሉ’ውን መጸኒ ክፉእ ጸላኢ    
   ድሌቱ ኣይኮነሉን ሓጺርካያ ንሕይወተይ        
   ምሉእ ዕረፍቲ ኣሎኒ ስለዝኾንካ ጓሳይየይ 
         ጅግና ተዋጋኢ ስምካ እግዚ/ር 
         እኣምነካ(3) 
         ኣማዕዲኻ ኣይትርእየንን ምሳይ ደኣ ትነብር 
         እሙን ኢኻ(3) `,
    eng: `1.Kemey kem tiserho entezeyfel’tku’kwa
Siltanka amine shigre yeqerbelka
Tesfatatey zequrts ts’egemey entebezha
Niska kem tifeṭhalei argitse efelt’ye
Hayal ‘abi Amlak te’amrat tigebber
Eamineka (3)
Mahtem ntegebro kem hadish tijmer
Emun Ika (3)

2.Nabray enats’elmete entekedeni ekwa
Zetsebeko neger entezeykonelay dima
Gzi’u halika niska ika teberho
Ni’akha bimhazey bi’awet zehalfo
Tesfatatka biluts nihywetey zehadis
Eamineka (3)
Mekray algiska berekhet tefsis
Emun Ika (3)

3.Mengedey nay resi’ b’amet’ k’ek’enalu
Eri’leku b’ayney b’bzuḥ k’sel’telu
B’haqka b’mikhadey kem ‘asha enteqts’erni
B’hati’at kab zirekebos misanu yibeltseni
Nay ‘ilet eng’eray si’ine neyf’elt
Eamineka (3)
Tihali weladi zedliyeni tifelt
Emun Ika (3)

4.Kefu’ r’sun menteg werwiru k’ek’etleni
Kem halay temesilu’wn mets’eni kefu’ ts’elai
D’letu aykonelu’n haseerka’ya n’hywetey
Mlu’e ‘erefeti aloni silzikhonka guasayeyi
Jigna tewagai simka Egziher
Eamineka (3)
Am’adika aytirey’en misay dea tineber
Emun Ika (3)`
},
song13: {
    title: { tig: "ማርያም ዑንቂ ባሕሪ", eng: "Maryam ‘Unqi Bahri" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `ተደ፦ማርያመይ ካብ ኩለን ዝኸበርኪ 
           ርኽሰት ኣልቦ ካብ ኩለን ንጽሕቲ 
           ሰመያዊ ፍቕሪ ዝተወግአ ልብኺ 
           ተዋሂቡኪ’ሎ ብልዑል ፈጣሪ(2) 
                ስለ ኹሉ እውን ትጽዕሪ 
                ንጥፉኣት እውን ክትመልሲ 
                ስለ ኹሉ ፍጡር ትነብዒ 
                ንሓጥኣን ምስ ፈጣሪ ክትዓርቂ 
           ማርያም ዑንቂ ባሕሪ 
           ዝለበስኪ ዘልኣለም ክብሪ 
           የድንቐኪ ኣለኹ(2) 
           ማርያም ክበሪ ወትሩ ንበሪ 
1.ኣማላድነትኪ ወትሩ ንጽውዕ 
  ስለ ፍቑር ወድኺ ደገ ንጸንዕ 
  ልብኺ ክፈቲ ኣውያትና ክሰምዕ 
  ጸጋ ኣልቢሱ መንፈስና ከጽንዕ 
  ከጽንዕ መንፈስና ከጽንዕ 
        2.ካብ ኩለን ደናግል ኣብሊጹ ሓረየኪ 
           ማሕደሩ ክትኮኒ ብቕድስና ቀብኣኪ 
           ኣብ ምድርን ሰማይን ንግስቲ ሸመኪ 
           ክብርን ውዳሴን ዘልኣለም ንዓኺ 
           ንዓኺ ዘልኣለም ንዓኺ /2/ `,
    eng: `Tedefa:Maryamey kab kulen zikheberki
Rikheset albo kab kulen n’tsehti
Semeyawi fqri zitewge’a libki
Tewahibuki’lo bil’ul fetari (2)
Sile kulu ewun ts’eri
N’t’fu’at ewun k’timelsi
Sile kulu f’tur tinbe’bi
N’hati’an mis fetari k’tiarqi

Maryam ‘Unqi Bahri
Zilebeski zelalem k’bri
Yedunqe’ki alekhu (2)
Maryam k’bri wetru n’beri

1.Amaladnetki wetru n’tsew’e
Sile fqur wedkhi dege n’tsen’e
Libki k’feti awy’atna k’sem’e
Ts’ega albsu menfesna k’ts’n’e
K’ts’n’e menfesna k’ts’n’e

2.Kab kulen denagel ablitshu hareyeki
Mahderu k’tikoni b’qed’sna k’ebaki
Ab midrin semayn nigisti shemeki
K’bri n’wdase’n zelalem n’akhi
N’akhi zelalem n’akhi (2)`
},
song14: {
    title: { tig: "ሰላመይ ወሓዚ ጌርካዮ", eng: "Selamey Wehazi Gerkaio" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ካባኻ ርሒቐ ናበይ’የ ክኸይድ 
   እንታይ’ከ ክረክብ ካባኻ ዝበልጽ 
   ኣይደልን(2) ክፍለየካ 
   ሓንሳእ ንዘልኣለም መሪጸካ 
   ሰናይካ እንድዩ ለሚዱ ልበይ 
   ክፍለ ዘይገብረለይ 
   ጽቡቕካ እንድዩ ለሚዱ ልበይ 
   ክፍለ ዘይገብረለይ(2)  
         ተደ፦ኣይደንል’የ ክርሕቕ ካባኻ 
               ኣይደንል’የ ክፍለየ’ካ 
               እንታይ’ዶ ጽቡቕ ኣሎኒ’ዩ  
               ኢየሱስ ብዘይካ’ኻ  
               ጽባቐይ ክብረተይ ዝምከሓሉ ሃብተይ 
               ናይ ዘልኣለም ርስተይ  
               ንስኻ እንዲኻ…ዎ… ኢየሱሰይ 
               ንዘልኣለም ዘይትበርስ ሃብተይ  
 2.ኣነ ንክኸብር ዝተዋረድካለይ  
   ሕይወት ንኽረክብ ንስኻ ሞትካለይ  
   ሰላመይ(2) ወሓዚ ገርካዮ 
   ብስምብራትካ ቁስለይ ፈዊስካዮ 
   እዚ እንዳ’ረአኹስ ኣነ ፈጺመ ነይፍለይ 
   እንተደለኹ ከኣ ልበይ ኣይገብረለይ(2) 
               3.ኣብ መንጎ ኣማልኽቲ ከማኻ ዝበለ 
               ብዕቤቱ ዝፍራሕ ገባር ተኣምራት 
               ከማኻ(2) ዝኸበረ መን’ዩ 
               ልዕል ዝበለ’ኸ እንታዋይ’ዩ 
               ንዝተበጀኻዮ ብምሕረት ትመርሕ 
               ነብሰይ ብፍቶታ ብድሕሬኻ ትጠብቕ(2) 
4.ብዘይካ’ኻ እሞ መን’ዩ ካልእ ኣምላኽ 
   እወ ብዘይ ብኣኻ መን’ከ ኣሎ ከውሊ 
   ካብ ልበይ(2) የፍቅረካ እየ  
   ክገልጸልካ ፍቕረይ ዜማ ጌረ 
   ዎ ኣምላኽ ክብረይን ልበይን ኣንቂደን 
   ሰናይካ ከዘንቱ እምበር ካባኻ’ስ ኣይፍለን(2) `,
    eng: `1.Kabaka r’hiqe nabey’ye k’kheyd
Entay’ke k’rekb kabaka zibelts
Ayde’ln (2) k’fleyeka
Hansae n’zelalem merits’eka
Senayka endyu lemidu libey
K’fley zeygebreley
Tsbukeka endyu lemidu libey
K’fley zeygebreley (2)

Tedefa:Ayden’l’ey k’rh’q kabaka
Ayden’l’ey k’fleyeka
Entay’do ts’buk aloni’yu
Iyesus b’zeyka’kha
Tsbak’ey k’biretey z’mek’halu habtey
Nay zelalem ristey
Niska endikha…wo… Iyesusey
N’zelalem zeytberes habtey

2.Ane n’kekheber z’t’war’dkaley
Hywet n’krekb niska motkaley
Selamey (2) Wehazi Gerkaio
B’smb’ratka qusley fewiskaio
Ezi endar’e’kus ane fets’ime neyf’ley
Entedelkhu ke’a libey aygebreley (2)

3.Ab mengo amalekhti kemakha z’bele
B’ebetu z’ferah gebar te’amrat
Kemakha (2) z’kheber men’yu
L’el z’bele’khe entawaye’yu
Niztebej’kayo b’mheret t’merrh
Nebse’ b’ftota b’dhereka t’tebq’ (2)

4.B’zeyka’kha emo men’yu kal’ amlak
Ewe b’zey b’akha men’ke alo kewli
Kab libey (2) yefqreka iye
K’gelts’elka fqrey zema gere
Wo Amlak k’breyn libeyn anqiden
Senayka kezintu ember kabaka’s ayfelsn (2)`
},
song15: {
    title: { tig: "ንኣምላኸይ ይኣምኖ’የ", eng: "N’Amalekhey Yiamnoye" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `ተደ፦ኣነሲ ንኣምላኸይ ይኣምኖ’የ ይኣምኖ        
       ኣነሲ ንኢየሱሰይ ይኣምኖ’የ ይኣምኖ                       
       ኩሉ ከምዝኽእል ይኣምኖ                           
       ዝብሎ ከምዘይጠልም  
       ይኣምኖ’የ ይኣምኖ(2)
 1.ኣነስ ንኣምላኸይ እወ ከምቲ ዝብሎ  
   ከምኡ ከምዝገብር ኣጸቢቐ ይኣምኖ            
   ንዕኡ ኣሚናስ ዓሪፋ’ላ ነብሰይ                 
   ሓበነይ ክብረተይ..ኮይኑኒ ትምክሕተይ  
        ሓቅኻ ንዘልኣለም  
        እሙን ሙዃንካ… 
        ንውሉድ ወለዶ …  
        ንዘልኣለም ይነብር(2) 
2.ሰናይ ጽቡቕ ክብረት ካብቲ ምምልላስ 
  ጽላሎት ዘይብሉ ብርሃናት’የ ዝቕበል  
  ንድሌተይ ብጽቡቕ ነገር እተጽግብ           
   ምንጪ ኩሉ ሰናየይ ኢኻ’ሞ                 
   ንዓኻ ክብሪ ይህብ 
        ኣባኻ ተወኪለ… ፍጹም ኣይሓፈርኩን      
        ንስምካ ጸዊዐ… ዋላ ሓደ ኣይሰኣንኩን          
        ኣባኻ ተወኪለ ፍጹም ኣይሓፈርኩን…          
        መመሊሰ ደኣ ይኸብር ኣለኹ… 
3.’ቲ ሰናይ ሓሳብካ ትሓስቦ ንሕይወተይ…  
   ፍጹም ኣይቅየርን… ዝመጸ ተመጸ           
   ኩሉ ከምትኽእል… ዓይነይ ሪኣትካ…  
   ዝበልካዮ ትፍጽም.… እሙን ኣምላኽ ኢኻ…                
        ሓሳቡ ከይቅየር… ንሱ ሰብ ኣይኮነን…            
        ዝበሎ ከይጠልም… ወዲ ሰብ ኣይኮነን…(2) `,
    eng: `Tedefa:Anesi nAmalekhey yiamnoye yiamno
Anesi nIyesusey yiamnoye yiamno
Kulu kem z khel yiamno
Zbelo kem zeytelm
Yiamnoye yiamno yiamno (2)

1.Anes nAmalekhey ewe kemti zbelo
Kemu kem zgebr ats’ebiq yiamno
Newu aminas arifa la nebsay
Habene k biretey koynuni tmikhtey
Haqqeka n zelalem
Emun muhaneka
Nwulud weledo
Nzelalem yinber (2)

2.Senay tsbuk k biretey kabti mmellas
Tslalot zeyblu brhanat ye zqebel
Ndletey btsbuk neger ets igb
Mnghi kulu senayey ikamo
Nakha k birey yihb
Abakha tewekile ftsum ay hafrekun
Nsmka tsewi a wala hade aysan kun
Abakha tewekile ftsum ay hafrekun
Memelise dea yikheber alekhu

3.Ti senay hasabeka thasbo nhywetey
Ftsum ay kyern zmetse tmetse
Kulu kem tkhel ay ney riatka
Zbelkayo tfetsm emun Amalekhey ikha
Hasabu ky kyern nso seb ay konen
Zbelo ky telm wedi seb ay konen (2)`
},
song16: {
    title: { tig: "ፍልይ ዝበለ’ዩ ፍቕርኻ", eng: "Fely Zbeleyu Fekreka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ምስቲ ሓጥአ’ዩ ዝተባህለ 
 ኢየሱስ ኣብ ቤቱ መኣዲ ተኸለ 
 ምላሽ ኮይንዎ ከም መጠን ምሕረቱ 
 ርውየት ኮይንዎ ከም ብዝሒ ለውሃቱ 
         ተደ፦ፍልይ ዝበለ’ዩ ፍቕርኻ(2) 
               አረ ንበይኑ’ዩ ፍቕርኻ 
               ምስቶም ንዑቓት ትሰርዕ መኣድኻ 
2.ርውየቶም ኢኻ ነቶም ጽሙኣት 
  ጽጋቦም ኢኻ ነቶም ጥሙያት 
  ምቖቶም ኢኻ ነቶም ዝቖረሩ 
  ፍቕርኻ ርእዮም ዓጊቦም ይነብሩ 
            3.ዳርባ ኣእማናት ኣይዓገተካን 
              ጸሎት ፈሪሳዊ ኣይዓገትካን 
              ንዝመለስካለይ ናይ ንብዓት ደብዳቤ 
              ብምስጋናኻ መሊእካዮ ልበይ 
4.ፈላጣት ሕጊ እንተኣዕዘምዘሙ 
  መርመርቲ ሕጊ እንተጉረምረሙ 
  ኢየሱስ ይምጥወኒ ኣሎ ብፍቕሩ 
  ጌና ክመርሓኒ ኢዩ ብፍቕሩ `,
    eng: `1.Misti hatayu ztebahle
Iyesus ab betu meadi tekhele
Mlash koynwo kem meten mhretu
Rwyet koynwo kem bzhi lewhatu
Tedefa Fely Zbeleyu Fekreka (2)
Are nBeynu yu Fekreka
Mistoem nUqat tiseri meadka

2.Rwyetom Ikha netom tsmuat
Tsgebom Ikha netom tmuayat
Mkhutom Ikha netom zqereru
Fekreka riyom agibom yinberu

3.Darba Aemnat ayagtekank
Tselot ferisawi ayagtekank
Nzmmelskaley nay nbat debdabe
Bmsganka melekaeyo lbey

4.Felatat hgi entaezmezmu
Mermerti hgi enteguremremu
Iyesus yimtweni alo bfeqru
Gena kmrhani iyu bfeqru`
},
song17: {
    title: { tig: "ጓሳ ኮንካኒ", eng: "Gwasa Konkani" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ካብቲ መንገዲ ምስ ኣልገስኩ 
 ካብቲ ደምብኻ ምስ ረሓቕኩ 
 ብምሕረትካ ስሒብካኒ 
 ናብ ምዉቕ ቤትካ መሊስካኒ 
    ተደ፦ምስ ቆረርኩ ጸጋ ተልብሰኒ 
          ምስ ጸማእኩ ማይ ሕይወት ተስትየኒ 
          ምስ ደኸምኩ ሓይሊ ትህበኒ 
          ሕያዋይ ጓሳ ኮንካኒ 
2.ማይ ምስ ጸማእኩ ተርውየኒ 
  ካብ ኩሉ ድኻመይ ተዕርፈኒ 
  ብኢደይ ሒዝካ ትመርሓኒ 
  እቶም ዕቡያት ማያት ከየጥሕሉኒ 
       3.ካብ ባርነት ግብጺ ናብ ሓርነት 
         ናብ ዘደንቕ ብርሃን ኣስጊርካኒ 
         ንጸላኢ ትሕተይ እናቐጥቀጥካ 
         መንገደይ ብዓወት እናመራሕካ`,
    eng: `1.Kabt mengezi ms algesku
Kabt dembka ms rehakku
Bmhretka shibkani
Nab mwq betka meliskani
Tedefa ms korerku tsega telbseni
Ms tsmaeku may hywet testyeni
Ms dekhmku hayli thibeni
Hyaway Gwasa Konkani

2.May ms tsmaeku terwieni
Kab kulu dkhamey teerfeni
Biday hizka tmrhani
Etom ebuayat mayat keyethluni

3.Kab barnet gbtsi nab harnet
Nab zdenq brhan asgirkani
Ntselai thtey nakqtkka
Mengedey bawet namrahkka`
},
song18: {
    title: { tig: "ኣምላኽ  ምሳና  እንተዘይነብር", eng: "Amlak Msana Entazeyneber" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `ኣምላኽ  ምሳና  እንተዘይነብር  
1.ይርአ’ሎ ጸላኢ ከቢቡ ዙርያና 
   ካብ ኩሉ ይብርትዕ ሓይሊ ናይ ኣምላኽና 
   መለኸት ንፍሕዎ ጸላኢ ክባረር 
   ብእምነት ደው ንበል ኢየሱስ’ዩ ዝስዕር 
         ተደ፦ኣምላኽ ምሳና ኣንተዘይነብር  
                እንተዘይዋግኣልና……   
                ሓይሊ ጸላኢና በርቲዑ ካብ ምድሪ መጥፍኣና 
                ስለዚ(4) እግዚኣብሔር ይመስገን 
               ስለ ኩሉ ነገር 
2.ብብዝሒ ብሒደት ዝከኣሎ ምድሓን 
   ንሱ ምሳና’ዩ ዝደፍረና የልቦን 
   ብኩሉ መሪሑ ኣብጺሑና ኣብዚ 
   ፍሬና ክርኢ ይደልየና ሕጂ 
             3.ሃገር ኣላትና ነባሪት ከተማ 
                ብኽያት ሓዘን ጓሂ ኣህህታ ዘይብላ 
                ንጋደል ኣሎና ክሳብ እንኣትዋ  
                ኣምላኽ ይርድኣና ኣብ ጊዜ ድኻምና 
4.ተቓውሞ  ኣማልቕ  ሰራዊት ናይ  ፈርዖን 
   ብጐይታ ሰራዊት ኪዓንዉ ክንርእዮም 
   ብብርቱዕ ድምጽና መለኸትና ንንፋሕ 
   ናይ እምነት ቁራዕ ርእሲ ኣብ ርእስና ንድፋእ`,
    eng: `Yira lo tsela’i kebibu zuryana
Kab kuluy yibrt hizli nay amlakna
Melekhet nfhuwo tsela’i kbarrer
Bimnet dew nbel Iyesus yu zsir
Tedefa Amlak msana antazeyneber
Entazey wagnalna
Hayli tsela’ina bertyau kab mdri metfana
Selezi Igeziaheber yimsgn
Sele kulu neger

2.
Bbzhi bhidet zkea’lo mdhan
Nsu msana yu zdefrena ylbun
Bkulu merihu absihuna abzi
Frena kri ydeliena hji

3.
Hager alatna nebaret ketema
Bkhyat hazen gwahi ahtta zybla
Ngadel alo na ksab enatwa
Amlak yirdena ab gize dkhamna

4.
Tqawmo amalq serawit nay Fer’awn
Bgoyta serawit kianwu knr’iyom
Bbrtu’ dmsna melekhetna nnfah
Nay emnet qura’ r’esi ab r’esna ndfe`
},
song19: {
    title: { tig: "ሕዝብኻ በዝሐ", eng: "Hzibkha Bzha" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ዕላማ ሒዙ ዝተሰለፈ 
   ብዙሕ ዘፍርሕ ሰራዊት ኣምላኽ 
   ንተጻረርቱ ወትሩ ዝስዕር 
   ለይትን መዓልትን ብናቱ ሓይሊ 
   ባሕሪ ተሳጊሩ ኣብ ምድረ-በዳ ኩሉ ረጋጊጹ… 
   ዝውሕዝ ሕዝቢ ምሳኻ ኮይኑ 
   ርስቱ ረኸበ ኩሉ ስዒሩ 
     ተደ፦ሕዝብኻ በዝሐ(2) 
              ወሰናት እውን ኣዚዩ ሰፍሐ 
              ናይ ምድሓን ወንጌል ኣባና በጽሐ 
 2.ከም ፍረ ኣድሪ ኣብ ምድሪ ዘርኣ 
   ጎይታ ከዕብያ ብዙሕ ክትፈሪ 
   እቲ ዕቡይ መጸ ረገጻ ብሓይሉ 
   ሓሲቡ ነይሩ ከጥፍኣ ካብ ምድሪ 
   ግን ኣይተኻእሎን ኣምሊጣ ወጸት ከደት ዓበየት… 
   ጎይታ ይመስገን ጨንፈራ ሰፍሐ 
   ንዝደኸሙ መጽለሊት ኮነት 
         3.ኦ ሃሌ-ሉያ --- ሃሌ ሃሌ-ሉያ 
            እናሰዓረ ዘልኣለም ዝነብር 
            ከም ኣምላኽናዶ ኣሎ መድሃኒ 
            ዝወዳደሮ ከቶ ኣይርከብን 
            ብኽያቶም ይሰምዕ መሳኪን ደቁ ዘይቲ ይቐብኦም…  
          ኣብ ቤቱ ይተኽሎም ኣብ ዓጸዳቱ  
            የዕብዮም ባዕሉ ስየ ክመስሉ `,
    eng: `1.‘Ilama hizu zteselafe
Bzuh zferh serawit Amlak
Ntetsarertu wetru zsir
Leytin mealtin bnatu hayli
Bahri tesagiru ab mdre-beda kulu regagitsu
Zwuḥz Hzbi msakha koynu
Ristu rekhebe kulu si’ru
Tedefa Hzibkha bzha
Wosenat ewn aziyu sefha
Nay mdhan wengel abna bts’ha

2.Kem fre adri ab mdri zera’a
Goyta k’ebya bzuh ktifri
Eti ‘ebuy metse regtsa bhaylu
Hasibu neyru ketfa’ ab mdri
Gn aytekha’lo amlita wts’et kdet ‘abeyet
Goyta yimsgn chenfera sefha
Nzdekhemu metslelit konet

3.O Halle-luya --- Halle Halle-luya
Enas’ar zle’alem zneber
Kem Amlaknado alo medhani
Zwedadero keto ayrkebn
Bkhyatom ysem’ mesakin dequ zeyti ykeb’om
Ab betu ytekhlom ab ‘atsedatu
Ye’ebuyom ba’lu siye kmeslu`
},
song20: {
    title: { tig: "ሩባ ሰላም", eng: "Ruba Selam" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ሰላም ዝቕናታ ናብ ኩሉ ትዝንቢ                    
   ርሕርሕቲ ኣደ’ያ ንኹሉ ትናቢ                    
   ብውሉዳዊ ፍቕሪ ንኹሉ ተታቲ                  
   ኣደ ኣላትና ናይ ሰማይ ንግስቲ  
       ተደ፦ኣደ ናይ ሕዙናት ዋልታ ናይ ድኹማት                    
                ነፍሰይ ንፈጣሪ ተዕብዮ ዝበለት                
 .              ማርያም ‘ያ ማርያም ሩባ ሰላም(4)  
2.ብነፍሲ ብስጋ ሰማይ ዝፈለሰት                       
   ናይ ኣቦና ኣዳም  ሓጢኣት ዘይወረሰት                  
   ብሓቂ ዝተዓደለት ናይ ዘመንና ግርማ                          
   ኣደ ኣላትና ንዑ ንሳለማ 
        3.ኣብ ሰማይ ኣብ ምድሪ ንሳ‘ያ ተስፋና                
           ኣደ ኣምላኽ ኮይና ድሕነት ዘምጽኣትልና              
           ኣጆኹም ትብለና ምስ ወዳ ቀሪባ                   
           ጻዕዳ ህያብ ከም ሉል ዘይብላ ሰበባ 
4.ሙሴ ዝረኣያ በረኻ ክትነድድ                       
   መልኣኽ ዘበሰራ ኣማኑኤል ክትወልድ                    
   ኣቦ ዝመረጻ ክትኮኖ መርዓቱ                            
   ከቢራ ክትነብር ኣብ ሰማያት ቤቱ `,
    eng: `1.Selam ziqnatta nab kulu tiznbi
Rhrhti ad’ya nkhulu tnabi
Bwludawi fquri nkhulu tetati
Ade alatna nay semay ngisti
Tedefa ade nay hzunat walta nay dkhumat
Nefsei nfeṭari te’biyo zbelt
Maryam ya Maryam Ruba Selam

2.Bnefsi bsga semay zfeleset
Nay abona Adam hti’at zeywereset
Bhaki zte’adelet nay zemenna grma
Ade alatna nu nsalema

3.Ab semay ab mdri nsa’ya tesfana
Ade Amlak koyna dhenet zmtse’atlna
Ajokum tibelna ms weda qeriba
Tsa’ida hyab kem lul zeybla sebeba

4.Muse zre’aya berha ktinedd
Mela’ek zebsera Amanuel ktweld
Abo zmeretsa ktkono mer’atu
Kebira ktnebr ab semayat betu`
},
song21: {
    title: { tig: "መን እዩ ዘፍቅር ከምቲ ናትካ", eng: "Men Eyu Zefqir Kemit Natka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `ተደ፦መን’ዩ እቲ ዘፍቅር ከምቲ ናትካ 
          መንዩ’ኸ እቲ ዝሓልየለይ ከምቲ ናትካ(2) 
          የብለይን ጎይታየ ከማኻ 
          ንስኻሲ(2) ንዓይ ፍሉይ ኣቦ ኢኻ 
1.ደኺመ እንተረኣኻኒ ሓይልኻ ትህበኒ 
 ወዲቐ እንተረኣኻኒ ብምሕረት ተልዕለኒ(2) 
 ኣይትጽብጽቦን ኢኻ ንብዝሒ ጉድለተይ 
 ብፍቕርኻ ትኽውሎ ንኹሉ ስንፈተይ(2) 
 ንኹሉ ድኽመተይ 
      2.ንዓይ ክትገልጸለይ እቲ ብሉጽ ፍቕርኻ 
         መቕጻዕተይ ተቐቢልካ ኣብ መስቀል ተሸንኪርካ(2) 
         መን እሞ’ዩ ዝገብር ጎይታ ከምዚ ናትካ 
         ኩሉ መስተንክር እዩ ኢየሱስ ተግባራትካ(2) 
         የልቦን ዝመስለካ 
3.ብሰሪ ሓጢኣተይ ክረኽቦ ዝግብኣኒ 
  ከም ብዝሒ በደለይ’ውን እቲ ዝጽበየኒ(2) 
  ናይ ዘልኣለም ሞት ኔሩ እቲ ናተይ ግደ 
  ግን ኣንታ ለዋህ ኣምላኸይ ሞተይ ንስኻ ሞትካለይ(2) 
  ሕይወትካ የሕሊፍካለይ 
       4.ኩሉ ግዜ ትመኽረኒ መታን ንኸይጠፍእ 
         ጉድለተይ’ውን ተርእየኒ መታን ንኸይጠፍእ(2) 
         ዓሚቕ ምስጢር ኣለዎ ኣቦየ ፍቕርኻ 
         ነቲ ዘስተውዕሎስ ኢየሱስ ፍሉይ ኢኻ(2) 
         ሓለፋ ኩሉ ኢኻ `,
    eng: `TeDefa:Menuyu eti zhalyele’ley kemit natka
Menuyu khe eti zhalyele’ley kemit natka
Yebleyen goytaya kemakha
Niskhasi n’ay feluy abo ikha

1.Dekime entera’akani haylika tihbeni
Wedike entera’akani bmhret tele’lni
Ayitsbtsbon ikha nbezhi gudletay
Bfqurikha tikhwlo nkulu snfeti
Nkulu dekmatey

2.N’ay ktkeltselay eti bluts fqurikha
Mekqtsa’tey teqebilka ab meskel teshankirka
Men imo’yu zgebr goyta kemzi natka
Kulu mestenker iyu Iyesus tegbaratka
Yelbon zmseleka

3.Bseri hti’atay krekbo zgibani
Kem bzi bedley’won eti ztsbeyeni
Nay zelalem mot neru eti natay gide
Gin anta lewah Amlakey motey niskha motkaliy
Hywetka yehlifkaliy

4.Kulu gize tmekhrani metan nkheytfe
Gudletay’won ter’eyeni metan nkheytfe
Amik msitir alewo aboye fqurikha
Neti zestew’elos Iyesus feluy ikha
Halefa kulu ikha`
},
song22: {
    title: { tig: "ኣይነበር", eng: "Ayneber" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ናይ ዘልኣለም ሕይወት ቃል ኣሎካ 
   ናበይ ክኸይድ’የ ሞ’ካባኻ 
   ምርጫይ እዚ’ዩ ንዘልኣለም  
   ካብ ቤትካ ወጻእስ ኣይነበር(7) 
   ተደ፦ስጉምትታተይ ኩሉ (ይኹን) ኣብ ኣሰርካ 
           ካልኢት (ደቒቕ) ኣይደልን ክፍለ ካባኻ(2) 
           ኣይደልን ክፍለ ካባኻ 
           ኣይረክብን ደልየ’ውን (ኢየሱስይ) ከማኻ(2) 
           ነብሰይሲ እምብዛ(2) ፈትያትካ 
           ኣይደልን ኣይፍለን ኢላ ካባኻ 
           ትጠብቅ ኣላ(2) ብድሕሬኻ 
           ትጠብቕ ኣላ ብድሕሬኻ(2) 
2.ምሳኻ ሙዃንዩ ነብሰይ ዕረፍታ 
   ኣብ ቅድሚ ገጽካ’ዩ ዕጋበታ 
   ብርክኽ ትብል ክትዓርፍ ካብ ጻዕራ 
   መሊኣ ትትስእ ብምስጋና(7) 
         3.ካብ ሽሕ መዓልቲ ኣብ ደምበ ረሲኣን 
            ኣብ ቤትካ ይሕሸኒ ምሳኻ ሙዃን 
            ካባኻ ዘይኮነስ ኣይኹነኒ 
            ንሙሉእ ዘመነይ ይትረፈኒ(7)`,
    eng: `1.Nay zelalem hywet qal aloka
Nabey kkeyd iye mokabkha
Mrchay ez’yu nzelalem
Kab betkha wetsa’es ayneber (7)

Tedefa:Sgumt tatay kulu (ykhun) ab aserka
Kal’it (deqiq) aydelnn kflet kabkha (2)
Aydelnn kflet kabkha
Ayreknn delye’wn (Iyesusy) kemakha (2)
Nebseysi embza (2) fetyatkha
Aydelnn ayflenn ila kabkha
Ttetebk ala (2) bdhreka
Ttetebk ala bdhreka (2)

2.Msakha mu’anyu nebsey yrefta
Ab kdmi gtskha’yu ygbeta
Brkhkh tbel ktta’rf kab tsa’ra
Mlia ttse’s bmsgana (7)

3.Kab shh me’alti ab dembe resi’an
Ab betkha yhshe’ni msakha mu’an
Kabkha zeykones aykhuneni
Nmulu’e zemney yttrefeni (7)`
},
song23: {
    title: { tig: "ተመስገን ኢየሱስ", eng: "Temesgen Iyesus" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ኣብ መቕደስካ ክኣቱ ሒዘ ጥዑም ሽቶ 
  ንኽብርኻስ ኢየሱስ (ፍትወይ) እሰብሮ አፍስሶ(2) 
  ቅዱስ(3) ኢለ አምልኸካ 
  ኣብ ዘመናት ኩሉ መን’ዩ’ሞ ከማኻ(2) 
  መን’ዩ’ሞ ከማኻ መን’ዩ ዝመስለካ 
    ተደ፦ተመስገን ኢየሱስ ተመስገን(3) ተመስገን 
                    ነፍሰይ ተኽብረካ‘ላ ተመስገን 
                    ነፍሰይ ተዕብየካ‘ላ ተመስገን 
                    ነፍሰይ ተንግሰካ‘ላ ተመስገን 
                    ነፍሰይ ተምልኸካ‘ላ ተመስገን 
          ተመስገን(2) ብነገር ኩሉ ጻድቕ ኢኻ’ሞ ተመስገን 
          ተባረኽ(3) ብነገር ኩሉ ሕያው ኢኻ’ሞ ተባረኽ 
2.ኣበርን መንቅብን ፈጺሙ ዘይብልካ 
   ኢንታ ኮነ ዕጣር ዘይተረኽበካ(2) 
  ንስምካ ከኽብር ትምክሕተይ’ዩ ንዓይ 
   ብኣኻ ክጽዋዕ ኩርዓተይ ሓበነይ 
  ብስምካ ክጽዋዕ ስም ክብረት’ዩ ንዓይ 
   ካበይ’ዩ ኮይኑለይ ዕጫይ ጸቢቑለይ 
            3.ካብ ደጌታት ናይ ሞት ስሒብካ ተውጽኣኒ 
             ኣብ በረኽቲ ቦታ ዳግም ተቑመኒ(2) 
               ከማኻስ መን እዩ ንዓይ ዝቐርበኒ 
             ኣብ ክፉእ ኣብ ጽቡቕ ካልኣይ ዝኾነኒ 
               ኣብ ራህዋ ኣብ ጸበባ ካልኣይ ዝኾነኒ 
               ብጻይ ዝኾነኒ ዘጸናንዓኒ 
4.ጽቡቐይ ዘይፈቱ ሃማን ከጥፍኣኒ 
  ካብ ላዕሊ ካብ ኣርያም ክትዝክረኒ(2) 
   እዚ እናረአኹስ ከመይ ስቕ ክኽእሎ 
   ኣብ ዝፋንካ ኣትየ ዕጣነይ ኣዕርጎ(2) 
   ዕጣነይ ኣዕርጎ እንካ ተቐበሎ `,
    eng: `1.Ab meqdaska kiatu hizye tqum shito
Nkhibrkash Iyesus fetwey isebro afsso (2)
Kduss (3) ile amlekeka
Ab zemenat kulu menuymo kemakha (2)
Menuymo kemakha menu yu zmesleka

Tedefa:Temesgen Iyesus temesgen (3) temesgen
Nefsei tekhbreskala temesgen
Nefsei tebybioka temesgen
Nefsei tengeska la temesgen
Nefsei temlikeka la temesgen
Temesgen (2) bnegir kulu tsadq ikha mo temesgen
Tebarek (3) bnegir kulu hyaw ikha mo tebarek

2.Abern menkebn fatsimu zeybelka
Inta kone etar zeyterekhbekka (2)
Nismka kekhibr timikhtey yu nay
Baakha ktshwa kurna tehabeni
Bismka ktshwae sim kbretyu nay
Kabey yu koynuley eqayi tsebikuley

3.Kab degetat nay mot sibhbka tewtsani
Ab berekhti bota dagim tequmeni (2)
Kemakhas men eyu nay zikerbeni
Ab kefu ab tsbuq kalay zikhoneni
Ab rahwa ab tsebeba kalay zikhoneni
Btsay zikhoneni zestenanani

4.Tsbukey zeyfetu haman ketfaani
Kab laeli kab aryam ktizkreni (2)
Ezi enaraekus kemey sk kkhilo
Ab zefanka atye eqtany aergu (2)
Eqtany aergu enkah teqebelo`
},
    song24: {
    title: { tig: "ከመስግነካ እደሊ’ለኹ", eng: "Kemmesgineka Edeli leku" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ከመስግነካ እደሊ’ለኹ… 
ክውድሰካ እደሊ’ለኹ… 
ከኽብረካ እደሊ’ለኹ…  
ንዘልኣለም /2/ 
    ተደ፦ሕጽረት ቃላት’ዩ እምበር ትኽስታ የብለይን(4) 
     እዚ ኹሉ ሰናይካ 
     ምስቲ ኹሉ ሓልዮትካ 
     መስፈሪ ኣይርከቦን’ዩ ጎይታይ ዓሚቕ’ዩ ቲ’ፍቕርኻ 
     ምስቲ ኹሉ ሰናይካ ቲ’መስተንክር ግብርኻ 
     መስፈሪ ኣይርከቦን’ዩ ኢየሱስ ዓሚቕ’ዩ ቲ’ፍቕርኻ 
2.ክብሪ ምስጋና…  ስግደት ንዓኻ… 
  ውዳሴ ዕልልታ…  ኣምልኾ ንዙፋንካ… 
  ንዘልኣለም…  ሕይወት ዘለኩም…  
   ኩሉኹም ፍጥረታት… ኣኽራናት ጎቦታት…   
ወሓይዝ ሩባታት… 
ኣመስግንዎ……… 
      3.ምሕረቱ ዘይውዳእ…  ስልጣኑ ዘይድፈር… 
        ዕቤቱ ዘይምርመር…  ልዑል ኣምላኽና… 
        ንወትሩ ይኽበር…  ሕይወትና ኣንጽሓዮ… 
        ልብና ኣቕንዓዮ…  ጸጋኻ መሊኡ…   
        መንፈስካ ተሓዲሱ…`,
    eng: `1.Kemmesgineka edeli leku
Kiwdiseka edeli leku
Kekhbreka edeli leku
Nzelalem (2)

Tedefa:Hitsret qalat yu ember tkista yebliyn (4)
Ezi kulu senayka
Misti kulu halyotka
Mesferi ayrekhbon yu goytay amiq yu tifqirka
Misti kulu senayka ti mestenker gibrka
Mesferi ayrekhbon yu Iyesus amiq yu tifqirka

2.Kibri msgana sgdet n’aakha
Wdase elilta amlkho nzufanka
Nzelalem hywot zelekum
Kuluhkum ftratat akhranat gobotat
W’hayz rubatat
Amesgino

3.Mhretu zeywudae siltanu zeydfer
Ebetu zeymrmer l’ul Amlakna
Nwetr ykber hywotna antsahayo
Lbna aqn’ayo tsegaka meliu
Menfeska tehaddisu`
},
    song25: {
    title: { tig: "ተመስገን ጎይታይ", eng: "Temesgen Goytay" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ምሕረትካ ሃበኒ ኢለ ምስ ጸዋዕኩ                          
  ቁሊሕ ኢልካ ጠሚትካኒ……  
  ናባኻ ምስ ጠራዕኩ                            
  ፈውስኻ ምስ ደለኹ ብኢድካ በጺሕካኒ                            
  ኩሉ ስምዒት ናይ ልበይ ብቐረባ ትርድኣኒ(2) 
       ተደ፦ተመስገን(3) ጎይታይ (2)  
                ካብቲ ሕማቕ ሕይወት ዘውጻእካኒ             
                ክስዕበካ ፍቕርኻ ደሪኹኒ(2)               
                ክስዕበካ ፍቕርኻ ደሪኹኒ 
2.መን ኮይነ‘የ ኣነ ኣባኻ ዝነብር                                         
   ምሕረትካ ምስ ረኸብኩ…… 
   ዝያዳ ዝኸብር                             
   ወቂጥካኒ ኣብ ኣእዳውካ ንዘልኣለም ጽሒፍካኒ                        
   ሃሌሉ ሃሌ-ሉያ ኢለ’ውን ይዝምር(2) 
            3.መንገዲ ዘልኣለም ኣባኻ ምስ ረኸብኩ                                 
               ስጋኻ ተመጊበ……  
               ደምካ’ውን ምስ ሰተኹ                         
               ትጓስየኒ ዘሎኻ እሙን  ኮይንካ መራሒ            
               ከማኻ ኣይረክብን ዋልታ (ጓሳ) ዝኾነኒ(2)`,
    eng: `1.Mhreteka habeni ile mis tsewa’ku
Qulih ilka temitkani
Nabaka mis tera’ku
Fewseka mis deleku b’idka betsihkani
Kulu smi’it nay lbey bqereba tred’ani (2)

Tedefa:Temesgen (3) Goytay (2)
Kabti hmaq hywot zewtsa’ekani
Kse’beka fiqirka deri’huni (2)
Kse’beka fiqirka deri’huni

2.Men koyne ye ane abaka zneber
Mhreteka mis rekhebku
Zyada zkebr
Wqitkani ab a’edawka nzelalem tshifkani
Halelu haleluya ile wun yzmmer (2)

3.Mengedi zela’lem abaka mis rekhebku
Sgaka temgibe
Demka wun mis seteku
Tgwas’eyeni zeloha emun koyneka merahi
Kemaka ayrekhbin walta (gwasa) zkwenenni (2)`
},
    song26: {
    title: { tig: "ረቡኒ ክብለካ", eng: "Rebuni Kibleka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ንንፋሳት ኣብ ዕምቆ ኢድካ እትእክቦም 
   ንማዕበላት ብቓልካ እተህድኦም 
   ንሰማያት ብዘይ ዓንዲ እተቑሞም 
   ንግብርኻ መን’ይመስሎ መንከ ይወዳደሮ 
      ተደ፦ኣብ ልዕሊ ኣኽራን እናነጠረ 
              ኣብ ልዕሊ ኮሮቢት እናዘለለ 
              ድምጽኻ ይሰምዕ ኣሎ የእዛነይ 
              ብፍቕርኻ ኣሃሃ ይማሙቕ ኣሎ ልበይ 
2.ቃልካ ኣምላኸይ ብሓቂ ንጹህ’ዩ 
   ነቶም ኣባኻ ዝምዕቆቡ ዋልትኦም’ዩ 
   ብጸጋኻ መንገዶም ይጅምሩ 
   ኣብ ጽላልካ ባህ ኢልዎም(2) ይነብሩ 
          3.ከም ሲላስ ክኸውን ሃዋርያኻ 
             ከም ቨሮኒካ ክደርዞ ንገጽካ 
             ከም መግደላዊት ረቡኒ(2) ክብለካ 
             ጎይታየ ኣኽእለኒ ብጸጋኻ 
4.ከም ሲላስ ክኸውን ሃዋርያኻ 
   ከም ቨሮኒካ ክደርዞ ንገጽካ                                
   ከም ቶማስ ክትንክፎ(2) ጎድ`,
    eng: `1.Nnfasat ab emqo idka ette’ekbom
Nma’eblat bqalka ettehde’om
Nsemayat bze y’andi ettequmom
Ngbrka men yimmeslo menka yiwedadero

Tedefa:Ab le’li akhran enaneter
Ab le’li korobit enazellele
Dmtska yisem’ alo ye’ezaney
Bfiqirka ahaha yimamuq alo lbey

2.Qalka amlakey bhqi ntsuh yu
Netom abaka zmi’qobu waltoom yu
Btsgaka mengedom yjmr
Ab tslalka bah ilwom (2) ynebru

3.Kem Silas kkhwun hawarya ka
Kem Veronika kderzo ngetska
Kem Mgdelawit Rebuni (2) kibleka
Goytayey akhelni btsgaka

4.Kem Silas kkhwun hawarya ka
Kem Veronika kderzo ngetska
Kem Tomas ktenkfo (2) god`
},
    song27: {
    title: { tig: "ኣምላኸይ ብሓቂ ፍቕሪ ኢኻ", eng: "Amlakay behaki fiqri ika" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ንማርያም መግደላዊት ካብ ምንዝርና 
 ንስምኦን ካብ ገፋፊ ዓሳ 
 ንማቲዎስ ካብ መኽፈሊ ቀረጽ 
 ንዘኪዎስ ካብ እንዳ ተገውቲ መሪጽካ 
       ተደ፦ንስኻስ (ኣምላኸይ) ብሓቂ ፍቕሪ ኢኻ 
             ኢየሱሰይ ብሓቂ ፍቕሪ ኢኻ 
             ሕይወተይ ጥዒማትካ  
             ንስኻስ ብሓቂ ፍቕሪ ኢኻ /2/ 
2.ነታ ሳምራዊት ሰበይቲ ካብ ጽምኢ ማያ 
  ንሓማት ስምኦን ዓሶ ሓሚማ ኸላ 
  ነታ መበለት ኣብ ሞት ናይ ወዳ 
  ነዞም ኩሎም ኣብ ከምዚ ከለዉ ኣፍቂርካ 
           3.ንስጋይ ካብ ዓዘቕቲ ሓጢኣት 
             ንነፍሰይ ካብ ግዝኣት ናይ ጸልማት 
             ንሕይወተይ ካብ ዘልኣለም ጥፍኣት 
             ዝተበጀኻያ ኢየሱስ ፍቅሪ ኢኻ 
4.ናይ ውሽጠይ ብፍጹም ትፈልጦ 
  ንሸኸመይ ቀንጢጥካ ተራግፎ 
  ንጭንቂ ልበይ ከም ጸሎት ትርእዮ 
  ንድኻመይ’ውን ኩሉ ትርድኦ 
           5.ሰብ ነቲ ክቡር ክሓሪ ይደሊ 
             ንስኻ ግን ነቲ ድኹም ትሓሪ 
             ባህርያትካ ፍሉይ’ዩ መስተንክር 
             ፍቕርኻ ሓሲበስ እኔኹ ይዕልል 
     ስለ’ቲ ፍቅርኻ ዕልል(3) ዕልል’ውን ይብል 
     ስለ’ቲ ሓልዮትካ ዕልል(3) ዕልል’ውን ይብል 
     ስለ’ቲ ሰናይካ ዕልል(3) ዕልል’ውን ይብል`,
    eng: `
NeMaryam megdelawit kab menizrna
NeSimon kab gefafi asa
NeMatyos kab mekfeli qerets
NeZekiyos kab enda tegewti meritska
Tedfo niskas (Amlakay) behaki fiqri ika
Iyesusey behaki fiqri ika
Hiywetey tiimatka
Niskas behaki fiqri ika /2/

Neta Samrawit sebeyti kab tsimi maya
Nehamat Simon aso hamima kela
Neta mebelet ab mot nay weda
Nezom kulom ab kemzi kelawu afqirka

Nesgay kab azekti hatiat
Nenfsey kab gziat nay tslmat
Nehiywetey kab zelaalem tfiat
Ztebejeqka Iyesus fiqri ika

Nay weshtey befsum tefelto
Neshexemey qentitka teragfo
Nechenqi libey kem tslot teriyo
Nedxameywun kulu terdio

Seb neti kebur kehari yideli
Neska gn neti dkhum tehari
Bahriyatka fluuyiu mestenker
Fiqrika hasibes enekhu yiilel
Selti fiqrika ilil(3) ililwun yibl
Selti halyotka ilil(3) ililwun yibl
Selti senayka ilil(3) ililwun yibl`
},
    song28: {
    title: { tig: "ተስፋ ኣይቆርጽን እየ", eng: "Tesfa ayqortsn iye" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ሓጢኣተይ ከቢዱኒ ዓቢ ጽዕነት ኮይኑኒ 
 ማርያም ኣማልድለይ ወድኺ ክምሕረኒ 
     ተደ፦ተስፋ ኣይቆርጽን ኢየ(2) 
           ክሳብ ተማልድለይ  
           ኣነስ ኣብ ትሕቴኺ ኢየ 
2.ሰይጣን እንተፈተነኒ ኢሉ ከውድቐኒ 
  ርሕርሕቲ ወላዲተይ ንስኺ ኣለኽኒ 
         3.ብሓጢኣተይ ዝኣክል ሕልናይ ከይወቕሰኒ 
           ንድሕሪት ከይምለስ ኣደይ ሓግዝኒ 
4.ሕልናይ ተሸቢሩ ሰላም እውን ስኢነ 
  እልምን ኣለኹ ኣብ እግርኺ ኮይነ   `,
    eng: `Hatiatey kebiduni abi tsiinet koynuni
Maryam amalidley wedxi kmh̆reni
Tedfo Tesfa ayqortsn iye (2)
Kisab temalidley
Anes ab tihtēki iye

Seytan entefeteni ilu kewdkeni
Rehrehti weladitey neski alekheni

Behatyatey ziaekl hilnay keywekseni
Nedhrit keymles adey hgezni

Hilnay teshbiru selam ewun siine
Elmen alekhu ab egreki koyne`
},
    song29: {
    title: { tig: "ብፍቅርኻ ዝተማረኽኩ", eng: "Befqirka ztemarehku" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.እቲ…… ካብ ወይኒ ዝጥዕም ፍቕርኻ ኣሃ…   
  ኣብ ዓጻጽምተይ ኣትዩ ውሽጢ ሰጢሙ         
  ኣብ ትሕቲ እግርኻ ክቕመጥ ጌሩኒ’ዩ    
  ኣሃሃ… ኢየሱሰይ ማሪኹኒ’ዩ(2) 
   ተደ፦ብፍቕርኻ ዝተማረኽኩ ምርኮኛ’የ(3)   
            ኣእዳወይ ምስናይ ልበይ ናባኻ ኣልዒለየ(3)  
            ብኢደይ ሒዝካ ናብ ትኸዶ ዘበለ           
            ክትወስደኒ(2) ክትስሕበኒ                      
            ምስተን መጓሴኻ ኣብ ዝለምዐ ሸኻኻ ከተውዕለኒ(3) 
            ኢየሱሰይ ድላይ ኣሎኒ 
2.ንስኻስ…… ናይ ዘልኣለም ሕይወት ቃል ኣሎካ   
   ካባኻ‘ሞ ናበይ ክኸይድ’የ                     
  ካብ ኣብ ዱንኳን ረሲኣን ምቅማጥሲ          
   ኣብ ቤትካ’የ ወሲነ ዘልኣለም ምንባር(2) 
         3.ኣብ ክንዲ…… ሕማቕ ዝገበርዎ ዝመውት የለን  
            ንዝጸረፍዎ’ውን ዝምርቕ የለን                  
          ገና ሓጥእ ከለኹ ብምማትካ                 
            እታ ኣባይ ዘላትካ ፍቕሪ ገሊጽካ(2) `,
    eng: `Eti kab weyni ztiim fqirka aha
Ab atsatsmtey atyu wsti setimu
Ab tihti egreka kqmet geruni yu
Aha Iyesusey marikhuni yu (2)

Tedfo Befqirka ztemarehku mrkonaye (3)
Aedawey msnay lbey nabaka alyiley (3)
Biidey hizka nab tkhedo zebele
Ktwsedeni (2) ktshehbheni
Msten mgwaseka ab zlem a shehaka ktwueleni (3)
Iyesusey dlay aloni

Neskaas nay zelaalem hiywet kal aloka
Kabaka mo nabey kkheyid yie
Kab ab dwnkwan resian mkmatsi
Ab beytka yie wesine zelaalem mnbar (2)

Ab kndi hmaq zgeberwo zmawt yelen
Nztsrefwo wun zsmrq yelen
Gena hati ekleku bmmaatka
Eta abay zelatka fqri gelitska (2)`
},
    song30: {
    title: { tig: "ተመስገን ክብል’የ", eng: "Temesgen kibliye" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ይመስለና ኣሎ ዝብጻሕ ጉዕዞ ስጋ 
 ምስትውዓል ሃበና ክንበጽሕ ናባኻ 
 ተምበርኪኽና እንተ ጠመትና ናባኻ 
 ተገሊጹ ኢዩ ኣብ መስቀል ፍቕርኻ(2) 
   ተደ፦ንኾንቱ ኣይኮነን ዝፈሰሰ ደም ጎያታ 
         ንኾንቱ ኣይኮነን ስቓይ ናይ ጎልጎልታ(2) 
         ደም ጎይታ ዝፈሰሰ ንኾንቱ ኣይኮነን(2) 
         ብደም ጎይታ ዝደሓና ነፍሳት  
         ይምስክራ ብድምጺ መለኸት(2) 
           ተመስገን ክብል’የ(2) ብጸጋኻ ዓጊበ ፍቕርኻ ተመጊበ 
           ተመስገን ክብል’የ(2) ብደምካ ተሓጺበ ጸርየ ነጺሐ 
           ተመስገን ክብል’የ(2) ብጎይታ ዓጊበ ደሕነት ረኺበ 
           ኣነ ኣሜን ክብል’የ 
2.ክሳብ ክንደይ ዓሚቕ’ዩ ጎይታየ ፍቕርኻ 
  ተቐዲሑ ዘይውዳእ ከም ምድራዊ ቀላይ  
  ብዙሕ’ዩ ሃብትኻ ዘይውዳእ ጸጋኻ  
  ኩሉ ኣሎ ኣብኡ ህያባት ፍቕርኻ(2) 
       3.መስቀልካ ይነግር ንምስጢር ጉዕዞኻ 
         ደሚቑ ይውላዕ ኣብቲ ለዋህ ገጽካ 
         ርኣዮ ይብለና ንውጉእ ኣካልካ 
         ጸጋኻ ክፈስስ ካብ ደመ ርሃጽካ(2) `,
    eng: `Yimeslena alo zbtsh guezzo siga
Msttwal habena knbetsih nabaka
Tmberkihna ente tmetna nabaka
Tgelitsu iyu ab meskel fqirka (2)

Tedfo nkhontu aykonen zfeses dem goyata
nkhontu aykonen sqay nay golgolta (2)
dem goyta zfeses nkhontu aykonen (2)
bidem goyta zdahana nefsat
yimskra bidmtsi meleket (2)
Temesgen kibliye (2) bitsagaqa agibe fqirka temegibe
Temesgen kibliye (2) bidemka tehshibe tsariye netsiha
Temesgen kibliye (2) bigoyta agibe dehnet rekhbe
Ane amen kibliye

Kisab kndey amiq yu goytaye fqirka
Teqedihu zeywudae kem midrawi qelay
Bizuh yu habtka zeywudae tsagaka
Kulu alo abiu hyabat fqirka (2)

Meskelka yineger nmsitir guezzoqa
Demiqu yiwlae abti lewah gegtska
Reao yiblena nwgu akalka
Tsagaka kfeses kab deme rhatska (2)`
},
    song31: {
    title: { tig: "ንዓይ ብምሕራይካ", eng: "Nay bmhrayka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.መዓልቲ ምድሓነይ ሕጂ ክባርኻ 
  ስለ ዝኾንካለይ ናይ ሕይወተይ ጠበቓ 
  ስምካ ጸዋዕኩኻ በልካኒ  
  ምግላጹ ስኢነ ዓቢ’ዩ ኮይኑኒ 
        ተደ፦ንዓይ ብምሕራይካ ንዓይ ብምምራጽካ 
              ንዓይ ብምፍቃርካ  ክገልጾ ዘይክእል  
              ካብ ኣእምሮይ ንላዕሊ’ዩ ጎይታይ 
2.ካብ ሞት ናብ ሕይወት ዘሰጋገርካኒ  
  ኣብ ልዕሊ ሰይጣን’ውን ዓወት ዝሃብካኒ  
  ዝመልሰልካ የለን ንዝዓደልካኒ  
  ናብ ዘገርም ብርሃን ዘምጻእካኒ  
            3.ካብ ዘልዓለም ስቓይ ኢየሱስ ዘድሓንካኒ 
              ናብ ሃገር ሕያዋን ንዓይ ዘምጻእካኒ 
              ልበይ ብምስጋና ኣፈይ ብዕልልታ 
              ክዝምረልካ’የ ኣታ ለዋህ ጎይታ 
4.ሓደ ክልተ ኢልካ ዘይቁጸር  
   እዝን እትን ኢልካ ዘይንገር 
   ንዝገበርካለይ ውዕለታት 
   ክሳብ ዘለኹ’ውን ከመስግነካ 
            5.ኣፈይ ብምስጋና ብርሃን ተወልዐ 
              እቲ ንዑቕ ጸላኢ ፈጽሙ ተዳህለ 
              ብጭፍራ መልኣኽቲ ኢየሱሰይ ተመልአ 
              ኣብ ሰማይ ኣብ ኣርያም ዕልልታ ተሰምዐ `,
    eng: `
1.Mealti mdhaney hgi kbarikha
Sile zikhonkalei nay hiywotey tbeka
Smka tsewaekuha belkani
Mgllatsu siine abiyu koynuni

Tede: Nay bmhrayka nay bmmmrskka
Nay bmfmrakha n mfraskka
Nay bmfqarka nkegelsto zeyykel
Kab aemroyi nlaley goytay

2.Kab mot nab hiywot zesegagarkani
Ab leli seytan wun awet zhayabkani
Zmelselka yalegn nzeladlkani
Nab zegerm brrhan zemtsahkaani

3.Kab zelalem sqay Iyesus zedhankani
Nab hager hiyawan nay zemtseakani
Lbey bmsgana afey bialilta
Kizmmrelka ye ata lewah goyta

4.Hade kilte ilka zeykutsr
Ezun etin ilka zeynnger
Nzegberkaley wualetat
Kisab zelahku wun kemmesgineka

5.Afey bmsgana brrhan tewola
Eti nquk tsaali fetsmu tedahle
Bchifra melaekti Iyesusey temlela
Ab semay ab aryam alilta tesemaa`
},
    song32: {
    title: { tig: "ንገሰለይ", eng: "Ngeseley" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ኣሎኒ ዝብሎ ዝምክሓሉ 
 ኣብ ሕይወተይ ዝንየተሉ 
 ብመንጽር ኩሉ ሰናይ ግብርኻ 
 ኣይበቅዕን’ዩ ፍጹም ንዓኻ ውሒዱካ 
    ተደ፦ንገሰለይ ክበረለይ 
          ልዕል በለለይ ተባረኸለይ 
          ንዓይ ፍሉይ’ዩ ሁሁ… ዝገበርካለይ /2/ 
2.እንተበልኩ ልዕል በለለይ 
  እንተበልኩ ንገሰለይ 
  ኩሉ እንድዩ ዝብሎ ዘስተንትኖ 
  እደሊ’ለኹ ልዕሊኡ እንተሎ ሰብ ዘይበሎ 
        3.ክግዝኣካ’የ ብምሉእ ልበይ 
          ብኣኻ እድነቕ ሃመይ ቀልበይ 
          ኩሉ ሓሳበይ ብኣኻ ይዕዘም 
          ምሳኻ’ለኹ ንዘልኣለም(2) 
               እንተበልኩ ክበረለይ 
               እንተበልኩ ተባረኸለይ 
               ምስቲ ዘይድፈር ዓቢ ግርማኻ 
               ከመይ’ሉ ይዳረግ ጎይታይ ንዓኻ  
               ምስቲ ዝናኻ 
4.ግና ንሕጂ ኣብ ልበይ ዘሎ 
  ተቐበለኒ ልበይ ዝኽእሎ 
  ክሳብ ዝበቅዕ ንምስጋናኻ 
  ልዕል በለለይ ንገሰለይ ተባረኽ ኢኻ `,
    eng: `1.Aloni zblolo zmkhalu
Ab hiywetey znyetelu
Bmnser kulu senay gbrkha
Aybekinu ftsum nAka whiduka

Tedfo: Ngeseley kberley
Lel beleley tebarekheley
Naay fluyyu huhu zgberkaley (2)

2.Entbelku lel beleley
Entbelku ngeseley
Kulu endiyu zblolo zestenteno
Edelilekhu lelilu entelo seb zeybelo

3.Kegzaaka ye bmulu lbey
BmAka edneq hamay kelbey
Kulu hasabey bmAka yizem
MsAka lekhu nzelalem (2)

Entbelku kberley
Entbelku tebarekheley
Msti zeydfer abi grmAka
Kemeylu yidareg goytay nAka
Msti znAka

4.Gna nhji ab lbey zelo
Teqebelni lbey zkelo
Kisab zbeke nmsganAka
Lel beleley ngeseley tebarekhe ika`
},
    song33: {
    title: { tig: "ኣምላኽ ሰማይ", eng: "Amlakh Semay" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `1.ኣሻሕ ኣእላፍ መልኣኽትኻ 
  ይሰግዱ’ለዉ ኣብ እግርኻ 
  ስልጣንን ሓይልን ናትካ’ዩ 
  ግርማን ክብርን እናበሉ 
  ንሕና’ውን ኣብዛ ምድሪ ስለዘይብልካ መሳሊ 
  ነምልኸካ ተቓኒና ንባርኸካ ደው ኢልና 
     ተደ፦ኣምላኽ ሰማይ ንጉስ ኩላ ምድሪ(2) 
             ስምካ ይባረኽ ኣብ ሰማይ ኣብ ምድሪ(2) /2/ 
2.ግዝኣትካ ወሰን የብሉን 
   ዕቤትካ ደረት የብሉን 
   እታ መንግስትኻስ ሕያው‘ያ 
   ዘይትነቓነቕ ውን’ያ 
   ኣብ ሰማይ ኮነ ኣብ ምድሪ የለን ቦታኻ ዝትክኦ 
   ዙፋንካ ንዘልኣለም ጸኒዑ ይነብር ኣሎ 
         3.ኣታ ንፈትወካ ፍትውና 
            ንባርኸካ ኣሎና 
            ስምካ ምምስጋን ክብርና  
            ንሱ’ዩ ዓቢ ሓጎስና 
            ስለዚ ስቕ ኣይንብልን ምምስጋን ኣይነቋርጽን 
            ከቢርካ ክንርኢ ከሎና ብኡ ትዓግብ ሕይወትና `,
    eng: `
1.Ashah ealf melAketka
Yisegduelu ab egrekha
Sltanan hayln natka yu
Grman kbrn enabelu
Nhnawn abza mdri slezyblka mesali
Nemlekha teqenina nbarekheka dew elna

Tedfo: Amlakh semay ngus kula mdri (2)
Smka ybarekh ab semay ab mdri (2) (2)

2.GzAatka wesn yeblun
Ebetka deret yeblun
Eta mengstkas hyaw ya
Zeyteneqaneq wunya
Ab semay kona ab mdri yelen botakha ztenko
Zufanka nzelalem tseniu ynber alo

3.Ata nfetweka ftiwna
Nbarekheka alona
Smka mmsgan kbrna
Nsuyu abi hgosna
Slezi sq aynbln mmsgan aynkwarcn
Kebirka knrei kelona bu tAagb hiywetna`
},
    song34: {
    title: { tig: "ከማኻስ የለን", eng: "Kemakhas yelen" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "26-10-2025",
    cover: "images/album1.jpg",
    tig: `
1.ኣብቲ ናይ ምድረበዳ ናይ ጽምዋ ጉዕዞይ 
   ንበይነይ ክሽገር ረዳኢ ዘይብለይ  
   ኣብዚ ከምዚ እዋን ኣለኻ ጎይታ ኢየሱስ ኣሎኻ 
   ባዕልኻ ትረድኣኒ ተድምቖ ንብርሃነይ 
   ካብ ሽግረይ ኣውጺእካ ተህድኦ ንልበይ 
   ከማኻስ የለን’ዩ ከማኻ ጎይታ ኢየሱስ ከማኻ 
        ተደ፦ከምዚ ናትካ ጌሩ ንልበይ ዘዕርፍ 
                 ውሽጠይ ተረዲኡ ንሕቶይ ዝምልስ 
                 ከቶ ኣይርከብን ዘህድኣ ንነብሰይ  
                 ስለቲ ሓልዮትካ ተመስገን ኢየሱሰይ 
2.ጸላእተይ ክትንስኡ ብሓይሊ ከጥፍኡኒ 
   ኣብ ዙርያይ እናጓዘሙ ብዙሕ ክኸሱኒ  
   ኣብዚ ከምዚ እዋን ኣለኻ ጎይታ ኢየሱስ ኣሎኻ 
   ጠበቓ ትኾነለይ ተሕፍሮም ንጸላእተይ 
   ካብ ሃጽፊ ናይ ዲያብሎስ ትኾነኒ ዕርደይ  
   ከማኻስ የለን’ዩ ከማኻ ጎይታ ኢየሱስ ከማኻ 
             3.ኩነታት እናረኤኹ ክወድቀኒ ፍርሓት  
                ክጥሕል’ውን ክጅምር ናብቲ ባሕሪ ሓጢኣት 
                ኣብዚ ከምዚ እዋን ኣለኻ ጎይታ ኢየሱስ ኣሎኻ 
                ኣእዳውካ ትሰደለይ መንዚዕካ ተውጸኣኒ 
                ኣብ ልዕሊ ጸላእተይ’ውን ዓወት ትህበኒ 
                ከማኻስ የለን’ዩ ከማኻ ጎይታ ኢየሱስ ከማኻ 
4.ድኻመይ እናረኣየ ኩሉ ክርሕቀኒ  
   ሓደ’ኳ ክስእን ተስፋ ዝህበኒ 
   ኣብዚ ከምዚ እዋን ኣለኻ ጎይታ ኢየሱስ ኣሎኻ 
    
 
 
ጎደለይ ንምምላእ ባዕልኻ ትቐርበኒ                                  
ኣብራኸይ ወለል ክብላ’ውን ሓይሊ ትኾነኒ 
ከማኻስ የለን’ዩ ከማኻ ጎይታ ኢየሱስ ከማኻ `,
    eng: `

Abti nay mdrebda nay tsimwa guuzoey
Nbeyney kshger redae zeybley
Abzi kemzi ewan alekha goyta Iyesus alokha
Baelka tredani tedmqo nbrhaney
Kab shgirey awtsiEka tehdo nlbeiy
Kemakhas yelen yu kemakha goyta Iyesus kemakha
Tedfo: Kemzi natka geru nlbeiy zeErf
Weshtey terediu nhetoy zmelis
Keto ayrekbn zehdea nnbsey
Sleti halyotka temesgen Iyesusey

TslaEtey ktnsEu bhayli ktfUni
Ab zuryay enaguazemu bzh kkesuni
Abzi kemzi ewan alekha goyta Iyesus alokha
Tebeka tkwnelay tehfrom ntslaEtey
Kab hatsfi nay diablos tkwneni Erdey
Kemakhas yelen yu kemakha goyta Iyesus kemakha

Kunetat enareEku kwedkeni frhat
KtHlhun kjmr nabti bahri hatiat
Abzi kemzi ewan alekha goyta Iyesus alokha
AEdawka tsedeley menziEka tewtseAni
Ab lEli tslaEteywn awet thbeni
Kemakhas yelen yu kemakha goyta Iyesus kemakha

Dkhamey enarayE kulu krHkeni
Hadekwa ksEn tesfa zhbheni
Abzi kemzi ewan alekha goyta Iyesus alokha
Godeley nmemlaE baelka tkErbeni
Abrakhey welal kblawn hayli tkwneni
Kemakhas yelen yu kemakha goyta Iyesus kemakha`
},
    song35: {
    title: { tig: "ኣይተለወጥካንን", eng: "Aytelewetkanin" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: ` 
1.ዎ ብሩኽ ገንሸል ኢየሱስ በይንኻ 
 ኣይተለወጥካንን ንዓይ ንባርያኻ 
 እንተደኸምኩ እንተበርታዕኩ 
 ኣይተለወጥካንን እፈልጥ ኣለኹ 
        ተደ፦ኣይተለወጥካንን(2) ንዓይ ኢየሱስ 
               ኣይተለወጥካንን(3) ጎይታይ ኢየሱስ 
2.ዎ ዓቢ ኣምላኽ ኢየሱስ በይንኻ 
   ኣይተለወጥካንን ንዓይ ንባርያኻ 
   እንተወደቕኩ እንተተንሳእኩ 
   ከምዘይትገድፈኒ እፈልጥ ኣለኹ 
            3.ዎ ፈቃር መድሕን ኢየሱስ ንስኻ 
               ኣይተለወጥካንን ንዓይ ንውሉድካ 
               ኣነስ ይገርመኒ ንዓይ ብምፍቃርካ  
               ክሓስቦ ከለኹ ኩሉ ስራሕ ናትካ 
4.ናይ ጥንቲ ኣምላኽ ጎይታይ ንስኻ 
   ኣይተለወጥካንን ንዓይ ንባርያኻ 
   እንተተቐመጥኩ እንተተላዓልኩ 
   ኣይተለወጥካንን እፈልጥ ኣሎኹ `,
    eng: `

Wo bruk genshel Iyesus beyenka
Aytelewetkanin naAy nbarayka
Entedekhmku entebertaEku
Aytelewetkanin efelt aleku
Tedfo: Aytelewetkanin(2) naAy Iyesus
Aytelewetkanin(3) goytay Iyesus

Wo Abi Amlakh Iyesus beyenka
Aytelewetkanin naAy nbarayka
Entawedekku entetensaEku
Kemzeytgedfeni efelt aleku

Wo fekar medhn Iyesus nseka
Aytelewetkanin naAy nwuludka
Anes ygermeni naAy bmfkarika
Khasbo kleku klu srah natka

Nay tniti Amlakh goytay nseka
Aytelewetkanin naAy nbarayka
Entetqemetku entetlaAlku
Aytelewetkanin efelt aloku`
},
    song36: {
    title: { tig: "ተስፋ ሕዙናት", eng: "Tesfa Hzunat" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    cover: "images/album1.jpg",
    tig: `
1.ቀደም ኣትሒዙ ዝመረጸኪ 
 ንድሕነት ኣዳም ዝተሓረኺ 
 ምላሽኪ ኣድመጸ ከም ዝበልካኒ ይኹነለይ 
 ኣነ’ውን ከምኡ ከም ናትኪ መሪጸ ኣለኹ 
 ኣሰር ኣሰርኪ ክስዕብ ደስ ኢሉኒ ኣሎ 
 ስለዚ ምላሸይ እህብ ከም ዝበልካኒ ይኹነለይ 
      ተደ፦ኦ ማርያም ኣዴና  
            ኣማላድነትኪ ንኣምን ኣሎና(2) 
            ስለ ልዑል ትሕትናኺ 
            ዝኸበረ ብጽዕነትኪ 
            ነፍቅረኪ(2) ንውድሰኪ(2) 
2.ተስፋ ሕዙናት መጸናንዒት 
  መድሕን ወላዲት መብርሂት ጸልማት 
  ተስፋ ትህቢ ተበራትዒ ንድኹም ፍጥረት 
  ሕያዋን ኢና ብደሙ ዝነጻሕና 
  ብዝሒ ምሕጣእና ግን ሰፈሩ ርሒቑና 
  ስለዚ ኢና ንልምነኪ መደያይቦ ክትኮንና 
         3.እቶም መዕዘምዘምቲ ርእሶም ከኽብሩ 
           ትዕቢት መሊኦም ክከራኸሩ 
           ብኸንቱ ፍልጠት ካብ ትሕትናስ ልቦም ዘትርሩ 
           ንሕና ደቅኺ ግን ንቕጽል ጉዕዞ ምሳኺ 
           ልዕሊ ክብሪ ሰብ ክብሪ ስለዘሎኪ 
           ስለዚ ንዝምረልኪ ንዘልኣለም ንምስክረልኪ `,
    eng: `
Kedem atihizu zmeretseki
Ndhnet Adam ztehareki
Mlashki admets kem zbelkani ykhunelay
Ane wun kemu kem natki meritse aleku
Aser aserki kseEb des iluni alo
Slezi mlashay ehhb kem zbelkani ykhunelay
Tedfo: O Maryam Adena
Amaladnetki nAmin alona(2)
Sle leul tHhtnaki
Zkebere btsiEnetki
Nefkreki(2) nwudseki(2)

Tesfa Hzunat metsnaNet
Medhn wladit mbrhit tslmat
Tesfa tHhbi tberati ndkhum ftrt
Hyawan ina bdemu znetshna
BzHi mHtAena gn seferu rHiqna
Slezi ina nlmneki mdeyaybo ktkonna
3. Etom meEzemzemt rEesom kkhbru
Tebiit mliOm kkraKheru
Bkhntu fltet kab tHhtnas lbom zetreru
Nhna dekki gn nktsl guEzo msaKi
Leli kbri seb kbri sle zeloKi
Slezi nzmrleki nzlalem nmskreleki`
},
    song37: {
    title: { tig: "ካብ ጸጋኻ ኢዩ ኮይኑልና", eng: "Kab TsegaKha Iyuu Koynulna" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ላዕልን ታሕትን ከርተት ዝበልናዮ ኣኺሉ 
 ከም ብዋልታ ብጸጋ ሕይወትና ተኸሊሉ 
   ካብቲ ኣባና ዘሎ ጸጋ ኣምላኽ ኮይኑልና 
   ብሓርነት ክንኣቱ ክንወጽእ’ውን ክኢልና(2) 
     ተደ፦ጸጋኻን ምሕረትካን እንተዘይበዝሓልና 
           ኣብዚ ከመይ ኢልና ደው ምበልና 
           ብሕይወት ምንባርና ምግልጋልና 
           ምዝማርና ኢየሱስ ምምስጋንና 
           ካብ ጸጋኻ እዩ ኮይኑልና 
           መዓስ ካብ ክእለት ሓይልና 
              ሓደ ልቢ ሓደ ሓሳብ ሙዃንና 
              ብሓጎስ ምእታውና ምውጻእና 
              ምንባርና ድምጽኻ ምስማዕና 
              ኩሉ ካባኻ እምበር መዓስ ካባና 
              ኢየሱስ ጸጋኻ እንተዘይበዝሓልና 
              እወ ንሰዶምን ጎመራን ምመሰልና(2) 
2.ዎ እግዚ/ር ኩራኻ ንቕጽበት ዓይኒ እዩ 
  ጸጋኻ ግን ምሉእ ዕደመ ይጸንሕ እዩ 
    ምሕረትካን ሳህልኻን ይስዕባና ኣለዋ 
    ከቶ ኣይተፈለየናን ናይ ጸጋኻ ሓለዋ(2) 
        3.ንጉስ ብሰራዊቱ ዝድሕን እዩ ዝመስሎ 
          እቲ ጅግና ብሓይሉ ክናገፍ እየ ኢሉ ኣሎ 
            ኣነ ግን ብጸጋኻ ንኹሉ ሰጊረዮ 
            ንኹሉ ሓይሊ ሓጢኣት ብእግረይ ረጊጸዮ(2) `,
    eng: `
LaElin taHtin kertet zbelnayo akhilu
Kem bwalta btsega Hiywotna tekhelilu
Kabti abana zelo tsega Amlak koynulna
Bharnet knAtu knwetseE wun kIlna(2)
Tedfo: TsegaKhan mHhrtkhan entzeybezhhalna
Abzi kemey ilna dew mbelna
Bhiwot mnbarna mnglgalna
Mzmarnna Iyyesus mmmsganna
Kab tsegakha iyu koynulna
MeAs kab kElt Haylna
Hade lbi hade Hhasab muaAnna
Bhagos mEtauna mwtsaEna
Mnbarna dmtskha msmaEna
Kulu kabakha ember meAs kabana
Iyyesus tsegakha entzeybezhhalna
Ewo nsedomn gomeran mmselna(2)

Wo EgziEr kurakha nqtsbet Ayini iyu
TsegaKha gn mlue Edeme ytsenH iyu
mHhrtkhan saHlKhan ysyEbana alewa
Keto aytefeleyenan nay tsegakha Halewa(2)
3. Ngus bsrawitu zdHn iyu zmeslo
Eti jgna bhaylu knagef iye ilu alo
Ane gn btsegakha nkhulu sgireyo
Nkhulu Hayli HaTiAt bEgray regitseyo(2)`
},
    song38: {
    title: { tig: "ክዝምረሉ’የ", eng: "Kizmerelu ye" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ኣብ ግዜ ንእስነተይ ንሱ ካብ ኣፍቀረኒ 
 ምስ ኩሉ ድኻመይ ንዓይ ተቐቢሉኒ 
 ጎይታየ እደሊ’ሎ ኣብ ዘመን ንእስነተይ 
 ንሱ ጥራይ ክሕዛ ነዛ ዕሸል ሕይወተይ 
      ደጊምሲ ኣብቂዑ’ዩ እዋን ቁልዕነተይ 
      ኢየሱስ ካብ ደለያ ነዛ ድኽምቲ ነብሰይ 
      ደጊምሲ ሕጂ እንታይ ከይሕዘኒ 
      ንሱ’ኳ ፈትዩ ፍቕሩ ካብ ኣርኣየኒ 
           ተደ፦ክዝምረሉ’የ ክዝምረሉ(2) 
                 ነዚ ንጉስ ክብሪ ክዝምረሉ (ክቓንየሉ)(4) 
                 ክቓንየሉ’የ ክቓንየሉ(2) 
                 ነዚ ንጉስ ክብሪ ክቓንየሉ (ክዝምረሉ)(4) 
2.ምስ ዓለም ስጋ ሰይጣን ፍጹም ተባቲኽና 
  ክፉእ መዓልትታት ከይበጽሐ ኣባና 
  እዚ ኩሉ ከይመጸ ኣብ ሎሚ እንከለና 
  ንእስነት ሓሊፉ ዘብቅዓሉ ጉብዝናና 
      ንኢየሱስ ነኽብር ትእዛዙ ኣብ ልብና 
      ኣምላኽ ይሕሸና ምስኡ ከምብረና 
      ንሱ ጥራይ ከቢሩ ክንርኢ ኣብ ሕይወትና 
      ከምታ ፍትሕቲ ዒሉ ክብረት ክህበና 
3.ናይ ፍቕርኻ መልሰይ ከስምዕ ምስጋናይ 
  ክርስቶስ ካብ ፈተወ ከድሕነኒ ንዓይ 
  ክዘልል’የ ክዕልል ብዘሎኒ ዓቕመይ 
  እንታይ’ዩ ዝዓግተኒ ካባኻ ዝፈልየኒ `,
    eng: `
Ab gize neesnetey nesu kab afkereni
Mis kulu dikhamay neay tekebiluni
Goytay e’deli lo ab zemen neesnetey
Nesu tiray kihza neza eshel heywotey
Degimsi abqiu yu ewan quliinetey
Iyesus kab delaya neza dikhmiti nebsay
Degimsi hgigi entay keyhezeni
Nesukwa fetyu fikru kab arayeni
Teda: Kizmerelu ye kizmerelu (2)
Nezi ngus kibri kizmerelu (kqanielu) (4)
Kqanielu ye kqanielu (2)
Nezi ngus kibri kqanielu (kizmerelu) (4)

Mis alem siga seytan fitsum tebatikhna
Kfu emalttat keyibts’ha abana
Ezi kulu keymetse ab lomi enkelena
Neesnet halifu zebqalu gubzhnana
NeIyesus nekhbir tihzazu ab libna
Amlak yihshena misu kembrna
Nesu tiray kebiru kinrei ab heywotna
Kemta ftihti ilu kibret kihbena

Nay fikrka melesey kesmi misgana
Kirstos kab fetew kedhheni neay
Kzelil ye kihlil bizeloni aqmey
Entay yu zyagteni kaba kha zfel yeny`
},
    song39: {
    title: { tig: "ውሽጣዊ ሰላም", eng: "Wushtawi Selam" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ኣምላኽ የለን ክብል ብልበይ ክርበሽ 
 ሓጢኣት ከቢዱኒ ንድሕሪት ክጉተት(2) 
   ንስኻ ግን ኣምላኸይ ረዳኢ ድኹማት 
   ኣድሕነኒ ካብቲ… ቲ’ናይ መንፈስ ጭንቀት(2) 
      ተደ፦ውሽጣዊ ሰላም ናይ መንፈስ ዕረፍቲ 
            ዘይጠፍእ ብርሃን ምሳኻ’ዩ ዘሎ 
            ኦ ኣምላኽ ሰማያት ምሳኻ’ዩ ዘሎ 
            ኦ ንጉስ ነገስታት 
                ሃሌ…… ሉያ(4) 
2.መንፈሰይ ክጭነቕ ሰላም’ውን ስኢነ 
  ላዕልን ታሕትን ክብል ዕረፍቲ ስኢነ(2) 
    ኣይረኸብኩን ኢየሱስ ከማኻ ዝበለ 
    ፈቲሕካዮ ኢኻ… ጸገመይ ዘበለ(2) 
        3.ንስኻ ካብ ኮንካ ቲ’እሙን መድሕነይ 
          ኢየሱሰይ ካብ ኮንካ ንዓይ ረድኤተይ(2) 
            ንዓይሲ ከማኻ መን ኣሎኒ 
            ሎምስ ክስዕበካ… ምሳኻ ይሕሸኒ(2) 
4.ዘሕለፍክዎ ሕማቕ ብጽቡቕ ክሒሰ 
  በቲ ሰና…ይ ቆፎይ መሊአ(2) 
    ብሰመያዊ ሃብቲ መንገደይ ኣጣጢሐ 
    ሰመያዊ ሰላም… ብሓጎስ ክጽበ(2)`,
    eng: `
Amlak yelen kib’l bilbey kirbesh
Hatiat kebiduni nidrit kgutet (2)
Niska gn amlakhay reda’i dkhumat
Adhheni kabti nay menfes chin’qet (2)
Teda: Wushtawi selam nay menfes erfti
Zeytef’e birhan misakha yu zelo
O amlakh semayat misakha yu zelo
O ngus negesitat
Hale... luya (4)

Menfesey kchneq selam wun s’ine
La’lin tahten kib’l erefti s’ine (2)
Ayrekhebkun Iyesus kemakha zbele
Fetihkayo ikha... tsegamey zbele (2)
3. Niska kab konkha ti emun medhheney
Iyesusey kab konkha neay red’etey (2)
Neaysi kemakha men aloni
Loms ks’beka... misakha yihsheni (2)

Zehlefkwo hmaq bitsbuq khise
Beti sena... yi qofoy melia (2)
Bisemeyawi habti mengedey atatiha
Semeyawi selam... bihagos kts’be (2)`
},
    song40: {
    title: { tig: "ኤልሻዳይ ሙዃንካ", eng: "Elshadai Muanka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ብላግጺ ጰኒና መንፈሰይ ተሰይሩ  
   መኻን  ብሙዃነይ ቲ’ናብራይ መሪሩ  
   ኣብቲ ክቡር ቤትካ ዝለመንክዎ ጸሎት 
   ፍረ ኣውሂቡኒ ብዘገርም ቅጽበት 
       ተደ፦ብሓዘን ብጓሂ ዝነበረ ንብዓተይ 
                 ሕጂ ካብ ብዝሒ ሓጎስ ይፈስስ ካብ ዓይነይ 
                 መን ሙዃንካ ርእየ ተደነቐ ልበይ 
                 ኤልሻዳይ ሙዃንካ ጥዒማቶ ነብሰይ 
2.ይሓዊ ’ዶ’ኾን ኢለ ገንዘበይ ወዳእኩ 
   ኣሎ ናብ ዝተባህለ ናብ ኩሉ እናኸድኩ 
   ደመይ እናፈሰሰ ሓይልኻ ኣሚነ 
   ክዳንካ ተንኪፈስ ካብ ቁስለይ ድሒነ 
              3.ኣብ ልዕሊ ጸበባይ ሽግር ገጢሙኒ 
                 መበለት ብሙዃነይ ሓደ ወደይ ሞይቱኒ 
                 ሓዘነይ ፈሊጥካ ሬሳይ ኣተንሳእካ 
                 ንሕዝንቲ ነብሰይ ብሓጎስ ፈንጫሕካ 
4.’ቲ ትፈትዎ ሓወይ ሓሚሙ ኢለ ጸዋዕኩኻ 
   ክሳዕ ዝመውት’ውን ተሃንጠኹ ምምጻእካ 
   ሞይቱ ምስ ጨነወ ተስፋ ምስ ቆረጽኩ 
   ደበኽ ኢልካ ደኣ ተኣምራትካ ረኤኹ `,
    eng: `
Bilagtsi penina menfesey teseyru
Mekhan bimu’aney ti nabray meriru
Abti kibur betkha zlemenkwo tselot
Fre awhibuni bizgerm kts’bet
Teda: Bihazen b’gwahi znebere nbe’atay
Hiji kab bizhi hagos yifeses kab ayney
Men muanka r’eye tedeneqe libey
Elshadai muanka t’i’imato nebsey

Yehawi do khon ile genzebey weda’ku
Alo nab ztebahle nabkulu enakhedu
Demey enafesese haylkha amine
Kdanka tenkifes kab kusley dhine
3. Ab l’eli tsebebay shigr getimuni
Mebelet bimu’aney hade wedey moytuni
Hazeney felitka resay atensa’ka
Nhiznti nebsey bihagos fenchahka

Ti tfet’wo hawey hamimu ile tswa’ekukha
Ksa’e zmewt wun tehanthku memtsa’ekha
Moytu mis chenewo tesfa mis qoretsku
Debekh ilka dea te’amratkha re’ekhu`
},
    song41: {
    title: { tig: "ቤትካ ሰላመይ እዩ", eng: "Betkha Selamey Iyu" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: `
1.ዓቕለይ ጸቢቡኒ ካብ ዓቐን ክሽገር 
  ነብሰይ ኣዋዲቐ ኣትየ ኣብ መዋጥር 
  ንስኻ ግን ኢየሱስ ሰዲድካለይ ኢድካ 
  ስሒብካ ኣውጺእካኒ ውሉደይ እንዳበልካ(2) 
      ተደ፦ቤትካ ሰላመይ’ዩ 
            ቤትካስ ዕረፍተይ’ዩ  
               ቤትካ  ኩሉ’ዩ 
               ስለዚ ጎይታይ ከምልኸካ  
               ወሲነ(2) ክነብር ምሳኻ 
               ንዘልኣለም ኢየሱስ ኣብ ሕቕፎኻ 
2.ተግባረይ ከፊኡ መርገም በዚሑኒ 
  ሴፎም እንዳመዘዙ ሰባት ከጥፍኡኒ 
  ዘርሞ ዘርሞ ኮይነ ከይርሕቕ ካብ ቤትካ 
  ፈቃር ኢየሱሰይ ምጻእ ሕደራኻ(2) 
          3.ብባሕሪ ተኸድኩ ትጥሕል መርከበይ 
           ብመሬት ተኸድኩ ይጠማመር እግረይ 
           ሓንሳብ ንሓዋሩ መሪጸ ንቤትካ 
           ብሓጎስ ክነብር ምስቶም ቅዱሳንካ(2) 
4.ሎምስ ባህ ኢሉኒ ውሉድካ ሙዃነይ 
  እቲ ዘድልየኒ ኩሉ መሊኡለይ 
  ንቤትካ መሪጸ ሕቕፎካ ኢየሱስይ 
  ልበይ ተሓጒሱ ኣሜን ኣሰይ ኣሰይ(2) `,
    eng: `
Aqley tsebibu’ni kab aqen kshger
Nebsey awadiqe atye ab mewatr
Nska gn Iyesus sedidkhaley idka
Sehibka awtsi’ekani wludey endabelka (2)
Teda: Betkha selamey iyu
Betkhas yreftetey iyu
Betkha kulu iyu
Silezi goytay kemlekheka
Wesine (2) kneber misakha
Nzelalem Iyesus ab hqfokha

Tegbarey kefiu mergem bezihuni
Sefom endamezezu sebat ketf’uni
Zeremo zeremo koyne keyrhq kab betkha
Fekar Iyesusey mtsa’e hderakha (2)
3. Bibahri tekheduku t’tihl merkabey
Bimeret tekheduku ytemamer egrey
Hansab n’hawaru meritse nbetkha
Bihagos kneber mistom qdusanka (2)

Loms bah iluni wludka mu’aney
Eti zedliyeni kulu meli’uley
Nbetkha meritse hqfokha Iyesusey
Libey tehagusu amen asey asey (2)`
},
    song42: {
    title: { tig: "ብኽብሪ ብግርማ ተገለጽ", eng: "Bikhibri Bigirma Tegelits Amlakhey" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ኣዒንትና ንዓኻ ክርእያ 
 ኣእዛና ድምጽኻ ክሰ…ምዓ 
 ሰፈር ልብስኻ ነዚ ቤት ክመልኦ 
 ንውሽጥና ብሓጎስ ከተሰራስሮ 
 ብኽብሪ ተገለጽ ኣምላኸይ 
       ተደ፦ብኽብሪ ብግርማ ተገለጽ ኣምላኸይ /4/ 
2.ሕሙማት ኩሎም እንክፍወሱ 
  ካብ ማእሰርቶም ድማ ክፍ…ትሑ 
  ስለቲ ትገብረሎም ሰናይ  
  ንዓኻ ክብሪ ክህቡ… 
  ብኽብሪ ተገለጽ ኣምላኸይ 
         3.ንጭኑቓት ፍትሒ ከተውጻሎም 
           ንሕዙናት ከኣ ከተጸ…ናንዕ 
           ንስኑፋት ሓይሊ ክትህቦም 
           ተስፋ ንዝቖረጹ ተስፍኦም ክትሕድስ 
           ብኽብሪ ተገለጽ ኣምላኸይ 
4.ንዓኻ ዘይፈለጣ ነፍሳት 
  ብኣኻ ኣሚነን ክድ…ሕና 
  ናይ ዘልኣለም መንግስትኻ ክወርሳ 
  ንዘልኣለም ኣብ ቤትካ ክነብራ… 
  ብኽብሪ ተገለጽ ኣምላኸይ `,
    eng: `
Ainta na nka kriiya
Aezana dmska ksemy’a
Sefer libs’ka nezi bet kmelo
Nweshitna bihagos kteserasro
Bikhibri tegelits amlakhey
Teda Bikhibri Bigirma Tegelits Amlakhey 4

Hmumat kulom enkfwesu
Kab maesretom dma kfthhu
Sileti tgebrlom senay
Na nka kbri khbbu
Bikhibri tegelits amlakhey
3. Nchinuqat fthi ktwtsalom
Nhzunat kea kttsenan’
Nsnufat hayli kthhbom
Tesfa nzyqoretsu tesfom kthhds
Bikhibri tegelits amlakhey

Na nka zeyfeleta nefsat
Bia nka aminen kdhhna
Nay zelaalem mengstkha kwersa
Nzelaalem ab betkha knebra
Bikhibri tegelits amlakhey`
},
    song43: {
    title: { tig: "ብለይቲ እናነቓሕኩ", eng: "Bileyti Enaneqahku" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ፍቕርኻ ካብ መዓር ይጥዕም  
   ሰናይካ ጎይታ ኣይውዳእን’ዩ 
   መን ኮይነ ብኣኻ ክፍለጥ 
   ብፍቕርኻ ነፍሰይ ክትባረኽ 
      ተደ፦ብለይቲ እናነቓሕኩ 
               ፍቕርኻ ክሓስብ ከለኹ 
               ከም ብስብሕን በንጉዕን ይጸግብ   
               ኣምላኸይ ነብሰይ ትውድሰካ’ላ 
2.ብዙሕ’ዩ ኣዝዩ ብዙሕ’ዩ 
   ጎይታየ ንነፍሰይ ዝገበርካላ 
   ሓደ ክልተ ኢለ ዘይጽብጽቦ 
   ፍቕርኻስ ንዓይ ዓቢ’ዩ ኣቦ 
           3.ፍቕርኻ ምኡዝ ሽቶ እዩ 
              ስምካ’ውን ዝፈስስ ቅብኢ’ዩ 
              ድምጽኻ መስበርተይ ይጽግን 
              ፍቕርኻ ኣዝዩ ፍሉይ’ዩ 
4.ኣብ ኣኼባ ንዓኻ ክዝምር 
   ስለቲ ንነፍሰይ ዝገበርካላ 
   ብመዝሙረይ ፍቕርኻ ክገልጽ 
   ምስጋናኻ ወትሩ ክዝምር’የ 
          5.ሰባኻይ ሰቢኹ ኣይገልጾን  
             ዘማራይ ዘሚሩ ኣይውድኦን 
             ንፍቕርኻ ብቑዕ መግለጺ የልቦን 
             ዓሚቕ’ዩ ሓለፋ ኣእምሮይ `,
    eng: `
Fqrkha kab mear ytiem
Senayka goyta aywdaen’yu
Men koyne biaka kflth
Bifqrkha nefseya ktbarkh
Teda Bileyti Enaneqahku
Fqrkha khasb klehku
Kme bisbhn bnguw ynstgb
Amlakhey nebseya twdska’la

Bzuh’yu azyu bzuh’yu
Goytaye nnesfseya zgbrkala
Hade klta ile zeytsbtsbo
Fqrkhas n’ayi abiy’yu abo
3. Fqrkha mhuuz shito iyu
Smka’wn zfses kbi’yu
Dmska mesbertey ytsgn
Fqrkha azyu fluy’yu

Ab akheba n’aka kzmr
Sileti nnesfseya zgbrkala
Bmezmurey fqrkha kglts
Msganakha wtru kzmr’yu
5. Sebakayi sebiku aygltsun
Zemaray zemiru aywdoon
Nfqrkha bqu’ mgltchi ylbwn
Amik’yu hlfa aemroy`
},
    song44: {
    title: { tig: "ማርያም ዝያዳ መጎሳ", eng: "Maryam Ziyada Megosa" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: `
1.ክብረቱ ክምለስ እቲ ሕዙን ኣዳም  
   ንዓኺ ዝተዋህበ ምልክት ኪዳን 
   መድሓኒ  ክትወልዲ ክትዘርእሉ ሕይወት 
   ሓዘኑ ክድበስ ክብረቱ ክምለስ 
      ተደ፦ማርያም ዝያዳ መጎሳ 
               ሰብ ክንሳ ፈጣሪ ጸይራቶ ኣብ ከርሳ 
2.ልባስኪ ድኽነት ስልማት ትሕትና  
   ኣምላኽ ዝመረጻ ፍጽምቲ ንጽሕና  
  ብኹሉ ውህበታት ሸለመኪ ክብሪ 
  ንግስቲ ትሕትና ማርያም ሉል ባሕሪ 
            3.ካብ ኣንስቲ እስራኤል ማርያም ተመሪጻ 
               ንፍቓድ እግዚ/ር ኣብ ልባ ሃኒጻ  
               ማህጸና ንመሲሕ ኢየሱስ ተፈቒዱ 
               ንዓና ክድብስ ካብ ሰማይ ወሪዱ 
4.ካብ ትሕትናኺ ትሕቲ…  
   ካብ ምልኣት ጸጋ ምልእቲ…  
   ፍቓድ እግዚ/ር ብምምላእ …  
   ኣኽሊል ዓወትኪ ዓቲርኪ …  
   ዝያዳ ኩሉ ፍጥረት መጎስ’ውን ረኺብኪ(2) 
               ማርያም(3)  
             ዝያዳ ካብ ኩሎም ፍጥረት ደቂ ኣዳም(2) `,
    eng: `
Kibrtu kmls eti hzun Adam
Naaki ztewahbe mlkt kidan
Medhani ktweldi ktzerlu hywet
Hazenu kdabs kibrtu kmls
Teda: Maryam Ziyada Megosa
Seb knsa fetari tseyrato ab kersa

Lbski dknet silmat thtna
Amlak zmrtsa ftsmt ntsHna
Bkllu wuhbtat shlmeki kibri
Ngsti thtna Maryam lul bahr
3. Kab ansti Israel Maryam tmrtsa
Nfqad Egzi/r ab lb Hnitsa
Mahsena nmshih Iyesus tfqidu
Naana kdabs kab semay weridu

Kab thtnaki thti…
Kab ml’at tsega mlti…
Fqd Egzi/r bmmlae …
Akhlil awetki atirki …
Ziyada klu ftrt mgos’wn rkhibki(2)
Maryam(3)
Ziyada kab klom ftrt dqi Adam(2)`
},
    song45: {
    title: { tig: "ምላሽ ፍቕሪ", eng: "Milash Fiqri" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: ` 
1.ኣይምልሶን ኣእላፍ ምስጋና                    
   ሒደት’ዩ ምስቲ ናትካ        
   ግና ልበይ ፈትዩ ዘንቀዶ                            
   ማለተይ ኮይኑ የቕርቦ 
      ምላሽ ፍቕሪ ከም ጥዑም ሸቶ               
       መቕደስካ ይእቶ(4) ዙፋንካ ይእቶ(4) 
           ተደ፦ተመስገን ተመስገን ተመስገን   
                  ተባረኽ ተባረኽ ተባረኽ             
                  ልዕል በል ልዕል በል ልዕል በል 
2.ኣምላኽ ኢኻ ካብ ዘልኣለም                   
  ዝመስለካ ሓደ እኳ የለን                
  ንዘሎ ጽቡቕ ዝገበርካ                       
  ጎይታ ኢየሱስ በይንኻ ኢኻ                       
     ካብ ልብና እንፈትወካ                              
     እንካ ምስጋና(8) 
               3.ኣኽብሮተይ ይገልጸልካ                        
                  ብመንፈስ እሰግደልካ                                 
               ማለተይ እዩ ዝዝምረልካ                            
               ቃላት ምድሪ ኣይበቕዓካን                     
                      በዚ ኣእምሮ ብኹሉ ኢኻ                      
                      ይቀደስ ስምካ(8) 
4.ክንደይ ጥዑም እዩ ኣብ ቅድሚ ገጽካ                 
  ስለ ኩሉ ብምስጋና                               
  ዝጎተና እንዳ ረገጽና 
  ዝግብኣካ ከየጉደልና                   
      ብመንፈስካ ስለ ዝኾነልና                      
      ነማስወልካ(8) 
               ኣንታ ፍትወይ አመስግነካ(2) 
                 ፍቱው ኢየሱሰይ አመስግነካ(2)                                         
                 ኣንታ ፍትወይ እባርኸካ(2) 
                 ፍቱው ኢየሱሰይ እባርኸካ(2)                     
                 ኣንታ ፍትወይ እውድሰካ(2)                   
                 ፍቱው ኢየሱሰይ እውድሰካ(2)  `,
    eng: `
Aymelson a’laf msgana
Hidet’yu mst nakka
Gna lbey fetiyu zenkedo
Maleteyi koynu yeqirbo
Milash Fiqri kem tqum shto
Meqdeska yi’ito(4) Zufanka yi’ito(4)
Teda: Temesgen Temesgen Temesgen
Tebarek Tebarek Tebarek
L’ili bel L’ili bel L’ili bel

Amlak Ikha kab zelalm
Zmesleka hade ikwa yelen
Nzelo tsbuq zgberka
Goyta Iyesus beynkha Ikha
Kab lbna infetweka
Inka msgana(8)

Akhbroteyi ygeltselka
Bmenfes esgedelka
Maleteyi iyu zzmrelka
Qalat mdri aybeq’aka
Bezi amro bkullu Ikha
Yqdes smka(8)

Kndey tqum iyu ab qdmi gtska
Slu kulu bmsgana
Zgotna enda regtsna
Zgb’aka key gudelna
Bmenfeska slu zikhonelna
Nemaswelka(8)
Anta ftwey amesgenka(2)
Ftuw Iyesusi amesgenka(2)
Anta ftwey ebarheka(2)
Ftuw Iyesusi ebarheka(2)
Anta ftwey iwdseka(2)
Ftuw Iyesusi iwdseka(2)`
},
    song46: {
    title: { tig: "ምስጋና", eng: "Meskana" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    link: "",    
    cover: "images/album1.jpg",
    tig: `
1.ምልኣት ልቢ ጥበብ ዘልበስካና ምስጋና ሆይ ምስጋና 
 ብመንገዲ ሓቂ ዝመራሕካና ምስጋና ሆይ ምስጋና 
 ሕይወት ንኽንለብስ ብርሃን ዝሃብካና ምስጋና ሆይ ምስጋና 
 ኣብ ቅዱስ ቤትካ ፍቕርኻ መገብካና ምስጋና ሆይ ምስጋና 
       ተደ፦ ምስጋና ምስጋና ሆይ ምስጋና(3) 
              ምስጋና ንልዑል ፈጣሪ 
              ምስጋና ከኣሊ ኩሉ 
              ምስጋና ንልዑል መድሕንና 
              ምስጋና ኣብዚ ዘብጻሕካና 
2.ንሕማምና ፈውሲ ዝኾንካና ምስጋና ሆይ ምስጋና 
  ካብ ጸሓይን ንፋስን ዘጽለልካና ምስጋና ሆይ ምስጋና          
  ንድኻምና ዕረፍቲ ዝሃብካና ምስጋና ሆይ ምስጋና 
  ካብ መገሻና ብሰላም ዝመለስካና ምስጋና ሆይ ምስጋና 
    3.ጽኑዓት ልቢ ዝገበርካና ምስጋና ሆይ ምስጋና 
      ንድሕነትና ሕይወት ዝወፈኻልና ምስጋና ሆይ ምስጋና 
      መጓሴኻ ዝገበርካና ምስጋና ሆይ ምስጋና 
      ደቂ ብርሃን ክንከውን ዘብቃዕካና ምስጋና ሆይ ምስጋና `,
    eng: `
Mle’at lbi t’beb zelbeskana Meskana hoy Meskana
BmenGedi haqi zmeraḥkana Meskana hoy Meskana
Hiwet nk’nlebs b’rrhan zhabkana Meskana hoy Meskana
Ab Qdus Betka fqirka megebkana Meskana hoy Meskana
Teda: Meskana Meskana hoy Meskana(3)
Meskana nl’ul Ftrari
Meskana ke’ali kulu
Meskana nl’ul Medhena
Meskana abzi z’bṣahkana

N’hmamna f’wsi z’konkana Meskana hoy Meskana
Kab tsehayn nfasn ztsel’lka Meskana hoy Meskana
N’dhamna ɨrefeti zhabkana Meskana hoy Meskana
Kab megeshana bselam z’mleska Meskana hoy Meskana

Tsnu’at lbi z’gberka Meskana hoy Meskana
Ndhnatna hiwet z’wfḥalka Meskana hoy Meskana
Megwaseka z’gberka Meskana hoy Meskana
Dqi brrhan knk’wn z’bqa’kana Meskana hoy Meskana`
},
    song47: {
    title: { tig: "ተሓጒስና ነመስግኖ", eng: "Tehagwsna Nmesgno" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ክርስትያን ኣይትሕዘን በዛ ናይ’ዛ ዓለም ናብራ 
   ኩሉ ጊዜ ኣሎ ድኻም ሽግር ወይ መከራ 
   ስለዚ ንቕድሚት ኣቕንዓዮ መንገድኻ 
   ናይ ዘልኣለም ጎይታ ኣይተሕዝኖ ሓደራኻ 
      ተደ፦ተሓጒስና ነመስግኖ ነቲ ተስፋ ዝሃበና 
               ክወስደና ኪመጽእ‘ዩ ናብታ ሰማያዊት ቤትና 
2.ድኻም ሓዘን ሽግር እንተኸበበ ኣብ ዙርያኻ 
   ብእምነት ጸሊ’ሞ ረዲኤቱ ክህበካ 
   ጸልማት ተመሲሉ እትርእዮ ነገር ኩሉ 
   ጎይታ ኣይድርብየካን እሙን እዩ በቲ ቃሉ 
           3.ኢየሱስ ኪመጽእ’ዩ ብመላእኽቱ ተዓጂቡ 
              ክወስደና እዩ ናብታ ሰማያዊት ቤቱ 
              ጎይታ ይሕሸና ሰላም ሓጎስ ዚህበና 
              ኣብቲ መጨረሽታ ኣብ መንግስቱ ከእትወና `,
    eng: `
Kristyan ayt’hzen beza nay za alem nabra
Kulu gize alo d’ham shg’r wey mekera
Silezi n’qdmti aQn’ayo menGedka
Nay zelalem Goyta ayt’hzeno had’raka
Teda: Tehagwsna Nmesgno neti tesfa zhabena
Kwesd’na kimets’ey yu nabta semayawit betna

D’ham hazen shg’r ent’kebebe ab zur’yaka
B’emnet tseli’mo redi’etu khbeka
Tselmat temesilu etr’eyo neger kulu
Goyta aydrbyekan emun yu beti kalu

Iyesus kimets’ey yu bmel’aekhtu te’ajibu
Kwesd’na yu nabta semayawit betu
Goyta yhshena selam h’agos zhbena
Abti mechereshta ab mengestu k’itwena`
},
    song48: {
    title: { tig: "እንታይ ይሰኣነካ", eng: "Entay Yseaneka" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.እዚ ዘይከኣል’ዩ ኦሮማይ 
   ዝተባህለ ዘይስገር ዓቢ ቀላይ(2) 
   ኣነ ግና ስጊረዮ ኣምላኸይሲ እንታይ ይጨንቆ  
   ኩሉ (ከቶ) ኣብ ኢዱ ኣብ ኢዱ’ዩ 
   ከቶ (ኩሉ) ኣብ ኢዱ ኣብ ኢዱ’ዩ(2) 
           ተደ፦እንታይ ይሰኣነካ’ድዩ እግዚኣብሔር(4) 
                   ነገር ኩሉ ኣብ ቅድሜኻ ቀሊል(3) /4/ 
2.ካብ ሓዊ ምምንዛዕ ናትካ’ዩ 
   ካብ ሞት ምትራፍ’ውን ናትካ’ዩ(2) 
   ነፍሰይሲ ርእያትካ ገለ’ኳ ከም ዘይጨንቀካ 
   ስለዚ’ያ ተኽብረካ(2)   
   ስለዚ’ውን ተምልኸካ(2) 
                3.ኣብቲ ብርቱዕ ምንዋጽ ዘለዎ 
                   ንኣእምሮይ ሰላምካ ገዚእዎ(2) 
                   ለውሃትካ ይበልጽ ካብ ሕይወት 
                   ድምጽኻ ኣለዎ ዕጋበት 
                   ብሳላኻ ‘ለኹ ብሕይወት(4)  `,
    eng: `
Ezi zeyk’al yu oromay
Ztebahle zeysg’r abi qelay (2)
Ane gna s’gireyo amlakhay si entay ychenqo
Kulu (keto) ab idu ab idu yu
Keto (kulu) ab idu ab idu yu (2)
Teda: Entay yseaneka dyu Egziabher (4)
Neger kulu ab qdmeka qelil (3) /4/

Kab hawi mmnzae natka yu
Kab mot mtr’af wun natka yu (2)
Nefsey si r’eyatka gelekwa kem zeychenqeka
Silezi ya tehkbreka (2)
Silezi wun temlh’eka (2)

Abti brtuh mnwats zleyo
N’aemroy selamka geziwo (2)
Lewhatka ybelts kab hywet
Dmtska alo y’gabet
Bsala’ka lehu bhywet (4)`
},
    song49: {
    title: { tig: "ካብ ምሕረትካ ዝተላዕለ", eng: "Kab Mhretka Ztlaele" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ካብ ምሕረትካ ዝተላዕለ'ዩ ደው ኢለ ዘለኹ 
   ምእታወይ ምውጽአይ ብኣኻ ተሓልዩ 
   ማዕበል ክገላበጥ ክናወጽ ኣኽራናት 
   ቅልጽምካ ተተርኢሰ ኣሎኹ ብህድኣት (ዓመታት) /2/ 
     ተደ፦ምሕረትካ’ ዩ…(4) ፍቕርኻ’ዩ…(4) 
              ኣብዚ ዘብጽሓኒ ካባይ ዝኾነ ነገር የለን(2) 
              ብኣኻ’ዩ ኡሁሁ…  ኩሉ ብኣኻ’ዩ(2) 
              ብኣኻ’ዩ ጸቢቑለይ ብኣኻ ኮይኑለይ(6)  
2.ፍትሐይ ካብ ገጽካ ይወጽእ ብትርኢትካ እጸግብ 
   ፍቕርኻ ተዓንጊለ መከራይ ይርስዕ 
   ዉሉደይ ክትብለኒ ብኣባታዊ ፍቕርኻ 
   ምንባረይ ጸቢቑ ብሙዃነይ ናትካ /2/`,
    eng: `
Kab mhretka ztlaele yu dew ile zlekhu
M’etawey mwts’ay b’akha tehalyu
Maebel kgelabet knawets akhranat
Qltsmka tet’erise alokhu bhd’at (ametat) /2/
Teda: Mhretka yu… (4) Fq’rkha yu… (4)
Abzi zbetshani kabay zkone neger yelen (2)
B’akha yu uhuhu… kulu b’akha yu (2)
B’akha yu tsebiquley b’akha koynuley (6)

Ft’hay kab gtska ywets’e b’tr’itkha ets’egb
Fq’rkha te’angile mk’ray yrs’
Wludey ktbleni b’abatawi fq’rkha
Mnbarey tsebiqu b’mu’ane natka /2/`
},
    song50: {
    title: { tig: "ኦ ናይ ሰላም ኣምላኽ", eng: "O Nay Selam Amlak" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `  
1.እቲ ሰላምካ ንኽንደልዮ 
  ንልብና ኣንቅሓዮ 
  ኦ ጐይታይ ድኹማት ኢና 
  ብመንፈስካ ኣጽንዓና 
       ተደ፦ኦ ናይ ሰላም ኣምላኽ 
               ሰላምካ ኣውርደልና 
               ብብዝሒ ምሕረትካ  
               ደምስስ ኣበሳና 
2.ቀደም ዝነበረ መንፈስ 
   ሕጂ’ውን ኣባና ይፍሰስ 
   ሓቢርና ንልምነካ 
   ስምዓና ጐይታይ ጽን ኢልካ 
           3.ልመናኹም ተሰሚዑ 
              ኣጆኹም ደቀየ ጽንዑ 
              ክትብለና ብሃረርታ 
            ንጽበየካ ኦ ጐይታይ `,
    eng: `
Eti selamka nkhndelyo
Nlbna anqhayo
O goytay dkhumat ina
Bmenfeska atsnaana
Teda: O nay selam Amlak
Selamka awrdelna
Bbzihi mhretkha
Demsis abesana

Qedem znebere menfes
Hijiwn abana yfses
Habirna nlmnkha
Smana goytay tsn ilka

Lmenakhum tesemiu
Ajokhum dekye tsniu
Ktbelna bharerta
Ntsbeyka o goytay`
},
    song51: {
    title: { tig: "ክሳብ ሕጂ", eng: "Kisab hiji" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `  
1.ማዕበል ሞት ኣየፍርሓንን 
   ነድሪ‘ኽራን ኣየስጠመንን 
   ብማእከል ሓዊ ሓሊፈ  
   ሃልሃልታ ኣይሀሞኸንን… 
   ርእያ ዘደንቕ ሳህልኻ  
   ከም ትቐርብ ካብ ትንፋሳ 
  ሳላኻ ደው ኢላ ተመስገን  
   ካብ ሰዓርቲ በሊጻ(4) 
     ተደ፦ክሳብ ሕጂ ዝጾራኒ ብሩኻት ኣእዳውካ 
             ክሳብ ሕጂ ዝተሰከማኒ ብሩኻት ኣእዳውካ 
             ኣየ ቲ’ትዕግስትኻ  
             እዋይ ምሕረት ለውሃትካ 
             እናተደነቕኩ……  
             እባርኸካ ጎይታ አመስግነካ…  
             ንስኻስ ምስጋናይ ኢኻ 
2.ብጓሂ ተኪዘ ይመጽእ  
   ኣብ ትሕቲ እግርኻ ይወድቕ 
   ድንጋጽካ ኣይተኸልከለንን  
   ብትርኢት ገጽካ እጸግብ… 
   ታ’ሃረርታ ትሑታት ትሰምዖ  
   ንልቦም’ውን ተበርትዖ 
   ዉሉደይ ኢልካ ደጊፍካኒ 
   ምጽንናዕካ ከቢብካኒ(4) 
          3.ብልዕልናኻ ረዲኤተይ 
              ኣብ ሰማይ ዝተወጥሕካ 
              ጸበባ ድነ ሞት ሰጊረ  
            ተጸይረ ኣብ ኣእዳውካ… 
              ኣዝዩ ንምእማኑ ዘሸግር 
              ኩነታት ኣሳጊርካያ 
              ታ’ሞት ዝተፈርደት ሕይወተይ  
            እንሆ ትዝምረልካ(8)`,
    eng: `
1.Maebel mot ayferhanen
Nedri khran ayestemenen
Bmaekel hawi halife
Halhalta ayhamokhnen
Reya zedenq sahlkha
Kem tkereb kab tnifasa
Salakha dew ila temesgen
Kab seaty belitsa(4)

Teda: Kisab hiji ztsorani brkhat aedawka
Kisab hiji ztsekemani brkhat aedawka
Aye titigstkha
Eway mhret lewihatkha
Enadenekhku
Ebarikeka goyta amesgineka
Nskhas msganay ika

2.Bgwahi tekize ymetse
Ab thti egrkha yewedq
Dengatskha aytekhelkhelenen
Btrit gegtskha etsageb
Taharerta tihutat tesemio
Nlbomwn tebertio
Wludey ilka degifkani
Mtsnnaeka kebibkani(4)

3.Blel’lnakha rediety
Ab semay ztewetsihka
Tsebe’ba dine mot segire
Tetseyre ab aedawka
Azyu nmimanuel zeshegr
Kunetat asagirkhaya
Tahmot zteferdet heywetey
Enho tizmerelka(8)`
},
    song52: {
    title: { tig: "ይብጻሕኪ ምስጋናይ", eng: "Yibtsahki msganay" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "ማርያም", eng: "Mariam" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `
1.ብጩራ ኣእዳውኪ መሊስኪ ልመናይ 
   ብተኣምር ማዕተብ ጸጋኺ ኣፍሲስክለይ  
   ብጸሎት መቑጸርያ ንሰይጣን ክስዕር 
   ወሊድክኒ ኣደይ ይብጻሕኪ ምስጋናይ(2) 
           ተደ፦ይብጻሕ ሓጎሰይ ምስጋናይ ናባኺ  
                     ኦ ንግስቲ ሰላም ውዳሰይ ንዓኺ(2) 
2.ፍቕርኺ ጥዒመ ብሓጎስ እነብዕ 
   ሓዘንኪ ዘኪረ መሊሰ እብርትዕ 
   ደገፍ ትኾንኒ ኣብ እምነተይ ክጸንዕ 
   ምስጋናይ ይብጻሕኪ ኣደየ ሓበነይ(2) 
                 3.ለይቲ ምስ መዓልቲ ብኣኺ’ዩ ሓሳበይ 
                    ኣደየ እንዲኺ ሕልፊ እትሓልይለይ 
                    ኣደይ እወ ኣደይ ወትሩ እትጽልይለይ 
                    ምስጋናይ ይብጻሕኪ ብሌን ዓይኒ ናተይ(2) 
4.መንገዲ ኮንክኒ ክበጽሕ ናብ ኢየሱስ 
   ከምኡ’ውን  ጽላለይ ማህደር መንፈስ ቁዱስ 
   ስለዚ’ስ ማርያመይ ኣነ ብኣኺ ይሕጎስ  
   እኔኹ የመስግን ኣፈይ እኸፍት(2) `,
    eng: `
1.Bchura aedawki meliski lmenay
Bteamr maeteb tsegakhi afsiskeley
Btselot meqtserya nseyetan ksiir
Welidkni adey yibtsahki msganay(2)
Teda: Yibtsah hgosy msganay nabaki
O ngsti selam wdasay naki(2)

2.Fqerki t’ime bhagos eneb’e
Hazenki zekire melise ebrti
Degef tkhonkni ab emnetey ktsen’e
Msganay yibtsahki adeye habeney(2)

3.Leyti ms mealti bhaki yu hasabey
Adeye endiki hlfy ethayleyley
Adey ewo adey wetru etseliley
Msganay yibtsahki bleyn ayni natey(2)

4.Mengedi konkni kbts’h nab Iyesus
Kem’uwn tslaley mahder menfes qudus
Slezis Maryamey ane bhaki yhgos
Eneku yemesgn afey ekheft(2)`
},
    song53: {
    title: { tig: "ሓለፋ ኣለዎ", eng: "Halefa alewo" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ክሓስብ ክጭነቕ እናነባዕኩ 
  ንብዓተይ ይደርዝ ብበረኸቱ 
  ስለይ ይሓልፈለይ ይብጀወለይ 
  ንዓይ ምፍቃሩሲ ሓለፋ’ለዎ 
    ተደ፦ሓለፋ ኣለዎ(2)    
          ኣምላኸይ ፍቕርኻ ሓለፋ ኣለዎ 
          ኢየሱሰይ ፍቕርኻ(2) በይኑ’ዩ በይኑ(2) 
          ኣብ ውሽጢ ልበይ(2)  
          ጓህሪ ፈጢሩ የንድደኒ’ሎ(2) 
2.ስለይ ንኽትብል መስቀል ዝወዓልካ 
  ምእንታይ ኢልካ’ውን ደምካ ዝረሃጽካ 
  ኣምላኸይ ፍቕርኻ ብሓቂ ፍሉይ’ዩ 
  ሓለፋ’ለዎ ጎይታየ ፍቕርኻ 
        3.ንዓይ ንባርያኻ ኣፍቂርካኒ ኢኻ 
          ስለ ፍቕረይ ኢልካ ብዙሕ ተሳቐኻ 
          ክሳዕ ኣብ መስቀል’ውን ሕይወትካ ዘሕለፍካ 
          ሓለፋ’ለዎ ኣምላኸይ ፍቕርኻ `,
    eng: `
1.Khasb kchineq enaneba’ku
Nb’atey yiderz bbereketu
Sley yhalfeley ybjeweley
Nay mfk’arusi halefa lewo
Teda: Halefa alewo(2)
Amlakhey fqerka halefa alewo
Iyesusey fqerka(2) beyinu yu beyinu(2)
Ab wush’ti lbey(2)
Gwahri feti’ru yenideni lo(2)

2.Sley nkhtbl mesqel zewa’alka
M’ntay ilka wn demka zrehatska
Amlakhey fqerka bhqi fluy yu
Halefa lewo goytaye fqerka

3.Nay nbaryaka afqirkani ika
Sle fqrey ilka bzuh tesaqeka
Ksa’e ab mesqel wn hywotka zehlefka
Halefa lewo amlakhy fqerka`
},
    song54: {
    title: { tig: "ኣንቅሓና ኣበርትዓና", eng: "Anqhana abertana" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.እግዚ/ር ከምዚ’ናበለ ብነብያት ንደቁ ይምሕጸን 
 ኣብ ድቃስኩም ከይትጠፍኡ ነፍስ ወከፍ ይበራበር 
 ከምተን ለባማት ደናግል ቀንዴልኩም ዘይትመልእዎ 
 እቲ ሕያው ኣምላኽ ምስ መጸ በሪህኩም ተቐበልዎ 
       ተደ፦ዎ…… እግዚ/ር ኣንቅሓና ኣበርትዓና 
             ፈሊና ከነለልዮ ዘለናዮ ዘመና(2) 
               ቆጽሊ በለስ ምስ ዓምበበ 
               ክረምቲ ከም ዝፍለጥ 
               ኩሉ ሰብ’ውን ዝህንጠዮ ፍሪኡ ንኽምገብ  
               ንሕና’ውን ፍረ ድሕነት ንኽንረክብ  
               ኣኽእለና ዎ እግዚኣብሔር 
2.ሰይጣን ዝበልዖ ደልዩ ከም ዝጥሕር ኣንበሳ 
  ኣብ ዙርያኹም ይጓዝም ኣሎ ንነብስኹም ክርምሳ 
  ስለዚ ፍለጥዎ ኣቶኪርኩም ቶቓመትዎ 
  ብሓይሊ ኲናት ናይ ኣምላኽ ዓጢቕኩም ተዋግእዎ  
            3.መዓልቲ ከም ሰራቒ ኮይኑ እዩ ዝመጽእ 
              ትኽስታኹም ኣጥፍእዎ ሓደ እኳ ኣይዘንግዕ 
              ዕጠቑ ተዳለዉ ኣጽዋር ኣምላኽ ልበሱ 
              ልብኻትኩም ኣጽርይዎ ጹኑዕ መንፈስ ተሓደሱ 
4.ድሌትና እዩ ሃረርታና ክንረክብ ሕይወት ዘልኣለም 
  ፍጹም ኣይጠቕመናን እዩ ሓጎስ ናይዛ ዓለም 
  ብሳህልን ምሕረትን ማሚቕና ክንነብር ኣብ ሕቕፎኻ 
  መወዳእታና ኣጸብቕ ጠምተና ብምሕረትካ `,
    eng: `
1.Egzih’r kemzi nabbele bneb’yat ndeku yimhtsen
Ab dkas’kum keyttf’u nefs wekf yberaber
Kemten lebamat denagel qen’delkum zeytmel’o
Eti hyaw Amlak ms metsa berihkum teqebel’o
Teda: Wo… Egzih’r anqhana abert’ana
Felina kenel’elyo zlenayo zemena(2)
Qotsli beles ms ambebe
Kremti kem zifleth
Kulu seb wn zhenteyo fri’u nkhmgheb
Nhna wn fre dhnet nkhnerkeb
Akh’elena wo Egzihaber

2.Seytan zbelyo delyu kem zthhr anbesa
Ab zurya’khum yigwazm alo nneb’skhum kirmesa
Slez flet’o atokirkum toqamet’o
Bhayli khunat nay Amlak atikh’kum tewag’e’o

3.Me’alti kem seraqi koynu iyu zmets’e
Tkhs’takhum atf’o hade kwa ayzeng’e
Et’equ tedalewu atswar Amlak lb’su
Lbkhat’khum atsriyo tsunu’ menfes tehadesu

4.Dletna iyu harertana knrekeb hywot zelalem
Ftsum aytqmenan iyu hgos nay za alem
Bsahl’n mhrtn mamikna knneber ab hqfokha
Meweda’atana atsebkq temt’na bmhretkha`
},
    song55: {
    title: { tig: "ዘልኣለም", eng: "Zelalem" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ዝሓይሽ ኣለዎ ኣብ ቤትካ ምንባረይ(2)          
  ኣብ ምድሪ ዘይኮነ ክውሰን ዕድለይ(2)  
      ግዜ ዘይውስኖ ኣብታ ሓዳስ ቤትካ   
      ይናፍቕ ኣለኹ ክርኢ ንገጽካ(2)   
      ክዓርፍ ኣብ ሕቕፎኻ  
        ተደ፦ዘልኣለም ኣብ ቤትካ ወሲነ (መሪጸ)  
              ምሳኻ ምንባር ኢየሱሰይ ምሳኻ ምንባር(2)  
2.ካብ ጸልማት ናብ ብርሃን ኣሰጋጊርካኒ ኢየሱስ ኣኽቢርካኒ  
   መንግስትን ካህናትን ንዓኻ ክኸውን ነዚ መዲብካኒ 
      እዚ ክቡር ዕጫ ካባኻ ኮይኑለይ    
      ይሕጎስ ኣለኹ ንዓኻ ምርካበይ(2)  
      ኣብ ቤትካ  ምንባረይ  
      3.ዘይጠፍእ ዘይበርስ ኣብ ነባሪ ርስቲ ተሰሪታ ነብሰይ 
        ብሓጎስ ይወጽእ ብሰላም ይስነ ኩሉ መሊኡለይ 
             ካብዚ ሓሊፈ’ውን ናብ ናይ ክብሪ ቦታ  
             ክሰጋገር‘የ ናብቲ ዕረፍትኻ(2) 
             ኢየሱሰይ ምሳኻ 
4.ዓለም ምስ ፍትወታ ደጊም ኣይምነያን ክርእያ ኣይደልን 
   ካብኣ ብምውጻአይ ይሕጎስ ደኣ እምበር ሓዚነ ኣይፈልጥን 
      እንታይ ከይተርፈኒ ንዓኣ ገዲፈ  
      እቲ ዝበለጸ ካባኻ `,
    eng: `
1.
Zihayish alewo ab betka menbarey (2)
Ab midri zeykone kwesen idley (2)
Gize zeywusno abta hadas betka
Yinafeq alekhu kri ngecka (2)
Kiarf ab hekfokha
Tedefo Zelalem ab betka wesine (meritse)
Misakha menbar Iyesusey misakha menbar (2)

2.
Kab selmat nab berhan aseggagirkani
Iyesus akhbirkani
Mengestin kahenatin n'aka kkewen
Nezi medibkani
Ezi kibur icha kabakha koynuley
Yihgos alekhu n'aka merkabey (2)
Ab betka menbarey

3.
Zeytefe zeybers ab nebari risti
Teserita nebsay
Bhagos yiwetse bselam yisena
Kulu meliu ley
Kabzi halifeun nab nay kibri bota
Ksegagerye nabti areftkha (2)
Iyesusey misakha

4.
Alem mis fetwta degim ayimeneyan
Kreya ayidelin
Kaba bmuwtsaay yihgos dea
Ember hazina ayfeltin
Entay keyterfeni n'a gedife
Eti zbelekse kaba`
},
    song56: {
    title: { tig: "ኣሜን ኣሜን", eng: "Amen Amen" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ስጋኻን ደምካን ወፊኻለይ  
 ንኽበልዖ ንኽሰትዮ 
 ዓጽምኻን ስጋኻን ከስኪስካለይ 
 ንኽድሕን ንኽነጽሕ 
        ተደ፦ኣሜን(3) ሃሌ ሉያ ኣሜን 
              ኣሜን(3) ተዓዊተ ኣሜን 
              ኣሜን(3) ሃሌ ሉያ ኣሜን 
              ኣሜን(3) ተሓጒሰ ኣሜን 
2.ጥፍጣፍን ርሃጽን ገጽካ መሊኡ  
  ንኽነጽሕ(2) 
  ስጋኻን ደምካን ተመጊበ 
  ንድሕነተይ(2) 
           3.ብስሙር ዓጽምኻ’ውን ተኸቢበ 
             ካብ ጸላእተይ እውን ድሒነ 
             ኣብ ትሕቲ ኣኽናፍካ ውን’ኣጽሊለ  
             ብፍቕርኻ እውን ማሙቐ 
4.ኣብ ዛራ ማይ ፍቕርኻ ኣንሳፊፈ  
  ኣብ ኣእዳውካ ተሓቚፈ 
  ስጋኻን ደምካን ተመጊበ
  ባህ ኢሉኒ እውን ዓጊበ `,
    eng: `
1.
Sigakhan demkhan wefikhaley
Nikhbelio nikhsetio
Atsimkhan sigakhan keskiskhaley
Nikhdehen nikhenetsih

Tedefo Amen (3) Hale luya Amen
Amen (3) Teawite Amen
Amen (3) Hale luya Amen
Amen (3) Tehaguse Amen

2.
Tiftaf'n rehats'n getska meliu
Nikhenetsih (2)
Sigakhan demkhan temegibe
Nidhenetey (2)

3.
Bismur atsimkhaun tekhibibe
Kab tslayetey iun dhine
Ab tihti akhnafkha wun atsilile
Bifekrkha iun mamuke

4.
Ab zara may fekrkha ansafife
Ab eedawkha tehahpife
Sigakhan demkhan temegibe
bah eluni wn agibe`
},
    
    song57: {
    title: { tig: "ብዙሕ ምስጋና", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
ተደ፦ዎ…… ብዙሕ (ኣሻሕ) (ኣእላፍ) ምስጋና 
      ዎ…… ብዙሕ (ኣሻሕ) (ኣእላፍ) ኣምልኾ 
      ዎ…… ብዙሕ (ኣሻሕ) (ኣእላፍ) ዝማሬ 
      ኢየሱስ ይኹን ንዓኻ /3/ 
            ምዝማረይ ንዓኻ እምበር  
            ኢየሱስ ንመን ደኣ’ሞ(2) 
            ደው ምባለይ ንዓኻ እምበር 
            ኢየሱስ ንመን ደኣ’ሞ(2) 
            ንእስነተይ ንዓኻ እምበር 
            ኢየሱስ ንመን ደኣ’ሞ(2) 
                 ይግብኣካ’ዩ ይግብኣካ(4) 
1.ንሓይለይ ሓዲስካለይ ጸሎተይ መሊስካለይ 
  ንንብዓተይ ደሪዝካዮ ውሽጠይ ሓጎስ መሊእካዮ(2) 
        2.ውድቀተይ ዝምነዩ ሓፊሮም ድሕሪት ተመለሱ 
          ኣምላኸይ ኣዕቊብካኒ ጸግዕን ዕርድን ኮይንካኒ(2) 
3.ኣብ በረኽቲ እመላለስ ዝተባህለኒ መታን ክወርስ 
  ዕርዲ ሰይጣን እንዳፍረስኩ ብኣምላኸይ ይሕበን ኣለኹ(2)`,
    eng: ``
},    
    song58: {
    title: { tig: "ኣይሓደግካናን", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `  
1.እቲ ሕሱም ሰይጣን ተጻራርየይ 
 ከቶ ኣይዓርፍን ካብ ምፍታነይ 
 እሙን ጐይታ ግን ኣይገደፍካንን 
 ብኣይ ክትከብር ኣይነዓቕካንን 
       ተደ፦ኣይሓደግካናን ሃሌ-ሉያ 
             ኣይሓደግካናን ኣሜን 
             ኣሕሊፍካ’ውን ንጸላኢ ኣይሃብካናን 
2.ሰይጣን ክጓዝም ብርከይ ረዓደ 
  ርእሰይ ኣድኒነ ተስፋ ቖሪጸ 
  ንስኻ ግን ጐይታይ ምሳይ ነበርካ 
  ብሰይጣን ክግዛእ ኣይሓደግካንን 
           3.ወትሩ ብዘይ ፍርሓት ዕልል ክብል’የ 
             ኣብ ኩሉ ናብራይ ከመስግነካ’የ 
             ዕጹብ ክቡር’ዩ ጐይታ ኩሉ ትእዛዝ 
             ኣብዛ ዕሸል ነፍሰይ ሓይልኻ ግለጽ 
4.ወንጌል ናይ ጽድቂ ክትነብር እያ 
  ደጌታት ሲኦል ኣይሕይልዋን 
  ንስምካን ደምካን ኣጽዋርና ጌርና 
  ክንኣቱ ኢና ክንኣን ሃገርና `,
    eng: ``
},    
    song58: {
    title: { tig: "ወሃቢ ዕረፍቲ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ጾሩ ዝኸበዶ ሕይወቱ ብሽግር ዝተኸበ 
  ናይ’ዛ ዓለም ፈተናን መከራን ዝረብረበ 
  ንነብሱ’ውን ዕረፍቲ ዘይረኸበ 
  ካባኻ’ዩ(2) ምሕረት ዝጽበ 
        ተደ፦ኣርዑትካ ልዙብ ጾርካ ፎኪስ  
              ትሑት ልብኻ ለዋህ ኢየሱስ 
              ወሃቢ ኩሉ ፍቕሪ’ዩ ስምካ 
              መን’ዶ ኣሎ’ዩ ጎይታ ብዘይካኻ 
              መን’ዶ ኣሎ’ዩ ጎይታ ብዘይካኻ  
              መን’ዶ ኣሎ’ዩ ኢየሱስ ንልበይ ዘህድኣ(2) 
2.ኣብ ጽምዋ በረኻ ረዳኢ ዘይብለይ ኢለ 
  ብብዙሕ ሓሳብን ብብዙሕ ጭንቀትን ተዓብሊለ 
  ዘሕለፍኩዎ ስቓይ ክዝክሮ ጀሚረ 
  ብለውሃትካ(2) ተስፋ ረኺበ 
          ኣርዑትካ ልዙብ………  
              ዕረፍቲ ትህብ ፍጹም ዘይውዳእ 
              ንመንፈስና ብሓጎስ ዝመልእ 
              ፍቕርኻ ዘይጽገብ ኩሉ ሳዕ 
              ጥበብ ዝመልኦ ብሰብ ዘይልካዕ /2/ 
3.እግዚ/ር ኢኻ ኣልፋን ኦሜጋን ናይ ሕይወተይ 
  ኣባኻ ይረኽቦ ኩሎም ዓይኒ ማያት ናትካ ናተይ 
  እንተኾብለልኩ’ዉን ገዲፈዮ ንቤተይ 
  ትጾረኒ(2) ኾንካኒ ጓሳይ 
          ኣርዑትካ ልዙብ……… 
              ኣቱም እትጽዕሩ ጾር ዝኸበደኩም 
              ናብ ኢየሱስ ኪዱ ንሱ ከዕርፈኩም 
              ኣርዑቱ ጹሩ ካብኡ ተመሃሩ 
              ንነብስኹም ድሕነት ክትረኽቡ `,
    eng: ``
},    
    song59: {
    title: { tig: "ኣደ መድሓኒና", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `
1.ኦ ማርያም ኣዴና ኣደ መድሓኒና 
  ንዓና ደቅኺ ሰላምኪ ኣውርድልና 
  ብፍረ ናይ ከርስኺ ጸግዕና ኩንልና 
  ዋልታ ናይ ሕሙማት መጸናንዒት ሕዙናት(2) 
         ተደ፦ንማርያም ንለምና ጸግኣ ክትሰደልና 
                 ጸገምና ነካፍላ ካብ ወዳ ከተማልደልና(2) 
2.መሳልል ድሕነትና ኦ ማርያም ንስኺ 
  ብእምነት ንጽሊ ተምበርኪኽና ናባኺ 
  ከተማልድልና ናብቲ ፍቑር ወድኺ 
  ንምሕጸነኪ ኣሎና ንሕና ድኹማት ደቅኺ(2) 
             3.ናይ ኣኽብሮት ስግደት ነቕርብ ናባኺ 
                ስለ ተቕርብልና ምሕረት ርሕራሔኺ 
                ዕልልታ ተቐበሊ ካብ ፍቑራት ደቅኺ 
                ንምጉሶ ኣሎና ነቲ ፍረ ከርስኺ(2) `,
    eng: ``
},    
    song60: {
    title: { tig: "ኣምላኽ ንደቁ ይመርሕ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ብራህዋ ብሰላም ብሓጎስን 
  ኣምላኽ ንደቁ ይመርሕ 
  ብጸበባ ጭንቀት ምስ መከራ 
  ኣምላኽ ንደቁ ይመርሕ 
      ተደ፦ገሊኦም ብሓዊ ገሊኦም ብማዕበል 
 ገሊኦም ብማይ ገሊኦም ብሞት 
 ገሊኦም ማእሰርቲ ከምኡ’ውን መግረፍቲ 
 ይኾኑ’ዮም ናይ ስቓዩ ተኻፈልቲ(2) 
2.ብጸልማት ኮነ ብግሩም ብርሃን  
  ኣምላኽ ንደቁ ይመርሕ 
  ብፈተና ኮነ ብበረኸት 
  ኣምላኽ ንደቁ ይመርሕ 
          3.ሰይጣን ኣብ ልብና እናተማህለለ 
            ኣምላኽ ንደቁ ይመርሕ 
            ነብስና’ውን ፍጹም እንተሓለለ 
            ኣምላኽ ንደቁ ይመርሕ 
4.ዋላ ዝገደፈ ሞተ ይመስለና 
  ኣምላኽ ንደቁ ይመርሕ 
  ኣብ ቆጸራኡ ናይ ድሕነት ተስፋና 
  ኣምላኽ ንደቁ ይመርሕ 
          5.ኣምላኽ በታ ሕያወይቲ ኢዱ 
            ኣምላኽ ንደቁ ይመርሕ 
            ናብታ ንጽሕቲ ሰማያዊት ቤቱ 
            ኣምላኽ ንደቁ ይመርሕ`,
    eng: ``
},    
    song61: {
    title: { tig: "ብርሃን ናይ ዓለም", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ብርሃን ናይ ዓለም መድሓኒ 
  ኩሉ ዝከኣሎ ከኣሊ 
  እቲ ፍጡር ልዑል መድሓኒ 
  ንሓጥእ ውልዱ ብሓልዮት ዝኣሊ /2/ 
         2.ኣነየ… ጎይታይ ኣነየ… ኣነይ ድኹም ባርያኻ 
           ኣነየ… ጎይታይ ኣነየ… ኣነይ ዘኽታም ወድኻ 
           ኣነየ… ጎይታይ ኣነየ… ኣነይ ድኻ ወድኻ(2) 
3.መ…ን ምስ ጎደለ ኢኻ ጸሚአ ዝበልካ(2) 
  ኣነ… ድየ ሓፍተይ ርሒቕናካ ሃሃሃ…  
     ሰሚዐዮ’ለኹ ኣነስ ኢቲ ቓልካ  
     ይመጸካ’ለኹ ኣቦይ ተቐበል ወድኻ(2) 
         4.ኣቖጢዐካ ብዙሕ ኣሕዚነካ(2) 
ይምለስ ኣለኹ ኣቦየ ኣብ ቤትካ(2) 
5.ቃላትካ ምስ ተመገብኩ ኣብ ቤትካ ከቢረ…  
  ፍቕርኻስ ተረዲኡኒ ኣለዎ ሓለፋ (2) ሃሃሃ…  
     ብፍቓድካ ውርደተይ ጾርካ(2) ሃሃሃ… 
     ተመስገን ኢየሱሰይ…  
     ድሕሪ ደጊም ይኣኽለካ(2) ሃሃሃ… /3/ `,
    eng: ``
},    
    song62: {
    title: { tig: "ዎ እ/ሄር ክብሪ ህበካ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `
1.ኩሉ ፍጥረት ክብሪ ይበል 
 ይስገደልካ ዎ ኣንታ ልዑል(2) 
 ብጥበብካ ዓቢ ምኽርኻ ዘገርም 
 ዝመስለካ የለን ሓያል’ኻ እግዚ/ር(2) 
       ተደ፦ዎ እግዚ/ር ክብሪ ይህበካ(2) 
  ይግብኣካዩ ክበር ይብለካ(3) ሃሌ-ሉያ 
  ንገስ ይብለካ(3) ሃሌ-ሉያ 
  ምለኽ ይብለካ(3) ሃሌ-ሉያ 
  ግዛእ ይብለካ(3) ሃሌ-ሉያ 
2.ኣብ ሰማያት ኮነ ኣብ ምድሪ 
  ኣይተረኽበካን ተወዳዳሪ(2) 
  ብስልጣን ትገዝእ መንግስትኻ ብርቱዕ 
  ኣምላኽ ኢኻ እብለካ (ንስኻስ) ኣብ ዘመናት ምሉእ(2) 
           3.ሰማይ ኣብዚ ከንጠልጥሉ 
ደመና’ውን ማይ ከዝንቡ 
ኣቘምካሎም ሕጊ ደረት  
ምስክርካ’ዮም ንዘልኣለም 
ነዚ ዝገበርካ እግዚ/ር ኢኻ  
ድላዩ ዝገብር የለን ከምዚ ናትካ(2) `,
    eng: ``
},    
    song63: {
    title: { tig: "ሕያዋይ ጓሳ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ሕያዋይ ጓሳ ኢየሱስ በይንኻ 
   ዕሸል ሕይወተይ ምራሕ ሕድርኻ 
   ሓደራ ይብለካ ኩሉ መንገደይ 
   ብመንፈስ ቅዱስ ምላእ ሕይወተይ 
        ተደ፦ክሳብ ዝበጽሕ ናብ ቅዱስ ቤትካ 
  ናብ ኢየሩሳሌም 
  እሙን መራሒ መዓልትታተይ 
  ብዓወት ደምድም 
2.በትርን ምርኩስን ኩነኒ ኢኻ 
   ተግሳጽ ክቅበል ከምኡ’ውን ጸጋኻ 
   መጠን ከይሓልፍ ድሕሪት ከይተርፍ 
   ኣስተምህረኒ ብቅዱስ መንፈስ 
               3.ትፈልጥ ኢኻ ድኹም ምዃነይ 
               ኣሳልየኒ ብሩኽ መድሕነይ 
                  ናይ ኩሉ ኣምላኽ ናይ ምድሪ ሰማይ 
                  ኣብቅዓኒ ጎይታ ገጽካ ንምርኣይ 
4.ኦ ዕዉት ገንሸል ብሩኽ መድሓኒ  
  ኣብ ኩሉ ጉዕዞይ ዓወት ሃበኒ 
  ኣብ ሓዳስ ሃገር ጻዕዳ ከም ጸምሪ`,
    eng: ``
},    
    song64: {
    title: { tig: "እቲ መወዳእታይ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ጾር ናይ ሰብ ትጸውር ንስኻ 
 ዝኸበዶም ይመጹ ናባኻ 
 ሓይሊ ዝደለዩ ሓይሎም ኢኻ 
 ንሕትኦም ኩሉ መልሲ ኢኻ 
 ኣነ’ውን ነዚ ተረዲአ  
 ይመጸካ ኣሎኹ(2)  
 ጾሮይ ተሰኪመ  
ተደ፦እቲ መወዳእታይ ጸቢቑ ክርኢ 
     ይደሊ ኣለኹ(2) 
     መስቀለይ ከቢዱ ኣምላኸይ… 
     ምጻሩ ስኢነ ኢየሱሰይ… 
     ብውሽጢ ብደገ ኣምላኸይ… 
     ኣይክኣልኩን ኣነ ኢየሱሰይ…  
     ሓይልኻ ሃበኒ ንኹሉ ክጸሮ(3) 
     ሰማያዊ ምግላጽ ኣብ ልበይ ኣምብሮ(3) 
     ኣብዚ ክፉእ ዘመን ንኽእመነካ  
     እዚ እዩ ድልየተይ 
     ናይዚ ምድሪ ጉዕዞይ ብዓወት ተፈጺሙ 
     ክርኢ መወዳእታይ 
2.መልክዑ ዘይፈልጦ ንፋሳት  
  ይደፍኣኒ ኣሎ ብዙሕ ማዕበላት 
  ምስትውዓል ሃበኒ ከለልዮ 
  እቲ ናትካን ዘይናትካን ክፈልዮ 
  ከም ሰዶም ከይከፍእ እቲ ፍርደይ 
  እቲ መወዳእታይ ካብቲ መጀመርታይ 
  ጎይታ ኣጸብቕለይ 
3.ኣሚንካ ዝሃብካኒ ሕድሪ 
  ስምካ ከይልውጦ ብወርቂ 
  ከም ይሁዳ ልበይ ከይጠልመካ 
  ደግፈኒ ኢየሱስ ሓደራኻ 
  ኣዕጽምተይ ከይብተን ኣብ ሲኦል 
  ኣብቲ መዝገብ ሕይወት(2)  
  ነይሩ ከይብሃል 
4.ኣእጋረይ ኣሰርካ ክሕዛ 
  ካብ መንገደን ፍጹም ከየልግሳ 
  ካብ ትእዛዝ ከናፍርካ ከይዘብል 
  ካብ መዝገበይ ከኣ ቃል ከኽብር’የ 
  ከም ኢዮብ ብሓዊ ሓሊፈ 
  ከም ወርቂ ክወ`,
    eng: ``
},    
    song65: {
    title: { tig: "ብሓይልና ኣይኮናን ተወኪልና", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ብሓይሉ ዝውኵል ፍጡር እንተሎ ንግዚኡ እዩ 
  ክእለቱ ዝኣምን እውን ከቶ ዘይከውን ነገር እዩ 
  ብዘይ ኣምላኽናስ ኣይከውንን 
  ሓሳብ ልብናስ ኣይሰምርን(2) 
 ተደ፦ብሓይልና ኣይኮናን ተወኪልና 
       ብቐስትና ኣይኮናን ተዋጊእና 
       ተጻረርቲ ብኣኻ ስዒርናዮም 
       ጸላእትና ብስምካ ረጊጽናዮም 
2.ብብዝሒ ሽግራት ገጽና ጸልምዩ እንተተደወና 
  ፍናና ወዲቑ ብጸላኢ ተስፋ እንተቖረጽና 
  ኣሎና ኣምላኽ ዘህድኣና  
  ካብ ጭንቀትና እውን ዘውጽኣና(2) 
     3.ቀስትኻ ዘርጊሕካ ካብ ጸላኢ ትከላኸለልና 
       ዋልታኻ ገቲርካ ካብ ጸላኢ ሓራ ተውጽኣና 
       ብዘይ ኣምላኽናስ መን ኣሎና 
       ካብ ሽግራትና ዘውጽኣና(2) 
4.ካብ ቀደም ልዑል’ዩ ዓቢ ጎይታ ናይ ዓለም ንጉስ’ዩ 
  ሓያል ክንሱ ግን ለዋህ ዉፉይ ንርእሱ ዘትሕት’ዩ 
  ኣብ ልዑል ኣምላኽ ተወኪልና 
  ድሌትና ኩሉ ሰሚሩልና(2) 
     5.እወ ብሓይልና ኣይኮናን ኩሉ ቀጽርታት ጥሒስና 
       ብክእለትና ኣይኮናን ሽግ ዓወትና ኣብ ኢድና ዝሓዝና 
       ንስምካ ከም ዋልታ ጌርናዮ 
       ሕይወትና ኣባኻ ወፊናዮ(2) `,
    eng: ``
},    
    song66: {
    title: { tig: "ኣብቲ ከረናዊ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ኣብቲ ከረናዊ ናብ ሃገር ይሁዳ 
  መጻእኪ ክትነግሪ ዝገበሮ ጎይታ 
  ክብሪ እንከሎ ብኣምላኽ ምሕራይኪ 
  ግብዝና ኣይነበሮን ቦታ ኣብ ልብኺ 
      ትሕትናኺ ኩሉ ብምሕሳብ ፍቕርኺ 
     ከተማልድልና ንጽሊ ናባኺ 
     ኣደ ናይ ኣምላኽና ጸጋ እተውህቢ 
     ሕጂ ንዘልኣለም ስሌና ለምኒ 
2.ቃላት ሰላምታኺ ደስ በላ ኤልሳቤጥ 
  ብምብጻሕኪ ናብኣ ምኽባራ ገለጸት 
  ንቤትና ክትኣትዊ ንዓና’ውን ክብሪ 
  ሰላምኪ ሃብና ብጥዑም ድምጽኺ 
     ንሱ ዝበለኩም ትእዛዙ ግበሩ 
     ኢልኪ ተዛሪብኪ ቃሉ ንዘይሰምዑ 
     ኣደ ናይ ኣምላኽና ጸጋ እተውህቢ 
     ሕጂ ንዘልኣለም ስሌና ለምኒ 
3.ኣደ ክትኮንዮም ንደቂ መዛሙር 
  ኢየሱስ ክህበኪ ብደስታ ብሓጎስ 
  ብባህታ ተመልአ ንዓኺ ምርካቡ 
  ሃብቲ እውን ኮንክሉ ብርሃን መልኣ ቤቱ 
     እንሆ ወድኺ ኢሉ ክህበኪ 
     ንዓና’ውን ማርያም ኣደ ኩንና ኢኺ 
      ኣደ ናይ ኣምላኽና ጸጋ እተውህቢ 
     ሕጂ ንዘልኣለም ስሌና ለምኒ `,
    eng: ``
},    
    song67: {
    title: { tig: "ተበጂዩኒ እዩ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ብማያት ክሓልፍ ኣይክጠልቕን’የ 
  ብውሕጅ ክሳገር ኣይክጥሕልን’የ 
  ብሓዊ ክኸይድ ኣይክነድድን’የ 
  ሃልሃልታ ሓዊ’ውን ኣይክህሙኸንን’ዩ(2) 
      ተደ፦ተበጂዩኒ እዩ’ሞ ኣይፈርሕን እየ 
            ኩሉ ግዜ ምስ ጎይታይ’የ 
            ካብ ኣምላኸይስ ከቶ ኣይፍለይን’የ /2/ 
2.በጻምእ ክጓዓዝ ኣይክጸምእን’የ 
  ጥሜት’ውን እንተኾነ ኣይከጥቅዓንን’ዩ 
  በጻድፍ ክኸይድ ኣይክወድቕን’የ 
  ኣሻኽ መንገዲ’ውን ኣይክወግኣንን’ዩ(2) 
          3.ናይ ዓለም ነገራት ኣይክስዕረንን’ዩ 
            ሓሳርን መከራን ኣይከጨንቐንን’ዩ 
            ንጎይታይ ረኺበ የለን ዝጎድለኒ 
            ኣብ ጉዕዞ ሕይወተይ እውን ዘሰንየኒ(2) 
4.ጓሳ ሕይወት ረኺበ መሪሕ ናይ ሕይወተይ 
  ንስሙ ጸዊዐ ክረግጽ ጸላእተይ 
  ኣብ ንጉስ ሰማያት ኣነስ ክምዕቆብ’የ 
  ናይ ዘልኣለም ርስቲ እውን ክወርስ’የ(2) `,
    eng: ``
},    
    song68: {
    title: { tig: "ጓሳየይ ኮይኑኒ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ካብቲ ዝደልዮ ገለ ከየጉደለ 
 ይመልኣለይ ኣሎ ዉሉደይ እናበለ 
 ጎይታ ኢየሱስ ኣቦይ እንከለዎ 
 ዋላ ሓደ የለን ዝሰኣንክዎ 
      ተደ፦እግዚ/ር ጓሳየይ ኮይኑኒ 
            ስለዚ ድማ የለን ዝጎድለኒ 
            ኣብ ልሙዕ ሸኻ የውዕለኒ እዋይ… 
            ናብ ዝዓርፈሉ ማይ ድማ ይመርሓኒ 
2.ብበረኸት ኢዱ እናጽገበኒ 
  ሕይወተይ ብደሙ እናኸበበኒ 
  ክሳብ ሕጂ ኣለኹ ከይተናወጽኩ እዋይ… 
 ካብቲ ለዋህ ኣቦይ ኩሉ እንዳረኸብኩ 
         3.ካብኡ ለሚነ ገለ ኣይተኸላእኩን 
           ሓቲተዮ እውን መልሲ’ኳ ኣይሰኣንኩን 
           በብግዚኡ ኩሉ እንዳሃበኒ 
           ይነብር ኣለኹ ተሰማሚዑኒ 
4.ንድልየተይ ኩሉ ብጽቡቕ ኣጽጊቡ 
  ይመልኣለይ ኣሎ ሰናይ’ዩ ሓሳቡ 
  የንብረኒ ኣሎ ብዘይ ገለ ጸገም 
  ገና እውን ክነብር’የ ንዘልኣለም`,
    eng: ``
},    
    song69: {
    title: { tig: "ብተኣምራትካ የድንቑኻ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `     
1.ሰማይ ምድሪ ብቓልካ ዝፈጠርካ 
   ንወዲ ሰብ ካብ ሓመድ ዝሰራሕካ 
   እስትንፋስ ሕይወትካ’ውን ዝሃብካ…  
         ተደ፦ሃሌ-ሉያ  
                ኣብ መቕደሱ ነመስግኖ 
                ስለ ሓይሉ ነመስግኖ 
                ብድምጺ መለኸት ነመስግኖ 
                ብበገና ነመስግኖ 
                ብኸበሮን ብሳዕስዒትን ነመስግኖ 
                ብዕልልታን ብጣቕዒትን ነመስግኖ 
                       በሕዛብ ኩሎም ክቡር ኢኻ 
                       ብተኣምራትካ የድንቑኻ(2) 
                       ኣጋንንቲ ይደምሰሱ ብስምካ(2) 
2.ንምውታት ብቓልካ ኣተንሲእካ 
   ንድዉያት ሕሙማት ፈዊስካ 
   ነጋንንቲ ብስምካ ኣውጺእካ…    
            3.ናይ ናብራ ትርጉም እውን ፈሊጠዮ 
               እምኒ ልበይ ብቕጽበት ሰበርካዮ 
               ዘይቲ መንፈስ ኣብ ልበይ ኣፍሰስካዮ… 
4.ክንደይ ጥዑም ሓያል ብርቱዕ ኢዱ 
   ደገ ምድሓን ዝኸፈተ ብስቕለቱ 
   ንዘልኣለም ይመስገን ኣብ ዙፋኑ…`,
    eng: ``
},
        
    song70: {
    title: { tig: "ኣሎኒ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
ተደ፦ኣሎኒ ምኽንያት ኣሎኒ 
        ኣሎኒ ውሬት ኣሎኒ(2)     
        ዘሚሮሚ’ለ ኣይዝምርን’የ  
        ልማድ ኣይኮንኩን ዘመስገን ኣነ(2) 
        ከምዘይተገብረሉ ስቕ ኣይብልን  
        ተጌሩለይ’ሞ እዝምር(2) 
                1.ልበይ ኣውዲቐ /እንድየ/ ተደጊፈካ  
                 ከቶ ኣይሰጋእኩን ብኸኣልነትካ(2) 
                 ኣየሕፈርካንን ተወኪለካ 
                 ኣመልኪዕካኒ ተመኪሐልካ(2) 
2.ናይ መስቀል ፍቕሪ /ስራሕ/ ዶ’ኽጅምሮ  
   ኣየን ገዲፈ ኣይናይ ክገልጾ(2) 
   ሓንቲ መዓልቲ /ኳ/ ኢድካ ዘይብሉ 
   ኣይፈልጥን’የ ዘመነይ ኩሉ(2) 
               3.ምኽሪ መኺሮም ምስ ደርበዩኒ  
                  እስኪ እንታይ ይኹን ሕልሙ እዚ ሓላሚ  
                  ምማቱ ኣይተርፎንዩ ጉድጓድ ተድርብዩ 
                  እናተባህለ ግና ክብሪ ተራእዩ  
                  ከይተፈጸመ ሕልሙ ነይመውት 
                  ዝወርሶ’ለዎ ብዙሕ በረኸት(2)`,
    eng: ``
},
        
    song71: {
    title: { tig: "ኣብ እግዚኣብሔር ይኹን", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `
1.ኣብ ስጋ ኣይኹን ትውክልትና 
 ኩሉ ንግዚኡ እዩ ዝጥብረና 
 ኣምላኽና ግን ኣምላኽ ፍቕሪ’ዩ 
 ናይ ጥበራ ኣይኮነን ናይ ሓቂ ፍቕሪ’ዩ   
        ተደ፦ኣብ እግዚ/ር ተስፋ ምግባር ሰናይ’ዩ 
              ኩሉ ነገር ናይ ከንቱነት ከንቱ እዩ 
              እግዚኣብሔር ግና ፍቕሪ እዩ 
              እግዚኣብሔር ግና መጸናንዒ እዩ 
2.ኣብ እግዚኣብሔር ተማዕቆብ 
  ልብኻ ዝደልዮ ንሱ እዩ ዝህብ  
  ኣብኡ ኣማዕቁብ መንገድኻ 
  ኣብኡ ተወከል እሞ ኩሉ ክሰልጠካ 
           3.ንእግዚኣብሔር ሃዲእካ ተጸበዮ 
             ንግብሪ ገበርቲ እከይ ኣይትመነዮ 
             እቶም ንእግዚኣብሔር ዝጽበይዎ 
             እዮም ንመንግስቲ ኣምላኽ ዝወርስዎ 
4.ንእግዚኣብሔር ተዓጊስካ ተጸበዮ 
  ንሱ’ውን ጸሎትካ ክምልስ’ዩ 
  ካብቲ ረግረግ ጸብሪ ኣውጺኡ 
  ኣእጋርካ ኣብ ከውሒ ከቐምጠን’ዩ `,
    eng: ``
},    
    song72: {
    title: { tig: "ጸጋ ዝሃብካኒ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.መንገዲ ጠፊኡኒ ኮብለል ክብል ከለኹ 
  ዘዕግብ ዘርዊ ስኢነ ምስ ተሓለልኩ  
  ብዘደንቕ መንገዲ ብተኣምራት ጸዊዕካ  
  ሓድሽ ሰብ ጌርካኒ ብዘገርም ጸጋ 
     ተደ፦ጸጋ ኣብ ልዕሊ ጸጋ  
           ጸጋ ኦ… ጸጋ… ጸጋ ዝሃብካኒ  
           ምስጋና ኣብ ልዕሊ ምስጋና 
           ምስጋና ኣብ ልዕሊ ምስጋና 
           ክህበካ ይግበኣኒ 
2.ድኹም ንኡስ’የ ሓጢኣት ዝመልኣኒ  
  ኣብ ቅድሜኻ ክቐርብ ኣዝዩ የፍርሓኒ 
  ‘ተኾነ ግና ምሕረትካ ማእለያ ነይብሉ 
  ንኣበሳይ ዝሓጽብ ጸጋ ‘ቕበለሉ 
        3.እቲ ዝስዕበካ ዝረኽቦ ሚእቲ ካዕበት  
          አስተማቕሮ ኣለኹ ዋላ ኣብዚ ዓዲ ስደት 
          ብዝተባረኸ ሓዳር ብዝተባረኹ ደቂ 
          መግለጺ የብሉን ሓጎሰይ ናብራ ጥዒሙኒ 
4.ናይ ድንኳን ናብራ መከራ ዝመልአ  
  ብኽብሪ መጺእካ ጠቕሊልካዮ ምስ ሓለፈ 
  ንዘልኣለም ምሳኻ ዝነብረሉ ቦታ 
  ዘይግብኣኒ ወሪሰ ሳላ ናትካ ጸጋ `,
    eng: ``
},    
    song73: {
    title: { tig: "ብሳላኺ’ዪ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `
1.ምኽኣሉ ስኢነ ጸምጸም ምድረ-በዳ          
 ልዕሊ ዓቕመይ ኮይኑ ዝነበረኒ ዕዳ           
 ቁሊሕ እንተበልኩ ርእየ ንዓኺ                
 ኩሉ ፎኺሱለይ ማርያመይ ብሳላኺ 
     ተደ፦ኣብቲ ከቢድ እዋን… ተስፋ ምስ ኲናት    
             ኣብቲ ከቢድ እዋን… ብጸይቲ ሽጉራት          
             ኣብቲ ከቢድ እዋን… ሓገዝ ንድኻታት   
             ኣብቲ ከቢድ እዋን… መጸናንዒት ሕዙናት 
                  ብሳላኺ(2)’ዩ  መድሓኒ ዝረኸብና  
                  ብሳላኺ(2)’ዩ  ዕረፍቲ ዝረኸብና                
                  ብሳላኺ(2)’ዩ  ሰላም ዝኮነልና  
                  ብሳላኺ(2)’ዩ  ብሓጎስ ዘለና 
2.መሬት ዓሪቡኒ ሓዲግ መዲግ ኮይነ      
  ኣንፈተይ ስሒተ ጸልማት ተሸፊነ         
  ብርሑቕ ግን ኣስተውዒለ ዝዓበየት ቀንዴል  
  ናባይ እናመጸት ኣደ ብሩህ ወንጌል 
          3.ከብደይ ብጥሙዩ ጎሮሮይ ብንቑጹ      
             ሓርቢቱኒ ከሎ ኣእምሮይ ተናዊጹ          
             ኣብቲ ጽንኩር እዋን ማርያም መጺእክኒ   
           ንኹሉ ሽግረይ  መፍትሒ ኮይንክኒ `,
    eng: ``
},    
    song74: {
    title: { tig: "መዘና ዘይብሉ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ንስም እግዚ/ር ክዝምረሉ’የ 
  ነቲ ልዑል ጎይታ ክባርኾ’የ 
  እግዚ/ር ከም ጽድቂ ከመስግኖ’የ 
  ከምቲ ርሕራሔኡ ክውድሶ’የ 
       ተደ፦ሕያዋይ ጓሳ መዘና ዘይብሉ 
             ፍቕሩ ኣይጽገብን ምሕረቱ ብዙሕ’ዩ 
             ኢየሱስ ሰናይ ኢዩ ኢየሱስ ጥዑም’ዩ(2) 
2.ንእግዚ/ር ንስሙ እቲ ዝግባእ ክብሪ 
  ነቲ መድሓኒየይ ንኢየሱስ መፍቀሪ 
  ኣብ ሰማይ ኣብ ምድሪ ንዑ ይኹን ክብሪ 
  እግዚ/ር ቅዱስ’ዩ ናይ ኩሉ ፈጣሪ 
           3.ውዳሴ ግርማ ጥበብ ምስጋና 
             ንዘልኣለም ይኹን ንሓያል ኣምላኽና 
             ንጉስ ናይ ነገስታት ናይ ይሁዳ ኣምበሳ 
             መዘና ዘይብሉ ሕያዋይ ጓሳ 
4.ግሩም ኣምላኸይ ዝኾነ መስተንክር 
  ከመይ ኢሉ ኮይኑለይ ኣብ ቤቱ ክነብር 
  ቅዱስ ቅዱስ ኢለ ንስሙ ክዝምር 
  ስሙ ይኽበረለይ ልዑል እግዚ/ር `,
    eng: ``
},    
    song75: {
    title: { tig: "ካብቲ ዝፈልጦ ንላዕሊ ኢኻ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `  
  ተደ፦ካብቲ ዝፈልጦ ንላዕሊ(3) ኢኻ                 
        ካብቲ ዝግምቶ ንላዕሊ(3) ኢኻ /2/               
        ኣዚኻ ዓቢ ኣዚኻ ፍሉይ ኣዚኻ ክቡር  
                ኢኻ እግዚኣብሄር(2) 
1.በዚ ኣእምሮይ ኣይግምተካን             
  ብሓሳባተይ ኣይበጽሓካን                        
 ምሉእ መዓልቲ እንተኣስተንተንኩ                   
 ወጋሕ ከብላ ለይቲ ‘’ተሓደርኩ              
  እግዚኣብሄር ዓቢ’ዩ በልኩ(3) 
        2.መጽሓፍ ቅዱስ ከምቲ ዝብለካ                    
           መንፈስ ቅዱስ ድማ ዝገልጸካ                  
           ኢየሱስ ከምኡ ወድ ኣምላኽ ኢኻ                  
          ‘ዚ ምግላጽ’ዚ ረኺበ ካባኻ                      
           ኢየሱስ ክርስቶስ ጎይታ ኢኻ’ብለካ(2)  
           ኢየሱስ ክርስቶስ መሲሕ ኢኻ’ብለካ 
           ገሊኦም ኤርምያስ ‘ተበሉ  
           ገሊኦም ዮውሃንስ ’ተበሉ   
           ገሊኦም ኤርምያስ ‘ተበሉ  
           ገሊኦም ካብ ነብያት’ዩ’እንተበሉ   
           ንስኻ ግና ካብኦም ትፍለ ኢኻ                 
         ብዙሕ ነገር ኣሎ ሕልፍ ዘብለካ              
           ስጋን ደምን መዓስ  መዓስ ይገልጸካ                
           ኣቦ ጥራይ እዩ ዝፈልጦ መንነትካ 
   ሰባት ኩሎም ይመለሱ ኣይደናገሩ              
   ቃላት ኣፎም ሓሳብ ልቦም እስከ ይቐይሩ                  21 
   ከም ዝምለኽ ይፍለጡ  
   ብሓቂ ብመንፈሱ          
   ወዲ ሕያው ኣምላኽ  
   ክርስቶስ ከም ዝኾነ ንሱ  `,
    eng: ``
},    
    song76: {
    title: { tig: "ኣብቲ ቤቱ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.እግዚ/ር ምድሓነይ’ዩ 
  ሓይሊ ህይወተይ ንሱ በይኑ  
  ብመላእኽቱ እንዳሓለወኒ 
  የዒንቱ ድማ ነይፍለያኒ 
           ተደ፦ኣምላኸይ ብዙሕ’ዩ ውዕለቱ 
                 ይመልኣለይ ከምቲ መጠን ሃብቱ 
                 ይሕልወኒ ብነበልባል መልኣኽቱ 
                 የምብረኒ ከም መጠን ምሕረቱ 
                 ኣብቲ ቤቱ 
2.ዕቤቱ ዘይምርመር ስለ‘ዝበሃገኒ 
  ብብዝሒ ስርናይ የጽግበኒ 
  ሃብቲ መንግስቱ ኣዝዩ ዝለዓለ 
  ዘድልየኒ ይህበኒ ሓደ ከየጉደለ 
               3.ኣብ ጸጽባሕ ምሕረቱ ሓድሽ ኢዩ 
                 ኣይወጽእን ካብ ዝሞቐ ቤቱ 
                 ተበጄካየ ኢሉ ንዝመለሰኒ 
                 ብሓጎስ ይጭድር ነዚ መድሓኒ 
4.ውዕለቱ ብዙሕ’ዩ ክንደይ ኢለ ክቖጽሮ 
  ስለይ ሓደ ወዱ መስዋእቲ ዝገበሮ 
  እዚ ከይኣክል ኣቦይ ኮይኑኒ 
  ብስጋን ብነፍስን ይከናኸነኒ `,
    eng: ``
},    
    song77: {
    title: { tig: "ቀቢእካኒ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ካብ ሓመድ ኣልዒልካ ዘንገስካኒ ጐይታ ቀቢእካኒ 
   ውርደተይ ኣርሒቕካ ብኽብሪ ሸፊንካ ቀቢእካኒ 
   ድኻመይ ስዒርካ ብሓይሊ ኣልዒልካ ቀቢእካኒ 
  ናይ መንግስቲ ክህነት ሕሩይ ክኾነካ ቀቢእካኒ 
      ተደ፦ቀቢእካኒ ኢድካ ኣንቢርካለይ 
              ቅብእኻ ኣፍሲስካ ኣብ ርእሰይ 
              ቅልጽምካ የበርትዖ ንሓይለይ 
              መወዳእታይ ዓወትን ምልክን ይኹነለይ ኣሜን(2) 
2.ኣብ ከርሲ እኖይ ገና ከይተሓሰብኩ ቀቢእካኒ 
   ዕድመይ ንኡስ ከሎ መዓርገይ ንኡስ ቀቢእካኒ 
   ኣብ መሮር ከለኹ ምስ መጓሰ ኣቦይ ቀቢእካኒ 
   ደሊኻ ረኺብካኒ ንጉስ ክኾነልካ ቀቢእካኒ 
      3.ኣብ በረኻ ይሁዳ ኣብ ኣኽራናት ሜዳ ኣይሓደግካንን 
        ሳኦል ክቀትለኒ ንነብሰይ ክደልያ ቀቢእካኒ 
        ካብዚ ኩሉ ከርተት ወጺኤ ክነግስ ቀቢእካኒ 
        ቅብእኻ ምሳይ ኔሩ ኣይተፈለየንን ኣይሓደግካንን ቀቢእካኒ 
4.ትንቢት ተፈጺሙ መንግስቲ ክቐውም ቀቢእካኒ 
   ድኹም ሓጥእ ዋላ እንተበደልኩ ቀቢእካኒ 
   ኣብ ስደት በረኻ ኣብቲ ውርደት ሕስረት ቀቢእካኒ 
   ንኹሉ ሓሊፈ ብዓወት ክድምድም ቀቢእካኒ `,
    eng: ``
},    
    song78: {
    title: { tig: "ሕያው ኢኻ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ብባርያኻ ሙሴ ህዝብኻ ክትመርሕ 
  ሕያው ኢኻ(3) 
  ባሕሪ ሰንጢቕካ ከተሕልፎም ከሎኻ 
  ሕያው ኢኻ(3) 
  እህህታ እስራኤል ሪኢኻዮ ኢኻ 
  ኣታ ሕያው ብሕያውነትካ 
  ረዲእካዮም ኢኻ 
       ተደ፦ትማልን ሎምን ንዘልኣለም 
              ሕያው ኢኻ(2) ኢየሱስ 
              ኣይተለወጥካናን ኣሜን(2) 
2.ተስፋ ዘይነበሮ ዝጨነወ ሬሳ 
  ሕያው ኢኻ(3) 
  ብዓቢ ድምጺ ጨዲርካ ናብዚ ውጻእ ኢልካ 
  ሕያው ኢኻ(3) 
  ነቲ እምኒ ኣልዒልካ ንምዉት ኣውጺእካ 
  ኣታ ሕያው ብሕያውነትካ  
  ሕያው ጌርካዮ ኢኻ 
            3.ዝሞተ ዓጻጽምቲ ንቓልካ ኣስሚዕካ 
              ሕያው ኢኻ(3) 
              ጅማውትን ስጋን ቆርበትን’ውን ከዲንካ 
              ሕያው ኢኻ(3) 
              ንንፋስ ኣብኣቶም ክነፍስ ኣዚዝካ 
              ኣታ ሕያው እቲ ንቑጽ ዓጽሚ 
              ሕያው ጌርካዮ ኢኻ 
4.ቀደም ዝነበርካ ቅድሚ ምስራት ዓለም 
  ሕያው ኢኻ(3) 
  ኣኽራን ከይተወልደ ምድሪ መሰረትካ 
  ሕያው ኢኻ(3) 
  ሕጂ ድማ ኣሎኻ ድሓር’ውን ትመጽእ 
  ኣታ ሕያው ዘልኣለም በይንኻ 
  ከቢርካ ትነብር `,
    eng: ``
},    
    song79: {
    title: { tig: "ስምካ ጥዑም", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ፍቕሪ ርእየ ግዳ ኣይከማኻን 
 ሓያል ኣሎ ግዳ ኣይከም ናትካን 
 መጽለሊ እንተሎ ከቶ ኣይከም ደምቤኻን 
 ግርማ እንተሎ ከቶ ኣይከም ገጽካን 
 ኩለንትናኻ ጎይታይ ፍሉይ ኢኻ 
        ተደ፦ስምካ ጥዑም ካብ ኩሉ ዝበለጸ 
              ቃልካ ቅኑዕ ካብ ዓለም ዝተመርጸ 
              ንዓኻ’የ መሪጸ ንኢየሱሰይ ናፊቐ(2)        22       
2.ኣብ ዓለም ናብራ ነዊሕ ተዋሒጠ 
  ካብ ብርሃን ገጽካ ወትሩ ተኸዊለ                         
  ናብራ ህይወተይ ብኹሉ ጸሊእካዮ 
  ልበይ መርሚርካ ብለይቲ በጺሕካዮ 
  ጎይታይ ፍቕርኻ ኣብ ልበይ ዓቂበዮ 
        3.ቃል እግዚ/ር ኩሉ ሳዕ መብራህቲ’ዩ   
           ጸልማት ህይወት ናብ ብርሃን ዝቕይር ኢዩ 
           ቃላት ናይ ኣፍካ ክምገብ ደሪኽካኒ 
           ካብ ጸብሪ ኣውጺእካ ኣብ ከውሒ ኣርጊጽካኒ 
           መቁሕ ናይ ሰይጣን ሴርካ ኣውጺእካኒ 
4.ነብሰይ ክትጠፍእ ፈጺሙ ዘይገብረልካ 
  ርሕሩሕ ሓያል ለዋህ ኣቦ ኢኻ 
  ብዕልልታ ምስጋና ኣሰኒካ 
  ሓጎስ ሰኒቓ ምስጋና ኣበሲራ 
  ኣርያም ክትኣቱ’ዩ እቲ ድሌታትካ `,
    eng: ``
},    
    song80: {
    title: { tig: "ኢራብ ናብ ዓይኒ ማያት", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
   ተደ፦ኢራብ ናብ ዓይኒ ማያት 
         ከም እትናፍቕ 
         ከምኡ ከኣ ነፍሰይ ኦ ኣምላኽ 
         ትናፍቐካ ኣላ(2) 
1.ኣምላኽ ኣበይ ኣሎ ኢሎም ከጨንቑኒ 
 ንብዓት ተቐለብኩ ለይቲ ምስ መዓልቲ 
 ኣብ ቅድሜኻ ክቐውም መዓስ ከም እትመጽእ 
 ነፍሰይ ነቲ ሕያው ኣምላኽ ትጸምእ 
        2.ነፍሰይ ስለምንታይ ትጉህዪ ኣለኺ 
          ንምንታይ ኣብ ውሽጠይ ትህውኽኒ 
          ስለ ምድሓን ገጹ ገና ከመስግኖ’የ 
          ተስፋኺ ኣብ ኣምላኽ ጥራይ ግበሪ 
3.ነፍሰይ ንእግዚ/ር ትጽበዮ ኣላ 
  ከም ቃሉ’ውን ተስፋ ትገብር ኣላ 
  ሓለፋ እቶም ወጋሕታ ዝጽበዩ ሓለውቲ 
  ነፍሰይ ንእግዚ/ር ትጽበዮ ኣላ 
        4.ኣዒንተይ ናብ ኣኽራን አልዕል ኣለኹ 
          ረዲኤተይ ካበይ ኢዩ ዝመጸኒ 
          ረዲኤተይሲ ካብቲ ንሰማይን ምድርን 
          ዝፈጠረ እግዚ/ር ኢዩ ዝመጸኒ `,
    eng: ``
},    
    song81: {
    title: { tig: "ኣይጽገብን ፍቅርኺ", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `  
1.ኣይጽገብን ፍቅርኺ፣ ፍቕርኺ ማርያም 
   ከም ወይኒ ናይ ቃና ከም መዓር  ጽጌናይ 
   ፍቕርኺ፣  ኦ ማርያም። 
           2.ምህለላና ስምዕዮ ንትምኒትና’ዉን ምልኢዮ 
              ሕዮ ማርያም ሕዮ፣ ሕዮ ማርያም ሕዮ 
              ማርያም ሕዮ፣ ማርያም ሕዮ፣ 
3.ዝለመነ ረዲኢትኪ ዝተማሕጸነ ናባኺ 
   ወትሩ ምስ ረኸበ ጸጋ ምስ ኣከበ 
   ትምኒቱ ወትሩ ጸገበ።`,
    eng: ``
},    
    son82: {
    title: { tig: "እንታይ’ሞ ክብል", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ክሽገር ክጭነቕ ኣምላኽ ረዲኡኒ 
 ካብ ዓዘቕቲ ጸልማት ኣናጊፉኒ 
 ብዓቢ ብርሃኑ መንገዲ መሪሑኒ 
 ኣብቲ ልሙዕ ሸኻ ኣውዒሉኒ 
 ንኽለይ ፈቲሑ ደስታ ኣዕጢቑኒ 
   ተደ፦እንታይ’ሞ ክብል ስለቲ ውዕለቱ 
         ብምስጋና ጥራይ ክገልጾ ዕቤቱ 
         ንኸናፍረይ ምስጋና መሊእዎ 
         ሕጅስ ክዝምረሉ’የ ኣፈይ መሊአ 
         ስለቲ ዝገበረለይ ከመስግኖ’የ 
2.በይነይ ከይመስለኒ ኣጸናኒዑኒ 
  ኣብ ግዜ ፍርሓተይ ኣተባቢዑኒ 
  ኣነ’የ ኣምላኽካ ኣጆኻ ኢሉኒ 
  ‘ቲ ዘለኹ’የ ኢሉ ስሙ ነጊሩኒ 
  ብዘይጠፍእ ቆጥቋጥ ኣብ ሲና ተራኢዩኒ 
      3.ኣብቲ ምድረ-በዳ ንሱ ነይሩ ምሳይ 
        ኣብቲ ጎቦታት’ውን ኔሩ’ዩ ኣብ ጎነይ 
        ከይጠሚ ከይጸምእ ንሱ ይሓልየለይ 
        ጸልማተይ ቀንጢጡ ብርሃን ይገብረለይ 
        ክሰርሕ ክዓዪ ርእየዮ ኣምላኸይ 
4.ነቶም ዝጽበይዎ ሰናይ ይኾነሎም 
  ንኽሕልውዎም መላእኽቱ ይሰደሎም 
  ኣእዳዉ ዘርጊሑ ይቀባበሎም 
  ብዉሑድ ተኣሚኖም ኣብ ብዙሕ ይሸሞም 
  ኣእምሮ ከይሓለኖ ሃብቲ የካፍሎም `,
    eng: ``
},    
    song83: {
    title: { tig: "ውዳሴን ጸሎትን", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: ` 
1.ድኹም እንተኾንኩ ከም ሓመድ ከም ሳዕሪ 
 ተቢዐ እጽሊ ኣብ ቅድሚ ፈጣሪ 
 ልበይ ዘይምነዮ ናይዛ ዓለም ደስታ 
 ጠባር መታለሊ እዩ እቲ ሃብታ 
    ተደ፦ውዳሴን ጸሎትን ካብ ልበይ ወሓዘ 
          ናብ ሰማያዊ ኣቦይ ንብዓት ዝደረዘ 
          ንጭንቂ ናይ ልበይ ከም ጸሎት ዝርእዮ 
          ርሕሩሕ’ዩ ኣምላኸይ ሃረርታይ ዘርውዮ 
2.ሓሳበይ ዓቢ’ዩ ኣርሒቑ ዝርኢ 
  ኣየመዛዝንን ምስ ኩሉ ጠፋኢ 
  ኣልምን ኣለኹ ዘልኣለማዊ ሃብቲ 
  ክወርስ ምሳኻ ናይ ዘልኣለም ርስቲ 
       3.ኣእትወኒ ናብቲ ዘልኣለማዊ ሕይወት 
         ክነብር ምሳኻ ሓራ ኮይነ ካብ ሞት 
         ከምዚ ብምዃኑ ሰላም ኣብዚሑለይ 
         ምስጋና ይብጽሓዮ ነቲ ዝሞተለይ 
4.ስብሓት ይኹን ነቲ ካብ ሞት ዘድሓነኒ 
  ምስጋና ይኹን ነቲ ሕይወት ዝሃበኒ 
  ይመስገን ይባረኽ ንዘልኣለም-ኣለም 
  ስሙ ልዕል ይበል ንዘልኣለም-ኣለም `,
    eng: ``
},    
    song84: {
    title: { tig: "Okay", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `10ናይ ሶንግ 10 ትርጉም ...`,
    eng: ``
},    
    song85: {
    title: { tig: "Okay", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `10ናይ ሶንግ 10 ትርጉም ...`,
    eng: ``
},    
    song86: {
    title: { tig: "Okay", eng: "" },
    author: { tig: "", eng: "" },
    album: { tig: "", eng: "" },
    genre: { tig: "", eng: "" },
    date: "",
    youtube: "",
    spotify: "",   
    cover: "images/album1.jpg",
    tig: `10ናይ ሶንግ 10 ትርጉም ...`,
    eng: ``
},
                                    
// … continue incrementally up to song64
};
