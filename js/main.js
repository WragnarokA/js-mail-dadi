
let mailAutorizzate = ["luis@gmail.com", "guille@gmail.com", "jenny@gmail.com", "oli@gmail.com" ];
console.log(mailAutorizzate)
let mailUtente = prompt("inserisci la tua e-mail");

let mailAutorizzata = false;
let fine = false;


for (let i = 0; i < mailAutorizzate.length; i++) {
    const mailDaControllare = mailAutorizzate[i];

    if (mailUtente == mailDaControllare) {
        mailAutorizzata = true;
        document.getElementById("messaggio").innerText = "MAIL AUTORIZZATA..  BENVENUTO!!";
        
    } else if (mailAutorizzata==true) {
        console.log(`MAIL AUTORIZZATA BENVENUTO!`);
        break;
    } else {
        console.log(`NON SEI BENVENUTO`);
    }
  
}
console.log(mailAutorizzata);
        



    

// if (mailAutorizzata == true) {
//     console.log(`MAil autorizzata `);
    
// } else {
//     console.log(`MAil autorizzata `);
// }

    


