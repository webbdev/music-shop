const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<h2>Get in Touch</h2>
				<div className="content">
					<div className="cards">
						<div className="card">

							<div className="card-1">
								<div className="sub-heading">
									<span>Our Address</span>
								</div>
								<div>
									<p>Haight St</p>
									<p>San Francisco, CA, USA</p>
								</div>
							</div>

							<div className="card-2">
								<div className="sub-heading"><span>For any questions, please call:</span></div>
								<p>
									<a href="tel:+14155550132"> 1&nbsp;(415)&nbsp;555‑0132</a>
								</p>
							</div>
						</div>
						
						<div className="card">
							<div className="sub-heading">
								<span>Opening Hours</span>
							</div>
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