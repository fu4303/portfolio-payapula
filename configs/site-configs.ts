// Inspired by Chakra - https://github.com/chakra-ui/chakra-ui/blob/main/website/configs/site-config.ts
import { NextSeoProps } from 'next-seo';
import { getBasePath } from 'utils/utils';

interface SiteConfig {
    general: {
        siteUrl: string;
        editUrl: string;
        authorEmail: string;
        twitter: string;
        linkedIn: string;
    };
    seo: NextSeoProps;
}

const hostedURL = 'https://www.bharathikannan.com';

const siteConfig: SiteConfig = {
    general: {
        siteUrl: hostedURL,
        editUrl: 'https://github.com/payapula/blog/edit/develop/_posts/',
        authorEmail: 'bharathikannanv05@gmail.com',
        twitter: 'https://twitter.com/bharathispeaks',
        linkedIn: 'https://linkedin.com/in/bharathi-kannan-80968170'
    },
    seo: {
        title: 'Bharathi Kannan Blog',
        defaultTitle: 'Bharathi Kannan Blog',
        titleTemplate: '%s | Bharathi Kannan Blog',
        description: "Bharathi Kannan's Portfolio and Blog.",
        openGraph: {
            type: 'website',
            title: 'Bharathi Kannan Blog',
            description: "Bharathi Kannan's Portfolio and Blog.",
            site_name: 'Bharathi Kannan',
            url: hostedURL,
            images: [
                {
                    url: getBasePath('/assets/resume/bharathikannanavatar.jpg'),
                    alt: 'Bharathi Kannan Avatar'
                }
            ]
        },
        twitter: {
            site: '@bharathispeaks',
            handle: '@bharathispeaks',
            cardType: 'summary_large_image'
        }
    }
};

export default siteConfig;
