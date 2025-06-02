import React from "react";
import { saveAs } from "file-saver";
import {  Document,  Packer,  Paragraph,  TextRun, } from "docx";

const DownloadWordButton = ( { active ,user, laveuse, imam, cimetiere, responsable, creanciers,  today , mesbiens , distribue}) => {
  let display;
    if (active ==14){
        display = true
    }
  const generateDoc = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "MY Wasiya",
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            new Paragraph(""),
            new Paragraph(
              `Je suis ${user.prénom} ${user.nom} , né le ${user.date} à ${user.ville}, ${user.pays} .`
            ),
            new Paragraph(
              `Je suis le fils de ${user.prénompere} ${user.nompere} et de ${user.prénommere} ${user.nommere}.`
            ),
            new Paragraph(""),
            new Paragraph({
              text: "Profession de foi",
              bold: true,
            }),
            new Paragraph(
              "J'atteste qu’il n’y a d’autre divinité qu’Allah qui mérite l’adoration, ..."
            ),
            new Paragraph(""),
            new Paragraph({
              text: "Recommandations à mes proches",
              bold: true,
            }),
            new Paragraph(
              "Je recommande à ma famille et à mes proches d’invoquer pour moi le pardon et la miséricorde..."
            ),
            new Paragraph(""),
            new Paragraph({
              text: "Ma préparation",
              bold: true,
            }),
            new Paragraph(`Je souhaite que mon corps soit lavé par : ${laveuse.laveuse}`),
            new Paragraph(`Coordonnées : ${laveuse.laveusecontact}`),
            new Paragraph(""),
            new Paragraph({
              text: "Ma Salat Janaza",
              bold: true,
            }),
            new Paragraph(
              `Je souhaite que la salat Janaza soit dirigée par : ${imam.imam}`
            ),
            new Paragraph(`Coordonnées :  ${imam.imamcontact}`),
            new Paragraph(
              "Je demande qu’aucune femme ne suive le convoi funéraire ni ne visite ma tombe."
            ),
            new Paragraph(""),
            new Paragraph({
              text: "Mon enterrement",
              bold: true,
            }),
            new Paragraph(`Je souhaite être enterré au cimetière de : ${cimetiere.cimetiere}`),
            new Paragraph(`Rapatriement à gérer par : ${responsable.responsable}  & Coordonnées:${responsable.responsablecontact}`),
            new Paragraph(
              "Ma tombe doit être conforme à la sunna (pas de décoration, pierre simple, etc.)."
            ),

            new Paragraph(""),
            new Paragraph({ text: "Mes dettes", bold: true }),
            ...(creanciers.length > 0
              ? creanciers.map((d, i) =>
                  new Paragraph(`${i + 1}. ${d.creanciername} – ${d.creanciercontact} – ${d.creancierprice}`)
                )
              : [new Paragraph("Je n’ai aucune dette.")]),

            new Paragraph(""),
            new Paragraph(`Je souhaite que mon héritage soit distribué par :${distribue.distribue}`),
            new Paragraph(`coordonnées :${distribue.distribuecontact}`),
            new Paragraph(""),
            new Paragraph({ text: "Mes biens", bold: true }),
            ...(mesbiens.length > 0
              ? mesbiens.map((bien, i) => new Paragraph(`${i + 1}. ${bien}`))
              : [new Paragraph("Je ne possède aucun bien à déclarer.")]),
            new Paragraph(""),
            new Paragraph({
              text: "Dua finale",
              bold: true,
            }),
            new Paragraph(
              "Ô Allah, permets-moi de remercier les bienfaits que Tu m’as accordés..."
            ),

            new Paragraph(""),
            new Paragraph(`Fait à : ${today.location}`),
            new Paragraph(`Le : ${today.date}`),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Mon_Testament.docx");
  };

  return(
    <>
     { !display  ?  ""  :  
         <div className="container ">
              <button className="download-butt" onClick={generateDoc}>Télécharger mon wasiya</button>
         </div>

     }
    </>
  )

};

export default DownloadWordButton;