import './App.css';
import Wordcounter from './components/Wordcounter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="raj m-5">
      <div class="ni shadow p-3 m-5 rounded">
        <h5>Responsive Paragraph Word</h5>
        <h5 class="text-center">Counter</h5>
        <Wordcounter />
      </div>
    </div>
  );
}

export default App;
