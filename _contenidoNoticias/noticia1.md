---
layout: contenido_noticias
idioma: es
permalink: /contenido1
---


{% assign visitas = site.data.visitas %}
{% assign contador_actual = visitas.contador | plus: 1 %}
{% assign visitas.contador = contador_actual %}
    
<h1>Contador de Visitas: {{ contador_actual }}</h1>
    
<!-- Agregamos prints para depurar -->
<p>Valor actual del contador: {{ visitas.contador }}</p>
<p>Contador incrementado en 2: {{ contador_actual }}</p>
