function sketch(size){
    const container = document.querySelector("#container");
    for (i=1; i<=size; i++) {
        
        const row = document.createElement("div");
        row.classList.add(`row`);
        container.appendChild(row);
    }
    
    const rows = document.querySelectorAll(".row");
    rows.forEach(e => {
        for (i=1; i<=size; i++) {
            const square = document.createElement("div");
            square.classList.add(`square`);
            e.appendChild(square);
        }
    });
    
    const squares = document.querySelectorAll(".square");
    
    squares.forEach((e) => {
        e.addEventListener("mousemove", () => {
            console.log(e);
            e.setAttribute("style", "background: black");
        });
    
    });
    
    const button = document.querySelector("#button");
    
    button.addEventListener("click", () => {
        squares.forEach((e) => {
            e.removeAttribute("style", "background: black");
        });
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
        const input = prompt("Input size of grid");
        sketch(input);
    
    });
}

sketch(16);