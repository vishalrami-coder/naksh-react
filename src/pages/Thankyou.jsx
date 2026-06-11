import Breadcrumb from "../components/breadcrumb";


import ThankYouBread from "../assets/images/breadcum/Thank-You.webp";

import "../assets/css/Industries.css";



function Thankyou() {


    return (
        <>
            <Breadcrumb
                BreadcrumbTitle="Thank You"
                BreadcrumbActiveTitle="Thank You"
                backgroundImage={`url(${ThankYouBread})`}
            />

            <div className="industriesSec CustomPeding">

                <div className="container">
                    <div class="row">
                        <div class="col-lg-12 mt-5 mb-5">
                            <div class="caption-thankyou text-center">
                                <h1>Thankyou !! Successfully Submitted</h1>
                                <h2>Your Inquiry Has Been Successfully Submitted To The Concern Department.You Will Get A Reply Within 24 Hours From Our Side.....!!</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Thankyou;