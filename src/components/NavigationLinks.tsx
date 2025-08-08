interface Links {
    label: string;
    href: string;
    }

interface NavigationLinksProps {
    links: Links[];
    linkClassName?: string;
    navClassName?: string;
    onClick?: () => void;
}

function NavigationLinks({ links, linkClassName, navClassName, onClick }: NavigationLinksProps) {
    return (
        <nav className={navClassName}>
            <ul className="flex space-x-4">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavigationLinks;
