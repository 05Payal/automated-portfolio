
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Test Engineer",
    company: "Sun Life Financial",
    period: "2023 - 2024",
    description: "Conducted manual testing for TCS' BANCS product at Sun Life Insurance in Canada and the UK, focusing on BFSI test cases. Skillfully executed test cases, including positive and negative scenarios, and reported defects in Devplus when necessary.",
    achievements: [
      "Profound understanding and analysis of customer requirements",
      "Active participation in requirement analysis, test case design, and development",
      "Diligent execution of the system test suite, ensuring comprehensive testing coverage",
      "Proficient management of defect tracking and reporting, with a dedicated focus on reviewing and monitoring deliverables",
      "Skillful design and execution of test cases, meticulously aligned with functional specifications",
      "Expertise in conducting Functional Testing, with a thorough examination of all aspects of the application"
    ],
    tags: ["Functional Testing", "BFSI", "Defect Management", "Manual Testing"],
    logo: "/lovable-uploads/9434bf16-897a-48ad-bd23-0d8e459ad21a.png"
  },
  {
    role: "QA Engineer",
    company: "Hitachi Energy",
    period: "2022 - 2023",
    description: "Successfully led a scratch development project, creating a comprehensive order application featuring distinct user roles. Conducted thorough testing to validate each functionality of the application.",
    achievements: [
      "Developing a robust testing framework using TestNG, Selenium, and Java to streamline the testing process",
      "In progress automated the application, enhancing efficiency and accuracy while thoroughly evaluating its functionality",
      "Proficiently conducting a spectrum of essential testing types, including integration, regression, functional, User Acceptance Testing (UAT), and sanity testing, ensuring comprehensive software validation",
      "Demonstrated a methodical approach by meticulously crafting and executing a comprehensive test plan, and meticulously creating and implementing test cases to validate system functionality"
    ],
    tags: ["TestNG", "Selenium", "Java", "Automation Framework", "UAT"],
    logo: "/lovable-uploads/258745cf-aa1e-4ebc-924e-46746d53bc43.png"
  },
  {
    role: "QA Analyst",
    company: "Citi Bank",
    period: "2021 - 2022",
    description: "Worked on various functional changes for Citibank account opening application. Updated application functionality and verified changes through comprehensive testing.",
    achievements: [
      "Automated Regression Scripts using BDD Cucumber",
      "Designed and reviewed test cases for critical banking functions",
      "Performed Functionality, Sanity, UAT, and Regression Testing",
      "Collaborated with developers to address technical issues and track bugs"
    ],
    tags: ["BDD Cucumber", "Regression Testing", "UAT", "Banking Domain"],
    logo: "/lovable-uploads/3610bda2-e848-48f0-a7e2-90b709be7f21.png"
  },
  {
    role: "Quality Engineering Analyst",
    company: "Westpac",
    period: "2020 - 2021",
    description: "Collaborated with the Scrum team at this Australian multinational banking and financial services company to create detailed test plans, test sets, and execute test cases in JIRA.",
    achievements: [
      "Collaborated with the Scrum team to create detailed test plans, test sets, and execute test cases in JIRA, ensuring accurate tracking of test progress and outcomes",
      "Developed a hybrid framework (keyword + data-driven) for automating tests on an Appian-based application, improving efficiency and reusability of scripts",
      "Prepared and executed automated test cases across multiple environments to validate software performance and functionality",
      "Used Bitbucket to manage repositories, track changes, and maintain version control of test scripts and related assets",
      "Ran test scripts via command-line operations, streamlining automation processes, and ensured accurate results were captured through Seleniumbox",
      "Generated and analyzed test closure reports, providing comprehensive feedback on test coverage and software quality",
      "Coordinated with developers to resolve issues identified during automated testing, enhancing the overall quality and reliability of the software",
      "Validated the pipeline by running tests and monitoring the output through the Jenkins console to ensure successful execution"
    ],
    tags: ["Appian", "JIRA", "Bitbucket", "Hybrid Framework", "Banking"],
    logo: "/lovable-uploads/7bedda01-3e8d-43ce-a310-753036ebc425.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Work Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Over the past 5 years, I've worked across various domains including Banking, Insurance, and Manufacturing,
          building extensive expertise in quality assurance and test automation.
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-muted bg-white flex items-center justify-center p-1">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
