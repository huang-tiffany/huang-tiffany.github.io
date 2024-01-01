import "../Marquee/Marquee.css";

export interface MarqueeProps {
  marqueeText: JSX.Element;
}

export default function Marquee(props: MarqueeProps) {
  const { marqueeText } = props;
  return (
    <div className="marquee">
      <div className="marquee-text-wrapper">
        {marqueeText}
        {marqueeText}
      </div>
    </div>
  );
}
