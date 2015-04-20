jQuery(document).ready(function($){

	/**
     * [fake place holder function]
     * @param  {[Object]} $        [jQuery reference]
     * @param  {[Object]} selector [jQuery alternative reference]
     * @return {[String]}          [css jQuery selector]
     */
    (function($, selector) {

        var fakePlaceholderElements = $(selector);

        fakePlaceholderElements.each(function(i, el) {

            $el = $(el);
            $el.data("placeholderValue", $el.val());


            $el.focus(function() {

                $this = $(this);

                if ($this.val() === $this.data("placeholderValue")) {
                    $this.val("");
                }

            });

            $el.blur(function() {

                $this = $(this);

                if ($.trim($this.val()) === "") {
                    $this.val($this.data("placeholderValue"));
                }

            });

        });

    })($ || jQuery, ".fake-placeholder");
    
});