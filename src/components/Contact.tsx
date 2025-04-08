const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<h2>Contact Us</h2>
				<div className="content">
					<div className="cards">
						<div className="card">
							<h4>Inquiries</h4>
							<p>For any inquiries or questions, please call: 
								<a href="tel:+14155550132"> 1&nbsp;(415)&nbsp;555‑0132</a>
							</p>
						</div>
						<div className="card">
							<h4>Our Address</h4>
							<div>
								<p>Haight St</p>
								<p>San Francisco, CA, USA</p>
							</div>
						</div>
						<div className="card">
							<h4>Opening Hours</h4>
							<div>
								<p>Sun - Mon</p>
								<p>10:00am - 10:00pm</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact