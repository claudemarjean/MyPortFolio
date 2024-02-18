import React from 'react';
import postOne from '../../assets/images/post-1.jpg';
import profileImage from '../../assets/images/profileImage.jpg';
import quizMarvelImage from '../../assets/images/post-2.jpg';

const Blog = () => {
    
    const urlMarvelQuiz = 'https://marvel-quiz-b896b.web.app/';

  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Blog
              </h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html"><img src={postOne} alt="" className="img-fluid" /></a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Travel</h6>
                  </div>
                </div>
                <h3 className="card-title"><a href="blog-single.html">Coming soon about Travel</a></h3>
                <p className="card-description">
                  Coming soon
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img src={profileImage} alt="" className="avatar rounded-circle" />
                    <span className="author">Claude Marjean</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-blog">
              <div className="card-img">
                <a href="blog-single.html"><img src={quizMarvelImage} alt="" className="img-fluid" /></a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">
                    <h6 className="category">Web Design</h6>
                  </div>
                </div>
                <h3 className="card-title"><a href={urlMarvelQuiz}>Innovative React Web App</a></h3>
                <p className="card-description">
                  Explore my innovative React project by clicking on this link. Dive into an interactive web application designed to deliver an exceptional user experience, showcasing my Front-End development skills.
                </p>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#">
                    <img src={profileImage} alt="" className="avatar rounded-circle" />
                    <span className="author">Claude Marjean</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
