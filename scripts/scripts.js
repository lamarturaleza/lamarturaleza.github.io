M.AutoInit();

const imgModal = document.getElementById("img-modal");

/**
 * This function will handle the click event and will look for the _src_ attribute in the DOM element triggered
 * to update the _src_ attribute in the modal window.
 * 
 * @param {*} event 
 */
function onClickHandler(event) {
    console.log("onClickHandler...");
    const target = event.target;
    const imgPath = target.src;
    imgModal.src = imgPath;
}