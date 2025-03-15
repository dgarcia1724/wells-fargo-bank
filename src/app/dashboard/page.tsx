export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-wf-red p-4">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Summary Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
            <div className="space-y-4">
              {/* Account summary content will go here */}
            </div>
          </div>

          {/* Recent Transactions Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {/* Transactions list will go here */}
            </div>
          </div>

          {/* Graphs Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="space-y-4">{/* Graphs will go here */}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
