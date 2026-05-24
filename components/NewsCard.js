import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/blur";

export default function NewsCard({ article }) {
  return (
    <article className="flex-shrink-0 w-72 md:w-80 bg-white border border-[#E5E5E5] overflow-hidden group">
      <div className="relative h-48 overflow-hidden bg-[#F7F7F7]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="320px"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#9DA3AE] mb-2 font-body">
          {article.date}
        </p>
        <h3 className="font-display text-lg font-semibold text-[#111111] leading-tight mb-3">
          {article.title}
        </h3>
        <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="text-[11px] tracking-[0.18em] uppercase text-[#C8932A] border-b border-[#C8932A] pb-0.5 hover:text-[#111111] hover:border-[#111111] transition-colors duration-200"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
