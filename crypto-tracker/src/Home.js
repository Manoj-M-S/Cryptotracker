import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron  text-center">
                    <h2 className="display-4">CRYPTO TRACKER</h2>
                    <p className="lead">This is a Crypto tracker website, using which users can get the Top 10 ranked, trending, top gainers, top losers, most visited and recently added crypto currencies lists.</p>
                </div>
            </div>
            <div>
            <div id="content" className="row">
                <div className="col-4">
                
                </div>
                <div className="col text-center" >
                    
                    <div className="card">
                        <Link to='/top10' style={{ "fontWeight":"bold", textDecoration: 'none'}}>
                        Get top 10 crypto currencies based on market capital
                        </Link>
                    </div>
                    <div className="card">
                        <Link to='/topgainers' style={{ "fontWeight":"bold", textDecoration: 'none'}}>
                        Get top 10 gainers in crypto currency
                        </Link>
                    </div>
                    <div className="card">
                        <Link to='/toplosers' style={{ "fontWeight":"bold", textDecoration: 'none'}}>
                        Get top 10 losers in crypto currency
                        </Link>
                    </div>
                    <div className="card">
                        <Link to='/recentlyadded' style={{ "fontWeight":"bold", textDecoration: 'none'}}>
                            Get top 10 recently added crypto currencies
                        </Link>
                    </div>
                    <div className="card">
                        <Link to='/mostvisited' style={{ "fontWeight":"bold", textDecoration: 'none'}}>
                        Get top 10 most visited crypto currencies
                        </Link>
                    </div>
                    <div className="card">
                        <Link to='/trending' style={{ "fontWeight":"bold", textDecoration: 'none'}}>
                        Get top 10 trending crypto currencies
                        </Link>
                    </div>
                    </div> 
                <div className="col-4">
                </div>  
            </div>
            </div>
            <footer className="footer  mt-auto py-3">
                <div className="container-fluid">
                    <div className="row text-left">
                    <div className="col-md-5 ">
                        <h1 className="text-light">About Me</h1>
                        <p className="text-muted">
                        Im Manoj, a full stack developer from Bengaluru. This is a crypto currency tracker project, made with React and the Data appearing on this website is fetched by API built by me <a href="https://rapidapi.com/manoj.makarasu@gmail.com/api/crypto-tracker">Click here to know more.</a>.This API gets data from <a href="https://coinmarketcap.com/">coinmarketcap.com</a> website.
                        </p>
                        <p className="pt-4 text-muted">
                        Copyright @2021 All rights reserved | This is made by
                        <span> MANOJ M S </span>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <h4 className="text-light">Newsletter</h4>
                        <p className="text-muted">Stay Updated</p>
                        <form className="form-inline">
                        <div className="input-group pr-5">
                            <input
                            type="text"
                            className="form-control bg-dark text-white"
                            placeholder="Email"
                            />
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h4 className="text-light">Follow Me</h4>
                        <p className="text-muted">Let us be social</p>
                        <div className="column">
                        <ul>
                            <li>
                            <a href="https://www.facebook.com/manoj_makarasu/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/manoj_makarasu/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.twitter.com/ManojMakarasu/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;
