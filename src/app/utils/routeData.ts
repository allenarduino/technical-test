
interface routeDataType {
    path: string,
    text: string,
    href: string

}
// Array of objects mapping routes to their respective texts
export const routeData: routeDataType[] = [
    { path: '/auth/signup', text: 'Log in', href: '/auth/login' },
    { path: '/auth/login', text: 'Create account', href: '/auth/signup' },
    { path: '/auth/confirmation', text: 'Go back', href: '/auth/login' },
    { path: '/auth/passwordreset', text: 'Return to login', href: '/auth/login' },
    { path: '/auth/checkemail', text: 'Return to login', href: '/auth/login' },
    { path: '/description', text: 'Skip to dashboard', href: '' },
    { path: '/', text: 'Skip to dashboard', href: '' },
];