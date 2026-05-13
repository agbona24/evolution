import { buildPageAuthorityGraph } from "@/lib/seo/authority";
import { buildBreadcrumbSchema } from "@/lib/seo/schemas";
import { siteUrl } from "@/lib/seo/authority";

const pageGraph = buildPageAuthorityGraph(
  "/study-abroad",
  "Study Abroad UK & Canada | Evolution Vocational Tutors — Lagos, Nigeria",
  "Comprehensive study abroad advisory services for Nigerians seeking university admission in the UK and Canada. Includes IELTS preparation, school selection, application support, and visa guidance.",
);

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: siteUrl },
  { name: "Study Abroad", url: `${siteUrl}/study-abroad` },
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
