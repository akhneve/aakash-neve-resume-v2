import React, { Component } from 'react';
//Option exists to put social media links in Footer, but has been commented out
class Footer extends Component {
  render() {

    if(this.props.data){
      /*var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })*/
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           {/*<ul className="social-links">
              {networks}
    </ul>*/}

           <ul className="copyright">
                        <li>&copy; Made by  <a href="https://ayushiprofile.herokuapp.com/" target="_blank" rel='noopener noreferrer'> Ayushi Sharma</a> and Aakash Neve</li>
              
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
