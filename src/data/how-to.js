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
      "Select start automate discounts",
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
    instructions: [
      "Enter report open sales order",
      "Enter Associate number",
      "Clear start dates",
      "Select Action button",
      "Select Output settings",
      "Select Personal Report Viewer",
      "Click save",
      "Click run",
      "Right click order date and select group by",
      "Right click order number next and select group by",
      "**when you print, all fields are expanded automatically",
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
  {
    name: "Check PO notes",
    instructions: [
      "Enter View Product Activity",
      "Enter sku",
      "Go to purchase orders tab",
      "Double click purchase order",
      "Click on Quantity tab",
      "Click action button",
      "Select view comments",
    ],
  },
  {
    name: "Find unpaid tickets",
    instructions: [
      "Go inside a live ticket",
      "Go to the merchandise tab",
      "Right click in the top half of the screen",
      "Select View Product Activity",
      "Select open orders tab",
      "💥 Select all stores",
      "You can now enter the tickets without affecting them",
      "Currently, if two people are viewing the same order then it will lock the second persons computer until the first person is out",
    ],
  },
].sort((a, b) => a.name.localeCompare(b.name));
