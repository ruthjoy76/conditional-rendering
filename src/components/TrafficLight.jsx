import "./TrafficLight.css";


function TrafficLight({ color }) {
  return (
    <div className="traffic-light">
      <div className={color === 'red' ? 'red light active' : 'red light'}></div>
      <div className={color === 'yellow' ? 'yellow light active' : 'yellow light'}></div>
      <div className={color === 'green' ? 'green light active' : 'green light'}></div>
    </div>
  );
}

export default TrafficLight;