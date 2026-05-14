
# Bitácora de inspección HTTP

- Nombre del estudiante: Jhoymar Stiven Valoyes Castillo
- Programa académico: Ingeniería de Software
- Curso: Lenguajes Web
- Semana: Semana 1
- Fecha de elaboración: 10/05/2026

---

## 1. Sitio del Estado colombiano

### Datos generales

- URL analizada: https://www.dane.gov.co
- Fecha y hora de observación: 10/05/2026 - 14:30

- Código de estado del documento principal:
200 OK

- TTFB:
180 ms

- Tamaño total transferido:
2.4 MB

- Número total de peticiones:
75

- Redirecciones 3xx observadas:
301 de http a https

- Autoridad emisora del certificado TLS:
Google Trust Services

- Fecha de expiración del certificado TLS:
2026-12-15

### Capturas

![Panel Network sitio Estado](../red-gobierno.png)

![Certificado TLS sitio Estado](gov-tls.png)

### Observaciones

El sitio del Estado presenta una carga media con múltiples recursos como imágenes, scripts y estilos CSS. Se observa una redirección automática de HTTP a HTTPS, lo que mejora la seguridad. El tiempo de respuesta es aceptable y el número de peticiones es moderado.

---

## 2. Sitio universitario

### Datos generales

- URL analizada: https://www.eafit.edu.co
- Fecha y hora de observación: 10/05/2026 - 14:45

- Código de estado del documento principal:
200 OK

- TTFB:
120 ms

- Tamaño total transferido:
1.8 MB

- Número total de peticiones:
60

- Redirecciones 3xx observadas:
No se observaron redirecciones relevantes

- Autoridad emisora del certificado TLS:
DigiCert

- Fecha de expiración del certificado TLS:
2026-09-30

### Capturas

![Panel Network sitio universitario](red-unal.png)

![Certificado TLS sitio universitario](unal-tls.png)

### Observaciones

El sitio universitario es más liviano y rápido debido a menor cantidad de recursos pesados. Esto reduce el número de peticiones y mejora el tiempo de carga.

---

## 3. Sitio comercial colombiano

### Datos generales

- URL analizada: https://www.bancolombia.com
- Fecha y hora de observación: 10/05/2026 - 15:00

- Código de estado del documento principal:
200 OK

- TTFB:
250 ms

- Tamaño total transferido:
4.5 MB

- Número total de peticiones:
120

- Redirecciones 3xx observadas:
301 de http a https

- Autoridad emisora del certificado TLS:
DigiCert

- Fecha de expiración del certificado TLS:
2026-11-20

### Capturas

![Panel Network sitio comercial](red-bancolombia.png)

![Certificado TLS sitio comercial](bancolombia-tls.png)
### Observaciones

El sitio comercial es el más pesado debido a la cantidad de scripts, imágenes y servicios externos. Esto incrementa el número de peticiones y el tiempo de carga.

---

## Reflexión final

El sitio que cargó más rápido fue el universitario, debido a que tiene menos recursos y menor cantidad de peticiones. El sitio comercial fue el más lento por su alto contenido dinámico y uso de servicios externos.

En cuanto a redirecciones, todos los sitios utilizan principalmente redirecciones de HTTP a HTTPS para garantizar seguridad. Esto es un estándar en la web moderna.

Los certificados TLS no son emitidos por la misma autoridad en todos los casos. Dependiendo de la organización, se utilizan proveedores como DigiCert o Google Trust Services, lo que demuestra que la seguridad HTTPS es común, pero la infraestructura varía entre instituciones.

