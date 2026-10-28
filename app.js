(() => {
  'use strict';

  const KEY = 'kaniyo.shopping.v1';
  const categories = [
    {id:'produce',name:'פירות וירקות',emoji:'🥑'},
    {id:'dairy',name:'חלב וביצים',emoji:'🥛'},
    {id:'bakery',name:'לחמים ומאפים',emoji:'🥖'},
    {id:'meat',name:'בשר ודגים',emoji:'🐟'},
    {id:'pantry',name:'מזווה ובישול',emoji:'🫙'},
    {id:'frozen',name:'קפואים',emoji:'🧊'},
    {id:'drinks',name:'משקאות',emoji:'🧃'},
    {id:'home',name:'ניקיון וטיפוח',emoji:'🧼'},
    {id:'other',name:'אחר',emoji:'🛒'}
  ];
  const units = ['יח׳','ק״ג','גרם','ליטר','חבילות','בקבוקים'];
  const catalog = {
    produce:[["עגבניות","🍅"],["עגבניות שרי","🍅"],["מלפפונים","🥒"],["גמבה","🫑"],["פלפל חריף","🌶️"],["חסה","🥬"],["כרוב","🥬"],["ברוקולי","🥦"],["כרובית","🥦"],["גזר","🥕"],["תפוחי אדמה","🥔"],["בטטה","🍠"],["בצל","🧅"],["שום","🧄"],["אבוקדו","🥑"],["קישואים","🥒"],["פטריות","🍄"],["לימונים","🍋"],["תפוחים","🍎"],["בננות","🍌"],["תפוזים","🍊"],["ענבים","🍇"],["תותים","🍓"],["פטרוזיליה","🌿"],["כוסברה","🌿"],["אגסים","🥬"],["קלמנטינות","🥬"],["אשכולית","🥬"],["פומלה","🥬"],["מנדרינות","🥬"],["אפרסקים","🥬"],["נקטרינות","🥬"],["שזיפים","🥬"],["משמשים","🥬"],["מנגו","🥬"],["אננס","🥬"],["קיווי","🥬"],["אבטיח","🥬"],["מלון","🥬"],["רימון","🥬"],["אוכמניות","🥬"],["פטל","🥬"],["תמרים","🥬"],["תאנים","🥬"],["אפרסמון","🥬"],["חציל","🥬"],["דלורית","🥬"],["דלעת","🥬"],["סלק","🥬"],["צנונית","🥬"],["קולורבי","🥬"],["שומר","🥬"],["סלרי","🥬"],["כרישה","🥬"],["בצל ירוק","🥬"],["שמיר","🥬"],["נענע","🥬"],["בזיליקום","🥬"],["תרד","🥬"],["מנגולד","🥬"],["פלפל צהוב","🥬"],["פלפל כתום","🥬"],["פלפל ירוק","🥬"],["כרוב סגול","🥬"],["בצל סגול","🥬"],["בצל לבן","🥬"],["תפוחי אדמה אדומים","🥬"],["צנון","🥬"],["לפת","🥬"],["ארטישוק","🥬"],["שעועית צהובה טרייה","🥬"],["אפונת שלג","🥬"],["נבטים","🥬"],["רוקט","🥬"],["גרגיר הנחלים","🥬"]],
    dairy:[["חלב","🥛"],["ביצים","🥚"],["קוטג׳","🧀"],["גבינה לבנה","🥣"],["גבינה צהובה","🧀"],["גבינת שמנת","🧀"],["גבינה בולגרית","🧀"],["פטה","🧀"],["מוצרלה","🧀"],["יוגורט","🥛"],["יוגורט חלבון","🥛"],["חמאה","🧈"],["שמנת לבישול","🥛"],["שמנת מתוקה","🥛"],["חלב שקדים","🥛"],["חלב ללא לקטוז","🥛"],["חלב עיזים","🥛"],["חלב סויה","🥛"],["חלב אורז","🥛"],["משקה קוקוס","🥛"],["גבינת ריקוטה","🥛"],["גבינת פרמזן","🥛"],["גבינת גאודה","🥛"],["גבינת קשקבל","🥛"],["גבינת עיזים","🥛"],["גבינת חלומי","🥛"],["גבינת צפתית","🥛"],["גבינת מסקרפונה","🥛"],["גבינה מותכת","🥛"],["לאבנה","🥛"],["שמנת חמוצה","🥛"],["אשל","🥛"],["לבן","🥛"],["רוויון","🥛"],["יוגורט יווני","🥛"],["יוגורט עיזים","🥛"],["יוגורט לשתייה","🥛"],["מעדן שוקולד","🥛"],["מעדן וניל","🥛"],["פודינג חלבון","🥛"]],
    bakery:[["לחם פרוס","🍞"],["לחם מחמצת","🍞"],["חלה","🥖"],["פיתות","🫓"],["לחמניות","🥯"],["בגט","🥖"],["טורטיות","🫓"],["קרקרים","🥨"],["פריכיות","🍘"],["בורקס","🥐"],["לחם מלא","🥖"],["לחם שיפון","🥖"],["לחם כוסמין","🥖"],["לחם קל","🥖"],["לחם ללא גלוטן","🥖"],["לחמניות המבורגר","🥖"],["לחמניות נקניקייה","🥖"],["פיתות מקמח מלא","🥖"],["פיתה דרוזית","🥖"],["לאפה","🥖"],["בייגל","🥖"],["קרואסון חמאה","🥖"],["רוגלך","🥖"],["עוגת שמרים","🥖"],["מאפינס","🥖"],["דונאטס","🥖"],["עוגת הבית","🥖"],["פוקאצ׳ה","🥖"],["מקלות לחם","🥖"],["לחמניות מתוקות","🥖"],["לחם דגנים","🥖"],["לחם אגוזים","🥖"],["לחם צימוקים","🥖"],["לחם תירס","🥖"],["לחמניות כוסמין","🥖"],["לחמניות שיפון","🥖"],["פיתות כוסמין","🥖"],["בייגלה ירושלמי","🥖"],["עוגיות מאפייה","🥖"],["עוגת שיש","🥖"]],
    meat:[["חזה עוף","🍗"],["פרגיות","🍗"],["שניצל עוף","🍗"],["כרעיים","🍗"],["בשר טחון","🥩"],["סטייק","🥩"],["קציצות","🥩"],["סלמון","🐟"],["אמנון","🐟"],["דג ים","🐟"],["טונה טרייה","🐟"],["כנפיים","🥩"],["שוקי עוף","🥩"],["עוף שלם","🥩"],["כבד עוף","🥩"],["לבבות עוף","🥩"],["פילה עוף","🥩"],["חזה הודו","🥩"],["הודו טחון","🥩"],["שווארמה הודו","🥩"],["שניצל הודו","🥩"],["צלי בקר","🥩"],["גולאש בקר","🥩"],["צלעות בקר","🥩"],["אסאדו","🥩"],["אנטריקוט","🥩"],["סינטה","🥩"],["פילה בקר","🥩"],["כתף טלה","🥩"],["קבב","🥩"],["נקניקיות","🥩"],["פסטרמה","🥩"],["דניס","🥩"],["לברק","🥩"],["פורל","🥩"]],
    pantry:[["אורז","🍚"],["פסטה","🍝"],["פתיתים","🍲"],["קוסקוס","🍲"],["קינואה","🌾"],["עדשים","🫘"],["גרגירי חומוס","🫘"],["שימורי תירס","🌽"],["טונה בקופסה","🐟"],["רסק עגבניות","🥫"],["עגבניות מרוסקות","🥫"],["קמח","🌾"],["סוכר","🍬"],["מלח","🧂"],["שמן זית","🫒"],["שמן קנולה","🫗"],["טחינה","🥣"],["סילאן","🍯"],["דבש","🍯"],["רוטב סויה","🫙"],["טריאקי","🫙"],["קטשופ","🍅"],["מיונז","🥫"],["שיבולת שועל","🥣"],["קורנפלקס","🥣"],["נוטלה","🍫"],["שוקולד","🍫"],["אורז מלא","🫙"],["אורז בסמטי","🫙"],["אורז יסמין","🫙"],["אורז עגול","🫙"],["אטריות אורז","🫙"],["אטריות ביצים","🫙"],["פסטה מלאה","🫙"],["פסטה ללא גלוטן","🫙"],["דפי לזניה","🫙"],["בורגול","🫙"],["כוסמת","🫙"],["גריסי פנינה","🫙"],["סולת","🫙"],["קמח תירס","🫙"],["קמח כוסמין","🫙"],["קמח מלא","🫙"],["קמח תופח","🫙"],["קמח שקדים","🫙"],["קמח ללא גלוטן","🫙"],["קמח מצה","🫙"],["אבקת אפייה","🫙"],["סודה לשתייה","🫙"],["שמרים יבשים","🫙"],["סוכר חום","🫙"],["אבקת סוכר","🫙"],["סוכר וניל","🫙"],["קקאו","🫙"],["שוקולד צ׳יפס","🫙"],["קוקוס טחון","🫙"],["תמצית וניל","🫙"],["פירורי לחם","🫙"],["עדשים כתומות","🫙"],["עדשים שחורות","🫙"],["שעועית לבנה יבשה","🫙"],["שעועית אדומה יבשה","🫙"],["אפונה יבשה","🫙"],["פול יבש","🫙"],["שימורי שעועית לבנה","🫙"],["שימורי שעועית אדומה","🫙"],["שימורי אפונה","🫙"],["שימורי חומוס","🫙"],["שימורי פטריות","🫙"],["שימורי מלפפון חמוץ","🫙"],["שימורי זיתים ירוקים","🫙"],["שימורי זיתים שחורים","🫙"],["שימורי סרדינים","🫙"],["שימורי לבבות דקל","🫙"],["חלב קוקוס לבישול","🫙"],["קרם קוקוס","🫙"],["רוטב עגבניות לפסטה","🫙"],["חרדל","🫙"],["חומץ","🫙"],["חומץ בלסמי","🫙"],["חומץ תפוחים","🫙"],["רוטב צ׳ילי מתוק","🫙"],["רוטב פסטו","🫙"],["חמאת בוטנים","🫙"],["ריבת תות","🫙"],["ריבת משמש","🫙"],["ממרח תמרים","🫙"],["ממרח חלבה","🫙"],["חומוס מוכן","🫙"],["סלט חצילים","🫙"],["סחוג","🫙"],["עמבה","🫙"],["פפריקה מתוקה","🫙"],["פפריקה חריפה","🫙"],["כמון","🫙"],["כורכום","🫙"],["פלפל שחור","🫙"],["קינמון","🫙"],["אורגנו","🫙"],["תבלין לגריל","🫙"],["בייגלה","🫙"],["ביסלי","🫙"],["במבה","🫙"],["תפוצ׳יפס","🫙"],["פופקורן למיקרוגל","🫙"],["בוטנים קלויים","🫙"],["קשיו","🫙"],["שקדים טבעיים","🫙"],["אגוזי מלך","🫙"],["אגוזי פקאן","🫙"],["פיסטוקים","🫙"],["גרעיני חמנייה","🫙"],["גרעיני דלעת","🫙"],["צימוקים","🫙"],["משמשים מיובשים","🫙"],["שזיפים מיובשים","🫙"],["חמוציות מיובשות","🫙"],["גרנולה","🫙"],["חטיפי דגנים","🫙"],["עוגיות חמאה","🫙"],["עוגיות שוקולד צ׳יפס","🫙"],["פתי בר","🫙"],["ופלים","🫙"],["עוגיות אורז","🫙"],["מסטיקים","🫙"],["סוכריות","🫙"],["גומי סוכריות","🫙"],["מרשמלו","🫙"],["חלבה","🫙"],["מייפל","🫙"]],
    frozen:[["אפונה קפואה","🫛"],["ברוקולי קפוא","🥦"],["שעועית ירוקה","🫛"],["לקט ירקות","🥦"],["פירות יער קפואים","🫐"],["תותים קפואים","🍓"],["צ׳יפס קפוא","🍟"],["בורקס קפוא","🥐"],["פיצה קפואה","🍕"],["גלידה","🍨"],["תירס קפוא","🧊"],["כרובית קפואה","🧊"],["תרד קפוא","🧊"],["במיה קפואה","🧊"],["פול קפוא","🧊"],["אדממה קפואה","🧊"],["ארטישוק קפוא","🧊"],["בטטה קפואה","🧊"],["לקט ירקות למרק","🧊"],["לקט ירקות להקפצה","🧊"],["מנגו קפוא","🧊"],["אננס קפוא","🧊"],["אוכמניות קפואות","🧊"],["בצק עלים קפוא","🧊"],["בצק פילו קפוא","🧊"],["מלאווח קפוא","🧊"],["ג׳חנון קפוא","🧊"],["קובנה קפואה","🧊"],["שניצל תירס קפוא","🧊"],["המבורגר צמחי קפוא","🧊"],["נאגטס עוף קפואים","🧊"],["פילה בקלה קפוא","🧊"],["פילה מרלוזה קפוא","🧊"],["ארטיקים","🧊"],["שלגונים","🧊"]],
    drinks:[["מים מינרליים","💧"],["סודה","🫧"],["קפה","☕"],["קפסולות קפה","☕"],["תה","🍵"],["חלב שיבולת שועל","🥛"],["מיץ תפוזים","🍊"],["מיץ ענבים","🍇"],["קולה","🥤"],["משקה מוגז","🥤"],["מים בטעמים","🧃"],["מיץ תפוחים","🧃"],["מיץ אשכוליות","🧃"],["מיץ רימונים","🧃"],["מיץ אננס","🧃"],["נקטר מנגו","🧃"],["נקטר אפרסק","🧃"],["לימונדה","🧃"],["תרכיז פטל","🧃"],["תרכיז תפוזים","🧃"],["תה קר","🧃"],["משקה אנרגיה","🧃"],["משקה איזוטוני","🧃"],["בירה","🧃"],["בירה ללא אלכוהול","🧃"],["יין אדום","🧃"],["יין לבן","🧃"],["תירוש","🧃"],["קפה נמס","🧃"],["קפה שחור","🧃"],["קפה נטול קפאין","🧃"],["תה ירוק","🧃"],["חליטת נענע","🧃"],["חליטת קמומיל","🧃"],["אבקת שוקו","🧃"],["משקה מאלט","🧃"],["מיץ עגבניות","🧃"],["מיץ גזר","🧃"],["מיץ לימון","🧃"],["סיידר תפוחים","🧃"],["סודה בטעם לימון","🧃"],["קולה ללא סוכר","🧃"],["משקה תפוזים מוגז","🧃"],["משקה לימון מוגז","🧃"],["קפה קר בבקבוק","🧃"]],
    home:[["נייר טואלט","🧻"],["נייר סופג","🧻"],["טישו","🧻"],["מגבונים","🧻"],["שקיות אשפה","🗑️"],["סבון כלים","🧽"],["טבליות למדיח","🧼"],["חומר לניקוי רצפה","🧹"],["חומר ניקוי לאמבטיה","🛁"],["אבקת כביסה","🫧"],["מרכך כביסה","🫧"],["ספוגים","🧽"],["סבון ידיים","🧴"],["שמפו","🧴"],["מרכך שיער","🧴"],["משחת שיניים","🪥"],["דאודורנט","🧴"],["תחבושות היגייניות","🧴"],["ג׳ל כביסה","🧼"],["קפסולות כביסה","🧼"],["מסיר כתמים","🧼"],["מלבין כביסה","🧼"],["אקונומיקה","🧼"],["מסיר שומנים","🧼"],["מנקה חלונות","🧼"],["נוזל לניקוי אסלות","🧼"],["מלח למדיח","🧼"],["נוזל הברקה למדיח","🧼"],["מטליות ניקוי","🧼"],["כפפות ניקוי","🧼"],["סבון גוף","🧼"],["מברשת שיניים","🧼"],["מי פה","🧼"],["חוט דנטלי","🧼"],["סכיני גילוח","🧼"],["קצף גילוח","🧼"],["קרם גוף","🧼"],["קרם ידיים","🧼"],["מקלוני אוזניים","🧼"],["צמר גפן","🧼"],["טמפונים","🧼"],["תחתוניות","🧼"],["מסיר אבנית","🧼"],["מנקה תנורים","🧼"],["פותח סתימות","🧼"],["תרסיס חיטוי","🧼"],["מגבונים לחיטוי","🧼"],["מגבונים להסרת איפור","🧼"],["מסיר איפור","🧼"],["קרם פנים","🧼"],["קרם הגנה","🧼"],["ג׳ל לשיער","🧼"],["ספריי לשיער","🧼"],["מסכות שיער","🧼"],["סבון פנים","🧼"],["אלכוג׳ל","🧼"],["שפתון לחות","🧼"],["פלסטרים","🧼"],["ממחטות כיס","🧼"],["מטהר אוויר","🧼"]],
    other:[["נייר אפייה","📜"],["נייר אלומיניום","📦"],["ניילון נצמד","📦"],["שקיות הקפאה","🛍️"],["קופסאות אחסון","📦"],["סוללות","🔋"],["נרות","🕯️"],["גפרורים","🔥"],["אוכל לחיות מחמד","🐾"],["כוסות חד פעמיות","🛒"],["צלחות חד פעמיות","🛒"],["סכו״ם חד פעמי","🛒"],["מפיות שולחן","🛒"],["תבניות אלומיניום","🛒"],["תבניות נייר לאפייה","🛒"],["שקיות סנדוויץ׳","🛒"],["שקיות אוכל רב פעמיות","🛒"],["קיסמי שיניים","🛒"],["שיפודי עץ","🛒"],["קשיות שתייה","🛒"],["חיתולים","🛒"],["מוצצים","🛒"],["מזון לתינוקות","🛒"],["חול לחתולים","🛒"],["חטיפים לכלבים","🛒"],["אוכל יבש לכלבים","🛒"],["אוכל רטוב לכלבים","🛒"],["אוכל יבש לחתולים","🛒"],["אוכל רטוב לחתולים","🛒"],["חטיפים לחתולים","🛒"],["מזון לדגי נוי","🛒"],["נורות","🛒"],["מצית","🛒"],["שקיות צלייה","🛒"],["חוט קשירה לבישול","🛒"],["כפפות חד פעמיות","🛒"],["שקיות קרח","🛒"],["פחמים למנגל","🛒"],["מדליק פחמים","🛒"],["מפות שולחן חד פעמיות","🛒"]]
  };
  const popularNames = ['עגבניות שרי','מלפפונים','בננות','חלב','ביצים','קוטג׳','לחם פרוס','חזה עוף','אורז','פסטה','טחינה','קפה','מים מינרליים','נייר טואלט'];
  const allCatalog = categories.flatMap(cat => (catalog[cat.id]||[]).map(([name,emoji])=>({name,emoji,category:cat.id})));
  const associations = {
    produce:['עגבני','מלפפון','בננה','תפוח','גזר','חסה','בצל','תפוא','תפוח אדמה','פלפל','גמבה','בטטה','אבוקדו','פטרוזיליה','כוסברה','לימון','תות','ענבים','ברוקולי','כרוב','קישוא','אגס','פטריות'],
    dairy:['חלב','גבינה','קוטג','יוגורט','שמנת','ביצים','ביצה','חמאה','סקיר','מעדן'],
    bakery:['לחם','לחמני','פיתה','בגט','חלה','קרואסון','טורטיה'],
    meat:['עוף','שניצל','בשר','דג','סלמון','אמנון','חזה עוף','טחון','פרגית'],
    pantry:['פסטה','פתיתים','אורז','קמח','סוכר','מלח','פלפל שחור','שמן','טונה','רסק','עדשים','טחינה','שימורים','קינואה','דבש','סילאן','רוטב','שוקולד','נוטלה','קוסקוס'],
    frozen:['קפוא','גלידה','אפונה','ציפס','צ׳יפס','בורקס'],
    drinks:['מים','קפה','תה','מיץ','קולה','סודה','שתייה','משקה'],
    home:['סבון','שמפו','נייר','מגבונים','אבקת כביסה','מרכך','משחה','טישו','ניקוי','כלים','מטליות']
  };

  const $ = id => document.getElementById(id);
  const escapeText = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const id = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const copy = obj => JSON.parse(JSON.stringify(obj));
  let items = [], favorites = [], status = 'all', selectedCategory = 'all', catalogCategory = 'popular', catalogQuery = '', editingId = null, toastTimeout = null, undoSnapshot = null;

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(KEY) || '{}');
      items = Array.isArray(data.items) ? data.items.filter(x => x && typeof x.name === 'string').map(x => ({id:String(x.id || id()),name:x.name.slice(0,70),category:categoryExists(x.category)?x.category:'other',quantity:validQuantity(x.quantity),unit:units.includes(x.unit)?x.unit:'יח׳',done:!!x.done,createdAt:Number(x.createdAt)||Date.now()})) : [];
      favorites = Array.isArray(data.favorites) ? data.favorites.filter(x => x && typeof x.name === 'string' && x.name.trim()).map(x => ({name:x.name.slice(0,70),category:categoryExists(x.category)?x.category:'other'})) : [];
    } catch (error) { items = []; favorites = []; }
  }
  function validQuantity(value) {const n = Number(value);return Number.isFinite(n) && n > 0 ? Math.min(9999,Math.round(n*100)/100) : 1;}
  function categoryExists(cat) {return categories.some(x => x.id === cat);}
  function categoryFor(name) {const lower=name.toLocaleLowerCase('he-IL');return Object.entries(associations).find(([,words]) => words.some(w => lower.includes(w)))?.[0] || 'other';}
  function sameName(a,b) {return a.trim().toLocaleLowerCase('he-IL')===b.trim().toLocaleLowerCase('he-IL');}
  function isFavorite(name) {return favorites.some(x=>sameName(x.name,name));}
  function existingItem(name) {return items.some(x=>sameName(x.name,name));}
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify({items,favorites}));
      $('saveStatus').textContent='✓ הרשימה נשמרה במכשיר הזה';
      $('saveStatus').dataset.saved='true';
      return true;
    } catch(error) {
      $('saveStatus').textContent='לא הצלחנו לשמור. בדקי את הגדרות האחסון בדפדפן.';
      $('saveStatus').dataset.saved='false';
      return false;
    }
  }
  function mutate(action, message) {
    const before = {items:copy(items),favorites:copy(favorites)};
    action();persist();render();
    if (message) showToast(message,before);
  }
  function showToast(message, snapshot=null) {
    clearTimeout(toastTimeout);undoSnapshot=snapshot;
    $('toastMessage').textContent=message;$('toastUndo').hidden=!snapshot;$('toast').hidden=false;
    toastTimeout=setTimeout(()=>{$('toast').hidden=true;undoSnapshot=null;},4500);
  }
  function addItem(name,category,quantity=1,unit='יח׳') {
    const clean=name.trim().replace(/\s+/g,' ');
    if (!clean) return;
    const existing=items.find(x=>sameName(x.name,clean)&&!x.done);
    mutate(()=>{
      if (existing && existing.unit===unit) existing.quantity=Math.round((existing.quantity+quantity)*100)/100;
      else items.push({id:id(),name:clean.slice(0,70),category:categoryExists(category)?category:'other',quantity:validQuantity(quantity),unit:units.includes(unit)?unit:'יח׳',done:false,createdAt:Date.now()});
    },existing && existing.unit===unit?`הכמות של ${clean} עודכנה`:`${clean} נוסף לרשימה`);
    status='all';selectedCategory='all';render();
  }
  function quantityText(item) {return `${new Intl.NumberFormat('he-IL',{maximumFractionDigits:2}).format(item.quantity)} ${item.unit}`;}
  function setupOptions() {
    const categoryHTML=categories.map(x=>`<option value="${x.id}">${x.emoji} ${x.name}</option>`).join('');
    $('categorySelect').innerHTML=categoryHTML;$('editCategory').innerHTML=categoryHTML;
    $('editUnit').innerHTML=units.map(x=>`<option value="${x}">${x}</option>`).join('');
    $('categorySelect').value='other';
    const date=new Intl.DateTimeFormat('he-IL',{weekday:'long',day:'numeric',month:'long'}).format(new Date());
    $('todayLabel').textContent=date;
  }
  function renderProgress() {
    const total=items.length,done=items.filter(x=>x.done).length,remaining=total-done;
    $('progressFraction').textContent=`${done}/${total}`;
    $('allCount').textContent=total;
    $('progressFill').style.width=total?`${Math.round(done/total*100)}%`:'0%';
    $('progressHeadline').textContent=total===0?'מוכנה לקניות?':remaining===0?'כל הכבוד, הכול בסל!':`${remaining} ${remaining===1?'מוצר נשאר':'מוצרים נשארו'} לקנות`;
    $('progressDescription').textContent=total===0?'מוסיפים כמה מוצרים ומתחילים':remaining===0?'אפשר לחזור הביתה בראש שקט':'עוד קצת והרשימה מושלמת';
    document.querySelectorAll('[data-status]').forEach(btn=>{const active=btn.dataset.status===status;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
  }
  function renderFilters() {
    const occupied=categories.filter(cat=>items.some(item=>item.category===cat.id));
    const all=[{id:'all',name:'כל הקטגוריות',emoji:''},...occupied];
    if(!all.some(x=>x.id===selectedCategory))selectedCategory='all';
    $('categoryFilters').innerHTML=all.map(cat=>`<button type="button" data-category="${cat.id}" class="category-filter ${selectedCategory===cat.id?'active':''}" aria-pressed="${selectedCategory===cat.id}">${cat.emoji?`<span class="category-emoji">${cat.emoji}</span>`:''}${cat.name}</button>`).join('');
  }
  function renderList() {
    const shown=items.filter(x=>(status==='all'||(status==='done' ? x.done:!x.done))&&(selectedCategory==='all'||x.category===selectedCategory));
    const target=$('shoppingItems');
    target.innerHTML='';
    for(const category of categories) {
      const group=shown.filter(x=>x.category===category.id).sort((a,b)=>Number(a.done)-Number(b.done)||a.createdAt-b.createdAt);
      if(!group.length)continue;
      const element=document.createElement('section');element.className='category-group';
      element.innerHTML=`<div class="group-heading"><span>${category.emoji}</span>${category.name}<small>${group.length} פריטים</small></div>`;
      for(const item of group){
        const row=document.createElement('div');row.className=`shopping-row ${item.done?'done':''}`;
        row.innerHTML=`<button type="button" class="check-item" data-action="toggle" data-id="${escapeText(item.id)}" aria-label="${item.done?'החזרה לרשימה':'סימון כנמצא בסל'}: ${escapeText(item.name)}" aria-pressed="${item.done}">${item.done?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m5 12 4.5 4.5L19 7"/></svg>':''}</button><div class="item-details"><div class="item-name">${escapeText(item.name)}</div><div class="item-quantity">${escapeText(quantityText(item))}</div></div><div class="row-actions"><button type="button" class="row-button favorite-button ${isFavorite(item.name)?'favorited':''}" data-action="favorite" data-id="${escapeText(item.id)}" aria-label="${isFavorite(item.name)?'הסרה מהקבועים':'שמירה בקבועים'}">${isFavorite(item.name)?'★':'☆'}</button><button type="button" class="row-button edit-button" data-action="edit" data-id="${escapeText(item.id)}" title="עריכה" aria-label="עריכת ${escapeText(item.name)}">✎</button><button type="button" class="row-button delete-button" data-action="delete" data-id="${escapeText(item.id)}" title="מחיקה" aria-label="מחיקת ${escapeText(item.name)}">×</button></div>`;
        element.appendChild(row);
      }
      target.appendChild(element);
    }
    $('emptyState').hidden=shown.length!==0;
    if(shown.length===0){
      let title='הרשימה עדיין ריקה',desc='הוסיפי את המוצר הראשון שלך למעלה, או בחרי מהרעיונות למטה.';
      if(items.length){title='אין כאן מוצרים כרגע';desc=status==='remaining'?'כל המוצרים סומנו כנמצאים בסל 🎉':status==='done'?'עדיין לא סימנת מוצרים שנכנסו לסל.':'נסי לבחור קטגוריה אחרת.';}
      $('emptyTitle').textContent=title;$('emptyDescription').textContent=desc;
    }
  }
  function renderSide() {
    if(!favorites.length){$('favoritesList').innerHTML='<div class="favorite-empty">המוצרים הקבועים שלך יופיעו כאן ☆</div>';return;}
    $('favoritesList').innerHTML=favorites.map((f,i)=>`<div class="favorite-row"><span>${escapeText(f.name)}</span><button type="button" data-add-favorite="${i}" ${existingItem(f.name)?'disabled':''} aria-label="הוספת ${escapeText(f.name)} לרשימה" title="הוספה לרשימה">${existingItem(f.name)?'✓':'＋'}</button></div>`).join('');
  }
  function renderCatalog() {
    const tabs=[{id:'popular',name:'הכי נפוצים',emoji:'✨'},...categories];
    $('catalogTabs').innerHTML=tabs.map(cat=>`<button type="button" class="catalog-tab ${catalogCategory===cat.id&&!catalogQuery?'active':''}" data-catalog-category="${cat.id}" aria-pressed="${catalogCategory===cat.id&&!catalogQuery}">${cat.emoji} ${cat.name}</button>`).join('');
    const matches=catalogQuery
      ? allCatalog.filter(x=>x.name.toLocaleLowerCase('he-IL').includes(catalogQuery.toLocaleLowerCase('he-IL')))
      : catalogCategory==='popular' ? popularNames.map(name=>allCatalog.find(x=>sameName(x.name,name))).filter(Boolean)
      : allCatalog.filter(x=>x.category===catalogCategory);
    $('catalogProducts').innerHTML=matches.length?matches.map(x=>{
      const added=existingItem(x.name);
      return `<button type="button" class="catalog-product ${added?'added':''}" data-catalog-name="${escapeText(x.name)}" data-catalog-category-id="${x.category}" ${added?'disabled':''} title="${added?'כבר נמצא ברשימה':'הוספה לרשימה'}" aria-label="${added?'כבר ברשימה: ':'הוספת '}${escapeText(x.name)}"><span class="catalog-emoji">${x.emoji}</span><span class="catalog-product-name">${escapeText(x.name)}${catalogQuery?`<small>${escapeText(categories.find(c=>c.id===x.category)?.name||'')}</small>`:''}</span><span class="catalog-plus">${added?'✓':'＋'}</span></button>`;
    }).join(''):'<div class="catalog-no-results">לא מצאנו מוצר כזה בהמלצות. אפשר להוסיף אותו ידנית למעלה 💚</div>';
    $('catalogHint').textContent=catalogQuery?`${matches.length} תוצאות לחיפוש`:'מוצרים עם ✓ כבר נמצאים ברשימת הקניות שלך';
  }
  function render() {renderProgress();renderFilters();renderList();renderCatalog();renderSide();}
  function openEdit(item) {
    editingId=item.id;
    $('editName').value=item.name;$('editQuantity').value=item.quantity;$('editUnit').value=item.unit;$('editCategory').value=item.category;
    $('editDialog').showModal();$('editName').focus();
  }
  function closeEdit() {$('editDialog').close();editingId=null;}
  function shareText() {
    const remaining=items.filter(x=>!x.done),lines=['🛒 רשימת הקניות שלי',''];
    for(const cat of categories){const inCat=remaining.filter(x=>x.category===cat.id);if(!inCat.length)continue;lines.push(`${cat.emoji} ${cat.name}`);inCat.forEach(x=>lines.push(`☐ ${x.name} — ${quantityText(x)}`));lines.push('');}
    if(!remaining.length)lines.push('אין מוצרים שנשארו לקנות 🎉');
    return lines.join('\n').trim();
  }
  async function share() {
    const text=shareText();
    if(navigator.share){try{await navigator.share({title:'רשימת הקניות שלי',text});return;}catch(e){if(e.name==='AbortError')return;}}
    try{await navigator.clipboard.writeText(text);showToast('הרשימה הועתקה, אפשר להדביק בוואטסאפ');}
    catch(e){const area=document.createElement('textarea');area.value=text;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();const ok=document.execCommand('copy');area.remove();showToast(ok?'הרשימה הועתקה':'לא הצלחנו להעתיק את הרשימה');}
  }
  function bind() {
    $('addForm').addEventListener('submit',e=>{
      e.preventDefault();const name=$('productInput').value.trim();if(!name)return;
      addItem(name,$('categorySelect').value,validQuantity($('quantityInput').value),$('unitSelect').value);
      $('productInput').value='';$('quantityInput').value='1';$('unitSelect').value='יח׳';$('categorySelect').value='other';$('productInput').focus();
    });
    $('productInput').addEventListener('input',()=>{$('categorySelect').value=categoryFor($('productInput').value);});
    $('jumpToAdd').addEventListener('click',()=>{$('addForm').scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>$('productInput').focus({preventScroll:true}),250);});
    $('shareBtn').addEventListener('click',share);
    $('saveList').addEventListener('click',()=>{if(persist())showToast('הרשימה נשמרה — אפשר לצאת ולחזור באותו דפדפן');});
    document.querySelector('.status-tabs').addEventListener('click',e=>{const btn=e.target.closest('[data-status]');if(btn){status=btn.dataset.status;render();}});
    $('categoryFilters').addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(btn){selectedCategory=btn.dataset.category;render();}});
    $('shoppingItems').addEventListener('click',e=>{
      const btn=e.target.closest('[data-action]');if(!btn)return;
      const item=items.find(x=>x.id===btn.dataset.id);if(!item)return;
      const action=btn.dataset.action;
      if(action==='toggle')mutate(()=>item.done=!item.done,item.done?`${item.name} הוחזר לרשימה`:`${item.name} נכנס לסל`);
      else if(action==='delete')mutate(()=>items=items.filter(x=>x.id!==item.id),`${item.name} הוסר מהרשימה`);
      else if(action==='favorite')mutate(()=>{if(isFavorite(item.name))favorites=favorites.filter(x=>!sameName(x.name,item.name));else favorites.push({name:item.name,category:item.category});},isFavorite(item.name)?'הוסר מהקבועים':'נשמר בקבועים');
      else if(action==='edit')openEdit(item);
    });
    $('catalogTabs').addEventListener('click',e=>{const btn=e.target.closest('[data-catalog-category]');if(!btn)return;catalogCategory=btn.dataset.catalogCategory;catalogQuery='';$('catalogSearch').value='';renderCatalog();});
    $('catalogSearch').addEventListener('input',e=>{catalogQuery=e.target.value.trim();renderCatalog();});
    $('catalogProducts').addEventListener('click',e=>{const btn=e.target.closest('[data-catalog-name]');if(!btn||btn.disabled)return;const recommendation=allCatalog.find(x=>x.category===btn.dataset.catalogCategoryId&&sameName(x.name,btn.dataset.catalogName));if(recommendation&&!existingItem(recommendation.name))addItem(recommendation.name,recommendation.category);});
    $('favoritesList').addEventListener('click',e=>{const btn=e.target.closest('[data-add-favorite]');if(!btn)return;const f=favorites[Number(btn.dataset.addFavorite)];if(f&&!existingItem(f.name))addItem(f.name,f.category);});
    $('moreButton').addEventListener('click',e=>{e.stopPropagation();const menu=$('moreMenu');menu.hidden=!menu.hidden;$('moreButton').setAttribute('aria-expanded',String(!menu.hidden));});
    document.addEventListener('click',e=>{if(!e.target.closest('#moreMenu')&&!e.target.closest('#moreButton')){$('moreMenu').hidden=true;$('moreButton').setAttribute('aria-expanded','false');}});
    $('resetChecked').addEventListener('click',()=>{hideMenu();if(!items.some(x=>x.done)){showToast('אין מוצרים מסומנים');return;}mutate(()=>items.forEach(x=>x.done=false),'כל המוצרים חזרו לרשימה');});
    $('clearChecked').addEventListener('click',()=>{hideMenu();const n=items.filter(x=>x.done).length;if(!n){showToast('אין מוצרים מסומנים למחיקה');return;}if(confirm(`למחוק ${n} מוצרים שכבר נכנסו לסל?`))mutate(()=>items=items.filter(x=>!x.done),'המוצרים שסומנו נמחקו');});
    $('clearAll').addEventListener('click',()=>{hideMenu();if(!items.length){showToast('הרשימה כבר ריקה');return;}if(confirm('למחוק את כל הרשימה? המוצרים הקבועים יישמרו.'))mutate(()=>items=[],'הרשימה נוקתה');});
    $('editForm').addEventListener('submit',e=>{e.preventDefault();const item=items.find(x=>x.id===editingId);if(!item)return;const name=$('editName').value.trim();if(!name)return;mutate(()=>{item.name=name;item.quantity=validQuantity($('editQuantity').value);item.unit=$('editUnit').value;item.category=$('editCategory').value;},'המוצר עודכן');closeEdit();});
    $('closeDialog').addEventListener('click',closeEdit);$('cancelEdit').addEventListener('click',closeEdit);
    $('editDialog').addEventListener('click',e=>{if(e.target===$('editDialog'))closeEdit();});
    $('editDialog').addEventListener('close',()=>editingId=null);
    $('toastUndo').addEventListener('click',()=>{if(!undoSnapshot)return;items=undoSnapshot.items;favorites=undoSnapshot.favorites;undoSnapshot=null;persist();render();showToast('הפעולה בוטלה');});
  }
  function hideMenu() {$('moreMenu').hidden=true;$('moreButton').setAttribute('aria-expanded','false');}
  load();setupOptions();bind();render();persist();
  if ('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost')) {
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  }
})();
