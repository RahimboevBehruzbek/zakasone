import React from 'react'



const InstagramAdsWork = () => {
    return (
        <>
            <div className="instagram-ads__work">
                <div className="container">
                    <h1 className="instagram-ads__work-title">Why <span className="instagram-ads__work-title__blue">instagram ads</span></h1>
                    <div className="instagram-ads__work-cards">
                        <div className="instagram-ads__work-cards__card">
                             <img src="./src/assets/images/ShHS.png" />
                            <h1 className="instagram-ads__work-cards__card-title">Targeting Options:</h1>
                            <p className="instagram-ads__work-cards__card-text">Instagram Ads provide sophisticated targeting options to help businesses reach their desired audience. Advertisers can target users based on demographics, interests, behavior, location, and more..</p>
                        </div>
                        <div className="instagram-ads__work-cards__card card">
                                                         <img src="./src/assets/images/ShDP.png" />
                            <h1 className="instagram-ads__work-cards__card-title">Instagram Shopping</h1>
                            <p className="instagram-ads__work-cards__card-text">For e-commerce businesses, Instagram Shopping allows users to purchase products directly through ads. Products are tagged within images or videos, and users can click on them to learn more and make a purchase.</p>
                        </div>
                        <div className="instagram-ads__work-cards__card">
                                                         <img src="./src/assets/images/ShHSG.png" />
                            <h1 className="instagram-ads__work-cards__card-title"> Ad Placements</h1>
                            <p className="instagram-ads__work-cards__card-text"> Instagram Ads can be placed in various locations within the Instagram app, including users' feeds, stories, and the Explore section. Advertisers can choose where their ads are displayed to align with their campaign goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstagramAdsWork