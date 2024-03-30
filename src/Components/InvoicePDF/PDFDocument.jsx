import { Page, Text, View, Document} from '@react-pdf/renderer'
import pdfImage from '../../assets/images/bond-car-rental.jpg'
import PropTypes from 'prop-types'; 


const PDFDocument = ({data}) => {
    // const {firstName,lastName,phone} = useContext(InitialContext) || {}
    const firstName = data?.firstName
    const lastName = data?.lastName
    const email = data?.email
    const phone = data?.phone
    
    return (
        <Document>
            <Page size="A4" className='text-2xl'>
                
                
                <View >
                    <img src={pdfImage} alt="rental_logo" style={{width:'250px'}} />
                    <Text className="text-2xl font-bold">Renter Info</Text>
                    <ul className='flex flex-col gap-2 text-xl'>

                    <li className='mt-5'>
                        <Text>Name: {firstName} {lastName}</Text>
                        </li>
                    <Text>Email: {email}</Text>
                    <Text>Phone: {phone}</Text>
                    </ul>
                </View>
            </Page>
        </Document>
    );
};
PDFDocument.propTypes = {
    data: PropTypes.object
}
export default PDFDocument;