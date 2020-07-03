importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBfw8psG4Wz7YefnHtSzR4Y76fDx7HTR5E",
    authDomain: "necleavepermissionsystem.firebaseapp.com",
    databaseURL: "https://necleavepermissionsystem.firebaseio.com",
    projectId: "necleavepermissionsystem",
    storageBucket: "necleavepermissionsystem.appspot.com",
    messagingSenderId: "1021369373401",
    appId: "1:1021369373401:web:27ad7c5066671221da24c8",
    measurementId: "G-NQWBS0HYS0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();



messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });