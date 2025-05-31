import React from 'react';

import { JobApplicationStatus } from './Types';
import { JobCardProps } from './JobCard';

export function JobInputForm({
  submitCallback,
}: {
  submitCallback: (newJobCard: JobCardProps) => void;
}) {
  function submitEventHandler(event: React.FormEvent<HTMLFormElement>) {
    const newJob: JobCardProps = {
      jobTitle: 'Junior Developer',
      companyName: 'TestCorp',
      location: 'Remote',
      appliedDate: new Date('2025-06-01'),
      status: JobApplicationStatus.Applied,
      url: new URL('https://testcorp.dev/careers/junior-dev'),
      description: 'Test position to validate the component and form logic.',
    };
    console.log(newJob);
    submitCallback(newJob);
    event.preventDefault();
  }

  return (
    <div className="w-2xl p-5 border-gray-500 rounded-2xl border-2">
      <form onSubmit={submitEventHandler} className="flex flex-col">
        <div className="mb-5 flex flex-col [&>*]:pt-1.5 [&>*]:pb-1.5 [&>*]:pl-3 [&>*]:mt-1">
          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="job-title" className="p-0.5 flex-1 text-lg">
              Job Title
            </label>
            <input
              id="job-title"
              name="job-title"
              className="flex-2"
              type="text"
              placeholder="Job title"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="company-name" className="p-0.5 flex-1 text-lg">
              Company Name
            </label>
            <input
              id="company-name"
              name="company-name"
              className="flex-2"
              type="text"
              placeholder="Company Name"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="location" className="p-0.5 flex-1 text-lg">
              Location
            </label>
            <input
              id="location"
              name="location"
              className="flex-2"
              type="text"
              placeholder="Location"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="date" className="p-0.5 flex-1 text-lg">
              Date
            </label>
            <input id="date" name="date" className="flex-2" type="date" />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="status" className="p-0.5 flex-1 text-lg">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="flex-2"
              defaultValue={JobApplicationStatus.None}
            >
              {Object.values(JobApplicationStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="url" className="p-0.5 flex-1 text-lg">
              URL
            </label>
            <input id="url" name="url" className="flex-2" type="url" placeholder="URL" />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="description" className="p-0.5 flex-1 text-lg">
              Notes
            </label>
            <textarea
              id="description"
              name="description"
              className="flex-2 border-1 border-dotted border-gray-200"
              cols={50}
              rows={8}
              placeholder="Something you need to remember?"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Add to list"
          className="text-xl p-2 bg-blue-400 border-blue-700 hover:bg-blue-600 hover:text-white border-1 rounded-4xl"
        />
      </form>
    </div>
  );
}
