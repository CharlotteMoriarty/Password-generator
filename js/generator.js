/**
 * założenia dla warunków pobieranie elementów

 */


var newS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
var empty = "";
var newPass = "";
//przykładowy dla zaznaczonej opcji małe literki
function creator(passLength) {
    empty = ""
    for (i=0; i <passLength; i++)
      empty +=newS.charAt(Math.floor(Math.random()*newS.length))
    return empty
    while(passLength--) {
        newPass+=empty[Math.floor(Math.random()* empty.length)]}
    }
    result.value = newPass;
function populateForm(enteredLenght) {
    document.passGenerator.output.value = creator(enteredLenght)
}