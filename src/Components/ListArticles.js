import CardArticle from "./CardArticle";

function ListArticles(props) {
    if(!props){return <div><h1>Pas d'article</h1></div>}
    else{
        const articlesListing = props.articles.map((article) => <CardArticle name={article.name} price={article.price} />);
        return (
            <div>
                <h1>Liste des articles</h1>
                <p>Voici la liste des Pizzas {props.name ? props.name : <a href="/">Créer un compte.</a>}</p>
                {articlesListing}
            </div>
        );
    }
}
export default ListArticles;