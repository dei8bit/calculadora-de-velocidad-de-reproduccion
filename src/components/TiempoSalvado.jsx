const TiempoSalvado = ({ tiempoSalvado }) => {
  const tiempoSalvadoStyle = {
    color: tiempoSalvado.startsWith('-') ? 'red' : 'green'
  };

  return (
    <>
      <h3>Tiempo Salvado:</h3>
      <div style={tiempoSalvadoStyle}>{tiempoSalvado}</div>
    </>
  );
};

export default TiempoSalvado;
