import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";

const whatsapp = "https://chat.whatsapp.com/Dy7lky6MPzMCQun95YKOyc?s=cl&p=a&ilr=4&iam=2";

export default function ProduitsPage() {
  return (
    <main className="products-page">
      <header className="products-header">
        <div className="products-nav">
          <Link className="products-brand" href="/">
            <span className="products-brand-mark">D</span>
            <span>DAH-YAMONHOUN<small>COVE · Produits traditionnels</small></span>
          </Link>
          <Link className="back-home" href="/"><ArrowLeft size={16} /> Retour à l’accueil</Link>
        </div>
      </header>

      <section className="products-intro">
        <span className="products-kicker">LA BOUTIQUE · DAH-YAMONHOUN COVE</span>
        <h1>Nos produits <em>traditionnels</em></h1>
        <p>Découvrez les produits présentés et contactez-nous pour obtenir des informations complémentaires.</p>
      </section>

      <section className="product-list">
        <article className="product-card">
          <div className="product-photo-placeholder" role="img" aria-label="Emplacement réservé à la photo du savon DJOGBÉ">
            <ShoppingBag size={42} strokeWidth={1.2} />
            <strong>Photo du produit</strong>
            <span>Emplacement réservé — photo à ajouter</span>
            <small>Fichier prévu : <code>public/produits/savon-djogbe.jpg</code></small>
          </div>
          <div className="product-details">
            <span className="product-number">PRODUIT 01 · SAVOIR-FAIRE TRADITIONNEL</span>
            <h2>Savon « DJOGBÉ »</h2>
            <p className="product-subtitle">Accompagné de parfum et d’une bague préparée</p>
            <div className="product-description">
              <p>Ce produit est présenté dans la tradition comme un accompagnement symbolique associé à la chance et à la prospérité.</p>
              <p className="product-claim">Présentation annoncée : « Ravive la chance et ramène beaucoup d’argent » et « Faites beaucoup d’argent pour peu d’effort fourni ».</p>
            </div>
            <div className="product-bottom">
              <div><span className="price-label">Prix annoncé</span><strong className="product-price">150.000 FCFA</strong></div>
              <a className="product-contact" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Demander des informations</a>
            </div>
            <p className="product-note">Les effets liés à la chance ou aux revenus ne sont pas garantis. Les informations sont communiquées avant toute décision d’achat.</p>
          </div>
        </article>
      </section>

      <footer className="products-footer">
        <span>DAH-YAMONHOUN COVE</span>
        <Link href="/">Retour à l’accueil</Link>
      </footer>
      <a className="float" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
    </main>
  );
}
