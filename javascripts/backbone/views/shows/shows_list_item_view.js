!function(){var e,t={}.hasOwnProperty,n=function(e,n){function r(){this.constructor=e}for(var i in n)t.call(n,i)&&(e[i]=n[i]);return r.prototype=n.prototype,e.prototype=new r,e.__super__=n.prototype,e};Afisha.Views.ShowsListItemView=function(t){function r(){return e=r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.tagName="li",r.prototype.className="shows-list-item",r.prototype.templateHelpers=function(){return _.extend(this.templateHelpers)},r.prototype.events={click:"_click"},r.prototype.modelEvents={change:"render"},r.prototype.onRender=function(){},r.prototype.getTemplate=function(){return JST["shows/show_list_item"]},r.prototype._click=function(){return alert("movie click")},r}(Marionette.ItemView)}.call(this);