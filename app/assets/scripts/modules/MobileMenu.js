import $ from 'jquery';

class MobileMenu {

    constructor() {

        this.siteHeader = $(".site-header");
        this.logo = $(".site-header__logo");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.name = $(".site-header__name");
        this.socialIcons = $(".social-icons");
        this.body = $("body");
        this.nav = $(".primary-nav");
        this.window = $(window);
        this.isMobileMenu = false;

        this.events();
        
       /*$(".site-header__menu-icon").click(function() {
          console.log("THe top right icon was clicked");
       });*/

       
       
    }
    events() {
      
        this.menuIcon.click(this.toggleTheMenu.bind(this));
       
    }
    
    toggleTheMenu() {
       this.menuContent.toggleClass("site-header__menu-content--is-visible");
       this.siteHeader.toggleClass("site-header--is-expanded");
       this.logo.toggleClass("site-header__logo--is-not-visible");
       this.body.toggleClass("body--no-scroll");
       /* this.name.toggleClass("site-header__name--is-visible");
        this.socialIcons.toggleClass("site-header__b-accent--is-visible"); */
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
       

       if (this.window.height() < 650) {
          this.socialIcons.css("top","80%");
          this.nav.css("margin-top", "30px");
       }


       if ( this.window.height() > 1000 ) {
        console.log("this is over 1000");
          this.socialIcons.css("top","60%");
         
       }
       /* this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");*/
      
    }

   
    
    
    
}


export default MobileMenu;