function sketch(size){
    createGrid(size) //call createGrid() to create all the square from the given size

    const button = document.querySelector("#button");    // reset button + input for size
    button.addEventListener("click", function() {   
       let input = inputTest();
       while(container.firstChild) {
        container.removeChild(container.lastChild);
       }
       createGrid(input);
    });

    function createGrid(size) { //function to create the grid
        const container = document.querySelector("#container"); //creating rows
        for (i=1; i<=size; i++) { 
            const row = document.createElement("div");
            row.classList.add(`row`);
            container.appendChild(row);
        } 
        
        const rows = document.querySelectorAll(".row"); //creating squares in each row
        rows.forEach(e => {
            for (i=1; i<=size; i++) {
                const square = document.createElement("div");
                square.classList.add(`square`);
                e.appendChild(square);
            }
        });      
        
        const squares = document.querySelectorAll(".square"); //Listen to mouse hover event
        const x = Math.floor(Math.random()*255);
        const y = Math.floor(Math.random()*255);
        const z = Math.floor(Math.random()*255);

        squares.forEach((e) => {
            e.setAttribute("style", `background: rgba(${x},${y},${z},0%)`) //set the bg colour of all square to be 0% opacity
            let opacity = 0;
            e.addEventListener("mouseover", () => {   
                if (e.getAttribute("style") ==`background: rgba(${x},${y},${z},100%)`) { //check if opacity is full
                    return;
                }
                if (e.getAttribute("style") ==`background: rgba(${x},${y},${z},${opacity}%)`) { //if not full, add 20% to opacity
                    opacity += 20;
                    e.setAttribute("style", `background: rgba(${x},${y},${z},${opacity}%)`); 
                };
            });
        });
    };
};

function inputTest() { //simple input test
    const input = (prompt("Input size of grid. \nEnter 0 to exit."));
    if (input == 0) {return alert("Thank you for playing :)")}
    if (input > 0 && input < 101) {
        return input; 
    };
    alert("Invalid input. Please Enter a value between 1 and 100. \nEnter 0 to exit.");
    if (input == 0) {return alert("Thank you for playing :)")}    
    inputTest()
    
};

function getRandomValue() {
    const value = Math.floor(Math.random()*255);
    return value;
}

sketch(16); //first generated grid