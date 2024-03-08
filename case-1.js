const changeWord = (selectedText, changedText, text) => 
    selectedText && changedText && text ? text.replace(selectedText, changedText) : "Data kosong atau yang diterima tidak benar";

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai', 'membenci', kalimat1))
// Ekspektasi Output:
// => Andini sangat membenci kamu selamanya

console.log(changeWord('bromo', 'semeru', kalimat2))
// Ekspektasi Output:
// => Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu
