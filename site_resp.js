// this code is for nav bar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//adding click event
menuBtn.addEventListener('click',() =>{
    menu.classList.toggle('menu-open');
});
//adding car stats counter
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll('.counter');
let bol = false;

// getting stats at top and stats elemnt height
const section_Offset = stats.offsetTop + stats.offsetHeight;
//to start the counter
window.addEventListener("scroll", () =>
{
    const pageOffset = window.innerHeight+scrollY;
    if(pageOffset>section_Offset && bol ==false){
        counters.forEach((counter) =>
        {
            function updateCount()
            {
                const target =+ counter.getAttribute('data-target');
                const speed =+ counter.getAttribute('data-speed');
                const count =+counter.innerText;
                //checking if target reached or not
                if(count <target)
                {   
                    //incrementing
                    counter.innerText = count+1;
                    //call function every ms
                    setTimeout(updateCount,speed);
                }else{
                    counter.innerText=target;
                }
            }
            updateCount();
            bol =true;
        });
    }
});