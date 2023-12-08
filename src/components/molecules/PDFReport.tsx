import React from 'react'
import { Page, Font, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../../assets/images/RandomeR Logo.png';
import { getCurrentDate } from '../../utils/common';

type Props = { selectedInstagramAccount: any }

Font.register({
    family: 'Oswald', fonts: [
        { src: 'https://fonts.gstatic.com/s/oswald/v11/uLEd2g2vJglLPfsBF91DCg.ttf' }, // font-style: normal, font-weight: normal
        { src: 'https://fonts.gstatic.com/s/oswald/v11/y3tZpCdiRD4oNRRYFcAR5Q.ttf', fontWeight: 300 },
        { src: 'https://fonts.gstatic.com/s/oswald/v11/7wj8ldV_5Ti37rHa0m1DDw.ttf', fontWeight: 700 },
    ]
});

Font.register({
    family: 'Roboto', fonts: [
        { src: 'https://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf' }, // font-style: normal, font-weight: normal
        { src: 'https://fonts.gstatic.com/s/roboto/v15/hcKoSgxdnKlbH5dlTwKbow.ttf', fontStyle: 'italic' },
        { src: 'https://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf', fontWeight: 300 },
        { src: 'https://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf', fontWeight: 700 },
    ]
});

// "100": "http://fonts.gstatic.com/s/roboto/v15/7MygqTe2zs9YkP0adA9QQQ.ttf",
// "100italic": "http://fonts.gstatic.com/s/roboto/v15/T1xnudodhcgwXCmZQ490TPesZW2xOQ-xsNqO47m55DA.ttf",
// "300": "http://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf",
// "300italic": "http://fonts.gstatic.com/s/roboto/v15/iE8HhaRzdhPxC93dOdA056CWcynf_cDxXwCLxiixG1c.ttf",
// "regular": "http://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf",
// "italic": "http://fonts.gstatic.com/s/roboto/v15/hcKoSgxdnKlbH5dlTwKbow.ttf",
// "500": "http://fonts.gstatic.com/s/roboto/v15/Uxzkqj-MIMWle-XP2pDNAA.ttf",
// "500italic": "http://fonts.gstatic.com/s/roboto/v15/daIfzbEw-lbjMyv4rMUUTqCWcynf_cDxXwCLxiixG1c.ttf",
// "700": "http://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf",
// "700italic": "http://fonts.gstatic.com/s/roboto/v15/owYYXKukxFDFjr0ZO8NXh6CWcynf_cDxXwCLxiixG1c.ttf",
// "900": "http://fonts.gstatic.com/s/roboto/v15/H1vB34nOKWXqzKotq25pcg.ttf",
// "900italic": "http://fonts.gstatic.com/s/roboto/v15/b9PWBSMHrT2zM5FgUdtu0aCWcynf_cDxXwCLxiixG1c.ttf"

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        justifyContent: 'space-between',
        fontFamily: 'Roboto',
        padding: 10,
    },
    header: {
        fontFamily: 'Roboto',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    body: {
        paddingLeft: 10,
        flexGrow: 1,
        fontFamily: 'Roboto',
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
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>GIVEAWAY REPORT</Text>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 10 }}>Generated Date</Text>
                        <Text style={{ fontSize: 10 }}>{getCurrentDate()}</Text>
                    </View>
                </View>
                <View style={styles.body} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '35%', flexDirection: 'column', alignItems: 'center' }}>
                            <Text>Account</Text>
                            <Text style={{ fontSize: 14 }}>{selectedInstagramAccount.name}</Text>
                            <Text style={{ fontSize: 10 }}>Followers: {selectedInstagramAccount.followers_count}</Text>
                            <Text style={{ fontSize: 10 }}>{selectedInstagramAccount.biography}</Text>
                        </View>
                        <View>
                            <Text>Post</Text></View>
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