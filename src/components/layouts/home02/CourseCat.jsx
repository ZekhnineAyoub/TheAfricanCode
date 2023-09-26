import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseCat01 extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: [
                {
                    id: 1,
                    title: 'Data Science & Analytics',
                    img :  'assets/images/icon/icon1.png',
                },
                {
                    id: 2,
                    title: 'Intelligence Artificielle',
                    img :  'assets/images/icon/icon2.png',
                },
                {
                    id: 3,
                    title: ' Développement Back End ',
                    img :  'assets/images/icon/icon6.png',
                },
                {
                    id: 4,
                    title: 'Développement Front End',
                    img :  'assets/images/icon/icon4.png',
                },
                {
                    id: 5,
                    title: 'Devops',
                    img :  'assets/images/icon/icon6.png',
                },
                {
                    id: 6,
                    title: 'Architecture Logiciel',
                    img :  'assets/images/icon/icon2.png',
                }, 
                {
                    id: 7,
                    title: 'Infrastrucutre',
                    img :  'assets/images/icon/icon3.png',
                }, 
                {
                    id: 8,
                    title: 'Développement WEB/Mobile',
                    img :  'assets/images/icon/icon4.png',
                },
                
                
            ]
        }
    }

    render() {
        // Course category

        return (
          <section className="section-padding">
            <div className="container-fluid container-grid">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="heading mb-50 text-center">
                    <span className="subheading">Les technos enseignées</span>
                    <h2>Maîtrisez les langages et les concepts les plus demandés sur le marché du travail</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                {this.state.category.map((data, i) => (
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="single-course-category style-2 ">
                      <div className="course-cat-icon">
                        <img src={data.img} alt="" className="img-fluid" />
                      </div>
                      <div className="course-cat-content">
                        <h4 className="course-cat-title">
                          <Link to="#">{data.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-5">
              <div className="banner-img-round mt-5 mt-lg-0">
                <img
                  src="assets/images/banner/langage.png"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </section>
        );
    }
}
export default CourseCat01;