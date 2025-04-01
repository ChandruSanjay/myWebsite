const decreaseCount = document.getElementById('Dbtn');
const increaseCount = document.getElementById('Ibtn');
const resetCount = document.getElementById('reset-btn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseCount.onclick = () => {
    count++ ;
    countLabel.textContent = count;
}
decreaseCount.onclick = () => {
    count > 0 ? count-- : 0
    countLabel.textContent = count;
}
resetCount.onclick = () => {
    count = 0 ;
    countLabel.textContent = count;
}





