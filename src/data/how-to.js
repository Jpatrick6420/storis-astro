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
    name: "Canceled order by customer",
    screen: "View Customer Activity",
    instructions: [
      "Lookup customer",
      "Select historical purchases",
      "Select canceled orders from drop box",
    ],
  },
  {
    name: "Multiple line discounts",
    screen: "Merchandise screen inside order",
    instructions: [
      "Enter all group clearance skus (without as-is discounts)",
      "Click the action button",
      "Select ENTER DISCOUNT ON MULTIPLE LINES",
      "Select clearance allowance (NOT AS-IS DISCOUNT)",
      "Enter the discount total for all peices",
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
    name: "Auto Update Discounts",
    instructions: [
      "Navigate to merchandise screen",
      "Click action button",
      "Select automate discounts",
    ],
  },
  {
    name: "Preferred print option",
    instructions: [
      "Go to payment section in the ticket",
      "Select Print",
      "Go to specify default printer",
      "Select last option (Storis Print Preview",
      "Wait for it to load",
      "Select print",
      "Select your desired Printer",
    ],
  },
  {
    name: "undelivered",
    instructions: ["Go to REPORT OPEN SALES ORDER SUMMARY"],
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
