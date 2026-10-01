import Link from "next/link";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";

const whatsapp = "https://chat.whatsapp.com/Dy7lky6MPzMCQun95YKOyc?s=cl&p=a&ilr=4&iam=2";

export default function ProduitsPage() {
  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <div className="catalog-nav">
          <Link className="catalog-brand" href="/">
            <span className="catalog-monogram">D</span>
            <span className="catalog-brand-text">DAH-YAMONHOUN COVE<small>Traditions & produits</small></span>
          </Link>
          <Link className="catalog-back" href="/"><ArrowLeft size={16} /> Accueil</Link>
        </div>
      </header>

      <section className="catalog-heading">
        <span className="catalog-eyebrow"><i /> LA BOUTIQUE TRADITIONNELLE <i /></span>
        <h1>Des produits choisis<br /><em>avec attention.</em></h1>
        <p>Parcourez notre sélection et contactez-nous pour en savoir plus sur chaque produit.</p>
      </section>

      <section className="catalog-content">
        <article className="catalog-product">
          <div className="catalog-image-panel">
            <div className="catalog-image-frame">
              <div className="catalog-image-placeholder">
                <span className="catalog-image-symbol"><Sparkles size={32} strokeWidth={1.2} /></span>
                <strong>Photo du savon DJOGBÉ</strong>
                <span>La photo du produit sera affichée ici</span>
              </div>
              <span className="catalog-image-tag">PRODUIT 01</span>
            </div>
            <p className="catalog-image-hint">Photo à ajouter : <code>public/produits/savon-djogbe.jpg</code></p>
          </div>

          <div className="catalog-product-info">
            <span className="catalog-category">SÉLECTION TRADITIONNELLE · N° 01</span>
            <h2>Savon <em>« DJOGBÉ »</em></h2>
            <p className="catalog-subtitle">Avec parfum et bague préparée</p>
            <div className="catalog-rule" />
            <p className="catalog-description">Un produit présenté dans une démarche traditionnelle, accompagné de parfum et d’une bague préparée.</p>
            <div className="catalog-benefit">
              <span>PRÉSENTATION DU PRODUIT</span>
              <p>« Ravive la chance et ramène beaucoup d’argent »</p>
              <p>« Faites beaucoup d’argent pour peu d’effort fourni »</p>
            </div>
            <div className="catalog-purchase">
              <div className="catalog-price"><small>PRIX</small><strong>150.000 <span>FCFA</span></strong></div>
              <a className="catalog-contact" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Demander des informations <span>↗</span></a>
            </div>
            <p className="catalog-disclaimer">Les promesses liées à la chance et aux revenus ne constituent pas un résultat garanti.</p>
          </div>
        </article>
      </section>

      <footer className="catalog-footer"><span>DAH-YAMONHOUN COVE</span><span>Respect · Transparence · Transmission</span></footer>
      <a className="float" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
    </main>
  );
}
