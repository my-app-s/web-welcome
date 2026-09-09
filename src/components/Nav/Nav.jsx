const NAV_LINKS = [
    {
        id: 1,
        name: 'Portfolio',
        href: 'https://my-app-s.github.io/web-welcome',
        target: undefined,
        liClass: 'animate-[circle-to-square_5s_linear_infinite_alternate]',
        linkClass: 'text-inherit no-underline'
    },
    {
        id: 2,
        name: 'GitHub',
        href: 'https://github.com/my-app-s',
        target: '_blank',
        liClass: 'bg-custom-github text-custom-github-text',
        linkClass: 'text-inherit'
    },
    {
        id: 3,
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rustem-m-692916334',
        target: '_blank',
        liClass: 'bg-custom-linkedin',
        linkClass: 'text-inherit'
    },
    {
        id: 4,
        name: 'HH',
        href: 'https://hh.kz/resume/82ec45adff0f0ff5f60039ed1f6f3448515845',
        target: '_blank',
        liClass: 'bg-custom-bg',
        linkClass: 'text-inherit'
    },
]

function Nav() {
    return (
        <header className='max-w-2xl mx-auto'>
            <nav>
                <ul className="flex flex-wrap justify-between m-0 p-0 list-none text-2xl font-bold">
                    {NAV_LINKS.map((item) => (
                        <li key={item.id} className={`flex flex-1 flex-wrap sm:flex-nowrap justify-center items-center items-center h-[100px] ${item.liClass}`}>
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
