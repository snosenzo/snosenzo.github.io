import { useRef, useEffect } from "preact/hooks";
import canvasSketch from "canvas-sketch";
import { useWindowSize } from "../../hooks";
import { sketch } from "./sketch";

const Sketch = () => {
  const canvasRef = useRef(null);
  const { width: windowWidth } = useWindowSize();
  const canvasSize = Math.min(windowWidth * 0.6, 500);
  // eslint-disable-next-line
  useEffect(async () => {
    if (canvasRef.current) {
      const settings = {
        canvas: canvasRef.current,
        context: "webgl",
        dimensions: [canvasSize, canvasSize],
        animate: true,
        hotkeys: false,
        scaleToView: true,
      };

      // Start the sketch
      const activeSketch = await canvasSketch(sketch, settings);
      return () => activeSketch.unload();
    }
  }, [canvasSize, canvasRef.current]);
  return <canvas id="center-canvas" ref={canvasRef} />;
};

export default Sketch;
