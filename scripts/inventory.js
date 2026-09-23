const invHeader = document.querySelector('#inventoryHeader');
const invItems = document.querySelector('#inventoryItems');

function inventoryInit() {

    invHeader.innerHTML = `Name: ${name}&emsp;Gender: ${gender}&emsp;Species: ${species}`; 
    
}

function getItem(item, description) {
    const li = document.createElement('li');

    li.classList.add('tooltip');
    li.setAttribute('data-message', description);
    li.textContent = item;

    invItems.appendChild(li);

    const tooltip = new Tooltip(li);
    tooltip.init();
}

class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init() {
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
}