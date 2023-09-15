let tablinks = document.getElementsByClassName("tab-links");

let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for( tablink of tablinks){
        tablink.classList.remove("active");
    }

    for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab")





}