
Feature: Desplazarse fácilmente entre las secciones de la página web
 Como usuario, quiero desplazarme entre las secciones de la página web para observar información relevante sobre mi progreso nutricional
 
Scenario: Desplazamiento correcto
 Given que el usuario se encuentra en el landing page
  Y quiera dirigirse a otra sección de la plataforma
  When seleccione el botón correspondiente al titulo de la sección a dirigirse
  Then lo redirigirá a la sección escogida

#------------------------------------------------------------------------------------------------------
Feature: Sección de servicios y beneficios que proporcionará la empresa
 Como usuario, quiero ver que beneficios me proporcionará la página web para establecer si el servicio me es de utilidad. 
 
Scenario: Visualización correcta
 Given que el usuario está ubicado en el landing page
  When seleccione la sección "Herramientas"
  Then el sistema mostrará la sección sobre los servicios que brinda la empresa.

Scenario: Visualización incorrecta
 Given que el usuario está ubicado en el landing page
  When seleccione otra sección que no sea "Herramientas"
  Then el sistema no mostrará los servicios que brinda la empresa.

#------------------------------------------------------------------------------------------------------
Feature: Diseño web Adaptable
Como usuario, quiero ser capaz de utilizar la página web en distintos dispositivos para entablar un uso multiplataforma
Scenario: Visualización de la página web en un celular
 Given que el usuario ingresa al browser predeterminado
  When ingrese a la página web
  Y utilize la herramienta "Inspeccionar"
  Y establezca un modelo determinado en la opción "Responsible"
  Then podrá observar de manera comprimida el lading page sin presencia de errores.



