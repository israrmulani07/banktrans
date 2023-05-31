import React from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import { CatList } from './Home/CatList'
import { HomeContent } from './Home/HomeContent'
import { CardList } from './Home/CardList'

export const Home = () => {
    return (
        <React.Fragment>

            <Grid container spacing={3} align="center" marginTop={1}>
                <Grid item xs={3}>
                    <Card sx={{ bgcolor: "violet" }}>
                        <CardContent>
                            <CatList />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card sx={{ bgcolor: "gainsboro" }}>
                        <CardContent>
                            <HomeContent />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ bgcolor: "violet" }}>
                        <CardContent>
                            <CardList />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
