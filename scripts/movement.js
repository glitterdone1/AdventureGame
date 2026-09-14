const moveForm = document.querySelector('#movement');
const north = document.querySelector('#north');
const south = document.querySelector('#south');
const east = document.querySelector('#east');
const west = document.querySelector('#west');
//const yourPosition = document.querySelector(".you");

let xMove = 0;
let yMove = 0;


moveForm.north.addEventListener('click', () => {
    console.log('north');
    xMove = 0;
    yMove = -1;
    moveDirection(xMove, yMove);
});
moveForm.east.addEventListener('click', () => {
    console.log('east');
    xMove = 1;
    yMove = 0;
    moveDirection(xMove, yMove);
});
moveForm.south.addEventListener('click', () => {
    console.log('south');
    xMove = 0;
    yMove = 1;
    moveDirection(xMove, yMove);
});
moveForm.west.addEventListener('click', () => {
    console.log('west');
    xMove = -1;
    yMove = 0;
    moveDirection(xMove, yMove);
});

function moveDirection (x, y) {
    const yourPosition = document.querySelector('.you');
    //console.log(yourPosition.id);
    console.log(form.vert.value);
    if (x === 0) {
        if (y > 0 && position.yAxis < form.vert.value - 1) {
            position.yAxis ++;
            showPosition(yourPosition);
        }
        else if (y < 0 && position.yAxis > 0) {
            position.yAxis --;
            showPosition(yourPosition);
        }
        else {
            alert("Can't move further that direction");
        }
    }
    else if (x > 0 && position.xAxis < form.horz.value - 1) {
        position.xAxis ++;
        showPosition(yourPosition);
    }
    else if (x < 0 && position.xAxis > 0) {
        position.xAxis --;
        showPosition(yourPosition);
    }
    else {
        alert("Can't move further that direction");
    }
    console.log(position.yAxis, position.xAxis);

}

function showPosition(yourPosition) {
    const newPosition = document.querySelector(`#x${position.xAxis}y${position.yAxis}`);
    newPosition.classList.add('you');
    newPosition.setAttribute('src', 'exploreimages/you.png');
    yourPosition.setAttribute('src', 'exploreimages/explored.png');
    yourPosition.classList.remove('you');
    const eventItem = newArea(newPosition);
    //if (eventItem.)
    console.log(eventItem);
    if (eventItem !== 'explored') {
    startEvent(eventItem);
    }
}