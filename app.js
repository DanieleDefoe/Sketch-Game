const grid = document.querySelector('.grid');
const initial = 570;

const buttons = document.getElementsByClassName('button');

const eraser = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clear');

const clearGrid = (e) => {
    buildingColor = 'transparent';
    const removeClass = Array.from(buttons).find(button => button.classList.contains('active'));
    if (removeClass) removeClass.classList.remove('active');
    e.target.classList.add('active');
};

const toggleRGB = (e) => {
    const removeClass = Array.from(buttons).find(button => button.classList.contains('active'));
    if (removeClass) removeClass.classList.remove('active');
    e.target.classList.add('active');
};

const clearField = (e) => {
    const removeClass = Array.from(buttons).find(button => button.classList.contains('active'));
    if (removeClass) removeClass.classList.remove('active');
    e.target.classList.add('active');
    const childElements = Array.from(grid.children);
    childElements.forEach((child) => {
        if (child.style.background !== backgroundInput.value) {
            child.style.background = 'transparent';
        }
    });
    e.target.classList.remove('active');
};

eraser.addEventListener('click', clearGrid);
rainbow.addEventListener('click', toggleRGB);
clear.addEventListener('click', clearField);

const changeBackground = (e) => {
    const removeClass = Array.from(buttons).find(button => button.classList.contains('active'));
    if (removeClass) removeClass.classList.remove('active');
    grid.style.background = e.target.value;
    const RGBvalues = grid.style.background.match(/\d+/g);
    if (RGBvalues.every(value => value >= 140)) {
        const childs = Array.from(grid.children);
        childs.forEach((child)=> {
            child.style.outline = '1px solid #222';
        });
    };
};

let buildingColor = '#ffffff';

const changePen = (e) => {
    const removeClass = Array.from(buttons).find(button => button.classList.contains('active'));
    if (removeClass) removeClass.classList.remove('active');
    buildingColor = e.target.value;
};

const changeColor = (e) => {
    if (rainbow.classList.contains('active')) {
        e.target.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } else {
        e.target.style.background = buildingColor;
    }
}

const backgroundInput = document.querySelector('.background');
grid.style.background = backgroundInput.value;

const penInput = document.querySelector('.pen');
penInput.value = '#ffffff';

const rangeLabel = document.querySelector('.range-label');
const range = document.querySelector('.range');

const val = range.value = 10;
let text = document.createTextNode('10 x 10');
rangeLabel.prepend(text);

for (let i = 1; i <= val * val; ++i) {
    const cell = document.createElement('div');
    cell.style.width = `${initial / val}px`;
    cell.style.height = `${initial / val}px`;
    cell.style.outline = '1px solid #ccc';
    cell.style.cursor = 'pointer';
    cell.addEventListener('mouseover', changeColor);
    grid.append(cell);
}


const changeLabel = (e) => {
    grid.innerHTML = '';
    const value = e.target.value;
    text.textContent = `${value} x ${value}`;
    for (let i = 1; i <= value * value; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${initial / value}px`;
        cell.style.height = `${initial / value}px`;
        cell.style.outline = '1px solid #ccc';
        cell.style.cursor = 'pointer';
        cell.addEventListener('mouseover', changeColor);
        grid.append(cell);
    }
};

backgroundInput.addEventListener('change', changeBackground);
range.addEventListener('change', changeLabel);
penInput.addEventListener('change', changePen);
