import './openingPage.css'; 
import {  useNavigate } from 'react-router-dom';
import matrimonyImage from '../../images/Matrimony_Opening_Page.jpg';
import loginImage from '../../images/login.png';
import registerImage from '../../images/register.png'
import { Button } from 'react-bootstrap';


function OpeningPage() {
	const nav = useNavigate();

	const handleLoginClick = () => {
		nav('/login')
	}

	return(
		<div>
			<header className="app-header">
			    <div className="left-div">
					<img className="logos" src={loginImage} alt="Login" />
					<Button className="btn btn-lg btn-primary" onClick={handleLoginClick}>Login</Button>
				</div>
                 <span className="sitename"> Mayilai Matrimony </span>
				<div className="right-div">
					<img className="logos" src={registerImage} alt="Register" />
					<Button className="btn btn-lg btn-primary right-btn">Register</Button>
				</div>
			</header>
			<img className="matrimony" src={matrimonyImage} alt="Matrimony" />
		</div>
	)
}

export default OpeningPage;