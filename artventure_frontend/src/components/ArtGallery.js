import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * ArtGallery - shows a curated/interactive grid gallery of artworks.
 * Uses grid layout, image placeholders, and accent captions.
 */
function ArtGallery() {
  // Sample artwork data
  const sampleArtworks = [
    {
      title: "Midnight Grove",
      artist: "E. Stokes",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80"
    },
    {
      title: "Mountain Blossom",
      artist: "L. Hwang",
      src: "https://images.unsplash.com/photo-1509551388419-6a2f8e1d7795?w=400&q=80"
    },
    {
      title: "Abstract Neon",
      artist: "T. Kato",
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80"
    },
    {
      title: "Dawn Digital",
      artist: "R. Franco",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80"
    },
    {
      title: "Ink River",
      artist: "S. Abdalla",
      src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80"
    }
  ];

  return (
    <div
      style={{
        background: "rgba(18,14,30,0.92)",
        borderRadius: 16,
        boxShadow: "0 8px 32px #231c3140",
        padding: "2.5em 2em 2em",
        minHeight: 500
      }}>
      <h2 className="subtitle" style={{
        color: "var(--accent, #ffb347)",
        fontWeight: 700
      }}>🖼️ Art Gallery</h2>
      <div className="description" style={{ marginBottom: 26, fontSize: 16 }}>
        Explore creations by the ArtVenture community and inspire your next masterpiece.
      </div>
      <div className="gallery-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))",
        gap: "1.6em",
        marginTop: 8
      }}>
        {sampleArtworks.map((art, idx) => (
          <GalleryCard
            key={idx}
            img={art.src}
            title={art.title}
            artist={art.artist}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * GalleryCard renders a single artwork with hover/focus style.
 */
function GalleryCard({ img, title, artist }) {
  return (
    <div className="card"
      style={{
        background: "#181832",
        borderRadius: 12,
        boxShadow: "0 3px 16px #1d1d2d60",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "box-shadow 0.18s",
      }}>
      <div style={{
        width: "100%",
        aspectRatio: 1,
        overflow: "hidden"
      }}>
        <img src={img}
          alt={title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.22s",
            borderRadius: "12px 12px 0 0"
          }} />
      </div>
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "linear-gradient(0deg,#ffb347dd 0%,#ffb34700 80%)",
        color: "#161624",
        padding: "9px 1em 5px 1.2em",
        fontWeight: 700,
        fontSize: 16
      }}>
        {title} <span style={{ fontWeight: 400, fontSize: 13, color: "#744b19" }}>by {artist}</span>
      </div>
    </div>
  );
}

export default ArtGallery;
