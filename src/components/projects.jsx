import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/portfolio.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="#projects">Portfolio</a></h3>
											<span>Portfolio website using React and Node.js</span>
											<p className="icon">
												<span><a href="#projects" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> GitHub</a></span>
												<span><a href="#projects"><i className="icon-eye" /> View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/keeperapp.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="#projects">Keeper App</a></h3>
											<span>Web Application similar to the Google Keep app</span>
											<p className="icon">
												<span><a href="https://github.com/alexanderejohnson/keeperapp" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> GitHub</a></span>
												<span><a href="https://romantic-archimedes-1ae143.netlify.com/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/daily-journal.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="#projects">Daily Journal</a></h3>
											<span>Blogging website utilizing node.js, express.js, EJS and MongoDB</span>
											<p className="icon">
												<span><a href="https://github.com/alexanderejohnson/daily_journal" target="_blank" rel="noopener noreferrer"><i className="icon-share3" />GitHub</a></span>
												<span><a href="https://lit-brushlands-97943.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/drumkit.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="#projects">Drum Kit</a></h3>
											<span>Interactive website that plays sounds and animations when keys are pressed/clicked. This website utilizes the DOM and intermediate functions in JavaScript</span>
											<p className="icon">
												<span><a href="https://github.com/alexanderejohnson/drum_kit" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> GitHub</a></span>
												<span><a href="https://alexanderejohnson.github.io/drum_kit/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/simon.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="#projects">SIMON</a></h3>
											<span>Web Application of the 90's game SIMON! Simon will add one color each round and you have to repeat the pattern up to the last color added. How far can you go?</span>
											<p className="icon">
												<span><a href="https://github.com/alexanderejohnson/simon_game" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> GitHub</a></span>
												<span><a href="https://alexanderejohnson.github.io/simon_game/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> Play Game</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/tindog.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="#projects">tindog</a></h3>
											<span>A responsive, product delivery website for a fictional tinder-like app for dogs</span>
											<p className="icon">
												<span><a href="https://github.com/alexanderejohnson/tindog" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> GitHub</a></span>
												<span><a href="https://alexanderejohnson.github.io/tindog/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{ <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/alexanderejohnson?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> }
					</div>
				</section>
      </div>
    )
  }
}
