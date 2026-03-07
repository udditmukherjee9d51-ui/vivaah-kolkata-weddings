interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = "" }: Props) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    <div className="section-divider mb-4" />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
