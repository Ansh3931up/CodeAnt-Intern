import { Search, RefreshCw, Plus } from 'lucide-react'

interface Repository {
  name: string
  isPublic: boolean
  language: string
  size: number
  updatedAt: string
}

const repositories: Repository[] = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: 7320,
    updatedAt: "1 day ago"
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: 5871,
    updatedAt: "2 days ago"
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: 4521,
    updatedAt: "5 days ago"
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: 3096,
    updatedAt: "3 days ago"
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: 6210,
    updatedAt: "6 days ago"
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    size: 1876,
    updatedAt: "4 days ago"
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: 5432,
    updatedAt: "7 days ago"
  }
]

const languageColors: Record<string, string> = {
  React: "bg-blue-400",
  Javascript: "bg-yellow-400",
  Python: "bg-green-400",
  Swift: "bg-orange-400",
  Java: "bg-red-400",
  "HTML/CSS": "bg-purple-400",
  PHP: "bg-indigo-400"
}

export default function RepositoryList() {
  return (
    <div className="min-h-screen lg:h-full lg:p-6">
      <div className={`
        lg:bg-white lg:rounded-xl lg:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] 
        lg:border lg:border-gray-200 lg:overflow-hidden
      `}>
        <div className="flex flex-col">
          {/* Header Section */}
          <div className="bg-white lg:border-b lg:border-gray-200">
            <div className="px-4 lg:px-6 py-5 flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div>
                  <h1 className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Repositories</h1>
                  <p className="text-gray-700 text-sm font-normal font-['Inter'] leading-tight">33 total repositories</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-3 py-2 lg:px-3.5 lg:py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-zinc-300 flex items-center gap-1">
                    <RefreshCw className="w-5 h-5" />
                    <span className="text-gray-700 text-sm font-normal font-['Inter']">Refresh All</span>
                  </button>
                  <button className="px-3 py-2 lg:px-3.5 lg:py-2.5 bg-blue-600 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-white flex items-center gap-1">
                    <Plus className="w-5 h-5" />
                    <span className="text-sm font-normal font-['Inter']">Add Repository</span>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search Repositories"
                  className="w-full lg:w-96 px-3.5 py-2.5 pl-12 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-zinc-300 text-gray-700 text-base font-normal font-['Inter']"
                />
              </div>
            </div>
          </div>

          {/* Repository List */}
          <div className="bg-white">
            {repositories.map((repo) => (
              <div 
                key={repo.name}
                className="py-4 lg:py-6 px-4 lg:px-6 border-b border-zinc-300 hover:bg-neutral-100 transition-colors"
              >
                <div className="flex-col gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-gray-900 text-lg lg:text-xl font-medium font-['Inter'] leading-normal">{repo.name}</h2>
                    <div className="pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200">
                      <span className="text-center text-blue-700 text-sm font-normal font-['Inter']">
                        {repo.isPublic ? 'Public' : 'Private'}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 lg:gap-10 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 text-sm lg:text-base font-normal font-['Inter']">{repo.language}</span>
                      <div className={`w-2 h-2 rounded-full ${languageColors[repo.language]}`} />
                    </div>
                    <div className="text-gray-900 text-sm lg:text-base font-normal font-['Inter']">
                      {repo.size} KB
                    </div>
                    <div className="text-gray-900 text-sm lg:text-base font-normal font-['Inter']">
                      Updated {repo.updatedAt}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

