import Foot from '../../assets/img/img-dot@2x.png'

function Review(){
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="box-review">
                    <div className="card-body ml-4 mt-4">
                        <p className="card-text text">Full Name <span className="text rata">:</span> <span className="text"></span></p>
                        <p className="card-text text">Email Address  <span className="text rata1">:</span> <span className="text"></span></p>
                        <p className="card-text text">Phone Number  <span className="text">:</span> <span className="text"></span></p>
                        <p className="card-text text">Nationality  <span className="text rata2">:</span> <span className="text"></span></p>
                        <p className="card-text text" style="font-style: italic;"></p>
                        
                        <hr />

                        <h5 className="text">Thanks for contacting us! </h5>
                        <h5 className="text">We will be in touch with you shortly.</h5>
                        <button className="btn-sub btn"onclick="window.location.href='/'">Home</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="foot">
            <img src={Foot} className="foot-img"/>
        </div>
        </>
    )
}