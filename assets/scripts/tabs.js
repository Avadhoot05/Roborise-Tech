function clickHandler(e) {
    let id = "ecom";
    if(e)
    {
        id = e.target.id;
        console.log(id);
        if(ids.indexOf(id) == -1)
            return;
    }

    for(let i = 0; i < ids.length; i++)
    {
        let content = document.getElementById(ids[i] + "-content");
        let tab = document.getElementById(ids[i]);
        if(content)
        {
            content.style.display = "none"; 
            tab.style.background = "#FFFFFF";
            tab.style.color = "#000000";
        }
    }

    let content = document.getElementById(id + "-content");
    let tab = document.getElementById(id);
    if(content)
    {
        content.style.display = "block"; 
        tab.style.background = "#000000";
        tab.style.color = "#FFFFFF";
    }
}


const ids = ["ecom", "pharma", "fmcg", "automotive", "goods", "food"];

for(let i = 0; i < ids.length; i++)
{
    let tab = document.getElementById(ids[i]);
    if(tab)
    {
        tab.addEventListener("click", clickHandler)
    }
}

clickHandler(null);

