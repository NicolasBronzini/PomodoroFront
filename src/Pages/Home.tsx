import './Home.css'; // Importa tu archivo de estilos CSS
import InfoUser from '../Components/InfoUser/InfoUser';
import Timer from '../Components/Timer/Timer';
import TodoList from '../Components/TodoList/TodoList';
import Historial from '../Components/Historial/Historial';
import MusicGrid from '../Components/MusicGrid/MusicGrid';

const Home = () => {
  return (
    <div className="grid-container">
      <div className="info-user"><InfoUser /></div>
      <div className="todo-list"><TodoList /></div>
      <div className="timer"><Timer /></div>
      <div className="historial"><Historial /></div>
      <div className="music-grid"><MusicGrid /></div>
    </div>
  );
}

export default Home;
