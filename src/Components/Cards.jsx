import React from 'react'
import { Card, CardContent } from '@mui/material'
import { CardCat } from './Cards/CardCat'
import { DebitTrans } from './Cards/DebitTrans'
import { CreditTrans } from './Cards/CreditTrans'

export const Cards = () => {
    return (
        <React.Fragment>
            <Card sx={{ bgcolor: "lightblue" }}>
                <CardContent>
                    <CardCat />
                    <DebitTrans />
                    <CreditTrans />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
