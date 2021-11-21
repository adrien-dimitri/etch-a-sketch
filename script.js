function sketch(size){
    createGrid(size) //call createGrid() to create all the square from the given size

    const button = document.querySelector("#button");    // reset button + input for size
    button.addEventListener("click", function() {   
       while(container.firstChild) {
        container.removeChild(container.lastChild);
       }
       let input = inputTest();
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
        squares.forEach((e) => {
            e.addEventListener("mousemove", () => {
                e.setAttribute("style", "background: black");
            });
        });
    }
}

function inputTest() { //simple input test
    const input = (prompt("Input size of grid"));
    if (input > 0 || input < 101) {
        return input; 
    }
    alert("Invalid input. Please Enter a value between 1 and 100.");
        inputTest()
    
}

sketch(16); //first generated grid