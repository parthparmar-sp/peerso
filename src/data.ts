/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, CityInfo, Review, Language } from './types';

export const TRANSLATIONS: Record<string, Record<Language, string> & { hi?: string }> = {
  // Brand
  brandName: {
    gu: 'પીરસો',
    en: 'Piraso',
    hi: 'पिरासो',
  },
  tagline: {
    gu: 'અસલ જગ્યાએથી, આપના થાળ સુધી.',
    en: 'From its true origin, directly to your plate.',
    hi: 'असली जगह से, आपकी थाली तक।',
  },
  missionTitle: {
    gu: 'અમારી પવિત્ર યાત્રા',
    en: 'Our Sacred Journey',
    hi: 'हमारी पवित्र यात्रा',
  },
  missionText: {
    gu: 'પીરસો માત્ર એક ઓનલાઈન સ્ટોર નથી. પીરસો ગુજરાતના ખૂણે ખૂણેથી અસલ સ્વાદ સીધો જ તેમના મૂળ સ્થાનેથી દેશ અને વિદેશમાં વસતા ગુજરાતીઓ સુધી પહોંચાડે છે. દરેક સ્વાદ સાથે જોડાયેલી છે તેના વતનની માટી અને સંસ્કૃતિની સુગંધ.',
    en: 'Piraso is not just an online store. We bring authentic regional specialties directly from their place of origin to Gujaratis living across India and around the world. Every product carries the story, culture, and deep-rooted taste of its hometown.',
    hi: 'पिरासो केवल एक ऑनलाइन स्टोर नहीं है। पिरासो गुजरात के कोने-कोने से असली स्वाद सीधे उनके मूल स्थान से भारत और दुनिया भर में रहने वाले गुजरातियों तक पहुंचाता है। हर स्वाद के साथ उसके वतन की मिट्टी और संस्कृति की महक जुड़ी है।',
  },
  // Sections
  heroHeadline: {
    gu: 'ગુજરાતના ખૂણે ખૂણેથી,\nઅસલ સ્વાદ હવે આપના ઘરે.',
    en: 'From Every Corner of Gujarat,\nAuthentic Taste Directly to Your Home.',
    hi: 'गुजरात के कोने-कोने से,\nअसली स्वाद अब आपके घर।',
  },
  heroSubheadline: {
    gu: 'પીરસો ગુજરાતની પૌરાણિક વાનગીઓ તેના અસલ જન્મસ્થળથી સીધી આપના ઘર સુધી પહોંચાડે છે.',
    en: 'Piraso brings legendary regional foods directly from their true hometown makers directly to your doorstep, anywhere in the world.',
    hi: 'पिरासो गुजरात के प्रामाणिक और पारंपरिक व्यंजनों को उनके असली जन्मस्थान से सीधे आपके घर पहुंचाता है।',
  },
  exploreProducts: {
    gu: 'ઉત્પાદનો જુઓ',
    en: 'Explore Taste',
    hi: 'उत्पाद देखें',
  },
  ourStory: {
    gu: 'અમારી વાર્તા',
    en: 'Our Journey',
    hi: 'हमारी कहानी',
  },
  tasteMapTitle: {
    gu: 'ગુજરાતનો સ્વાદ નકશો',
    en: 'Taste Map of Gujarat',
    hi: 'गुजरात का स्वाद मानचित्र',
  },
  tasteMapSub: {
    gu: 'આ નકશા પર ક્લિક કરો અને ગુજરાતના દરેક તાલુકા અને શહેરની સુપ્રસિદ્ધ કવિતાઓ અને વાનગીઓની સફર માણો.',
    en: 'Interactive map of culinary heritage. Click on any historical center to discover its authentic food and generational story.',
    hi: 'पाक विरासत का इंटरैक्टिव मानचित्र। इसके मूल इतिहास और पारंपरिक स्वाद को जानने के लिए किसी भी केंद्र पर क्लिक करें।',
  },
  whyTitle: {
    gu: 'શા માટે પીરસો?',
    en: 'Why Piraso?',
    hi: 'पिरासो ही क्यों?',
  },
  whySubtitle: {
    gu: 'ગુજરાતી પરંપરા અને વિશ્વાસનું બીજું નામ',
    en: 'Preserving the gold standard of Gujarati authenticity and trust.',
    hi: 'गुजराती परंपरा और अटूट विश्वास का दूसरा नाम',
  },
  searchPlaceholder: {
    gu: 'સ્વાદ અથવા ગામ શોધો...',
    en: 'Search authentic foods or cities...',
    hi: 'स्वाद या शहर खोजें...',
  },
  allCities: {
    gu: 'બધા શહેરો',
    en: 'All Sources',
    hi: 'सभी शहर',
  },
  allCategories: {
    gu: 'બધી કેટેગરી',
    en: 'All Goods',
    hi: 'सभी श्रेणियां',
  },
  categoryFarsan: {
    gu: 'અસલ ફરસાણ',
    en: 'Authentic Farsan',
    hi: 'असली नमकीन / फरसाण',
  },
  categorySweet: {
    gu: 'ખીર અને મીઠાઈ',
    en: 'Heritage Sweets',
    hi: 'पारंपरिक मिठाईयां',
  },
  categoryMix: {
    gu: 'તૈયાર લોટ મિક્સ',
    en: 'Traditional Mixes',
    hi: 'पारंपरिक मिक्स',
  },
  categoryCondiment: {
    gu: 'દેશી ચટણી / અથાણું',
    en: 'Authentic Chutneys',
    hi: 'देशी चटनी और अचार',
  },
  rating: {
    gu: 'રેટિંગ',
    en: 'Rating',
    hi: 'रेटिंग',
  },
  authenticityBadge: {
    gu: '૧૦૦% અસલ વાનગી',
    en: '100% Genuine Origin',
    hi: '100% असली व्यंजन',
  },
  addToCart: {
    gu: 'થાળમાં ઉમેરો',
    en: 'Add to Thaal',
    hi: 'थाली में जोड़ें',
  },
  addedToCart: {
    gu: 'ઉમેરાઈ ગયું!',
    en: 'Added to Thaal!',
    hi: 'थाली में जोड़ा गया!',
  },
  wishlistTitle: {
    gu: 'મારી પસંદગી',
    en: 'My Wishlist',
    hi: 'मेरी पसंद',
  },
  cartTitle: {
    gu: 'આપનો પવિત્ર થાળ',
    en: 'Your Holy Thaal (Cart)',
    hi: 'आपकी थाली (कार्ट)',
  },
  cartEmpty: {
    gu: 'તમારો થાળ અત્યારે ખાલી છે. વતનના મીઠા સ્વાદો થાળમાં ઉમેરો!',
    en: 'Your Thaal is currently empty. Add the warmth of home to your collection!',
    hi: 'आपकी थाली वर्तमान में खाली है। वतन का मीठा स्वाद जोड़ें!',
  },
  checkout: {
    gu: 'ઓર્ડર બુક કરો',
    en: 'Proceed to Checkout',
    hi: 'ऑर्डर बुक करें',
  },
  total: {
    gu: 'કુલ કિંમત',
    en: 'Grand Total',
    hi: 'कुल मूल्य',
  },
  worldHeadline: {
    gu: 'વતનથી દૂર, સ્વાદથી નહીં.',
    en: 'Far from Home, Close to Taste.',
    hi: 'वतन से दूर, स्वाद से नहीं।',
  },
  worldSub: {
    gu: 'પીરસો વિશ્વભરમાં વસતા ૭ કરોડથી વધુ ગુજરાતીઓના હૃદયમાં ઘરની સુગંધ પ્રસરાવે છે.',
    en: 'Serving over 70 million Gujaratis across USA, UK, Canada, Australia, UAE, and Singapore with real-time global tracking.',
    hi: 'पिरासो दुनिया भर में रहने वाले ७ करोड़ से अधिक गुजरातियों के दिलों में घर की महक पहुंचाता है।',
  },
  foundersHeadline: {
    gu: 'પીરસોના પ્રણેતા',
    en: 'Sages & Founders of Piraso',
    hi: 'पिरासो के सूत्रधार',
  },
  foundersSub: {
    gu: 'વતનની માટી અને વારસાને જીવંત રાખવા કટિબદ્ધ યુવા ટીમ.',
    en: 'Empowering local makers and preserving original ancestral food traditions.',
    hi: 'वतन की मिट्टी और विरासत को जीवित रखने के लिए समर्पित युवा टीम।',
  },
  contactHeadline: {
    gu: 'અમારો સંપર્ક કરો',
    en: 'Contact Us',
    hi: 'हमसे संपर्क करें',
  },
  contactSub: {
    gu: 'કોઈપણ પૂછપરછ, બલ્ક ઓર્ડર અથવા વિદેશી નિકાસ માટે સીધો વાતચીત કરો.',
    en: 'Connect for international shipments, festive bulk gifting, or sharing traditional artisan recipes.',
    hi: 'थोक ऑर्डर, अंतर्राष्ट्रीय शिपिंग या पारंपरिक व्यंजनों के लिए हमसे संपर्क करें।',
  },
  feedbackSuccess: {
    gu: 'આપનો સંદેશ સ્વીકારવામાં આવ્યો છે! અમે ટૂંક સમયમાં આપનો સંપર્ક કરીશું.',
    en: 'Your message has been received with respect! We will reach out shortly.',
    hi: 'आपका संदेश प्राप्त हो गया है! हम जल्द ही आपसे संपर्क करेंगे।',
  },
  footerText: {
    gu: 'પીરસો એ ગુજરાતી અસ્મિતા, સંસ્કૃતિ અને પવિત્ર સ્વાદનું વૈશ્વિક પ્રતીક છે.',
    en: 'Piraso is a global symbol of Gujarati identity, rich culinary heritage, and pure authentic taste.',
    hi: 'पिरासो गुजराती पहचान, संस्कृति और शुद्ध प्रामाणिक स्वाद का वैश्विक प्रतीक है।',
  },
};

