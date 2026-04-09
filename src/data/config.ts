const config = {
  title: "Karthik Rudrappa | Data Analyst",
  description: {
    long: "Explore the portfolio of Karthik Rudrappa, a Customer Insights & Data Analyst specializing in churn analysis, sentiment monitoring, predictive modelling, and BI dashboards. Discover projects in NLP, machine learning, and customer segmentation. Let's turn data into decisions!",
    short:
      "Portfolio of Karthik Rudrappa — a Data Analyst turning raw customer data into actionable intelligence.",
  },
  keywords: [
    "Karthik Rudrappa",
    "portfolio",
    "data analyst",
    "customer insights",
    "Power BI",
    "Python",
    "SQL",
    "churn analysis",
    "sentiment analysis",
    "NLP",
    "RFM analysis",
    "predictive modelling",
    "business intelligence",
    "data visualization",
  ],
  author: "Karthik Rudrappa",
  email: "krk767@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "karthik-rudrappa",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/karthik-n-rudrappa/",
    github: "https://github.com/karthik-rudrappa",
  },
};
export { config };
