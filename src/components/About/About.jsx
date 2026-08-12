import './About.css'

function About() {
    return(
        <div className="container container--flex container--gap">
                <section className="about">
                    <h1>Go Developer</h1>
                    <p>
                        I have <strong>7+ years of experience</strong> in IT infrastructure and networking, including{' '}
                        <strong>Linux, TCP/IP, DNS, DHCP, routing, and Docker</strong>. 
                    </p>
                    <p>
                        Currently focused on backend development with <strong>Go</strong> and <strong>PostgreSQL</strong>, 
                        building pet projects and strengthening my software engineering foundation. Looking for an opportunity to transition into a <strong>Go Backend Developer</strong> role.
                    </p>
                </section>
                <section className="stack">
                    <h2>Stack</h2>
                    <ul>
                        <li>Go</li>
                        <li>PostgreSQL</li>
                        <li>REST API</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>Git</li>
                        <li>Bash</li>
                        <li>HTTP</li>
                        <li>JSON</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </section>
            </div>
    )
}

export default About
