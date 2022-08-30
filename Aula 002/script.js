//id departamento title lable
var deph2 = document.getElementById('deph2');

var form1 = document.querySelector('.form-1');
var form2 = document.querySelector('.form-2');

var Title = document.getElementById('Title');
var funcf = document.getElementById('funcf');
var btn = document.querySelector('.btn');

var ll= 1; //o exemplo mais puro de redundancia kkkkk
var totalFunc=0;
var idMaior = 0;
var maiorSal= 0;
var funcNum=0;
var sal=[];
var ref=0;
var i= 0;
var num=0;
var gg= 0;
var numTitle=1;
var depRef=0;
var funcText=1;

document.getElementById('add').addEventListener("click", function(e){

    e.preventDefault();
        
        let dep = document.getElementById('dep');
        depRef= Number(dep.value);

        funcf.innerHTML = funcText;
        
        
        var funcS = document.getElementById('func');
        funcNum = Number(funcS.value);
        num = num + funcNum;
        //console.log(num);
        if(funcNum>maiorSal){
            maiorSal=funcNum;
            idMaior= ll;
        }
    
        if(ref == 0) {
            form1.style.display = 'none';
            form2.style.display = 'flex';
        }
        
        if(gg!=0){if(ref<depRef){ref++;}}
        //console.log(ref)
        gg++;
        funcText++;
        if(ref==depRef){
            totalFunc= totalFunc+depRef;
            sal[i]=num;
            num=0;
            i++;
            ref=0;
            numTitle++;
            deph2.innerHTML=numTitle
            form1.style.display = 'flex';
            form2.style.display = 'none';
            depRef=0;
            dep.value = "";
            funcText= 1;
            gg=0;
            ll++;
        }
        if(numTitle == 4) {
            form1.style.display = 'none';
            form2.style.display = 'none';
            Title.innerHTML = "Finalizado!";
            btn.style.display = 'none';
            deph2.innerHTML= "";
        } 


    


    funcS.value = "";
});


var span = document.getElementById('info');

function pressShow() {
    
    span.style.fontSize = '18px';
    span.innerHTML = `
    Total de funcionarios empresa: ${totalFunc} <br/><br/>
    Maior salario: dep(${idMaior}) salario(${maiorSal})`
    for(let i=0;i<numTitle-1;i++){
        span.innerHTML += `<br/><br/>Total de salarios departamento ${i+1}: ${sal[i]}`
    }
}

/*Total de salarios departamento 1: ${sal[0]} <br/><br/>
    Total de salarios departamento 2: ${sal[1]} <br/><br/>
    Total de salarios departamento 3: ${sal[2]} <br/><br/>*/