const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const body = document.getElementsByTagName('body')[0];
let num = 1;
let idHorizontalMap = 100;

for (let p of map) {
    console.log(p.length)

    let section = document.createElement('section');
    body.appendChild(section);
    section.classList.add(num);
    num++
    for (let i = 0; i < p.length; i++) {

        let node = document.createTextNode(p[i]);
        let cell = document.createElement('div');

        if (p[i] === 'W') {
            cell.style.backgroundColor = 'orange';
            cell.style.color = 'orange'
        }
        cell.id = idHorizontalMap;
        p.id = idHorizontalMap;
        idHorizontalMap++;
        cell.appendChild(node);
        section.appendChild(cell);
    }

}
let cellspace = 289;
let frog = document.createElement('div');
let s = document.getElementById(cellspace);

document.getElementById('288').innerHTML = '';
document.getElementById('288').classList.add('konoha');
s.innerHTML = '';
frog.id = 'frog';
s.appendChild(frog)

document.addEventListener('keydown', (key) => {
    key = event.key;
    console.log(key)
    frogMovement(key);
    cheat(key);

});

function frogMovement(x) {


    console.log(x)
    x = (event.key === 'ArrowUp' && document.getElementById(cellspace - 21).innerHTML !== 'W') ? cellspace -= 21 : (event.key === 'ArrowDown' && document.getElementById(cellspace + 21).innerHTML !== 'W') ? cellspace += 21 : (event.key === 'ArrowLeft' && document.getElementById(cellspace - 1).innerHTML !== 'W' && cellspace - 1 !== 288) ? cellspace -= 1 : (event.key === 'ArrowRight' && document.getElementById(cellspace + 1).innerHTML !== 'W') ? cellspace += 1 : cellspace;
    x = (event.key === 'ArrowRight' && cellspace + 1 === 290) ? cellspace -= 1 : cellspace;

    document.getElementById(cellspace).innerHTML = ''
    document.getElementById(cellspace).appendChild(frog)

}

function cheat() {

    x = (event.key === 'f') ? cellspace = 288 : 0;
    document.getElementById(cellspace).appendChild(frog)
    console.log(cellspace)

    if (cellspace === 288) {
        alert('Congrats!! Gamakichi arrived safely! :D');
     let song = new Audio('https://superdownloadsnaruto.webnode.pt/_files/200000006-a3cffa4c98/Naruto%20Theme%20-%20The%20Raising%20Fighting%20Spirit.mp3').play()
    
    
    }
}

let msg = document.createTextNode("Help Gamakichi in his journey to Konoha, it seen's like Naruto can't summom him! :(");
body.appendChild(msg);



