(function() {
    const allButtons = document.getElementsByClassName(
        "btn-octicon p-1 pr-2 js-details-target"
    );

    for(var i = 0; i < allButtons.length; i++) {
        allButtons[i].click();
    }

    console.log(allButtons.length, ' buttons clicked, please wait');
})();