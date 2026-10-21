"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search, MessageCircle, Compass, Sparkles, Leaf, ShieldCheck } from "lucide-react";

const whatsapp = "https://chat.whatsapp.com/Dy7lky6MPzMCQun95YKOyc?s=cl&p=a&ilr=4&iam=2";

const prestations = [
  { id: "consultation", category: "ACCOMPAGNEMENT", group: "Accompagnement", title: "Consultation spirituelle", description: "", price: "", usage: "", icon: Compass, label: "ÉCOUTE & ÉCHANGE" },
  { id: "savon-djogbe", category: "SAVON TRADITIONNEL", group: "Produits", title: "Savon de chances", description: "Savon composé à base de connaissances traditionnelles ancestrales, conçu pour raviver votre chance.", price: "60 000 FCFA", usage: "Faire ses vœux avant de se laver avec le savon, tous les lundis matin et tous les vendredis matin, afin de voir ses vœux exaucés.", icon: Leaf, label: "SAVON DE CHANCES" },
  { id: "kit-djogbe-parfum-bague", category: "ENSEMBLE TRADITIONNEL", group: "Produits", title: 'Savon « DJOGBÉ » avec parfum et bague préparée', description: "Ensemble traditionnel composé du savon DJOGBÉ, d’un parfum et d’une bague préparée, présenté comme un accompagnement pour raviver la chance et attirer les opportunités financières.", price: "150 000 FCFA", usage: "Pour les informations sur la préparation et le mode d’utilisation, contactez-nous sur WhatsApp.", icon: Sparkles, label: "ENSEMBLE DJOGBÉ" },
  { id: "savon-commerce", category: "SAVON TRADITIONNEL", group: "Produits", title: "Savon de commerce", description: "Savon traditionnel présenté comme un accompagnement pour les activités commerciales.", price: "75 000 FCFA", usage: "Faites vos vœux avant de vous laver avec le savon chaque matin, en vous rendant à votre lieu de commerce.", icon: Leaf, label: "SAVON DE COMMERCE" },
  { id: "savon-assiyo-ylo", category: "SAVON TRADITIONNEL", group: "Produits", title: "Savon de chance et d’attraction clientèle (Assiyo / YLŌ)", description: "Savon à base de plantes rituelles et d’ingrédients spécifiques, destiné à attirer la clientèle, favoriser la prospérité financière et stimuler les ventes des commerçants.", price: "65 000 FCFA", usage: "Contactez-nous sur WhatsApp pour connaître le mode d’utilisation et les informations disponibles.", icon: Leaf, label: "CHANCE & CLIENTÈLE" },
  { id: "bague-protection", category: "BIJOU TRADITIONNEL", group: "Produits", title: "Bague de protection", description: "Bijou ou amulette imprégnée de prières et de traditions, conçu pour accompagner vos déplacements et symboliser la protection.", price: "25 000 FCFA", usage: "Contactez-nous sur WhatsApp pour connaître les détails et les précautions d’utilisation.", icon: ShieldCheck, label: "BAGUE DE PROTECTION" },
  { id: "savon-deblocage", category: "SAVON TRADITIONNEL", group: "Produits", title: "Savon de déblocage et de désenvoûtement", description: "Savon rituel utilisé dans les pratiques traditionnelles de purification, de désenvoûtement et pour accompagner les démarches visant à surmonter les blocages répétitifs.", price: "20 000 FCFA", usage: "Contactez-nous sur WhatsApp pour obtenir les informations d’utilisation.", icon: Leaf, label: "DÉBLOCAGE" },
  { id: "parfums-spirituels", category: "PARFUMS", group: "Produits", title: "Parfums spirituels de haute attirance", description: "Fragrances rituelles, notamment Bint El Sudan et Onction, appréciées dans les pratiques liées au charisme, aux rencontres et à la séduction.", price: "35 000 FCFA", usage: "Contactez-nous sur WhatsApp pour connaître les références disponibles et les conseils d’utilisation.", icon: Sparkles, label: "PARFUMS SPIRITUELS" },
  { id: "poudre-retour-envoyeur", category: "PRÉPARATION TRADITIONNELLE", group: "Produits", title: "Poudre « Retour à l’envoyeur »", description: "Préparation mystique associée aux pratiques traditionnelles de « retour à l’envoyeur », visant symboliquement à renvoyer les intentions malveillantes à leur source.", price: "25 000 FCFA", usage: "Demandez-nous les informations de composition et les précautions avant toute utilisation. Ne pas brûler ni appliquer sur la peau sans consignes fiables.", icon: Sparkles, label: "RETOUR À L’ENVOYEUR" },
  { id: "encens-resine", category: "ENCENS & RÉSINES", group: "Produits", title: "Encens de purification en résine (Oliban, Liban, Myrrhe)", description: "Résines naturelles à brûler pour parfumer l’atmosphère d’une maison ou d’un commerce et accompagner les rituels de purification.", price: "20 000 FCFA", usage: "Utilisez uniquement dans un espace ventilé, sur un support résistant à la chaleur et loin des enfants et matériaux inflammables.", icon: Sparkles, label: "ENCENS & RÉSINES" },
  { id: "bague-succes", category: "BIJOU TRADITIONNEL", group: "Produits", title: "Bague de succès, d’éloquence et de renommée", description: "Bague associée à la confiance en soi, à l’éloquence et à la renommée, notamment dans les activités professionnelles ou lors des examens.", price: "230 000 FCFA", usage: "Contactez-nous sur WhatsApp pour connaître les détails et les disponibilités.", icon: ShieldCheck, label: "SUCCÈS & RENOMMÉE" },
  { id: "plantes-ecorces-sacrees", category: "PLANTES TRADITIONNELLES", group: "Produits", title: "Plantes et écorces sacrées (feuilles de chance)", description: "Mélanges de feuilles et d’écorces traditionnelles destinés aux bains rituels ou à la confection d’amulettes de poche.", price: "19 000 FCFA", usage: "Demandez conseil avant utilisation. N’ingérez pas de plantes inconnues et évitez tout contact avec les yeux ou les muqueuses.", icon: Leaf, label: "PLANTES & ÉCORCES" },
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
                    {item.id === "consultation" ? <img src="/consultation-spirituelle.jpeg" alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "18px" }} /> : item.id === "savon-djogbe" ? <img src="/savon-de-chances.jpg" alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "18px" }} /> : item.id === "kit-djogbe-parfum-bague" ? <img src="/savon-djogbé.jpg" alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "18px" }} /> : item.id === "savon-commerce" ? <img src="/savon-de-commerce.jpg" alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "18px" }} /> : item.id === "bague-protection" ? <img src="/bague-de-protection.jpg" alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "18px" }} /> : <Icon size={43} strokeWidth={1.35} />}
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
