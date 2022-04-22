const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

let btnLogin = document.querySelector('#btnLogin');

function signIn() {
    auth.signInWithPopup(provider);
}

auth.onAuthStateChanged((val) => {
    if (val) {
        console.log(val);
        console.log(val.displayName);
        let list = document.querySelector('#btnLogin');
        list.innerHTML = '';
        list.innerHTML += `${val.displayName}`;
    }
})



