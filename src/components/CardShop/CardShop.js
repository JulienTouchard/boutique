
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './CardShop.css';

function CardShop(props) {

  const handleClickCard = (id) => {
    props.click(id)
  }
  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          alt={props.data.name}
          height="140"
          image={"./assets/img/" + props.data.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.data.description}
          </Typography>
          <p className='card-price'>{props.data.price}€</p>
          <p className='card-qte'>
            {props.data.qte > 0 ? props.data.qte + " costume(s) en stock" : "Ce produit n'est plus disponible."}
          </p>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleClickCard(props.data.id)}>Achat</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CardShop
