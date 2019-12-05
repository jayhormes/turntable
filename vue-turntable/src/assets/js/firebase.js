import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBRt_BbEQh3EaLQcbq4JYdrfD3No-mVBoU',
  authDomain: 'spinlucky-168d0.firebaseapp.com',
  databaseURL: 'https://spinlucky-168d0.firebaseio.com',
  projectId: 'spinlucky-168d0',
  storageBucket: 'spinlucky-168d0.appspot.com',
  messagingSenderId: '145587258963',
  appId: '1:145587258963:web:4440f8bd99a5e06a1de8a6',
  measurementId: 'G-LM992GWLRX'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp
