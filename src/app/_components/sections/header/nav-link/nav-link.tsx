import Link from 'next/link'

export const NavLink = ({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) => (
    <Link href={href} className="mt-2 w-[80px] transform rounded-md text-start text-md text-shop-gray-900 transition-colors duration-300 hover:text-warning-400 lg:mt-0 lg:text-center dark:text-gray-200 dark:hover:bg-gray-700">
        {children}
    </Link>
)
