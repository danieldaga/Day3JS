let month = prompt('Escribe del 1 al 12 el mes que quieres saber los días que tiene')

if (month >=12 || month < 1) {
    alert('Introduce un mes valido')
     
}
if (month = 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        alert('Este mes tiene 31 días')
    } else{
        alert('Este mes tiene 30 días')
    

}
