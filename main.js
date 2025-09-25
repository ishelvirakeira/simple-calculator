const form=document.getElementById('calc');
const x=document.getElementById('x');
const y= document.getElementById('y');
const res= document.getElementById('results');
const sumres=document.getElementById('sum');
const diffres=document.getElementById('diff');
const prodres=document.getElementById('prod');
const quotres=document.getElementById('quot');

form.addEventListener('submit', (e)=>{
    e.preventDefault();//inspo from the  JavaScript DOM Crash Course

    const a=parseFloat(x.value);//referenced from mdn
    const b = parseFloat(y.value);

    if (Number.isNaN(a) || Number.isNaN(b)){//mdn
        alert('Please enter two numbers.');
        if (Number.isNaN(a)){
            x.focus();
        } else {
            y.focus();
        }
    }
 
    sumres.innerHTML=a+b;
    diffres.innerHTML=a-b;
    prodres.innerHTML=a*b;
    if(b===0){
        quotres.innerHTML= "Cannot divide by 0";
    } else {
        quotres.innerHTML = a/b;
    }
})
