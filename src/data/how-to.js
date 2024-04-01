export const howToTopics = [
  {
    name: "Prep Codes",
    screen: "Merchandise Screen",
    instructions: [
      "Click Action Button",
      "Click Prep Codes",
      "Select Prep Codes",
      "Click Save",
    ],
  },
  {
    name: "Fab",
    screen: "Payment Screen",
    instructions: [
      "Click Action Button next to fabric protection",
      "Select Manual Select for appropriate option",
      "Check Boxes of items that you want to protect",
      "verify that box is checked next to option",
    ],
  },
  {
    name: "Blue Rewards Fix",
    screen: "Fullfillment Screen",
    instructions: [
      "Click Fulfillment arrow",
      "select take with",
      "Change Fulfillment to Customer Pick Up",
      "Select Date for fulfillment date",
    ],
  },
  {
    name: "Find Stock",
    screen: "Merchandise Screen",
    instructions: [
      "Right click above merchandise section",
      "Select View Product Activity",
      "Type in SKU number",
      "Select Open Orders tab",
      "Click on Orders to view them",
      "Check payment tab",
    ],
  },
  {
    name: "Delivery Windows",
    instructions: [
      "Schedule Delivery",
      "Update mobile phone number",
      "Customer will recieve an ETA by text after 4pm the day before",
      "The customer can check after 4 by visiting rcwilley.com",
    ],
  },
].sort((a, b) => a.name.localeCompare(b.name));
