
const renderIndicator = (backgroundColor, canvasComposition) => {
    let canvas;
    canvas = document.getElementById('indicator-canvas');
    if (canvas) {
        canvas.style.backgroundColor = backgroundColor;
        return;
    }
    canvasComposition.insertAdjacentHTML(
        'beforeend',
        `<div>
                  <canvas
                    id="indicator-canvas"
                    width="600"
                    height="50"
                    class="indicator-canvas"
                  ></canvas>
              </div>`,
    );

    canvas = document.getElementById('indicator-canvas');
    canvas.style.backgroundColor = backgroundColor;
};


export default renderIndicator;
