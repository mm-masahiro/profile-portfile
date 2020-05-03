import "../css/styles.scss";
import "../css/reset.css";

const contentful = require("contentful");

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "",
});

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

client
  .getEntries({ content_type: "post" })
  .then((response) => console.log(response.items))
  .catch(console.error);

console.log("hogehgoehgoehgoeho");
