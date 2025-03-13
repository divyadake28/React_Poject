import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COULD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://t3.ftcdn.net/jpg/06/19/95/10/360_F_619951094_kGfJamivZSNEa4a6ipE1o83DwmJLJNnh.jpg";
    const RAIN_URL= "https://images.unsplash.com/photo-1456400761117-a768c370cd6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlciUyMHJhaW58ZW58MHx8MHx8fDA%3D";
    
    return(
        <div className='InfoBox'> 
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia 
      sx={{ height: 140 }}
      image={
        info.humidity>80
        ? RAIN_URL
        : info.temp > 15
        ? HOT_URL
        :COULD_URL
      } 
      title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80
            ? <ThunderstormIcon/>
            : info.temp > 15
            ? <WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
          </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}