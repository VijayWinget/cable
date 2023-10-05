import { db } from './firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const searchUser = (username, password) => {
    const userCollection  = collection(db, 'user');
    return userCollection
      .where("username", "==", username)
      .where("password", "==", password)
      .get();
};

export const addUser = (user) => {
    const userCollection  = collection(db, 'user');
    return userCollection.add(user);
};

export const getUsers = () => {
    const userCollection = db.collection("user");
    return userCollection.get();
};

export const updateUser = (id, user) => {
    const userCollection = db.collection("user");
    return userCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
    const userCollection = db.collection("user");
    return userCollection.doc(id).delete();
};
