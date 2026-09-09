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
        <header className='mx-auto max-w-2xl px-4 sm:px-0'>
            <nav>
                <ul className="m-0 p-0 flex flex-wrap justify-between list-none text-xl sm:text-2xl font-bold">
                    {NAV_LINKS.map((item) => (
                        <li key={item.id} className={`flex justify-center items-center h-16 sm:h-[100px] w-[48%] sm:flex-1 text-center mb-2 sm:mb-0 ${item.liClass}`}>
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
    );
}

export default Nav;