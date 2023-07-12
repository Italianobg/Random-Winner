import donate from '../../../images/PayPal Long.png'
import styled from 'styled-components';


const DonateButton = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const windowFeatures: string = "left=" + (width / 2 - 330).toString() + ",top=" + (height / 2 - 400).toString() + ',width=660,height=800';

    const DonateHandler = () => {
        window.open(
            "https://www.paypal.com/donate/?hosted_button_id=W5UDQTBHPALBG",
            "_blank",
            windowFeatures
        );
    }

    return (
        <Wrapper>
            <img src={donate} alt="Paypal Donation" onClick={DonateHandler} />
        </Wrapper>
    );
};

const Wrapper = styled.span`
    height: 50px;
    padding-left: 5px;
    vertical-align: middle;

    img{
        height: 35px;
        cursor: pointer;
        
        }
    `

export default DonateButton;