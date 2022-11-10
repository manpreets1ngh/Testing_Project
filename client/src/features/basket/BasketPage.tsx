import { Delete } from "@mui/icons-material";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";

export default function BasketPage(){
    const {basket} = useStoreContext();

    if(!basket) return <Typography variant="h5">Your basket is empty</Typography>
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {basket.items.map((item) => (
                    <TableRow
                    key={item.productId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {item.name}
                    </TableCell>
                    <TableCell align="right">£{item.price}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">£{ item.price * item.quantity}</TableCell>
                    <TableCell align="right">
                        <IconButton color='error'><Delete/></IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}