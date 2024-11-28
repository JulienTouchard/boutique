import React from 'react';
import './CardShop.css';

function CardShop(props) {
  
  const handleClickCard = (id)=>{
    props.click(id)
  }
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <div className='card'>
      <img src={"./assets/img/" + props.data.imgUrl} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <p className='card-price'>{props.data.price}€</p>
      <p className='card-description'>{props.data.description}</p>
      <p className='card-qte'>
      {props.data.qte > 0 ? props.data.qte + " costume(s) en stock" : "Ce produit n'est plus disponible."}
      </p>
      <button className='' onClick={()=>handleClickCard(props.data.id)}>Achat</button>
    </div>
    </>
  )
}

export default CardShop
