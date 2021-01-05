---
layout: default
---

<div class="container-fluid pt-3">
    <div class="row pt-3 d-flex justify-content-center">
        <h2>Gallery</h2>
    </div>
    <div class="row pt-3 d-flex mx-auto align-items-center">
        {% for post in site.posts %}
            <div class="col-sm-6">
                {% include postcard.html %}
            </div>
        {% endfor %}
    </div>
</div>