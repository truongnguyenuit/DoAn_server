const admin = require('firebase-admin');
const serviceAccount = require("../reactnative-55cd6-firebase-adminsdk-ijel6-2a850825c8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendNotification = (imgUrl, title, body) => {
  console.log("sendnotification")
  const token = "fe7e9EJtTGyoStQ523cj7_:APA91bGxd3n5kxw0ET-LiTPYIB6StKsp0IRcFiGmpha29wfg0H1mysOJbiBJbbLQX7B-N3Ap5raz9vT-vYmbaxYm7PHigO40YZHHJ146NiK-1iaju1rg_WHMIVL2fZuMPX4NTodJZiyJ";

  return admin.messaging().send({
    token: token,
    android: {
      notification: {
        body: body,
        title: title,
        color: "#fff566",
        priority: 'high',
        sound: "default",
        vibrateTimingsMillis: [200, 500, 800], 
        imageUrl: imgUrl
      }
    }
  });
};

module.exports = { sendNotification };
