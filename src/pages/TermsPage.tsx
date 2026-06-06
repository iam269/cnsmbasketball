import LegalPageLayout from "@/components/LegalPageLayout";

const TermsPage = () => {
  return (
    <LegalPageLayout title="Termeni și Condiții">
      <p>
        Ultima actualizare: iunie 2026. Prin accesarea și utilizarea website-ului CNSM
        Baschet, acceptați termenii și condițiile de mai jos.
      </p>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          1. Scopul site-ului
        </h2>
        <p>
          Acest website are rol informativ și promovează activitățile echipei de baschet
          a Colegiului Național „Ștefan cel Mare” din Târgu Neamț. Conținutul este
          furnizat cu titlu general și poate fi modificat fără notificare prealabilă.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          2. Proprietate intelectuală
        </h2>
        <p>
          Textele, imaginile, logo-urile și materialele de pe site aparțin CNSM Baschet
          sau partenerilor săi și sunt protejate de legislația privind drepturile de autor.
          Reproducerea fără acord scris este interzisă.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          3. Utilizare acceptabilă
        </h2>
        <p>
          Utilizatorii se obligă să nu folosească site-ul în moduri care pot deteriora,
          dezactiva sau suprasolicita serverele, sau care încalcă drepturile altor persoane.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          4. Limitarea răspunderii
        </h2>
        <p>
          CNSM Baschet nu garantează că informațiile de pe site sunt complete, actuale sau
          lipsite de erori. Nu ne asumăm răspunderea pentru eventuale daune rezultate din
          utilizarea conținutului publicat.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          5. Link-uri externe
        </h2>
        <p>
          Site-ul poate conține link-uri către website-uri terțe. Nu suntem responsabili
          pentru conținutul sau politicile acelor site-uri.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          6. Legea aplicabilă
        </h2>
        <p>
          Acești termeni sunt guvernați de legislația română. Orice litigiu va fi soluționat
          de instanțele competente din România.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default TermsPage;
