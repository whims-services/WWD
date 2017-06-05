// Récupération de "Selenium-webdriver"
var webdriver = require('selenium-webdriver');
// Récuperation de "chromedriver"
var ch = require('chromedriver');
// Alias "until" 
var until = webdriver.until;
// Alias "by" 
var by = webdriver.By;

// Déclaration de l'objet "driver"
driver = new webdriver.Builder()
   .withCapabilities(webdriver.Capabilities.chrome())
   .build();

// Ouverture de wordpress
driver.get('localhost:8080/wp-admin/install.php');
// Récupération & Sélection de la langue "Français"
driver.findElement(by.xpath("//select[@id='language']")).sendKeys('Français');
// Clic sur continuer
driver.findElement(by.id('language-continue')).click();
// Titre du site
driver.findElement(by.id('weblog_title')).sendKeys("Mon Site");
// Administrateur du site
driver.findElement(by.id('user_login')).sendKeys("admin");
// Clean mot de passe
driver.findElement(by.id('pass1-text')).clear();
// Mot de passe de l'adminiqtrateur
driver.findElement(by.id('pass1-text')).sendKeys("admin");
// Clic sur accepter le mot de passe faible
driver.findElement(by.name('pw_weak')).click();
// Adresse email de l'administrateur
driver.findElement(by.id('admin_email')).sendKeys("mail@mail.com");
// Clic ne pas indexer ce site
driver.findElement(by.id('blog_public')).click();
// Valider le formulaire
driver.findElement(by.id('submit')).click();
// Lancer le site web
driver.findElement(by.xpath("//a[contains(text(),'Se connecter')]")).click();
// Se Connecter ( Login )
driver.findElement(by.id('user_login')).sendKeys("admin");
// Se connecter ( Pass )
driver.findElement(by.id('user_pass')).sendKeys("admin");
// Connexion
driver.findElement(by.id('wp-submit')).click();
// Close browser
driver.close();
