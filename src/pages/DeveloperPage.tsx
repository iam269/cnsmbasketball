import { ExternalLink } from "lucide-react";
import LegalPageLayout from "@/components/LegalPageLayout";

const DeveloperPage = () => {
  return (
    <LegalPageLayout title="Dezvoltator">
      <p>
        Website-ul oficial CNSM Baschet a fost dezvoltat cu scopul de a oferi informații
        actualizate despre echipă, program, noutăți și activitățile clubului de baschet
        al Colegiului Național „Ștefan cel Mare” din Târgu Neamț.
      </p>

      <div className="card-glass p-6 not-prose">
        <p className="font-display text-xl font-bold uppercase text-accent mb-1">
          Ioniță Aurel Mihai
        </p>
        <p className="text-muted-foreground text-sm mb-4">Dezvoltator Web și Elev la Colegiul Național „Ștefan cel Mare”</p>
        <a
          href="https://www.itsiamdev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          www.itsiamdev.com
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p>
        Pentru întrebări tehnice legate de funcționarea site-ului, ne poți contacta prin
        secțiunea de contact sau direct prin portofoliul dezvoltatorului.
      </p>
    </LegalPageLayout>
  );
};

export default DeveloperPage;
