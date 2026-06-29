import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import PageTransition from '@components/layout/PageTransition';
import Button from '@components/ui/Button';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 rounded-[24px] bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-10 h-10 text-primary" />
          </div>

          <h1 className="font-sora text-6xl md:text-8xl font-bold text-gradient mb-4">
            404
          </h1>
          <h2 className="font-sora text-2xl md:text-3xl font-semibold text-text mb-4">
            Page Not Found
          </h2>
          <p className="text-muted text-base md:text-lg max-w-md mx-auto mb-8">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link to="/">
            <Button size="lg">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
