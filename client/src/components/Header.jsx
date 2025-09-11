import { BrainCircuit } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full max-w-6xl flex flex-col sm:flex-row items-center gap-2 py-4 border-b border-gray-700" role="banner">
      <BrainCircuit className="w-10 h-10 text-white" aria-label="Brain Circuit logo" />
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-white">AI Mood Detector</h1>
        <p className="text-gray-400 text-xs">Real-time facial expression recognition</p>
      </div>
    </header>
  )
}

export default Header
