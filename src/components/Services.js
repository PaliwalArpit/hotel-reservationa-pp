import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "../components/Title"
export default class Services extends Component {
    state ={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Free cocktail on arrival"
            },
            {
                icon:<FaHiking/>,
                title:"free Hiking",
                info:"Free hiking for 1 hour"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Van",
                info:"We have Shuttle van service in free"
            },
            {
                icon:<FaBeer/>,
                title:"free Beer",
                info:"We are complemetary beer 1+1"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">{this.state.services.map((item, index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                    </article>
                })}</div>
            </section>
        )
        
    }
}
