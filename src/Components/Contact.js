import React, { Component } from 'react';
import emailjs from '@emailjs/browser';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Contact extends Component {

   constructor(){
      super()
      this.sendEmail = this.sendEmail.bind(this);
      this.createNotification = this.createNotification.bind(this);
    }

    createNotification = (type) => {
      return () => {
        switch (type) {
          case 'success':
            NotificationManager.success('Success message', 'Title here', 5000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
            default:
             console.log(type);
             break;
        }
      };
   };

   sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_slrn4nl', 'template_m7w7mk6', e.target, 'HREghj-XRb0YBs3kJ')
      .then((result) => {
      console.log(result.text);
      NotificationManager.success('Success message', 'Thank you!', 2000);
      }, (error) => {
      console.log(error.text);
      NotificationManager.error('Error message', 'Please try again' , 2000);
      });
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;

      var qrcode = "/images/" + this.props.data.qrcode;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit = {this.sendEmail}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" required></textarea>
                  </div>

                  <div>
                     <button className="submit"  type = "submit" >Submit</button> <NotificationContainer/>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state}, {zip}<br />
						   <span>{phone}</span>
                     <br />
                     <span>{email}</span>
					   </p>
                    </div>
                    <div className="QR Code Contact">
                        <h4>Scan the QR code to save the contact</h4>
                        <p></p>
                        <img className="QR-code" src={qrcode} alt="Aakash Neve QR Contact" />
                    </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
