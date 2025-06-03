import { JobEntryData, JobCard } from './JobCard';
import { JobInputForm } from './JobInputForm';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    const storedJobCards = localStorage.getItem('data');

    if (storedJobCards !== null) {
      const storedEntries = JSON.parse(storedJobCards) as JobEntryData[];

      storedEntries.forEach((jobEntry) => {
        jobEntry.appliedDate = new Date(jobEntry.appliedDate);
      });
      setJobCards(storedEntries);
    }
  }, []);

  const [jobCards, setJobCards] = useState<JobEntryData[]>([]);

  //TODO:Update to use maybe a controller class to handle dabase connection
  function updateLocalStorage(data: JobEntryData[]) {
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
  }

  function createJobCardCallBack(newJobCard: JobEntryData) {
    const newData: JobEntryData[] = [newJobCard, ...jobCards];
    setJobCards(newData);
    updateLocalStorage(newData);
  }

  function deleteJobCardCallBack(index: number) {
    const newData: JobEntryData[] = jobCards.filter((_, i) => i !== index);
    setJobCards(newData);
    updateLocalStorage(newData);
  }

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-4xl">Job application tracker</h1>
        </div>
        <JobInputForm submitCallback={createJobCardCallBack} />
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
