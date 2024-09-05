import cosmic from "../lib/cosmic";

interface Article {
  title: string;
  slug: string;
  metadata: {
    publication_date: string;
    header_image: {
      url: string;
      imgix_url: string;
    };
    articles_text: string;
    gallery: Array<{
      image: {
        url: string;
        imgix_url: string;
      };
    }>;
    recommended_articles: any[];
  };
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const { object: article } = await cosmic.objects
    .findOne({
      type: "articles",
      slug,
    })
    .props([
      "title",
      "slug",
      "metadata.publication_date",
      "metadata.header_image",
      "metadata.articles_text",
      "metadata.gallery",
      "metadata.recommended_articles",
    ]);
  console.log("article", article);
  return article as Article;
}

export async function getArticles(): Promise<Article[]> {
  const { objects: articles } = await cosmic.objects
    .find({
      type: "articles",
    })
    .props([
      "title",
      "slug",
      "created_at",
      "metadata.publication_date",
      "metadata.header_image",
      "metadata.articles_text",
      "metadata.gallery",
      "metadata.recommended_articles",
    ])
    .limit(10)
    .sort("-metadata.publication_date");

  return articles as Article[];
}