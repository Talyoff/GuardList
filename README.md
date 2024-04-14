<div align="center">
    <h1>אפליקציית WEB ליצירת רשימות שמירה - iGuard</h1>
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/iGuard%20logo.webp" width="70%" height="70%">
</div>

<h2>רקע</h2>
<p>
    כמו משרתי מילואים רבים גם אנחנו הוקפצנו בצו 8 בתאריך השביעי באוקטובר.
    מתאריך זה ועד היום, מנהלת מדינת ישראל "קרב הגנה" בגבולה הצפוני. בשבילנו, לוחמי החי"ר בקצה המשמעות של קרב הגנה היא תפיסת עמדות רלוונטיות בשטח, וביצוע יזומות כמו מארבים ופטרולים על קו הגדר.
    <br>
    במהלך תקופה זו הבנו את הצורך בתוכנת מחשב אשר תוכל לייצר את רשימת השמירה לטווח הזמן הרצוי, בהתאם לצורך המבצעי.
</p>

<br><br>
<h2>תיאור האפליקציה</h2>
<ul>
    <li>האתר בנוי בעיקר לשימוש בנייד, אך מותאם גם לשימוש ב PC.</li>
    <li>מנווטים באתר בעזרת ה SIDEBAR השמאלי.</li>
    <li>האתר עוצב בצורה פשוטה לתפעול, על מנת לעזור לכמה שיותר משתמשים פוטנציאליים.</li>
    <li>מתוך מחשבה על מידע שיכול להיות מסווג, האתר מצבע הצפנה של הססמא בעת ההרשמה בעזרת bycrpt ומידור בין משתמשים באמצעות שם משתמש וסיסמא יחודיים לכל אחד.</li>
    <li>בנוסף, בעת ביצוע login האתר משייך לסשיין הנוכחי של היוזר JWT token ושומר אותו בקוקיז, ובעת כניסה לכל דף מוודא שאכן זה היוזר שנכנס מקודם. על מנת לשמור על בטחון המידע של החייל</li>
    <li>לאחר הכנסת הקריטריונים הדרושים, התוכנה מוציאה את רשימת השמירה כפלט של STRING בתצורה מיוחדת לוואטסאפ, על מנת שיהיה ניתן לשתף בקלות בקבוצות בצורה קריאה ואלגנטית.</li>
    <li>על מנת ליצור הוגנות בין החיילים, התוכנה זוכרת בכל פעם מי האחרון ששמר ומחלקת את זמני השמירה בצורה שוויונית בין כולם.</li>
</ul>

<br><br>
<h2>דוגמאת הרצה</h2>
<p>
    דף כניסה ראשי.<br>
    שם משתמש: abc<br>
    סיסמא: 123
</p>

<div align="center">
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/entry page.JPG" width="70%" height="70%">
</div>
<br>

<p>
    לאחר הכנסת פרטי הזיהוי יעבור המשתמש ל home page.<br>
    עמוד הבית כולל הסברים כללים על האפליקציה והוראות השימוש בה.
</p>

<div align="center">
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/home page.JPG" width="70%" height="70%">
</div>
<br>

<p>
    במידה וזו הפעם הראשונה שהמשתמש מתחבר, הוא צריך להוסיף את האנשים הרלוונטיים לרשימת השמירה תחת העמוד של PEOPLE.<br>
    על מנת לשפר את הפונקציונאליות של האפליקציה ושתתאים לשימוש היומיומי, הוספנו את האפשרות לכלול אדם לרשימה הרלוונטית באמצעות סימון v, או לא לסמנו במידה והוא לא נכלל לסבב הנוכחי.
</p>

<div align="center">
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/people.JPG" width="70%" height="70%">
</div>
<br>

<p>
    לאחר הוספת האנשים, צריך המשתמש להוסיף את עמדות השמירה הרלוונטיות תחת stations.
</p>

<div align="center">
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/stations.JPG" width="70%" height="70%">
</div>
<br>

<p>
    לאחר מכן צריך המשתמש להגדיר את שעות הפעילות הרלוונטיות.
</p>

<div align="center">
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/stations & time.JPG" width="70%" height="70%">
</div>
<br>

