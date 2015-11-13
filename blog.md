---
layout: default
title: Blog
permalink: /blog/
---

<div class="home">
  <h1 class="page-heading center-text">Recent Posts</h1>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <p>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          {{ post.excerpt }}
        </p>
      </li>
    {% endfor %}
  </ul>
</div>

