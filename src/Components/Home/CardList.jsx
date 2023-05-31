import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@mui/material'
import { useSelector } from 'react-redux'

export const CardList = () => {

    const [data, setData] = useState([])

    const selectCard = useSelector(state => state.CardReducer.cards)

    useEffect(() => {
        setData(selectCard)
    }, [selectCard])

    return (
        <React.Fragment>

            <Grid container spacing={3} align="center">

                {
                    data.map(item =>
                        <Grid item xs={12}><Button variant='contained' color='secondary' sx={{ height: 45 }} fullWidth>{item}</Button></Grid>
                    )
                }

            </Grid>

        </React.Fragment>
    )
}
