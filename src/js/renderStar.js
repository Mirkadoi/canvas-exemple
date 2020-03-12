
const renderStar = (ctx, star) => {
    const context = ctx;
    const {
        color,
        biasFactor: [
            kX,
            kY,
        ],
    } = star;

    context.beginPath();
    context.fillStyle = color;
    context.lineWidth = 2;

    context.moveTo(75 + kX, 250 + kY);
    context.lineTo(150 + kX, 50 + kY);
    context.lineTo(225 + kX, 250 + kY);
    context.lineTo(50 + kX, 120 + kY);
    context.lineTo(250 + kX, 120 + kY);
    context.lineTo(75 + kX, 250 + kY);
    context.closePath();

    context.fill();
};

const renderStars = (callback, initIndicatorColor) => {
    const starsOptions = [
        {
            color: 'rgba(255,0,0,255)',
            biasFactor: [0, 0],
            id: 0,
        },
        {
            color: 'rgba(0,0,255,255)',
            biasFactor: [250, 0],
            id: 1,
        },
        {
            color: 'rgba(0,128,0,255)',
            biasFactor: [0, 300],
            id: 2,
        },
        {
            color: 'rgba(255,255,0,255)',
            biasFactor: [250, 300],
            id: 3,
        },
        {
            color: 'rgba(0,0,0,255)',
            biasFactor: [125, 150],
            id: 4,
        },
    ];

    document.body.insertAdjacentHTML(
        'beforeend',
        `<div>
                  <canvas
                    id="stars-canvas"
                    width="600"
                    height="600"
                    class="stars-canvas"
                  ></canvas>
              </div>`,
    );
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');

    starsOptions.map((item) => renderStar(ctx, item));

    canvas.addEventListener('click', ({ clientX, clientY }) => {
        const mousePos = {
            x: clientX - canvas.offsetLeft,
            y: clientY - canvas.offsetTop,
        };

        const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
        const color = `rgba(${pixel[0]},${pixel[1]},${pixel[2]},${pixel[3]})`;
        const colorSum = pixel[0] + pixel[1] + pixel[2] + pixel[3];

        starsOptions.forEach(({ color: colorStar }) => {
            if (!colorSum) {
                callback(initIndicatorColor);
                return;
            }
            if (colorStar === color) {
                callback(colorStar);
            }
        });
    });
};

export default renderStars;
