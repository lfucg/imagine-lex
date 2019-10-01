function searchExpand() {
    document.getElementById('header-search').style.width="100%";
    document.getElementById('header-input').style.width="auto";
}

function searchCollapse() {
    document.getElementById('header-search').style.width="100px";
    document.getElementById('header-input').style.width="75%";
}

function takeoverOpen() {
    document.getElementById('takeover-nav').style.visibility="visible";
    document.getElementById('takeover-nav').style.opacity = "0.9";
    document.getElementById('header-row').style.opacity = "0";
    document.body.style.overflow = "hidden";
}

function takeoverClose() {
    document.getElementById('takeover-nav').style.visibility="hidden";
    document.getElementById('takeover-nav').style.opacity = "0";
    document.getElementById('header-row').style.opacity = "1"
    document.body.style.overflow = "scroll";
}

function navListToggle() {
    if (!this.classList.contains('activated')) {
        this.classList.add('activated');
    }else {
       this.classList.remove('activated');
    }
}

// function navSubListToggle() {
//     if (!this.classList.contains('activate')) {
//         this.classList.add('activate');
//     } else {
//         this.classList.remove('activate');
//     }
// }