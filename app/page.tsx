
import { ArrowRight, BarChart, Briefcase, CheckCircle, ChevronRight, DollarSign, Feather, Globe, Heart, Zap } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-lg hover:border-gray-500/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 bg-gray-800/60 rounded-full border border-gray-600/50 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PricingCard = ({ plan, price, features, highlighted }: { plan: string, price: string, features: string[], highlighted?: boolean }) => (
  <div className={`p-8 rounded-3xl border ${highlighted ? 'border-indigo-500 bg-gray-800/50' : 'border-gray-700/50 bg-gray-900/50'} backdrop-blur-md shadow-2xl flex flex-col`}>
    <h3 className="text-2xl font-semibold text-gray-100">{plan}</h3>
    <p className="mt-4 text-4xl font-bold tracking-tight text-white">{price}<span className="text-base font-medium text-gray-400">/mo</span></p>
    <p className="mt-1 text-gray-400">Billed monthly</p>
    <ul role="list" className="mt-8 space-y-4 text-gray-300 flex-grow">
      {features.map((feature) => (
        <li key={feature} className="flex items-center">
          <CheckCircle className="h-5 w-5 text-indigo-400 mr-3" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#" className={`mt-10 block w-full text-center px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${highlighted ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'}`}>
      Get Started
    </a>
  </div>
);

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans antialiased">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1IDI1NSAyNTUgMC4wNSkiPgo8cGF0aCBkPSJNMCAuNWgzMm0tMTYgMzFWMCIvPgo8L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10">
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Feather className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold tracking-tight text-gray-100">LaunchMVP</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Log in</a>
              <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg flex items-center">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section className="text-center py-20 sm:py-32 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="inline-flex items-center justify-center px-4 py-1 mb-6 text-sm font-medium tracking-wide text-indigo-300 bg-indigo-900/50 rounded-full">
                The #1 boilerplate for modern SaaS
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6">
                Ship your MVP in days, not weeks
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Everything you need to build and launch a modern SaaS application. Powered by Next.js, Tailwind, and Stripe. Focus on your product, not the boilerplate.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#pricing" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-xl flex items-center">
                  Get Started Now <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#" className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 border border-gray-600/50 flex items-center">
                  Learn More
                </a>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-100">Everything you need. Nothing you don't.</h2>
                <p className="mt-4 text-lg text-gray-400">Focus on your product, we've handled the rest.</p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard 
                  icon={<Zap className="w-6 h-6 text-indigo-400" />} 
                  title="Next.js 14 & App Router" 
                  description="The latest in React and server-side rendering for optimal performance and developer experience." 
                />
                <FeatureCard 
                  icon={<DollarSign className="w-6 h-6 text-green-400" />} 
                  title="Stripe Integration" 
                  description="Pre-built subscription logic and checkout flows to start monetizing your application instantly." 
                />
                <FeatureCard 
                  icon={<Briefcase className="w-6 h-6 text-blue-400" />} 
                  title="Component Library" 
                  description="Beautifully designed, accessible components using TailwindCSS and Shadcn/UI." 
                />
                <FeatureCard 
                  icon={<BarChart className="w-6 h-6 text-yellow-400" />} 
                  title="Built-in Analytics" 
                  description="Track user behavior and product metrics with pre-configured analytics to make data-driven decisions." 
                />
                <FeatureCard 
                  icon={<Heart className="w-6 h-6 text-red-400" />} 
                  title="User-friendly Auth" 
                  description="Simple and secure authentication flow with social providers, right out of the box."
                />
                <FeatureCard 
                  icon={<Globe className="w-6 h-6 text-teal-400" />} 
                  title="Global Deployment" 
                  description="Deploy your application to the edge in seconds with Vercel for a seamless, worldwide presence."
                />
              </div>
            </div>
          </section>
          
          <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-100">Fair & Simple Pricing</h2>
                  <p className="mt-4 text-lg text-gray-400">Choose the plan that's right for you.</p>
                </div>
                <div className="mt-16 grid max-w-lg gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
                    <PricingCard 
                        plan="Hobby"
                        price="$12"
                        features={['5 Projects', 'Up to 100 users', 'Basic Analytics', '48-hour Support']}
                    />
                    <PricingCard 
                        plan="Pro"
                        price="$29"
                        features={['Unlimited Projects', 'Up to 1,000 users', 'Advanced Analytics', 'Priority Support', 'API Access']}
                        highlighted
                    />
                    <PricingCard 
                        plan="Enterprise"
                        price="Custom"
                        features={['Dedicated Infrastructure', 'Custom Integrations', '24/7/365 Support', 'Dedicated Account Manager']}
                    />
                </div>
            </div>
          </section>

          <section id="testimonials" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-100">Loved by developers, trusted by founders</h2>
              <p className="mt-4 text-lg text-gray-400">Hear what our early adopters are saying.</p>
              <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                <blockquote className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg">
                  <p className="text-lg text-gray-300">"This boilerplate saved me at least 4 weeks of development time. It's incredibly well-structured and easy to customize. A must-have for any new SaaS project!"</p>
                  <footer className="mt-6">
                    <div className="flex items-center justify-center">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar"/>
                        <div>
                            <p className="font-semibold text-gray-100">Sarah Dayan</p>
                            <p className="text-sm text-gray-400">Founder of Acme Inc.</p>
                        </div>
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg">
                  <p className="text-lg text-gray-300">"The attention to detail in the UI and the overall developer experience is outstanding. I was able to launch my product in record time, thanks to this amazing starter kit."</p>
                  <footer className="mt-6">
                    <div className="flex items-center justify-center">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="Avatar"/>
                        <div>
                            <p className="font-semibold text-gray-100">John Doe</p>
                            <p className="text-sm text-gray-400">CEO of DevWorks</p>
                        </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 px-4 sm:px-6 lg:px-8 mt-20 border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <Feather className="w-7 h-7 text-indigo-400" />
                <span className="text-xl font-bold text-gray-100">LaunchMVP</span>
              </div>
              <p className="mt-2 text-gray-400">The fastest way to go from idea to launch.</p>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} LaunchMVP, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
