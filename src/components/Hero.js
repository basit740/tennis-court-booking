import './Hero.css';

import { useState } from 'react';
function Hero() {
	const [serverMessage, setServerMessage] = useState('');

	const bookTennisCourt = async (event) => {
		event.preventDefault();
		const response = await fetch('http://localhost:8080/book', {
			method: 'GET',
		});

		const readableData = await response.json();

		console.log(readableData);

		setServerMessage(readableData.message);
	};
	return (
		<section className='hero'>
			<div className='hero__content container'>
				<div className='hero__text'>
					<h1 className='hero__title'>Book Your Courts Here</h1>
					<p className='hero__description'>
						Use Our New Online Booking System. <br></br> We have launced a new
						system to book tennis courts so easily.
					</p>

					<a href='#book' className='cta-button' onClick={bookTennisCourt}>
						Book Now
					</a>

					<p>{serverMessage}</p>
				</div>

				<div className='hero__img-wrapper'>
					<img
						src='https://c8.alamy.com/comp/2JJPR6R/the-net-of-a-blue-paddle-tennis-court-and-four-balls-near-the-white-line-2JJPR6R.jpg'
						className='hero__img'
						alt='hero here'
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
