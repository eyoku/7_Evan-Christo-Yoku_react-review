import '../../assets/css/css.css'
import Biru from '../../assets/img/birufix.png'
import Logo2 from '../../assets/img/logo-ALTA-v2@2x.png'
import { useState } from 'react';
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { addData } from '../../store/dataSlice'


function Contact_us() {
    const dataKosong = {
        name : "",
        email : "",
        phone : "",
        national : "",
        message : ""
    }

    const [data, setData] = useState(dataKosong);

    const [error, setError] = useState({
        name : "",
        email : "",
        phone : ""
    })

    const regexNm = /^[A-Za-z ]*$/
    const regexEm = /(.+)@(.+){2,}\.(.+){2,}/;
    const regexPn = /^[-+]?[0-9]+$/;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange= e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "name"){
            if(regexNm.test(value)){
                setError("")
            }else{
                setError("Nama harus berupa huruf!")
            }
        }
        if(name === "email"){
            if(regexEm.test(value)){
                setError("")
            }else{
                setError("Email tidak valid")
            }
        }
        if(name === "phone"){
            if(regexPn.test(value)){
                setError("")
            }else{
                setError("Nomor tidak valid")
            }
        }
        resetData()

        setData({
            ...data,
            [name] : value
        })
        console.log("data", data)
    }

    const handleSubmit = (e) => {
        if(error !== ""){
            alert("Terdapat data yang tidak sesuai!")
        }else{
            dispatch(addData(data));
            history.push("/review");
            alert(`Data Pendaftar ${data.name} Berhasil diterima`)
        }
        e.preventDefault()
    }
    
    const resetData = () => {
        setData(dataKosong);
        setError("")
    }
  



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
                    <form onSubmit={handleSubmit}>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="name">Full Name</label>
                            <input
                                type="text" 
                                className="form-control" 
                                id="name"
                                name="name"
                                onChange={handleChange}
                                placeholder="Your Full Name Here..."
                                value={data.name} required/>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="email">Email Address</label>
                            <input
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                placeholder="example@domail.com"  
                                onChange={handleChange}
                                value={data.email}
                                required/>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="number">Phone Number</label>
                            <input 
                                type="text" 
                                name="phone"
                                className="form-control" 
                                id="phone" 
                                placeholder="08573890xxxx"  
                                onChange={handleChange}
                                value={data.phone}
                                required/>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="number">Nationality</label>
                            <select 
                                className="form-control"
                                required
                                name="national"
                                onChange={handleChange}
                                value={data.national}
                                >
                                <option selected disabled>Select</option>
                                <option>Indonesia</option>
                                <option>United State</option>
                                <option>Japan</option>
                            </select>
                        </div>
                        <div className="form-group text form2">
                            <label className="pad" htmlFor="number">Message</label>
                            <textarea 
                                type="text" 
                                className="form-control" 
                                name="message"
                                id="message" rows="5" 
                                placeholder="Your Full Name Here..." 
                                onChange={handleChange}
                                value={data.message} 
                                required></textarea>
                        </div>
                        <div>
                            <small>{error}</small>
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
