import cosmic from "../lib/cosmic";

interface FeaturedNews {
  title: string;
  slug: string;
  created_at: string;
  metadata: {
    main_image: {
      url: string;
    };
    top_image: {
      url: string;
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
      "metadata.main_image",
      "metadata.top_image",
      "metadata.text",
      "metadata.cta_title",
      "metadata.cta_url",
    ])
    .limit(4)
    .sort("-created_at");

  return featuredNews as FeaturedNews[];
}