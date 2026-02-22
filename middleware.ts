import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple rate limiting using IP
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // 100 requests per minute per IP

export function middleware(request: NextRequest) {
  // Get client IP from headers (Next.js 15 compatible)
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  // Rate limiting
  const now = Date.now();
  const userLimit = rateLimit.get(ip);
  
  if (userLimit) {
    if (now < userLimit.resetTime) {
      if (userLimit.count >= MAX_REQUESTS) {
        // Too many requests
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((userLimit.resetTime - now) / 1000)),
          },
        });
      }
      userLimit.count++;
    } else {
      // Reset window
      rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }
  } else {
    // First request from this IP
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
  }
  
  // Clean up old entries (every 100 requests)
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimit.entries()) {
      if (now > value.resetTime) {
        rateLimit.delete(key);
      }
    }
  }
  
  // Security headers (additional to next.config.js)
  const response = NextResponse.next();
  
  // Strict Transport Security (HTTPS only)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );
  
  return response;
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
