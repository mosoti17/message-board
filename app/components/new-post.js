import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      this.set('addNewPost',true)
    },
    savePost(){
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
