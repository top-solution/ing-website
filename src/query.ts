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

export const ProjectsListRecord = `
  fragment projectsListRecord on ProjectsListRecord {
    __typename
    projects {
      slug
      name
      image {
        id
        url
        alt
        format
      }
    }
  }
`;

export const ProjectBlockRecord = `
  fragment projectBlockRecord on ProjectBlockRecord {
    __typename
    project {
      slug
      name
      image {
        id
        url
        alt
        format
      }
    }
  }
`;

export const TextBlockRecord = `
  fragment textBlockRecord on TextBlockRecord {
    __typename
    title
    content
  }
`;

export const PersonalInfoBlockRecord = `
  fragment personalInfoBlockRecord on PersonalInfoBlockRecord {
    __typename
    personalInfo {
      address
      phone
      mobile
      emails
      partitaIva
    }
  }
  `;

export const MapBlockRecord = `
  fragment mapBlockRecord on MapBlockRecord {
    __typename
    map {
      id
      url
      alt
      format
    }  
  }
`;

// address
// phone
// mobile
// emails
export const query = `
  query Pages($slug: String) {
    page(filter: { slug: { eq: $slug } }) {
      id
      slug
      personalInfo {
        __typename
        address
        phone
        mobile
        emails
        partitaIva
      }
      content {
        __typename
        ...heroBannerRecord
        ...serviceBlockRecord
        ...projectsListRecord
        ...projectBlockRecord
        ...textBlockRecord
        ...personalInfoBlockRecord
        ...mapBlockRecord
      }
    }
  }
  
  ${ServiceBlockRecordQuery}
  ${HeroBannerRecordQuery}
  ${CtaRecordQuery}
  ${ProjectsListRecord}
  ${ProjectBlockRecord}
  ${TextBlockRecord}
  ${PersonalInfoBlockRecord}
  ${MapBlockRecord}
`;

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
      return result;
    });
}
