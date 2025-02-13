import Toggle from "../components/ui/Toggle";

export default function UpdateUserPage() {



    return(

        <section className="dashboard-section">

            <div>
                <div>
                    <h1>
                        11:23 3/3/25
                    </h1>
                    <div>
                        <span>RSVP Submitted</span>
                    </div>
                </div>

                <div>
                    <h1>
                        NOT VERIFIED
                    </h1>
                    <div>
                        <span>Toggle to verify</span>
                        <div>
                            <Toggle/>
                        </div>
                    </div>
                </div>

            </div>




            {/* form container */}
            <div>

            </div>
        </section>
    )
}