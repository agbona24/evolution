import { buildPageAuthorityGraph } from "@/lib/seo/authority";

const graph = buildPageAuthorityGraph(
  "/about",
  "About Evolution Vocational Tutors",
  "Learn about Evolution Vocational Tutors, our mission, training approach, and team in Lagos, Nigeria.",
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
