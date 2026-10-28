קניות שלי — הרצה עם Docker Compose

דרישה: Docker עם Compose, למשל Docker Desktop פעיל.

1. חלצי את ה-ZIP ופתחי טרמינל בתוך תיקיית kaniyo.
2. הריצי:
   docker compose up -d --build
3. פתחי בדפדפן:
   http://localhost:8080

עצירה:
   docker compose down

צפייה בלוגים:
   docker compose logs -f

לאחר שינוי קוד:
   docker compose up -d --build

אם פורט 8080 תפוס, שַני ב-compose.yaml את 8080 לפורט פנוי.

השמירה מתבצעת ב-localStorage בדפדפן, ולא בקונטיינר. לכן אין צורך ב-volume.
הרשימה נשארת אחרי הפעלה מחדש של הקונטיינר כל עוד משתמשים באותו
מכשיר, דפדפן וכתובת (כולל הפורט), ולא מוחקים את נתוני האתר.
מעבר מכתובת האתר המקורי ל-localhost לא מעביר את הרשימה הקיימת.

האתר מוגש באמצעות Nginx. הקבצים כוללים HTML, CSS, JavaScript ונכסי האתר.
לא נדרשת התקנת חבילות Node או Python.
