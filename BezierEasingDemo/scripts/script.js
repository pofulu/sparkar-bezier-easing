import BezierEasing from './BezierEasing';

const Scene = require('Scene');
const Reactive = require('Reactive');
const Time = require('Time');

(async function () {
  const plane0 = await Scene.root.findFirst('plane0');

  // loop in 0 -> 1
  const progress = Time.ms.mod(1000).mul(0.001);
  const bezier = new BezierEasing(0.23, 0.89, 0.91, 0.42);

  plane0.transform.x = Reactive.toRange(progress, -0.1, 0.1);
  plane0.transform.y = Reactive.toRange(bezier.evaluate(progress), -0.1, 0.1);
})();