import './trains/trains.css';
import Banner from './trains/trains.png';
import { useNavigate } from 'react-router-dom';

function Trains() {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/train');
    }

    return (
    <div className="train-elements1">
        <div className="train-element1">
            <img src={Banner} alt='img'></img>
            <h2>
                The Mallard (LNER Class A4 4468 Mallard)
            </h2>
            <div className='stats'>
                <p><strong>Model:</strong> LNER Class A4 4468 Mallard</p>
                <p><strong>Type:</strong> Steam Locomotive</p>
                <p><strong>Builder:</strong> Doncaster Works, United Kingdom</p>
                <p><strong>Release Date:</strong> March 3, 1938</p>
                <p><strong>Top Recorded Speed:</strong> 126 mph (203 km/h)</p>
                <p><strong>Engine Power:</strong> 2,200 hp</p>
                <p><strong>Weight:</strong> Approximately 165 tons</p>
                <p><strong>Wheel Arrangement:</strong> 4-6-2 (Pacific type)</p>
            </div>
            <button className='more' onClick={handleNavigate}>
                Read more
            </button>
        </div>
    </div>  
    );
  }

  export default Trains;