const checkBox = document.getElementById('checkBox');
const masterBtn = document.getElementById('masterBtn');
const visaBtn = document.getElementById('visaBtn');
const paypalBtn = document.getElementById('paypalBtn');
const result = document.getElementById('result');
const resultRadio = document.getElementById('resultRadio');
const mySubmit = document.getElementById('mySubmit');


mySubmit.onclick = ()=> {
    
    if(checkBox.checked){
        if(checkBox.checked){
            result.textContent = 'you are subscribed to this account'
        }
        else{
            result.textContent = 'you are NOT subscribed!'
        }
        if(masterBtn.checked){
            resultRadio.textContent = 'you are paying through MasterCard'
        }
        else if (visaBtn.checked){
            resultRadio.textContent = 'you are paying through VisaCard'
        }
        else if(paypalBtn.checked) {
            resultRadio.textContent = 'you are paying through Paypal'
        }
        else{
           resultRadio.textContent= 'You need to select the payment way'
        }
    }else{
         resultRadio.textContent= 'You must subscribe for do payment!'
    }
   
     
}
let info;

let people =function(person,age){
    this.person = person;
    this.age = age;
   this.info = function(){
       console.log(this);
        setTimeout(() =>{
            console.log(this.person +"is" + this.age + "years old");
        },3000)
    }
}
let person1 = new people('john',21);
person1.info();


