import './train/train.css';
import Banner from './train/train.png';

function Train() {
    
    return (
    <div className="train-element">
         <img src={Banner} alt=' '></img>
        <h2>
        The Mallard (LNER Class A4 4468 Mallard)
        </h2>
        
        <p>
            The Mallard (LNER Class A4 4468) is a famous British steam locomotive, celebrated for setting the world speed record for steam locomotives.<br></br>
            Built by the London and North Eastern Railway (LNER) in 1938, this streamlined locomotive was part of the Class A4 series, designed by Sir Nigel Gresley.<br></br>
            Known for their elegant, aerodynamic design, these locomotives were built for speed and long-distance travel, primarily running on express passenger services along the East Coast Main Line in the UK.<br></br> <br></br>

            The Mallard's claim to fame came on July 3, 1938, when it reached an incredible 126 miles per hour (203 km/h) on a slight downhill stretch near Grantham, Lincolnshire.<br></br>
            This record remains unbeaten by any steam locomotive to this day.<br></br>
            The Mallard is instantly recognizable by its striking blue livery and streamlined shape, designed to reduce air resistance and maximize speed.<br></br>

            Today, the Mallard is preserved and displayed at the National Railway Museum in York, England, where it remains a popular attraction and a symbol of British engineering excellence in the steam era.
        </p>
            
    </div>
       


    );
  }

  export default Train;