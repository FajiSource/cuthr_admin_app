import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "../components/ui/Toggle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";

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

            <div className="dashboard-content">
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


                <div className="table-container ">
                    <div className="table button">
                        <table>
                            <thead>
                                <tr className="border"> 
                                    <th>
                                        FIRST NAME
                                    </th>
                                    <th>
                                        LAST NAME
                                    </th>
                                    <th>
                                        EMAIL
                                    </th>
                                    <th>
                                        GENDER
                                    </th>
                                    <th>
                                        CONTACT
                                    </th>
                                    <th>
                                        EMERGENCY NO.
                                    </th>
                                    <th>
                                        SCHOOL ID
                                    </th>
                                    <th>
                                        TRANSACTION NO.
                                    </th>
                                    <th>
                                        VERIFIED
                                    </th>
                                    <th>
                                        ACTION
                                    </th>
                                </tr>

                            </thead>

                            <tbody>
                                <tr className="border">
                                    <td>
                                        Xavier
                                    </td>
                                    <td>
                                        Funetes
                                    </td>
                                    <td>
                                        xavier@gmail.com
                                    </td>
                                    <td>
                                        Male
                                    </td>
                                    <td>
                                        STEM
                                    </td>
                                    <td>
                                        09817343434
                                    </td>
                                    <td>
                                        19-0344-23
                                    </td>
                                    <td>
                                        091483194
                                    </td>
                                    <td className="toggle-col">
                                        <Toggle/>
                                    </td>
                                    <td>
                                        <div className="action-btns">
                                            <button className="secondary-bg "><FontAwesomeIcon icon={faXmark}/></button>
                                            <button className="secondary-bg "><FontAwesomeIcon icon={faArrowUp}/></button>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}