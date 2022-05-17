import { String, Union } from 'ts-toolbelt';

const query = `/home?name=burke&profession=dev&passion=cats`;

type Query = typeof query;
type SecondQueryPart = String.Split<Query, '?'>[1];
type QueryElements = String.Split<SecondQueryPart, '&'>;


// At each iteration
// type Key = String.Split<QueryElements[0], '='>[1];
// type Value = String.Split<QueryElements[1], '='>[1];

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, '='>[0]]: String.Split<
      QueryElement,
      '='
    >[1];
  };
}[QueryElements[number]];

const obj: Union.Merge<QueryParams> = {
  name: 'burke',
  profession: 'dev',
};





/**
 * 
 * 
 *

Astrid lapia

Stéphanie 30 89



  Résidence principal
  170 540€ (TVA 5,5%)
  PTZ

  1. Fin novembre -> Contrat de réservation
  2. Début décembre -> Liquidation de mon employeur
  3. Signature CDI sans période d'essaie courant mai
  4. La banque me demande 3 fiche de paie -> Je pense trop long pour le cabinet d'architecte


  Est-ce que c'est possible d'avoir un pret dans un délai plus court ?


  1 fiche de paie même mois pas 


  Bonjour,

  Je me permet de revenir vers vous concernant l'avancement de mes démarches bancaire.
  Je viens de terminer un rendez-vous avec un cabinet de courtage, celuic-ci est en mesure de m'obtenir un prêt immobilier courant Juin.

  Merci encore une fois pour votre patience !

  Cordialement,
  Franck Fernandez


 * 
 * 
 * 
 * 
 * 
 */