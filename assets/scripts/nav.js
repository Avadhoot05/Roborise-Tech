function onHamClick(){
    console.log("clicked");
    const menu = document.getElementsByClassName("vertical-menu")[0];

    if(menu)
    {
        if(menu.offsetHeight === 0 && menu.offsetWidth === 0)
        {
            menu.style.display = "flex";
            ham.src = "././assets/media/nav/close.png";
        }
        else
        {
            menu.style.display = "none";
            ham.src = "././assets/media/nav/ham.png";
        }
    }
}

const ham = document.getElementById("ham");
ham.addEventListener("click", onHamClick);