const DuracionOriginal = ({ duracion, handleChange }) => {
  return (
    <>
      <h2>Duracion Original</h2>
      <input
        type="time"
        value={duracion}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default DuracionOriginal;
