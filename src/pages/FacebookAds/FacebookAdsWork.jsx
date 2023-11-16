import React from 'react'



const FacebookAdsWork = () => {
    return (
        <>
            <div className="facebook-ads__work">
                <div className="container">
                    <h1 className="facebook-ads__work-title">Why <span className="facebook-ads__work-title__blue">Facebook ads</span> </h1>
                    <div className="facebook-ads__work-cards">
                        <div className="facebook-ads__work-cards__card">
                            <h1 className="facebook-ads__work-cards__card-title">
                            Large User Base
                            </h1>
                            <p className="facebook-ads__work-cards__card-text">With over 2.8 billion monthly active users as of my last knowledge update in January 2022, Facebook provides access to a vast and diverse audience, making it an attractive platform for advertisers.</p>
                        </div>
                        <div className="facebook-ads__work-cards__card card">
                        <h1 className="facebook-ads__work-cards__card-title">
                        Remarketing
                            </h1>
                            <p className="facebook-ads__work-cards__card-text">With over 2.8 billion monthly active users as of my last knowledge update in January 2022, Facebook provides access to a vast and diverse audience, making it an attractive platform for advertisers.</p>
                        </div>
                        <div className="facebook-ads__work-cards__card">
                        <h1 className="facebook-ads__work-cards__card-title">
                        Custom Audiences
                            </h1>
                            <p className="facebook-ads__work-cards__card-text">You can create custom audiences on Facebook based on your existing customer data, such as email lists or website visitors. This feature helps you target your ads to people who are already familiar with your brand.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inst">
                <div className="container">
                    <div className="inst__subt">
                        Our location
                    </div>
                    <div className="inst__img">
                        <img src="./src/assets/images/location.png" alt="location" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacebookAdsWork