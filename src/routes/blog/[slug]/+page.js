// src/routes/blog/[slug]/+page.js
export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  const { title, date } = post.metadata
  const Article = post.default

  return {
    Article,
    title,
    date,
  }
}
