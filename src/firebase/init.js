import firebase from 'firebase';
import Config from './config';

firebase.initializeApp(Config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.GoogleAuthProvider();
export const master = 'eCOjB9cHyCWFLGDIn7velXP9adr1';