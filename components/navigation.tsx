import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Sparkles } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-[1200px] mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold text-lg">GlowUp</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/dashboard" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link 
              href="/customers" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Customers
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link 
              href="/analytics" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Analytics
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button size="sm" className="h-9 px-4">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}