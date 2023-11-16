const button=document.querySelector('#btn');
const par=document.querySelector('#show');
button.addEventListener('click', result);
function  result(e){

    e.preventDefault();

    let points=0;

    if(document.querySelector('#answer1').checked){
        points++;
    }
    if(document.querySelector('#answer2').checked){
        points++;
    }
    if(document.querySelector('#answer3').checked){
        points++;
    }
    if(document.querySelector('#answer4').checked){
        points++;
    }
    if(document.querySelector('#answer5').checked){
        points++;
    }

    if(document.querySelector('#answer6').checked){
        points++;
    }

    par.textContent='Ваши баллы: '+ points;
    par.style.display="block";
}

const sp1 = document.querySelectorAll(".sp1");
const sp2 = document.querySelectorAll(".sp2");
const sp3 = document.querySelectorAll(".sp3");
const sp4 = document.querySelectorAll(".sp4");
const sp5 = document.querySelectorAll(".sp5");
const sp6 = document.querySelectorAll(".sp6");

sp1.forEach (item1=> {
    item1.addEventListener ('click', ()=> {
        removeFocus1 ();
        item1.classList.add ('selected');
    })
    removeFocus1 = ()=>{
        sp1.forEach (item1=>{
            item1.classList.remove('selected');
        })
    }
});

sp2.forEach (item2=> {
    item2.addEventListener ('click', ()=> {
        removeFocus2 ();
        item2.classList.add ('selected');
    })
    removeFocus2 = ()=>{
        sp2.forEach (item2=>{
            item2.classList.remove('selected');
        })
    }
});

sp3.forEach (item3=> {
    item3.addEventListener ('click', ()=> {
        removeFocus3 ();
        item3.classList.add ('selected');
    })
    removeFocus3 = ()=>{
        sp3.forEach (item3=>{
            item3.classList.remove('selected');
        })
    }
});

sp4.forEach (item4=> {
    item4.addEventListener ('click', ()=> {
        removeFocus4 ();
        item4.classList.add ('selected');
    })
    removeFocus4 = ()=>{
        sp4.forEach (item4=>{
            item4.classList.remove('selected');
        })
    }
});

sp5.forEach (item5=> {
    item5.addEventListener ('click', ()=> {
        removeFocus5 ();
        item5.classList.add ('selected');
    })
    removeFocus5 = ()=>{
        sp5.forEach (item5=>{
            item5.classList.remove('selected');
        })
    }
});

sp6.forEach (item6=> {
    item6.addEventListener ('click', ()=> {
        removeFocus5 ();
        item6.classList.add ('selected');
    })
    removeFocus5 = ()=>{
        sp6.forEach (item6=>{
            item6.classList.remove('selected');
        })
    }
});