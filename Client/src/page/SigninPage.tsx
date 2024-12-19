import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.svg"
import githubIcon from "../assets/github.svg"
import bitbucketIcon from "../assets/bitbucket.svg"
import azureIcon from "../assets/azure.svg"
import gitlabIcon from "../assets/gitlab.svg"
import chartIcon from "../assets/chart.svg"
import ssoIcon from "../assets/key.svg"
import largeLogo from "../assets/lgLogo.png"
// import { Button } from "@/components/ui/button"

export default function SigninPage() {
  const [deploymentType, setDeploymentType] = useState<'saas' | 'self-hosted'>('saas')

  const saasProviders = [
    { name: 'Github', icon: githubIcon },
    { name: 'Bitbucket', icon: bitbucketIcon },
    { name: 'Azure Devops', icon: azureIcon },
    { name: 'GitLab', icon: gitlabIcon }
  ]

  const selfHostedProviders = [
    { name: 'Self Hosted GitLab', icon: gitlabIcon },
    { name: 'Sign in with SSO', icon: ssoIcon }
  ]

  const renderAuthButtons = () => {
    const providers = deploymentType === 'saas' ? saasProviders : selfHostedProviders
    return providers.map((provider) => (
      <div 
        key={provider.name}
        className="w-full max-w-[384px] h-14 px-4 sm:px-8 md:px-12 lg:px-16 py-4 bg-white rounded-lg border border-gray-300 justify-center items-center gap-4 inline-flex hover:bg-gray-50"
      >
        
          <img src={provider.icon} className="w-5 h-5" alt={`${provider.name} icon`} />
        
        <div className="text-neutral-900 text-sm font-normal font-['Inter'] whitespace-nowrap">
          Sign in with {provider.name}
        </div>
      </div>
    ))
  }

  return (
    <div className="flex h-screen">
      {/* Left Half - Stats Section */}
      <div className="hidden lg:flex w-1/2 bg-white border-r border-gray-200 flex-col justify-center items-center relative">
        <div className="w-96 flex-col justify-between items-center flex">
          <div className="w-96 h-80 relative">
            {/* Top Stats Card */}
            <div className="w-96 h-44 left-0 top-0 absolute">
              <div className="w-96 h-44 left-0 top-0 absolute bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)]">
                <div className="left-[22px] top-[21px] absolute justify-start items-center gap-2 inline-flex">
                <img src={logo} alt="CodeAnt AI Logo" className="h-8 w-8" />
                  <div className="text-slate-900 text-lg font-bold font-['Inter'] leading-relaxed">

                    AI to Detect & Autofix Bad Code
                  </div>
                </div>
                <div className="w-96 h-px left-0 top-[72px] absolute border border-slate-200" />
                
                {/* Stats Grid */}
                <div className="absolute top-[94.50px] w-full px-5">
                  <div className="grid grid-cols-3">
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-slate-900 text-lg font-bold font-['Inter'] leading-relaxed">30+</div>
                      <div className="text-neutral-900 text-sm font-normal font-['Inter'] whitespace-nowrap">Language Support</div>
                    </div>
                    <div className="flex-col justify-center items-center inline-flex">
                      <div className="text-slate-900 text-lg font-bold font-['Inter'] leading-relaxed">10K+</div>
                      <div className="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">Developers</div>
                    </div>
                    <div className="flex-col justify-center items-center inline-flex">
                      <div className="text-slate-900 text-lg font-bold font-['Inter'] leading-relaxed">100K+</div>
                      <div className="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">Hours Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Card */}
            <div className="w-64 h-40 left-[204px] top-[158px] absolute">
              <div className="w-64 h-40 left-0 top-0 absolute bg-white rounded-3xl shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)]">
                <div className="w-52 h-32 left-[31.83px] top-[15.21px] absolute">
                  <div className="w-14 h-14 left-0 top-0 absolute">
                    <div className="w-14 h-14 left-0 top-0 absolute bg-violet-400/25 rounded-full" />
                    <img src={chartIcon} className="w-7 h-7 left-[14px] top-[13.18px] absolute" alt="" />
                  </div>
                  <div className="w-16 h-10 left-[139px] top-[9.12px] absolute">
                    <div className="text-blue-700 text-sm font-bold font-['Inter'] leading-tight">↑ 14%</div>
                    <div className="text-neutral-900 text-xs font-normal font-['Inter'] leading-none mt-2">This week</div>
                  </div>
                  <div className="w-28 h-16 left-[2px] top-[72.99px] absolute">
                    <div className="text-neutral-900 text-sm font-bold font-['Inter'] leading-tight">Issues Fixed</div>
                    <div className="text-slate-900 text-3xl font-bold font-['Inter'] leading-loose mt-2">500K+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Logo in bottom left */}
        <div className="absolute bottom-0 left-0">
          <img 
            src={largeLogo} 
            alt="CodeAnt AI Large Logo" 
            className="w-64 h-64 "
          />
        </div>
      </div>

      {/* Right Half - Sign In Section */}
      <div className="w-full lg:w-1/2 p-6 bg-neutral-50 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[480px] bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-gray-200 flex-col justify-start items-start flex overflow-hidden">
          <div className="self-stretch px-6 py-9 border-b border-zinc-300 flex-col justify-start items-start gap-5 flex">
            <div className="h-32 flex flex-col w-full justify-center items-center gap-9 ">
              <div className="inline-flex justify-center items-center w-full gap-3.5 ">
                <img src={logo} alt="CodeAnt AI Logo" className="h-8 w-8" />
                <div className="text-gray-900 text-3xl font-normal font-satoshi leading-loose">CodeAnt AI</div>
              </div>
              <div className="text-gray-900 text-3xl mx-auto font-semibold font-['Inter'] text-center leading-10">Welcome to CodeAnt AI</div>
            </div>

            {/* Deployment Type Toggle */}
            <div className="self-stretch bg-neutral-50 rounded-lg border border-gray-200 justify-start items-center gap-0.5 inline-flex">
              <button 
                onClick={() => setDeploymentType('saas')}
                className={`grow shrink basis-0 h-14 px-3.5 py-4 rounded-lg justify-center items-center gap-1 flex overflow-hidden ${
                  deploymentType === 'saas' 
                    ? 'bg-blue-600 text-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border-2 border-white' 
                    : 'text-gray-700'
                }`}
              >
                <div className="text-xl font-semibold font-['Inter'] leading-7">SAAS</div>
              </button>
              <button 
                onClick={() => setDeploymentType('self-hosted')}
                className={`grow shrink basis-0 h-14 px-3 py-4 rounded-lg justify-center items-center gap-2 flex overflow-hidden ${
                  deploymentType === 'self-hosted' 
                    ? 'bg-blue-600 text-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border-2 border-white' 
                    : 'text-gray-700'
                }`}
              >
                <div className="text-xl font-semibold font-['Inter'] leading-7">Self Hosted</div>
              </button>
            </div>
          </div>

          {/* Sign In Buttons */}
          <div className="self-stretch bg-white py-6 px-4 flex-wrap flex-col justify-center items-center gap-4 inline-flex">
            {renderAuthButtons()}
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="self-stretch text-center">
          <span className="text-gray-900 text-base font-normal font-['Inter'] leading-normal">
            By signing up you agree to the{" "}
          </span>
          <Link to="/privacy" className="text-gray-900 text-base font-bold font-['Inter'] leading-normal hover:underline">
            Privacy Policy
          </Link>
          <span className="text-gray-900 text-base font-normal font-['Inter'] leading-normal">.</span>
        </div>
      </div>
    </div>
  )
}
