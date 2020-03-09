import './renderStars.scss';

const renderStar = (ctx, star) => {
    const {
        color,
        biasFactor: [
            kX,
            kY,
        ],
    } = star;

    const context = ctx;

    context.beginPath();
    context.fillStyle = color;
    context.lineWidth = 2;

    context.moveTo(75 + kX, 250 + kY);
    context.lineTo(150 + kX, 50 + kY);
    context.lineTo(225 + kX, 250 + kY);
    context.lineTo(50 + kX, 120 + kY);
    context.lineTo(250 + kX, 120 + kY);
    context.lineTo(75 + kX, 250 + kY);

    context.fill();
};

const renderStars = () => {
    const starsOptions = [
        {
            color: 'red',
            biasFactor: [0, 0],
        },
        {
            color: 'blue',
            biasFactor: [250, 0],
        },
        {
            color: 'green',
            biasFactor: [0, 300],
        },
        {
            color: 'yellow',
            biasFactor: [250, 300],
        },
        {
            color: 'black',
            biasFactor: [125, 150],
        },
    ];

    document.body.insertAdjacentHTML(
        'beforeend',
        `<canvas
                id="stars-canvas"
                width="600"
                height="600"
                class="stars-canvas"
              ></canvas>`,
    );
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');

    [...starsOptions].map((item) => renderStar(ctx, item));
};

export default renderStars;
