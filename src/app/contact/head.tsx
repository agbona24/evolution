import { buildPageAuthorityGraph } from "@/lib/seo/authority";
import { buildBreadcrumbSchema } from "@/lib/seo/schemas";
import { siteUrl } from "@/lib/seo/authority";

const pageGraph = buildPageAuthorityGraph(
  "/contact",
  "Contact Us | Evolution Vocational Tutors — Lagos, Nigeria",
  "Get in touch with Evolution Vocational Tutors for enrollment inquiries, course information, and study abroad advisory services in Lagos, Nigeria.",
);

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: siteUrl },
  { name: "Contact", url: `${siteUrl}/contact` },
]);

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <meta name="developer-contributor" content="Harzotech Nig Ltd" />
    </>
  );
}
