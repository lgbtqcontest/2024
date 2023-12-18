import "./pm.css";

const PartnersMarquee = () => {
  const partners = [
    "public/aa.png",
    "public/av.png",
    "public/mac.png",
    "public/nike.png",
    "public/phd.png",
    "public/lv.png",
    // "public/cl.png",
    // "public/gs.png",
    // "public/mab.png",
    // "public/png.png",
    // "public/sh.png",
    // "public/tbx.png",
    // "public/tg.png",
    // "public/wg.png",
  ];
  return (
    <div className="partners">
      <h1 className="p-title">Our Partners</h1>
      <div className="p-img">
        {partners.map((p, key) => (
          <img src={p} key={key} />
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
