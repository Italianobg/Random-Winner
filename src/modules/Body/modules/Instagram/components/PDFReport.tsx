import React from 'react'
import { Page, Font, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../../../images/RandomeR Logo.png';
import { getCurrentDate } from '../utils';

type Props = { selectedInstagramAccount: any }

Font.register({
    family: 'Lato', fonts: [
        { src: 'https://fonts.gstatic.com/s/lato/v11/h7rISIcQapZBpei-sXwIwg.ttf' }, // font-style: normal, font-weight: normal
        { src: 'https://fonts.gstatic.com/s/lato/v11/P_dJOFJylV3A870UIOtr0w.ttf', fontStyle: 'italic' },
        { src: 'https://fonts.gstatic.com/s/lato/v11/iX_QxBBZLhNj5JHlTzHQzg.ttf', fontWeight: 700 },
        { src: 'https://fonts.gstatic.com/s/lato/v11/WFcZakHrrCKeUJxHA4T_gw.ttf', fontStyle: 'italic', fontWeight: 700 }]
});

Font.register({
    family: 'Forum', fonts: [
        { src: 'https://fonts.gstatic.com/s/forum/v7/MZUpsq1VfLrqv8eSDcbrrQ.ttf' } // font-style: normal, font-weight: normal
    ]
});


//https://fonts.googleapis.com/css2?family=Forum

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        justifyContent: 'space-between',
        fontFamily: 'Lato',
        padding: 10,
    },
    header: {
        fontFamily: 'Lato',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    body: {
        paddingLeft: 10,
        flexGrow: 1,
        fontFamily: 'Lato',
    },
    footer: {
        alignItems: "center"
    },
    image: {
        width: 140,
        height: 50,
        marginRight: 10,
    },
});

function PDFReport({ selectedInstagramAccount }: Props) {
    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={true}>
                <View style={styles.header} >
                    <Image src={logo} style={styles.image} />
                    <Text style={{ fontWeight: 'bold' }}>GIVEAWAY REPORT</Text>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 10 }}>Generated Date</Text>
                        <Text style={{ fontSize: 10 }}>{getCurrentDate()}</Text>
                    </View>
                </View>
                <View style={styles.body} >
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text>Account</Text>
                            <Text>{selectedInstagramAccount.name}</Text>
                            <Text>{selectedInstagramAccount.followers_count}</Text>
                            <Text>{selectedInstagramAccount.biography}</Text>
                        </View>
                        <View><Text>Post</Text></View>
                    </View>
                    <View>
                        <Text>Statistics</Text>
                    </View>
                    <View>
                        <Text>Winners</Text>
                    </View>

                </View>
                <View style={styles.footer} >
                    <Text fixed wrap={true} style={styles.header}>
                        <Text>Footer</Text>
                    </Text>
                </View>
            </Page>
        </Document >
    )
}

export default PDFReport