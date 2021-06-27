
let sideLen: number = 50;
let canvas = $('#canv');

const viewportWidth: number= canvas.width();
const viewportHeight: number = canvas.height();

for (let i: number = 0, newDiv: JQuery; i < sideLen**2; i++) {
    newDiv = $('<div></div>').addClass("unpainted-block");
    newDiv.css('width', `${viewportWidth/sideLen}px`);
    newDiv.css('height', `${viewportHeight/sideLen}px`);
    newDiv.hover(() => {
        newDiv.removeClass("unpainted-block")
        newDiv.addClass("painted-block")
    });
    canvas.append(newDiv);
}

function reset() {
    const childrenList: JQuery = canvas.children();
    for (let idx: number = 0; idx < childrenList.length; idx++) {
        childrenList.get(idx).classList.remove("painted-block");
        childrenList.get(idx).classList.add("unpainted-block");
        
    }
}

$('#reset').on('click', reset);
