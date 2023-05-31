import React, { useState, useEffect } from 'react';
import { Grid, Button, TextField, Card, CardContent } from '@mui/material';
import Select from "react-select";
import { useSelector, useDispatch } from 'react-redux';


export const CreditTrans = () => {

    const [option, setOption] = useState([]);

    const [transdata, setTransdata] = useState([])                     //useState for trans to hold data

    const [cardtype, setCardtype] = useState("");

    const [amnt, setAmnt] = useState(0);



    const selectCards = useSelector((state) => state.CardReducer.cards);

    const selectTrans = useSelector((state) => state.CardReducer.trans);

    const dispatch = useDispatch();

    const handleCredit = () => {                                                     //we create payload 
        const currTrans = {
            cardtype,
            amnt,
            transtype: 'C'
        }

        const payload = [currTrans, ...transdata]
        const type = "addtrans"
        const action = { type, payload }
        dispatch(action)


    };

    useEffect(() => {
        const newData = selectCards.map((item) => //useSelector useEffect
        ({
            value: item,
            label: item
        }))
        setOption(newData)
    }, [selectCards]);

    useEffect(() => {
        setTransdata(selectTrans)
    }, [selectTrans]);

    return (
        <React.Fragment>

            <Card sx={{ height: 300, marginTop: 1 }}>
                <CardContent>

                    <Grid container spacing={2} align="center">
                        <Grid item xs={12}><h2>Credit Transaction</h2></Grid>

                        <Grid item xs={5} sx={{ marginTop: 1 }}><Select options={option} onChange={(opt) => setCardtype(opt.value)} /></Grid>

                        <Grid item xs={5}><TextField type={Number} onChange={(e) => setAmnt(e.target.value)} variant='outlined' label="Add Amount" fullWidth /></Grid>

                        <Grid item xs={2}><Button onClick={handleCredit} variant='contained' color='secondary' sx={{ height: 55 }} fullWidth>Credit</Button></Grid>

                    </Grid>

                </CardContent>
            </Card>

        </React.Fragment>
    )
}
