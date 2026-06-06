import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout title="Politica de Confidențialitate">
      <p>
        Ultima actualizare: iunie 2026. Această politică descrie modul în care CNSM Baschet
        colectează, utilizează și protejează informațiile personale ale vizitatorilor
        website-ului nostru.
      </p>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          1. Date colectate
        </h2>
        <p>
          Putem colecta informații pe care ni le furnizați voluntar prin formularul de
          contact (nume, adresă de e-mail, mesaj) și date tehnice generate automat la
          vizitarea site-ului (adresă IP, tip browser, pagini accesate).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          2. Scopul prelucrării
        </h2>
        <p>
          Datele sunt utilizate exclusiv pentru a răspunde solicitărilor primite, pentru
          îmbunătățirea experienței pe site și pentru comunicări legate de activitățile
          echipei de baschet CNSM.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          3. Stocare și securitate
        </h2>
        <p>
          Luăm măsuri rezonabile pentru a proteja datele personale împotriva accesului
          neautorizat, pierderii sau divulgării. Datele sunt păstrate doar atât timp cât
          este necesar pentru scopurile menționate.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          4. Drepturile dumneavoastră
        </h2>
        <p>
          Conform GDPR, aveți dreptul de acces, rectificare, ștergere, restricționare a
          prelucrării și opoziție. Pentru exercitarea acestor drepturi, contactați-ne prin
          secțiunea Contact de pe site.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          5. Cookie-uri
        </h2>
        <p>
          Site-ul poate utiliza cookie-uri esențiale pentru funcționare și cookie-uri de
          analiză pentru a înțelege modul de utilizare a paginilor. Puteți gestiona
          preferințele cookie-urilor din setările browserului.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          6. Modificări
        </h2>
        <p>
          Ne rezervăm dreptul de a actualiza această politică. Orice modificare va fi
          publicată pe această pagină, cu data actualizării.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
