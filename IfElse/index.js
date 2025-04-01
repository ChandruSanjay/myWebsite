const myAge = document.getElementById('myAge');
const mySubmit = document.getElementById('mySubmit');
const para = document.getElementById('para');

let age;

mySubmit.onclick = () => {
    age = myAge.value;
age = Number(age);

if(age >= 100){
    para.textContent = "You are TOO OLD to enter this site"
}
else if (age >= 18) {
    para.textContent = "You are eligible to enter this site"
} 
else if(age == 0){
    para.textContent = "You are just born kid"
}
else if (age < 0){
    para.textContent = "Your age can't below 0"
}else{
        para.textContent = "You must have 18+ to enter this site"
    }
}

