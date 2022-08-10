import HeroImg from '../images/Group 65.png';


export default function Hero () {
    return(
        <section className='Hero'> 
         <img src={HeroImg} alt='' className='hero-img'/>
         <h1 className='Hero-h1'>Online Experiences</h1>
         <p className='Hero-p'>Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving <br/>home.</p>

         </section>
    )

}