export const CITIES: Record<string, CityInfo> = {
  gariyadhar: {
    id: 'gariyadhar',
    name: { gu: 'ગારિયાધાર', en: 'Gariyadhar', hi: 'गारियाधार' },
    story: {
      gu: 'જિલ્લો ભાવનગરનું શાંત ગામ, જે અસલ કાળી અને અપ્રતિમ ઘીની વાનગીઓ માટે સૌરાષ્ટ્રમાં પૂજાય છે.',
      en: 'A legendary town in Bhavnagar district, globally worshiped in Saurashtra for its melting black caramelized sweets.',
      hi: 'भावनगर जिले का एक ऐतिहासिक कस्बा, जो सौराष्ट्र में अपनी गहरी घी-आधारित पारंपरिक मिठाइयों के लिए जाना जाता है।',
    },
    products: ['gariyadhar_kali'],
    x: 48,
    y: 74,
  },
  ranghola: {
    id: 'ranghola',
    name: { gu: 'રંઘોળા', en: 'Ranghola', hi: 'रंगहोला' },
    story: {
      gu: 'હાઈવે પરનું મોહક ગામ, જેને તીખી, મરીવાળી અને ખરબચડી અસલ ફૂલવડી માટે આખી દુનિયા જાણે છે.',
      en: 'A vibrant highway village, universally famous for its crunchy pepper-studded traditional Fulwadi.',
      hi: 'राजमार्ग पर बसा एक आकर्षक गाँव, जो अपनी तीखी और कुरकुरी पारंपरिक फुलवड़ी के लिए प्रसिद्ध है।',
    },
    products: ['ranghola_fulwadi', 'jetpur_fulwadi'],
    x: 52,
    y: 70,
  },
  bhavnagar: {
    id: 'bhavnagar',
    name: { gu: 'ભાવનગર', en: 'Bhavnagar', hi: 'भावनगर' },
    story: {
      gu: 'ગાંઠિયાનું પાટનગર! અહીંની હવા અને પાણી મરી અને અજમાથી ભરપૂર સોફ્ટ ગાંઠિયા માટે આશીર્વાદરૂપ છે.',
      en: 'The epic capital of Ganthiya! The coastal breeze and local alkaline water give Bhavnagar Ganthiya its legendary melting fluffiness.',
      hi: 'गांठिया की राजधानी! यहाँ की जलवायु और पानी भावनगरी गांठिया को इसकी विशेष कोमलता और स्वाद प्रदान करते हैं।',
    },
    products: ['bhavnagar_ganthiya', 'kathiawadi_mari_ganthiya'],
    x: 58,
    y: 72,
  },
  khambhat: {
    id: 'khambhat',
    name: { gu: 'ખંભાત', en: 'Khambhat', hi: 'खंभात' },
    story: {
      gu: 'પ્રાચીન બંદર અને ખંભાતની ખાડી, જ્યાંથી હલવાસન અને સુતરફેણી જેવી અદ્ભુત વાનગીઓનો ઇતિહાસ જોડાયેલો છે.',
      en: 'A historic harbor town on the Gulf of Khambhat, conserving medieval Persian-influenced recipes of Halvasan and Sutarfeni.',
      hi: 'खंभात की खाड़ी पर बसा ऐतिहासिक बंदरगाह, जहाँ सदियों से हलवासन और सूतरफेनी का निर्माण किया जा रहा है।',
    },
    products: ['khambhat_halvasan', 'khambhat_sutarfeni', 'khambhat_papad_chavanu'],
    x: 64,
    y: 56,
  },
  palitana: {
    id: 'palitana',
    name: { gu: 'પાલિતાણા', en: 'Palitana', hi: 'पालीताणा' },
    story: {
      gu: 'જૈન તીર્થધામ, જે તેના અત્યંત શુદ્ધ, પાતળા, અને હેલ્ધી દેશી ઘઉંના ખાખરા માટે જગપ્રસિદ્ધ છે.',
      en: 'The divine city of temples, renowned for producing the thinnest, light-roasted organic wheat Khakhra.',
      hi: 'मंदिरों की पवित्र नगरी, जो अपने अत्यंत पतले और कुरकुरे गेहूं के पारंपरिक खाखरा के लिए जानी जाती है।',
    },
    products: ['palitana_khakhra'],
    x: 50,
    y: 78,
  },
  rajkot: {
    id: 'rajkot',
    name: { gu: 'રાજકોટ', en: 'Rajkot', hi: 'राजकोट' },
    story: {
      gu: 'રંગીલું રાજકોટ રંગબેરંગી ચટણીઓ, ગરમાગરમ પેંડા અને ખાસ તીખી લસણ ચટણી માટે જાણીતું છે.',
      en: 'The heart of colorful Saurashtra, iconic for spicy, fiery garlic chutneys that fuel everyday Kathiawadi cuisine.',
      hi: 'रंगीला राजकोट, जो अपनी चटपटी और तीखी लहसुन चटनी तथा सौराष्ट्र के सांस्कृतिक स्वादों के लिए विख्यात है।',
    },
    products: ['rajkot_lasan_chatni'],
    x: 40,
    y: 65,
  },
  jamnagar: {
    id: 'jamnagar',
    name: { gu: 'જામનગર', en: 'Jamnagar', hi: 'जामनगर' },
    story: {
      gu: 'મહારાજાઓનું નગર, જે તેજાનાઓ અને ખારા-મોળા મસાલાઓ અને ખાસ મેથી ગોટા મિક્સ માટે વિખ્યાત છે.',
      en: 'The royal city of King Jam, celebrated for its robust digestive fenugreek fritters and complex spices.',
      hi: 'जाम साहेब की शाही नगरी, जो अपने मसालों और पारंपरिक मेथी गोटा के स्वादिष्ट घोल के लिए सुप्रसिद्ध है।',
    },
    products: ['jamnagar_methi_gota'],
    x: 28,
    y: 62,
  },
  junagadh: {
    id: 'junagadh',
    name: { gu: 'જૂનાગઢ', en: 'Junagadh', hi: 'जूनागढ़' },
    story: {
      gu: 'ગિરનારની ગોદમાં વસેલું પ્રાચીન શહેર, જે પરંપરાગત પાપડી ગાંઠિયા અને કેસર કેરીના સ્વાદ માટે જાણીતું છે.',
      en: 'An ancient citadel nested in the foothills of Mount Girnar, famous for its rustic wide Papdi Ganthiya.',
      hi: 'गिरनार पर्वत की तलहटी में बसा प्राचीन शहर, जो अपनी खास पापड़ी गांठिया के अनूठे स्वाद के लिए प्रसिद्ध है।',
    },
    products: ['junagadh_papdi_ganthiya'],
    x: 34,
    y: 76,
  },
  morbi: {
    id: 'morbi',
    name: { gu: 'મોરબી', en: 'Morbi', hi: 'मोरबी' },
    story: {
      gu: 'કલાત્મક મચ્છુ નદીનું શહેર, જે મસાલેદાર ચવાણું અને ડાબેરી નમકીન સંસ્કૃતિ માટે પ્રખ્યાત છે.',
      en: 'The master craft city, famous across India for its crunchy multidimensional spicy-sweet Morbi Chavanu.',
      hi: 'कलात्मक औद्योगिक शहर, जो अपने चटपटे और कुरकुरे मोरबी चवाणु के लिए विख्यात है।',
    },
    products: ['morbi_chavanu'],
    x: 38,
    y: 56,
  },
  porbandar: {
    id: 'porbandar',
    name: { gu: 'પોરબંદર', en: 'Porbandar', hi: 'पोरबंदर' },
    story: {
      gu: 'જગત પિતા મહાત્મા ગાંધીના જન્મ વતનની સોગાત - સ્પાઈસી પોરબંદરી તીખી સેવ.',
      en: 'The serene seaside birthplace of Mahatma Gandhi, celebrated for its crisp, garlic-chili infused Tikhi Sev.',
      hi: 'महात्मा गांधी की पावन जन्मस्थली, जो अपने तीखे और कुरकुरे पोरबंदरी तीखी सेव के लिए प्रसिद्ध है।',
    },
    products: ['porbandar_tikhi_sev'],
    x: 22,
    y: 72,
  },
  surendranagar: {
    id: 'surendranagar',
    name: { gu: 'સુરેન્દ્રનગર', en: 'Surendranagar', hi: 'सुरेंद्रनगर' },
    story: {
      gu: 'ઝાલાવાડનો દ્વારપાળ, જે પોતાના કઠોળ, સૂકા મસાલા અને ધારદાર તીખા સુરેન્દ્રનગરી ગાંઠિયા માટે મશહૂર છે.',
      en: 'The gateway of Zalawad region, highly cherished for its extra-crisp, sharp, hot-spiced Ganthiya.',
      hi: 'झालावाड़ का प्रवेश द्वार, जो अपने तीखे और लंबे समय तक सुरक्षित रहने वाले पारंपरिक गांठिया के लिए प्रसिद्ध है।',
    },
    products: ['surendranagar_tikha_ganthiya'],
    x: 48,
    y: 57,
  },
  talaja: {
    id: 'talaja',
    name: { gu: 'તળાજા', en: 'Talaja', hi: 'तळाजा' },
    story: {
      gu: 'નરસિંહ મહેતાની જન્મભૂમિ, જે શેત્રુંજી નદીના કળણવાળા વિસ્તારો અને સુગંધિત અજમો-મરી ગાંઠિયા માટે જાણીતું છે.',
      en: 'The sacred birthplace of poet Narsinh Mehta, offering ancient fragrant medium-thin local Ganthiya recipes.',
      hi: 'भक्त कवि नरसिंह मेहता की पावन जन्मभूमि, जो अपने खुशबूदार और स्वादिष्ट पतले अजवायन-काले मिर्च गांठिया के लिए जानी जाती है।',
    },
    products: ['talaja_ganthiya'],
    x: 56,
    y: 78,
  },
  jetpur: {
    id: 'jetpur',
    name: { gu: 'જેતપુર', en: 'Jetpur', hi: 'जेतपुर' },
    story: {
      gu: 'બાંધણી અને પ્રિન્ટિંગનું કેન્દ્ર, જે તેજસ્વી તીખી ફૂલવડી તેમજ તળપદી મસાલા કોટિંગ માટે પણ પ્રખ્યાત છે.',
      en: 'The world of block print and textiles, which also masters dense, sesame-coated cylindrical Fulwadi.',
      hi: 'बंधेज और पारंपरिक कला का केंद्र, जो अपनी शानदार कुरकुरी तिल और मसालों से लिपटी जेतपुरी फुलवड़ी के लिए प्रसिद्ध है।',
    },
    products: ['jetpur_fulwadi'],
    x: 39,
    y: 70,
  },
  mahuva: {
    id: 'mahuva',
    name: { gu: 'મહુવા', en: 'Mahuva', hi: 'महुवा' },
    story: {
      gu: 'સૌરાષ્ટ્રનું કાશ્મીર, જે તેની લીલી નાળિયેરીઓ, કાજુ અને કરકરી દેશી ગોળ આધારિત સિંગ ચિક્કી માટે પ્રખ્યાત છે.',
      en: 'The Kashmir of Saurashtra, blessed with processing pure jaggery and highly roasted peanut Chikki.',
      hi: 'सौराष्ट्र का कश्मीर, जो अपनी हरी-भरी नारियल की वादियों और उत्तम पारंपरिक गुड़-मूंगफली की चिक्की के लिए प्रसिद्ध है।',
    },
    products: ['mahuva_chikki'],
    x: 53,
    y: 82,
  },
  gondal: {
    id: 'gondal',
    name: { gu: 'ગોંડલ', en: 'Gondal', hi: 'गोंडल' },
    story: {
      gu: 'મહારાજા ભગવતસિંહજીની ભૂમિ, જે તેના તેજસ્વી લાલ મરચાં (ગોંડલના પટ્ટા) માટે આખા વૈશ્વિક ક્ષેત્રમાં શિરમોર છે.',
      en: 'The princely state of Bhagvatsinhji, globally revered for its hot, vibrant red Gondal chilies and stuffed pickles.',
      hi: 'महाराजा भगवतसिंहजी की ऐतिहासिक भूमि, जो अपनी विश्वप्रसिद्ध गोंडपट्ट लाल मिर्च और भरवां अचार के लिए प्रसिद्ध है।',
    },
    products: ['gondal_dabela_marcha'],
    x: 41,
    y: 68,
  },
  bharuch: {
    id: 'bharuch',
    name: { gu: 'ભરૂચ', en: 'Bharuch', hi: 'भरूच' },
    story: {
      gu: 'નર્મદા નદીનું પ્રાચીન નગર, જે નદીની ભીની માટીમાં શેકાતી અસલ ખારી સિંગ માટે જાણીતું છે.',
      en: 'The ancient city on the sacred Narmada, worldwide synonymous with smoky, sand-roasted Khari Sing directly from source.',
      hi: 'पवित्र नर्मदा के तट पर बसा प्राचीन शहर, जो नदी की रेत में भुनी हुई सौंधी और खारी मूंगफली (खारी सींग) के लिए सुप्रसिद्ध है।',
    },
    products: ['bharuch_khari_sing'],
    x: 66,
    y: 64,
  },
  hanol: {
    id: 'hanol',
    name: { gu: 'હનોલ', en: 'Hanol', hi: 'हानोल' },
    story: {
      gu: 'મધ્ય ગુજરાતનું નાનકડું કેન્દ્ર, જે દૂધ મલાઈના અત્યંત સ્વાદિષ્ટ અને પરંપરાગત થાબડી પેંડા બનાવવા માટે જાણીતું છે.',
      en: 'A heritage dairy hamlet, conserving original techniques of slow-iron caramelized, rich milk Thabdi Penda.',
      hi: 'मध्य गुजरात का एक छोटा सा गाँव, जो दूध को लोहे की कढ़ाई में धीमी आंच पर पकाकर बनाई जाने वाली पारंपरिक थाबड़ी पेड़ा के लिए विख्यात है।',
    },
    products: ['hanol_thabdi_penda'],
    x: 72,
    y: 53,
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'gariyadhar_kali',
    name: { gu: 'ગારિયાધારની અસલ કાળી', en: 'Gariyadhar ni Kali', hi: 'गारियाधार की असली काली' },
    story: {
      gu: 'આ સોફ્ટ સ્વીટ એક દાયકા પહેલાના રાજવી રસોઇથી પ્રભાવિત છે. ઘઉં કણક અર્ક, ચોખ્ખા ઘી અને સાકરનું આ અદ્ભુત મિશ્રણ મોંમાં ઓગળી જાય છે.',
      en: 'A royal heritage sweet crafted from premium wheat extract and pure hand-churned ghee, caramelized to a deep rich color that melts in your mouth.',
      hi: 'यह कोमल मिठाई दशकों पुरानी राजसी शैली से बनी है। गेहूं के सत्व, शुद्ध घी और चीनी का यह अनोखा मिश्रण मुंह में जाते ही घुल जाता है।'
    },
    origin: 'gariyadhar',
    originName: { gu: 'ગારિયાધાર', en: 'Gariyadhar', hi: 'गारियाधार' },
    price: 380,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    category: 'sweet',
    isAuthentic: true,
    rating: 4.9,
  },
  {
    id: 'ranghola_fulwadi',
    name: { gu: 'રંઘોળાની સુપ્રસિદ્ધ ફૂલવડી', en: 'Ranghola ni Fulwadi', hi: 'रंगहोला की प्रसिद्ध फुलवड़ी' },
    story: {
      gu: 'આખા મરી અને વરિયાળીનો ભરપૂર ઉપયોગ કરીને તળાયેલી વજ્ર જેવી કડક અને ચટાકેદાર રંઘોળા ફૂલવડીનો સ્વાદ એકવાર ચાખો તો ભુલાય નહીં.',
      en: 'Traditional robust, cylindrical gram flour snacks spiced with crushed black pepper, fennel, and white sesame seeds, fried to crispy perfection.',
      hi: 'साबुत काली मिर्च और सौंफ के भरपूर उपयोग से तली हुई यह कड़क और चटपटी फुलवड़ी अपने अनोखे सौराष्ट्र के स्वाद के लिए जानी जाती है।'
    },
    origin: 'ranghola',
    originName: { gu: 'રંઘોળા', en: 'Ranghola', hi: 'रंगहोला' },
    price: 180,
    weight: '400g',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.8,
  },
  {
    id: 'bharuch_khari_sing',
    name: { gu: 'ભરૂચની અસલ ખારી સિંગ', en: 'Bharuch ni Khari Sing', hi: 'भरूच की असली खारी सींग' },
    story: {
      gu: 'નર્મદાના મીઠા સિંગદાણા જે ભરૂચની ખાસ રેતીમાં પરંપરાગત પદ્ધતિથી પકવવામાં આવે છે. દેશી જમીનની કુદરતી સોડમ ધરાવતી મીઠાશ.',
      en: 'Jumbo-sized organic peanuts dry-roasted in traditional sand ovens. Perfectly salted with a subtle woody and smoky heritage aroma.',
      hi: 'नर्मदा के बड़े मूंगफली के दाने, जिन्हें भरूच की विशेष रेत में पारंपरिक रूप से सेंका जाता है। इसकी सौंधी महक और कुरकुरापन अद्भुत है।'
    },
    origin: 'bharuch',
    originName: { gu: 'ભરૂચ', en: 'Bharuch', hi: 'भरूच' },
    price: 190,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.9,
  },
  {
    id: 'khambhat_halvasan',
    name: { gu: 'ખંભાતનું શાહી હલવાસન', en: 'Khambhat nu Halvasan', hi: 'खंभात का शाही हलवासन' },
    story: {
      gu: 'ઘઉંના ભરડા, બાવળનો ગુંદર, આરાધના મસાલા અને પવિત્ર દૂધમાંથી દાયકાઓ જૂની પદ્ધતિથી કલાકો સુધી ઉકાળીને બનાવેલી સ્વાદિષ્ટ મીઠાઈ.',
      en: 'A legendary sweet made from slow-cooked cracked wheat, milk, edible gum, and aromatic spices. Highly nutritious and wonderfully chewy.',
      hi: 'दलिया, बबूल के गोंद, दूध और इलायची-जायफल को घंटों धीमी आंच पर पकाकर बनाई जाने वाली यह ताकतवर और स्वादिष्ट पारंपरिक मिठाई है।'
    },
    origin: 'khambhat',
    originName: { gu: 'ખંભાત', en: 'Khambhat', hi: 'खंभात' },
    price: 420,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600',
    category: 'sweet',
    isAuthentic: true,
    rating: 4.9,
  },
  {
    id: 'khambhat_sutarfeni',
    name: { gu: 'ખંભાતની સિલ્કી સુતરફેણી', en: 'Khambhat ni Sutarfeni', hi: 'खंभात की सूतरफेनी' },
    story: {
      gu: 'ખીરના નાજુક તાંતણા જેવી, શુદ્ધ દેશી ઘીમાં લપેટી અને સાકરના સ્નો જેવા તારમાં ગૂંથેલી. તહેવારોમાં મોભાદાર સ્થાન ધરાવતી ધરોહર.',
      en: 'Thread-like fine vermicelli sweet made of refined wheat flour and pure ghee, dusted with cardamom and pistachios. Airy and royal.',
      hi: 'दूध और मैदे के रेशम जैसे पतले धागों को शुद्ध घी में भूनकर और मिश्री की नाजुक चाशनी में भिगोकर बनाई जाने वाली अत्यंत कोमल सूतरफेनी।'
    },
    origin: 'khambhat',
    originName: { gu: 'ખંભાત', en: 'Khambhat', hi: 'खंभात' },
    price: 360,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600',
    category: 'sweet',
    isAuthentic: true,
    rating: 4.88,
  },
  {
    id: 'hanol_thabdi_penda',
    name: { gu: 'હનોલના દેશી થાબડી પેંડા', en: 'Hanol na Thabdi Penda', hi: 'हानोल के देशी थाबड़ी पेड़े' },
    story: {
      gu: 'લોખંડના મોટા તાવડામાં દૂધ અને સાકરને કલાકો સુધી સતત હલાવીને બનાવેલી રવેદાર અને અત્યંત પૌષ્ટિક વિશિષ્ટ કાઠિયાવાડી મીઠાઈ.',
      en: 'Traditional granular, deep-brown milk cakes slow-cooked in iron vessels, offering a caramelized butterscotch-like taste.',
      hi: 'लोहे के बड़े कड़ाह में दूध और चीनी को घंटों हिलाकर तैयार किए जाने वाले सुनहरे भूरे रंग के रवेदार और अत्यंत पौष्टिक पेड़े।'
    },
    origin: 'hanol',
    originName: { gu: 'હનોલ', en: 'Hanol', hi: 'हानोल' },
    price: 480,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    category: 'sweet',
    isAuthentic: true,
    rating: 4.95,
  },
  {
    id: 'rajkot_lasan_chatni',
    name: { gu: 'રાજકોટની લાલ લસણ ચટણી', en: 'Rajkot ni Lasan Chatni', hi: 'राजकोट की लाल लहसुन चटनी' },
    story: {
      gu: 'ગોંડલ મરચાં અને તાજી કળીઓના દેશી લસણની વાટેલી ઓરિજિનલ મસાલેદાર ચટણી. જે આપના ગાભણી બાજરી રોટલા પર ચાર ચાંદ લગાવી દેશે.',
      en: 'A fiery paste made from peak-season Gondal red chilies and native mountain garlic, preserved under dynamic cold-pressed mustard oil.',
      hi: 'राजकोट की अद्वितीय तीखी चटाकेदार लहसुन-लाल मिर्च चटनी, जिसे बाजरे की रोटी और घी के साथ परोसा जाता है। वतन का असली स्वाद।'
    },
    origin: 'rajkot',
    originName: { gu: 'રાજકોટ', en: 'Rajkot', hi: 'राजकोट' },
    price: 120,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600',
    category: 'condiment',
    isAuthentic: true,
    rating: 4.9,
  },
  {
    id: 'jamnagar_methi_gota',
    name: { gu: 'જામનગરના વીઆઈપી મેથી ગોટા મિક્સ', en: 'Jamnagar na Methi Gota Mix', hi: 'जामनगर का वीआईपी मेथी गोटा मिक्स' },
    story: {
      gu: 'ફક્ત પાણી ઉમેરીને તાવડામાં જામનગરી પરંપરાગત રીતથી બનાવો એકદમ પોચા, જાળીદાર અને સુગંધીદાર મેથીના ભજીયા.',
      en: 'An ancestral instant flour prep featuring aromatic dried fenugreek leaves and secret digestive-friendly ground coriander-pepper pods.',
      hi: 'जामनगर के प्रसिद्ध मेथी वड़े का प्रीमिक्स। पानी मिलाकर गूंथें और हरी चटनी व कढ़ी के साथ परोसने के लिए जालीदार गोटा तैयार करें।'
    },
    origin: 'jamnagar',
    originName: { gu: 'જામનગર', en: 'Jamnagar', hi: 'जामनगर' },
    price: 140,
    weight: '400g',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    category: 'mix',
    isAuthentic: true,
    rating: 4.8,
  },
  {
    id: 'porbandar_tikhi_sev',
    name: { gu: 'પોરબંદરની મસાલેદાર તીખી સેવ', en: 'Porbandar ni Tikhi Sev', hi: 'पोरबंदर की मसालेदार तीखी सेव' },
    story: {
      gu: 'જિલોદરા મરચું અને લસણના હલકા કચરા સાથે તળાયેલી કરકરી ચણાના લોટની બેજોડ સેવ જે મોંમાં કડાકો બોલાવે છે.',
      en: 'Thin and crunchy gram flour noodles spiked with premium crushed chili pods and ancient asafoetida. Perfect crispy bite.',
      hi: 'महीन कुरकुरी मसालेदार बेसन की सेव, जिसे लाल मिर्च और हींग के तीखे घोल में तैयार कर देशी रिफाइंड घी या मूंगफली तेल में तला जाता है।'
    },
    origin: 'porbandar',
    originName: { gu: 'પોરબંદર', en: 'Porbandar', hi: 'पोरबंदर' },
    price: 170,
    weight: '400g',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.75,
  },
  {
    id: 'junagadh_papdi_ganthiya',
    name: { gu: 'જૂનાગઢના સોડા પાપડી ગાંઠિયા', en: 'Junagadh na Papdi Ganthiya', hi: 'जूनागढ़ के कुरकुरे पापड़ी गांठिया' },
    story: {
      gu: 'ગિરનારની તળેટીમાં કઢી સાથે પીરસાતી અદ્ભુત પર્ણ-આકારની પાપડી, જેમાં સાજીખારની નરમ અસર વરતાય છે.',
      en: 'Wide, ribbon-like gram flour wafers crisp-fried using pristine spring salts. Flaky and exceptional with sweet papaya sambharo.',
      hi: 'चौड़ी, चपटी और कुरकुरी सौराष्ट्र की पारंपरिक पापड़ी, जो खाने में अत्यंत कोमल है और पपीते की तीखी चटनी के साथ अद्भुत लगती है।'
    },
    origin: 'junagadh',
    originName: { gu: 'જૂનાગઢ', en: 'Junagadh', hi: 'जूनागढ़' },
    price: 180,
    weight: '400g',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.85,
  },
  {
    id: 'morbi_chavanu',
    name: { gu: 'મોરબીનું ખાટું-મીઠું મિક્સ ચવાણું', en: 'Morbi nu Chavanu', hi: 'मोरबी का खट्टा-मीठा चवाणु' },
    story: {
      gu: 'પૌંઆ, સેવ, પિંચ ઓફ સાકર, દાણા અને દ્રાક્ષની સુંદર મેળવણી. ચાની લિજ્જત અને ઘરના મહેમાનોના સ્વાગત માટે બેસ્ટ.',
      en: 'A legendary master blend of crispy flattened rice flakes, spiced peanuts, fried lentils, and sugary-tangy wild raisins.',
      hi: 'चूड़ा, बूंदी, सेव, मूंगफली और किशमिश का वह खट्टा-मीठा सौराष्ट्र का मिक्स नमकीन जो हर चाय मंडली का प्रिय है।'
    },
    origin: 'morbi',
    originName: { gu: 'મોરબી', en: 'Morbi', hi: 'मोरबी' },
    price: 175,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.9,
  },
  {
    id: 'surendranagar_tikha_ganthiya',
    name: { gu: 'સુરેન્દ્રનગરના તીખા ગાંઠિયા', en: 'Surendranagar na Tikha Ganthiya', hi: 'सुरेंद्रनगर के तीखे गांठिया' },
    story: {
      gu: 'ઝાલાવાડનો મસાલેદાર ગરમાટો, જે અસલ વતનના મરી-મસાલા અને વિશેષ કડક ગુણવત્તા માટે લોકપ્રિય છે.',
      en: 'Crunchy gram-flour ropes seasoned with hot local black peppers. Gives a hearty and cozy traditional winter warmth.',
      hi: 'सुरेंद्रनगर के प्रसिद्ध तीखे और कुरकुरे सीधे गांठिया, जो काली मिर्च और लौंग के तीखे पन के कारण लोकप्रिय हैं।'
    },
    origin: 'surendranagar',
    originName: { gu: 'સુરેન્દ્રનગર', en: 'Surendranagar', hi: 'सुरेंद्रनगर' },
    price: 165,
    weight: '400g',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.8,
  },
  {
    id: 'gondal_dabela_marcha',
    name: { gu: 'ગોંડલના મસાલા દાબેલા મરચાં', en: 'Gondal na Dabela Marcha', hi: 'गोंडल की भरी हुई लाल मिर्च' },
    story: {
      gu: 'રાયડાના કુરિયા, હિંગ, અને હળદરથી સજ્જ રાયતા મરચાં. ભારતીય ભોજનમાં સત્વરે વતનની યાદ આપતી ખાટી-તીખી સાથી.',
      en: 'Vibrant local green and red chilis stuffed with authentic split mustard seeds, asafoetida, and traditional sour lemon juice.',
      hi: 'गोंडल की प्रसिद्ध कम तीखी लाल मिर्च जिसे सरसों के कुरिए, हींग, नमक और शुद्ध तेल के साथ भरकर बनाया जाता है।'
    },
    origin: 'gondal',
    originName: { gu: 'ગોંડલ', en: 'Gondal', hi: 'गोंडल' },
    price: 210,
    weight: '350g',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600',
    category: 'condiment',
    isAuthentic: true,
    rating: 4.9,
  },
  {
    id: 'jetpur_fulwadi',
    name: { gu: 'જેતપુરની રોયલ તલ ફૂલવડી', en: 'Jetpur ni Fulwadi', hi: 'जेतपुर की शाही तिल फुलवड़ी' },
    story: {
      gu: 'સફેદ તલની જાડી ચાદર ધરાવતી નરમ-કરકરી દેશી જેતપુર શૈલીની ફૂલવડી. ભક્તિ પર્વમાં સંતોના આશીર્વાદ સમાન પવિત્ર પ્રસાદ.',
      en: 'A specialized iteration of sesame-wrapped crispy gram flour roll-bites. Balanced sweet-sour-spice profile.',
      hi: 'जेतपुर की पारंपरिक बेसन की फुलवड़ी जिस पर सफेद तिल की मोटी परत होती है। यह खट्टा-मीठा स्वाद सबका मन मोह लेता है।'
    },
    origin: 'jetpur',
    originName: { gu: 'જેતપુર', en: 'Jetpur', hi: 'जेतपुर' },
    price: 195,
    weight: '400g',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.8,
  },
  {
    id: 'talaja_ganthiya',
    name: { gu: 'તળાજાના જાદુઈ પોચા ગાંઠિયા', en: 'Talaja na Ganthiya', hi: 'तळाजा के खुशबूदार गांठिया' },
    story: {
      gu: 'જિલ્લા ભાવનગરના આ નાનકડા ગામનું રહસ્ય તેના ગાંઠિયે-ગાંઠિયામાં છે. અત્યંત હળવા અને પાચક દાર અજમાથી સજ્જ વાનગી.',
      en: 'Medium-thin, savory chickpea noodles with digestive herbs. Easy to chew, highly addictive local afternoon snack.',
      hi: 'नरसिंह मेहता की जन्मभूमि के ये स्वादिष्ट मुलायम गांठिया, जो अजवायन व सौंफ के प्राचीन मसालों के स्वाद से युक्त हैं।'
    },
    origin: 'talaja',
    originName: { gu: 'તળાજા', en: 'Talaja', hi: 'تળાजा' },
    price: 160,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.82,
  },
  {
    id: 'mahuva_chikki',
    name: { gu: 'મહુવાની ગોળ-સિંગ અમૃત ચિક્કી', en: 'Mahuva ni Chikki', hi: 'महुवा की गुड़-सींग अमर चिक्की' },
    story: {
      gu: 'ધીમી જ્યોત પર પકવેલા ઓર્ગેનિક દેશી ગોળ અને સોના જેવા પીળા શેકેલા સિંગદાણાની કડક ચીકણી જે શરીરને અખૂટ શક્તિ અર્પે છે.',
      en: 'Crisp, shiny, glass-textured peanut brittle rolled using premium native red organic jaggery and highly roasted nut splits.',
      hi: 'बिना नकली मिठास के, शुद्ध देशी गुड़ और भुनी हुई रसीली मूंगफली को जमाकर बनाई गई एकदम कुरकुरी और पौष्टिक चिक्की।'
    },
    origin: 'mahuva',
    originName: { gu: 'મહુવા', en: 'Mahuva', hi: 'महुवा' },
    price: 220,
    weight: '450g',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600',
    category: 'sweet',
    isAuthentic: true,
    rating: 4.92,
  },
  {
    id: 'khambhat_papad_chavanu',
    name: { gu: 'ખંભાતનું શાહી પાપડ ચવાણું', en: 'Khambhat nu Papad Chavanu', hi: 'खंभात का शाही पापड़ चवाणु' },
    story: {
      gu: 'ક્રસ્ડ અડદના પાપડ, હળવા પાતળા પૌંઆ અને સંચળના છંટકાવવાળી આ વિશિષ્ટ ખંભાતી તીખી-મીઠી કલ્ટ ક્લાસિક નમકીન.',
      en: 'A unique cultural recipe that combines hand-crushed black gram crisp wafers (papad), corn flakes, and roasted cumin salt.',
      hi: 'उड़द के पापड़ के टुकड़ों और सौंफ-जीरे के स्वादिष्ट छौंक के साथ बनाया गया खंभात का राजा-महाराजाओं के समय का नमकीन।'
    },
    origin: 'khambhat',
    originName: { gu: 'ખંભાત', en: 'Khambhat', hi: 'खंभात' },
    price: 185,
    weight: '450g',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.88,
  },
  {
    id: 'kathiawadi_mari_ganthiya',
    name: { gu: 'કાઠિયાવાડી તીખા મરી ગાંઠિયા', en: 'Kathiawadi Mari Ganthiya', hi: 'काठियावाड़ी तीखे काली मिर्च गांठिया' },
    story: {
      gu: 'જૂના જમાનાની વિરાસત! કાઠિયાવાડના ઘરે-ઘરે વહેલી સવારે બનતા સોફ્ટ ગાંઠિયા જે મોંમાં મુકતા જ દમાસ અને સ્વાદની હેલી સર્જે છે.',
      en: 'A classical country-style dense chickpea dough extruded into soft cushions heavily loaded with coarse, single-harvest black peppers.',
      hi: 'काठियावाड़ की ग्रामीण शैली का मोटा कोमल गांठिया, जिसमें कुटी हुई ताजी काली मिर्च का तीखापन व शुद्ध हींग की महक घुली होती है।'
    },
    origin: 'bhavnagar',
    originName: { gu: 'ભાવનગર', en: 'Bhavnagar', hi: 'ભાવાગાર' },
    price: 170,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    category: 'farsan',
    isAuthentic: true,
    rating: 4.95,
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: '1',
    name: 'Praful & Daxaben Patel',
    location: {
      gu: 'ટોરોન્ટો, કેનેડા',
      en: 'Toronto, Canada',
      hi: 'टोरंटो, कनाडा',
    },
    text: {
      gu: 'મેં છેલ્લા ૧૨ વર્ષથી અસલ ગારિયાધારની કાળી ચાખી નહોતી. પીરસોના થાળમાંથી બપોરે ખાતા જ આંખમાં વતનના ઘરની ધૂળ ઊડી આવી. દિલથી આભાર!',
      en: "I had not tasted real Gariyadhar Kali in 12 years. Eating Piraso's authentic pack at lunch brought back vivid memories of our ancestral porch. Truly wonderful!",
      hi: 'मैंने पिछले 12 वर्षों से असली गारियाधार की काली नहीं खाई थी। पिरासो की थाली से खाते ही मेरी आँखों के सामने पुराना बचपन और गाँव ताजा हो गया। दिल से धन्यवाद!',
    },
    productName: {
      gu: 'ગારિયાધારની અસલ કાળી',
      en: 'Gariyadhar ni Kali',
      hi: 'गारियाधार की असली काली',
    },
  },
  {
    id: '2',
    name: 'Suhail Shah',
    location: {
      gu: 'લંડન, યુકે',
      en: 'London, UK',
      hi: 'लंदन, यूके',
    },
    text: {
      gu: 'રંઘોળાની ફૂલવડી અને ચા. લંડનની રવિવારની ઠંડી સવાર જામી ગઈ. લાગે જ નહીં કે આપણે વતનથી સાત દરિયા પાર બેઠા છીએ. બેજોડ ગુણવત્તા.',
      en: "Best tea partner ever! The crunch of Ranghola ni Fulwadi with London's freezing Sunday rain took me right back to our Vadodara highway trips.",
      hi: 'रंगहोला की फुलवड़ी और चाय ने लंदन की कंपकंपाती सुबह को यादगार बना दिया। ऐसा महसूस ही नहीं हुआ कि हम सात समंदर दूर हैं। लाजवाब गुणवत्ता!',
    },
    productName: {
      gu: 'રંઘોળાની સુપ્રસિદ્ધ ફૂલવડી',
      en: 'Ranghola ni Fulwadi',
      hi: 'रंगहोला की प्रसिद्ध फुलवड़ी',
    },
  },
  {
    id: '3',
    name: 'Pooja Mehta',
    location: {
      gu: 'બેંગલુરુ, ભારત',
      en: 'Bengaluru, India',
      hi: 'बेंगलुरु, भारत',
    },
    text: {
      gu: 'હનોલના થાબડી પેંડા મારા દાદાને ખૂબ જ પ્રિય હતા. બેંગલુરુમાં આટલી અસલ સ્વાદિષ્ટ અને પરંપરાગત પેકીંગ વાળી મીઠાઈ મળવી અશક્ય હતી.',
      en: 'My grandfather was very emotional. Sourcing Hanol Thabdi Penda in Bangalore seemed impossible until Piraso delivered it fresh within 2 days!',
      hi: 'हानोल के थाबड़ी पेड़े मेरे दादाजी को बेहद पसंद थे। बेंगलुरु में इतनी शुद्ध और पारंपरिक पैकिंग वाली मिठाई मिलना नामुमकिन था।'
    },
    productName: {
      gu: 'હનોલના દેશી થાબડી પેંડા',
      en: 'Hanol na Thabdi Penda',
      hi: 'हानोल के देशी थाबड़ी पेड़े',
    },
  }
];

