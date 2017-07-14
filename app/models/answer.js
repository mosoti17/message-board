import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  solution:DS.attr(),
  post: DS.belongsTo('post', {asyc:true}),

});
