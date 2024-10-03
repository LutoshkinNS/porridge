import root from './root.js';
import todos from './todos.js';

const controllers = [
    root,
    todos
];

export default (app) => controllers.forEach((f) => f(app));