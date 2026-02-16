import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description?: string;
}

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);
}
