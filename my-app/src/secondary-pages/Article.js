import './article/article.css';
import Banner from './article/article.webp';

function Article() {
    
    return (
        <div className="article-element">
        <div className='blog-ímg'>
            <img src={Banner} alt=' '></img>
        </div>
        <h2>
            The Evolution of Trains: From Steam Engines to High-Speed Innovation
        </h2>
        <p>

        Trains have come a long way since the days of steam engines, evolving from their humble beginnings to the high-speed
        marvels we see today.<br /><br />

        In the early 19th century, steam engines revolutionized transportation. These powerful machines, fueled by coal,
        allowed for faster travel and the transportation of goods across vast distances, marking the beginning of modern rail
        travel.<br /><br />

        By the late 19th century, electric trains began to appear, bringing with them more efficiency and reduced pollution.
        Cities around the world adopted these quieter, more environmentally friendly trains to enhance urban transportation.<br /><br />

        The mid-20th century saw the rise of diesel-electric trains, combining diesel engines with electric generators to power
        trains more effectively. This hybrid technology became the standard for many railway systems, especially in areas lacking
        extensive electrified rail networks.<br /><br />

        Entering the late 20th century and into the 21st, high-speed trains took center stage. Countries like Japan, France,
        and China developed high-speed rail networks, with trains like the Shinkansen, TGV, and the Maglev reaching speeds over
        300 km/h. These innovations allowed for unprecedented travel times, connecting distant cities in a matter of hours.<br /><br />

        Today, the future of trains looks even more exciting with the development of sustainable and technologically advanced
        rail systems. Electric and even solar-powered trains are becoming more common, while hyperloop technology promises
        to redefine high-speed travel with speeds exceeding 1,000 km/h.<br /><br />

        The evolution of trains exemplifies how transportation technology continues to adapt and innovate, improving travel
        efficiency, safety, and sustainability for future generations.

        </p>


    </div>
    );
  }

  export default Article;