export const GLOBAL_ROUTES = [
  { country: 'USA', flag: '🇺🇸', customers: '18,500+', deliveryTime: '4-5 Days', port: 'Chicago, New York, SF' },
  { country: 'Canada', flag: '🇨🇦', customers: '12,900+', deliveryTime: '4-6 Days', port: 'Toronto, Vancouver' },
  { country: 'UK', flag: '🇬🇧', customers: '15,200+', deliveryTime: '3-4 Days', port: 'London, Leicester' },
  { country: 'Australia', flag: '🇦🇺', customers: '8,400+', deliveryTime: '5-6 Days', port: 'Sydney, Melbourne' },
  { country: 'UAE', flag: '🇦🇪', customers: '9,100+', deliveryTime: '2-3 Days', port: 'Dubai, Abu Dhabi' },
  { country: 'Singapore', flag: '🇸🇬', customers: '4,600+', deliveryTime: '2-3 Days', port: 'Singapore' },
];

export const WHY_ITEMS = [
  {
    title: { gu: 'ઓરિજિનલ જન્મસ્થળ પ્રમાણિત', en: 'Original Place Verified', hi: 'मूल स्थान प्रमाणित' },
    desc: {
      gu: 'અમે દરેક ખાદ્યપદાર્થ તેમના અસલ વતનના પ્રખ્યાત પરંપરાગત કારીગરો પાસેથી જ મેળવીએ છીએ. કોઈ ડુપ્લિકેટ અથવા નકલ નહિ.',
      en: 'Every food is curated directly from the multi-generational local craftsman in its authentic home village. Absolutely zero imitations.',
      hi: 'हम प्रत्येक व्यंजन को उसके मूल वतन के सुप्रसिद्ध पारंपरिक कारीगरों से ही प्राप्त करते हैं। कोई मिलावट या नकली स्वाद नहीं।'
    },
    icon: 'ShieldCheck'
  },
  {
    title: { gu: 'સીધું ઉત્પાદક પાસેથી', en: 'Direct From Source', hi: 'सीधे स्रोत से' },
    desc: {
      gu: 'પીરસો મધ્યસ્થીઓ હટાવીને સીધું કારીગરો પાસેથી મેળવે છે, જેથી તાજગી બરકરાર રહે અને કારીગરોને તેમનો હક મળે.',
      en: 'We bypass middle agencies to buy straight from the creators, ensuring pristine food freshness and fair compensation for local families.',
      hi: 'पिरासो बिचौलियों को हटाकर सीधे कारीगरों से खाद्य पदार्थ खरीदता है, ताकि ताजगी बनी रहे और निर्माताओं को पूरा हक मिले।'
    },
    icon: 'Store'
  },
  {
    title: { gu: 'પાવન પેકિંગ અને સુરક્ષા', en: 'Carefully Packed', hi: 'सतर्कतापूर्ण सुकोमल पैकिंग' },
    desc: {
      gu: 'અસરકારક થ્રી-લેયર વેક્યુમ પેકિંગ, જે ભેજ અને હવાને દૂર રાખી વાનગીનો અસલ સ્વાદ અને કરકરાપણું મહિનાઓ સુધી રાખે છે.',
      en: 'Premium multi-layer vacuum nitrogen sealing shields fragile farsan from humidity, preserving the crisp snap and moisture of home.',
      hi: 'अत्याधुनिक थ्री-लेयर वैक्यूम नाइट्रोजन सीलिंग तकनीक जो नमी को दूर रखकर भोजन के कुरकुरेपन को महीनों तक ताजा रखती है।'
    },
    icon: 'PackageCheck'
  },
  {
    title: { gu: 'વૈશ્વિક ઝડપી ડિલિવરી', en: 'Worldwide Shipping', hi: 'वैश्विक तीव्र डिलीवरी' },
    desc: {
      gu: 'ભારતના દરેક મેટ્રો સિટી અને વિશ્વભરના મુખ્ય દેશોમાં તેજ ગતિએ હોમ ડિલિવરી, કસ્ટમ ક્લિયરન્સ સાથોસાથ.',
      en: 'Prompt global express custom-cleared dispatch to over 150 countries, fully door-to-door tracked with top premium carriers.',
      hi: 'विश्व भर के देशों और भारत के प्रमुख शहरों में सीमा शुल्क क्लीयरेंस के साथ आपके घर तक सुरक्षित और तीव्र डिलीवरी।'
    },
    icon: 'Globe'
  },
  {
    title: { gu: 'વિરાસતનું જતન', en: "Preserving Gujarat's Heritage", hi: 'विरासत का गौरवशाली संरक्षण' },
    desc: {
      gu: 'ગુજરાતના ભુલાઈ રહેલા અસલ પ્રાદેશિક સ્વાદો અને રસોઈ કળાઓને લુપ્ત થતી બચાવી આગલી પેઢી સુધી પહોંચાડવી.',
      en: 'Documenting and cataloging lost family culinary arts, creating a persistent digital platform for remote heritage foodways.',
      hi: 'गुजरात के भूलते जा रहे मूल क्षेत्रीय स्वादों और पारंपरिक पाक कलाओं को लुप्त होने से बचाना और अगली पीढ़ी तक पहुंचाना।'
    },
    icon: 'Heart'
  },
  {
    title: { gu: 'સ્થાનિક નાના ઉદ્યોગોને વેગ', en: 'Supporting Local Makers', hi: 'स्थानीय कारीगरों को समर्थन' },
    desc: {
      gu: 'ગુજરાતના નાના કસ્બાના ૨૦૦થી વધુ પરંપરાગત પરિવારો અને સખી મંડળોને સન્માનપૂર્વક રોજગારી અર્પવી.',
      en: 'Providing dignified, scalable global markets to organic local families, women-led cooperatives, and rural cottage artisans.',
      hi: 'गुजरात के ग्रामीण कस्बों के २०० से अधिक पारंपरिक परिवारों और महिला सहकारी समितियों को सम्मानपूर्वक रोजगार प्रदान करना।'
    },
    icon: 'Users'
  }
];
