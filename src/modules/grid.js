const grid = () => {
    const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const div = document.createElement('div');

    div.className = "gridItem";

    div.style.width = deviceWidth / 20 + "px";
    div.style.height = deviceWidth / 20 + "px";

    document.getElementById("grid").innerHTML = "";

    for (var j = 0; j < deviceHeight / (deviceWidth / 20); j++) {
        for (var i = 0; i < 20; i++) {
            const cloned = div.cloneNode();
            document.getElementById("grid").appendChild(cloned);
            cloned.addEventListener("mouseenter", () => {
                cloned.style.background = "#000";
            });
            cloned.addEventListener("mouseleave", () => {
                cloned.style.background = "transparent";
            });
        }
    }
}

export default grid;