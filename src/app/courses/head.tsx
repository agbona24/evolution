import { buildPageAuthorityGraph } from "@/lib/seo/authority";

const graph = buildPageAuthorityGraph(
  "/courses",
  "Courses | Evolution Vocational Tutors",
  "Explore healthcare and vocational courses at Evolution Vocational Tutors in Lagos, Nigeria.",
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
