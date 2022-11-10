import { Container, Typography, Paper, Button, Divider } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError(){
    const history = useHistory();
    const {state} = useLocation<any>();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant="h5" gutterBottom>Server Error</Typography>
                    <Divider/>
                    <Typography>{state.error.detail || 'Internal Server Error'}</Typography>
                </>
            ) : (
                <Typography variant="h5" gutterBottom>Server Error</Typography>
            )}
            <Button onClick={() => history.push('/catalog')}>Go back to the store</Button>

        </Container>
    )
}