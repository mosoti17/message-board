import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);

    },
    update(post){
      var params ={
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
