import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: [
                {
                    id: 1,
                    icon: 'flaticon-man',
                    title: '150',
                    suffix: '+',
                    text: 'Students',
                    extraClassName: 'bg-1',
                },
                {
                    id: 2,
                    icon: 'flaticon-infographic',
                    title: '60',
                    suffix: '+',
                    text: 'Cours en ligne',
                    extraClassName: 'bg-2',
                },
                {
                    id: 3,
                    icon: 'flaticon-satisfaction',
                    title: '100',
                    suffix: '%',
                    text: 'Satisfaction',
                    extraClassName: 'bg-3',
                },
            ]
        }
    }

    render() {
        return (

            <section className="counter-section-2">
                <div className="container">
                    <div className="row align-items-center justify-content-center" >
                        <div className="col-xl-5 pr-xl-5 col-lg-8">
                            <div className="section-heading mb-5 mb-xl-0 text-center text-xl-start">
                                <span className="subheading">10,000+ Trusted Clients All Over The World</span>
                                <h1 className="font-lg" >Ils nous ont fait confiance</h1>
                            </div>
                        </div>

                        <div className="col-xl-7">
                            <div className="row">

                            {
                            this.state.counter.map((data,i) => (

                                <div className="col-lg-4 col-md-6" key={data.id}>
                                    <div className={`counter-box mb-4 mb-lg-0 ${data.extraClassName}`}>
                                        <i className={data.icon}></i>
                                        <div className="count">
                                            <span className="counter h2"> 
                                                <CountUp end={data.title} enableScrollSpy /></span>
                                                <span> {data.suffix}</span>
                                        </div>
                                        <p>{data.text}</p>
                                    </div>
                                </div>

                                        
                                ))
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           

        );
    }
}

export default Counter;
