const map = document.querySelector('#map');
const display = document.querySelector('#display');
const textArea = document.querySelector('#textArea');
const textBox = document.querySelector('#display textarea');
const form = document.querySelector('.size-form');
const bad1 = document.querySelector('.bad1');
const bad2 = document.querySelector('.bad2');
const charTabs = document.querySelector('.tabs');

// default values for form submission
let horz = 8;
let vert = 8;
let name = 'Missy';
let gender = 'female';
let species = 'human';


let position = {xAxis: 0, yAxis: 0};


const horzPattern = /^[0-9]{1,2}$/;
const vertPattern = /^[0-9]{1,2}$/;


form.addEventListener('submit', e => {
    e.preventDefault();

    //console.log('submit detected');

    // player name gender and species inputs
    if(form.name.value.length) {
        name = form.name.value;
    }
    if(form.gender.value.length) {
        gender = form.gender.value;
    }
    if(form.species.value.length) {
        species = form.species.value;
    }
    // console.log(form.name.length, form.name.value);
    // console.log(name, gender, species);
    horz = form.horz.value;
    vert = form.vert.value;
    let flag1 = false;
    let flag2 = false;

    if(horzPattern.test(horz) && (parseFloat(horz) > 4 && parseFloat(horz) < 31)){
            //good info feedback
            bad1.textContent = '';
            flag1 = true;
    }
    else {
            //help info feedback
            bad1.textContent = 'Number must be between 5 and 30';
            flag1 = false;
    }

    if(vertPattern.test(vert) && (parseFloat(vert) > 4 && parseFloat(vert) < 31)){
            //good info feedback
            bad2.textContent = '';
            flag2 = true;
    }
    else {
            //help info feedback
            bad2.textContent = 'Number must be between 5 and 30';
            flag2 = false;
    }
    
    
    // creates unknown map and labels coordinates x0y0 format
    if (flag1 && flag2) {
        let randomLocation = Math.floor(Math.random() * parseFloat(horz) * (parseFloat(vert)));
        let endLocation = Math.floor(Math.random() * parseFloat(horz) * (parseFloat(vert)));
        while (randomLocation === endLocation) {
            console.log('Same start and end location. Rerolling');
            endLocation = Math.floor(Math.random() * parseFloat(horz) * (parseFloat(vert)));
        }
        //console.log('Everything checks out');
        let counter = 0;
        let y = 0;
        let x = 0;
        console.log(randomLocation);

        for (let y = 0; y < parseFloat(vert); y++) {

            const row = document.createElement("div");
            row.classList.add("image-row");

            for (let x = 0; x < parseFloat(horz); x++) {

                const img = document.createElement("img");

                img.id = `x${x}y${y}`;

                
                // possible map border? needs left right top bottom assigning though
                // if (x === 0 || y === 0 || x === horz - 1 || y === vert - 1) {
                //     img.classList.add('mapBorder');
                // }

                if (counter === randomLocation) {
                    img.classList.add("you");
                    img.src = "exploreimages/you.png";
                    position.xAxis = x;
                    position.yAxis = y;
                } 
                else if (counter === endLocation) {
                    img.classList.add("end");
                    img.src = "exploreimages/you.png";
                }
                else {
                    img.src = "exploreimages/unexplored.png";
                    landMark(img);
                }

                row.appendChild(img);

                counter++;
            }

            map.appendChild(row);
        }
        hideForm(form); 
    }
});

// dynamically generate terrain
function landMark(img) {
    let dieOne = Math.floor(Math.random() * 10) + 1;
    dieOne += Math.floor(Math.random() * 10) + 1;
    console.log(dieOne);
    img.className = 'unexplored';
    switch (dieOne) {
        case 2:
            img.className += ' veryBad';
            //console.log('verybad');
            break;
        case 3:
            img.className += ' bad';
            break;
        case 4:
            img.className += ' bad';
            break;
        case 5:
            img.className += ' bad';
            break;
        case 6:
            img.className += ' neutral';
            break;
        case 7:
            img.className += ' adventure';
            break;
        case 8:
            img.className += ' adventure';
            break;
        case 9:
            img.className += ' adventure';
            break;
        case 10:
            img.className += ' adventure';
            break;
        case 11:
            img.className += ' adventure';
            break;
        case 12:
            img.className += ' adventure';
            break;
        case 13:
            img.className += ' adventure';
            break;
        case 14:
            img.className += ' adventure';
            break;
        case 15:
            img.className += ' adventure';
            break;
        case 16:
            img.className += ' neutral';
            break;
        case 17:
            img.className += ' neutral';
            break;
        case 18:
            img.className += ' good';
            break;
        case 19:
            img.className += ' unique';
            break;
        case 20:
            img.className += ' veryGood';
            break;
    }
}

function hideForm(form) {
    form.classList.add('hidden');
    charTabs.classList.remove('hidden');
    moveForm.classList.remove('hidden');
    // display.classList.remove('hidden');
}


        // my inferior code for map
        // for (let i = 0; i < parseFloat(vert); i++) {
        //     x = 0;
        //     if (y === 0) {
        //         map.innerHTML += `<div class = image-row>`
        //     }
            
        //     for (let i = 0; i < parseFloat(horz); i++) {
        //         if (counter === randomLocation) {
        //             map.innerHTML += `<img id = "x${x}y${y}" class = "you" src = "exploreimages/you.png">`;
        //         }
        //         else {
        //             map.innerHTML += `<img id = "x${x}y${y}" src = "exploreimages/unexplored.png">`;
        //         }
        //         x++;
        //         counter++;
        //     }
        //     //map.innerHTML += `</div><br><div class = image-row>`;
        //     y++;
        // }