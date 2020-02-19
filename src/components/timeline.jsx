import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Freelancing Full-Stack Web Developer <span>2019-present</span></h2>
                        <p></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's Degree in Computer Science <span>2019-present</span></h2>
                        <p>Currently obtaining B.S. degree in CS from Eastern Florida State College on a part-time basis to help supplement my foundations in software development.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>The App Brewery Full-Stack Web Development Bootcamp <span>2019-2020</span></h2>
                        <p>Web Development Bootcamp out of London, UK. Learned the foundations of web development through the use of the "MERN" development stack along with experience solving real-world problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Medical Bill Analyst <span>2017-2019</span></h2>
                        <p>As a bill analyst I learned the value of automating processes and how to manage multiple workflows at the same time to meet deadlines. This has helped in my overall time management and organizational skills to complete tasks as efficiently as possible.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Solutions Specialist <span>2013-2017</span></h2>
                        <p>Although I started my tech journey in sales at Verizon Wireless, I really began to take an interest into software development in this stage of my life. I learned so much and developed a majority of my soft skills in this role and that has molded me into a developer that you can easily speak to and collaborate with in order to help achieve a client's goal.</p>
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
