export default function Toggle() {

    return (
        <div>
            <p className="component-title">iOS Switch</p>
            <div className="container">
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label className="switch" htmlFor="checkbox">
                    <span className="slider" />
                </label>
            </div>
        </div>
    )
}