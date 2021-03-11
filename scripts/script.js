import { PFTween } from './PFTween';
import BezierEasing from './BezierEasing';

const Scene = require('Scene');
const Reactive = require('Reactive');

(async function () {
  const plane0 = await Scene.root.findFirst('plane0');

  const progress = new PFTween(0, 1, 1000).setLoops().setMirror().scalar;
  const bezier = new BezierEasing(1, -0.64, .33, 1.62).evaluate(progress);

  plane0.transform.x = Reactive.toRange(progress, -0.1, 0.1);
  plane0.transform.y = Reactive.toRange(bezier, -0.1, 0.1);
})();