<p>
    לאחר הכנסת כל הפרמטרים האפליקציה תייצר את רשימת השמירה הרצויה, אותה ניתן להפיץ בצורה קלה ונוחה.
</p>

<div align="center">
    <img src="https://github.com/omerCasif/GuardList/blob/main/data/output.JPG" width="70%" height="70%">
</div>
<br>
<p>
    הפלט המתקבל:


</p>

```plaintext
*08:00*
שג:  Tal, Omer
פטרול:  Jhon

*11:00*
שג:  Bibi, Beni
פטרול:  Tal

*14:00*
שג:  Omer, Jhon
פטרול:  Bibi

*17:00*
שג:  Beni, Tal
פטרול:  Omer
```
<br><br>
<h1 dir="rtl">הסברים על הקוד - צד לקוח</h1>
<p>
   ●	לפני שהדף מרונדר, מתבצעת קריאה ל getServerSideProps. פונקציה זו, מאמתת את ה JWT TOKEN שנוצר ליוזר בhandleLogin ומוודא שאכן הוא הלקוח שהתחבר על מנת למנוע פריצות<br>
   ●	בנוסף לכך, היא מקבלת מMongoDB (בהתאם לדרישות שבדף) את הרשימות הרלוונטיות ללקוח ספציפי זה, ומעבירה את המידע לדף הלקוח<br>

   


</p>

<ul dir="rtl">
    <li><strong>index.js</strong> -  דף LOGIN לאתר שמאפשר רישום וכניסה. בעת כניסה\הרשמה נשלחת בקשה לשרת ורק אם חזרה תשובה חיובית מהשרת מועבר המשתמש לדף הרלוונטי.</li>
    <li><strong>dashboard.js</strong> -  דף הדשבורד. מורכב מSidebar שמאלי שמנהל את הניווט באתר, דף קבלה לאתר שמסביר את הFLOW שעל היוזר לעשות ובקצרה את יכולות האתר .</li>
<li><strong>people.js</strong> - דף המנהל את רשימות האנשים ואת הסדר של רשימת האנשים.
    הדף מכיל את הSidebar ואת קומפוננטת NamesList.js:<br>
    קומפוננטה זו מנהלת את ניהול רשימת האנשים ואת הview שלהם. היא מתחזקת את הרשימה מול הדאטהבייס, ומחזיקה כפתור Shuffle, אם ברצון הלקוח לעשות רשימה גנרית, וכפתור Add המוסיף אדם לרשימה הקיימת. ביכולות הקומפוננטה גם למחוק אדם מהרשימה, להעלות ולהוריד אותו בסדר הרשימה. על מנת לעדכן את הרשימות מול הדאטהבייס, הקומפוננטטה מבצעת קריאה לserver אל updatenames.js.
</li>

<li><strong>stations.js</strong> - דף המנהל את רשימות האנשים ואת הסדר של רשימת האנשים.
  בדומה לpeople.js, הדף מנהל את רשימת העמדות שמירה הקיימות
הדף מכיל את הSidebar ואת קומפוננטת StationsList.js: <br>
 קומפוננטה זו מנהלת את ניהול רשימת העמדות ואת הview שלהם. היא מתחזקת את הרשימה מול הדאטהבייס.
הקומפוננטה מאפשרת למחוק עמדה, להוסיף עמדה חדשה ומציגה את העמדות הקיימות ללקוח
על מנת לעדכן את הרשימות מול הדאטהבייס, הקומפונטטה מבצעת קריאה לserver אל updatestations.js

</li>

<li><strong>generate.js:</strong> - דף המנהל את רשימות האנשים ואת הסדר של רשימת האנשים.
 מטרת דף זה הוא לקנפג את הרשימה וליצור אותה.
הדף מחזיק בקומפונטת הsidebar על מנת לנהל את הניווט באתר, את קומפונטת ListSelector.js ואת StartEndList, FixedTimeList.
הדף מאפשר ליוזר לבחור בין 2 סוגי הרשימות, לאחר מכן מקפנג את ההגדרות לכל רשימה (תלוי ברשימה עצמה), ולאחר מכן יוצר אותה, ומאפשר ליוזר לשתף אותה ישירות עם החברים בwhatsapp או בכל פלטפורמה שיבחר, או להעתיק את הרשימה<br>
 קומפוננטת ListSelector.js:<br>
