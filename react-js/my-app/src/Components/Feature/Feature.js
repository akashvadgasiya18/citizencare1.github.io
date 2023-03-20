import React from "react"
import Heading from "../../Components/Common/Heading"
import "../Feature/Feature.css"
import FeatureCard from "../Feature/Feature_card"

const Feature = () => { 
    return (
        <>
            <section className='featured background'>
                <Heading title='Popular Categories' subtitle='Find All Type of Services.' />
                <div className='container'>
                <FeatureCard />
                </div>
            </section>
        </>
    )
}

export default Feature