(function(){
  const sold=window.STAG_SOLD||[];

  const trust=document.querySelector(".trust-strip");
  if(trust&&!document.querySelector("#available-stock")){
    const s=document.createElement("section");
    s.id="available-stock";
    s.className="sg-available-banner";
    s.innerHTML='      <div class="sg-shell sg-banner-grid">        <div class="sg-banner-copy">          <p class="sg-kicker">Current collection</p>          <h2>Furniture ready for its next home.</h2>          <p>Explore our currently available restored vintage furniture, including Stag Minstrel pieces and one-off restorations.</p>          <p class="sg-banner-delivery">Prices exclude delivery. UK delivery is available and quoted separately based on location.</p>          <a class="sg-btn sg-primary" href="/available/">View Available Furniture</a>        </div>        <div class="sg-banner-media" aria-hidden="true">          <img class="sg-banner-image sg-banner-image-main" src="/assets/available/aubergine-bedroom-collection.webp" alt="">          <img class="sg-banner-image sg-banner-image-accent" src="/assets/available/forest-green-tallboy.jpg" alt="">        </div>      </div>';
    trust.insertAdjacentElement("afterend",s);
  }

  function soldCard(p){
    return '<article class="sg-card"><div class="sg-media"><span class="sg-sold-badge">SOLD</span>'+(p.image?'<img src="'+p.image+'" alt="'+p.name+'" loading="lazy">':'<div class="sg-image-pending">Product photo on Etsy</div>')+'</div><div class="sg-copy"><p class="sg-cat">'+p.category+'</p><h3>'+p.name+'</h3><p class="sg-desc">'+p.short+'</p><div class="sg-actions"><a class="sg-btn sg-primary" href="/contact.html?product='+encodeURIComponent(p.name)+'&type=Furniture%20enquiry">Enquire about similar</a></div></div></article>';
  }

  const anchor=document.querySelector("#restoration");
  if(anchor&&sold.length&&!document.querySelector("#recently-sold")){
    const s=document.createElement("section");
    s.id="recently-sold";
    s.className="sg-commerce sg-sold";
    s.innerHTML='<div class="sg-shell"><div class="sg-intro"><p class="sg-kicker">Previous restorations</p><h2>Recently Sold</h2><p>Seen something you love? We regularly source and restore Stag and other quality vintage furniture.</p></div><div class="sg-grid">'+sold.slice(0,3).map(soldCard).join("")+'</div></div>';
    anchor.parentNode.insertBefore(s,anchor);
  }
})();
/* deployment-trigger-2026-09-23 */
