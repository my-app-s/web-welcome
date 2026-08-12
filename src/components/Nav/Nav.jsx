import './Nav.css'

const NAV_LINKS = [
    {
        id: 1,
        name: 'Portfolio',
        href: 'https://my-app-s.github.io/web-welcome',
        target: undefined,
        liClass: 'portfolio',
        linkClass: 'custom-link custom-link--no-underline'
    },
    {
        id: 2,
        name: 'GitHub',
        href: 'https://github.com/my-app-s',
        target: '_blank',
        liClass: 'github',
        linkClass: 'custom-link'
    },
    {
        id: 3,
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rustem-m-692916334',
        target: '_blank',
        liClass: 'linkedin',
        linkClass: 'custom-link'
    },
    {
        id: 4,
        name: 'HH',
        href: 'https://hh.kz/resume/82ec45adff0f0ff5f60039ed1f6f3448515845',
        target: '_blank',
        liClass: 'hh',
        linkClass: 'custom-link'
    },
]

function Nav() {
    return (
        <header className='container'>
            <nav id="nav">
                <ul className="nav-list text-large">
                    {NAV_LINKS.map((item) => (
                        <li key={item.id} className={`cube ${item.liClass}`}>
                            <a
                                className={item.linkClass}
                                href={item.href}
                                target={item.target}
                                rel="noopener noreferrer"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav
