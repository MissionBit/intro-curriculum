---
title: Intro Web Subjects
---
{% for subject in site.data.subjects %}* [{{ subject.name }}](subjects/{{ subject.slug }}/)
{% endfor %}
