const admin = require('firebase-admin');
const serviceAccount = require("../reactnative-55cd6-firebase-adminsdk-ijel6-2a850825c8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendNotification = (imgUrl, title, body) => {
  const token = "d5E-7g09TiyDxPmEcwH5C8:APA91bFmvqAtFofkdxe9BX40lvnkMouQjME3inqcsX3JN3t0rAX43PmtrkDEBkP_2hTZIT6ivy3V-XKzDDy3ZFf6VKdYSvZbpQt3YydsL39-CyaKGTeFDFqnSMits1FPmjHUUdgQ8Mow";

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
