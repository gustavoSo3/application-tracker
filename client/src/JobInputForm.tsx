import React, { useState } from 'react';

import { JobApplicationStatus } from './Types';
import { JobCardProps } from './JobCard';

const defaultCard: JobCardProps = {
  jobTitle: '',
  companyName: '',
  location: '',
  appliedDate: new Date(''),
  status: JobApplicationStatus.None,
  url: '',
  description: '',
};

export function JobInputForm({
  submitCallback,
}: {
  submitCallback: (newJobCard: JobCardProps) => void;
}) {
  const [formData, setFormData] = useState<JobCardProps>(defaultCard);

  function updateFormData(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const name: string = event.target.name;
    let value: unknown = event.target.value;

    if (name === 'appliedDate') {
      value = new Date(value as string);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitEventHandler(event: React.FormEvent<HTMLFormElement>) {
    let isValid: boolean = true;

    console.log(formData);

    if (formData.jobTitle === '') isValid = false;
    if (formData.companyName === '') isValid = false;
    if (formData.status === JobApplicationStatus.None) isValid = false;
    if (formData.location === '') isValid = false;

    if (isValid) {
      submitCallback(formData);
    }

    event.preventDefault();
  }

  return (
    <div className="w-2xl p-5 border-gray-500 rounded-2xl border-2">
      <form onSubmit={submitEventHandler} className="flex flex-col">
        <div className="mb-5 flex flex-col [&>*]:pt-1.5 [&>*]:pb-1.5 [&>*]:pl-3 [&>*]:mt-1">
          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="jobTitle" className="p-0.5 flex-1 text-lg">
              Job Title *
            </label>
            <input
              required
              id="jobTitle"
              name="jobTitle"
              onChange={updateFormData}
              className="flex-2 pl-1"
              type="text"
              placeholder="Job title"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="companyName" className="p-0.5 flex-1 text-lg">
              Company Name *
            </label>
            <input
              required
              id="companyName"
              name="companyName"
              onChange={updateFormData}
              className="flex-2 pl-1"
              type="text"
              placeholder="Company Name"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="location" className="p-0.5 flex-1 text-lg">
              Location *
            </label>
            <input
              required
              id="location"
              name="location"
              onChange={updateFormData}
              className="flex-2 pl-1"
              type="text"
              placeholder="Location"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="appliedDate" className="p-0.5 flex-1 text-lg">
              Date
            </label>
            <input
              id="appliedDate"
              name="appliedDate"
              onChange={updateFormData}
              className="flex-2 pl-1"
              type="date"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="status" className="p-0.5 flex-1 text-lg">
              Status *
            </label>
            <select
              required
              id="status"
              name="status"
              onChange={updateFormData}
              className="flex-2 pl-1"
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
            <input
              id="url"
              name="url"
              onChange={updateFormData}
              className="flex-2 pl-1"
              type="text"
              placeholder="URL"
            />
          </div>

          <div className="border-1 border-gray-400 rounded-sm flex">
            <label htmlFor="description" className="p-0.5 flex-1 text-lg">
              Notes
            </label>
            <textarea
              id="description"
              name="description"
              onChange={updateFormData}
              className="flex-2 border-1 border-dotted border-gray-200 pl-1"
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
