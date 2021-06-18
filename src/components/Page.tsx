import React, { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

type PageProps = {
  children: ReactNode;
  title: string;
};

type Ref = HTMLDivElement;

const Page = forwardRef<Ref, PageProps>(({ children, title = '' }, ref) => {
  const description =
    'crispy munch is an full stack application that allow customer order for food and food vendor can see all orders and deliver them.';

  /**
   * Meta Tags
   */

  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },

    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Crispy Munch' },
    // { property: 'og:image', content: thumbnailUrl },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: 'Crispy Munch' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: 'https://twitter.com/samador9' },
  ];

  return (
    <div ref={ref}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={title}
        titleTemplate={`%s | Crispy Munch`}
        meta={metaTags}
      />
      {children}
    </div>
  );
});

export default Page;
