function createGrid(rows, cols) {
    let grid = [];
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            const div = document.createElement('div');
            div.setAttribute('id', i+','+j);
            div.style.width = '6.25%';
            div.style.height = '6.25%';
            grid.push(div);
        }
    }
    return grid;
}

const container = document.querySelector('#container');
let grid = createGrid(16, 16);
grid.forEach((div) => container.appendChild(div));
