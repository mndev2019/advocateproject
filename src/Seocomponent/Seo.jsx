// import React from 'react';
import { Helmet } from 'react-helmet';

// eslint-disable-next-line react/prop-types
const Seo = ({ title, description, keywords }) => (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="keywords" content={keywords} /> {/* Adding keywords meta tag */}
            {/* Add other meta tags as needed */}
        </Helmet>
        <script type="application/ld+json">
            {`
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${title} Page",
    "description": "Welcome to our ${title} page.",
    "keywords": "${keywords}"
}
            `}
        </script>
    </>
);

export default Seo;
