import Header from "./Header";
import Footer from "./Footer";

export default function Introduction() {
    return (
        <>
            <Header />
            <main>
                <h2 style={{textAlign: "center"}}>Introduction</h2>
                <figure style={{textAlign: "center"}}>
                    <img
                    src="src/assets/myimage.png"
                    alt="My introduction image."
                    height={400}
                    width={300}
                    />
                    <figcaption>
                    <em>One of my favorite beach spots in California.</em>
                    </figcaption>
                </figure>
                <p>
                    I just transferred to UNC Charlotte from CPCC and I am a junior studying
                    computer science with a concentration in Web/Mobile Development and Software
                    Engineering.
                </p>
                <h3>Background</h3>
                <ul>
                    <li>
                    <strong>Personal Background:</strong> I am 21 years old and I love
                    photography, painting, and traveling.{" "}
                    </li>
                    <li>
                    <b>Professional Background:</b> I have been working in retail for a few
                    years.
                    </li>
                    <li>
                    <b>Academic Background:</b> I just transferred to UNC Charlotte this
                    semester after completing my associate degree from CPCC. I am a junior
                    studying computer science with a concentration in Web/Mobile Development
                    and Software Engineering.
                    </li>
                    <li>
                    <b>Background in this Subject:</b> I have limited experience in web
                    development but I have experience in programming using Java.
                    </li>
                    <li>
                    <b>Primary Work Computer:</b> The laptop I use for school is a Macbook Pro
                    13-inch M1.
                    </li>
                    <li>
                    <b>Backup Work Computer &amp; Location Plan:</b> I have a Windows PC
                    computer at home I can use as a backup.
                    </li>
                    <li>
                    <b>Courses I'm Taking and Why:</b>
                    <ol>
                        <li>
                        <b>ITSC 2600 - Computer Science Program, Identity, Career:</b>{" "}
                        Required course.
                        </li>
                        <li>
                        <b>ITIS 3130 - Introduction to Human-Centered Computing:</b> I thought
                        this would be an interesting course.
                        </li>
                        <li>
                        <b>ITIS 3135 - Front-End Web Application Development:</b> Useful
                        course.
                        </li>
                        <li>
                        <b>ITSC 3688 - Computers and Their Impact on Society:</b> Required
                        course.
                        </li>
                        <li>
                        <b>ITCS 3112 - Design Implementation of Object-Oriented Systems:</b> I
                        thought this course would be useful and it is a required course.
                        </li>
                    </ol>
                    </li>
                </ul>
                <blockquote>
                    Life is short, the world is wide, and I want to make some memories. -Donna
                    Sheridan
                </blockquote>
            </main>
            <Footer />
        </>
    );
}