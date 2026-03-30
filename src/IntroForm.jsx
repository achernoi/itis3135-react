import Header from "./Header";
import Footer from "./Footer";
import './styles/default.css';
import "./styles/intro-form.css";


export default function IntroForm(){
    return (
        <>
            <Header />
            <main>
            <h2>Introduction Form</h2>
            <h3>Please submit the form below.</h3>
            <form id="intro_form">
                <fieldset>
                <legend>Personal Information</legend>
                <label>
                    First Name:
                    <input
                    type="text"
                    className=""
                    name="firstName"
                    defaultValue="Sasha"
                    placeholder="First Name"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Middle Name/Initial (Optional):
                    <input
                    type="text"
                    name="middleName"
                    defaultValue=""
                    placeholder="Middle Name"
                    />
                </label>
                <br />
                <label>
                    Nickname (Optional):
                    <input
                    type="text"
                    name="nickname"
                    defaultValue=""
                    placeholder="Nickname"
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    defaultValue="Chernoivan"
                    placeholder="Last Name"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Acknowledgment Statement:
                    <input
                    type="text"
                    name="ackStatement"
                    defaultValue="I understand that what I put here is publicly available on the web and I won't put anything here I don't want the public to see"
                    placeholder="Enter Acknowledgment Statement"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Acknowledgment Date (MM-DD-YYYY):
                    <input
                    type="date"
                    name="ackDate"
                    defaultValue="2026-01-13"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Mascot Adjective:
                    <input
                    type="text"
                    name="mascotAdj"
                    defaultValue="Sweet"
                    placeholder="Mascot Adjective"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Mascot Animal:
                    <input
                    type="text"
                    name="mascotAnimal"
                    defaultValue="Cat"
                    placeholder="Mascot Animal"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Divider:
                    <input
                    type="text"
                    name="divider"
                    defaultValue="|"
                    placeholder="Divider"
                    required=""
                    />
                </label>
                </fieldset>
                <br />
                <fieldset>
                <legend>Image</legend>
                <label>
                    Upload Image:
                    <input type="file" id="imageInput" accept="image/*" />
                </label>
                <br />
                <br />
                <label>
                    Picture Caption:
                    <input
                    type="text"
                    name="picCaption"
                    defaultValue="One of my favorite beach spots in California."
                    placeholder="Caption"
                    required=""
                    />
                </label>
                <br />
                </fieldset>
                <br />
                <fieldset>
                <legend>Background</legend>
                <label>
                    Personal Statement:
                    <textarea
                    name="personalStatement"
                    placeholder="Personal Statement"
                    required=""
                    defaultValue={
                        "I just transferred to UNC Charlotte from CPCC and I am a junior studying computer science with a concentration in Web/Mobile Development and Software Engineering."
                    }
                    />
                </label>
                <br />
                <label>
                    Personal Background:
                    <textarea
                    name="personalBackground"
                    placeholder="Personal Background"
                    required=""
                    defaultValue={
                        "I am 21 years old and I love photography, painting, and traveling."
                    }
                    />
                </label>
                <br />
                <label>
                    Professional Background:
                    <textarea
                    name="professionalBackground"
                    placeholder="Professional Background"
                    required=""
                    defaultValue={"I have been working in retail for a few years."}
                    />
                </label>
                <br />
                <label>
                    Academic Background:
                    <textarea
                    name="academicBackground"
                    placeholder="Academic Background"
                    required=""
                    defaultValue={
                        "I just transferred to UNC Charlotte this semester after completing my associate degree from CPCC. I am a junior studying computer science with a concentration in Web/Mobile Development and Software Engineering."
                    }
                    />
                </label>
                <br />
                <label>
                    Background in this Subject:
                    <textarea
                    name="subjectBackground"
                    placeholder="Subject Background"
                    required=""
                    defaultValue={
                        " I have limited experience in web development but I have experience in programming using Java."
                    }
                    />
                </label>
                <br />
                <label>
                    Primary Work Computer:
                    <textarea
                    name="primaryComp"
                    placeholder="Primary Computer"
                    required=""
                    defaultValue={
                        "The laptop I use for school is a Macbook Pro 13-inch M1."
                    }
                    />
                </label>
                <br />
                <label>
                    Backup Work Computer &amp; Location Plan:
                    <textarea
                    name="backupComp"
                    placeholder="Backup Computer"
                    required=""
                    defaultValue={
                        "I have a Windows PC computer at home I can use as a backup."
                    }
                    />
                </label>
                <br />
                </fieldset>
                <br />
                <fieldset>
                <legend>Courses</legend>
                <div id="courses">
                    <div data-course="">
                    <input
                        type="text"
                        className="course-dept"
                        name="course-dept[]"
                        defaultValue="ITSC"
                        placeholder="Course Department"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-num"
                        name="course-num[]"
                        defaultValue={2600}
                        placeholder="Course Number"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-name"
                        name="course-name[]"
                        defaultValue="Computer Science Program, Identity, Career"
                        placeholder="Course Name"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-reason"
                        name="course-reason[]"
                        defaultValue="Required course."
                        placeholder="Course Reason"
                        required=""
                    />
                    <button type="button" className="delete-course" data-coursedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-course="">
                    <input
                        type="text"
                        className="course-dept"
                        name="course-dept[]"
                        defaultValue="ITIS"
                        placeholder="Course Department"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-num"
                        name="course-num[]"
                        defaultValue={3130}
                        placeholder="Course Number"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-name"
                        name="course-name[]"
                        defaultValue="Introduction to Human-Centered Computing"
                        placeholder="Course Name"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-reason"
                        name="course-reason[]"
                        defaultValue="I thought this would be an interesting course."
                        placeholder="Course Reason"
                        required=""
                    />
                    <button type="button" className="delete-course" data-coursedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-course="">
                    <input
                        type="text"
                        className="course-dept"
                        name="course-dept[]"
                        defaultValue="ITIS"
                        placeholder="Course Department"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-num"
                        name="course-num[]"
                        defaultValue={3135}
                        placeholder="Course Number"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-name"
                        name="course-name[]"
                        defaultValue="Front-End Web Application Development"
                        placeholder="Course Name"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-reason"
                        name="course-reason[]"
                        defaultValue="Useful course."
                        placeholder="Course Reason"
                        required=""
                    />
                    <button type="button" className="delete-course" data-coursedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-course="">
                    <input
                        type="text"
                        className="course-dept"
                        name="course-dept[]"
                        defaultValue="ITSC"
                        placeholder="Course Department"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-num"
                        name="course-num[]"
                        defaultValue={3688}
                        placeholder="Course Number"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-name"
                        name="course-name[]"
                        defaultValue="Computers and Their Impact on Society"
                        placeholder="Course Name"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-reason"
                        name="course-reason[]"
                        defaultValue="Required course."
                        placeholder="Course Reason"
                        required=""
                    />
                    <button type="button" className="delete-course" data-coursedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-course="">
                    <input
                        type="text"
                        className="course-dept"
                        name="course-dept[]"
                        defaultValue="ITCS"
                        placeholder="Course Department"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-num"
                        name="course-num[]"
                        defaultValue={3112}
                        placeholder="Course Number"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-name"
                        name="course-name[]"
                        defaultValue="Design Implementation of Object-Oriented Systems"
                        placeholder="Course Name"
                        required=""
                    />
                    <input
                        type="text"
                        className="course-reason"
                        name="course-reason[]"
                        defaultValue="I thought this course would be useful and it is a required course."
                        placeholder="Course Reason"
                        required=""
                    />
                    <button type="button" className="delete-course" data-coursedelete="">
                        Delete
                    </button>
                    </div>
                </div>
                <button type="button" className="add-course" id="addCourseBtn">
                    Add Another Course
                </button>
                </fieldset>
                <br />
                <fieldset>
                <legend>Extras</legend>
                <label>
                    Funny/Interesting item to remember me by (Optional):
                    <input
                    type="text"
                    name="funnyItem"
                    defaultValue=""
                    placeholder="Funny thing about you"
                    />
                </label>
                <br />
                <label>
                    I'd also like to share (Optional):
                    <input
                    type="text"
                    name="addText"
                    defaultValue=""
                    placeholder="Additional text"
                    />
                </label>
                <br />
                <label>
                    Quote:
                    <input
                    type="text"
                    name="quote"
                    defaultValue="Life is short, the world is wide, and I want to make some memories."
                    placeholder="Quote"
                    required=""
                    />
                </label>
                <br />
                <label>
                    Quote Author:
                    <input
                    type="text"
                    name="quoteAuthor"
                    defaultValue="Donna Sheridan"
                    placeholder="Quote Author"
                    required=""
                    />
                </label>
                <br />
                </fieldset>
                <br />
                <fieldset>
                <legend>Links</legend>
                <div id="websites">
                    <div data-website="">
                    <label>
                        Website Name:
                        <input
                        type="text"
                        className="website-name"
                        name="urlname[]"
                        defaultValue="GitHub"
                        placeholder="Website Name"
                        required=""
                        />
                    </label>
                    <label>
                        URL:
                        <input
                        type="url"
                        className="link-url"
                        name="url[]"
                        defaultValue="https://github.com/achernoi"
                        placeholder="URL"
                        required=""
                        />
                    </label>
                    <button type="button" className="delete-link" data-websitedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-website="">
                    <label>
                        Website Name:
                        <input
                        type="text"
                        className="website-name"
                        name="urlname[]"
                        defaultValue="GitHub.io"
                        placeholder="Website Name"
                        required=""
                        />
                    </label>
                    <label>
                        URL:
                        <input
                        type="url"
                        className="link-url"
                        name="url[]"
                        defaultValue="https://achernoi.github.io"
                        placeholder="URL"
                        required=""
                        />
                    </label>
                    <button type="button" className="delete-link" data-websitedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-website="">
                    <label>
                        Website Name:
                        <input
                        type="text"
                        className="website-name"
                        name="urlname[]"
                        defaultValue="CLTWeb"
                        placeholder="Website Name"
                        required=""
                        />
                    </label>
                    <label>
                        URL:
                        <input
                        type="url"
                        className="link-url"
                        name="url[]"
                        defaultValue="https://webpages.charlotte.edu/achernoi/"
                        placeholder="URL"
                        required=""
                        />
                    </label>
                    <button type="button" className="delete-link" data-websitedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-website="">
                    <label>
                        Website Name:
                        <input
                        type="text"
                        className="website-name"
                        name="urlname[]"
                        defaultValue="ITIS3135"
                        placeholder="Website Name"
                        required=""
                        />
                    </label>
                    <label>
                        URL:
                        <input
                        type="url"
                        className="link-url"
                        name="url[]"
                        defaultValue="https://achernoi.github.io/itis3135/index.html"
                        placeholder="URL"
                        required=""
                        />
                    </label>
                    <button type="button" className="delete-link" data-websitedelete="">
                        Delete
                    </button>
                    </div>
                    <div data-website="">
                    <label>
                        Website Name:
                        <input
                        type="text"
                        className="website-name"
                        name="urlname[]"
                        defaultValue="LinkedIn"
                        placeholder="Website Name"
                        required=""
                        />
                    </label>
                    <label>
                        URL:
                        <input
                        type="url"
                        className="link-url"
                        name="url[]"
                        defaultValue="https://www.linkedin.com/in/sashachernoivan/"
                        placeholder="URL"
                        required=""
                        />
                    </label>
                    <button type="button" className="delete-link" data-websitedelete="">
                        Delete
                    </button>
                    </div>
                </div>
                <button type="button" id="addWebsiteLinkBtn">
                    Add Link
                </button>
                </fieldset>
                <div>
                <br />
                <button type="submit" id="submitBtn">
                    Submit
                </button>&nbsp;
                <button type="reset" id="resetBtn">
                    Reset
                </button>&nbsp;
                <button type="button" id="clearButton">
                    Clear
                </button>&nbsp;
                <button type="button" id="generateHtmlBtn" onclick="generateHtml();">
                    Generate HTML
                </button>&nbsp;
                <button type="button" id="generateJsonBtn" onclick="generateJson();">
                    Generate JSON
                </button>
                </div>
                <br />
            </form>
            <div id="output_result" style={{ display: "none" }} />
            </main>
            <Footer />
        </>
    );
}
