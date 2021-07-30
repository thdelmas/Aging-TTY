
var app = document.getElementById('output');

var typewriter = new Typewriter(app, {
    autoStart: true,
    loop: false,
    cursor: '·',
    typingSpeed: 'natural',
    deleteSpeed: 1
});

var poem = `
Vivre et revivre, 
Encore et encore, 
Tes torts et remords. 
Encore pire, 
Que tes pires souvenirs. 
Les émotions s'enchaînent, 
Les pensées se gangrènent, 
La boucle commence, 
Voilà la démence. 
Flash-back, tu raques, 
Pensées défoncées. 
Cloisonné, prisonnier
De tes propres pensées, 
Encore et encore, 
Pensées avides, 
Pensées acides. 
La boucle commence, 
Voilà la démence. 
Un mot, un sursaut, 
Un sanglot. 
Enchaîné, traîné, 
Malmené, torturé. 
Mourir et mourir
Encore et encore, 
Des souvenirs d'or, 
Un rire, des sourires. 
Souffrance. 
La boucle commence, 
Voilà la démence. 
Aucun acte, le corps intact, 
Sans un mot
L'esprit en lambeaux, 
Il pleure, attends son heure
Assis sur le trottoir, sans espoir.
Voilà une bouteille, 
Petite merveille, 
Le voilà, il s'endort ivre. 
Encore et encore. 
La boucle recommence, 
Toc . . .
Toc . . .
C'est la démence qui avance.
`
var tab = poem.split(/\r?\n/);

lenToPrint = 0;
tab.forEach((elem, index) => {
    let lenToPrint;
    let lenToDelete;
    tab[index] = tab[index].trim()
    if (index == 0) {
        cmplen = parseInt(0);
        lenToDelete = parseInt(0);
    }
    else {
        lenlen = new Promise((str1, str2) => {
            let i = 0;
            while (str1[i] == str2[i]) {
                i++;
            }
            return parseInt(i, 10);
        });
        cmplen = await lenlen;
        lenToDelete = parseInt(tab[index - 1] - cmplen);
    }
    lenToPrint = parseInt(tab[index] - cmplen);
    console.log(cmplen, lenToPrint, lenToDelete);
    typewriter.typeString(tab[index].substring(cmplen + 1)).pauseFor(420);
});
    typewriter.start();
