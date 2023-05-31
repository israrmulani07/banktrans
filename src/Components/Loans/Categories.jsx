import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button, Card, CardContent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

export const Categories = () => {
    const [data, setData] = useState([])                 //we did map on data and setData at handleAdd
    const [cat, setCat] = useState("")                   //for textFields

    const dipatch = useDispatch();                       //we create var name dispatch we gave useDispatch to dipatch

    const selectLoan = useSelector((state) => state.loanReducer.cats)

    const handleAdd = () => {
        setData([...data, cat])                         //means we spread old data into new and add new data,cat(onchange data) data also add 
    }

    const handleSubmit = () => {
        const type = "addCats";                         //in type we gave var name addCats
        const payload = data;                           //in payload we gave data which is getter means we gave data
        const action = { type, payload };               //here we gave action both type and payload

        dipatch(action);                                // we send action here
    }


    useEffect(() => {                                   // we use useselector for if we change tab than we will still get data in loan tab also
        setData(selectLoan)
    }, [selectLoan])

    return (
        <React.Fragment>
            <Grid container spacing={3} align="center">

                <Grid item xs={9}><TextField onChange={(e) => setCat(e.target.value)} variant='outlined' label="Add Categories" fullWidth /></Grid>

                <Grid item xs={3}><Button onClick={handleAdd} variant='contained' color='warning' sx={{ height: 55 }} fullWidth>Add</Button></Grid>

                {
                    data.map(item =>
                        <Grid item xs={3}>
                            <Card sx={{ bgcolor: "lightblue" }}>
                                <CardContent>
                                    {item}
                                </CardContent>
                            </Card>
                        </Grid>

                    )
                }

                <Grid item xs={3}><Button onClick={handleSubmit} variant='contained' color='success' sx={{ height: 55 }} fullWidth>Submit</Button></Grid>
            </Grid>
        </React.Fragment>
    )
}
