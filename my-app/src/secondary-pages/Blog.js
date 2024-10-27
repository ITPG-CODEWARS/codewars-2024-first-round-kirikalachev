import './blog/Blog.css';
import Banner from './blog/banner.webp';

function Blog() {
    
    return (
    <div className='blog-elements'>
     <h2>Recent</h2>
     
     <div className='blog-element'>
        <img src={Banner} alt='img'></img>
        <h2>
            The Evolution of Trains: From Steam Engines to High-Speed Marvels
        </h2>
        <span>
            <p className='name'>
                Ivan Dimitrov
            </p>
            <p className='date'>
                12.02.2024
            </p>
        </span>
     </div>

    <div className='blog-element'>
        <img src={Banner} alt='img'></img>
        <h2>
            The Evolution of Trains: From Steam Engines to High-Speed Marvels
        </h2>
        <span>
            <p className='name'>
                Ivan Dimitrov
            </p>
            <p className='date'>
                12.02.2024
            </p>
        </span>
     </div>     
    </div>
    );
  }

  export default Blog;
  