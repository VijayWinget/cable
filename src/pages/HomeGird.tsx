import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomeGrid: React.FC = () => (
    <>
     <IonGrid  >
        {/* First Row */}
        <IonRow>
          <IonCol size="6">Column 1</IonCol>
          <IonCol size="6">Column 2</IonCol>
        </IonRow>

        {/* Second Row */}
        <IonRow>
          <IonCol size="4">Column 1</IonCol>
          <IonCol size="4">Column 2</IonCol>
          <IonCol size="4">Column 3</IonCol>
        </IonRow>

        {/* Third Row */}
        <IonRow>
          <IonCol size="3">Column 1</IonCol>
          <IonCol size="3">Column 2</IonCol>
          <IonCol size="3">Column 3</IonCol>
          <IonCol size="3">Column 4</IonCol>
        </IonRow>
      </IonGrid>
    </>
);

export default HomeGrid;
