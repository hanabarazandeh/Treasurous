// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav
function showMenu() {
    var x = document.getElementById("myNav");
    if (x.className === "topnav grid four-column add-gutters") {
        x.className += " responsive";
    } else {
        x.className = "topnav grid four-column add-gutters";
    }
}

function showSearch() {
    $(function() {

        var searchInput = document.getElementById("searchInput");

        if (searchInput.className === "search-input") {
            searchInput.className += " responsive";
        } else {
            searchInput.className = "search-input";
        }

        var search = document.getElementById("search");
        let $searchVal = $('#searchInput').val();


        if (search.className === "search") {
            search.className += " responsive";

        } else {
            if ($searchVal == "rings") {
                window.location.href = "products.html"
            } else {
                search.className = "search";
            }
        }

        var searchButton = document.getElementById("searchButton");
        if (searchButton.className === "search-button") {
            searchButton.className += " responsive";

        } else {
            searchButton.className = "search-button";
        }
    });

}


// https://www.w3schools.com/jsref/prop_element_scrolltop.asp
// var elmnt = document.getElementById("top-bar");
// var y = elmnt.scrollTop;
// console.log(y);

var onTopofPage = true;
var element = document.querySelector("#top-bar")

window.addEventListener("scroll", function() {
    console.log(this.pageYOffset);
    if (this.pageYOffset > 0) {
        if (element.className == "top-bar grid top-3-column-fixed") {
            element.className += " top-bar-resized";
            onTopofPage = false;
        }
    } else {
        element.className = "top-bar grid top-3-column-fixed";
        console.log(element.className);
    }

})