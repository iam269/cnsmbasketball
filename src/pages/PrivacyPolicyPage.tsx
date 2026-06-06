import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout title="Politica de Confidențialitate">
      <p>
        Ultima actualizare: iunie 2026. Această politică descrie modul în care CNSM Baschet
        tratează informațiile personale în legătură cu website-ul nostru.
      </p>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          1. Natura site-ului
        </h2>
        <p>
          Website-ul CNSM Baschet are rol exclusiv informativ. Nu colectăm date personale
          prin formulare, conturi de utilizator sau înregistrări online. Contactul cu echipa
          se face direct prin telefon sau rețelele sociale indicate în secțiunea Contact.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          2. Date colectate automat
        </h2>
        <p>
          La vizitarea site-ului, serverul de hosting poate înregistra automat date tehnice
          precum adresa IP, tipul de browser, sistemul de operare, paginile accesate și data
          accesului. Aceste informații sunt folosite exclusiv pentru funcționarea și
          securitatea site-ului și nu sunt utilizate pentru identificarea individuală a
          vizitatorilor.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          3. Servicii terțe
        </h2>
        <p>
          Site-ul integrează harta Google Maps în secțiunea Contact. Google poate colecta
          date conform propriei politici de confidențialitate atunci când vizualizați harta.
          Linkurile către Instagram și Facebook duc către platforme externe; odată ce părăsiți
          site-ul nostru, se aplică politicile acelor servicii.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          4. Stocare locală
        </h2>
        <p>
          Site-ul poate salva în browser preferința de temă (mod luminos/întunecat) folosind
          stocarea locală (localStorage). Aceste date rămân pe dispozitivul dumneavoastră și
          nu sunt transmise către noi.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          5. Drepturile dumneavoastră
        </h2>
        <p>
          Conform GDPR, aveți dreptul de acces, rectificare, ștergere, restricționare a
          prelucrării și opoziție în ceea ce privește datele personale. Pentru exercitarea
          acestor drepturi, ne puteți contacta telefonic la 0233 790 932 sau la sediul
          Colegiului Național „Ștefan cel Mare” din Târgu Neamț.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          6. Cookie-uri
        </h2>
        <p>
          Site-ul nu utilizează cookie-uri proprii de analiză sau marketing. Cookie-urile
          pot fi setate doar de serviciile terțe integrate (de exemplu, Google Maps). Puteți
          gestiona sau bloca cookie-urile din setările browserului.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-display font-bold uppercase text-foreground mb-3">
          7. Modificări
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
