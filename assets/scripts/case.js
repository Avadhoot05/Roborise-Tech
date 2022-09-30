function OnResize() {
    console.log(">>>resize");
    if(window.location.href.indexOf("industries") != -1)
    {
        let rect = industryHead.getBoundingClientRect();
        console.log(rect);
        industrySubHead.style.top = rect.bottom + 30 + "px";
    }
    else
    {
        if(covakHead && covakinfo)
        {
            let rect = covakHead.getBoundingClientRect();
            covakinfo.style.marginTop = rect.height + 50 + "px";
            return;
        }
    
        if(ppaHead && ppainfo)
        {
            let rect = ppaHead.getBoundingClientRect();
            console.log(rect.height);
            ppainfo.style.marginTop = rect.height + 50 + "px";
            return;
        }
    
        if(packHead && packinfo)
        {
            let rect = packHead.getBoundingClientRect();
            packinfo.style.marginTop = rect.height + 50 + "px";
            return;
        }
    }
}

if(window.location.href.indexOf("industries") != -1)
{
    var industryHead = document.getElementsByClassName("industry heading")[0];
    var industrySubHead = document.getElementsByClassName("industry subheading")[0];
}
else
{
    var covakHead = document.getElementsByClassName("covak subheading")[0];
    var covakinfo = document.getElementsByClassName("covak info")[0];
    var ppaHead = document.getElementsByClassName("ppa subheading")[0];
    var ppainfo = document.getElementsByClassName("ppa info")[0];
    var packHead = document.getElementsByClassName("pack subheading")[0];
    var packinfo = document.getElementsByClassName("pack info")[0];
}


window.addEventListener("resize", OnResize);

    OnResize();
