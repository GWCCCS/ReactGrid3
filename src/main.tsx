import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>equal width </b>
      <IonGrid>
        <IonRow>
          <IonCol size="3">1</IonCol>
          <IonCol size="3">2</IonCol>
          <IonCol size="3">3</IonCol>
          <IonCol size="3">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>Stacked, 3 col for sm and up</b>
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-sm="3">
            1
          </IonCol>
          <IonCol size="12" size-sm="3">
            2
          </IonCol>
          <IonCol size="12" size-sm="3">
            3
          </IonCol>
          <IonCol size="12" size-sm="3">
            4
          </IonCol>
        </IonRow>
      </IonGrid>


      <b>Stacked, 6 col width for md and up</b>
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-md="6">
            1
          </IonCol>
          <IonCol size="12" size-md="6">
            2
          </IonCol>
          <IonCol size="12" size-md="6">
            3
          </IonCol>
          <IonCol size="12" size-md="6">
            4
          </IonCol>
        </IonRow>
      </IonGrid>


      <b>Stacked, 8 col width for lg and up</b>
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-lg="8">
            1
          </IonCol>
          <IonCol size="12" size-lg="8">
            2
          </IonCol>
          <IonCol size="12" size-lg="8">
            3
          </IonCol>
          <IonCol size="12" size-lg="8">
            4
          </IonCol>
        </IonRow>
      </IonGrid>

      <p>12 Column layout</p>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
