let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string).toString();
            input.value = formatNumber(string);
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value= string; 
        }
        else if(e.target.innerHTML == 'DEL'){
            string= string.slice(0, -1);
            input.value = string;

        }
        else{
            string+=e.target.innerHTML;
            if (!isNaN(string.replace(/[\+\-\*\/]/g, ''))) {
                input.value = formatNumber(string);
            } else {
                input.value = string;
            }
        }
        
    })
})

function formatNumber(numStr) {
    let parts = numStr.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join('.');
}
