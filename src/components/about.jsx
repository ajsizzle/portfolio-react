import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a self-taught full-stack web developer. I love exploring new technologies and constantly learning and appylying these skills to my toolset. My current focus is React.js and applying the library to current and future projects.</p>
                    <p>There's nothing quite like the feeling of creating something out of nothing and making it work. This is my craft and I practice everyday to get one step closer to mastering it.</p>
                    <p>When I'm not developing I enjoy gardening, surfing, and spending quality time with my growing family.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do</span>
                <h2 className="colorlib-heading">Expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Front-End Development</h3>
                    <p>Create websites and web applications with HTML, CSS, JavaScript, React and Wordpress.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back-End Development</h3>
                    <p>Server side architecture built around Node.js and Express, along with MongoDB or MySQL for database organization.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-mail6" />
                </span>
                <div className="desc">
                    <h3>Communication</h3>
                    <p>My sales background helps in keeping lines of communication open so we are always on the same page at every stage of development.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
