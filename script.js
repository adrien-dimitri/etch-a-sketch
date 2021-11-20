for (i=1; i<17; i++) {
    const container = document.querySelector("#container");
    const row = document.createElement("div");
    row.classList.add(`row`);
    container.appendChild(row);
}

const rows = document.querySelectorAll(".row");
rows.forEach(e => {
    for (i=1; i<17; i++) {
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

