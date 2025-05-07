import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ShowerIcon from '@mui/icons-material/Shower';



export default function InfoBox({info}){
    const Init_Url="https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    return(
        <div>
            <h2 style={{color:"black"} }>Weather Info</h2>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80?
            RAIN_URL:
            info.temp>15?
            HOT_URL:
            COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
              info.humidity>80?
              <ShowerIcon /> :
                info.temp>15?
               <SunnyIcon /> :
               <AcUnitIcon />
                }
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <b> <p>Temperature:{info.temp}&deg;C</p>
            <p>Humidty:{info.humidity}</p>
            <p>Min Temp:{info.tempMin}&deg;C</p>
            <p>Max Temp:{info.tempMax}&deg;C</p>
            <p>The weather is described as <i>{info.weather}</i> and Feels Like:{info.feelsLike}&deg;C</p></b>

            

          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      

        </div>
    )
}