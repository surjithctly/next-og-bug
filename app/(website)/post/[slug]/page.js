export async function generateStaticParams() {
  const slugs = [{ slug: "one" }];
  return slugs;
}
export const dynamicParams = true;

export default async function PostPage({ params }) {
  return (
    <div>
      <div>I'm page {params.slug}</div>
    </div>
  );
}
