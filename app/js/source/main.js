(function(){
  'use strict';

  function addColor(){
    $('#colors').prepend('<div class="color"></div');
  }

  function init(){
    $('#add-color').click(addColor);
  }

  $(document).ready(init);

})();
