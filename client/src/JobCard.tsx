import { JobApplicationStatus } from './Types';

//TODO: Change location from string to maps, or name location, oficial.
//TODO: Change company name to list of stored in database
export type JobEntryData = {
  jobTitle: string;
  companyName: string;
  location: string;
  appliedDate: Date;
  status: JobApplicationStatus;
  url: string;
  description: string;
};

export function JobCard({
  jobData,
  deleteCallBack,
  index,
}: {
  jobData: JobEntryData;
  deleteCallBack: (index: number) => void;
  index: number;
}) {
  const statusColorMap = {
    [JobApplicationStatus.Applied]: 'text-blue-500',
    [JobApplicationStatus.Interviewing]: 'text-yellow-500',
    [JobApplicationStatus.Offer]: 'text-green-500',
    [JobApplicationStatus.Rejected]: 'text-red-500',
    [JobApplicationStatus.None]: 'text-gray-400',
    [JobApplicationStatus.Accepted]: 'text-green-500',
  };

  function onDeleteClick() {
    deleteCallBack(index);
  }

  return (
    <div className="w-2xl p-4 pt-1 border-2 rounded-lg hover:border-blue-400">
      <div className="flex pt-5 pb-3">
        <div className="flex flex-4">
          <h2 className="flex-1 text-3xl">{jobData.companyName}</h2>

          <div className="flex-2 text-3xl align-middle">{jobData.jobTitle}</div>
        </div>

        <div className="flex-1">
          <h3 className={`text-xl ${statusColorMap[jobData.status]} text-right`}>
            {jobData.status.valueOf()}
          </h3>
        </div>
      </div>

      <div className="line-clamp-3">{jobData.description}</div>

      <div className="pt-2 flex">
        <div className="flex-none">{jobData.location}</div>
        <div className="flex-1"></div>
        <div className="flex-none flex gap-2">
          {jobData.appliedDate.toLocaleDateString()}
          <div className="border-2 rounded-lg border-black hover:bg-red-500">
            <button>
              <svg
                className="inline w-8 h-8 hover:text-white hover:fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
