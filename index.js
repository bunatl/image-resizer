// selector, ratio
function imageResizer (width, height, selectorClass) {
    if (!width) return;

    // https://www.w3schools.com/tags/ref_canvas.asp

    const images = document.getElementsByTagName("img");

    for (let image of images) {

        const img = document.createElement('img');
        img.src = image.src;
        console.log(img.src);
        // img.crossOrigin = 'Anonymous';
        img.onload = function (e) {

            const c = document.createElement("canvas");
            // const c = document.getElementById("canva");
            const ctx = c.getContext("2d");
            // c.width = 25;
            // c.height = 25;

            ctx.drawImage(e.target, 0, 0, 100, 100);


            const url = c.toDataURL(e.target, "image/png");
            console.log(url);

            document.getElementById("output").src = c.toDataURL(e.target, "image/png");
        };

    }

}

imageResizer("400px");

