// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

// function performOperation(a, b, callback) {
//     return callback(a + b);
//   }
  
//   function displayResult(result) {
//     return result;
//   }
  
//   let operation = performOperation(5, 3, displayResult);
//   console.log(operation);





function performOperation(a, b, callback) {
    let result = a + b;
    if(b === 0){
        let error = new Error("Non si può eseguire l'operazione")
        callback(error, null)
    } else{
        callback(null, result)
    }
}

function displayResult(error, data){
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
}
   


performOperation(5, 0, displayResult);