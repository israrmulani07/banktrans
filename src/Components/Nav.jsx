import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Card, CardContent, Button } from '@mui/material'

export const Nav = () => {
    const navigate = useNavigate();                                  //to navigate through components / buttons

    return (
        <React.Fragment>
            <Card sx={{ bgcolor: "darkorange" }}>
                <CardContent>

                    <Grid container spacing={3}>
                        <Grid item xs={2}><Button onClick={() => navigate("/")} variant='contained' sx={{ height: 45 }} fullWidth>Home</Button></Grid>

                        <Grid item xs={2}><Button onClick={() => navigate("/accsum")} variant='contained' sx={{ height: 45 }} fullWidth>Account Summary</Button></Grid>

                        <Grid item xs={2}><Button onClick={() => navigate("/cards")} variant='contained' sx={{ height: 45 }} fullWidth>Cards</Button></Grid>

                        <Grid item xs={2}><Button onClick={() => navigate("/loan")} variant='contained' sx={{ height: 45 }} fullWidth>Loans</Button></Grid>
                    </Grid>

                </CardContent>
            </Card>

        </React.Fragment>
    )
}

