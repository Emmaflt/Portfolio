
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 30
})

.changeDelay(50)
.typeString('Contact')
.pauseFor(600)
.deleteChars(7)
.typeString('اتصال')
.pauseFor(600)
.deleteChars(10)
.typeString('Contactar')
.pauseFor(600)
.deleteChars(10)
.typeString('Contatto')
.pauseFor(600)
.deleteChars(10)
.typeString('संपर्क करें')
.pauseFor(600)
.deleteChars(11)
.typeString('Kontakt')
.pauseFor(600)
.deleteChars(10)
.typeString('接触')
.pauseFor(600)
.deleteChars(10)
.start()
.finish()





