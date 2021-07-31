var poem = `
TOC...
TOC...
Wake up, Teo...
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
TOC...

TOC...

C'est la démence qui avance.
`
var tab = poem.split(/\r?\n/);

function commonLength(s1, s2) {
    for (var i = 0; i < s1.length && i < s2.length && s1[i] === s2[i];)
    {
        i++;
    }
    console.log(i)
    return i;
}

function runner() {
const instance = new Typewriter('#output', {
    loop: true,
    deleteSpeed: 0
});

/*  instance.typeString('Hello world!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Another message here...')
    .pauseFor(1000)
    .start();
*/

var dc = 0;
tab.forEach((element, index) => {
    tt = 2100
    if (element) {
        dc = (element.length - commonLength(element, tab[index + 1]))
        
    } else {
        dc = 0
    }
    if (element === "TOC..." || element === "Wake up, Teo...") {
        tt *= 2
    }
    if (dc)
    {
        instance.typeString(element.substring(index == 0 ? 0 : commonLength(element, tab[index - 1])))
        .pauseFor(tt)
        .deleteChars(dc)
    } else {
        instance.typeString(element.substring(index == 0 ? 0 : commonLength(element, tab[index - 1])))
        .pauseFor(tt)
    }
});
instance.start();
}
setTimeout(runner, 1000)