import React from 'react'
import { Card, CardContent } from '@mui/material'
import { Categories } from './Loans/Categories'

export const Loans = () => {
    return (
        <React.Fragment >
            <Card sx={{ bgcolor: "lightgrey" }}>
                <CardContent>
                    <Categories />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
