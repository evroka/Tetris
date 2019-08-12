import Game from './src/game.js';
import View from './src/view.js';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
	switch (event.key) {
		case 'ArrowLeft':
			game.movePieceLeft();
			view.render(game.getState());
			break;
		case 'ArrowUp': 
			game.rotatePiece();
			view.render(game.getState());
			break;
		case 'ArrowRight':
			game.movePieceRight();
			view.render(game.getState());
			break;
		case 'ArrowDown':
			game.movePieceDown();
			view.render(game.getState());
			break;
	}
});

view.render(game.getState());