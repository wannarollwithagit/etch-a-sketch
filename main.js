function createGrid(rows, cols) {
    let grid = [];
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            const div = document.createElement('div');
            div.setAttribute('id', i+','+j);
            div.style.width = '1%';
            div.style.height = '1%';

            // hover effect on grid element
            div.addEventListener('mouseenter', () => div.style.backgroundColor = 'black');
            //div.addEventListener('mouseleave', () => div.style.backgroundColor = 'white');
            grid.push(div);
        }
    }
    return grid;
}

const sketch = document.querySelector('#sketch');
const settings = document.querySelector('#settings');
const rules = document.querySelector('#rules');

let grid = createGrid(100, 100);
grid.forEach((div) => sketch.appendChild(div));

let sketchWidth = 700;
sketch.style.width = sketchWidth + 'px';
subcontainerWidth = (document.body.clientWidth - sketchWidth) / 2;
settings.style.width = subcontainerWidth + 'px';
rules.style.width = subcontainerWidth + 'px';
