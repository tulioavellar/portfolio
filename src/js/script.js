function tabSelection(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");
    tab.classList.add("selected");
}

function infoSelection(tab) {
    const infoSelected = document.querySelector(".info.selected");
    infoSelected.classList.remove("selected");
    const idInfoTab = `info-${tab.id}`;
    const infoShow = document.getElementById(idInfoTab);
    infoShow.classList.add("selected");
}

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