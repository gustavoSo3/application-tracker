export function URLJobGrabber() {
  return (
    <div className="w-2xl p-5 border-gray-500 rounded-2xl border-2">
      <h3 className="text-xl mt-1 mb-1 text-center">Get the job data, ust paste the URL</h3>
      <div className="border-1 border-gray-400 rounded-sm flex text-lg">
        <input id="job_post_url" placeholder="Job posting URL" type="url" className="flex-2 pl-1" />
      </div>
    </div>
  );
}
