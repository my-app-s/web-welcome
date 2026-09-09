function About() {
    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-3 p-2 md:flex-row md:justify-between">
            <section className="flex-1 p-3 text-custom-purple space-y-3">
                <h1 className="text-xl font-bold">Go Developer</h1>
                <p>
                    I have <strong>7+ years of experience</strong> in IT infrastructure and networking, including{' '}
                    <strong>Linux, TCP/IP, DNS, DHCP, routing, and Docker</strong>.
                </p>
                <p>
                    Currently focused on backend development with <strong>Go</strong> and <strong>PostgreSQL</strong>,{' '}
                    building pet projects and strengthening my software engineering foundation. Looking for an opportunity to transition into a <strong>Go Backend Developer</strong> role.
                </p>
            </section>
            <section className="flex flex-1 flex-col p-4">
                <h2 className="text-xl font-bold">Stack</h2>
                <ul className="list-inside list-disc p-3 space-y-1">
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
    );
}

export default About;