import React from 'react';
const HomePage = React.lazy(() => import('../src/pages/Home/Home.js'))
const AboutPage = React.lazy(() => import('../src/pages/About/About.js'))
const ContactPage = React.lazy(() => import('../src/pages/Contact/Contact.js'))
const BlogPage = React.lazy(() => import('./pages/Blog/Blog.js'))
const BlogDetailPage = React.lazy(() => import('./pages/Blog/BlogDetail/BlogDetail.js'))
const BlogGridPage = React.lazy(() => import('./pages/Blog/BlogGrid/BlogGrid.js'))
const ServicePage = React.lazy(() => import('../src/pages/Service/Service.js'))
// const PortfolioPage = React.lazy(() => import('../src/pages/Portfolio/Portfolio.js'))
const kbli = React.lazy(() => import('../src/pages/Kbli/Kbli.js'))

const routes = [
   
    {
        path: "/beranda",
        exact: true,
        component: HomePage,
    },
    {
        path: "/kontak",
        component: ContactPage,
    },
    {
        path: "/tentang",
        component: AboutPage,
    },
    {
        path: "/layanan",
        component: ServicePage,
    },
    // {
    //     path: "/portfolio",
    //     component: PortfolioPage,
    // },
    {
        path: "/artikel",
        component: BlogPage,
        routes: [
            {
                path: "/artikel/grid",
                component: BlogGridPage
            },
            {
                path: "/artikel/:category/:id",
                component: BlogDetailPage
            },
        ]
    },
    {
        path: "/kbli",
        component: kbli
    }
];
export default routes;