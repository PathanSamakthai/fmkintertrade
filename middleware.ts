import { NextResponse, type NextRequest } from "next/server";
import { LANGS, DEFAULT_LANG } from "@/lib/i18n";

/**
 * Locale routing (brief §13). Requests without a supported language prefix are
 * redirected under the default language (e.g. `/` → `/en`, `/foo` → `/en/foo`).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LANGS.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LANG}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, metadata routes and files with an extension.
  matcher: ["/((?!_next|api|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)"],
};
