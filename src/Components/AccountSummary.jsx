import React from 'react'
import { Grid, Card, CardContent } from "@mui/material"
import { AccDetails } from './AccountSummary/AccDetails'
import { DebitsTotal } from './AccountSummary/DebitsTotal'

export const AccountSummary = () => {
    return (
        <React.Fragment>
            <Grid container spacing={7}>
                <Grid item xs={4}>
                    <DebitsTotal />
                </Grid>
            </Grid>
            <h1>Account Summary</h1>
            <AccDetails />
        </React.Fragment>
    )
}
