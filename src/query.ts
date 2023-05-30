

export const ServiceBlockRecordQuery = `
  fragment serviceBlockRecord on ServiceBlockRecord {
    __typename
    id
    description
    image {
      id
      url
      alt
      format
    }
  }
`;

export const HeroBannerRecordQuery = `
  fragment heroBannerRecord on HeroBannerRecord {
    __typename
    id
    description
    cta {
      __typename
      ...ctaRecord
    }
  }
`;

export const CtaRecordQuery = `
  fragment ctaRecord on CtaRecord {
    id
    title
    icon {
      id
      url
      alt
      format
    }
    internalLink {
      slug
    }
  }
`;


export const query = `
  query Pages($slug: String) {
    page(filter: { slug: { eq: $slug } }) {
      id
      content {
        __typename
        ...heroBannerRecord
        ...serviceBlockRecord
      }
    }
  }
  
  ${ServiceBlockRecordQuery}

  ${HeroBannerRecordQuery}

  ${CtaRecordQuery}
`

export function contentQuery(slug: string) {
  return fetch("https://graphql.datocms.com/preview", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${"dfbfd3fb99905165d1f4ecb204aeec"}`,
    },
    body: JSON.stringify({
      query: query,
      variables: {
        slug: slug || "home",
      },
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      // console.log(new Date());
      // console.log(JSON.stringify(result, null, 4));
      return result
    });
} 