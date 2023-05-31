import React, { useEffect, useState } from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import { useSelector } from 'react-redux'


export const DebitsTotal = () => {
    const [total, setTotal] = useState(0)

    const selectTrans = useSelector((state) => state.CardReducer.trans)

    useEffect(() => {
        const debitData = selectTrans.filter((item) => item.transtype === "D")
        let totalDebit = 0

        debitData.forEach((element) => { totalDebit = totalDebit + Number(element.amnt) })
        setTotal(totalDebit)
    }, [selectTrans])

    return (
        <React.Fragment>
            <Card sx={{ marginTop: 1 }}>
                <CardContent>
                    <Grid container spacing={3} align="center">
                        <Grid item xs={12}>Total Debits</Grid>
                        <Grid item xs={12}><b>{total}</b></Grid>

                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
