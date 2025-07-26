export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧠 AI Tutorial Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform any GitHub repository into comprehensive, structured tutorials with AI-powered analysis and beautiful documentation.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📦 Repository Input
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub Repository URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username/repository"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tutorial Tone
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Educational</option>
                    <option>Technical</option>
                    <option>Conversational</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium">
                  🚀 Generate Tutorial
                </button>
              </div>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                ✨ Features
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Chapter-based structure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Flow diagrams (Mermaid)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">SEO-optimized output</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Multiple export formats</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">AI-powered analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Section (Placeholder) */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📊 Generation Status
          </h3>
          <div className="bg-gray-50 rounded-md p-4">
            <p className="text-gray-600 text-center">
              Ready to generate your first tutorial! Enter a GitHub repository URL above to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}