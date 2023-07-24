import React, { useState, useEffect } from 'react';
import '/src/style.css'
import DuracionOriginal from './components/DuracionOriginal';
import Velocidad from './components/Velocidad';
import DuracionFinal from './components/DuracionFinal';
import TiempoSalvado from './components/TiempoSalvado';

const App = () => {
  const [duracion, setDuracion] = useState('23:59'); // Duracion Original en formato 'HH:mm:ss'
  const [velocidad, setVelocidad] = useState('1'); // Velocidad de Reproduccion
  const [duracionFinal, setDuracionFinal] = useState('00:00:00'); // Duracion Final
  const [tiempoSalvado, setTiempoSalvado] = useState('00:00:00'); // Tiempo Salvado

  // Función para calcular la Duracion Final y el Tiempo Salvado
  const calcularDuracionFinal = () => {
    const tiempoOriginal = duracion.split(':');
    const horasOriginal = parseInt(tiempoOriginal[0]);
    const minutosOriginal = parseInt(tiempoOriginal[1]);
    const segundosOriginal = parseFloat(tiempoOriginal[2] || 0);

    const segundosTotalesOriginal = horasOriginal * 3600 + minutosOriginal * 60 + segundosOriginal;

    const duracionFinalSegundos = segundosTotalesOriginal / parseFloat(velocidad);
    const duracionFinalHoras = Math.floor(duracionFinalSegundos / 3600);
    const duracionFinalMinutos = Math.floor((duracionFinalSegundos % 3600) / 60);
    const duracionFinalSegs = duracionFinalSegundos % 60;

    const duracionFinal =
      duracionFinalHoras.toString().padStart(2, '0') +
      ':' +
      duracionFinalMinutos.toString().padStart(2, '0') +
      ':' +
      duracionFinalSegs.toString().padStart(2, '0'); // Ajustamos el formato de los segundos.

    setDuracionFinal(duracionFinal);

    const tiempoSalvadoSegundos = segundosTotalesOriginal - duracionFinalSegundos;
    const tiempoSalvadoHoras = Math.floor(tiempoSalvadoSegundos / 3600);
    const tiempoSalvadoMinutos = Math.floor((tiempoSalvadoSegundos % 3600) / 60);
    const tiempoSalvadoSegs = tiempoSalvadoSegundos % 60;

    const tiempoSalvado =
      tiempoSalvadoHoras.toString().padStart(2, '0') +
      ':' +
      tiempoSalvadoMinutos.toString().padStart(2, '0') +
      ':' +
      tiempoSalvadoSegs.toString().padStart(2, '0'); // Ajustamos el formato de los segundos.

    setTiempoSalvado(tiempoSalvado);
  };

  // Manejar cambios en Duracion Original
  const handleDuracionChange = (value) => {
    setDuracion(value);
  };

  // Manejar cambios en Velocidad
  const handleVelocidadChange = (value) => {
    setVelocidad(value);
  };

  // Calcular Duracion Final y Tiempo Salvado en respuesta a los cambios en duracion y velocidad
  useEffect(() => {
    calcularDuracionFinal();
  }, [duracion, velocidad]);

  return (
    <div>
      <DuracionOriginal duracion={duracion} handleChange={handleDuracionChange} />
      <Velocidad velocidad={velocidad} handleChange={handleVelocidadChange} />
      <DuracionFinal duracionFinal={duracionFinal} />
      <TiempoSalvado tiempoSalvado={tiempoSalvado} />
    </div>
  );
};

export default App;
