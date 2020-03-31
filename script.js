const container = document.querySelector('.container');
const items = document.querySelectorAll('.item');
const item = document.querySelector('.item-text');

let log;

// Init
startEventListeners();

// Event Listeners
function startEventListeners() {
    container.addEventListener('mousedown', startDragging);
    container.addEventListener('mousemove', dragItem);
    container.addEventListener('mouseup', stopDragging);
    container.addEventListener('mouseleave', stopDragging);
}

let dragActive = false;
let clientX, offsetX, posX, targetItem;
const dragAmount = 75;
const dragActiveZone = 20;

// Functions
function startDragging(e) {
    clientX = e.clientX;
    targetItem = e.target;
    dragActive = true;
};

function dragItem(e) {
    if (e.target.classList.contains('item-text')) {
        if (dragActive) {
            offsetX = e.clientX;
            if (offsetX - clientX > dragAmount) {
                offsetX = clientX + dragAmount;
            } else if (offsetX - clientX < -dragAmount) {
                offsetX = clientX - dragAmount;
            };
            posX = offsetX - clientX;
            targetItem.style.transform = `translateX(${posX}px)`;
        };
    };
};

function stopDragging(e) {
    dragActive = false;
    if (posX > dragAmount - dragActiveZone) {
        leftAction(e.target);
    } else if (posX < -dragAmount + dragActiveZone) {
        rightAction(e.target);
    };
    targetItem.style.transform = `translateX(0px)`;
};

function leftAction(item) {
    item.style.background = '#777';
};

function rightAction(item) {
    item.style.background = '#444';
};

