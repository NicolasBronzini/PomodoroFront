import  { useState, useEffect } from 'react';
import Modal from '../Modale/Modal';
import { FaGear } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

import { MdClose } from "react-icons/md";
// Timer.tsx
import images from './imagen.ts' ;


import './Timer.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

const [selectedOption, setSelectedOption] = useState('');


  useEffect(() => {
    let interval:any;

    const handleTick = () => {
      if (!isPaused) {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            handleRest();
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    };

    interval = setInterval(handleTick, 1000);

    return () => clearInterval(interval);
  }, [isPaused, minutes, seconds]);

  useEffect(() => {
    const interval = setInterval(changeImage, 30000); // Cambia la imagen cada 5 segundos (ajusta según tus necesidades)

    return () => clearInterval(interval);
  }, [currentImage]);

  const changeImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleRest = () => {
    // Implementa la lógica para iniciar el descanso corto o largo aquí
    // Utiliza la variable de estado customMinutes para determinar la duración del descanso
  };

  const handlePausePlay = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleReset = () => {
    setMinutes(customMinutes);
    setSeconds(0);
    setIsPaused(true);
  };

  const handleGearClick = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  const handleCustomTimeChange = (event:any) => {
    setCustomMinutes(parseInt(event.target.value, 10));
  };

  const handleApplyCustomTime = () => {
    setMinutes(customMinutes);
    setSeconds(0);
    setShowMenu(false);
  };

  return (
    <div className='ContainerTimer' style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover' , transition: 'background-image 1s ease-in-out' }}>
      <div className='BotoneraTimer'>
        <button onClick={handlePausePlay}>{isPaused ? <FaPlay className='IconButtons'/> : <FaPause  className='IconButtons'/>}</button>
        <button onClick={handleReset}><GrPowerReset  className='IconButtons'/></button>
        <button onClick={handleGearClick}><FaGear  className='IconButtons'/></button>
      </div>
      <div>
        <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
      </div>
      {showMenu && (
        <Modal onClose={handleMenuClose}>
          <div>
            <label>
              Tiempo :
              <input
                type="text"
                value={customMinutes}
                onChange={handleCustomTimeChange}
              />
              <input
                type="text"
                value={`00 `}
                readOnly
              />
            </label>
            <label>
        Opciones:
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="Opción 1">Opción 1</option>
          <option value="Opción 2">Opción 2</option>
          <option value="Opción 3">Opción 3</option>
        </select>
      </label>
            <div className='ContainerBtnModal'>
              <button onClick={handleApplyCustomTime} className='btnAplicarModal'>Aplicar</button>
              <button className="close-button" onClick={handleMenuClose}><MdClose /></button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Timer;
