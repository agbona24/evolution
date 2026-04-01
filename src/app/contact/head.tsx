import { buildPageAuthorityGraph } from "@/lib/seo/authority";

const graph = buildPageAuthorityGraph(
  "/contact",
  "Contact Evolution Vocational Tutors",
  "Contact Evolution Vocational Tutors for healthcare, vocational, and study abroad training inquiries.",
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
