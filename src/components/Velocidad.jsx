const Velocidad = ({ velocidad, handleChange }) => {
  return (
    <div>
      <h3>Velocidad de Reproduccion</h3>
      <select value={velocidad} onChange={(e) => handleChange(e.target.value)}>
        <option value="0.25">0.25x</option>
        <option value="0.50">0.50x</option>
        <option value="0.75">0.75x</option>
        <option value="1">Normal</option>
        <option value="1.25">1.25x</option>
        <option value="1.50">1.50x</option>
        <option value="2">2x</option>
      </select>
    </div>
  );
};

export default Velocidad;
