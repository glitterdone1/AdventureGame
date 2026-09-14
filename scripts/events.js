let gold = 0;
let health = 10;
let currentEvent;
let currentScene;

const storyCont = document.querySelector('#display form');
const storyChoice = document.querySelector('#choices');

storyCont.addEventListener('submit', e => {
    e.preventDefault();
});

function newArea (newPosition) {
    if (newPosition.classList.contains('unexplored')) {
        let type = eventSorting(newPosition);
        const specificEvent = eventDisplay(type);
        newPosition.classList.remove('unexplored');
        newPosition.classList.add('explored');
        north.disabled = true;
        south.disabled = true;
        east.disabled = true;
        west.disabled = true;
        //console.log('newArea has run');
        return specificEvent;
    }
    else {
        return 'explored';
    } 
}

function eventSorting (newPosition) {
    if (newPosition.classList.contains('veryBad')) {
        return 0;
    }
    else if (newPosition.classList.contains('bad')) {
        return 1;
    }
    else if (newPosition.classList.contains('neutral')) {
        return 2;
    }
    else if (newPosition.classList.contains('adventure')) {
        return 3;
    }
    else if (newPosition.classList.contains('good')) {
        return 4;
    }
    else if (newPosition.classList.contains('unique')) {
        return 5;
    }
    else if (newPosition.classList.contains('veryGood')) {
        return 6;
    }
}

function eventDisplay (eventType) {
    let randoEvent = Math.random();
    switch (eventType) {
        case 0:
            randoEvent *= veryBadEvent.length;
            randoEvent = Math.floor(randoEvent);
            return veryBadEvent[randoEvent];
        case 1:
            randoEvent *= badEvent.length;
            randoEvent = Math.floor(randoEvent);
            return badEvent[randoEvent];
        case 2:
            randoEvent *= neutralEvent.length;
            randoEvent = Math.floor(randoEvent);
            return neutralEvent[randoEvent];
        case 3:
            randoEvent *= adventureEvent.length;
            randoEvent = Math.floor(randoEvent);
            return adventureEvent[randoEvent];
        case 4:
            randoEvent *= goodEvent.length;
            randoEvent = Math.floor(randoEvent);
            return goodEvent[randoEvent];
        case 5:
            randoEvent *= uniqueEvent.length;
            randoEvent = Math.floor(randoEvent);
            return uniqueEvent[randoEvent];
        case 6:
            randoEvent *= veryGoodEvent.length;
            randoEvent = Math.floor(randoEvent);
            return veryGoodEvent[randoEvent];
    }
}

function choiceButton() {
    
}

function startEvent(event) {
    currentEvent = event;
    currentScene = 'start';

    showScene();
}

function showScene() {
    if (!currentEvent.scenes) {
        north.disabled = false;
        south.disabled = false;
        east.disabled = false;
        west.disabled = false;
        return;
    }
    const scene = currentEvent.scenes[currentScene];

    console.log(scene.text);
    textBox.value = scene.text;

    scene.choices.forEach(choice => {
        console.log(choice.text);
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice.text;

        choiceButton.addEventListener('click', () => {
            playerChoice(choice);
        });

        storyChoice.appendChild(choiceButton);
    });
    if (scene.choices.length === 0) {
        console.log('event finished!');
        north.disabled = false;
        south.disabled = false;
        east.disabled = false;
        west.disabled = false;
        return;
    }

}

function playerChoice(choice) {
    currentScene = choice.next;
    storyChoice.innerHTML = '';
    
        showScene();
}
    
const storyOpening = [
    // possibly add other parts? Event options?
    {name: 'And so it Begins...', 
    eventDesc: "&aposThe Tavern of Newhaven&apos were the letters you had seen clumsily assorted out on the front of the building. With some inspection, the words seemed more an asperation than a descriptor of the place. Only a couple disheveled tables were laid out with scattered seating. But there was a long counter, probably a bar, and plenty of space. The place seemed nearly as lively as funeral. A couple canines with unfriendly features sat at one table and a distraught avian at the counter. Behind the counter a bright doe hummed as she mixed a drink, passing it over to the avian with sympathetic eyes before she managed a glance your way, ears shooting up in surprise./n/n &quotOh-Oh-Oh, we&aposre open, I promise! Come in for sure!&quot She squeaked out in a tone that held a hint of strain in it. She gestured at the three unoccupied bar stools near the front eyes still on you as she made a grab for a mug, missing and knocking it to the floor with a small squeak ducking behind the counter and popping back up a moment later, running a cloth over in what seemed to be a practiced imitation bartenders.", 
    eventResolution1: '', 
    eventResolution2: ''
    }
];

