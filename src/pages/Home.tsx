import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonButton } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SliderImage from './SliderImage';
import HomeGrid from './HomeGird';

const Home: React.FC = () => {
    const history = useHistory();

    // Function to handle button click and navigate to the Complaint component
    const handleButtonClick = () => {
      history.push('/complaint');
    };

    return (
      <>
        <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>HOME</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent > 
        <SliderImage />
        <HomeGrid />
        <IonButton onClick={handleButtonClick}>Go to Complaint</IonButton>
        </IonContent>
      </IonPage>
      </>
    );
  };


export default Home;

