import { buildPageAuthorityGraph } from "@/lib/seo/authority";

const graph = buildPageAuthorityGraph(
  "/study-abroad",
  "Study Abroad Services | Evolution Vocational Tutors",
  "Discover UK and Canada study abroad advisory services from Evolution Vocational Tutors.",
);

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <meta name="developer-contributor" content="Harzotech Nig Ltd" />
    </>
  );
}
