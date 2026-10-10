"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search, MessageCircle, Compass, Sparkles, Leaf, ShieldCheck } from "lucide-react";

const whatsapp = "https://chat.whatsapp.com/Dy7lky6MPzMCQun95YKOyc?s=cl&p=a&ilr=4&iam=2";

const prestations = [
  { id: "consultation", category: "ACCOMPAGNEMENT", group: "Accompagnement", title: "Consultation spirituelle", description: "", price: "", usage: "", icon: Compass, label: "ÉCOUTE & ÉCHANGE" },
  { id: "savon-djogbe", category: "SAVON TRADITIONNEL", group: "Produits", title: "Savon DJOGBÉ", description: "Savon composé à base de connaissances traditionnelles ancestrales, conçu pour raviver votre chance.", price: "60 000 FCFA", usage: "Faire ses vœux avant de se laver avec le savon, tous les lundis matin et tous les vendredis matin, afin de voir ses vœux exaucés.", icon: Leaf, label: "SAVON DJOGBÉ" },
];

export default function PrestationsPage() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    const q = search.trim().toLocaleLowerCase("fr");
    return prestations.filter((item) =>
      !q || [item.title, item.description, item.category, item.label, item.usage, item.group]
        .some((value) => value.toLocaleLowerCase("fr").includes(q))
    );
  }, [search]);

  return (
    <main className="catalog-page services-catalog-page">
      <header className="catalog-header">
        <div className="catalog-nav">
          <Link className="catalog-brand" href="/">
            <span className="catalog-monogram">D</span>
            <span className="catalog-brand-text">DAH-YAMONHOUN COVE<small>Spiritualité & traditions africaines</small></span>
          </Link>
          <Link className="catalog-back" href="/"><ArrowLeft size={16} /> Accueil</Link>
        </div>
      </header>

      <section className="catalog-heading services-catalog-heading">
        <span className="catalog-eyebrow"><i /> CATALOGUE <i /></span>
        <h1>Découvrez nos <em>prestations</em></h1>
        <p>Recherchez une prestation et contactez-nous pour obtenir des informations sur nos services et produits.</p>
      </section>

      <section className="services-catalog-search" aria-label="Rechercher une prestation">
        <Search size={21} />
        <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Rechercher une prestation..." aria-label="Rechercher une prestation" />
      </section>

      <section className="services-catalog-list" aria-live="polite">
        <div className="services-catalog-toolbar">
          <div className="services-catalog-count">{filtered.length} {filtered.length > 1 ? "résultats" : "résultat"}</div>
        </div>

        {filtered.length ? (
          <div className="services-catalog-grid">
            {filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="services-catalog-card" key={item.id}>
                  <div className={`services-catalog-art services-catalog-art-${(index % 3) + 1}`}>
                    <span className="services-catalog-number">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={43} strokeWidth={1.35} />
                    <span className="services-catalog-art-label">{item.label}</span>
                  </div>
                  <div className="services-catalog-card-body">
                    <span className="services-catalog-category">{item.category}</span>
                    <h2>{item.title}</h2>
                    <p className="service-description">{item.description || "Présentation à compléter avec les informations propres à Dah-Yamonhoun COVE."}</p>
                    <div className="service-detail-placeholder"><span>Prix</span><strong>{item.price || "À préciser"}</strong></div>
                    <div className="service-usage"><strong>Informations pratiques</strong><p>{item.usage || "Les détails seront ajoutés avant publication."}</p></div>
                    <a className="services-catalog-contact" href={whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={17} /> Demander des informations <ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="services-catalog-empty">Aucun résultat pour « {search} » dans cette rubrique. Essayez un autre mot-clé.</div>
        )}
      </section>

      <footer className="catalog-footer"><span>DAH-YAMONHOUN COVE</span><span>Respect · Transparence · Transmission</span></footer>
      <a className="float" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
    </main>
  );
}
