let SINGLE_PAINTING_WIDTH_THRESHOLD = 300;

window.onresize = function() {
    renderPaintings();
};

window.onload = function () {
    renderPaintings();
};

function renderPaintings() {
    let paintingsGridContainer = document.getElementById('paintings-grid');

    let currentRowWidth = paintingsGridContainer.offsetWidth;
    let maxHeight = currentRowWidth/2;
    let numPaintingsPerRow = Math.floor(currentRowWidth/SINGLE_PAINTING_WIDTH_THRESHOLD);

    let numPaintings = paintingsGridContainer.children.length;

    for (let row = 0; row < numPaintings/numPaintingsPerRow; ++row) {
        let currentRowWidthTotal = 0;
        let currentRowNumPaintings = 0;

        for (let col = 0; col < numPaintingsPerRow; ++col) {
            let currentPaintingIndex = getCurrentPaintingIndex(row, col, numPaintingsPerRow);

            if (currentPaintingIndex >= numPaintings) {
                break;
            }

            let currentPainting = document.getElementById('painting' + currentPaintingIndex);

            currentRowWidthTotal = currentRowWidthTotal + getWidthAtHeight(currentPainting, maxHeight);
            ++currentRowNumPaintings;
        }

        let scaleFactor = (currentRowWidth/currentRowWidthTotal)/currentRowNumPaintings;

        for (let col = 0; col < numPaintingsPerRow; ++col) {
            let currentPaintingIndex = getCurrentPaintingIndex(row, col, numPaintingsPerRow);

            if (currentPaintingIndex >= numPaintings) {
                break;
            }

            let currentPainting = document.getElementById('painting' + currentPaintingIndex);

            let calculatedWidth = Math.floor(getWidthAtHeight(currentPainting, currentRowNumPaintings*scaleFactor*maxHeight));
            let calculatedHeight = Math.floor(currentRowNumPaintings*scaleFactor*maxHeight);

            if (currentRowNumPaintings < numPaintingsPerRow && currentRowNumPaintings/numPaintingsPerRow < 0.5) {
                currentPainting.style.maxWidth = (calculatedWidth/numPaintingsPerRow).toString() + 'px';
                currentPainting.style.maxHeight = (calculatedHeight/numPaintingsPerRow).toString() + 'px';
            } else {
                currentPainting.style.maxWidth = calculatedWidth.toString() + 'px';
                currentPainting.style.maxHeight = calculatedHeight.toString() + 'px';
            }
        }
    }
}

function getCurrentPaintingIndex(row, col, numPaintingsPerRow) {
    return (row*numPaintingsPerRow) + col;
}

function getWidthAtHeight(painting, height) {
    return (painting.naturalWidth/painting.naturalHeight)*height;
}
