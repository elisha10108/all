// טבלת GAMES
// לקבל את כל הטבלה אבל רק את העמודות של קבוצה א וניקוד א
//gameModel.find({},{teamA:1,scoreA:1})
SELECT teamA,scoreA FROM games;

// לקבל את הטבלה ולשלוף את כל העמודות של הטבלה
// gameModel.find({})
SELECT * FROM games;

// לקבל רק את הרשומות של כדור רגל
// gameModel.find({category:"football"})
SELECT * FROM games WHERE category="football";

// לקבל את הרשומות שתצואה ב גבוהה מ 85
// gameModel.find({scoreB:{$gt:85}})
SELECT * FROM games WHERE scoreB > 85;

// לקבל את הרשומות שהתוצאה ב גבוהה מ1 אבל נמוכה מ 10
//// gameModel.find({scoreB:{$and:[{$gt:1},{$lt:10}]}})
//// gameModel.find({scoreB:{$gt:1,$lt:10}});
SELECT * FROM games WHERE scoreB > 1 AND scoreB < 10;

// קבל את כל הרשומות בסדר של תאריך מהישן לחדש
//// gameModel.find({}).sort({time:1})
SELECT * FROM games ORDER BY time;

// קבל את כל הרשומות בסדר של תאריך מהחדש לישן
// ASC -> מהקטן לגדול - ברירת מחדל
// DESC -> מהגדול לקטן
//// gameModel.find({}).sort({time:-1})
SELECT * FROM games ORDER BY time DESC;


// קבל את כל הרשומות בסדר של תאריך מהחדש לישן ורק את ה2 הראשונים
//// gameModel.find({}).sort({time:-1}).limit(2).skip(0)
SELECT * FROM games ORDER BY time DESC LIMIT 0,2;


// לקבל את כל הרשומות בסדר של תאריך מהחדש לישן ורק של אן בי איי ואת ה2 הראשונים בלבד
//// gameModel.find({category:"NBA"}).sort({time:-1}).limit(2).skip(0)
SELECT * FROM games WHERE category = "NBA" ORDER BY time DESC LIMIT 0,2;



// איך לקבל את מספר הרשומות בטבלה
///// gameModel.countDocuments({})
SELECT count(*) FROM games;

// alias (AS)-> שינוי שם של עמודה שקיבלנו באס קיו אל
SELECT count(*) AS count_games FROM games;

