import './blog/Blog.css';
import Banner from './blog/banner.webp';

function Blog() {
    
    return (
    <div className='blog-elements'>
     <h2>Recent</h2>
     
     <div className='blog-element'>
        <img src={Banner} alt='img'></img>
        <div className='text-info'>
        <h2>
            The Evolution of Trains: From Steam Engines to High-Speed Marvels
        </h2>
        <p className='article-description'>
            Trains have come a long way since the days of steam engines chugging along iron tracks. Over the past two centuries, they have transformed from industrial workhorses to high-speed marvels, revolutionizing how we travel and transport goods. From the early steam-powered locomotives to today’s cutting-edge maglev trains, each stage of rail evolution reflects breakthroughs in technology, efficiency, and speed. As we look to the future, trains remain a vital part of our transportation network, connecting cities, countries, and people faster than ever before.
        </p>
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

     <div className='blog-element'>
        <img src={Banner} alt='img'></img>
        <div className='text-info'>
        <h2>
            The Evolution of Trains: From Steam Engines to High-Speed Marvels
        </h2>
        <p className='article-description'>
            Trains have come a long way since the days of steam engines chugging along iron tracks. Over the past two centuries, they have transformed from industrial workhorses to high-speed marvels, revolutionizing how we travel and transport goods. From the early steam-powered locomotives to today’s cutting-edge maglev trains, each stage of rail evolution reflects breakthroughs in technology, efficiency, and speed. As we look to the future, trains remain a vital part of our transportation network, connecting cities, countries, and people faster than ever before.
        </p>
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
   
    </div>
    );
  }

  export default Blog;
  