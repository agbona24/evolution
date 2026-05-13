import { buildPageAuthorityGraph } from "@/lib/seo/authority";
import { buildBreadcrumbSchema } from "@/lib/seo/schemas";
import { siteUrl } from "@/lib/seo/authority";

const pageGraph = buildPageAuthorityGraph(
  "/about",
  "About Us | Evolution Vocational Tutors — Lagos, Nigeria",
  "Learn about Evolution Vocational Tutors, our mission to Educate, Mentor, Train, and Empower (EMTEL), our experienced team, and our vocational training approach in Lagos, Nigeria.",
);

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: siteUrl },
  { name: "About", url: `${siteUrl}/about` },
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
