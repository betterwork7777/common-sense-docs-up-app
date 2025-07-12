export default function Home() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">N-400 Citizenship Application</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input type="text" name="fullName" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block font-semibold">Date of Birth</label>
          <input type="date" name="dob" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block font-semibold">Country of Birth</label>
          <input type="text" name="birthCountry" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  );
}
