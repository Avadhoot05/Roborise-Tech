function OnResize() {
    console.log(">>>resize");
    if(covakHead && covakinfo)
    {
        const rect = covakHead.getBoundingClientRect();
        covakinfo.style.marginTop = rect.height + 50 + "px";
        return;
    }

    if(ppaHead && ppainfo)
    {
        const rect = ppaHead.getBoundingClientRect();
        ppainfo.style.marginTop = rect.height + 50 + "px";
        return;
    }

    if(packHead && packinfo)
    {
        const rect = packHead.getBoundingClientRect();
        packinfo.style.marginTop = rect.height + 50 + "px";
        return;
    }
}


const covakHead = document.getElementsByClassName("covak subheading")[0];
const covakinfo = document.getElementsByClassName("covak info")[0];
const ppaHead = document.getElementsByClassName("ppa subheading")[0];
const ppainfo = document.getElementsByClassName("ppa info")[0];
const packHead = document.getElementsByClassName("pack subheading")[0];
const packinfo = document.getElementsByClassName("pack info")[0];
window.addEventListener("resize", OnResize);
OnResize();