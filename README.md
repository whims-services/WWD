# WWD

"Wordpress + WP CLI", "Woocommerce" , "Mysql" and "phpMyAdmin" with Docker 

 # Prerequisites 
	
* [Docker](https://docs.docker.com/engine/installation/) + [compose](https://docs.docker.com/compose/install/)
	
* [node](https://nodejs.org/en/download/) + [npm](https://docs.npmjs.com/getting-started/installing-node) + [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) and [chromedriver](https://www.npmjs.com/package/chromedriver) 

Download and Unzip the package which contain the following files :

* **docker-compose.yml** - Deploy 3 containers "Wordpress, MySql, phpMyAdmin"

* **Configuration_wordpress.sh** - Install WP-CLI and Woocomerce in the wordpress container

* **script/** - Scripts used by "Configuration_wordpress.sh"

* **trad/** - Folder for translate Woocomerce in french 

* **node_module** - Folder which contain needed node modules

* **pre_remplissage.js** - Auto complete wordpress install

# How it works ! 

1 - Launch the containers with compose

	docker-compose up -d

2 - Complete install wordpress at http://localhost:8080 

	 node pre_remplissage.js

3 - Install WP-CLI and Woocommerce then translate it to french language

	./Configuration_Wordpress.sh

———————

Enjoy !!!
