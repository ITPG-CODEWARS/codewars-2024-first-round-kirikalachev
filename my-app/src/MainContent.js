import Train from './train.webp';

import Trains from './trains.svg';
import Blog from './blog.png';

import { useNavigate } from 'react-router-dom';


function MainContent() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/blog');
    }
    
    return (
      <div className='main-content'>
        <div className='content'>
          <h2>
            Inspired by the Tracks!
          </h2>
          <p>
            Welcome to RAISPY – your go-to place for everything trains! Whether you're a seasoned rail enthusiast or just beginning to explore the world of locomotives, our site offers a gateway to train history, technology, and captivating journeys.
          </p>
          <div className='btns'>
          <button onClick={() => navigate('/trains')}>
            <h3>Trains</h3>
            <img src={Trains} alt=' '></img>
          </button>

  
            <button onClick={handleNavigate}>
              <h3>Blog</h3>
              <img src={Blog} alt=' '></img>
            </button>
          </div>
        </div>
  
        <div className='main-background'>
          <div className='blue-bg'></div>
          {/* <div> */}
            <img src={Train} alt=' '></img>
          {/* </div> */}
        </div>
      </div>
      
    )
  }

  export default MainContent;