import { FaRegTrashAlt } from 'react-icons/fa';

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
      <div className="flex pt-2 pb-3">
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

      <div className="line-clamp-3 text-justify">{jobData.description}</div>

      <div className="pt-2 flex">
        <div className="flex-none">{jobData.location}</div>
        <div className="flex-1"></div>
        <div className="flex-none flex gap-2">
          {jobData.appliedDate === null ? '' : jobData.appliedDate.toLocaleDateString()}

          <div className="border-2 rounded-lg border-black hover:bg-red-500 hover:text-white hover:fill-current">
            <button onClick={onDeleteClick} className="w-full h-full">
              <FaRegTrashAlt className="p-0.5 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
