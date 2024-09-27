import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URl = "https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/520773327/photo/caution-heavy-rain.jpg?s=2048x2048&w=is&k=20&c=SloIlg0jDiE8hmI_agNFXm9jDdw0bJPLOsJVCw9hdi4=";
    return (
        <div className="InfoBox">
            <h3>Wheather-Info-{info.weather}</h3>
            <div className='card-contain'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URl} title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <div>Temperature : {info.temp}&deg;C</div>
                            <div>Humidity : {info.humidity}</div>
                            <div>Min Temp:{info.tempMin}&deg;C</div>
                            <div>Max Temp:{info.tempMax}&deg;C</div>
                            <div>The weather can be described as {info.weather} And feels like : {info.feelslike} &deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )}