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
                    <div className="statuc-container">
                        <div className="status">
                            <span>STEM</span>
                            <span>345</span>
                            <div className="status-bar"><div></div></div>
                        </div>
                        <div className="status">
                            <span>STEM</span>
                            <span>345</span>
                            <div className="status-bar"><div></div></div>
                        </div>
                        <div className="status">
                            <span>STEM</span>
                            <span>345</span>
                            <div className="status-bar"><div></div></div>
                        </div>
                        <div className="status">
                            <span>STEM</span>
                            <span>345</span>
                            <div className="status-bar"><div></div></div>
                        </div>
                        <div className="status">
                            <span>STEM</span>
                            <span>345</span>
                            <div className="status-bar"><div className="secondary-bg" style={{width:"50%"}}></div></div>
                        </div>
                    </div>
                    <span>Stand Distribution</span>
                </div>
            </div>

            <div>

            </div>
        </section>
    )
}