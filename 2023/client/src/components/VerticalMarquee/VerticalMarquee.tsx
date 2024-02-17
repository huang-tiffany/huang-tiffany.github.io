import "../VerticalMarquee/VerticalMarquee.css";

export interface VerticalMarqueeProps {
  marqueeText: JSX.Element;
}

export default function VerticalMarquee(props: VerticalMarqueeProps) {
  const { marqueeText } = props;

  const showInfo = () => {
    const info = document.querySelector(".piece-info");
    if (info) {
      info.scrollIntoView();
    }
  };

  return (
    <>
      <div className="vertical-marquee" onClick={() => showInfo()}>
        <div className="vertical-marquee-text-wrapper">
          {marqueeText}
          {marqueeText}
        </div>
        <hr />
      </div>
    </>
  );
}
