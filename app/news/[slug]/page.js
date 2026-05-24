import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { news } from "@/lib/news";
import { blurDataURL } from "@/lib/blur";

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const article = news.find((a) => a.slug === p.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Veloce Motors`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }) {
  const p = await params;
  const article = news.find((a) => a.slug === p.slug);
  if (!article) notFound();

  const related = news.filter((a) => a.slug !== p.slug).slice(0, 3);

  return (
    <main className="bg-[#F7F6F3] min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] w-full overflow-hidden pt-[72px] bg-[#111111]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,12,0.8)] via-[rgba(12,12,12,0.3)] to-transparent" />
        <div className="absolute bottom-10 left-6 md:left-12 z-10 max-w-2xl">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#C8932A] mb-3">
            {article.date}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-[#F0EDE8] leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <ScrollReveal>
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#9DA3AE] hover:text-[#111111] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </Link>
          </div>

          <p className="font-display text-xl md:text-2xl font-light text-[#111111] leading-relaxed mb-8 border-l-2 border-[#C8932A] pl-6">
            {article.excerpt}
          </p>

          <div className="prose prose-lg max-w-none text-[#444444] leading-relaxed space-y-5">
            <p>
              The acquisition marks a significant milestone for Veloce Motors, cementing our position
              as the West Coast&apos;s foremost destination for investment-grade exotic automobiles.
              Negotiations were conducted over a period of several months, with final agreements
              reached following an independent appraisal of the full collection.
            </p>
            <p>
              Each vehicle has been subject to a comprehensive inspection by our in-house technical
              team, with full documentation verified against factory records and independent
              provenance reports. All cars will be available for private viewing by appointment
              prior to their formal showroom debut.
            </p>
            <p>
              &ldquo;This is the kind of collection that comes to market perhaps once a decade,&rdquo;
              said Veloce Motors founder Marcus Elian. &ldquo;We are not treating it as inventory.
              We are treating it as a responsibility.&rdquo;
            </p>
            <p>
              Qualified clients interested in private viewings are invited to contact our team
              directly. Priority will be given to existing Veloce clients and known collectors.
              Full specifications and pricing will be published upon completion of preparation.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <ScrollReveal>
          <section className="bg-white border-t border-[#E5E5E5] px-6 md:px-12 py-16">
            <div className="max-w-7xl mx-auto">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-8">
                More from Veloce
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((a) => (
                  <Link key={a.id} href={`/news/${a.slug}`} className="group block">
                    <div className="relative aspect-video overflow-hidden bg-[#F7F7F7] mb-4">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="33vw"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#9DA3AE] mb-2">
                      {a.date}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-[#111111] leading-snug group-hover:text-[#C8932A] transition-colors">
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}
    </main>
  );
}
