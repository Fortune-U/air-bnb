import Star1 from '../images/Star 1.png';
//import Athlete from '../static/Athlete.png';

export default function Card (props) {
    return(
        <>
        <div className='container' >
            
            <img className='card-img' src={props.img} alt='' />
            <span className='floater'>
              {props.name}
            </span>
        
        <div className='text-box'>
            <p className='caption'>
                <img src = { Star1} alt='' className='card--star'    />
                  {props.rating}
                  <p className='caption-color'> 
                ({props.reviewCount})
                •
                {props.country}
                </p>
            </p>
            <p className='paraphrase'>{props.paraphrase} </p>
            
            <p className='paraphrase2'> <b>From {props.price} </b>/ person</p>
        </div>
        </div>
        </>
    )
}