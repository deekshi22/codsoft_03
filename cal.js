let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button'); 
let string = "";
let buttonsArray = Array.from(buttons);

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let btnText = e.target.innerText;

        if (btnText =='=') { 
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btnText == 'AC') { 
            string = "";
            input.value = string;
        } else if (btnText == 'DEL') {
            string = string.substring(string.length - 1,0);
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
