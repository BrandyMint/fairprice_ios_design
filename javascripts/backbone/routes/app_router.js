!function(){var t,e={}.hasOwnProperty,n=function(t,n){function o(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return o.prototype=n.prototype,t.prototype=new o,t.__super__=n.prototype,t};Afisha.Routers.AppRouter=function(e){function o(){return t=o.__super__.constructor.apply(this,arguments)}return n(o,e),o.prototype.initialize=function(){return this.shows=this.fetchShows(),this.generateIndexView(this.shows)},o.prototype.generateIndexView=function(t){var e;return this.index_view||(this.index_view=new Afisha.Views.ShowsListView),e=this.index_view.render(t).el,$("@shows-list").html(e)},o.prototype.fetchShows=function(){var t;return t=new Afisha.Collections.ShowsCollection,t.fetch({async:!1}),t},o}(Backbone.Router)}.call(this);