import { Page, Text, Document, Font, StyleSheet, PDFViewer, View } from '@react-pdf/renderer'
// import pdfImage from '../../assets/images/bond-car-rental.jpg'
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { InitialContext } from '../Providers/IntialProvider';


const PDFDocument = () => {
    const {firstName,lastName,phone,email,total,dailyTotal,weeklyTotal,hourlyTotal} = useContext(InitialContext)

    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
    });

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Oswald'
        },
        author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
        },
        subtitle: {
            fontSize: 18,
            margin: 12,
            marginBottom: 0,
            fontFamily: 'Oswald'
        },
        money:{
            position:'relative',
            left: 450,
            top:-100,
            fontSize:15
        },
        text: {
            margin: 12,
            fontSize: 14,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },
        normaltext: {
            margin: 2,
            top:-20,
            position: 'relative',
            fontSize: 14,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        view: {
            width: '100%',
            height: '100vh'
        },
        viewLeft: {
            textAlign:'right',
            position: 'absoulte',
            left: -100,
            top:-30,
            fontSize: 18,
            marginBottom: 0,
            fontFamily: 'Oswald'
        },
        viewLeftUp: {
            textAlign:'right',
            position: 'absoulte',
            left: -220,
            top:-80,
            fontSize: 14,
            marginBottom: 2,
            fontFamily: 'Oswald',
            
        },
        line:{
            borderBottom: '1pt solid green'
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },
    })

    return (

        <PDFViewer style={styles.view}>

            <Document>
                <Page style={styles.body}>
                    <Text style={styles.header} fixed>
                        - Reservation Invoice -
                    </Text>
                    <Text style={styles.title}>Bond Car Rental</Text>
                    <Text style={styles.author}>Rent - Ride - Chill</Text>
                    <Text style={styles.subtitle}>
                        Renter Info
                    </Text>
                    <Text style={styles.viewLeft}>
                        Charges Summary
                    </Text>
                    <View>
                        <Text style={styles.normaltext}>
                            Name: {firstName} {lastName}
                        </Text>
                        <br />
                        <Text style={styles.normaltext}>
                            Email: {email}
                        </Text>
                        <br />
                        <Text style={styles.normaltext}>
                            Phone: {phone}
                        </Text>

                    <Text style= {styles.viewLeftUp}>
                        Daily -- 
                    </Text>
                        <Text style={styles.money}>
                        ${dailyTotal}
                        </Text>
                    <Text style= {styles.viewLeftUp}>
                        Weekly -- 
                    </Text>
                        <Text style={styles.money}>

                        ${weeklyTotal}
                        </Text>
                    <Text style= {styles.viewLeftUp}>
                        Hourly -- 
                    </Text>
                    <Text style={styles.money}>

                        ${hourlyTotal}
                    </Text>
                    <Text style={styles.line}>

                    </Text>
                    <Text style= {styles.viewLeftUp}>
                        Total -- 
                    </Text>
                        <Text style={styles.money}>

                        ${total}
                        </Text>
                        
                    </View>
                    

                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            </Document>


        </PDFViewer>
        // <Document>
        //     <Page size="A4" style={styles.body}>

        //         <Image
        //             style={styles.image}
        //             src="../../assets/images/bond-car-rental.jpg"
        //         />


        //         <Text style={styles.title}>Renter Info</Text>
        //         <ul className='flex flex-col gap-2 text-xl'>

        //             <li className='mt-5'>
        //                 <Text>Name: {firstName} {lastName}</Text>
        //             </li>
        //             <Text>Email: {email}</Text>
        //             <Text>Phone: {phone}</Text>
        //         </ul>

        //     </Page>
        // </Document>
    );
};
PDFDocument.propTypes = {
    data: PropTypes.object
}
export default PDFDocument;