import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'fad fa-users',
                    title: 'Obtenir un Certificat',
                    text: 'Obtenez un certificat de compétence qui validera vos connaissances et renforcera votre carrière professionnelle',
                    extraClassName: 'icon-bg-1',
                },
                {
                    id: 2,
                    icon: 'far fa-file-certificate',
                    title: 'Enseignants compétents',
                    text: 'Nos instructeurs qualifiés possèdent une vaste expertise dans le domaine du développement informatique avancé et sont prêts à vous guider dans votre parcours apprentissage',
                    extraClassName: 'icon-bg-2',
                },
                {
                    id: 3,
                    icon: 'fa fa-video',
                    title: 'Cours en ligne',
                    text: 'Nos cours en ligne offrent une flexibilité exceptionnelle, vous permettant apprendre à votre rythme, où que vous soyez',
                    extraClassName: 'icon-bg-3',
                },
                
                
            ]
        }
    }

    render() {
        return (

            <section className="features-intro pb-5">
                <div className="container">
                    <div className="feature-inner">
                        <div className="row">

                        {
                            this.state.features.map((data,i) =>(
                            
                            <div className="col-xl-4 col-lg-4 " key={data.id}>
                                <div className="feature-item feature-style-left">
                                    <div className={`feature-icon ${data.extraClassName}`}>
                                        <i className={data.icon}></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>{data.title}</h4>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </section>

            
                    
        );
    }
}

export default Features;
