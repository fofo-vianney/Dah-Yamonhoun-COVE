"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search, MessageCircle, Compass, Sparkles, Leaf, ShieldCheck } from "lucide-react";

const whatsapp = "https://chat.whatsapp.com/Dy7lky6MPzMCQun95YKOyc?s=cl&p=a&ilr=4&iam=2";

const prestations = [
  {
    id: "consultation",
    category: "ACCOMPAGNEMENT",
    title: "Consultation spirituelle",
    description: "Un temps d’écoute pour présenter votre demande et échanger dans le respect de vos convictions.",
    icon: Compass,
    label: "ÉCOUTE & ÉCHANGE",
  },
  {
    id: "traditions",
    category: "CULTURE & HÉRITAGE",
    title: "Traditions ancestrales",
    description: "Découvrez les traditions et les savoirs transmis, avec attention portée à leur diversité et à leur contexte culturel.",
    icon: Sparkles,
    label: "HÉRITAGE VIVANT",
  },
  {
    id: "produits",
    category: "INFORMATIONS",
    title: "Produits traditionnels",
    description: "Demandez des informations sur les produits proposés, leurs prix, leur utilisation et les précautions à connaître.",
    icon: Leaf,
    label: "PRODUITS TRADITIONNELS",
  },
  {
    id: "protection",
    category: "TRADITIONS",
    title: "Protection symbolique",
    description: "Échangez avec nous sur les objets et symboles de protection dans le cadre des traditions présentées.",
    icon: ShieldCheck,
    label: "SYMBOLES & TRADITIONS",
  },
];

export default function PrestationsPage() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    const q = search.trim().toLocaleLowerCase("fr");
    if (!q) return prestations;
    return prestations.filter((item) =>
      [item.title, item.description, item.category, item.label].some((value) =>
        value.toLocaleLowerCase("fr").includes(q)
      )
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
        <span className="catalog-eyebrow"><i /> NOS SERVICES <i /></span>
        <h1>Toutes nos <em>prestations</em></h1>
        <p>Découvrez nos domaines d’accompagnement et contactez-nous pour obtenir des informations complémentaires.</p>
      </section>

      <section className="services-catalog-search" aria-label="Rechercher une prestation">
        <Search size={21} />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Rechercher une prestation..."
          aria-label="Rechercher une prestation"
        />
      </section>

      <section className="services-catalog-list" aria-live="polite">
        <div className="services-catalog-count">
          {filtered.length} {filtered.length > 1 ? "prestations affichées" : "prestation affichée"}
        </div>
        {filtered.length ? (
          <div className="services-catalog-grid">
            {filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="services-catalog-card" key={item.id}>
                  <div className={`services-catalog-art services-catalog-art-${(index % 3) + 1}`}>
                    <span className="services-catalog-number">0{index + 1}</span>
                    <Icon size={43} strokeWidth={1.35} />
                    <span className="services-catalog-art-label">{item.label}</span>
                  </div>
                  <div className="services-catalog-card-body">
                    <span className="services-catalog-category">{item.category}</span>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a className="services-catalog-contact" href={whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={17} /> Demander des informations <ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="services-catalog-empty">Aucune prestation ne correspond à « {search} ». Essayez un autre mot-clé.</div>
        )}
      </section>

      <footer className="catalog-footer"><span>DAH-YAMONHOUN COVE</span><span>Respect · Transparence · Transmission</span></footer>
      <a className="float" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
    </main>
  );
}
