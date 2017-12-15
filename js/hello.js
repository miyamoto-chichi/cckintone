(function () {
    "use strict";
    kintone.events.on('app.record.detail.show', function (event) {
       window.alert('Hi, my name is cloud9.');
    });
})();