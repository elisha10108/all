// טבלת GAMES
// CREATE - הוספת רשומה ישראל סקטולנד 0-2
// let game = new GameModel({teamA:"israel",teamB:"scotland",scoreA:0,scoreB:2,time:"2021-03-29",category:"football"})
// await game.save()

INSERT INTO games (teamA,teamB,scoreA,scoreB,time,category) VALUE ("israel","scotland",0,2,"2021-03-29","football")

// הוספה של כמה רושמות
INSERT INTO games (teamA,teamB,scoreA,scoreB,time,category) VALUES
 ("israel","scotland",0,2,"2021-03-29","football"),
 ("Italy","Brazil",1,1,"1994-08-01","football")

 // איך אני מעדכן רשומה
 // GameModel.updateOne({id:8},{teamB:"Denmark",scoreA:1,scoreB:1,time:"2021-04-01"})
 UPDATE games SET teamB = "Denmark" , scoreA = 1, scoreB = 1 , time = "2021-04-01" WHERE id = 8;


 // מחיקת רשומה
 // GamgeModel.deleteOne({id:9})
 DELETE FROM games WHERE id = 9;


 /// USER TABLE

 INSERT INTO users (user,email,pass) VALUES ("jack","jack@walla.com","111");