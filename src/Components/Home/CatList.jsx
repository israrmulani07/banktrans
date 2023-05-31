import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@mui/material'

import { useSelector } from 'react-redux'

export const CatList = () => {
    const [data, setData] = useState([])

    const selectData = useSelector((state) => state.loanReducer.cats)               //it gives by default state  it will give in array form

    useEffect(() => {
        setData(selectData)
    }, [selectData])
    // when selectData change 
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
