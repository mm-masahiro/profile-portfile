const client = require("contentful").createClient({
  space: "iwykbm7c7tv8",
  accessToken: "ge_zqUlVgjoqGsao4a_HPsflyl2jvgT4hT2uEn-WEIc",
});

const getBlogPosts = () => client.getEntries({ content_type: "blogPost" }).then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blogPost",
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };
