import './scss/index.scss';
import renderStars from './js/renderStar';
import renderIndicator from './js/renderIndicator';


function render() {
    const initIndicatorColor = 'white';
    const setIndicatorColor = (color) => {
        renderIndicator(color);
    };

    renderStars(setIndicatorColor, initIndicatorColor);
    renderIndicator(initIndicatorColor);
}

render();
