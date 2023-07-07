import { collection, doc, getDocs, getFirestore, addDoc, updateDoc, query, where } from "firebase/firestore";

const db = getFirestore();

export async function addUser(userData: Object) {
    try {
        const docRef = await addDoc(collection(db, "users"), userData);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getUserData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export async function getUserByID(userID: string) {
    const q = query(collection(db, "users"), where("userID", "==", userID));

    const querySnapshot = await getDocs(q);

    return (querySnapshot.docs);



    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });
}