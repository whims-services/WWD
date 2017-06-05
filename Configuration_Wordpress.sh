docker cp script/install_wp_cli_woocommerce.sh wordpress:/install_wp_cli_woocommerce.sh
docker exec -ti wordpress bash -c "chmod +x /install_wp_cli_woocommerce.sh"
docker exec -ti wordpress bash -c "cd / && ./install_wp_cli_woocommerce.sh"
chmod +x script/trad_woocommerce_fr.sh
./script/trad_woocommerce_fr.sh
