const form=document.getElementById('calc');
const x=document.getElementById('x');
const y= document.getElementById('y');
const res= document.getElementById('results');
const sumres=document.getElementById('sum');
const diffres=document.getElementById('diff');
const prodres=document.getElementById('prod');
const quotres=document.getElementById('quot');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const a=parseFloat(x.value);
    const b = parseFloat(y.value);

    if (Number.isNaN(a) || Number.isNaN(b)){
        alert('Please enter two numbers.');
        (Number.isNaN(a) ? x:y).focus();
        return;
    }

    sumres.textContent=a+b;
    diffres.textContent=a-b;
    prodres.textContent=a*b;
    quotres.textContent=(b===0)? 'Cannot divide by 0': (a/b);

    res.classList.remove('hidden');
})