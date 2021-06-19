import React, { Component } from 'react';
import './landingPage.css';

class LandingPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isScrolling: false,
            backgroundColor: false,
        }
    }


    onScroll = (event) => {
        if (window.pageYOffset === 0) {
            this.setState({ isScrolling: false });
        } else {
            this.setState({ isScrolling: true });
        }

        if (window.pageYOffset >= 300) {
            this.setState({ backgroundColor: true })
        } else {
            this.setState({ backgroundColor: false })
        }

    }

    goToHome = () => {
        window.scrollTo(0, 0);
        this.setState({ isScrolling: false });

    }
    signIn = () => {
        window.location.href = 'https://projects.invisionapp.com/d/login?redir=%2Fprototype%2FKARH-LANDING-PAGE-ckl1bzgrq002uq601p2aom3wu%2Fplay%2Fd9bc15e2';
    }



    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        // window.scrollBy(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }



    render() {

        const { backgroundColor, isScrolling } = this.state;
        return (
            <>
                <div className="wrapper container-fluid" >
                    <nav className={backgroundColor ? "bgColor row navbar navbar-expand-lg navbar-light position-fixed w-100" : "row navbar navbar-expand-lg navbar-light position-fixed w-100"}>
                        <div className="d-flex justify-content-between">
                            <a className="nav-item nav-link navbar-toggler mob-view-logo " href="#home" ><img src="./images/KARH_LOGOTYPE-ICON_RGB-10.png" className="w-100 img-fluid" alt="logo" /></a>

                            <button className="navbar-toggler toggle-button pt-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><img src="../images/menu-icon.svg" className="w-100" alt="menu" /></span>
                            </button>

                        </div>
                        <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav mr-auto header">
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#about" >About</a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#innovation" >Our innovation</a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link mob-view" : "nav-item nav-link mob-view"} href="#home" ><img src="./images/KARH_LOGOTYPE-ICON_RGB-10.png" className="w-100" alt="logo" /></a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#team" >Our Team</a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#contact" >Let's get to work</a>
                            </div>
                        </div >


                    </nav >

                    <div className="banner-1 row" id="home" onScroll={this.onScroll} style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/KARH_LANDING-SPLASH.png'})`
                    }}>

                        <h1 className="banner1-text display-1">A Better Way to Distribute Energy</h1>
                    </div>
                    <div className="banner-2 overflow-hidden row" id="about">
                        <h2 className="text-center w-100 pb-3 mob-view-disappear" ></h2>
                        <div className="col-md-4 col-sm-12 float-left p06em-1em banner2-about" >
                            <h5 className="banner2-text  pt-2 ">It's Coming</h5>

                        </div>
                        <div className="col-md-8 col-sm-12 float-left p06em-1em">
                            <div className="col-sm-12 col-md-4 float-left text-justify pb-2">Over the next 15 years, most energy resources will produce electricity for the power grid. We need new storage technologies that can be deployed at large scale.  </div>
                            <div className="col-sm-12 col-md-4 float-left text-justify pb-2">We are developing that innovation to solve complex problems with one solution. Our energy hubs are practical, cost-effective, modular, community-friendly products. </div>
                            <div className="col-sm-12 col-md-4 float-left text-justify pb-2">
                                <ul>
                                    <li>Vertically integrated </li>
                                    <li>Secure infrastructure </li>
                                    <li>Reliable supply chains </li>
                                    <li>Verified componentry </li>
                                    <li>End-to-end security </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* <div className="row banner-3" id="team">
                        <div className="col-sm-3 d-flex justify-content-center text-left">
                            <div className="w-80">
                                <div className="banner3-img-container mb-4"></div>
                                <div className="banner3-img-details">
                                    <h4 className=" font-weight-bold">Christian Farviar</h4>
                                    <p className="font-08em">CEO, PARTNER</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex justify-content-center text-left">
                            <div className="w-80">
                                <div className="banner3-img-container mb-4"></div>
                                <div className="banner3-img-details">
                                    <h4 className="font-weight-bold">Laiba Harris</h4>
                                    <p className="font-08em">CEO, PARTNER</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex justify-content-center text-left">
                            <div className="w-80">
                                <div className="banner3-img-container mb-4"></div>
                                <div className="banner3-img-details">
                                    <h4 className=" font-weight-bold">Hellen Defoe</h4>
                                    <p className="font-08em">BRAND MANAGER</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex justify-content-center text-left">
                            <div className="w-80">
                                <div className="banner3-img-container mb-4"></div>
                                <div className="banner3-img-details">
                                    <h4 className="font-weight-bold">Francesco Anthony</h4>
                                    <p className="font-08em">FULL STACK ENGINEER</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     */}
                    <div className="row banner-4" id="innovation">
                        <h2 className="text-center w-100 pb-5"></h2>
                        <div className="col-sm-12  col-md-12 pb-5" >
                            <div className="col-sm-12 col-md-4 float-left">
                                <div className="banner4-picture"><img src="../images/product_1.svg" alt="product 1" className="w-100" /></div>
                                <h5 className="font-heading">Better for access</h5>
                                <ul >
                                    <li>Community level </li>
                                    <li>Modular architecture</li>
                                    <li> EV charging </li>
                                    <li>System backup on outages </li>
                                </ul>

                            </div>
                            <div className="col-sm-12 col-md-4  float-left">
                                <div className="banner4-picture"><img src="../images/product_2.svg" alt="product 2" className="w-100" /></div>
                                <h5 className="font-heading">Better for supply chain</h5>
                                <ul>
                                    <li>Continental installations</li>
                                    <li>Firewalled technology</li>
                                    <li> Smart security system </li>
                                </ul>

                            </div>
                            <div className="col-sm-12 col-md-4 float-left">
                                <div className="banner4-picture"><img src="../images/product_3.svg" alt="product 3" className="w-100" /></div>
                                <h5 className="font-heading">Better for money</h5>
                                <ul>
                                    <li>Recurring revenue</li>
                                    <li>Scalablility</li>
                                    <li> Multiple revenue streams</li>
                                    <li>Futureproof</li>
                                </ul>

                            </div>

                        </div>

                    </div>
                    <div className="banner-5 desktopView" id="technology" >

                        <div className="row pb-06">
                            <div className="col-md-6 col-sm-12 pl-0">
                                <img src="../images/technology1.jpg" alt="technlogy 1" className="w-100" />
                            </div>
                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em font-heading">Electricity is the Future</h5>
                                <p>Electricity is becoming distributed, decarbonized, digitalized, and will soon be the #1 source of energy. Load needs balancing and demand will be less predictable, with growing risk of system-wide compromises. </p>
                            </div>
                        </div>
                        <div className="row pb-06">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em font-heading">Infrastructure is Changing</h5>
                                <p>Peak electric power costs US ratepayers billions a year. Year-over-year energy congestion rates rise markedly. Transmission and distribution infrastructure needs major in upgrades. Tens of gigawatts of peak power generating plants are being retired each year. </p>
                            </div>
                            <div className="col-md-6 col-sm-12 pr-0">
                                <img src="../images/technology2.jpg" alt="technlogy 2" className="w-100 float-right" />
                            </div>
                        </div>
                        <div className="row pb-06">
                            <div className="col-md-6 col-sm-12 pl-0">
                                <img src="../images/technology3.jpg" alt="technlogy 3" className="w-100" />
                            </div>
                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em font-heading">Stability is Key</h5>
                                <p>Even if energy storage is deployed en mass in conjunction with central power plants and distributed resources to improve efficiency, still cities, communities, and manufacturing hubs are left vulnerable with costly, unstable energy. </p>
                            </div>
                        </div>
                        <div className="row pb-06">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em font-heading">Let’s do it Better</h5>
                                <p>We have a better way to distribute energy. Our energy hubs will solve many problems facing the grid with one simple, elegant solution that will reduce costs for everyone. We know the future is all about electricity. Let’s get charged up today.</p>
                            </div>
                            <div className="col-md-6 col-sm-12 pr-0">
                                <img src="../images/technology4.jpg" alt="technlogy 4" className="w-100 float-right" />
                            </div>
                        </div>

                    </div>

                    <div className="banner-5 mobView pt-3" id="technology" >

                        <div className="row pb-04">
                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">Electricity is the Future</h5>
                                <p>Electricity is becoming distributed, decarbonized, digitalized, and will soon be the #1 source of energy. Load needs balancing and demand will be less predictable, with growing risk of cyber attack and system-wide compromises. </p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="../images/technology1.jpg" alt="technlogy 1" className="w-100" />
                            </div>

                        </div>
                        <div className="row pb-04">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">Infrastructure is Changing</h5>
                                <p>Peak electric power costs US ratepayers billions a year. Year-over-year energy congestion rates rise markedly. Transmission and distribution infrastructure needs major in upgrades. Tens of gigawatts of peak power generating plants are being retired each year. </p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="../images/technology2.jpg" alt="technlogy 2" className="w-100 float-right" />
                            </div>
                        </div>
                        <div className="row pb-04">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">Stability is Key</h5>
                                <p>Even if energy storage is deployed en mass in conjunction with central power plants and distributed resources to improve efficiency, still cities, communities, and manufacturing hubs are left vulnerable with costly, unstable energy. </p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="../images/technology3.jpg" alt="technlogy 3" className="w-100" />
                            </div>
                        </div>
                        <div className="row pb-04">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">Let’s do it Better</h5>
                                <p>We have a better way to distribute energy. Our energy hubs will solve many problems facing the grid with one simple, elegant solution that will reduce costs for everyone. We know the future is all about electricity. Let’s get charged up today.</p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="../images/technology4.jpg" alt="technlogy 4" className="w-100 float-right" />
                            </div>
                        </div>

                    </div>

                    <div className="banner-6 row" id="contact">
                        <div className="col-sm-6 text-center">
                            <p>Whether you’re a citizen, a business leader, government official or investor, we want to hear from you.</p>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div>
                                <a className="btn goToButton" href="mailto:christian.farivar@karh.energy">Let's get to work &#8594;</a>

                            </div>
                        </div>

                    </div>
                    <div className="row footer">
                        <img src="../images/KARH_LOGOTYPE-ICON_RGB_-07.svg" alt="logo" className="mx-auto" />
                        <div className="address-block col-12 mb-4">
                            <div className="social-link w-100">
                                <p className="font-1em">contact: 718-395-7852</p>
                                <a href="https://www.linkedin.com/company/karh/" target="_blank" rel="noreferrer"><img src="../images/linkedln1.png" alt="likedlnlogo" /> </a>
                            </div>

                        </div>
                        <p className="font-1em address-flag w-100 text-center" >16 Madison Square W., Floor 12, New York, NY 10010</p>
                        <p className="text-center  font-08em w-100" >All rights reserved 2021 Karh Inc - epower eco.</p>

                    </div>

                    {isScrolling && <div className="arrow" onClick={this.goToHome}><img src="../images/arrow.png" alt="arrow" className="w-100" /></div>}
                </div>


            </>
        );
    }
}



export default LandingPage;