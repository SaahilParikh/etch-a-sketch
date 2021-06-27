let sideLen = 50;
let canvas = $('#canv');
const viewportWidth = canvas.width();
const viewportHeight = canvas.height();
for (let i = 0, newDiv; i < sideLen ** 2; i++) {
    newDiv = $('<div></div>').addClass("unpainted-block");
    newDiv.css('width', `${viewportWidth / sideLen}px`);
    newDiv.css('height', `${viewportHeight / sideLen}px`);
    newDiv.hover(() => {
        newDiv.removeClass("unpainted-block");
        newDiv.addClass("painted-block");
    });
    canvas.append(newDiv);
}
function reset() {
    const childrenList = canvas.children();
    for (let idx = 0; idx < childrenList.length; idx++) {
        childrenList.get(idx).classList.remove("painted-block");
        childrenList.get(idx).classList.add("unpainted-block");
    }
}
$('#reset').on('click', reset);
//# sourceMappingURL=script.js.map