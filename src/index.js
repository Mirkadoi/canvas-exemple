import './scss/index.scss';
import renderStars from './js/renderStar';
import renderIndicator from './js/renderIndicator';


function render() {
    const initIndicatorColor = 'white';
    const canvasComposition = document.getElementById('canvas-composition');
    const setIndicatorColor = (color) => {
        renderIndicator(color);
    };

    renderStars(setIndicatorColor, initIndicatorColor, canvasComposition);
    renderIndicator(initIndicatorColor, canvasComposition);
}

render();
