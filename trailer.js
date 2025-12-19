let clickCount = 0;

function goDown() {
    let person = document.getElementById('person');
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let box4 = document.getElementById('box4');

    clickCount++;
    console.log(clickCount);

    if (clickCount == 1){
        box1.append(person);
    }

    else if (clickCount == 2){
        box2.append(person);
    }

    else if (clickCount == 3){
        box3.append(person);
    }

    else if (clickCount == 4){
        box4.append(person);
    }

    else if (clickCount > 4){
        alert('Go up!')
    }

}

function goUp() {
    let person = document.getElementById('person');
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let box4 = document.getElementById('box4');
    let home = document.getElementById('home');

    clickCount--;
    console.log(clickCount);

    if (clickCount == 3){
        box3.append(person);
    }

    else if (clickCount == 2){
        box2.append(person);
    }

    else if (clickCount == 1){
        box1.append(person);
    }

    else if (clickCount == 0){
        home.append(person);
    }

    else if (clickCount < 0){
        alert ('Go down!')
    }
}