import BezierEasing from './BezierEasing';

const Scene = require('Scene');
const Reactive = require('Reactive');
const Time = require('Time');

(async function () {
  const plane0 = await Scene.root.findFirst('plane0');

  const progress = Time.ms.mod(1000).mul(0.001); // loop in 0 -> 1
  const bezier = new BezierEasing(1, -0.64, .33, 1.62).evaluate(progress);

  plane0.transform.x = Reactive.toRange(progress, -0.1, 0.1);
  plane0.transform.y = Reactive.toRange(bezier, -0.1, 0.1);
})();