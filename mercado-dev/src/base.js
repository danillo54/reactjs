const config = {
    apiKey: "AIzaSyAaa1vs8_PUxvqGKe_SQvoL0m7Wv4xbRKQ",
    authDomain: "mercadodev-aeba8.firebaseapp.com",
    databaseURL: "https://mercadodev-aeba8.firebaseio.com",
    projectId: "mercadodev-aeba8",
    storageBucket: "gs://mercadodev-aeba8.appspot.com/",
    messagingSenderId: "733506660529"
  };

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()
  
  export default base