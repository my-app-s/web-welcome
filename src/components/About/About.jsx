function About() {
    return(
        <div className="max-w-2xl mx-auto flex justify-between flex-wrap gap-3">
                <section className="p-3 text-custom-purple flex-1">
                    <h1 className="font-bold text-xl">Go Developer</h1>
                    <p>
                        I have <strong>7+ years of experience</strong> in IT infrastructure and networking, including{' '}
                        <strong>Linux, TCP/IP, DNS, DHCP, routing, and Docker</strong>. 
                    </p>
                    <p>
                        Currently focused on backend development with <strong>Go</strong> and <strong>PostgreSQL</strong>, 
                        building pet projects and strengthening my software engineering foundation. Looking for an opportunity to transition into a <strong>Go Backend Developer</strong> role.
                    </p>
                </section>
                <section className="p-4 flex-1 justify-between items-center ">
                    <h2 className="font-bold text-xl">Stack</h2>
                    <ul className="p-3 list-disc list-inside">
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
