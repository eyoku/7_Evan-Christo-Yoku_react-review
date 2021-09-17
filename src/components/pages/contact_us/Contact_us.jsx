import '../../assets/css/css.css'
import Biru from '../../assets/img/birufix.png'
import Logo2 from '../../assets/img/logo-ALTA-v2@2x.png'


function Contact_us() {
    return (
        <div classNameName="App">
            <div className="row">
                <div className="col-lg-4">
                    <div className="bg-image backg2">
                        <img src={Biru} height="100%" width="100%" className="opacity biru"/>
                        <img src={Logo2} alt="alta" className="logo"/>
                    </div> 
                    <div>
                        
                    </div>
                </div>
                <div className="col-lg-7 container form1">
                    <p className="contact text">Contact Us</p>
                    <form>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Full Name Here..." required/>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" placeholder="example@domail.com"  required/>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="number">Phone Number</label>
                            <input type="text" className="form-control" placeholder="08573890xxxx"  required/>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="number">Nationality</label>
                            <select className="form-control">
                                <option selected disabled>Select</option>
                                <option>Indonesia</option>
                                <option>United State</option>
                                <option>Japan</option>
                            </select>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="number">Message</label>
                            <textarea type="text" className="form-control" rows="5" placeholder="Your Full Name Here..."  required></textarea>
                        </div>
                        <div className="form-group text form2">
                            <a className="btn btn-sub padButton" href="#" type="submit" role="button">Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact_us;
