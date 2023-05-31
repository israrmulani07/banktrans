import React, { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

export const CardCat = () => {

    const [data, setData] = useState([])

    const [card, setCard] = useState("")

    const dispatch = useDispatch()

    const selectCards = useSelector((state) => state.CardReducer.cards)

    const handleAdd = () => {
        setData([card, ...data])
    }

    const handleSubmit = () => {                        //here given dipatch functionalilty

        const type = "addCards"
        const payload = data
        const action = { type, payload }

        dispatch(action);
    }


    useEffect(() => {
        setData(selectCards)                // we use useselector for if we change tab than we will still get data in Card tab also
    }, [selectCards]);


    return (
        <React.Fragment>
            <Grid container spacing={2} align="center">

                <Grid item xs={9}><TextField onChange={(e) => setCard(e.target.value)} variant='outlined' label="CardLists" fullWidth /></Grid>

                <Grid item xs={3}><Button onClick={handleAdd} sx={{ height: 55 }} color='warning' variant='contained' fullWidth>Add</Button></Grid>

                {
                    data.map(item =>
                        <Grid item xs={3}>
                            <Card sx={{ bgcolor: "brown", color: "#ffff" }} >
                                <CardContent>
                                    {item}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }

                <Grid item xs={3}><Button onClick={handleSubmit} sx={{ height: 55 }} color='success' variant='contained' fullWidth>Submit</Button></Grid>

            </Grid>
        </React.Fragment>
    )
}
