import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol,IonImg } from '@ionic/react';
import { personCircle } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert } from '@ionic/react';
import './Login.css' ;

//database 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase.config'

//services
import { searchUser } from '../services/user.fb-service'


function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("Admin");
  const [password, setPassword] = useState<string>("Admin");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const collectionRef = collection(db, 'user');
  const handleLogin = async () => {
    searchUser(email,password)
   alert( searchUser(email,password));

  };
  

   // try {
    //   console.log("handleLogin function is executing...");
  
    //   const docRef = await addDoc(collectionRef, {
    //     username: "Admin",
    //     password: "Admin",
    //     role: "ADMIN",
    //     isActive: true,
    //     timestamp: serverTimestamp()  
    //   });
  
    //   console.log("Document added with ID: ", docRef.id);
    //   alert("Document added successfully  "+docRef.id);
    // } catch (err) {
    //   alert("Document added Failed");
    //   console.error("Error adding document: ", err);
    //   // alert("Error: " , err);
    // }


  return (
    <IonPage className="custom-background" >
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonAlert
                isOpen={iserror}
                onDidDismiss={() => setIserror(false)}
                cssClass="my-custom-class"
                header={"Error!"}
                message={message}
                buttons={["Dismiss"]}
            />
          </IonCol>
        </IonRow>
        <IonRow>
  <IonCol style={{ display: 'flex', justifyContent: 'center' }}>
    <IonImg src="assets/logo1.png" alt="logo" style={{ width: '200px', height: '200px' }}></IonImg>
  </IonCol>
</IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
            <IonLabel position="floating"> Email</IonLabel>
            <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                >
            </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating"> Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                >
              </IonInput>
            </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: "small" }}>
                  By clicking LOGIN you agree to our <a href="#">Policy</a>
              </p>
              <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
              <p style={{ fontSize: "medium" }}>
                  Don&apos;t have an account? <a href="#">Sign up!</a>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow>
          <IonCol>
            <IonImg src="assets/loginImage.jpg" alt="logo" style={{ width: '100', height: '100' }} ></IonImg>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;