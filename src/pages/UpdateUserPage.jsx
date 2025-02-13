import Toggle from "../components/ui/Toggle";

export default function UpdateUserPage() {



    return (

        <section className="dashboard-section update-user-page">

            <div className="update-user-header text">
                <div className="update-header-col">
                    <h1>
                        11:23 3/3/25
                    </h1>
                    <div className="update-toggle-container">
                        <span>RSVP Submitted</span>
                    </div>
                </div>

                <div className="update-header-col">
                    <h1>
                        NOT VERIFIED
                    </h1>
                    <div className="update-toggle-container">
                        <span>Toggle to verify</span>
                        <div>
                            <Toggle />
                        </div>
                    </div>
                </div>

            </div>
            {/* form container */}
            <div className="form-container">
                <form action="">
                    <div className="form-group">
                        <div className="form-col">
                            <div className="form-row">
                                <input type="text" className="bg input" id="firstname" placeholder="First Name." />
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="form-row">
                                <input type="text" id="lastname" className="bg input" placeholder="Last Name." />
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                            <div className="form-row">
                                <input type="text" id="gender"  className="bg input" placeholder="Gender" />
                                <label htmlFor="gender">Gender</label>
                            </div>
                            <div className="form-row">
                                <input type="text" id="strand" className="bg input" placeholder="Strand" />
                                <label htmlFor="strand">Strand</label>
                            </div>
                        </div>
                        <div className="form-col">
                            <div className="form-row">
                                <input type="text" id="email" className="bg input" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-row">
                                <input type="text" id="schoolId" className="bg input" placeholder="School ID" />
                                <label htmlFor="schoolId">School ID</label>
                            </div>
                            <div className="form-row">
                                <input type="text" id="contact" className="bg input" placeholder="Contact" />
                                <label htmlFor="contact">Contact</label>
                            </div>
                            <div className="form-row">
                                <input type="text" id="emergency" className="bg input" placeholder="Emergecy Contact" />
                                <label htmlFor="emergency">Emergecy Contact</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <input type="text" id="transaction" className="bg input" placeholder="Transaction No." />
                            <label htmlFor="transanction">Transaction No.</label>
                        </div>
                    </div>

                    <div className="form-btns">
                        <button className="text">CANCEL</button>
                        <button className="text">UPDATE</button>
                    </div>
                </form>
            </div>
        </section>
    )
}