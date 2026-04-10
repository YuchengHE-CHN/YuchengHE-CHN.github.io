---
permalink: /
title: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% assign featured_publications = site.publications | where: "featured", true | sort: "date" | reverse %}

<div class="landing-page">
  <section class="landing-hero">
    <p class="landing-eyebrow">PhD Student, HKUST(GZ)</p>
    <h1 class="landing-title">Research on time, inequality, and everyday life</h1>
    <p class="landing-lead">
      I am a PhD Student in Urban Governance and Design at the Hong Kong University of Science and Technology (Guangzhou), supervised by Prof. Muzhi Zhou.
      My research examines how the temporal organization of daily life shapes inequality, well-being, and family systems in contemporary societies.
    </p>
    <p class="landing-lead">
      I work with large-scale time-use diary data and combine advanced quantitative and computational methods, including sequence analysis, social network analysis, causal inference, and computational social science approaches.
    </p>
    <div class="landing-actions">
      <a class="btn btn--primary" href="/publications/">View Publications</a>
      <a class="btn btn--inverse" href="/cv/">View CV</a>
    </div>
  </section>

  <section class="landing-section">
    <h2>Research Agenda</h2>
    <div class="landing-grid">
      <article class="landing-card">
        <h3>Time use, inequality, and well-being</h3>
        <p>
          I study how daily schedules, fragmented work time, and competing demands shape stress, subjective well-being, and unequal life chances.
          My work asks how time itself becomes a mechanism that distributes opportunities and constraints across social groups.
        </p>
      </article>
      <article class="landing-card">
        <h3>Gender, family, and life-course dynamics</h3>
        <p>
          My research focuses on how household labour, paid work, parenting, and family expectations interact across the life course.
          I am especially interested in gendered experiences of time pressure, dual-earner households, and intergenerational disadvantage.
        </p>
      </article>
      <article class="landing-card">
        <h3>Computational and quantitative methods for social policy questions</h3>
        <p>
          I use sequence analysis, social network analysis, causal inference, and computational social science to connect sociological theory with empirical policy questions.
          My aim is to produce research that is methodologically rigorous and substantively relevant to ageing, labour markets, and family systems.
        </p>
      </article>
    </div>
  </section>

  <section class="landing-section">
    <div class="landing-section-header">
      <h2>Selected Work</h2>
      <a href="/publications/">See all publications</a>
    </div>
    <div class="featured-publications">
      {% for post in featured_publications limit:3 %}
        <article class="featured-publication">
          <p class="featured-publication__meta">{{ post.venue }} · {{ post.date | date: "%Y" }}</p>
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | strip_newlines }}</p>
          <div class="publication-links">
            {% if post.paperurl %}<a class="publication-link" href="{{ post.paperurl }}">Paper</a>{% endif %}
            {% if post.slidesurl %}<a class="publication-link" href="{{ post.slidesurl }}">Slides</a>{% endif %}
            {% if post.bibtexurl %}<a class="publication-link" href="{{ post.bibtexurl }}">BibTeX</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section class="landing-section">
    <h2>Current Projects</h2>
    <p>
      My current work investigates dual-earner couples’ time-use networks, gendered experiences of time pressure and subjective well-being,
      the gig economy in urban China, and intergenerational processes of life-course disadvantage.
      Across these projects, I am interested in how everyday temporal arrangements accumulate into durable patterns of social inequality.
    </p>
  </section>

  <section class="landing-section landing-contact">
    <h2>Contact and Collaboration</h2>
    <p>
      I welcome conversations about time-use research, family and labour inequalities, computational social science, and interdisciplinary collaboration.
    </p>
    <ul class="landing-contact-list">
      <li><strong>Email:</strong> <a href="mailto:yucheng.peter.he@gmail.com">yucheng.peter.he@gmail.com</a></li>
      <li><strong>Google Scholar:</strong> <a href="https://scholar.google.com/citations?user=lGdOk7MAAAAJ&hl=en">Profile</a></li>
      <li><strong>ORCID:</strong> <a href="https://orcid.org/0009-0004-8752-5746">0009-0004-8752-5746</a></li>
      <li><strong>GitHub:</strong> <a href="https://github.com/YuchengHE-CHN">YuchengHE-CHN</a></li>
    </ul>
  </section>
</div>
