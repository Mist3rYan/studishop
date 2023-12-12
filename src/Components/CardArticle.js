// Autor: Yannick Lannuzel

function CardArticle(props) {
  return (
    <div>
      <h1>Pizza {props.name}</h1>
      <h2>Prix : {props.price ? props.price : 20}€</h2>
    </div>
  );
}
export default CardArticle;
