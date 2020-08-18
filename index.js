function imageResizer (parameters) {
    let width = parameters.width;
    let height = parameters.height === undefined ? 0 : parameters.height;
    let outputType = parameters.outputType === undefined ? "png" : parameters.outputType;
    let encoderQuality = parameters.encoderQuality === undefined ? 0.92 : parameters.encoderQuality;
    let selectorClass = parameters.selectorClass === undefined ? "" : parameters.selectorClass;


    // width is mandatory parameter
    if (!width || width === 0 || width === undefined) return;

    // get all images
    let images = document.getElementsByTagName("img");

    if (selectorClass !== undefined && selectorClass !== "")
        images = images.getElementsByClassName(selectorClass);

    for (let image of images) {
        let img = document.createElement('img');
        img.src = image.src;
        // Prevent "Uncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported." error
        img.crossOrigin = 'Anonymous';

        img.onload = e => {
            // https://www.w3schools.com/tags/ref_canvas.asp
            const c = document.createElement("canvas");

            // if user does not specified height - scale height based on new width ratio
            const newHeight = (height === 0) ? (e.target.height * (width / e.target.width)) : height;

            const ctx = c.getContext("2d");
            ctx.drawImage(e.target, 0, 0, width, newHeight);

            // output cropped picture back to html
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
            image.src = c.toDataURL(`image/${ outputType }`, encoderQuality);

            const parent = image.parentNode;

            const a = document.createElement("a");
            a.href = e.target.src;
            a.target = "_blank";
            a.rel = "noreferrer";

            // replace child as described: https://stackoverflow.com/questions/6938248/insert-a-div-element-as-parent
            // set a as the wrapper as child
            parent.replaceChild(a, image);
            // set image as child of a
            a.appendChild(image);
        };
    }
}

// imageResizer({ width: 400 });

module.exports.resizeImage = imageResizer;
