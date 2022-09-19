console.log("Giovedì");

/*
const rubrica = [
  {
    name: "Michele",
    avatar: "_1",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Hai portato a spasso il cane?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Ricordati di stendere i panni",
        status: "sent",
      },
      {
        date: "10/01/2020 16:15:22",
        message: "Tutto fatto!",
        status: "received",
      },
    ],
  },
  {
    name: "Fabio",
    avatar: "_2",
    visible: true,
    messages: [
      {
        date: "20/03/2020 16:30:00",
        message: "Ciao come stai?",
        status: "sent",
      },
      {
        date: "20/03/2020 16:30:55",
        message: "Bene grazie! Stasera ci vediamo?",
        status: "received",
      },
      {
        date: "20/03/2020 16:35:00",
        message: "Mi piacerebbe ma devo andare a fare la spesa.",
        status: "sent",
      },
    ],
  },
  {
    name: "Samuele",
    avatar: "_3",
    visible: true,
    messages: [
      {
        date: "28/03/2020 10:10:40",
        message: "La Marianna va in campagna",
        status: "received",
      },
      {
        date: "28/03/2020 10:20:10",
        message: "Sicuro di non aver sbagliato chat?",
        status: "sent",
      },
      {
        date: "28/03/2020 16:15:22",
        message: "Ah scusa!",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro B.",
    avatar: "_4",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Lo sai che ha aperto una nuova pizzeria?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Si, ma preferirei andare al cinema",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro L.",
    avatar: "_5",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ricordati di chiamare la nonna",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Va bene, stasera la sento",
        status: "received",
      },
    ],
  },
  {
    name: "Claudia",
    avatar: "_6",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao Claudia, hai novità?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Non ancora",
        status: "received",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "Nessuna nuova, buona nuova",
        status: "sent",
      },
    ],
  },
  {
    name: "Federico",
    avatar: "_7",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Fai gli auguri a Martina che è il suo compleanno!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Grazie per avermelo ricordato, le scrivo subito!",
        status: "received",
      },
    ],
  },
  {
    name: "Davide",
    avatar: "_8",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  },
];
*/

const app = new Vue({
  el: "#container",
  data: {
    contattoAttivo: 0,
    messaggioDiTesto: "",
    cercaContatto: "",

    rubrica: [
      {
        name: "Michele",
        avatar: "_1",
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di stendere i panni",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro B.",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro L.",
        avatar: "_5",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ricordati di chiamare la nonna",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Va bene, stasera la sento",
            status: "received",
          },
        ],
      },
      {
        name: "Claudia",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao Claudia, hai novità?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Non ancora",
            status: "received",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "Nessuna nuova, buona nuova",
            status: "sent",
          },
        ],
      },
      {
        name: "Federico",
        avatar: "_7",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Fai gli auguri a Martina che è il suo compleanno!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Grazie per avermelo ricordato, le scrivo subito!",
            status: "received",
          },
        ],
      },
      {
        name: "Davide",
        avatar: "_8",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao, andiamo a mangiare la pizza stasera?",
            status: "received",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "OK!!",
            status: "received",
          },
        ],
      },
    ],
  },

  methods: {
    attivaIndice(indice) {
      this.contattoAttivo = indice;
    },
    aggiungiMessaggio() {
      const messaggioDaAggiungere = this.messaggioDiTesto;
      this.messaggioDiTesto = "";
      if (messaggioDaAggiungere.length > 0) {
        let nuovoMessaggio = {
          // date: moment().format("DD/MM/YYYY hh:mm:ss"),
          date: moment().format("hh:mm:ss"),
          message: messaggioDaAggiungere,
          status: "sent",
        };
        this.rubrica[this.contattoAttivo].messages.push(nuovoMessaggio);
        setTimeout(() => {
          let opzioniMessaggio = [
            "Ok",
            "Ti chiamo dopo",
            "neanche se mi paghi",
            "A stasera",
            "Saluti e baci",
            "Birretta?",
            "Grazie",
          ];
          let messaggioDaAggiungere;
          const messaggioRandom = Math.floor(Math.random() * 7) + 1;

          /*
          if (messaggioRandom === 1) {
            messaggioDaAggiungere = opzioniMessaggio[0];
          } else if (messaggioRandom === 2) {
            messaggioDaAggiungere = opzioniMessaggio[1];
          } else if (messaggioRandom === 3) {
            messaggioDaAggiungere = opzioniMessaggio[2];
          } else if (messaggioRandom === 4) {
            messaggioDaAggiungere = opzioniMessaggio[3];
          } else if (messaggioRandom === 5) {
            messaggioDaAggiungere = opzioniMessaggio[4];
          } else if (messaggioRandom === 6) {
            messaggioDaAggiungere = opzioniMessaggio[5];
          } else {
            messaggioDaAggiungere = opzioniMessaggio[6];
          }
          */

          switch (messaggioRandom) {
            case 1:
              messaggioDaAggiungere = opzioniMessaggio[0];
              break;
            case 2:
              messaggioDaAggiungere = opzioniMessaggio[1];
              break;
            case 3:
              messaggioDaAggiungere = opzioniMessaggio[2];
              break;
            case 4:
              messaggioDaAggiungere = opzioniMessaggio[3];
              break;
            case 5:
              messaggioDaAggiungere = opzioniMessaggio[4];
              break;
            case 6:
              messaggioDaAggiungere = opzioniMessaggio[5];
              break;
            case 7:
              messaggioDaAggiungere = opzioniMessaggio[6];
              break;
            default:
          }

          const risposta = {
            date: moment().format("hh:mm:ss"),
            message: messaggioDaAggiungere,
            status: "received",
          };
          this.rubrica[this.contattoAttivo].messages.push(risposta);
        }, 1000);

        console.log(messaggioDaAggiungere);
      } else {
        console.log("Scrivi qualcosa");
      }
    },
    controlla() {
      console.log(this.cercaContatto);
    },
  },
});
