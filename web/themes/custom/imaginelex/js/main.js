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
}

function takeoverClose() {
    document.getElementById('takeover-nav').style.visibility="hidden";
    document.getElementById('takeover-nav').style.opacity = "0";

}

function navListToggle() {
    if (document.getElementById('link-list').style.maxHeight != "800px") {
        document.getElementById('link-list').style.maxHeight = "800px";
        document.getElementById('closed-icon').style.display = "none";
        document.getElementById('expanded-icon').style.display = "inline-block";
    }else {
        document.getElementById('link-list').style.maxHeight = "0";
        document.getElementById('closed-icon').style.display = "inline-block";
        document.getElementById('expanded-icon').style.display = "none";
    }
}