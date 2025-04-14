let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');

document.querySelectorAll('.btn').forEach(button=>{
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.num;
        if (display.value === 'Please enter a value' || display.value === 'Invalid Input') {
            display.value = '';}
        if (value !== undefined) {
            display.value += value;
        }
    });
});
equal.addEventListener('click', function(e){
    if (display.value === '') {
        display.value = 'Please enter a value';
    }
    else{
        try{
            let ans = eval(display.value);
            let output = ans.toString().slice(0, 19);
            display.value = output;
        }
        catch(err){
            display.value = 'Invalid Input';
            
        }
    }
});
clear.addEventListener('click', function(e){
    display.value = '';
});