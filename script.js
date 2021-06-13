let arr = prompt("Array", "Type array numbers").split(",");
let ans = 0;
for(var i=0; i<arr.length; i++){
        ans = ans + parseFloat(arr[i]);
}
document.getElementById('showArray').innerHTML = 'given Array is <b>' + arr + '</b>'
document.getElementById('showAddition').innerHTML = 'Addition of given Array Elements is <b>' + ans + '</b>' ;

