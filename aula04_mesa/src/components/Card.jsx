const Card = (props) => {
    return (
        <>
        <div className="card-container">
            <div className="card-img">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="card-description">
                <p className="title">{props.title}</p>
                <p className="category">{props.category}</p>
            </div>
        </div>
        </>
    )
}

export default Card;