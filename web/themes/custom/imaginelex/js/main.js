function searchExpand() {
    document.getElementById('header-search').style.width="100%";
    document.getElementById('header-input').style.width="auto";
}

function searchCollapse() {
    document.getElementById('header-search').style.width="100px";
    document.getElementById('header-input').style.width="75%";
}

function takeoverOpen() {
    document.getElementById('takeover-nav').style.display="block";
}

function takeoverClose() {
    document.getElementById('takeover-nav').style.display="none";
}