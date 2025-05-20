import { JobApplicationStatus} from "./Types"

import { JobCardProps , JobCard} from "./JobCard"

function App() {

		const jobCards: JobCardProps[] = [
		{
			jobTitle: "Frontend Engineer",
			companyName: "Apple Inc.",
			location: "Cupertino, CA",
			appliedDate: new Date("2025-05-01"),
			status: JobApplicationStatus.Applied,
			url: new URL("https://jobs.apple.com"),
			description: "Building responsive UIs with React and TypeScript for iCloud dashboard team. Focus on accessibility and performance."
		},
		{
			jobTitle: "Backend Developer",
			companyName: "Google",
			location: "Remote",
			appliedDate: new Date("2025-04-28"),
			status: JobApplicationStatus.Interviewing,
			url: new URL("https://careers.google.com"),
			description: "Working with Go and gRPC to scale internal APIs for Google Docs. Role includes incident response rotations and architecture reviews."
		},
		{
			jobTitle: "DevOps Engineer",
			companyName: "GitHub",
			location: "San Francisco, CA",
			appliedDate: new Date("2025-05-10"),
			status: JobApplicationStatus.None,
			url: new URL("https://github.com/about/careers"),
			description: "Maintaining CI/CD pipelines using GitHub Actions, Terraform, and Kubernetes. Focused on developer tooling and platform reliability."
		},
		{
			jobTitle: "Full Stack Developer",
			companyName: "Amazon",
			location: "New York, NY",
			appliedDate: new Date("2025-04-20"),
			status: JobApplicationStatus.Rejected,
			url: new URL("https://amazon.jobs"),
			description: "Built end-to-end features for internal inventory management system using React, Node.js, and DynamoDB. Focused on scalability."
		},
		{
			jobTitle: "Software Engineer Intern",
			companyName: "Stripe",
			location: "Seattle, WA",
			appliedDate: new Date("2025-05-15"),
			status: JobApplicationStatus.Offer,
			url: new URL("https://stripe.com/jobs"),
			description: "Summer internship working with Stripe’s Developer Experience team. Project includes building a CLI tool with Rust and TypeScript."
		}
	]

	return (
		<div className="flex flex-col">
			{
				jobCards.map((x, i) => 
					<JobCard key={i} {...x}/>
				)
			}
		</div>
	)
}

export default App