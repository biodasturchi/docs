<script setup>
import algoliasearch from "algoliasearch";

const client = algoliasearch("H0YF5SCEHL", "606421ccdfbcfae23a3636d6aa291774");

const index = client.initIndex("demo_ecommerce");

index.setSettings({
  // Select the attributes you want to search in
  searchableAttributes: ["brand", "name", "categories", "description"],
  // Define business metrics for ranking and sorting
  customRanking: ["desc(popularity)"],
  // Set up some attributes to filter results on
  attributesForFaceting: ["categories", "searchable(brand)", "price"],
});
</script>
