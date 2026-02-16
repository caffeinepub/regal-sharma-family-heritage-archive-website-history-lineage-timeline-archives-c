import { Outlet } from '@tanstack/react-router';
import TopNav from '../navigation/TopNav';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-parchment relative">
      {/* Parchment texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: 'url(/assets/generated/parchment-texture.dim_2048x2048.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '512px 512px',
        }}
      />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <TopNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
