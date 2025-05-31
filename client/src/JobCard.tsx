import { JobApplicationStatus} from "./Types"

//TODO: Change location from string to maps, or name location, oficial.
//TODO: Change company name to list of stored in database
export type JobCardProps = {
	jobTitle: string,
	companyName: string,
	location: string,
	appliedDate: Date,
	status: JobApplicationStatus,
	url: URL,
	description: string
}

export function JobCard({jobTitle, companyName, location, appliedDate, status, url, description} : JobCardProps) {

	const statusColorMap = {
		[JobApplicationStatus.Applied]: "text-blue-500",
		[JobApplicationStatus.Interviewing]: "text-yellow-500",
		[JobApplicationStatus.Offer]: "text-green-500",
		[JobApplicationStatus.Rejected]: "text-red-500",
		[JobApplicationStatus.None]: "text-gray-400",
		[JobApplicationStatus.Accepted]: "text-green-500"
	}


	return (
		<div className="min-w-fit max-w-2xl p-4 pt-1 border-2 rounded-lg hover:border-blue-400">
	
			<div className="flex pt-5 pb-3">
				<div className="flex flex-4">
					<h2 className="flex-1 text-3xl">
						{companyName}
					</h2>
					
					<div className="flex-2 text-3xl align-middle">
						{jobTitle}
					</div>
				</div>
				
				<div className="flex-1">
					<h3 className={`text-xl ${statusColorMap[status]} text-right`}>
						{status.valueOf()}
					</h3>
				</div>
			</div>
	
			<div className="line-clamp-3">
				{description}
			</div>
			
			<div className="pt-2 flex">
				<div className="flex-none">{location}</div>
				<div className="flex-1"></div>
				<div className="flex-none">{appliedDate.toLocaleDateString()}</div>
			</div>
		</div>
	)
}