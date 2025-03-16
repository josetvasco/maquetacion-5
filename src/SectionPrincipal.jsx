import SectionNaranja from "./SectionNaranja"
import SectionRojo from "./SectionRojo"
import SectionVerde from "./SectionVerde"

function SectionPrincipal() {
  return ( 
    <div className="section-principal">
      <section>
        <SectionNaranja />
        <SectionVerde />
      </section>
      <section>
        <SectionRojo />
        <SectionRojo />
        <SectionRojo />
      </section>
    </div>
  )
}

export default SectionPrincipal