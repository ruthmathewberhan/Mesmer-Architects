import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Design1 } from './components/Design1';
import { Design2 } from './components/Design2';
import { Design3 } from './components/Design3';

function DesignSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-black py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-600"></div>
            <h1>Architecture Portfolio Designs</h1>
          </div>
        </div>
      </header>

      {/* Design Selector */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6">Select a Design Style</h2>
            <p>Choose from three unique minimalistic yet modern portfolio website designs, each featuring all essential pages: Home, About Us, Contact, Gallery, and Portfolio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Design 1 */}
            <Link
              to="/Design1"
              className="group text-left border-2 border-black hover:border-red-600 transition-all overflow-hidden block"
            >
              <div className="aspect-square bg-white p-8 flex items-center justify-center border-b-2 border-black group-hover:border-red-600 transition-all">
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600"></div>
                    <div className="h-1 flex-1 bg-black"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-black"></div>
                    <div className="h-2 bg-black/30"></div>
                    <div className="h-2 bg-black/30 w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="aspect-square bg-black/20"></div>
                    <div className="aspect-square bg-black/20"></div>
                    <div className="aspect-square bg-black/20"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Design 1: Bold & Geometric</h3>
                <p className="mb-4">Strong typography, grid layouts, and bold red accents. Features sharp borders and structured compositions.</p>
                <div className="text-red-600 group-hover:gap-3 flex items-center gap-2 transition-all">
                  View Design →
                </div>
              </div>
            </Link>

            {/* Design 2 */}
            <Link
              to="/Design2"
              className="group text-left border-2 border-black hover:border-red-600 transition-all overflow-hidden block"
            >
              <div className="aspect-square bg-white p-8 flex items-center justify-center border-b-2 border-black group-hover:border-red-600 transition-all">
                <div className="space-y-6 w-full">
                  <div className="flex items-center justify-between">
                    <div className="h-1 w-12 bg-red-600"></div>
                    <div className="h-px flex-1 ml-4 bg-black/20"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-black w-2/3"></div>
                    <div className="h-px bg-black/10"></div>
                    <div className="h-2 bg-black/20"></div>
                    <div className="h-2 bg-black/20 w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="aspect-[4/5] bg-black/10"></div>
                    <div className="aspect-[4/5] bg-black/10"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Design 2: Elegant & Minimal</h3>
                <p className="mb-4">Generous whitespace, refined typography, and subtle red highlights. Clean lines and sophisticated layouts.</p>
                <div className="text-red-600 group-hover:gap-3 flex items-center gap-2 transition-all">
                  View Design →
                </div>
              </div>
            </Link>

            {/* Design 3 */}
            <Link
              to="/Design3"
              className="group text-left border-2 border-black hover:border-red-600 transition-all overflow-hidden block"
            >
              <div className="aspect-square bg-black p-8 flex items-center justify-center border-b-2 border-black group-hover:border-red-600 transition-all">
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-600"></div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 bg-white w-3/4"></div>
                    <div className="h-1 w-12 bg-red-600"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="col-span-2 aspect-video bg-white/20"></div>
                    <div className="aspect-square bg-white/20"></div>
                    <div className="aspect-square bg-white/20"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Design 3: Dynamic & Modern</h3>
                <p className="mb-4">Dark theme with asymmetric layouts and vibrant red accents. Interactive elements and bold visual hierarchy.</p>
                <div className="text-red-600 group-hover:gap-3 flex items-center gap-2 transition-all">
                  View Design →
                </div>
              </div>
            </Link>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto mt-20 pt-20 border-t border-black/10">
            <h3 className="mb-8 text-center">All Designs Include</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-red-600 mx-auto mb-3"></div>
                <p>Home Page</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-600 mx-auto mb-3"></div>
                <p>About Us</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-600 mx-auto mb-3"></div>
                <p>Portfolio</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-600 mx-auto mb-3"></div>
                <p>Gallery</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-600 mx-auto mb-3"></div>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p>Three minimalistic yet modern architectural portfolio designs using white, black, and red.</p>
        </div>
      </footer>
    </div>
  );
}

function Design1Wrapper() {
  const navigate = useNavigate();
  return <Design1 onBackToSelector={() => navigate('/')} />;
}

function Design2Wrapper() {
  const navigate = useNavigate();
  return <Design2 onBackToSelector={() => navigate('/')} />;
}

function Design3Wrapper() {
  const navigate = useNavigate();
  return <Design3 onBackToSelector={() => navigate('/')} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DesignSelector />} />
      <Route path="/Design1" element={<Design1Wrapper />} />
      <Route path="/Design2" element={<Design2Wrapper />} />
      <Route path="/Design3" element={<Design3Wrapper />} />
    </Routes>
  );
}
