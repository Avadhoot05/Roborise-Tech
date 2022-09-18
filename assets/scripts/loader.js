document.addEventListener('readystatechange', (event) => {
    if(document.readyState == 'complete')
    {
        document.getElementsByClassName("loader")[0].style.display = "none";
    }
    console.log(`readystate: ${document.readyState}`);
});