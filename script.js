const people=document.getElementById("people");
const hiddendiv=document.getElementById("hiddendiv") //
const small=document.getElementById("Small_Cups");
const favor=document.getElementById("Favor_Bags");
const gopo=document.getElementById("GOPO_Chips");
const medium=document.getElementById("Medium_Bags");
const large=document.getElementById("Large_Bags");
const unit=document.getElementById("unit");
const cost=document.getElementById("cost")
const radioButtons = document.querySelectorAll('input[name="extras"]');



people.addEventListener("input",()=>{
    if(people.value){
        div1.addEventListener("change",()=>{
            for(const radio of radioButtons){
                if(radio.checked){
                    unit.value=people.value
                    hiddendiv.style.display="block";
                    // console.log(radio.value)
                    const selectedRadio=radio.value.toLowerCase();

                    switch(selectedRadio){
                        case 'small':
                            cost.value=people.value;
                            
                            break;
                        case 'favor':

                            break;
                        case 'gopo':

                            break;
                        case 'medium':

                            break;

                        case 'large':

                            break;


                    }


                }
            }
        })
    }
   

})



