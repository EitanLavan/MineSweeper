const helpers = {
    CreateMap: (height, width, mines) => {
        let map = new Array(height);

        for (let heightIndex = 0; heightIndex < height; heightIndex++) {
            map[heightIndex] = [new Array(width)]
            for (let widthIndex = 0; widthIndex < width; widthIndex++) {
                {
                    map[heightIndex][widthIndex] = 0;
                }
            }
        }

        for (let mineIndex = 0; mineIndex < mines; mineIndex++) {
            let IsFoundPlace = false;
            while (!IsFoundPlace) {
                let mineHeightIndex = Math.floor(Math.random() * (height))
                let mineWidthIndex = Math.floor(Math.random() * (width))
                if (map[mineHeightIndex][mineWidthIndex] != '☀' && mineHeightIndex <= height && mineWidthIndex <= width) {
                    map[mineHeightIndex][mineWidthIndex] = '☀';

                    if (mineHeightIndex > 0 && map[mineHeightIndex - 1][mineWidthIndex] !== '☀')
                        map[mineHeightIndex - 1][mineWidthIndex]++;

                    if (mineHeightIndex + 1 < height && map[mineHeightIndex + 1][mineWidthIndex] !== '☀')
                        map[mineHeightIndex + 1][mineWidthIndex]++;

                    if (mineWidthIndex > 0 && map[mineHeightIndex][mineWidthIndex - 1] !== '☀')
                        map[mineHeightIndex][mineWidthIndex - 1]++;

                    if (mineWidthIndex + 1 < width && map[mineHeightIndex][mineWidthIndex + 1] !== '☀')
                        map[mineHeightIndex][mineWidthIndex + 1]++;

                    if (mineHeightIndex > 0 && mineWidthIndex > 0 && map[mineHeightIndex - 1][mineWidthIndex - 1] !== '☀')
                        map[mineHeightIndex - 1][mineWidthIndex - 1]++;

                    if (mineHeightIndex > 0 && mineWidthIndex + 1 < width && map[mineHeightIndex - 1][mineWidthIndex + 1] !== '☀')
                        map[mineHeightIndex - 1][mineWidthIndex + 1]++;

                    if (mineHeightIndex + 1 < height && mineWidthIndex > 0 && map[mineHeightIndex + 1][mineWidthIndex - 1] !== '☀')
                        map[mineHeightIndex + 1][mineWidthIndex - 1]++;

                    if (mineHeightIndex + 1 < height && mineWidthIndex + 1 < width && map[mineHeightIndex + 1][mineWidthIndex + 1] !== '☀')
                        map[mineHeightIndex + 1][mineWidthIndex + 1]++;

                    IsFoundPlace = true;
                }
            }
        }
        return map;
    },

    ExpoesAllRelevantCells: (height, width, cellIndex) => {
        try {

            let neighbors = [];
            neighbors.push(cellIndex);

            while (neighbors.length > 0) {
                let cellIndex = neighbors[0];

                // row up
                if (cellIndex > width) {
                    helpers.ExpoesRelevantCell(cellIndex - width, neighbors);
                }

                // row down
                if (cellIndex <= height * (width)) {
                    helpers.ExpoesRelevantCell(cellIndex + width, neighbors);
                }

                // Cell left 
                if (cellIndex % width != 1) {
                    helpers.ExpoesRelevantCell(cellIndex - 1, neighbors);
                }

                // Cell right 
                if (cellIndex % width != 0) {
                    helpers.ExpoesRelevantCell(cellIndex + 1, neighbors);
                }

                var filtered = neighbors.filter(function (value, index, arr) { return value != cellIndex; });
                neighbors = filtered;
            }
        }
        catch (error) {
            console.error(error);
        }
    },

    ExpoesRelevantCell: (cellIndex, neighbors) => {
        let cellElement = document.getElementById(cellIndex);
        try {
            if (cellElement != null) {
                let cellElementData = cellElement.attributes[2].value;
                if (cellElementData !== '☀') {
                    if (cellElement.innerHTML == '<div></div>') {
                        cellElement.innerHTML = '<div>' + cellElementData + '</div>';
                        if (cellElementData == '0') {
                            neighbors.push(cellIndex)
                        }
                    }
                }
            }
        }

        catch (error) {
            console.error(error);
        }
    }
};

export default helpers;