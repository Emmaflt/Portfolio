
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    //loop: true,
    deleteSpeed: 30
})

.changeDelay(50)
.typeString('Bienvenue sur mon Portfolio')
.pauseFor(300)
.typeString('<br> Emma Fouillat')
.pauseFor(300)
.typeString('<br> <span style="color: red;"> Dev HTML </span>')
.pauseFor(600)
.deleteChars(10)
.typeString('<span style="color: #27ae60;"> Dev CSS </span>')
.pauseFor(600)
.deleteChars(9)
.typeString('<span style="color: pink;"> Dev JS </span>')
.pauseFor(600)
.deleteChars(8)
.typeString('<span style="color: blue;"> Design </span>')
.pauseFor(600)
.deleteChars(7)
.typeString('<span style="color: orange;"> Suite Adobe </span>')
.pauseFor(600)
.deleteChars(13)
.typeString('<span style="color: purple;"> Polyvalente</span>')
.pauseFor(600)
.start()
.finish()