מאפשרת בחירה בין 2 סוגי הרשימות:<br>
 קומפוננטת StartEndList.js:<br>
    מאפשרת את שינוי ההגדרות לרשימה. מאפשרת ומנהלת את בחירות היוזר. מנהלת את סוג הרשימה StartEndTime
היוזר בוחר את תאריך תחילת הרשימה, שעת ההתחלה, תאריך הסיום, שעת הסיום, והגבלה על כמות שעות בשמירה יחידה.
הקומפוננטה מקבלת את האינפוט מהיוזר, ומעבדת אותו למידע שהשרת יידע לעבוד איתו. היא מבצעת קריאה אל השרת אל dynamic_list_generator.js, אשר מקבל בקשה עם הנתונים שלמעלה, ומחזיר מערך שבו מוחזקת רשימת השמירה
הקומפוננטה מעבדת את המידע שחוזר מין השרת, ומציגה אותו בתצורה המותאמת לוואטסאפ. היא מאפשרת ליוזר כפתור שיתוף וכפתור העתקה על מנת שימוש נוח<br>
קומפונטת FixedTimeList.js: <br>
היוזר בוחר את שעת התחלת הרשימה, זמן כל שמירה יחידה, וכמות השמירות קדימה שהוא רוצה ליצור
הקומפוננטה מקבלת את האינפוט מהיוזר, ומעבדת אותו למידע שהשרת יידע לעבוד איתו. היא מבצעת קריאה אל השרת אל fixed_list_generator.js, אשר מקבל בקשה עם הנתונים שלמעלה, ומחזיר מערך שבו מוחזקת רשימת השמירה
הקומפוננטה מעבדת את המידע שחוזר מין השרת, ומציגה אותו בתצורה המותאמת לוואטסאפ. היא מאפשרת ליוזר כפתור שיתוף וכפתור העתקה על מנת שימוש נוח


</li>



</ul>


<br><br>
<h1 dir="rtl">הסברים על הקוד - צד שרת</h1>
<ul dir="rtl">
    <li><strong>Dynamic_list_generator.js</strong> -  מקבל תאריך התחלה, זמן התחלה, תאריך סיום, זמן סיום, הגבלה על שעות בשמירה, מחשב ויוצר רשימת שמירה הוגנת, ומחזיר אותה אל הלקוח.</li>
    <li><strong>Fixed_list_generator.js</strong> -  מקבל זמן התחלה, זמן משמרת, כמות משמרות, רשימות שמות ורשימת עמדות ומחשב עמדות שמירה מתאימות. מחזיר רשימה במערך אל היוזר.</li>
    <li><strong>Loginapi.js</strong> -  מאמת את פרטי היוזר שהוא מקבל מול הדאטה בייס, ומחזיר תשובה אינפורמטיבית אם הלקוח הצליח להתחבר או לא.
יוצר JWT token ומוסיף לCookies את הטוקן, על מנת לשמר אוטנטיקציה בעת הסשיין
.</li>
<li><strong>signupapi.js</strong> -  יוצר יוזר חדש בדאטה בייס, מאמת פרטים תקינים.</li>
<li><strong>logoutapi.js</strong> -  מוחק את הcookies ומנתק את היוזר מהאתר.</li>
<li><strong>mongo.js</strong> - מנהל את ההתחברות/התנתקות מהדאטהבייס</li>
<li><strong>Update_names.js</strong> - מקבל username ורשימת אנשים, ומעדכן את הרשימה המתאימה בדאטהבייס</li>
<li><strong>Update_stations.js</strong> - מקבל username ורשימת עמדות, ומעדכן את הרשימה המתאימה בדאטהבייס</li>


<br><br>
<h1 dir="rtl">הסבר כיצד להריץ</h1>
 <li> לעשות clone לקוד מgithub </li>
 <li> Npm install </li>
 <li> Npm run dev </li>
 <li> לפתוח דפדפן ולהכינס לכתובת : http://localhost:3000/ </li>
 <li> ניתן לראות את האתר בתצורה של נייד בעזרת לחיצה על F12 ואז SHIFT + ALT + M</li>
 
 




