import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import  data  from "./data";

//import Athlete from './static/Athlete.png';

function App() {
  const cardComponent = data.map(card=>{
    return (<Card 
      key={card.id}
    img = {card.coverImg}
     rating = {card.stats.rating}
     reviewCount = {card.stats.reviewCount}
     country = {card.location}
     paraphrase = {card.title}
     price = {card.price}/>
    )
  })
  return (
    <>
    <NavBar />
    <Hero />
    {cardComponent}
    </>
  );
}

export default App;
