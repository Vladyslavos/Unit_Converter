document.getElementById('kmInput').addEventListener('input',function(e){
let km = e.target.value;
document.getElementById('metresOutput').innerHTML = km * 1000 + 'm';
document.getElementById('cmOutput').innerHTML = km * 100000 + 'cm';
document.getElementById('mlOutput').innerHTML = km * 1000000 + 'mm';
});