/*
this function does the tab selection, by adding the class
"selected" to the tab selected, and removing the
same class from the other one 
*/
function tabSelection(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");
    tab.classList.add("selected");
}
/*
this function does the content selection, by adding the class
"selected" to the content selected, and removing the
same class from the other one 
*/
function infoSelection(tab) {
    const infoSelected = document.querySelector(".info.selected");
    infoSelected.classList.remove("selected");
    const idInfoTab = `info-${tab.id}`;
    const infoShow = document.getElementById(idInfoTab);
    infoShow.classList.add("selected");
}
/*
this event is responsible for enabling all objects with the class ".tab"
to execute the display of the classes "selected" from the other
two functions
*/
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        if(tab.classList.contains("selected")) {
            return;
        }
        tabSelection(tab);
        infoSelection(tab);
    });
})
