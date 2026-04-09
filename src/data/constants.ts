// Skills and Experience data for Karthik Rudrappa
export enum SkillNames {
  PYTHON = "python",
  SQL = "sql",
  POWERBI = "powerbi",
  TABLEAU = "tableau",
  PANDAS = "pandas",
  SKLEARN = "sklearn",
  SNOWFLAKE = "snowflake",
  EXCEL = "excel",
  SALESFORCE = "salesforce",
  POWERAUTOMATE = "powerautomate",
  POSTGRES = "postgres",
  AZURE = "azure",
  GIT = "git",
  GITHUB = "github",
  NLP = "nlp",
  DAX = "dax",
  AGILE = "agile",
  TEXTBLOB = "textblob",
  JUPYTER = "jupyter",
  ABTESTING = "abtesting",
  DATAMODELLING = "datamodelling",
  AWS = "aws",
  MATPLOTLIB = "matplotlib",
  VSCODE = "vscode",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Slithering through datasets since day one 🐍📊",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.SQL]: {
    id: 2,
    name: "sql",
    label: "SQL",
    shortDescription:
      "SELECT insights FROM chaos WHERE value = 'priceless' 💎🔍",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 3,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Making dashboards so good, stakeholders actually read them 📊✨",
    color: "#f2c811",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  [SkillNames.TABLEAU]: {
    id: 4,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Turning boring spreadsheets into visual storytelling 🎨📈",
    color: "#e97627",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  [SkillNames.PANDAS]: {
    id: 5,
    name: "pandas",
    label: "Pandas",
    shortDescription: "DataFrames go brrr, cleaning data like it's therapy 🐼🧹",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.SKLEARN]: {
    id: 6,
    name: "sklearn",
    label: "Scikit-learn",
    shortDescription:
      "Training models to predict the future, no cap! 🤖🔮",
    color: "#f89939",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.SNOWFLAKE]: {
    id: 7,
    name: "snowflake",
    label: "Snowflake",
    shortDescription:
      "Cloud data warehousing that's cooler than its name ❄️☁️",
    color: "#29b5e8",
    icon: "https://cdn.worldvectorlogo.com/logos/snowflake.svg",
  },
  [SkillNames.EXCEL]: {
    id: 8,
    name: "excel",
    label: "Advanced Excel",
    shortDescription: "VLOOKUP? Nah fam, we INDEX MATCH around here 📗💪",
    color: "#217346",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
  },
  [SkillNames.SALESFORCE]: {
    id: 9,
    name: "salesforce",
    label: "Salesforce",
    shortDescription: "CRM whisperer — pulling customer data like a wizard 🧙‍♂️☁️",
    color: "#00a1e0",
    icon: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
  },
  [SkillNames.POWERAUTOMATE]: {
    id: 10,
    name: "powerautomate",
    label: "Power Automate",
    shortDescription: "Automating the boring stuff so humans can think bigger 🤖⚡",
    color: "#0066ff",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_Automate_2020_logo.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.AZURE]: {
    id: 12,
    name: "azure",
    label: "Azure DevOps",
    shortDescription: "Boards, pipelines, repos — the whole Microsoft buffet 🔵🚀",
    color: "#0078d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "The code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NLP]: {
    id: 15,
    name: "nlp",
    label: "NLP / VADER",
    shortDescription: "Teaching machines to read feelings, one review at a time 🧠💬",
    color: "#6b21a8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DAX]: {
    id: 16,
    name: "dax",
    label: "DAX",
    shortDescription: "CALCULATE, FILTER, SUMX — Power BI's secret sauce 🧪📐",
    color: "#f2c811",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  [SkillNames.AGILE]: {
    id: 17,
    name: "agile",
    label: "Agile / Scrum",
    shortDescription: "Sprint planning is just organised chaos, and I love it 🏃‍♂️📋",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  [SkillNames.TEXTBLOB]: {
    id: 18,
    name: "textblob",
    label: "TextBlob",
    shortDescription: "Sentiment analysis made simple — polarity goes brr 📝🎯",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JUPYTER]: {
    id: 19,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Where data science magic happens, one cell at a time 📓🔬",
    color: "#f37626",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  [SkillNames.ABTESTING]: {
    id: 20,
    name: "abtesting",
    label: "A/B Testing",
    shortDescription: "Because 'I think' is not a strategy, but 'p < 0.05' is 🧪📊",
    color: "#4caf50",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DATAMODELLING]: {
    id: 21,
    name: "datamodelling",
    label: "Data Modelling",
    shortDescription: "Star schemas, snowflakes — building data warehouses that slap 🏗️⭐",
    color: "#7c4dff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Cloud computing but make it everything, everywhere, all at once 🌐☁️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.MATPLOTLIB]: {
    id: 23,
    name: "matplotlib",
    label: "Matplotlib",
    shortDescription: "Plotting charts that actually tell a story, not just look pretty 📉🎨",
    color: "#11557c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 24,
    name: "vscode",
    label: "VS Code",
    shortDescription: "The IDE that replaced all other IDEs, respectfully 💻👑",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 25,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deploy and go touch grass, the triangle does the rest! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Nov 2022",
    endDate: "Present",
    title: "Customer Insights Analyst / Data Analyst",
    company: "Gigaclear Ltd",
    description: [
      "Led customer insights reporting for Sales and Retention, building 10+ Power BI dashboards tracking churn risk, customer behaviour, and billing patterns.",
      "Integrated Salesforce and Trustpilot APIs to build a real-time sentiment monitoring system, reducing response time to negative feedback by 30%.",
      "Designed A/B tests to evaluate customer engagement interventions, ensuring retention strategy changes were backed by statistically significant evidence.",
      "Automated 50% of recurring reporting using Python and Power Automate, freeing up 15+ hours per week of analytical capacity.",
      "Built demand forecasting models in Power BI to help Operations anticipate capacity requirements.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.POWERBI,
      SkillNames.SALESFORCE,
      SkillNames.POWERAUTOMATE,
      SkillNames.ABTESTING,
      SkillNames.NLP,
      SkillNames.DAX,
    ],
  },
  {
    id: 2,
    startDate: "Sep 2021",
    endDate: "Mar 2022",
    title: "Business Analyst",
    company: "VMware Software (via Softsol)",
    description: [
      "Analysed user engagement data across the APJ community platform to track adoption metrics against global targets.",
      "Produced regular reports with behaviour-based recommendations on content and community engagement for internal stakeholders.",
      "Supported Agile backlog prioritisation with Product Managers using data-backed reasoning for feature decisions.",
    ],
    skills: [
      SkillNames.SQL,
      SkillNames.EXCEL,
      SkillNames.AGILE,
      SkillNames.TABLEAU,
      SkillNames.DATAMODELLING,
    ],
  },
  {
    id: 3,
    startDate: "Nov 2019",
    endDate: "Sep 2021",
    title: "Business Strategy Lead / Analyst",
    company: "ApnaTime Inc (Sequoia-funded)",
    description: [
      "Contributed to CRM implementation at a Sequoia-funded startup, handling data migration and QA for customer record integrity.",
      "Documented functional requirements for data collection processes, creating consistent foundations for customer analysis.",
      "Mentored junior analysts on analytical thinking and data documentation, building team capability across the insights function.",
    ],
    skills: [
      SkillNames.EXCEL,
      SkillNames.SQL,
      SkillNames.SALESFORCE,
      SkillNames.AGILE,
      SkillNames.DATAMODELLING,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Your dashboards will look different.",
    "Only trained analysts can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your KPIs.",
    "Flipping to light mode... Are your eyes ready for this level of data clarity?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! My dashboards thank you, and my eyes too.",
    "Welcome back to the shadows. Dark mode is where the real analysis happens.",
    "Dark mode on! Finally, someone who understands true data sophistication.",
  ],
};
