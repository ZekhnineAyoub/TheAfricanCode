import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
            <section className="banner banner-style-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-content mb-2">
                                <h2>Transformez Votre Futur Professionnel avec Nos Cours en Ligne</h2>
                                <p>Depuis 2016, nous formons des profils débutants et confirmés, à la programmation. Notre enseignement est basé sur la réalisation de projets réels et concrets, en fournissant un accompagnement constant et particulièrement soutenu à nos apprenants.</p>
                                
                                <div className="banner-form me-5">
                                    <form action="#" className="form">
                                        <input type="text" className="form-control" placeholder="What do you want to learn?"/>
                                        <Link to="#"> Search<i className="far fa-search"></i></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-img-round mt-5 mt-lg-0">
                                <img src="assets/images/banner/banner_img.png" alt="" className="img-fluid rounded"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            

        );
    }
}

export default Banner;

