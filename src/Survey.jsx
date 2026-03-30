import Header from "./Header";
import Footer from "./Footer";

export default function Survey() {
    console.log("Survey page");
    return (
        <>
            <Header />
                <main>
            <h2 style={{textAlign: "center"}} id="title">Survey Form</h2>
            <p id="description">Thank you for taking time to help us improve our cafe.</p>
            <form id="survey-form">
                <fieldset className="form-group">
                <label htmlFor="name" id="name-label">
                    Enter your name:&nbsp;
                    <input id="name" type="text" placeholder="Your name" required="" />
                </label>
                <label htmlFor="email" id="email-label">
                    Enter your email:&nbsp;
                    <input id="email" type="email" placeholder="Your email" required="" />
                </label>
                <div>
                    <label htmlFor="number" id="number-label">
                    Enter your age (optional):{" "}
                    </label>
                    <input
                    id="number"
                    type="number"
                    style={{ width: "5em" }}
                    min={1}
                    max={100}
                    placeholder="Your age"
                    required=""
                    />
                </div>
                </fieldset>
                <fieldset>
                <label>
                    What role suits you the best?&nbsp;
                    <select id="dropdown">
                    <option>Student</option>
                    <option>Full-Time Job</option>
                    <option>Other</option>
                    </select>
                </label>
                <p>Did you enjoy your time at Sweet Cat Cafe?</p>
                <label>
                    <input type="radio" name="pref-format" defaultValue="format" />
                    Yes
                </label>
                <label>
                    <input type="radio" name="pref-format" defaultValue="format" />
                    No
                </label>
                <p>How often do you visit our coffee shop?</p>
                <label>
                    <input type="checkbox" defaultValue="choose" />
                    Daily
                </label>
                <label>
                    <input type="checkbox" defaultValue="choose" />A few times a week
                </label>
                <label>
                    <input type="checkbox" defaultValue="choose" />
                    Weekly
                </label>
                <label>
                    <input type="checkbox" defaultValue="choose" />
                    Monthly
                </label>
                <label>
                    <input type="checkbox" defaultValue="choose" />
                    This is my first time
                </label>
                </fieldset>
                <fieldset>
                <textarea
                    rows={5}
                    cols={30}
                    placeholder="Any additional comments or suggestions?"
                    defaultValue={""}
                />
                </fieldset>
                <br />
                <input type="submit" defaultValue="Submit Survey" id="submit" />
            </form>
            <br />
            </main>

            <Footer />
        </>
    );
}