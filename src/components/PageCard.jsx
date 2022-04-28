import * as React from 'react';
import disney from "../assets/disney.jpg"
import Box from '@mui/material/Box';
import illustration from "../assets/illustration.svg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import  CardMedia  from '@mui/material/CardMedia';
import "../css/PageCard.css";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
    <section className='pagecard'>
       <Card sx={{ minWidth: 275 }} className="card-main">
         <div className='card-content'>
         <div>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='card-button'>Learn More</Button>
      </CardActions>
      </div>
      <div>
      <img src={illustration} />
    </div>
    </div>
    </Card>

    <Card sx={{ maxWidth: 345 }} className="card2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={disney}
          alt="green iguana"
        />
         <h5>Featured App</h5>
        <h2>Disney Zombies</h2>
      </CardActionArea>
    </Card>
    </section>
    </>
  );
}
