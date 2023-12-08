import React from 'react'
import { Helmet } from 'react-helmet'
import titles from '../../titles'

type Props = {}

function Admin({ }: Props) {
    return (
        <div>
            <Helmet>
                {titles.admin}
            </Helmet>
            Admin</div>
    )
}

export default Admin