import cosmic from "../lib/cosmic";

interface FeaturedNews {
  title: string;
  slug: string;
  created_at: string;
  metadata: {
    background_image: {
      url: string;
      imgix_url: string;
    };
    text_logo: {
      url: string;
      imgix_url: string;
    };
    teaser_image: {
      url: string;
      imgix_url: string;
    };
    text: string;
    cta_title: string;
    cta_url: string;
  };
}

export async function getFeaturedNews(): Promise<FeaturedNews[]> {
  const { objects: featuredNews } = await cosmic.objects
    .find({
      type: "featured-news",
    })
    .props([
      "title",
      "slug",
      "created_at",
      "metadata.background_image",
      "metadata.teaser_image",
      "metadata.text_logo",
      "metadata.text",
      "metadata.cta_title",
      "metadata.cta_url",
    ])
    .sort("-created_at");

  return featuredNews as FeaturedNews[];
}