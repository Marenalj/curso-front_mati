<?php
/*
Plugin Name: status coloreado de entradas
Plugin URI: http://www.linkedin.com
Description: con este plugin se cambia el color de fondo en la administración de entradas según su estado.
Version: 1.0
Autor: Matilde Arenal
Author URI: http://www.linkedin.comLicense: GNU v2
*/
function posts_status_color() {
    ?>
    <style> 
   .status-draft { background: #FCE3F2 !important; }
   .status-pending { background: #FCFC85 !important; }
   .status-publish { /* por defecto */ }
   .status-future { background: #C6EBF5 !}important; }
   .status-private { background: #E7c784; }
   </style>
   <?php
   }
   add_action('admin_footer'.'posts_status_color');