const veryBadEvent = [
    {name: 'event1', eventDesc: '', eventResolution1: '', eventResolution2: ''}
];
const badEvent = [
    // possibly add other parts? Event options?
    {name: 'event1', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event2', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event3', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event4', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event5', eventDesc: '', eventResolution1: '', eventResolution2: ''}
];
const neutralEvent = [
    // possibly add other parts? Event options?
    {name: 'event1', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event2', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event3', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event4', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event5', eventDesc: '', eventResolution1: '', eventResolution2: ''}
];
const adventureEvent = [
    {
        name: 'Through Undergrowth',
        scenes: {
            start: {
                text: 'You hack your way through the dense forest and find a river and path.',
                choices: [
                    {
                        text: 'Go along the river',
                        next: 'river'
                    },
                    {
                        text: 'Stick to the path',
                        next: 'path'
                    }
                ]
            },
            river: {
                text: 'the way is slow going and miserable, but you continue on...',
                choices: []
            },
            path: {
                text: 'the path is fine until a monster runs after you.',
                choices: [
                    {
                        text: 'run away',
                        next: 'ran'
                    },
                    {
                        text: 'stand and fight',
                        next: 'fight'
                    }
                ]
            },
            ran: {
                text: 'you manage to successfully run away but get scraped up',
                health: '-1',
                choices: []
            },
            fight: {
                text: 'you fight the brute and its various limbs off and take its money',
                gold: '30',
                choices: []
            }
        }
    }
];
const goodEvent = [
    // possibly add other parts? Event options?
    {name: 'event1', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event2', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event3', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event4', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event5', eventDesc: '', eventResolution1: '', eventResolution2: ''}
];
const veryGoodEvent = [
    // possibly add other parts? Event options?
    {name: 'event1', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event2', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event3', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event4', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event5', eventDesc: '', eventResolution1: '', eventResolution2: ''}
];
const uniqueEvent = [
    // possibly add other parts? Event options?
    {name: 'event1', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event2', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event3', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event4', eventDesc: '', eventResolution1: '', eventResolution2: ''},
    {name: 'event5', eventDesc: '', eventResolution1: '', eventResolution2: ''}
];

// Chat GPT's recommended solution to each object as an event.

// const veryBadEvents = [       // ARRAY of events

//     {                          // EVENT OBJECT

//         name: 'LostTraveler',  // Event's name

//         scenes: {              // OBJECT containing scenes

//             start: {           // START SCENE
//                 text: 'You find a traveler beside the road.',

//                 choices: [     // ARRAY of choices

//                     {          // CHOICE OBJECT
//                         text: 'Talk to him',
//                         next: 'talk'
//                     },

//                     {          // ANOTHER CHOICE OBJECT
//                         text: 'Ignore him',
//                         next: 'ignore'
//                     }
//                 ]
//             },

//             talk: {             // ANOTHER SCENE
//                 text: 'The traveler asks if you can spare some food.',

//                 choices: [
//                     {
//                         text: 'Give him food',
//                         next: 'helped'
//                     },

//                     {
//                         text: 'Refuse',
//                         next: 'refused'
//                     }
//                 ]
//             },

//             ignore: {           // ANOTHER SCENE
//                 text: 'You continue down the road.',
//                 choices: []
//             },

//             helped: {           // ANOTHER SCENE
//                 text: 'The traveler smiles and gives you a coin.',
//                 choices: []
//             },

//             refused: {          // ANOTHER SCENE
//                 text: 'The traveler looks disappointed.',
//                 choices: []
//             }
//         }
//     }
// ];