import React from 'react'
import { Helmet } from 'react-helmet'
import titles from '../../titles'

type Props = {}

function Facebook({ }: Props) {
    return (
        <div>
            <Helmet>
                <title>{titles.facebook}</title>
            </Helmet>
            Facebook</div>
    )
}

export default Facebook