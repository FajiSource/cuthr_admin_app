export default function Toggle() {

    return (   
            <div className="container">
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label className="border switch" htmlFor="checkbox" >
                    <span className="slider" />
                </label>
            </div>
    )
}