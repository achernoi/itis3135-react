import Header from "./Header";
import Footer from "./Footer";

export default function IntroForm(){
    return (
        <>
            <Header />
            <main>
                <h2 style={{textAlign: "center"}}>Website Evaluations (CRAP Principles)</h2>
                <section>
                    <h3>
                    <a href="https://slack.com" target="_blank">
                        Slack
                    </a>
                    </h3>
                    <ul>
                    <li>
                        <strong>Contrast: </strong>The website has strong contrast with headings
                        and body text, making it easy to read. The links are brightly colored
                        against the white background, helping the user spot what is important.
                    </li>
                    <li>
                        <strong>Repetition: </strong>The colors, fonts, and sizes of the text
                        and buttons are repeated throughout the site, increasing usability.
                    </li>
                    <li>
                        <strong>Alignment: </strong>All the content is organized using a grid
                        system, creating a structured layout for the site. This makes the site
                        easy to scan and appealing for the user.
                    </li>
                    <li>
                        <strong>Proximity: </strong>The related navigation links are grouped
                        together, allowing user to quickly understand relationships between the
                        actions and information. Features are grouped with headings and
                        descriptions to create a better understanding for the user.
                    </li>
                    </ul>
                </section>
                <section>
                    <h3>
                    <a href="https://charlotte.craigslist.org" target="_blank">
                        Craigslist
                    </a>
                    </h3>
                    <ul>
                    <li>
                        <strong>Contrast: </strong>This website does not have visual hierarchy.
                        Elements do not stand out and almost all text has the same size. The
                        text color and font are the same throughout all the pages with no focal
                        points.
                    </li>
                    <li>
                        <strong>Repetition: </strong>While repetition is there, all links and
                        categories look the same, making it overly repetitive. This makes it
                        difficult for users to notice important details.
                    </li>
                    <li>
                        <strong>Alignment: </strong>There are long lists of text under each
                        category with little spacing between each list making the page seem
                        dense. Most text is left-aligned but spacing is inconsistent.
                    </li>
                    <li>
                        <strong>Proximity: </strong>The different categories are grouped
                        together but there are way too many links crammed under that have little
                        spacing between each, making it hard to scan.
                    </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}