"use client";

const formats=[
  {n:"01",name:"Burger box",kind:"box",tone:"orange"},
  {n:"02",name:"Paper bag",kind:"bag",tone:"ink"},
  {n:"03",name:"Coffee cup",kind:"cup",tone:"paper"},
  {n:"04",name:"Food tray",kind:"tray",tone:"orange"},
  {n:"05",name:"Pizza box",kind:"pizza",tone:"paper"},
  {n:"06",name:"Sauce pot",kind:"pot",tone:"ink"},
];

export function ConceptPackagingWall(){
  return <div className="conceptWall" aria-label="Packaging concept visual board">
    <div className="conceptWallHead">
      <span>FAREFOLD / VISUAL RANGE 01</span>
      <small>Concept examples · custom development</small>
    </div>
    <div className="conceptWallGrid">
      {formats.map(x=><article className={`conceptTile tone-${x.tone}`} key={x.name}>
        <span className="conceptNo">{x.n}</span>
        <div className={`conceptObject object-${x.kind}`}><b>F</b></div>
        <div className="conceptTileMeta"><strong>{x.name}</strong><small>Custom format</small></div>
      </article>)}
    </div>
    <p className="conceptWallNote">Visuals are concept examples showing the kinds of packaging Farefold can develop around a restaurant brand.</p>
  </div>;
}
