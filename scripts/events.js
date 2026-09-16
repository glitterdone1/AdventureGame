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
    {
        name: 'Through Undergrowth',
        scenes: {
            start: {
                text: `You hack your way through the dense forest and find a river and path.`,
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
const adventureEvent = [
    {
        name: 'Through the Brush',
        scenes: {
            start: {
                text: `You wend your way through a dense patch of the forest, your eyes sweeping the thick leafy brush below your feet. Anything could be hiding here, and you can hardly see enough to make out more than the dark green fronds that obscure your lower half...
                
Thankfully, the trip passes uneventfully as you break your way back into more sparse sections of the forest.`,
                choices: []
            }
        }
    },
    {
        name: 'Past the Canopy',
        scenes: {
            start: {
                text: `The way is slow going. It is moments like these that make you wonder if you will ever find a way out of this forest...
                
The flutter of wings catch your eye as you follow swift ascent of Lydian songbird, with silvery wings, breaking through the dappled canopy above with a melodic twitter, the melody turning vaguely haunting as a flock of Lydian's join in, spiraling above you in the dappled sunlight before breaking off, spreading out through the forest in different directions.

Whether comforting or disturbing, the experience lingers in your mind.`,
                choices: []
            }
        }
    },
    {
        name: 'Deeper Still',
        scenes: {
            start: {
                text: `Deeper and deeper still. You have begun to wonder idly if the forest really has an end. The way trees fade into more... leaves, leaves and branches, seemingly existing with the intention of obfuscating navigation with celestial bodies. If you weren't keeping a map, you'd surely be lost, wandering in circles... It is a sobering thought!`,
                choices: []
            }
        }
    },
    {
        name: 'Vestiges of a Path',
        scenes: {
            start: {
                text: `As you trudge wearily, and perhaps a bit warily, through the forest, you find a cobblestone path, a bit overgrown but a path nonetheless!

However, as you follow the path, after not even twenty paces the way fades back into brush, becoming impossible to follow.`,
                choices: []
            }
        }
    },
    {
        name: 'A Small Stream',
        scenes: {
            start: {
                text: `A faint burbling pleasantly reaches your ears as you walk, and you soon find yourself running nearly parallel to a small brook. Less than two feet across at its thickest, it provides no obstacle for your journey, but the sound provides a calm lull in the travel, and you feel yourself let out a breath you didn't know you'd been holding.`,
                choices: []
            }
        }
    },
    {
        name: 'Roots Roots and Roots',
        scenes: {
            start: {
                text: `You have to catch yourself from falling, your foot catching on the root of an apparently difficult tree. Roots, roots, and more roots! You wouldn't mind a clear patch of ground for a change.`,
                choices: []
            }
        }
    },
    {
        name: 'Acorn Troubles',
        scenes: {
            start: {
                text: `You fall into a bit of a rhythm as you wander through the forest, the background ambience of life, the rustling wind, the sound of your own footfalls, all merging into vague blur.
                
And then you feel something thwack against your head, more startling than painful as you see a small acorn drop beside your feet.

Peering into the trees above, you see a few branches rustling indicating a swift retreat through the tall canopy, and hear a faint chitter of amusement. Whatever it was moves far too quickly to keep pace with, but fortunately seems to be more nuisance than threat. With the unseen being gone, you find yourself free to continue.`,
                choices: []
            }
        }
    },
    {
        name: 'Pretty Flowers',
        scenes: {
            start: {
                text: `You break into a small clearing and are amazed to find it full of extraordinary flowers, most unrecognizable in their beauty. Long white tube flowers with elegant serated leaves, crimson and ivory ones resembling lilacs, swaying yellow puffballs with scintillating petals... Too many varieties to name! (Well in any reasonable amount of time!) It probably would be a horticulturist's dream, and certainly is a welcome sight for you. 
                
After enjoying the unexpectedly wonderous sight, you prepare to move on.`,
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