jQuery(function ($) {
  var toISOString = Date.prototype.toISOString || function () {
    function pad(n) { return n < 10 ? '0' + n : n; }
    return this.getUTCFullYear() + '-'
        + pad(this.getUTCMonth() + 1) + '-'
            + pad(this.getUTCDate()) + 'T'
                + pad(this.getUTCHours()) + ':'
                    + pad(this.getUTCMinutes()) + ':'
                        + pad(this.getUTCSeconds()) + 'Z';
  };
  // This should be moved to some server-side 
  // Please note that you would *never* expose the consumer secret in this way
  // for an ordinary application. For the purposes of convenience for this demo, we do.
  var demoConsumerKey = 'd4c108122b51434aab1d27ad4ebd2b02';
  var demoConsumerSecret = '36977e7b-be7f-4b57-a9eb-9617e4740b6a';
});
