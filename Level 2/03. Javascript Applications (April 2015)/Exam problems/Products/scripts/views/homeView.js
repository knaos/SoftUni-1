var app = app || {};
app.views = app.views || {};

app.views.homeView = (function(){
    function homeView(selector, data) {
        var defer = Q.defer();

        $.get('templates/home.html', function(template) {
            var temp = Handlebars.compile(template);
            var html = temp(data);
            $(selector).html(html);
        }).success(function(_data) {
            defer.resolve(_data);
        }).error(function(error) {
            defer.reject(error);
        });

        return defer.promise;
    }

    return {
        load: function (selector, data) {
            return homeView(selector, data);
        }
    }
}());