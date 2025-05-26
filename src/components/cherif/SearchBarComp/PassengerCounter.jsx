import { useState, useRef, useCallback } from "react";
import { useMousePosition } from "../hooks/useMousePosition"; // Adjust path if necessary

function calculateCardRotation({
  currentX,
  currentY,
  containerWidth,
  containerHeight,
  maxRotationX,
  maxRotationY,
}) {
  const centerX = containerWidth ;
  const centerY = containerHeight ;

  const deltaX = currentX - centerX/200;
  const deltaY = currentY - centerY;

  // Normalize the delta values to ensure symmetry
  const normalizedDeltaX = deltaX / centerX;
  const normalizedDeltaY = deltaY / centerY;

  const rotationY = (-normalizedDeltaX * maxRotationY).toFixed(2);
  const rotationX = (normalizedDeltaY * maxRotationX).toFixed(2);

  return { rotationX, rotationY };
}

export default function PassengerCounter() {
  const [counts, setCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const containerRef = useRef(null);

  const updateRotation = useCallback(({ x, y }) => {
    if (!containerRef.current) return;

    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      currentX: x - left,
      currentY: y - top,
      containerWidth: width,
      containerHeight: height,
      maxRotationX: 4,
      maxRotationY: 6,
    });

    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, updateRotation);

  const increment = (type) => {
    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrement = (type) => {
    if (counts[type] > 0) {
      setCounts((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
      }));
    }
  };

  const CounterItem = ({ type, label, subtitle }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h3 className="text-lg font-medium">{label}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => decrement(type)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 focus:outline-none"
          >
            -
          </button>
          <span className="mx-4 w-4 text-center">{counts[type]}</span>
          <button
            onClick={() => increment(type)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
      <hr className="border-gray-200 mt-4" />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-3xl p-6 max-w-md mx-auto shadow-lg transition-transform ease-linear"
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
    >
      <CounterItem type="adults" label="Adults" subtitle="Ages 13 or above" />
      <CounterItem type="children" label="Children" subtitle="Ages 2 - 12" />
      <CounterItem type="infants" label="Infants" subtitle="Under 2" />
      <CounterItem type="pets" label="Pets" subtitle="Service animals" />
    </div>
  );
}
