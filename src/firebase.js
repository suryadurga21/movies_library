    import { initializeApp } from "firebase/app";
    import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    } from "firebase/auth";
    import { addDoc, collection, getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyC_A9JWl7kEBgm5rkyaD5A6no3grR-_0SE",
    authDomain: "movies-library-ad39e.firebaseapp.com",
    projectId: "movies-library-ad39e",
    storageBucket: "movies-library-ad39e.appspot.com",
    messagingSenderId: "466399683127",
    appId: "1:466399683127:web:4637c63d025d6db0d595b2",
    };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    const db = getFirestore(app);

    const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password); // Await the result
        const user = res.user; // Access user from the response
        await addDoc(collection(db, "user"), {
        uid: user.uid,
        name:name,
        authProvider: "local",
        email,
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
    };

    const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password); // Await the result
    }catch(error) {
        console.log(error);
        alert(error);
    }
    };

    const logout = () => {
    signOut(auth);
    };

    export { auth, db, login, signup, logout };