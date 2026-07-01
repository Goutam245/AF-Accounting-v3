import { Link } from "react-router-dom";
import { FadeIn } from "@/components/ui-bits";

export const PageHero = ({
  title,
  accent,
  sub,
  overline,
  crumb,
}: {
  title: string;
  accent?: string;
  sub?: string;
  image?: string;
  overline?: string;
  crumb?: string;
}) => (
  <section className="relative w-full bg-white border-b border-border overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% 15%, rgba(124,58,237,0.10) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(107,33,168,0.08) 0%, transparent 45%)",
      }}
    />
    <div className="relative z-10 text-center max-w-[820px] mx-auto px-5 md:px-6 pt-[120px] md:pt-[140px] pb-[60px] md:pb-[80px]">
      <FadeIn>
        {overline && <div className="overline mb-4 text-accent">{overline}</div>}
        <h1 className="!text-[28px] md:!text-5xl lg:!text-6xl text-navy">
          {title} {accent && <span className="accent-text">{accent}</span>}
        </h1>
        {sub && (
          <p className="mt-5 text-[15px] md:text-lg text-body max-w-[640px] mx-auto leading-relaxed">
            {sub}
          </p>
        )}
        {crumb && (
          <nav className="mt-6 text-[13px] text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2 text-accent">/</span>
            <span className="text-navy font-semibold">{crumb}</span>
          </nav>
        )}
      </FadeIn>
    </div>
  </section>
);

export default PageHero;
