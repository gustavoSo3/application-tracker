import { JobApplicationStatus } from './Types';

import { JobCardProps, JobCard } from './JobCard';
import { JobInputForm } from './JobInputForm';
import { useState } from 'react';

function App() {
  //JobCardProps[]
  const [jobCards, setJobCards] = useState<JobCardProps[]>([]);

  function newJobCardCallBack(newJobCard: JobCardProps) {
    setJobCards([newJobCard, ...jobCards]);
  }

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-4xl">Job application tracker</h1>
        </div>
        <JobInputForm submitCallback={newJobCardCallBack} />
      </div>
      <div className="flex flex-col gap-2">
        {jobCards.map((x, i) => (
          <JobCard key={i} {...x} />
        ))}
      </div>
    </div>
  );
}

export default App;
