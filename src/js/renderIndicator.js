
const renderIndicator = (backgroundColor) => {
    document.body.insertAdjacentHTML(
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
    const canvas = document.getElementById('indicator-canvas');
    canvas.style.backgroundColor = backgroundColor;
};


export default renderIndicator;
