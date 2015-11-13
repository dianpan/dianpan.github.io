---
layout: default
title: Blog
permalink: /blog/
---

<!-- <div class="home">

  <h1 class="page-heading">Recent posts:</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div> -->

<div>
  <img class="img" src="/imgs/IMG_35492.jpg">
  <br>
</div>

<h4 class="center-text">A fun little blog documenting my transition from marketing to full stack development.
</h4>


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

