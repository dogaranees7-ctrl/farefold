import Link from "next/link";

const references=[
  {
    title:"Snack box clamshells",
    type:"User-supplied packaging reference",
    image:"/images/snack-box-clamshell.webp",
    source:"Farefold reference collection",
    userSupplied:true
  },
  {
    title:"Cups + carton box",
    type:"Real packaging reference",
    image:"https://images.pexels.com/photos/8015739/pexels-photo-8015739.jpeg?cs=srgb&dl=pexels-cup-of-couple-8015739.jpg&fm=jpg",
    source:"Pexels · Cup of Couple",
    href:"https://www.pexels.com/photo/paper-takeout-cups-and-paper-box-8015739/"
  },
  {
    title:"Takeaway containers",
    type:"Real packaging reference",
    image:"https://images.pexels.com/photos/32424228/pexels-photo-32424228.jpeg?cs=srgb&dl=pexels-zehra-k-710717493-32424228.jpg&fm=jpg",
    source:"Pexels · Zehra K.",
    href:"https://www.pexels.com/photo/stack-of-labeled-brown-paper-food-containers-32424228/"
  },
  {
    title:"Coffee cup carrier",
    type:"Real packaging reference",
    image:"https://images.pexels.com/photos/7318858/pexels-photo-7318858.jpeg?cs=srgb&dl=pexels-angela-roma-7318858.jpg&fm=jpg",
    source:"Pexels · Angela Roma",
    href:"https://www.pexels.com/photo/cloe-up-shot-of-disposable-cups-7318858/"
  }
];

export function ReferencePackagingGallery(){
  return <section className="referenceGallery" aria-labelledby="reference-gallery-title">
    <div className="referenceGalleryHead">
      <div>
        <p className="eyebrow">Real packaging photography</p>
        <h2 id="reference-gallery-title">See the formats <i>in the real world.</i></h2>
      </div>
      <p>These photographs and supplied examples are visual references for the kinds of structures Farefold can develop. They are not presented as Farefold-made products or current stock.</p>
    </div>
    <div className="referenceGalleryGrid">
      {references.map((item)=>(
        <article className="referenceCard" key={item.title}>
          <div className="referenceImage" role="img" aria-label={item.title} style={{backgroundImage:`url("${item.image}")`}}>
            <span>{item.userSupplied ? "USER / REFERENCE" : "REAL / REFERENCE"}</span>
          </div>
          <div className="referenceMeta">
            <div><strong>{item.title}</strong><small>{item.type}</small></div>
            {item.href ? <Link href={item.href} target="_blank" rel="noreferrer">Source: {item.source} ↗</Link> : <small>{item.source}</small>}
          </div>
        </article>
      ))}
    </div>
  </section>;
}
