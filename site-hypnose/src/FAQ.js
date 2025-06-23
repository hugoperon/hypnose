import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "Est-ce que je peux venir juste pour une séance ?",
    answer: `Une urgence, un besoin ponctuel, vous font ressentir le besoin de venir pour une séance. C'est tout à fait possible car il n'y a pas besoin d'attendre une profonde détresse psychique pour venir prendre soin de soi.\nCette séance vous permettra peut-être de voir des possibilités de résolution, de prendre du recul sur votre problème ou angoisse, ou encore de ressentir un état de détente.\nUne séance est un soin, un moment pour toi. Il n'y a pas besoin d'attendre d'aller très mal pour en bénéficier.\nL'hypnose peut d'ailleurs jouer un rôle très bénéfique dans ces séances ponctuelles.`
  },
  {
    question: "Quelle est la fréquence des séances ?",
    answer: `Les bénéfices de la thérapie (hypnothérapie, psychothérapie, sexothérapie…) sont aujourd'hui reconnus, néanmoins le coût des séances peut être un frein selon les budgets. Pour cela, la fréquence du suivi est adaptée à chacun (séances hebdomadaires, bi-mensuelles, mensuelles, voire occasionnelles).\nEn moyenne, les séances sont espacées de 2 à 3 semaines, afin que la personne ait le temps de mettre en pratique les changements entre les séances.`
  },
  {
    question: "Comment se déroule une séance ?",
    answer: `Une première partie de la séance consiste à comprendre ce que vous attendez, l'avancée dans vos objectifs, les difficultés ou douleurs rencontrées, les succès également. Ces échanges permettent déjà de faire un travail en profondeur, de trouver les déclics nécessaires.\nLa séance pourra ensuite comprendre une pratique d'hypnose, sur mesure en fonction de ce qui va être défini en séance et selon vos objectifs en général. Il n'est pas obligatoire d'utiliser l'hypnose pour autant ; nous pouvons utiliser des exercices sans entrer en hypnose si cela ne vous convient pas.`
  },
  {
    question: "Où se déroulent les séances ? En cabinet, en ligne ?",
    answer: `Les séances peuvent se dérouler en cabinet, en visio ou à domicile selon vos besoins et possibilités.`
  },
  {
    question: "Combien de temps dure une thérapie ?",
    answer: `La durée dépendra essentiellement de l'étendue de vos objectifs et de votre investissement dans le travail thérapeutique.\nAinsi s'il s'agit d'un objectif précis (travailler sur un blocage, sur un conflit, etc.), il est possible de faire une dizaine de séances, selon l'objectif et votre implication. Ce type de thérapie se focalise sur le présent et sur l'objectif à atteindre.\nS'il s'agit d'aborder la personne dans son contexte global (personnel, familial, émotionnel), il s'avère qu'elle puisse comprendre et faire bouger ce qui la bloque, la durée ne pourra être définie à l'avance, elle dépendra de l'étendue de votre objectif et de votre implication dans le processus thérapeutique.\nSachez néanmoins que la plupart des gens vont décider d'arrêter avant d'avoir atteint à 100% leur objectif, vous aurez envie de voler de vos propres ailes, plus rapidement qu'au début.\nDans tous les cas, un échange en amont ou en cours vous donnera toutes les raisons de thérapie pour voir votre parcours avancer avec une réelle progression et efficacité.`
  },
  {
    question: "Comment l'hypnose s'intègre-t-elle à la thérapie ?",
    answer: `J'utilise l'hypnose au cours des séances de psychothérapie et sexothérapie. Elle peut vous permettre d'envisager de nouvelles solutions, de booster votre motivation…\nUne première partie de la séance consiste à comprendre ce que vous attendez, l'avancée dans vos objectifs, les difficultés ou douleurs rencontrées, les succès également. Ces échanges permettent déjà de faire un travail en profondeur, de trouver les déclics nécessaires.\nLa séance pourra ensuite comprendre une pratique d'hypnose, sur mesure en fonction de ce qui va être défini en séance et selon vos objectifs en général. Il n'est pas obligatoire d'utiliser l'hypnose pour autant ; nous pouvons utiliser des exercices sans entrer en hypnose si cela ne vous convient pas.`
  },
  {
    question: "Puis-je me faire manipuler avec l'hypnose comme on peut le voir à la télévision ?",
    answer: `C'est une question légitime : est-ce que sous hypnose je vais faire/dire des choses que je n'ai pas envie de faire/dire ?\nEn fait, vous gardez toujours le contrôle de ce que vous dites et faites sous hypnose, et vous pouvez sortir de l'état d'hypnose à tout moment si vous le souhaitez.\nVotre inconscient veille sur vous et vous protège, vous ne ferez que ce que vous êtes prêt à faire et pourrez garder pour vous ce que vous ne voulez pas dire.`
  },
  {
    question: "Est-ce que je vais dormir pendant la séance d'hypnose ?",
    answer: `Nous pouvons alterner entre des phases qui ressemblent à une plongée dans les rêves et des phases où vous « remontez » et êtes conscient de la voix du thérapeute et des bruits alentours. Mais il ne s'agit pas de sommeil, plutôt d'une nature éveillée qui vous permet d'ouvrir des portes que vous ne vous autorisez pas consciemment.`
  },
  {
    question: "Sommes-nous tous hypnotisables ?",
    answer: `Oui, tout le monde est potentiellement hypnotisable, mais chacun à son rythme et selon sa sensibilité. L'important est d'être curieux(se) et de se sentir en confiance.`
  },
  {
    question: "Existe-t-il des contre-indications à l'hypnose ?",
    answer: `L'hypnose est une méthode naturelle et sans danger. La seule contre-indication que l'on peut relever est celle de la psychose avérée ou relève de la psychiatrie lourde et pour laquelle l'hypnothérapeute ne pourra apporter aucune solution.`
  },
  {
    question: "Comment vais-je me sentir après une séance d'hypnose ?",
    answer: `Vous vous sentirez reposé(e), avec une sensation de plénitude et de bien-être.`
  },
  {
    question: "Est-ce que je vais me souvenir de ce qu'il s'est passé pendant la séance d'hypnose ?",
    answer: `Parfois l'inconscient juge bon de maintenir certains souvenirs hors de portée de votre conscience, lorsque cela permet une meilleure assimilation du travail effectué sous hypnose. Mais la plupart du temps vous vous souvenez de tout.`
  },
];

export default function FAQ() {
  return (
    <div style={{ width: '100%' }}>
      {/* Bandeau titre */}
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          background: '#1976d2',
          padding: 0,
          marginTop: '0px',
          marginBottom: 0,
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
          margin: 0,
          padding: '38px 0 38px 0',
          letterSpacing: '1px',
          fontFamily: 'Montserrat, Inter, Arial, sans-serif',
        }}>
          FAQ
        </h1>
      </div>
      {/* Contenu */}
      <div style={{
        maxWidth: 900,
        margin: '48px auto 0 auto',
        padding: '0 24px',
        fontSize: '1.13em',
        lineHeight: 1.7,
        background: 'transparent',
      }}>
        {faqData.map((item, idx) => (
          <Accordion key={idx}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight="bold">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ whiteSpace: 'pre-line' }}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
