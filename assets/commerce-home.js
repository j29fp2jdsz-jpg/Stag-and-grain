(function(){
  const sold=window.STAG_SOLD||[];
  const GOOGLE_REVIEW_URL="";
  const GOOGLE_REVIEWS=[];

  const trust=document.querySelector(".trust-strip");
  if(trust&&!document.querySelector("#available-stock")){
    const s=document.createElement("section");
    s.id="available-stock";
    s.className="sg-available-banner";
    s.innerHTML='<div class="sg-shell sg-banner-grid"><div class="sg-banner-copy"><p class="sg-kicker">Current collection</p><h2>Furniture ready for its next home.</h2><p>Explore our currently available restored vintage furniture, including Stag Minstrel pieces and one-off restorations.</p><p class="sg-banner-delivery">Prices exclude delivery. UK delivery is available and quoted separately based on location.</p><a class="sg-btn sg-primary" href="/available/">View Available Furniture</a></div><div class="sg-banner-media"><img class="sg-banner-lifestyle" src="/assets/brand/stag-grain-current-collection-lifestyle.webp" alt="Restored Stag & Grain furniture styled in a warm heritage interior" loading="lazy"></div></div>';
    trust.insertAdjacentElement("afterend",s);
  }

  const available=document.querySelector("#available-stock");
  if(available&&!document.querySelector("#bespoke-stag-banner")){
    const b=document.createElement("section");
    b.id="bespoke-stag-banner";
    b.className="sg-bespoke-banner";
    b.innerHTML='<div class="sg-shell sg-bespoke-grid"><div class="sg-bespoke-copy"><p class="sg-kicker">Bespoke Stag</p><h2>Design your own Stag collection.</h2><p>Choose the pieces you need, select one of our signature finishes, or ask us about a colour of your own. From a single bedside cabinet to a coordinated bedroom collection, each piece is restored by hand in South Wales.</p><p class="sg-bespoke-reassure">Seven signature finishes · Bespoke colours available · Individual pieces or full collections</p><a class="sg-btn sg-bespoke-cta" href="/bespoke-stag/">Design Your Set</a></div><div class="sg-bespoke-media"><img src="/assets/hero/stag-grain-hero-black-oak.webp" alt="Stag & Grain restored bedroom furniture in black and natural timber" loading="lazy"></div></div>';
    available.insertAdjacentElement("afterend",b);
  }

  const restoration=document.querySelector("#restoration");
  if(restoration&&!document.querySelector("#craftsmanship")){
    const c=document.createElement("section");
    c.id="craftsmanship";
    c.className="sg-craft";
    c.innerHTML='<div class="sg-shell sg-craft-grid"><div class="sg-craft-copy"><p class="sg-kicker">Restored by hand in South Wales</p><h2>Good furniture deserves careful work.</h2><p>Each piece is prepared, restored and refinished with the aim of keeping the character that made it worth saving in the first place. Original proportions, useful timber details and the feel of the furniture matter just as much as the final colour.</p><a class="sg-text-link" href="#restoration">Discuss a restoration →</a></div><div class="sg-craft-images"><img src="/assets/available/aubergine-dressing-table.webp" alt="Restored Stag Minstrel dressing table by Stag & Grain" loading="lazy"><img src="/assets/available/aubergine-tallboy.webp" alt="Restored Stag Minstrel tallboy by Stag & Grain" loading="lazy"><img src="/assets/available/aubergine-bedside-pair.webp" alt="Restored matching Stag bedside cabinets by Stag & Grain" loading="lazy"></div></div>';
    restoration.insertAdjacentElement("beforebegin",c);
  }

  const contact=document.querySelector("#contact");
  if(contact&&!document.querySelector("#reviews")){
    const r=document.createElement("section");
    r.id="reviews";
    r.className="sg-reviews";
    const cards=GOOGLE_REVIEWS.length?'<div class="sg-review-grid">'+GOOGLE_REVIEWS.slice(0,3).map(x=>'<article class="sg-review-card"><div class="sg-stars" aria-label="'+x.rating+' out of 5 stars">★★★★★</div><blockquote>“'+x.text+'”</blockquote><p><strong>'+x.name+'</strong><span>Google review</span></p></article>').join("")+'</div>':'<div class="sg-review-empty"><p>Stag & Grain is building its customer review history. Genuine Google reviews will appear here as customers share their experience.</p></div>';
    const actions=(GOOGLE_REVIEW_URL?'<a class="sg-btn sg-primary" href="'+GOOGLE_REVIEW_URL+'" target="_blank" rel="noopener">Leave a Google Review</a>':'')+'<a class="sg-btn sg-secondary" href="/contact.html">Contact Stag & Grain</a>';
    r.innerHTML='<div class="sg-shell"><div class="sg-intro"><p class="sg-kicker">Customer stories</p><h2>Furniture made for another generation.</h2><p>Real feedback only. We never manufacture testimonials or review scores.</p></div>'+cards+'<div class="sg-review-actions">'+actions+'</div></div>';
    contact.insertAdjacentElement("beforebegin",r);
  }

  function soldCard(p){return '<article class="sg-card"><div class="sg-media"><span class="sg-sold-badge">SOLD</span>'+(p.image?'<img src="'+p.image+'" alt="'+p.name+'" loading="lazy">':'<div class="sg-image-pending">Product photo on Etsy</div>')+'</div><div class="sg-copy"><p class="sg-cat">'+p.category+'</p><h3>'+p.name+'</h3><div class="sg-actions"><a class="sg-btn sg-primary" href="/contact.html?product='+encodeURIComponent(p.name)+'&type=Furniture%20enquiry">Enquire about similar</a></div></div></article>'}
  const anchor=document.querySelector("#restoration");
  if(anchor&&sold.length&&!document.querySelector("#recently-sold")){
    const s=document.createElement("section");s.id="recently-sold";s.className="sg-commerce sg-sold";
    s.innerHTML='<div class="sg-shell"><div class="sg-intro"><p class="sg-kicker">Previous restorations</p><h2>Recently Sold</h2><p>Seen something you love? We regularly source and restore Stag and other quality vintage furniture.</p></div><div class="sg-grid">'+sold.slice(0,3).map(soldCard).join("")+'</div></div>';anchor.parentNode.insertBefore(s,anchor);
  }
})();