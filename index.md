---
layout: default
---

<div class="pt-3">
    <div class="row pt-3">
        <h2 class="d-flex justify-content-center">Gallery</h2>
    </div>
    <div class="row pt-3 d-flex mx-auto align-items-center">
        {% for post in site.posts %}
            <div class="col-md-6 card-container">
                {% include postcard.html %}
            </div>
        {% endfor %}
    </div>
</div>