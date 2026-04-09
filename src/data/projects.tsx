import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiPython,
  SiPostgresql,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";
import { TbChartBar, TbBrain, TbDatabase } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Project
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  vader: {
    title: "VADER",
    bg: "black",
    fg: "white",
    icon: <TbBrain />,
  },
  textblob: {
    title: "TextBlob",
    bg: "black",
    fg: "white",
    icon: <TbBrain />,
  },
  powerbi: {
    title: "Power BI",
    bg: "black",
    fg: "white",
    icon: <TbChartBar />,
  },
  sql: {
    title: "SQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  nlp: {
    title: "NLP",
    bg: "black",
    fg: "white",
    icon: <TbBrain />,
  },
  matplotlib: {
    title: "Matplotlib",
    bg: "black",
    fg: "white",
    icon: <TbChartBar />,
  },
  dax: {
    title: "DAX",
    bg: "black",
    fg: "white",
    icon: <TbDatabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: "ces-sentiment",
    category: "NLP & Sentiment Analysis",
    title: "CES Sentiment Analysis Platform",
    src: "/assets/projects-screenshots/ces-sentiment/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.powerbi,
        PROJECT_SKILLS.matplotlib,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.vader,
        PROJECT_SKILLS.textblob,
        PROJECT_SKILLS.nlp,
      ],
    },
    live: "",
    github: "https://github.com/karthik-rudrappa/ces-sentiment-analysis",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            11,000+ customer feedback responses × 2 sentiment models = actionable insights
          </TypographyP>
          <TypographyP className="font-mono ">
            Built a multi-layered NLP platform analysing Customer Effort Score feedback
            using VADER and TextBlob sentiment models. The platform generates 34+
            production-ready visualizations across general CES, installation, and
            loyalty domains — turning mountains of raw text into strategic intelligence.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Keyword Discovery</TypographyH3>
          <p className="font-mono mb-2">
            Implemented a data-driven keyword discovery algorithm that automatically
            extracts top 20 keywords and identifies contextual keyword pairs
            (e.g., &quot;installation + delay&quot;), revealing cross-department issues where
            180 installation complaints were misrouted to Customer Service.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/ces-sentiment/landing.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Performance Analysis</TypographyH3>
          <p className="font-mono mb-2">
            Developed bell curve statistical analysis identifying a 4.25-point
            performance gap between best (6.47) and worst (2.22) advisors,
            uncovering quality control issues where Install department showed
            bimodal distribution indicating inconsistent contractor performance.
          </p>
        </div>
      );
    },
  },
  {
    id: "churn-prediction",
    category: "Machine Learning",
    title: "Customer Churn Prediction Model",
    src: "/assets/projects-screenshots/churn-prediction/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.jupyter,
        PROJECT_SKILLS.matplotlib,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.sklearn,
      ],
    },
    // TODO: Add your project links here
    // live: "https://your-project-url.com",
    // github: "https://github.com/karthik-rudrappa/churn-prediction",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predicting customer churn before it happens — 82% accuracy
          </TypographyP>
          <TypographyP className="font-mono ">
            Built a machine learning classification model using Logistic Regression
            and Random Forest to predict customer churn probability based on contract
            tenure, monthly charges, and support ticket frequency. The model helps
            proactively identify at-risk customers before they leave.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>82% accuracy</strong> on test dataset — strong predictive performance
              for identifying at-risk customers.
            </li>
            <li className="font-mono">
              <strong>Feature importance analysis</strong> revealed contract tenure,
              monthly charges, and support ticket count as top churn predictors.
            </li>
            <li className="font-mono">
              Compared <strong>Logistic Regression vs Random Forest</strong> models
              with cross-validation for robust evaluation.
            </li>
            <li className="font-mono">
              Generated <strong>confusion matrix and ROC curve</strong> visualizations
              for model performance assessment.
            </li>
          </ul>
          <SlideShow
            images={[`${BASE_PATH}/churn-prediction/landing.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "rfm-analysis",
    category: "Customer Analytics",
    title: "Customer Segmentation & RFM Analysis",
    src: "/assets/projects-screenshots/rfm-analysis/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.powerbi,
        PROJECT_SKILLS.dax,
      ],
      backend: [
        PROJECT_SKILLS.sql,
        PROJECT_SKILLS.postgres,
      ],
    },
    // TODO: Add your project links here
    // live: "https://your-project-url.com",
    // github: "https://github.com/karthik-rudrappa/rfm-analysis",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Champions, At-Risk, Hibernating — know your customers by name
          </TypographyP>
          <TypographyP className="font-mono ">
            Performed RFM (Recency, Frequency, Monetary) analysis on a retail dataset
            using SQL window functions to segment customers into actionable groups.
            Visualized segments in an interactive Power BI dashboard to help marketing
            teams target specific customer cohorts effectively.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Segmentation Strategy</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Champions:</strong> High-value, frequent, recent buyers — reward and retain.
            </li>
            <li className="font-mono">
              <strong>At-Risk:</strong> Previously active customers showing declining engagement — 
              trigger re-engagement campaigns.
            </li>
            <li className="font-mono">
              <strong>Hibernating:</strong> Long-dormant customers — analyse if reactivation
              is cost-effective.
            </li>
          </ul>
          <SlideShow
            images={[`${BASE_PATH}/rfm-analysis/landing.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Technical Approach</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              SQL window functions (NTILE, ROW_NUMBER) for RFM score calculation.
            </li>
            <li className="font-mono">
              Interactive <strong>Power BI dashboard</strong> with drill-through
              capabilities for segment exploration.
            </li>
            <li className="font-mono">
              DAX measures for dynamic KPI cards showing segment sizes, average
              monetary values, and retention rates.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
