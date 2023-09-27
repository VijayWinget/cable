import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import React from 'react';

const Complaint : React.FC = () =>{
    return (<>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Complaint</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
         User Complaint
      </IonContent>
    </IonPage>
    </>)
}

export default Complaint;