import Card from "./Card";

const Body = () => {
    return (
        <div className="body-container">
            <h1>Fast-Food House</h1>
        <div className="cards-container">
        <Card 
        img="https://www.receitas-sem-fronteiras.com/uploads/media/feijoada_serv_021.jpg"
        title="Feijoada"
        category="Prato principal" />
        <Card 
        img="https://www.comidaereceitas.com.br/wp-content/uploads/2021/02/Camarao-cozido-no-limao-freepik-780x520.jpg"
        title="Camarão"
        category="Frutos do mar" />
        <Card 
        img="https://receitinhas.com.br/wp-content/uploads/2022/08/Coxinha-de-charque.jpg"
        title="Coxinha"
        category="Salgadinho" />
        <Card 
        img="https://ciadereceitas.com.br/wp-content/uploads/2022/12/torta-de-limao-gelada-com-recheio-de-mousse.webp"
        title="Torta de Limão"
        category="Sobremesa" />
        <Card 
        img="https://3talheres.com.br/wp-content/uploads/2022/09/Coca-Cola.jpg"
        title="Coca Cola"
        category="Bebida" />
        
        </div>
        </div>
    )
}

export default Body;

