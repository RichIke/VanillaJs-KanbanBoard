import Kanban from "../view/kanban.js";
import { Gradient } from './Gradient.js';

new Kanban (
    document.querySelector(".kanban")
);

// Create your instance
const gradient = new Gradient();

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas');
  