import {Button, Container, Divider, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function NotFound(){
    return (
        <Container component={Paper} sx={{height: 200}}>
            <Typography gutterBottom variant="h5">Oops - we could not find what you are looking for</Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'>Go back to store</Button>
        </Container>
    )
}