$(document).ready(function(){
   

    
    $(".register-btn").click(function(){
        $(".register-content").show(); 
        $(".register-btn").addClass("bottom-line");
        $(".login-content").hide(); 
        $(".login-btn").removeClass("bottom-line");
    });

    $(".login-btn").click(function(){
        $(".register-content").hide(); 
        $(".register-btn").removeClass("bottom-line");
        $(".login-content").show(); 
        $(".login-btn").addClass("bottom-line");
    });


    $(".sm-register-btn").click(function(){
        $(".sm-register-content").show(); 
        $(".sm-register-btn").addClass("bottom-line");
        $(".sm-login-content").hide(); 
        $(".sm-login-btn").removeClass("bottom-line");
    });

    $(".sm-login-btn").click(function(){
        $(".sm-register-content").hide(); 
        $(".sm-register-btn").removeClass("bottom-line");
        $(".sm-login-content").show(); 
        $(".sm-login-btn").addClass("bottom-line");
    });

    $(".eye-slash-icon").click(function(){
        $(".password-input").attr("type","");
        $(".eye-slash-icon").hide();
        $(".eye-icon").show()
    });

    $(".eye-icon").click(function(){
        $(".password-input").attr("type","password");
        $(".eye-icon").hide();
        $(".eye-slash-icon").show()
    });

    $("#searchTableGame").on("keyup",function(){
        var value=$(this).val().toLowerCase();
        $("#searchTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
        })
    });

    $(function () {

        var goToCartIcon = function ($addTocartBtn) {
            var $cartIcon = $(".my-cart-icon");
            var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({ "position": "fixed", "z-index": "999" });

        }

        $('.my-cart-btn').myCart({
            classCartIcon: 'my-cart-icon',
            classCartBadge: 'my-cart-badge',
            affixCartIcon: true,
            checkoutCart: function (products) {
                $.each(products, function () {
                    console.log(this);
                });
            },
            clickOnAddToCart: function ($addTocart) {
                goToCartIcon($addTocart);
            },
            getDiscountPrice: function (products) {
                var total = 0;
                $.each(products, function () {
                    total += this.quantity * this.price;
                });
                return total * 0.1;
            },
            getFinalPrice: function (products) {
                var total = 0;
                $.each(products, function () {
                    total += this.quantity * this.price;
                });
                return total * 0.9;
            },
        });

    });

})