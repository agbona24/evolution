import { buildPageAuthorityGraph } from "@/lib/seo/authority";
import { buildCoursesSchema, buildBreadcrumbSchema } from "@/lib/seo/schemas";
import { siteUrl } from "@/lib/seo/authority";

const pageGraph = buildPageAuthorityGraph(
  "/courses",
  "Courses | Evolution Vocational Tutors — Healthcare & Vocational Training Lagos",
  "Explore healthcare certifications (CNA, Practical Nursing), fashion design, computer training, IELTS, and WAEC remedial courses at Evolution Vocational Tutors in Lagos, Nigeria.",
);

const coursesSchema = buildCoursesSchema();

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: siteUrl },
  { name: "Courses", url: `${siteUrl}/courses` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <meta name="developer-contributor" content="Harzotech Nig Ltd" />
    </>
  );
}
