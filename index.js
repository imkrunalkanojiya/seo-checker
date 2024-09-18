import express from "express";
const app = express();
import { getSeoData } from "./src/main";

app.get("/seo-checker", async (req, res) => {
  const url = req.query.url;
  try {
    const seoData = await getSeoData(url);
    res.status(200).json(seoData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Error processing SEO data. Please check the URL and try again.");
  }
});

app.listen(4000, () => {
  console.log("SEO Tool listening on port 4000");
});
