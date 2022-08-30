//Entrada do sexo
var quantF=0, quantH=0;
var refF=null, refH=null;
//Entrada da experiencia
var expS=null, expN=null;
//Entrada da idade
var totalAge=0;
//Média dos homens
var quantHExp=0, ageHExp=0;
//Menor idade entre as mulheres
var mIm=999;
//Mulheres idade < 35 exp = true
var m35=0;
//Homens com idade > 45 anos
var h45=0;


document.getElementById('add').addEventListener("click", function(e){

    e.preventDefault();

    const fields = document.querySelectorAll("[required]");

    function validateField(field) {

        function verify() {
            
            let foundError = false
    
            for(let error in field.validity) {
                if(field.validity[error] && !field.validity.valid) {
                    foundError = error
                }
            }
    
            return foundError;
        }
    
        
    
        return verify()
    }

    var i=0;
    if( i == 0) {

            let age = document.getElementById('age');
            let vAge = Number(age.value);
            
            totalAge = totalAge + vAge;
        
            age.value= '';
        
            let sexBox = document.getElementsByName("sex");
        
            for(let i=0;i<sexBox.length;i++){
                if(sexBox[i].checked){
                    if(sexBox[i].value == "sex-h") {
                        quantH++;
                        refH=true;
                    } else {
                        quantF++;
                        refF=true
                    }
                }
            }
            for(let current of sexBox) {
                current.checked = false;
            }
        
            let expBox = document.getElementsByName("exp");
        
            for(let i=0;i<expBox.length;i++){
                if(expBox[i].checked){
                    if(expBox[i].value == "s") {
                        expS=true;
                    } else {
                        expN=true;
                    }
                }
            }
            for(let current of expBox) {
                current.checked = false;
            }
        
        
        
            if(refH === true && expS === true) {
                ageHExp= ageHExp+totalAge;
                quantHExp++;
            }
        
            if(refF === true && expS === true && totalAge<35){
                m35++;
            }
        
            if(refF === true && expS === true && totalAge<mIm) {
                mIm=totalAge;
            }
        
            if(refH === true && totalAge>45) {
                h45++;
            }
            
            expS=null, expN=null;
            refF=null, refH=null;
            totalAge= 0;
        
            };
});


let span = document.getElementById('info');

function pressShow() {
    let res = ageHExp/quantHExp;
    let res45 = h45/quantH*100;
    if(res == "NaN"){res=0}
    if(m35 == 0){m35="Sem dados"}
    if(h45 == 0) {h45=" Sem dados"}
    if(mIm == 999) {mIm=" Sem dados"}
    //console.log(`quantidade ${quantHExp} totalidade ${ageHExp} res ${res}  totalage ${totalAge}`)
    span.innerHTML = `Quantidade de homens: ${quantH} <br/><br/>Quantidade de mulheres: ${quantF}
     <br/><br/>Média da idade de homens com experiencia: ${res} <br/><br/>
     Porcentagem de homens com mais de 45 anos: ${res45}%<br/><br/>
     Numero de mulheres com idade inferior a 35 e com experiencia: ${m35}<br/><br/>
     Menor idade entre as mulheres com experiencia: ${mIm}`
}