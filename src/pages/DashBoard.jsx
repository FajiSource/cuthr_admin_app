export default function DashBoard() {
    return (
        <section className="text dashboard-section">
            <div className="dash-header">
                <div className="text dash-totals">
                    <div className="dash-total">
                        <strong>531</strong>
                        <span>864</span>
                        <span>Total Accepted RSVP</span>
                    </div>
                    <div className="dash-total">
                        <strong>122</strong>
                        <span>864</span>
                        <span>Total Checke-in Guest</span>
                    </div>
                    <div className="dash-total">
                        <strong>122</strong>
                        <span>864</span>
                        <span>Total Redeemed Foods</span>
                    </div>
                </div>

                <div className="admin-status text">
                    <div className="status-container">
                        <div className="status">
                            <span>STEM</span>
                            <span>345</span>
                            <div className="status-bar"><span className="secondary-bg"  ></span></div>
                        </div>
                        <div className="status">
                            <span>ICT</span>
                            <span>345</span>
                            <div className="status-bar"><span className="secondary-bg" style={{ width: "80%" }}></span></div>
                        </div>
                        <div className="status">
                            <span>HUMSS</span>
                            <span>345</span>
                            <div className="status-bar"><span className="secondary-bg" style={{ width: "60%" }}></span></div>
                        </div>
                        <div className="status">
                            <span>AMB</span>
                            <span>345</span>
                            <div className="status-bar"><span className="secondary-bg" style={{ width: "30%" }}></span></div>
                        </div>
                        <div className="status">
                            <span>TVL</span>
                            <span>345</span>
                            <div className="status-bar"><span className="secondary-bg" style={{ width: "10%" }}></span></div>
                        </div>
                    </div>
                    <span className="status-label">Stand Distribution</span>
                </div>
            </div>

            <div>
                <div className="admin-table-header">
                    <div className="admin-header-btns">
                        <button className="button">ALL</button>
                        <button className="button">FACULTY</button>
                        <button className="button">STEM</button>
                        <button className="button">HUMSS</button>
                        <button className="button">ICT</button>
                        <button className="button">ABM</button>
                    </div>
                    <button className="button">ADD ATTENDANCE</button>
                </div>
            </div>
        </section>
    )
}