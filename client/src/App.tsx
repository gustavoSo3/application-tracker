import { JobEntryData, JobCard } from './JobCard';
import { JobInputForm } from './JobInputForm';
import { useState } from 'react';

function App() {
  //JobCardProps[]
  const [jobCards, setJobCards] = useState<JobEntryData[]>([]);

  function newJobCardCallBack(newJobCard: JobEntryData) {
    setJobCards([newJobCard, ...jobCards]);
  }

  function deleteJobCardCallBack(index: number) {
    setJobCards((prev) => prev.filter((_, i) => i !== index));
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
          <JobCard key={i} index={i} jobData={x} deleteCallBack={deleteJobCardCallBack} />
        ))}
      </div>
    </div>
  );
}

export default App;
