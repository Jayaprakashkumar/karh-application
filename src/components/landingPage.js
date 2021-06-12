import React, { Component } from 'react';
import './landingPage.css';
// import backgroundImg from "../images/KARH_LANDING-SPLASH.png.png";

class LandingPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isScrolling: false,
            backgroundColor: false,
            isConnect: false,
        }
    }


    // onScroll = (e) => {
    //     const { isScrolling } = this.state;

    //     const element = e.target;
    //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //         // do something at end of scroll
    //       }

    //     if (!isScrolling) {
    //       this.setState({ isScrolling: true });
    //     }

    //   };

    // onScroll = (e) => {
    //     const element = e.target;

    //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //         //         // do something at end of scroll
    //     }
    // }

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

    login = () => {
        this.setState({ isConnect: true });
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

        const { backgroundColor, isConnect, isScrolling } = this.state;
        return (
            <>
                <div className="wrapper container-fluid" >
                    <nav className={backgroundColor ? "bgColor row navbar navbar-expand-lg navbar-light position-fixed w-100" : "row navbar navbar-expand-lg navbar-light position-fixed w-100"}>
                        <div className="d-flex justify-content-between">
                            <a className="nav-item nav-link navbar-toggler mob-view-logo " href="#home" ><img src="./images/KARH_LOGOTYPE-ICON_RGB-10.png" className="w-100 img-fluid" alt="logo" /></a>

                            <button className="navbar-toggler toggle-button pt-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span> */}
                            <span className="navbar-toggler-icon"><img src="../images/menu-icon.svg" className="w-100" alt="menu"/></span>
                            </button>

                        </div>
                        <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav mr-auto header">
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#project" >Project</a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#team" >Our Team</a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link mob-view" : "nav-item nav-link mob-view"} href="#home" ><img src="./images/KARH_LOGOTYPE-ICON_RGB-10.png" className="w-100" alt="logo" /></a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#technology" >Technology</a>
                                <a className={backgroundColor ? "fontWhite nav-item nav-link " : "nav-item nav-link"} href="#contact" >Be part of It</a>
                            </div>
                        </div >


                    </nav >

                    <div className="banner-1 row" id="home" onScroll={this.onScroll} style={ {
                        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/KARH_LANDING-SPLASH.png'})` 
                        }}>

                        <h1 className="banner1-text display-1">A Better Way to Distribute Energy</h1>
                    </div>
                    <div className="banner-2 overflow-hidden row">
                        <div className="col-md-4 col-sm-12 float-left pt-5">

                            <h5 className="banner2-text">People, Community, individuals & mankind before all.</h5>

                        </div>
                        <div className="col-md-8 col-sm-12 float-left">
                            <div className="col-sm-12 col-md-4 float-left text-justify pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </div>
                            <div className="col-sm-12 col-md-4 float-left text-justify pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </div>
                            <div className="col-sm-12 col-md-4 float-left text-justify pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </div>
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
                    <div className="row banner-4" id="project">
                        <h2 className="text-center w-100 pb-5">E-POWER ECO</h2>

                        <div className="col-sm-12  col-md-12 pb-5">
                            <div className="col-sm-12 col-md-4 float-left">
                                <div className="banner4-picture"></div>
                                <h5>Secure</h5>
                                <p className="font-08em">CHARACTERISTIC</p>
                                <p>We’re creating a secure energy infrastructure for a changing world. We use algorithms for optimizing diverse sets of information, totally siloed to secure against system compromises. It’s all backed by the skill of engineers and experts, secure tech and reliable supply chains, with verified componentry. </p>

                            </div>
                            <div className="col-sm-12 col-md-4  float-left">
                                <div className="banner4-picture"></div>
                                <h5>Economical</h5>
                                <p className="font-08em">CHARACTERISTIC</p>
                                <p>We can handle energy supply and demand in a smarter way, with digital tools and system planning to reduce waste and coordinate supply. We’re taking the future into account with an innovative business model. A more efficient, and more adaptable way to source and manage energy. </p>

                            </div>
                            <div className="col-sm-12 col-md-4 float-left">
                                <div className="banner4-picture"></div>
                                <h5>Practical</h5>
                                <p className="font-08em">CHARACTERISTIC</p>
                                <p>Let’s build an integrated system that provides the flexibility needed for the unpredictable events that inevitably hit communities. Something with strong ties to regional needs, and something people are proud to be part of.</p>

                            </div>

                        </div>

                    </div>
                    <div className="banner-5" id="technology">

                        <div className="row pb-11">
                            <div className="col-md-6 col-sm-12 pl-0">
                                <img src="../images/technology1.jpg" alt="technlogy 1" className="w-100" />
                            </div>
                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">Here's some characteristic about the new technlogy.</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            </div>
                        </div>
                        <div className="row pb-11">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">Here's more info about what Karh's is bringing to the table.</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            </div>
                            <div className="col-md-6 col-sm-12 pr-0">
                                <img src="../images/technology2.jpg" alt="technlogy 2" className="w-100 float-right" />
                            </div>
                        </div>
                        <div className="row pb-11">
                            <div className="col-md-6 col-sm-12 pl-0">
                                <img src="../images/technology3.jpg" alt="technlogy 3" className="w-100" />
                            </div>
                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">People, community, individuals & mankind before all.</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            </div>
                        </div>
                        <div className="row pb-11">

                            <div className="col-md-6 col-sm-12 pt-5">
                                <h5 className="font-2em">The next generation of energy storage stations.</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            </div>
                            <div className="col-md-6 col-sm-12 pr-0">
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
                                <button className="btn goToButton" onClick={this.login}>Let's go to work &#8594;</button>
                                {isConnect && <div className="mt-2 d-flex justify-content-center">
                                    <button className="btn btn-danger mr-2 round-container font-08em " onClick={this.signIn}>Sign in</button>
                                    <button className="btn btn-secondary round-container font-08em " data-toggle="modal" data-target="#contactUsModal">Not a Team Member?</button>
                                </div>}
                            </div>
                        </div>
                        <p className="text-center rights-text font-08em w-100" > All rights reserved 2021@Karh industries Inc.</p>
                    </div>




                    {isScrolling && <div className="arrow" onClick={this.goToHome}><img src="../images/arrow.png" alt="arrow" className="w-100" /></div>}
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="contactUsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLongTitle">Contact US</h5>
                                {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button> */}
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center border-top-0">
                                <button type="button" className="btn btn-secondary round-container font-1em" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary round-container font-1em">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default LandingPage;