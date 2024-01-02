import "../VerticalMarquee/VerticalMarquee.css";

export interface VerticalMarqueeProps {
  marqueeText: JSX.Element;
}

export default function VerticalMarquee(props: VerticalMarqueeProps) {
  const { marqueeText } = props;
  return (
    <>
      <div className="vertical-marquee">
        <div className="vertical-marquee-text-wrapper">
          {marqueeText}
          {marqueeText}
        </div>
        <hr />
      </div>
    </>
  );
}
