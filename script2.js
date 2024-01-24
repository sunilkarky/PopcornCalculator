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
    // validate();
    if(people.value){
        div1.addEventListener("change",()=>{
    
            for(const radio of radioButtons){
                if(radio.checked){
                
                    hiddendiv.style.display="block";
                    // console.log(radio.value)
                    const selectedRadio=radio.value.toLowerCase();

                    switch(selectedRadio){
                        case 'small':
                            units(people.value)
                            cost.value=people.value;
                            
                            break;
                        case 'favor':
                            units(people.value)
                            break;
                        case 'gopo':
                            units(people.value)
                            break;
                        case 'medium':
                            units_medium(people.value)
                            break;

                        case 'large':

                            break;


                    }


                }
            }
        })
    }
   
})
function validate(){
    var selected = document.querySelector('input[name="extras"]:checked');
    if(people.length==null ||isNaN(people.value)||people.value<0){
        alert("No negative numbers and field must be filled")
    }
if(!selected){
    alert("Select at least one packahing type");
}


}
function units(cvalue){
    unit.value=cvalue;
}

function units_medium(cvalue){
    if(cvalue==0 || cvalue==1||cvalue==2){
        unit.value=0;
        cost.value=0;
    }
}
function cost_favor(cvalue){
    unit.value=cvalue;


}

