import { createBucketClient } from '@cosmicjs/sdk';

console.log("COSMIC_BUCKET_SLUG", import.meta.env.COSMIC_BUCKET_SLUG);
console.log("COSMIC_READ_KEY", import.meta.env.COSMIC_READ_KEY);

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
});

export default cosmic;