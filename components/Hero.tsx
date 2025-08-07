export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-wedge-50 to-wedge-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                Let's play some <span className="text-primary">golf</span>
              </h1>
              <div className="mb-10">
                <ul className="list-disc list-inside space-y-2 text-xl md:text-2xl text-gray-700 font-medium text-left mx-auto lg:mx-0 max-w-md">
                  <li>Track your rounds</li>
                  <li>Follow your friends</li>
                  <li>Create tournaments &amp; matches</li>
                  <li>Track your stats</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://apps.apple.com/" 
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-wedge-600 transition-colors text-center"
                >
                  Download for iPhone
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-tertiary to-primary rounded-3xl p-1">
                <div className="bg-black rounded-3xl p-8 relative overflow-hidden">
                  {/* Mock phone interface with golf app */}
                  <div className="bg-white rounded-2xl p-4 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">W</span>
                        </div>
                        <span className="font-semibold text-sm">Wedge Golf</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Stats Card */}
                    <div className="bg-gradient-to-r from-wedge-50 to-wedge-100 rounded-xl p-4">
                      <div className="text-xs text-gray-600 mb-1">Today's Round</div>
                      <div className="flex items-baseline space-x-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">72</span>
                          <span className="text-xs text-gray-600 ml-1">strokes</span>
                        </div>
                        <div className="text-sm text-primary font-semibold">Par</div>
                      </div>
                      <div className="flex space-x-3 mt-3">
                        <div className="flex-1 text-center">
                          <div className="text-xs text-gray-500">Fairways</div>
                          <div className="font-semibold text-gray-900">71%</div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-xs text-gray-500">GIR</div>
                          <div className="font-semibold text-gray-900">61%</div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-xs text-gray-500">Putts</div>
                          <div className="font-semibold text-gray-900">28</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tournament Card */}
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-700">Weekend Tournament</span>
                        <span className="text-xs bg-tertiary text-white px-2 py-0.5 rounded-full">Live</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">1. John D.</span>
                          <span className="font-semibold">-3</span>
                        </div>
                        <div className="flex items-center justify-between text-xs bg-primary/10 rounded px-1 py-0.5">
                          <span className="text-gray-600">2. You</span>
                          <span className="font-semibold">E</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">3. Mike S.</span>
                          <span className="font-semibold">+2</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="flex space-x-2 pt-2">
                      <div className="flex-1 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-600">Feed</span>
                      </div>
                      <div className="flex-1 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-xs text-white font-semibold">Play</span>
                      </div>
                      <div className="flex-1 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-600">Stats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}