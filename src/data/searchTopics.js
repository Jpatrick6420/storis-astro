export const topics = [
  { title: "Adjustable Base Acc", instructions: "product group => ADJACC" },
  { title: "Battery Packs", instructions: "product group => MOTBAT" },
  { title: "Bed Brackets", instructions: "product group => CNVBED" },
  { title: "Blue Rewards", instructions: "sku=> BLUE-REWARDS" },
  { title: "BBQ Accessories/pellets", instructions: "product group => BBQACC" },
  { title: "Bunkettes", instructions: "product group => BUNKIE" },
  { title: "Frames", instructions: "product group => FRAMES" },
  { title: "Protectors", instructions: "product group => MATT-PRO" },
  { title: "Rug Pads", instructions: "product group => RUGPAD" },
  { title: "Special Order", instructions: "collection: SO, vender: CODE" },
  { title: "Split Queen Boxspring", instructions: "collection => SQ-FND" },
  { title: "Swivel", instructions: "product group => MOTACC" },
].sort((a, b) => {
  return a.title.localeCompare(b.title);
});
