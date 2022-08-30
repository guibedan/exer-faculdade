//id departamento
//var dep = document.getElementById('dep');
var deph2 = document.getElementById('deph2');
var sal=[10,2];
var gg=0;
var l= 0;
var num=0;

var dep = 4
document.getElementById('add').addEventListener("click", function(e){

    e.preventDefault();
    
    if(gg==1){sal[l]=num;num=0;l++;}
    
    var funcS = document.getElementById('func');
    num= num+Number(funcS.value);
    
    if(gg<dep){gg++;}
    console.log(num)

    funcS.value = "";
});


let span = document.getElementById('info');

function pressShow() {
    
    //console.log(`quantidade ${quantHExp} totalidade ${ageHExp} res ${res}  totalage ${totalAge}`)
    span.innerHTML = `Quantidade de homens: ${sal[0]}`
}