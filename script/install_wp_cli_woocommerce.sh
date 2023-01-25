#!/bin/bash
#title           :Install_wp_cli_woocommerce.sh
#description     :Installation de WP CLI + plugin WooCommerce.
#author		 :Dominique Tauzin
#date            :01/06/2017
#version         :0.1  
#==============================================================================
echo "*******************************************"
echo "*** Script de configuration  Wordpress  ***"
echo "*******************************************"
echo " "
echo " "
echo " ------------------------------ " 
echo " 0 - Téléchargement de WP CLI   "
echo " ------------------------------ "
echo " "
echo " " 
cd /home/
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp
chmod +x /usr/local/bin/wp
echo " "
echo " WP CLI OK ! "
echo " " 
echo " ----------------------------------------------- " 
echo " 1 - Installation et activation de WooCommerce   "
echo " ----------------------------------------------- "
cd /var/www/html/
mkdir -p wp-content/languages/plugins
wp plugin install woocommerce --allow-root
wp plugin activate woocommerce --allow-root
wp core install
echo " "
echo " WooCommerce Ok ! "
echo " "  
echo " -------------------- "
echo " !!! GG Well Play !!! "
echo " -------------------- "

exit 0
